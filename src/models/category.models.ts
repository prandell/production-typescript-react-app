import { Product } from './product.model'

export type CategoryBanner = {
  id: number
  title: string
  subtitle: string
  imageUrl: string
  large: boolean
  route: string
}

export type ComicCategory = {
  title: string
  items: Product[]
}

export type CategoryMap = {
  [key: string]: ComicCategory
}

export type CategoriesState = {
  categories: ComicCategory[]
  status: 'loading' | 'idle' | 'failed'
}
