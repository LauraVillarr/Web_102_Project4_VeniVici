import React from 'react'

const APIDogInfo = ({dogValues, currentDogName, onSubmit, addToBannedList}) => {
  return (
    <div className='dog_api_container'>
      {dogValues.url == "" ? (
        <div></div>
      ) : (
        <div className='dog_info'>
          <h3>{currentDogName}</h3>
          <div className='dog_attribute_container'>
          <button className='dog_attribute' onClick={event => addToBannedList(dogValues.breed)}>{dogValues.breed}</button>
          <button className='dog_attribute'>{dogValues.breed_group}</button>
          <button className='dog_attribute'>{dogValues.life_span}</button>
          <button className='dog_attribute'>{dogValues.weight}</button>
          </div>
          <img 
            className='dog_img'
            src={dogValues.url}
            alt="Dog picture returned"
          />
          </div>
      )}
      <button type="submit" className='button' onClick={onSubmit}>🔀 Discover</button>
    </div>
  )
}

export default APIDogInfo;
