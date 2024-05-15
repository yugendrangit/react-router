import React from "react";

const Card = ({ element, index }) => {
  return (
    <>
    <div>
      <div className="card">
        {element.id}
        <img src={element.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h2>{element.head}</h2>
          <p className="card-text">{element.content}</p>
          <p>{element.date}</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Card;
