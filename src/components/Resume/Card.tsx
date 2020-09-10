import React from 'react'

interface Props {
  color: string
  image: string
  title: string
  subtitle: string
}

const Card: React.FC<Props> = ({ color, image, title, subtitle }) => {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      <img className="card__image" src={image} />
      <div className="card__title">{title}</div>
      <hr className="card__separator" />
      <div className="card__subtitle">{subtitle}</div>
    </div>
  )
}

export default Card
