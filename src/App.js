import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import LocationPage from "./components/LocationPage/LocationPage";
import locationsData from "./data/locations.json";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage locations={locationsData} />} />

        <Route
          path="/location/:id"
          element={<LocationPage locations={locationsData} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
