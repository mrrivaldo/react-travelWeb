import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1> Check out these secret location!</h1>
      <div className="cards--container">
        <div className="cards--wrapper">
          <ul className="cards--items">
            <CardItem
              src="images/img-03.jpg"
              text="Explore The Fort of the Forgotten"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-01.jpg"
              text="Set sail to the Shrouded Island"
              label="Adventure"
              path="/services"
            />
          </ul>

          <ul className="cards--items">
            <CardItem
              src="images/img-02.jpg"
              text="Discover the lost treasure"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="images/img-05.jpg"
              text="Set visit to the Sunken Kingdom"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="images/img-04.jpg"
              text="Discover the hidden treasure in Shores of Plenty"
              label="Adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
