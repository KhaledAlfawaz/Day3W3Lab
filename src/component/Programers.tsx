import React from 'react'

interface ProgramersProps {
    name:string,
    language:string,
    years:number,
    company:string,
}

function Programers(props:ProgramersProps) {
  return (
    <div className='card'>
    <h2>Employee</h2>
    <h3><b>{props.name}</b></h3> 
    <p>{props.years} years</p>
    <p>{props.company}</p> 
</div>
  )
}

export default Programers