import React from "react";
import Image from "next/image";
import { MdDelete } from "react-icons/md";

type TAddToCard = {
  book: any;
};
const AddToBookCard = ({ book }: TAddToCard) => {
  return (
    <div className="w-full flex items-center justify-between p-5 border-b-2 pb-4">
      <div className="flex gap-5">
        <Image
          alt={book.name}
          width={100}
          height={100}
          src="/assets/book.png"
        />
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-2xl">{book.name}</h2>
          <h3>{book.author}</h3>
          <div className="flex items-center gap-3">
            <MdDelete className="text-red-500 cursor-pointer" />
            <p className="text-blue-500 cursor-pointer">Wishlist</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <button className="p-4  bg-gray-200 rounded">-</button>
        <p className="border rounded-md p-4">{book.quantity}</p>
        <button className="p-4  bg-gray-200 rounded">+</button>
      </div>
      <div>Total: ${(book.quantity * book.price).toFixed(2)}</div>
    </div>
  );
};

export default AddToBookCard;
