import React from 'react'
import "./footer.css"
export default function Footer() {
  return (
    <div className='footer_container'>
        <section className='footer_each_row main_row'>
            <div className='footer_logo_content'>
                <img alt='logo' src='logo.jpg' className='footer_logo'/>
                <div className='footer_logo_info'>
                    <h1 className='footer_site_name'>Sugartest.com</h1>
                    <hr/>
                    <p className='footer_slang'>Your health is the goal of our work!</p>
                </div>
            </div>
            <div className='social_medias_container'>
                <a href='/' className='each_social_media fa fa-4x fa-brands fa-whatsapp whatsapp' />
                <a href='/' className='each_social_media fa fa-4x fa-brands fa-instagram instagram' />
                <a href='/' className='each_social_media fa fa-4x fa-brands fa-twitter twitter' />
                <a href='/' className='each_social_media fa fa-4x fa-brands fa-telegram telegram' />
            </div>
        </section>
        <br/>
        <section className='footer_each_row info_row'>
            <div className='admin_info_container'>
                <img alt='phone_icon' src='phone_icon.svg' className='admin_info_icon'/>
                <p className='admin_info_text'>Phone number:&nbsp;&nbsp;&nbsp;<a href='tel:8(705)965-65-22'>8(705)965-65-22</a></p>
            </div>
            <div className='admin_info_container'>
                <img alt='address_icon' src='address_icon.svg' className='admin_info_icon'/>
                <p className='admin_info_text'>Address:&nbsp;&nbsp;&nbsp;Almaty, 050040, 71 Al-Farabi Avenue</p>
            </div>
        </section>
        <section className='footer_each_row created_row'>
            <img alt='created_icon' src='created_icon.svg' className='created_icon'/>
            <p className='created_text'>Created by KazNU students</p>
        </section>
    </div>
  )
}
