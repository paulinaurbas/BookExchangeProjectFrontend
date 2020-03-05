import React, { Component, useState, useEffect } from "react";
import BookAllTable from "../AllExchanges/AllExchangesTable";
const BookAll = () => {
  const [bookAll, setBookAll] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `http://localhost:8080/JavaServlets-EE7/AllOffertsFrom`
        );
        // console.log(await res.text())
        const data = await res.json();
        setBookAll(data);
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
  return bookAll.map(({ text }, index) => (
     <BookAllTable key = {index} text={text}></BookAllTable>
  ));
};
export default BookAll;
