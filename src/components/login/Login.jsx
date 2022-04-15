import React,{useState} from 'react'
import './login.css'
export default function Login() {
    const [loginForm,setLoginForm]=useState({
        name:"",
        password:""
    })
    
    const handleChange = e => {
      setLoginForm({...loginForm,[e.target.name]:e.target.value})
    }
  return (
    <div className='login_container'>
          <form className='login_form'>
            <h1 className='login_form_title'>Log in</h1>
            <div className='login_form_el'>
                <img alt='pen_icon' src="pen_icon.svg" className='login_form_icon'/>
                <input
                name='name'
                type="text"
                value={loginForm.name}
                onChange={handleChange}
                placeholder="Your name"
                className='login_form_input'
                />
            </div>
            <div className='login_form_el'>
                <img alt='pen_icon' src="pen_icon.svg" className='login_form_icon'/>
                <input
                name='pasword'
                type="password"
                value={loginForm.pasword}
                onChange={handleChange}
                placeholder="Your password"
                className='login_form_input'
                />
            </div>
            {/* <button className='login_form_login'>Login</button> */}
            <div className='login_button_container'><button className='login_button'>&#10230;</button></div>
            <button className='login_form_forgot_password'>Forgot your password?</button>
            <button className='login_form_register'>Want to register?</button>
          </form>
    </div>
  )
}
