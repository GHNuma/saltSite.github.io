import React, { useState } from 'react'
import "./consultation.css"
export default function Consultation() {
    const [form,setForm]=useState({
        name:"",
        phone:""
    })

    const handleChange = e => {
    setForm({...form,[e.target.name]:e.target.value})
    }
  return (
    <div className='consultation_container'>
        <h1 className='consultation_title'>Make an appointment for a consultation</h1>
        <form className='consultation_form'>
            <div className='consultation_form_el'>
                <img alt='person_icon' src="person_icon.svg" className='consultation_form_icon'/>
                <input
                name='name'
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className='consultation_form_input'
                />
            </div>
            <div className='consultation_form_el'>
                <img alt='phone_icon' src="phone_icon.svg" className='consultation_form_icon'/>
                <input
                name='phone'
                type="text"
                value={form.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                className='consultation_form_input'
                />
            </div>
            
            <button type='submit' className='consultation_form_submit_btn'>Send</button>
        </form>
    </div>
  )
}
