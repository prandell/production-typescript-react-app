import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router'
import { getCategoriesAsync } from '../../store/categories/categories.slice'
import { useAppDispatch } from '../../store/hooks'
import CategoriesPreview from '../categories-preview/categories-preview.component'
import Category from '../category/category.component'

const Shop = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const getCategoriesMap = async () => {
      return dispatch(getCategoriesAsync())
    }

    getCategoriesMap()
  }, [])
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":categoryName" element={<Category />} />
    </Routes>
  )
}

export default Shop
