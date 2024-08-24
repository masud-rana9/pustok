import AddToBookCard from "@/components/shared/AddToCard";
import AppButton from "@/components/ui/AppButton";
import Image from "next/image";
import { MdDelete } from "react-icons/md";

const AddToCard = () => {
  const booksData = [
    {
      id: 1,
      name: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      image: "/assets/book1.png",
      quantity: 2,
      price: 15.99,
    },
    {
      id: 1,
      name: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      image: "/assets/book1.png",
      quantity: 2,
      price: 15.99,
    },
    {
      id: 2,
      name: "To Kill a Mockingbird",
      author: "Harper Lee",
      image: "/assets/book2.png",
      quantity: 1,
      price: 12.99,
    },
    {
      id: 2,
      name: "To Kill a Mockingbird",
      author: "Harper Lee",
      image: "/assets/book2.png",
      quantity: 1,
      price: 12.99,
    },
    // Add more book objects as needed
  ];

  return (
    <div className="container mx-auto my-40">
      <div className="flex  gap-10 ">
        <div className="bg-white rounded-md shadow-md border-t-2 border-green-700 mb-4 w-full">
          {booksData.map((book) => (
            <AddToBookCard key={book.id} book={book} />
          ))}
        </div>
        <div className=" bg-white p-10 rounded-md shadow-md border-t-2 border-green-700 w-[30%] ">
          <h1 className="text-4xl mb-10 border-b pb-5 font-semibold">
            Checkout Summary
          </h1>
          <div className="flex items-center  justify-between text-xl text-textColor mb-4">
            <p>Subtotal</p> <p>890 TK.</p>
          </div>
          <div className="flex items-center justify-between text-xl text-textColor mb-4">
            <p>Subtotal</p> <p>890 TK.</p>
          </div>
          <div className="flex items-center justify-between text-xl text-textColor mb-4">
            <p>Subtotal</p> <p>890 TK.</p>
          </div>
        </div>
      </div>
      <AppButton
        label="Procced To checkout"
        className=" mt-5"
        href="/order-and-pay"
      />
    </div>
  );
};

export default AddToCard;
