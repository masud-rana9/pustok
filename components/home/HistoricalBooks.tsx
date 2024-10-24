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
const HistoricalBooks = () => {
  const [book] = useBooks();
  const HistoricalBooks = book.filter(
    (book) => book.category === "Historical Books"
  );
  return (
    <div className="">
      <CategoryTitle title="Historical Books" />
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
        {HistoricalBooks.map((book) => (
          <SwiperSlide key={book.id}>
            <BookCard {...book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default HistoricalBooks;
