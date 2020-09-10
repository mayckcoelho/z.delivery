export interface IPocSearchVars {
  algorithm: string
  lat: string
  long: string
  now: string
}

export interface IDeliveryType {
  __typename: string
  pocDeliveryTypeId: string
  deliveryTypeId: string
  price: number
  title: string
  subtitle: string
  active: boolean
}

export interface IPaymentMethod {
  __typename: string
  pocPaymentMethodId: string
  paymentMethodId: string
  active: boolean
  title: string
  subtitle: string
}

export interface IWorkInterval {
  __typename: string
  openingTime: string
  closingTime: string
}

export interface IPocWorkDay {
  __typename: string
  weekDay: string
  active: boolean
  workingInterval: IWorkInterval[]
}

export interface IAddress {
  __typename: string
  address1: string
  address2?: string
  number: string
  city: string
  province: string
  zip: string
  coordinates: string
}

export interface IPhone {
  __typename: string
  phoneNumber: string
}

export interface IPocSearch {
  __typename: string
  id: string
  status: string
  tradingName: string
  officialName: string
  deliveryTypes: IDeliveryType[]
  paymentMethods: IPaymentMethod[]
  pocWorkDay: IPocWorkDay[]
  address: IAddress
  phone: IPhone
}

interface IPocSearchData {
  pocSearch: IPocSearch[]
}

export default IPocSearchData
