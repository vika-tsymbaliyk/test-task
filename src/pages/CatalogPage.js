import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import {
  selectError,
  selectIsLoading,
  selectVisibleCars,
} from "../redux/selectors";
import { fetchCars } from "../redux/opetations";
import Loader from "../components/Loader/Loader";
import CatalogList from "../components/CatalogList/CatalogList";
import FilterForm from "../components/FilterForm/FilterForm";

import makes from "../components/FilterForm/makes.json";
import { Container } from "../styles/container";
import { CenterDiv, PageWrap } from "./pages.styled";
import LoadMoreBtn from "../components/LoadMoreBtn/LoadMoreBtn";

const CatalogPage = () => {
  const cars = useSelector(selectVisibleCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars(page)).catch((error) => {
      toast.error("Oops! Something went wrong. Please try again!");
    });
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
    dispatch(fetchCars(page));
  };

  return (
    <Container>
      <PageWrap>
        <CenterDiv>
          {isLoading && <Loader />}
          {error && <Toaster position="bottom-right" reverseOrder={false} />}

          <FilterForm makes={makes} />
          <CatalogList cars={cars} />
          <LoadMoreBtn onClick={handleLoadMore} />
        </CenterDiv>
      </PageWrap>
    </Container>
  );
};
export default CatalogPage;
