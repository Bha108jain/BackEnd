import React from "react";
import axios from "axios";

const Register = () => {
  const Handlerregister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const age = e.target.age.value;
    const users = { name, age };
    await axios.post("https://backend-e35w.onrender.com/users/", users);
    alert("User Registered successfully");
  };

  return (
    <div>
      <form onSubmit={Handlerregister}>
        Name
        <input type="text" placeholder="NAME" name="name" required />
        age
        <input type="number" placeholder="AGE" name="age" required />
        <button type="submit"> Register </button>
      </form>
    </div>
  );
};

export default Register;
