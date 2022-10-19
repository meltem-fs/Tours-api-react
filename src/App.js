// import axios from "axios";
import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
//! I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [tours, setTours] = useState([]);
   const [loading, setLoading] = useState(true)

  const deleteTour = (id) =>{
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }
  const axiosTours = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json()
      setTours(data);
      setLoading(false)
    } catch (error) {
      setLoading(true)
      console.log(error);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      axiosTours()
    },1000);
  }, []);

  if(loading){
    return(
      <main>
        <Loading/>
      </main>
    )
  }
  if(tours.length ===0){
    return(
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={()=> axiosTours()}>Refresh</button>
        </div>
      </main>
    )
  }
  return (
    <div>
      <Tours tours={tours} deleteTour={deleteTour} />
    </div>
  );
}

export default App;
