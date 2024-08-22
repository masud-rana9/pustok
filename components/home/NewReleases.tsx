"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import BookCard from "../shared/BookCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CategoryTitle from "../shared/CategoryTitle";
const NewReleases = () => {
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
  ];

  return (
    <div className="">
      <CategoryTitle title="New Releases " />
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={800}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {items.map((book) => (
          <SwiperSlide key={book.id}>
            <BookCard {...book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default NewReleases;
