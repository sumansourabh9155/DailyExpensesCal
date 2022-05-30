import "./App.css";

import React, { useState } from "react";

import ExpencesList from "./component/ExpencesList.jsx";
import NewExpense from "./component/NewExpense/NewExpense";

function App() {
  return (
    <div>
      <NewExpense />
      <ExpencesList />
    </div>
  );
}

export default App;
