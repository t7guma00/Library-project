import React from "react";
import PropTypes from "prop-types";

const Card = ({ book }) => {
  return (
    <div id={`card`} className="card">
      <img src={book.image} alt={book.title} height="330" width="220" />
      <div className="details">
        <span className="index" />
        <p className="location">
          {book.title}
          <br />
          {book.author}
          <br />
          {book.year}
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  book: PropTypes.object.isRequired
};

export default Card;
