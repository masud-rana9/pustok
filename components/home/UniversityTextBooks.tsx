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
import useBooks from "@/hooks/useBooks";
import Link from "next/link";
const UniversityTextBooks = () => {
  const [book] = useBooks();
  const UniversityTextBooks = book.filter(
    (book) => book.category === "University Textbooks"
  );

  return (
    <div className="">
      <CategoryTitle title="UniversityText Books" />
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
        {UniversityTextBooks.map((book) => (
          <SwiperSlide key={book.id}>
            <BookCard {...book} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Link href={`/books/${UniversityTextBooks[1]?._id}`}>
        <button className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-primary/90 transition-all mt-5 mx-auto block">
          Order Now!
        </button>
      </Link>
      <hr className="my-20 bg-primary border-t-2 border-primary/70" />
    </div>
  );
};
export default UniversityTextBooks;
