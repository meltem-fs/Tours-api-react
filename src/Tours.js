import React from 'react';
import Tour from './Tour';


const Tours = ({ tours, deleteTour }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>

      <div>
        {tours.map((item) => {
          return <Tour deleteTour={deleteTour} key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
