import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CategoriesState, CategoryMap } from '../../models/category.models'
import { RootState } from '../store'

const initialState: CategoriesState = { categoryMap: {} as CategoryMap }

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategoriesMap: (
      state: CategoriesState,
      action: PayloadAction<CategoryMap>
    ) => {
      state.categoryMap = action.payload
    }
  }
})

export const { setCategoriesMap } = categoriesSlice.actions

export const selectCategoryMap = (state: RootState): CategoryMap =>
  state.categories.categoryMap

export default categoriesSlice.reducer
