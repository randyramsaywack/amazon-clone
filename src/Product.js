import React, { useState } from "react";
import "./Product.css";
import StarRatings from "react-star-ratings";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const [userRating, setuserRating] = useState(rating);

  const changeRating = (newRating) => {
    setuserRating(newRating);
  };

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <strong>
            {
              <CurrencyFormat
                renderText={(value) => value}
                decimalScale={2}
                value={price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            }
          </strong>
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
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
