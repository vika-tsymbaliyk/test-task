import React, { useState, useEffect } from "react";
import { CarCardWrap, CarImg, ImgWrap, TitleWrap, CarTitle, CarTitleSpan, InputStyled, Text, TextWpap, LabelInput } from "./CatalogItem.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/selectors";
import { addFavorite, removeFavorite } from "../../redux/favoritesSlice";
import Button from "../Button/Button";
import PopUp from "../PopUp/PopUp";
import { IoHeartOutline,  IoHeartSharp } from "react-icons/io5";

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
      
      <LabelInput>
       <InputStyled
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        {isChecked ? < IoHeartSharp color='#3470FF' size='2em'/> : <IoHeartOutline color = "rgba(255, 255, 255, 0.8)" size='2em'/>}
        </LabelInput>
        <CarImg src={car.img} alt={car.make}/>
      </ImgWrap>
      <TitleWrap>
        <CarTitle>
          {car.make} <CarTitleSpan>{car.model},</CarTitleSpan> {car.year}
        </CarTitle>
        <p>{car.rentalPrice}</p>
      </TitleWrap>
      <TextWpap>
        <Text>{car.address.split(',')[1]}</Text>
        <Text>{car.address.split(',')[2]}</Text>
        <Text>{car.rentalCompany}</Text>
        <Text>{car.type}</Text>
        <Text>{car.model}</Text>
        <Text>{car.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
        <Text>{car.accessories[0]}</Text>
      </TextWpap>

      <Button onClick={handleItemClick} text={'Learn more'} width={274} />

      {isOpen && <PopUp isOpen = {isOpen} car={car} onClose={handleItemClose}/>}


    </CarCardWrap>
  );
};

export default CatalogItem;
