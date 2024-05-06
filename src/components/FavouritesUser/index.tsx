import React from 'react'
import Favourites from './Favourites'
import User from './User'
import { FavouritesUserWrapper } from './styles'

const FavouritesUser: React.FC = () => {
  return (
    <FavouritesUserWrapper>
        <Favourites/>
        <User/>
        {/* FavouritesUser */}
    </FavouritesUserWrapper>
  )
}

export default FavouritesUser