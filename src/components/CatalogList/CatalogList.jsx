import React from 'react'
import CatalogItem from '../CatalogItem/CatalogItem'
import { List, ListItem } from './CatalogList.styled';

const CatalogList = ({cars}) => {
return (
    <List>
        {cars.length>0 && cars.map(car => ( <ListItem key={car.id}><CatalogItem car={car}/></ListItem>))}
    </List>
  )
}

export default CatalogList