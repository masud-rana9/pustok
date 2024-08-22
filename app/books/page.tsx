"use client";

import React from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CategoryTitle from "@/components/shared/CategoryTitle";
import BookCard from "@/components/shared/BookCard";

const Store = () => {
  const items = [
    {
      id: 1,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      price: 14.99,
      rating: 4.8,
      image: "https://example.com/images/the-silent-patient.jpg",
      description:
        "A psychological thriller about a woman who stops speaking after committing a crime.",
      category: "Thriller",
    },
    {
      id: 2,
      title: "Where the Crawdads Sing",
      author: "Delia Owens",
      price: 16.99,
      rating: 4.7,
      image: "https://example.com/images/where-the-crawdads-sing.jpg",
      description:
        "A mystery and coming-of-age novel set in the marshlands of North Carolina.",
      category: "Fiction",
    },
    {
      id: 3,
      title: "Becoming",
      author: "Michelle Obama",
      price: 18.99,
      rating: 4.9,
      image: "https://example.com/images/becoming.jpg",
      description:
        "The former First Lady of the United States shares her life story in this powerful memoir.",
      category: "Biography",
    },
    {
      id: 4,
      title: "Educated",
      author: "Tara Westover",
      price: 15.5,
      rating: 4.8,
      image: "https://example.com/images/educated.jpg",
      description:
        "A memoir about a woman who grows up in a strict and abusive household and eventually pursues higher education.",
      category: "Memoir",
    },
    {
      id: 4,
      title: "Educated",
      author: "Tara Westover",
      price: 15.5,
      rating: 4.8,
      image: "https://example.com/images/educated.jpg",
      description:
        "A memoir about a woman who grows up in a strict and abusive household and eventually pursues higher education.",
      category: "Memoir",
    },
    {
      id: 4,
      title: "Educated",
      author: "Tara Westover",
      price: 15.5,
      rating: 4.8,
      image: "https://example.com/images/educated.jpg",
      description:
        "A memoir about a woman who grows up in a strict and abusive household and eventually pursues higher education.",
      category: "Memoir",
    },
    {
      id: 4,
      title: "Educated",
      author: "Tara Westover",
      price: 15.5,
      rating: 4.8,
      image: "https://example.com/images/educated.jpg",
      description:
        "A memoir about a woman who grows up in a strict and abusive household and eventually pursues higher education.",
      category: "Memoir",
    },
    {
      id: 4,
      title: "Educated",
      author: "Tara Westover",
      price: 15.5,
      rating: 4.8,
      image: "https://example.com/images/educated.jpg",
      description:
        "A memoir about a woman who grows up in a strict and abusive household and eventually pursues higher education.",
      category: "Memoir",
    },
    {
      id: 4,
      title: "Educated",
      author: "Tara Westover",
      price: 15.5,
      rating: 4.8,
      image: "https://example.com/images/educated.jpg",
      description:
        "A memoir about a woman who grows up in a strict and abusive household and eventually pursues higher education.",
      category: "Memoir",
    },
  ];

  return (
    <div className="container mx-auto my-40 bg-white p-10 flex gap-10 rounded-lg">
      <div className="border-r pr-10">
        <h1 className="text-3xl font-semibold mb-10 ">
          Category <hr className="text-3xl mt-3" />
        </h1>
        <div className="text-xl text-textColor space-y-3 border rounded-lg p-5 cursor-pointer">
          <p>Bestsellers</p>
          <hr />
          <p>Bestsellers</p>
          <hr />
          <p>Bestsellers</p>
          <hr />
          <p>Bestsellers</p>
          <hr />
          <p>Bestsellers</p>
          <hr />
          <p>Bestsellers</p>
          <hr />
          <p>Bestsellers</p>
          <hr />
          <p>Bestsellers</p>
          <hr />
          <p>Bestsellers</p>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-semibold mb-10 ">
          Book Store <hr className="text-3xl mt-3" />{" "}
        </h1>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
          {items.map((book) => (
            <BookCard {...book} key={book.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
