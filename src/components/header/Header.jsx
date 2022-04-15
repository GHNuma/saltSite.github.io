import React from 'react'
import "./header.css"
export default function Header() {
  return (
    <div className="divider">
        <section className="main_side">
            <a href='/'><img alt="logo" src="logo.jpg" className="logo"/></a>
            <div className="logo_info">
                <h1 className="site_name">Sugartest.com</h1>
                <hr/>
                <p className="slang">Your health is the goal of our work!</p>
            </div>
        </section>

        <section className="auth_side">
            <a className="button login" href='/auth'>Log in</a>
            <a className="button registration">Registration</a>
            <img alt="profile" src="profile_icon.svg"/>
        </section>
    </div>
  )
}
