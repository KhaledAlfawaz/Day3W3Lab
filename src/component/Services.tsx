import React from 'react'

interface ServicesProps {
    servicesType:string,
    price:number,
}

function Services(props:ServicesProps) {
  return (
    <div className='card'>
        <h2>Serviec</h2>
    <h3><b>{props.servicesType}</b></h3> 
    <p>{props.price + "$"}</p>
</div>
  )
}

export default Services