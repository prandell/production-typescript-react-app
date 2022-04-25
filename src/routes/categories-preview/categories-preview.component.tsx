import React from 'react'
import CategoryPreview from '../../components/category-preview/category-preview.component'
import { selectCategoryMap } from '../../store/categories/categories.slice'
import { useAppSelector } from '../../store/hooks'

const CategoriesPreview = () => {
  const categoryMap = useAppSelector(selectCategoryMap)
  const first = 'new'
  const sortFunction = (x: string, y: string) => {
    return x === first ? -1 : y === first ? 1 : 0
  }
  return (
    <>
      {Object.keys(categoryMap)
        .sort(sortFunction)
        .map((titleKey: string) => {
          const { title } = categoryMap[titleKey]
          return (
            <CategoryPreview key={title} category={categoryMap[titleKey]} />
          )
        })}
    </>
  )
}

export default CategoriesPreview
