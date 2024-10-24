"use client";
import React, { useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CategoryTitle from "@/components/shared/CategoryTitle";
import BookCard from "@/components/shared/BookCard";
import PrivateRoute from "@/components/shared/PrivateRoute";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import useBooks from "@/hooks/useBooks";
import { useParams } from "next/navigation";

const Store = () => {
  const [book] = useBooks();

  // const categories = [
  //   "Medical Old Books",
  //   "University Textbooks",
  //   "Literature Classics",
  //   "Historical Books",
  // ];
  // const { category } = useParams();
  // console.log(category);
  const categoryItem = [
    { title: "Medical Old Books" },
    { title: "University Textbooks" },
    { title: "Literature Classics" },
    { title: "Historical Books" },
  ];

  const [tabIndex, setTabIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <>
      <div className="container mx-auto my-40 bg-white p-10 rounded-lg border-t-2 border-primary">
        <Tabs
          defaultIndex={tabIndex}
          onSelect={(index) => {
            setTabIndex(index);
            setCurrentPage(1);
          }}
        >
          <TabList className="flex items-center justify-center  gap-8 mb-10">
            {categoryItem.map((category, index) => (
              <Tab
                key={index}
                className={
                  tabIndex === index
                    ? "border-b-2 border-green-700 text-green-700 pb-2"
                    : "border-b-2 border-transparent hover:border-green-700 cursor-pointer hover:text-green-700 pb-2"
                }
              >
                <span className="font-bold text-lg text-gray-800 text-center tracking-wide leading-tight">
                  {category.title}
                </span>
              </Tab>
            ))}
          </TabList>

          {categoryItem.map((category, index) => (
            <TabPanel key={index}>
              {/* <CategoryTitle title={category.title} /> */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {book
                  .filter((book) => book.category === category.title)
                  .slice(
                    (currentPage - 1) * itemsPerPage,
                    currentPage * itemsPerPage
                  )
                  .map((book) => (
                    <BookCard key={book._id} {...book} />
                  ))}
              </div>

              {/* pagination */}

              <div className="flex justify-center items-center gap-4 mt-8">
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                >
                  Previous
                </button>
                <div className="flex items-center gap-2">
                  {Array.from({
                    length: Math.ceil(
                      book.filter((b) => b.category === category.title).length /
                        itemsPerPage
                    ),
                  }).map((_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`px-4 py-2 bg-gray-200 rounded ${
                        currentPage === i + 1 ? "bg-primary text-white" : ""
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
                <button
                  onClick={handleNextPage}
                  disabled={
                    currentPage * itemsPerPage >=
                    book.filter((b) => b.category === category.title).length
                  }
                  className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </>
  );
};

export default Store;
