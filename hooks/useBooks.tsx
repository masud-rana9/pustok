"use client";
import { useEffect, useState } from "react";

const useBooks = () => {
  const [book, setbook] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => {
        setbook(data);
        setloading(false);
      });
  }, []);
  console.log(book);
  return [book, loading];
};

export default useBooks;
