import React from 'react'
import '/ProgramacionBody.scss'
import Select from 'react-select'
const ProgramacionBody = () => {
  
   const tipo = [
    {
      id : 1,
      value : "warm up"

    },
    {
      id : 2,
      value : "oly"      
    },
    {
      id : 3,
      value : "Estructura" 

    }
   ]
  
  
  
  return (
    <div className='programacion-containter'>

      <Select>
          <option value=""></option>
      </Select>


     






    </div>
  )
}

export default ProgramacionBody