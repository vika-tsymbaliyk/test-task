import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";

const HomePage = lazy(() => import("./pages/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));

const App = () => {
  // Стикнулась з проблемою, що не вистачало файлу 404.html 
  // і при перезавантаженні сторінки на екрані з'являлося повідомлення про те що цього
  // файлу не знайдено. Я додала цей файл, взявши його з дз 8 на реакті і виникла інша проблема: 
  // при перезавантаженні повертає на хоум пейдж. Як можна вирішити цю проблему?

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
