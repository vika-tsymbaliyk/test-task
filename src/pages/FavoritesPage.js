import React from 'react'
import { useSelector } from 'react-redux'
import { selectError, selectFavorites, selectIsLoading } from '../redux/selectors'
import { Container } from '../styles/container';
import { CenterDiv, PageWrap } from './pages.styled';
import Loader from '../components/Loader/Loader';
import CatalogList from '../components/CatalogList/CatalogList.jsx'

const FavoritesPage = () => {

  const favorites = useSelector(selectFavorites);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

console.log(favorites);

  return (
    <Container>
      <PageWrap>
      <CenterDiv>{isLoading && <Loader/>}</CenterDiv>
      {error && <p>{error}</p>}

      <CatalogList cars = {favorites}/>

      </PageWrap>
      </Container>
  )
}

export default FavoritesPage
