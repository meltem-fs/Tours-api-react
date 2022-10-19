// import axios from "axios";
import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
//! I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [tours, setTours] = useState([]);

  const axiosTours = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json()
      setTours(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    axiosTours();
  }, []);

  return (
    <div>
      <Tours tours={tours} setTours={setTours} />
    </div>
  );
}

export default App;
