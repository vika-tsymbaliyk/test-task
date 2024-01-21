import React from "react";
import {
  CenterWrap,
  HomeImg,
  PageWrap,
  TextHomePage,
  Title,
  TitleWrap,
} from "./pages.styled";
import { Container } from "../styles/container";
import img from "../images/home-img.jpg";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();

  const handleCatalogClick = () => {
    navigate("/catalog");
  };

  return (
    <Container>
      <PageWrap>
        <TitleWrap>
          <CenterWrap>
            <Title>OpenRoads</Title>
            <TextHomePage> Your Ultimate Car Rental Experience in Ukraine!</TextHomePage>
            <TextHomePage>
              At our company, we redefine convenience and comfort in car rental
              services across Ukraine. Explore our extensive fleet of
              well-maintained vehicles, offering a seamless blend of style and
              functionality for every journey. Whether you're here for business
              or leisure, we've got the perfect ride for you.
            </TextHomePage>
            <Button
              text={"Rent car"}
              onClick={handleCatalogClick}
              width={256}
            ></Button>
          </CenterWrap>
          <HomeImg src={img} alt="car-logo" />
        </TitleWrap>
      </PageWrap>
    </Container>
  );
};

export default HomePage;
