import React from "react";
import "./CheckoutProduct.css";
import StarRatings from "react-star-ratings";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = (basket) => {
    // remove from basket here
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <StarRatings
          rating={rating}
          starRatedColor="rgb(255,187,0)"
          starHoverColor="rgb(255,187,0)"
          numberOfStars={5}
          starDimension="18px"
        />
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
