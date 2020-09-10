export interface IAddress {
  address: string
  lat: number
  lng: number
}

interface IAddressContextData {
  address: IAddress | null
  updateAddress: (data: IAddress) => void
}

export default IAddressContextData
