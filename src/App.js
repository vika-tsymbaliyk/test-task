import React, { lazy} from 'react'
import { Navigate, Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"

const HomePage = lazy(()=> import('./pages/HomePage'))
const CatalogPage = lazy(()=> import('./pages/CatalogPage'))
const FavoritesPage = lazy(()=> import('./pages/FavoritesPage'))

const App = ()=>{
  return (
    <div>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/catalog" element={<CatalogPage/>}/>
        <Route path="/favorites" element={<FavoritesPage/>}/>
      </Route>
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
    </div>
  )
}

export default App