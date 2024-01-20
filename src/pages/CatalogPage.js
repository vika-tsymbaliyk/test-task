import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCars, selectError, selectIsLoading } from '../redux/selectors'
import { fetchCars } from '../redux/opetations'
import Loader from '../components/Loader/Loader'
import CatalogList from '../components/CatalogList/CatalogList'

const CatalogPage = () => {
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(()=>{dispatch(fetchCars({ page: 1, limit: 12 }))}, [dispatch])

  console.log(cars);

  return (
    <div>
      {isLoading && <Loader/>}
      {error && <p>{error}</p>}

      <CatalogList cars={cars}/>



    </div>
  )
}
 export default CatalogPage