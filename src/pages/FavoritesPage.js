import React from 'react'
import { useSelector } from 'react-redux'
import { selectError, selectFavorites, selectIsLoading } from '../redux/selectors'
import { Container } from '../styles/container';
import { PageWrap } from './pages.styled';
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
      {isLoading && <Loader/>}
      {error && <p>{error}</p>}

      <CatalogList cars = {favorites}/>

      </PageWrap>
      </Container>
  )
}

export default FavoritesPage
