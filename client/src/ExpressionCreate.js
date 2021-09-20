import React from "react";
import axios from "axios";

const ExpressionCreate = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post("http://localhost:4002/expressions");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <button className="btn btn-primary">Create an Expression</button>
      </form>
    </div>
  );
};

export default ExpressionCreate;
