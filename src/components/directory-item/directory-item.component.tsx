import React, { FC, ReactElement, useCallback } from 'react'
import { useNavigate } from 'react-router'
import { CategoryBanner } from '../../models/category.models'
import * as Styled from './directory-item.styles'

type DirectoryItemProps = {
  category: CategoryBanner
}

const DirectoryItem: FC<DirectoryItemProps> = ({
  category
}: DirectoryItemProps): ReactElement => {
  const { title, subtitle, imageUrl, large, route } = category
  const navigate = useNavigate()
  const handleOnClick = useCallback(() => navigate(route), [])
  return (
    <Styled.DirectoryItemContainer large={large} onClick={handleOnClick}>
      <Styled.BackgroundImage imageUrl={imageUrl} />
      <Styled.DirectoryBodyContainer>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </Styled.DirectoryBodyContainer>
    </Styled.DirectoryItemContainer>
  )
}

export default DirectoryItem
