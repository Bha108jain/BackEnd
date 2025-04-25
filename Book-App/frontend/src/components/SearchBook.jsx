import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchBook = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query) {
        handleSearch();
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  const handleSearch = async () => {
    if (!query) {
      alert("Please enter a title to search");
      return;
    }
    setLoading(true);

    try {
      const res = await axios.get(
        `http://localhost:3000/search?title=${query}`
      );
      setBooks(res.data);
    } catch (error) {
      console.error(error);
      alert("Error while fetching books");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Search Books</h2>
      <input
        type="text"
        placeholder="Enter book title"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? "Searching..." : "Search"}
      </button>

      <div>
        {loading && <p>Loading...</p>}
        {books.length > 0 ? (
          <ul>
            {books.map((book) => (
              <li key={book._id} style={{ color: "black" }}>
                <strong>{book.title}</strong> by {book.author}
                <img src={book.image} alt={book.title} width="100" />
              </li>
            ))}
          </ul>
        ) : (
          !loading && <p>No books found</p>
        )}
      </div>
    </div>
  );
};

export default SearchBook;
