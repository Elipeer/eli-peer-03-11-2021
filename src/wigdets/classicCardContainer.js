import React from "react";
import truck from "../../assets/images/new-truck.png";
import star from "../../assets/images/new-star.png";
import house from "../../assets/images/new-house.png";
import lock from "../../assets/images/new-lock.png";
import days30billing from "../../assets/images/calander.png";
import service24 from "../../assets/images/24-service.png";
import discountImg from "../../assets/images/discount.png";
import giftsImage from "../../assets/images/giftsImage.png";
import buisnessExposureImage from "../../assets/images/buisnessExposureImage.png";
import cashEnvelopeImage from "../../assets/images/cashEnvelopeImage.png";

import CustomCard from "../wigdets/customCard";
import ClassicCard from "../reusableComponents/classicCard";

export default function ClassicCardContainer(props) {
  return (
    <div className="mt-100 mb-100">
      <h1 className="mb-40">
        <b>{props.data.cardsTitle}</b>
      </h1>
      {props.data.cardsData.map((card, i) => (
        <ClassicCard img={getImgByName(card.imgName)} title={card.title} description={card.description} key={i + "ldsjf"} />
      ))}
    </div>
  );

  function getImgByName(name) {
    if (name === "lock") return lock;
    if (name === "truck") return truck;
    if (name === "star") return star;
    if (name === "days30billing") return days30billing;
    if (name === "house") return house;
    if (name === "service24") return service24;
    if (name === "discount") return discountImg;
    if (name === "giftsImage") return giftsImage;
    if (name === "buisnessExposureImage") return buisnessExposureImage;
    if (name === "cashEnvelopeImage") return cashEnvelopeImage;
  }
}
