import React from "react";
import { useSelector } from "react-redux";
import {
  selectError,
  selectFavorites,
  selectIsLoading,
} from "../redux/selectors";
import { Container } from "../styles/container";
import { CenterDiv, PageWrap, TextFavPage } from "./pages.styled";
import Loader from "../components/Loader/Loader";
import CatalogList from "../components/CatalogList/CatalogList.jsx";
import toast, { Toaster } from "react-hot-toast";
import Button from "../components/Button/Button.jsx";
import { Navigate } from "react-router-dom";

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  toast.error("Oops! Something went wrong. Please try again!");

  const handleCatalogClick = () => {
    Navigate("/catalog");
  };

  return (
    <Container>
      <PageWrap>
        <CenterDiv>
          {isLoading && <Loader />}
          {error && <Toaster position="bottom-right" reverseOrder={false} />}

          {favorites.length === 0 && 
             <> <TextFavPage>
                You don't have favorite cars. Please return to the catalog.
              </TextFavPage>
              <Button
                text={"Choose car"}
                onClick={handleCatalogClick}
                width={256}
              ></Button>
            </>
            }

          <CatalogList cars={favorites} />
        </CenterDiv>
      </PageWrap>
    </Container>
  );
};

export default FavoritesPage;
