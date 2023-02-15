import React from 'react'
import ProgramacionBody from '../ProgramacionBody/ProgramacionBody'
import "./Panel.scss";

const Panel = (props) => {

const {tipo} = props;    

  return (
    <div className='panel'>
        {
         tipo === "AltaProgamacion" && <ProgramacionBody/>        

        }
    </div>
  )
}

export default Panel