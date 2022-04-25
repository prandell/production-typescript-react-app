import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import LoadingLogo from '../../components/loading-logo/loading-logo.component'
import ProductCard from '../../components/product-card/product-card.component'
import { ComicCategory } from '../../models/category.models'
import { Product } from '../../models/product.model'
import {
  selectCategoriesStatus,
  selectCategoryMap
} from '../../store/categories/categories.slice'
import { useAppSelector } from '../../store/hooks'
import * as Styled from './category.styles'

const Category = () => {
  const { categoryName } = useParams()
  const status = useAppSelector(selectCategoriesStatus)
  const categoryMap = useAppSelector(selectCategoryMap)
  const [category, setCategory] = useState<ComicCategory>({} as ComicCategory)

  useEffect(() => {
    if (categoryName && categoryMap[categoryName]) {
      setCategory(categoryMap[categoryName])
    }
  }, [categoryName, categoryMap])

  const { items, title } = category
  return (
    <>
      {status !== 'idle' ? (
        <LoadingLogo />
      ) : (
        <Styled.CategoryContainer>
          <Styled.Title>{title}</Styled.Title>
          <Styled.LineBreak />
          <Styled.ProductGrid>
            {items &&
              items.map((product: Product) => {
                return <ProductCard key={product.id} product={product} />
              })}
          </Styled.ProductGrid>
        </Styled.CategoryContainer>
      )}
    </>
  )
}

export default Category
