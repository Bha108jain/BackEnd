import React from "react";
import Register from "./components/Register";
import View from "./components/View";
import Delete from "./components/Delete";

const App = () => {
  return (
    <div>
      <h1>User Registration System</h1>
      <Register />
      <View />
      <Delete />
    </div>
  );
};

export default App;
