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

const MedicalOldBooks = () => {
  const [book] = useBooks();
  console.log(book);
  const MedicalOldBooks = book.filter(
    (book) => book.category === "Medical Old Books"
  );
  console.log(MedicalOldBooks);

  return (
    <div className="mt-32">
      <CategoryTitle title="Medical Old Books" />
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
        {MedicalOldBooks.map((item) => (
          <SwiperSlide key={item.id}>
            <BookCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Link
        href={`/store?category=${encodeURIComponent(
          MedicalOldBooks[0]?.category
        )}`}
      >
        <button className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-primary/90 transition-all mt-5 mx-auto block">
          Order Now!
        </button>
      </Link>
      <hr className="my-20 bg-primary border-t-2 border-primary/70" />
    </div>
  );
};

export default MedicalOldBooks;
