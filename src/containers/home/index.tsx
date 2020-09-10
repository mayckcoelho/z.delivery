import React from 'react'
import { useHistory } from 'react-router-dom'

import { useAddress } from '../../contexts/address'
import Autocomplete from '../../components/Autocomplete'
import Resume from '../../components/Resume'
import Hero from '../../components/Hero'

const Home: React.FC = () => {
  const history = useHistory()
  const { updateAddress } = useAddress()

  const handleClick = (
    address: string,
    location: google.maps.LatLngLiteral
  ) => {
    updateAddress({ address, ...location })
    history.push('/products')
  }

  return (
    <main>
      <section className="background">
        <div className="background__wrapper">
          <h1 className="background__wrapper__title">
            Informe seu endereço e nós vamos encontrar as{' '}
            <strong>melhores ofertas</strong>
          </h1>
          <Autocomplete handleAction={handleClick} />
        </div>
      </section>
      <Resume />
      <Hero />
    </main>
  )
}

export default Home
