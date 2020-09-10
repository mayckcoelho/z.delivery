export interface IPocProductListVars {
  id: string
  search: string
  categoryId?: string
}

export interface IImages {
  url: string
}

export interface IProductVariant {
  availableDate: string
  productVariantId: string
  price: number
  inventoryItemId: string
  shortDescription?: string
  title: string
  published?: boolean
  volume: string
  volumeUnit?: string
  description?: string
  subtitle: string
  components: []
}

export interface IProduct {
  id: string
  title: string
  images: IImages[]
  productVariants: IProductVariant[]
}

export interface IPocProductList {
  id: string
  products: IProduct[]
}

interface IPocProductListData {
  poc: IPocProductList
}

export default IPocProductListData
