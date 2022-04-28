import React, { FC, useEffect, useState } from 'react'
import { CategoryBanner } from '../../models/category.models'
import DirectoryItem from '../directory-item/directory-item.component'
import * as Styled from './directory.styles'

const Directory: FC = () => {
  const [categoryBanners, setCategoryBanners] = useState<CategoryBanner[]>([])
  useEffect(() => {
    setCategoryBanners([
      {
        id: 1,
        title: 'New',
        subtitle: 'Shop the latest releases',
        imageUrl:
          'https://storage.googleapis.com/randell-comics.appspot.com/category-covers/new-cover.jpg',
        large: false,
        route: 'shop/new'
      },
      {
        id: 2,
        title: 'Spider-Man',
        subtitle: "Everyone's favourite web-slinger",
        imageUrl:
          'https://storage.googleapis.com/randell-comics.appspot.com/category-covers/spiderman-cover.png',
        large: false,
        route: 'shop/spider-man'
      },
      {
        id: 3,
        title: 'Batman',
        subtitle: 'The Caped Crusader',
        imageUrl:
          'https://storage.googleapis.com/randell-comics.appspot.com/category-covers/batman-cover.jpeg',
        large: false,
        route: 'shop/batman'
      },
      {
        id: 4,
        title: 'DC',
        subtitle: 'Shop all DC Comics',
        imageUrl:
          'https://storage.googleapis.com/randell-comics.appspot.com/category-covers/dc-cover.jpeg',
        large: true,
        route: 'shop/dc'
      },
      {
        id: 5,
        title: 'Marvel',
        subtitle: 'Shop all Marvel Comics',
        imageUrl:
          'https://storage.googleapis.com/randell-comics.appspot.com/category-covers/marvel-cover.jpg',
        large: true,
        route: 'shop/marvel'
      }
    ])
  }, [])
  return (
    <Styled.Directory>
      {categoryBanners.map((c: CategoryBanner) => (
        <DirectoryItem key={c.id} category={c} />
      ))}
    </Styled.Directory>
  )
}

export default Directory
