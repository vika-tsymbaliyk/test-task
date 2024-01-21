import React, { useState, useEffect } from "react";
import { CarCardWrap, CarImg, ImgWrap, TitleWrap, CarTitle, CarTitleSpan, InputStyled } from "./CatalogItem.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/selectors";
import { addFavorite, removeFavorite } from "../../redux/favoritesSlice";
import Button from "../Button/Button";
import PopUp from "../PopUp/PopUp";

const CatalogItem = ({ car }) => {

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const [isChecked, setIsChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => { const isCarInFavorites = favorites.some((item) => item.id === car.id);
    setIsChecked(isCarInFavorites);
  }, [favorites, car.id]);


  const handleCheckboxChange = () => {
    if (isChecked) {
      dispatch( removeFavorite({ car }));
    } else {
      dispatch(addFavorite({ car }));
    }
    setIsChecked(!isChecked);
  
  };

  const handleItemClick = () => {
    setIsOpen(true)
  };
  
  const handleItemClose = () => {
    setIsOpen(false);
  };

  return (
    <CarCardWrap>
      <ImgWrap>
       <InputStyled
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
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

      <Button onClick={handleItemClick} text={'Learn more'} />

      {isOpen && <PopUp isOpen = {isOpen} car={car} onClose={handleItemClose}/>}


    </CarCardWrap>
  );
};

export default CatalogItem;
