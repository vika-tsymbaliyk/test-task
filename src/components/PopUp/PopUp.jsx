import React from "react";
import Modal from "react-modal";
import Button from "../Button/Button";
import { CarImgModal } from "./PopUp.styled";

const PopUp = ({ car, isOpen, onClose }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const handleClick = () => {};
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <div>
        <button onClick={onClose}> close</button>
        <CarImgModal src={car.img} alt="" />
        <p>
          {car.make} <span>{car.model},</span> {car.year}{" "}
        </p>
        <div>
          <p>{car.address.split(",")[1]}</p>
          <p>{car.address.split(",")[2]}</p>
          <p>Id: {car.id}</p>
          <p>Year: {car.year}</p>
          <p>Type: {car.type}</p>
          <p>Fuel Consumption: {car.fuelConsumption}</p>
          <p>Engine Size: {car.engineSize}</p>
        </div>

        <p>{car.description}</p>
        <p>Accessories and functionalities: </p>
        <div>
          <p>{car.accessories[0]}</p>
          <p>{car.accessories[1]}</p>
          <p>{car.accessories[2]}</p>
          <p>{car.functionalities[0]}</p>
          <p>{car.functionalities[1]}</p>
          <p>{car.functionalities[2]}</p>
        </div>
        <p>Rental Conditions: </p>
        <div>
          <p>
            {/* {car.age.split(":")[0]} : <span> {car.age.split(":")[1]}</span>{" "} */}
          </p>
          {/* <p>{car.rentalConditions.split("\n")[1]}</p>
          <p>{car.rentalConditions.split("\n")[2]}</p> */}
          <p>
            Mileage: <span>{car.mileage}</span>
          </p>
          <p>
            Price: <span>{car.rentalPrice}</span>
          </p>
        </div>
        <Button text={"Rental car"} onClick={handleClick} />
      </div>
    </Modal>
  );
};

export default PopUp;
