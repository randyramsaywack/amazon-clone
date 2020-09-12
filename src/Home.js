import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/Audible/en_US/images/creative/amazon/Minerva_Gateway_Hero_Desktop_070820_PremiumPlus_2x._CB410855810_.jpg"
        />
        <div className="home__row">
          <Product
            id={2131378}
            title="2020 Apple MacBook Pro (13-inch, 8GB RAM, 256GB SSD Storage, Magic
          Keyboard) - Space Gray"
            image="https://images-na.ssl-images-amazon.com/images/I/71HI3U9ZwZL._AC_SX679_.jpg"
            price={1299.99}
            rating={4.5}
          />
          <Product
            id={5664463}
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            price={29.99}
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id={586463}
            title="KenWood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Doug Hook and Whisk, 5 Litre Glass Bowl"
            image="https://images-na.ssl-images-amazon.com/images/I/61aT8jl8THL._AC_SX679_.jpg"
            price={239.99}
            rating={4.5}
          />
          <Product
            id={561663}
            title="Samsung LC27F398FWNXZA Samsung C27F398 27 Inch Curved LED Monitor"
            image="https://m.media-amazon.com/images/I/91SZVWfPjdL._AC_UY218_.jpg"
            price={199.99}
            rating={3}
          />{" "}
          <Product
            id={5667463}
            title="Echo Dot (3rd Gen) bundle with Amazon Smart Plug - Sandstone"
            image="https://m.media-amazon.com/images/I/51hZ1Ix1bdL._AC_UL320_.jpg"
            price={59.99}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id={5644233}
            title="Apple iPad Pro (2017) 12.9in 64GB Wi-Fi Tablet, Space Gray (Renewed)"
            image="https://m.media-amazon.com/images/I/61jpKblMqtL._AC_UY218_.jpg"
            price={799.99}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
