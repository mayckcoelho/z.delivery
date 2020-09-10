import React, { useState, useEffect } from 'react'
import { useLazyQuery } from '@apollo/client'

import { useAddress } from '../../contexts/address'
import IPocSearchData, {
  IPocSearchVars,
} from '../../shared/interfaces/IPocSearchData'
import { POC_SEARCH } from '../../services/api'

import CategoryList from '../../components/CategoryList'
import ProductList from '../../components/ProductList'

const Home: React.FC = () => {
  const { address } = useAddress()
  const [pocId, setPocId] = useState<string | null>(null)

  const [getData] = useLazyQuery<IPocSearchData, IPocSearchVars>(POC_SEARCH, {
    onCompleted: data => setPocId(data.pocSearch[0].id),
  })

  useEffect(() => {
    if (address) {
      const { lat, lng } = address

      getData({
        variables: {
          algorithm: 'NEAREST',
          lat: lat.toString(),
          long: lng.toString(),
          now: new Date().toISOString(),
        },
      })
    }
  }, [address])

  return (
    <main>
      <CategoryList />
      <div>{pocId && <ProductList pocId={pocId} />}</div>
    </main>
  )
}

export default Home
