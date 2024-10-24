import Image from "next/image";
import AppButton from "../ui/AppButton";
import { useState } from "react";

type TBook = {
  _id: number;
  title: string;
  author: string;
  price: number;
  rating: number;
  image: string;
  description: string;
  category: string;
};

const BookCard = ({
  _id,
  title,
  author,
  price,
  rating,
  description,
  category,
}: TBook) => {
  const [isOwner, setIsOwner] = useState<boolean>(false);

  return (
    <div className="relative bg-white rounded-lg shadow-lg w-[350px] p-5 text-center cursor-pointer transition-transform transform hover:scale-105 hover:text-primary duration-300">
      <Image
        height={350}
        width={350}
        src="/assets/book.png"
        alt="Book cover"
        className="flex items-center rounded-md transition-opacity duration-300 hover:opacity-90"
      />
      <div className="mt-5 space-y-3">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-lg">Rating: {rating}</p>
        <p className="text-lg">Author: {author}</p>
        <p className="text-lg">Category: {category}</p>
        <p className="text-lg font-bold">Price: ${price}</p>
        <div className={`${isOwner ? "flex gap-5 justify-center" : ""} mt-5`}>
          <AppButton
            label="Book Details"
            className="mt-8 transition-transform transform hover:scale-110"
            href={`/books/bookdetail/${_id}`}
          />
          {isOwner && (
            <AppButton
              label="Edit Book"
              variant="outlined"
              className="mt-8 transition-transform transform hover:scale-110"
              href={`/books/edit-book/${_id}`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
