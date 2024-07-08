import React from 'react'
import Favourites from './Favourites'
import User from './User'
import { FavouritesUserWrapper } from './styles'
import AccountsMenu from './AccountsMenu'

const FavouritesUser: React.FC = () => {
  return (
    <FavouritesUserWrapper>
        <Favourites/>
        <AccountsMenu>
          <User/>
        </AccountsMenu>
    </FavouritesUserWrapper>
  )
}

export default FavouritesUser