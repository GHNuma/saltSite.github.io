import React from 'react'
import "./instruction.css"
export default function Instruction() {
  return (
    <div className='instruction_container'>
        <h1 className='instruction_main_text'>Instruction (online monitoring)</h1>
        <div className='instruction_content'>
            <section className='instruction_step'>
                <img className='instruction_image' alt='step1' src='step1.png'/>
                <p className='instruction_explain'>Sensor for collecting blood sugar information</p>
            </section>

            <section className='instruction_arrow_container'>
                <p className='instruction_arrow_text'>Information</p>
                <span className='instruction_arrow'>&#10230;</span>
            </section>

            <section className='instruction_step horizontal_shadow'>
                <img className='instruction_image' alt='step2' src='step2.png'/>
                <p className='instruction_explain'>App for monitoring sugar levels</p>
            </section>

            <section className='instruction_arrow_container'>
                <p className='instruction_arrow_text'>Information</p>
                <span className='instruction_arrow'>&#10230;</span>
            </section>

            <section className='instruction_step'>
                <img className='instruction_image' alt='step3' src='step3.png'/>
                <p className='instruction_explain'>The site where all the data for the doctor will ber</p>
            </section>  
        </div>
        

    </div>
  )
}
