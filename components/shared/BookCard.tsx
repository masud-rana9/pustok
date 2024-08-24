import Image from "next/image";
import AppButton from "../ui/AppButton";
import { useState } from "react";

type TBook = {
  id: number;
  title: string;
  author: string;
  price: number;
  rating: number;
  image: string;
  description: string;
  category: string;
};

const BookCard = ({
  id,
  title,
  author,
  price,
  rating,
  description,
  category,
}: TBook) => {
  const [isOwner, setIsOwner] = useState<boolean>(false);

  return (
    <div className=" bg-white rounded-md shadow-lg w-[350px] p-5 text-center cursor-pointer hover:bg-slate-100">
      <Image
        height={350}
        width={350}
        src="/assets/book.png"
        alt=""
        className="flex items-center rounded-md"
      />
      <div className="mt-5 space-y-3">
        <h2 className="text-2xl">{title}</h2>
        <p className="text-xl">Rating:{rating}</p>
        <p className="text-xl">Author:{author}</p>
        <p className="text-xl">Category:{category}</p>
        {/* <p className="text-2xl">Rating:{description}</p> */}
        <p className="text-xl">Price: ${price}</p>
        <div className={`${isOwner ? "flex gap-5" : ""} text-center`}>
          <AppButton
            label="Book Details"
            className="mt-8"
            href={`/books/bookdetail/${id}`}
          />
          {isOwner && (
            <AppButton
              label="Edit Books"
              variant="outlined"
              className="mt-8"
              href={`/books/edit-book/${id}`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
