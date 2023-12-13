import React from 'react'

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className='rounded-lg bg-gray-200 m-4 p-4 flex flex-col'>
        <icon />
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default ServiceCard