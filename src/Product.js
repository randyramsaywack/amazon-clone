import React, { useState } from "react";
import "./Product.css";
import StarRatings from "react-star-ratings";

function Product({ id, title, image, price, rating }) {
  const [userRating, setuserRating] = useState(rating);

  const changeRating = (newRating) => {
    setuserRating(newRating);
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          <StarRatings
            rating={parseFloat(userRating)}
            changeRating={changeRating}
            starRatedColor="rgb(255,187,0)"
            starHoverColor="rgb(255,187,0)"
            numberOfStars={5}
            starDimension="18px"
          />
        </div>
        <img src={image} alt="No Image" />
      </div>
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
