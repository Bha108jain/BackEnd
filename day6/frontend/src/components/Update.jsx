import React from "react";
import axios from "axios";

const Update = () => {
  const handleupdate = async (e) => {
    e.preventDefault(); // Fixed typo here
    const id = e.target.id.value;
    const name = e.target.name.value;
    const age = e.target.age.value;
    const users = { name, age };

    try {
      await axios.put(`https://backend-e35w.onrender.com/users/${id}`, users);
      alert("User updated successfully");
    } catch (error) {
      alert("Error updating user: " + error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleupdate}>
        User ID <input type="text" placeholder="user id" name="id" required />
        Name <input type="text" placeholder="Name" name="name" required />
        Age <input type="number" placeholder="age" name="age" required />
        <button type="submit">Update</button> {/* Fixed typo here */}
      </form>
    </div>
  );
};

export default Update;
