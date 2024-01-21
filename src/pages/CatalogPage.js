import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectError, selectIsLoading, selectVisibleCars } from '../redux/selectors'
import { fetchCars } from '../redux/opetations'
import Loader from '../components/Loader/Loader'
import CatalogList from '../components/CatalogList/CatalogList'
import FilterForm from '../components/FilterForm/FilterForm'

import makes from '../components/FilterForm/makes.json'
import { Container } from '../styles/container'
import { CenterDiv, PageWrap } from "./pages.styled";

const CatalogPage = () => {
  const cars = useSelector(selectVisibleCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(()=>{dispatch(fetchCars({ page: 1, limit: 12 }))}, [dispatch])

  return (
    <Container>
      <PageWrap>
      <CenterDiv>{isLoading && <Loader/>}</CenterDiv>
      {error && <p>{error}</p>}

      <FilterForm makes={makes}/>
      <CatalogList cars={cars}/>
      </PageWrap>
    </Container>
  )
}
 export default CatalogPage