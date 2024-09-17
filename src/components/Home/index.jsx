import { useEffect } from "react";
import Book from "../Book";
import { useState } from "react";
const Home = () => {
  const [booksData, setBooksData] = useState([]);
  useEffect(() => getData());
  const getData = async () => {
    const response = await fetch(
      "https://openlibrary.org/search.json?q=%3Cyour-query%3E"
    );
    const data = await response.json();
    setBooksData(() => data.docs);
  };
  return (
    <div>
      <div className="row text-center">
        <input
          type="search"
          className="col-9 m-auto p-2 my-3 rounded-3"
          placeholder="search with book name or author name"
        />
      </div>

      <p className="text-dark"></p>
    </div>
  );
};

export default Home;
