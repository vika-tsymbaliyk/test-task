import React from "react";
import { CenterWrap, HomeImg, PageWrap, Title, TitleWrap } from "./pages.styled";
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
        <p> Your Ultimate Car Rental Experience in Ukraine!</p>
        <Button text={"Rent car"} onClick={handleCatalogClick} width={256}></Button>
        </CenterWrap>
        <HomeImg src={img} alt="car-logo" />
        
        </TitleWrap>
        
        {/* <p>
          At our company, we redefine convenience and comfort in car rental
          services across Ukraine. Explore our extensive fleet of
          well-maintained vehicles, offering a seamless blend of style and
          functionality for every journey. Whether you're here for business or
          leisure, we've got the perfect ride for you.
        </p> */}
        <div>
          {/* <p>Why Choose Us:</p> */}
        {/* <ul>
          <li>Diverse Fleet: From compact cars to spacious SUVs, find the ideal vehicle for your needs.</li>
          <li>Easy Booking: Hassle-free online booking process for a quick start to your trip.</li>
          <li>Affordable Rates: Competitive prices with no hidden fees – what you see is what you get.</li>
          <li>Customer Satisfaction: Our priority is your satisfaction; we go the extra mile to exceed your expectations.</li>
        </ul> */}
        {/* <p>Ready for an unforgettable driving experience? Choose car for your next adventure in Ukraine.</p> */}
        
        </div>

      </PageWrap>
    </Container>
  );
};

export default HomePage;
