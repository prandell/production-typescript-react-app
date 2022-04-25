import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router'
import { fetchCategoriesAsync } from '../../store/categories/categories.slice'
import { useAppDispatch } from '../../store/hooks'
import CategoriesPreview from '../categories-preview/categories-preview.component'
import Category from '../category/category.component'

const Shop = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchCategoriesAsync())
  }, [])
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":categoryName" element={<Category />} />
    </Routes>
  )
}

export default Shop
