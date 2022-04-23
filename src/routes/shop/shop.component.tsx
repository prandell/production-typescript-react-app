import React from 'react'
import { Route, Routes } from 'react-router'
import CategoriesPreview from '../categories-preview/categories-preview.component'
import Category from '../category/category.component'
import './shop.styles.scss'

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":categoryName" element={<Category />} />
    </Routes>
  )
}

export default Shop
