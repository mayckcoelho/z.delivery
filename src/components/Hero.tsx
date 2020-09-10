import React from 'react'

import Wine from '../assets/wine.svg'

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <div>
          <h2>
            Aqui você encontra os melhores vinhos das principais regiões
            vitivinícolas do mundo!
          </h2>
          <p>
            Compre o seu rótulo favorito agora para receber em casa, sempre que
            quiser, vinhos selecionados exclusivamente para você.
          </p>
        </div>
        <img src={Wine} alt="" />
      </div>
    </section>
  )
}

export default Hero
