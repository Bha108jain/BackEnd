import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewBook = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track errors

  useEffect(() => {
    handleview();
  }, []);

  const handleview = async () => {
    try {
      const res = await axios.get("https://book-store-o8pu.onrender.com/books");
      setBooks(res.data);
      setLoading(false);
    } catch (err) {
      setError("Error fetching books!");
      setLoading(false);
      console.log(err);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>View Book Details</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {books.map((book) => (
          <div
            key={book.id}
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "15px",
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
              width: "250px",
              textAlign: "center",
              cursor: "pointer",
              background: "linear-gradient(135deg, #ff7f50, #ff4500)", // Orange gradient background
              border: "1px solid #e0e0e0",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 20px 50px rgba(0, 0, 0, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.2)";
            }}
          >
            <img
              src={book.image}
              style={{
                border: "1px solid green",
                borderRadius: "15px",
                width: "100%",
                marginBottom: "15px",
              }}
              alt={book.title}
            />
            <h3
              style={{
                color: "#000",
                fontSize: "1.2rem",
                marginTop: "10px",
              }}
            >
              {book.title}
            </h3>
            <h2 style={{ color: "#000", fontSize: "1rem" }}>{book.author}</h2>
            <h2 style={{ color: "#000", fontSize: "1rem" }}>{book.date}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewBook;
