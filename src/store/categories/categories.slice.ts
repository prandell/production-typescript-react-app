import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit'
import {
  CategoriesState,
  CategoryMap,
  ComicCategory
} from '../../models/category.models'
import { getComicCollectionsAndDocuments } from '../../utils/firebase/firebase.utils'
import { RootState } from '../store'

const initialState: CategoriesState = {
  status: 'loading',
  categories: [] as ComicCategory[]
}

export const fetchCategoriesAsync = createAsyncThunk(
  'categories/fetchCategoriesAsync',
  async (): Promise<ComicCategory[]> => {
    // The value we return becomes the `fulfilled` action payload
    return (await getComicCollectionsAndDocuments()) as ComicCategory[]
  }
)

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (
      state: CategoriesState,
      action: PayloadAction<ComicCategory[]>
    ) => {
      state.categories = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.categories = action.payload
      })
      .addCase(fetchCategoriesAsync.rejected, (state) => {
        state.status = 'failed'
      })
  }
})

export const { setCategories } = categoriesSlice.actions

export const selectCategories = (state: RootState): ComicCategory[] =>
  state.categories.categories

export const selectCategoriesStatus = (state: RootState): string =>
  state.categories.status

export const selectCategoryMap = createSelector(
  selectCategories,
  (categories: ComicCategory[]): CategoryMap =>
    categories.reduce(
      (acc: { [key: string]: ComicCategory }, category: ComicCategory) => {
        const { title, items } = category
        acc[title.toLowerCase()] = { title, items }
        return acc
      },
      {}
    )
)

export default categoriesSlice.reducer
