import React from "react";
import ExpressionCreate from "./ExpressionCreate";
import EventBusList from "./EventBusList";

const App = () => {
  return (
    <div className="container">
      <ExpressionCreate />
      <hr />
      <br />
      <h1>Logs</h1>
      <EventBusList />
    </div>
  );
};
export default App;
