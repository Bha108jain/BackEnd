import React, { useEffect, useState } from "react";
import axios from "axios";

const DeleteBook = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch all books on component mount
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    setLoading(true); // Set loading true while fetching
    try {
      const res = await axios.get("https://book-store-o8pu.onrender.com/books");
      console.log(res.data); // Log data to check structure
      setBooks(res.data);
    } catch (error) {
      console.error(error);
      alert("Error fetching books");
    }
    setLoading(false); // Set loading false after fetching
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`https://book-store-o8pu.onrender.com/books/${id}`);
      alert("Book deleted successfully");
      fetchBooks(); // Refresh book list after deletion
    } catch (error) {
      console.error(error);
      alert("Error deleting book");
    }
  };

  return (
    <div>
      <h2>Delete Books</h2>
      {loading ? (
        <p>Loading books...</p>
      ) : books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book._id} style={{ color: "black" }}>
              {" "}
              {/* Inline style to make text black */}
              <strong>{book.title}</strong> by {book.author}
              <button onClick={() => handleDelete(book._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DeleteBook;
