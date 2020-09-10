import React from 'react'

import Card from './Card'
import Beer from '../../assets/beer.svg'
import Delivery from '../../assets/delivery.svg'
import Online from '../../assets/online.svg'
import Trophy from '../../assets/trophy.svg'

const Resume: React.FC = () => {
  return (
    <section className="resume">
      <Card
        color="#fbf6d6"
        image={Beer}
        title="Sempre Gelada"
        subtitle="Sua bebida sempre gelada"
      />
      <Card
        color="#bab69e"
        image={Online}
        title="Qualquer Hora"
        subtitle="Em qualuer momento do dia"
      />
      <Card
        color="#e0dcbf"
        image={Delivery}
        title="Qualquer Lugar"
        subtitle="Pra você não importe aonde"
      />
      <Card
        color="#e0dcbf"
        image={Trophy}
        title="As Melhores Marcas"
        subtitle="Sempre com muita qualidade"
      />
    </section>
  )
}

export default Resume
