import React, { useState, useEffect, useContext, createContext } from 'react'

import useLocalStorage from '../shared/hooks/useLocalStorage'
import IAddressContextData, {
  IAddress,
} from '../shared/interfaces/IAddressContextData'

const AddressContext = createContext<IAddressContextData>(
  {} as IAddressContextData
)

export const AddressProvider: React.FC = ({ children }) => {
  const [address, setAddress] = useState<null | IAddress>(null)
  const [storagedAddress, setStoragedAddress] = useLocalStorage(
    '@ZDelivery:address',
    null
  )

  useEffect(() => {
    async function loadStorageData() {
      if (storagedAddress) {
        setAddress(storagedAddress)
      }
    }

    loadStorageData()
  }, [])

  const updateAddress = async (data: IAddress) => {
    setAddress(data)
    setStoragedAddress(data)
  }

  return (
    <AddressContext.Provider
      value={{
        address,
        updateAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  )
}

export function useAddress() {
  const context = useContext(AddressContext)

  return context
}
