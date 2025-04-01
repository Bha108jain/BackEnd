import React from "react";
import axios from "axios";
const Delete = () => {
  const handledelete = async (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    await axios.delete(`https://backend-e35w.onrender.com/users/${id}`);
    alert("user deleted successfully.");
  };

  return (
    <div>
      <form onSubmit={handledelete}>
        User ID <input type="text" placeholder="User id" name="id" required />
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default Delete;
