import React from 'react'

interface Props {
  handleClick(): void
}

type InputSearchProps = JSX.IntrinsicElements['input'] & Props

const InputSearch: React.FC<InputSearchProps> = ({ handleClick, ...rest }) => {
  return (
    <div className="inputsearch__wrapper">
      <input className="inputsearch__input" {...rest} />
      <button className="inputsearch__button" onClick={handleClick}>
        Buscar
      </button>
    </div>
  )
}

export default InputSearch
