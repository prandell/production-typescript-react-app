import React, { FC, useEffect, useState } from 'react'
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
import { capitaliseFirstLetterOfEachWord } from '../../utils/helpers.utils'
import * as Styled from './category.styles'

const Category: FC = () => {
  const { categoryName } = useParams()
  const status = useAppSelector(selectCategoriesStatus)
  const categoryMap = useAppSelector(selectCategoryMap)
  const [category, setCategory] = useState<ComicCategory>({} as ComicCategory)

  useEffect(() => {
    if (categoryName && categoryMap[categoryName]) {
      setCategory(categoryMap[categoryName])
    }
  }, [categoryName, categoryMap])

  const { items } = category
  return (
    <>
      <Styled.CategoryContainer>
        <Styled.Title>
          {capitaliseFirstLetterOfEachWord(String(categoryName))}
        </Styled.Title>
        <Styled.LineBreak />
        {status !== 'idle' ? (
          <>
            <LoadingLogo />
          </>
        ) : (
          <Styled.ProductGrid>
            {items &&
              items.map((product: Product) => {
                return <ProductCard key={product.id} product={product} />
              })}
          </Styled.ProductGrid>
        )}
      </Styled.CategoryContainer>
    </>
  )
}

export default Category
