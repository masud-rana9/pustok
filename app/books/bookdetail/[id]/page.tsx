"use client";
import AppButton from "@/components/ui/AppButton";
import Image from "next/image";
import { useParams } from "next/navigation";
import useBooks from "@/hooks/useBooks";
import Link from "next/link";
import Loading from "./../../../../components/ui/Loading";

const BookDetailPage = () => {
  const { id } = useParams();
  const [books, loading] = useBooks();

  const book = books.find((book) => book._id === id);

  if (!book) {
    return (
      <p className="text-center text-2xl text-red-500 font-semibold">
        Book not found
      </p>
    );
  }

  if (loading) {
    return <h1 className="text-red-500 mt-40">Loading</h1>;
  }
  const relatedBooks = books.filter(
    (relatedBook) =>
      relatedBook.category === book.category && relatedBook._id !== book._id
  );

  return (
    <div className="container mx-auto mt-40 border-t-2 border-primary bg-white rounded-md shadow-lg p-10 flex gap-8 h-[70vh]">
      <div className="w-1/3">
        <Image
          width={400}
          height={100}
          src={"/assets/book.png"}
          alt={book.title}
          className="h-[55vh]  border shadow-lg p-3"
        />
      </div>
      <div className="space-y-3">
        <h2 className="text-3xl mb-2 font-medium text-primary">{book.title}</h2>
        <p className="text-xl text-textColor font-bold ">
          Author: {book.author}
        </p>
        <p className="text-xl text-textColor"> {book.category}</p>
        <h3 className="text-xl text-justify text-textColor mt-5">
          {book.description}
        </h3>
        <h3 className="text-xl mt-2 text-textColor">Price: ${book.price}</h3>
        <div className="flex items-center gap-5 ">
          <AppButton label="Add to Cart" href="/order-and-pay/add-to-card" />
          <AppButton label="Read" variant="outlined" />
        </div>
      </div>
      <div className="border-l-2 pl-5 w-1/3">
        <h1 className="text-3xl border-b-2 pb-2 text-primary font-medium">
          Related Books
        </h1>
        <div className="space-y-3">
          {relatedBooks.length > 0 ? (
            relatedBooks.map((relatedBook) => (
              <div key={relatedBook._id} className="border-b-2  py-3">
                <Link href={`/books/bookdetail/${relatedBook._id}`}>
                  <p className="text-textColor font-bold  cursor-pointer transition-colors duration-300 hover:text-primary">
                    # {relatedBook.title}
                  </p>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-textColor">No related books found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;
