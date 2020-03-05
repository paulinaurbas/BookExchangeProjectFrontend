import React, { Component, useState, useEffect } from "react";
import BookTable from "../SecondPage/SecondpageHome/BookTable";
const BookYouWant = () => {
  const [bookList, setBookList] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `http://localhost:8080/JavaServlets-EE7/ShelfServletGive`
        );
        // console.log(await res.text())
        const data = await res.json();
        setBookList(data);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return "spinner";
  }

  if (error) {
    return "error occurred :( try again";
  }
  return bookList.map(({ title, author, ISBN }, index) => (
    <BookTable key={index} title={title} author={author} ISBN={ISBN} />
  ));
};
export default BookYouWant;
