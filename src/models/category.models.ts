import { Product } from './product.model'

export type CategoryBanner = {
  id: number
  title: string
  subtitle: string
  imageUrl: string
  route: string
}

export type ComicCategory = {
  title: string
  items: Product[]
}

export type CategoryMap = {
  [key: string]: ComicCategory
}
