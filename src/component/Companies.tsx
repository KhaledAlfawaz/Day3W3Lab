import React from 'react'

interface CompaniesProps {
    name:string,
    employeeNum:number,
    foundedYear:number,

}

function Companies(props:CompaniesProps) {
  return (
    <div className='card'>
        <h2>Company</h2>
    <h3><b>{props.name}</b></h3> 
    <p>{props.employeeNum}</p>
    <p>{props.foundedYear}</p> 
</div>
  )
}

export default Companies