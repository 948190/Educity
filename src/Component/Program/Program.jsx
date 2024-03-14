import React from 'react'
import './Program.css'
import Program_1 from '../../assets/program-1.png'
import Program_2 from '../../assets/program-2.png'
import Program_3 from '../../assets/program-3.png'
import program_icon_1  from'../../assets/program-icon-1.png'
import program_icon_2  from'../../assets/program-icon-2.png'
import program_icon_3  from'../../assets/program-icon-3.png'





const Program = () => {
  return (
    <div className='programs'>
        <div className='program'>
            <img src={Program_1}/>
            <div className='caption'>
                <img src={program_icon_1} alt=''/>
                <p>Graduation</p>
            </div>
        </div>
        <div className='program'>
            <img src={Program_2}/>
            <div className='caption'>
                <img src={program_icon_2} alt=''/>
                <p>Master</p>
            </div>
        </div>
        <div className='program'>
            <img src={Program_3}/>
            <div className='caption'>
                <img src={program_icon_3} alt=''/>
                <p>post Graduation</p>
            </div>
            

        </div>
        

    </div>
  )
}

export default Program