import React from "react";
import Modal from "react-modal";
import Button from "../Button/Button";
import {
  ModalWrap,
  CarImgModal,
  CloseBtn,
  customStyles,
  TitleCar,
  TitleSpan,
  Text,
  WrapText,
  DescriptionText,
  TextSubpoint,
  ConditionsWrap,
  RentalWrap,
  Condition,
  ConditionSpan,
} from "./PopUp.styled";
import { IoCloseSharp } from "react-icons/io5";

const PopUp = ({ car, isOpen, onClose }) => {
  const handleClick = () => {
    window.location.href = "tel:+380730000000";
  };
  const age = car.rentalConditions.split("\n")[0];

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <ModalWrap>
        <CloseBtn onClick={onClose}>
          {" "}
          <IoCloseSharp color="rgba(18, 20, 23, 1)" size="1.5em" />
        </CloseBtn>
        <CarImgModal src={car.img} alt="" />
        <TitleCar>
          {car.make} <TitleSpan>{car.model},</TitleSpan> {car.year}
        </TitleCar>
        <WrapText>
          <Text>{car.address.split(",")[1]}</Text>
          <Text>{car.address.split(",")[2]}</Text>
          <Text>Id: {car.id}</Text>
          <Text>Year: {car.year}</Text>
          <Text>Type: {car.type}</Text>
          <Text>Fuel Consumption: {car.fuelConsumption}</Text>
          <Text>Engine Size: {car.engineSize}</Text>
        </WrapText>

        <DescriptionText>{car.description}</DescriptionText>
        <TextSubpoint>Accessories and functionalities: </TextSubpoint>
        <WrapText>
          <Text>{car.accessories[0]}</Text>
          <Text>{car.accessories[1]}</Text>
          <Text>{car.accessories[2]}</Text>
          <Text>{car.functionalities[0]}</Text>
          <Text>{car.functionalities[1]}</Text>
          <Text>{car.functionalities[2]}</Text>
        </WrapText>
        <RentalWrap>
          <TextSubpoint>Rental Conditions: </TextSubpoint>
          <ConditionsWrap>
            <Condition>
              {age.split(":")[0]} :{" "}
              <ConditionSpan> {age.split(":")[1]}</ConditionSpan>
            </Condition>
            <Condition>{car.rentalConditions.split("\n")[1]}</Condition>
            <Condition>{car.rentalConditions.split("\n")[2]}</Condition>
            <Condition>
              Mileage:
              <ConditionSpan>
                {car.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </ConditionSpan>
            </Condition>
            <Condition>
              Price: <ConditionSpan>{car.rentalPrice}</ConditionSpan>
            </Condition>
          </ConditionsWrap>
        </RentalWrap>
        <Button text={"Rental car"} onClick={handleClick} width={168} />
      </ModalWrap>
    </Modal>
  );
};

export default PopUp;
