import React from 'react'
import { useQuery } from '@apollo/client'

import { POC_PRODUCTS_LIST } from '../services/api'
import IPocProductListData from '../shared/interfaces/IPocProductListData'

interface Props {
  pocId: string
}

const ProductList: React.FC<Props> = ({ pocId }) => {
  const { loading, error, data } = useQuery<IPocProductListData>(
    POC_PRODUCTS_LIST,
    {
      variables: {
        id: pocId,
        search: '',
      },
    }
  )

  return (
    <section className="productlist">
      {data &&
        data.poc.products.map(p => (
          <div key={p.id} className="productcard__wrapper">
            <img
              src={p.images[0].url}
              alt={p.title}
              onError={(e: any) =>
                (e.target.src =
                  'https://cdn3.iconfinder.com/data/icons/public-signs-6/520/55_Camera_Image_No_Photography-128.png')
              }
            />
            <p className="productcard__title">{p.title}</p>
          </div>
        ))}
    </section>
  )
}

export default ProductList
