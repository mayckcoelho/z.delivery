import React from 'react'
import { useLocation } from 'react-router-dom'

import { useAddress } from '../../../contexts/address'
import InputSearch from '../../../components/InputSearch'
import Logo from '../../../assets/logo.png'

const Header: React.FC = () => {
  const location = useLocation()
  const { address } = useAddress()

  return (
    <header>
      <div className="header__wrapper">
        <img src={Logo} alt="Z Delivery" />
        <div className="header__search">
          {location.pathname === '/products' && (
            <InputSearch handleClick={() => {}} placeholder="Pesquisar..." />
          )}
        </div>
        {address && (
          <div className="header__address">
            <p className="header__address__title">Você receberá em</p>
            <p>{address.address}</p>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
