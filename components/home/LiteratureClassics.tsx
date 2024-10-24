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
const LiteratureClassics = () => {
  const [book] = useBooks();
  console.log(book);
  const LiteratureClassics = book.filter(
    (book) => book.category === "Literature Classics"
  );

  return (
    <div>
      <CategoryTitle title="Literature Classics" />
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
        {LiteratureClassics.map((book) => (
          <SwiperSlide key={book.id}>
            <BookCard {...book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LiteratureClassics;
