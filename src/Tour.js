import React, { useState } from 'react';

const Tour = ({ item, deleteTour }) => {
  const [readMore, setReadMore] = useState(true);
  return (
    <article className="single-tour">
      <img src={item.image} alt="" />
      <footer>
        <div className="tour-info">
          <h4>{item.name}</h4>
          <h4 className="tour-price">{item.price}</h4>
        </div>
        <p>
          {readMore ? item.info : `${item.info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "show more"}{" "}
          </button>
        </p>
        <button onClick={() => deleteTour(item.id)} className="delete-btn">
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
