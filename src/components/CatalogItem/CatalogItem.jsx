import React from "react";
import { CarCardWrap, CarImg, ImgWrap, TitleWrap, CarTitle, CarTitleSpan } from "./CatalogItem.styled";

const CatalogItem = ({ car }) => {
  return (
    <CarCardWrap>
      <ImgWrap>
        <CarImg src={car.img} alt={car.make}/>
      </ImgWrap>
      <TitleWrap>
        <CarTitle>
          {car.make} <CarTitleSpan>{car.model},</CarTitleSpan> {car.year}
        </CarTitle>
        <p>{car.rentalPrice}</p>
      </TitleWrap>
      <div>
        <p>{car.address.split(',')[1]}</p>
        <p>{car.address.split(',')[2]}</p>
        <p>{car.rentalCompany}</p>
        <p>{car.type}</p>
        <p>{car.model}</p>
        <p>{car.mileage}</p>
        <p>{car.accessories[0]}</p>
      </div>

      <button>Learn more</button>


    </CarCardWrap>
  );
};

export default CatalogItem;
