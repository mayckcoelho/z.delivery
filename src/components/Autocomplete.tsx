import React, { useState } from 'react'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete'

import InputSearch from '../components/InputSearch'

interface Props {
  handleAction(address: string, location: google.maps.LatLngLiteral): void
}

const Home: React.FC<Props> = ({ handleAction }) => {
  const [address, setAddress] = useState<string>('')

  const handleChange = (address: string) => {
    setAddress(address)
  }

  const handleSelect = (address: string) => {
    setAddress(address)
  }

  const handleClick = () => {
    // geocodeByAddress(address)
    //   .then(results => getLatLng(results[0]))
    //   .then((latLng: google.maps.LatLngLiteral) => handleAction(latLng))

    handleAction(address, {
      lat: -23.632919,
      lng: -46.699453,
    })
  }

  return (
    <div className="autocomplete">
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="autocomplete__container">
            <InputSearch
              handleClick={handleClick}
              {...getInputProps({
                placeholder: 'Digite seu endereço...',
              })}
            />
            <div className="autocomplete__dropdown">
              {loading && (
                <div className="dropdown__loading">Procurando...</div>
              )}
              {suggestions.map((suggestion, index) => {
                const className = suggestion.active
                  ? 'suggestion__item suggestion__item--active'
                  : 'suggestion__item'
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                    })}
                    key={index}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  )
}

export default Home
