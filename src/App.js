import React from "react";
import NotesPage from "./Notes";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import SignUp from "./Register";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/notes" element={<NotesPage />} />
      </Routes>
    </div>
  );
};

export default App;
