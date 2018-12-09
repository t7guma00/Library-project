import React from 'react';
import PropTypes from 'prop-types';

const Card = ({book}) => {
    return (
        <div id={`card`} className="card">
            <img src={book.image} alt={book.title} />
            <div className="details">
                <span className="index"></span>
                <p className="location">
                    {book.title}<br />
                    {book.year}
                </p>
                <ul className="features">
                    <li className="icon-bed">{book.description}</li>
                </ul>
            </div>
        </div>
    )
}

Card.propTypes = {
    book: PropTypes.object.isRequired
}

export default Card;