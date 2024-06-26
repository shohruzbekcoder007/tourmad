import React from 'react'
import Favourites from './Favourites'
import User from './User'
import { FavouritesUserWrapper } from './styles'

const FavouritesUser: React.FC = () => {
  return (
    <FavouritesUserWrapper>
        <Favourites/>
        <User/>
    </FavouritesUserWrapper>
  )
}

export default FavouritesUser