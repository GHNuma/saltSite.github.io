import React from 'react'
import "./download.css"
export default function Download() {
  return (
    <div className='download_container'>
        <section className='download_types_container'>
            <img className='download_image' alt='download' src='download.png'/>
            <div className='download_button_container'>
                <img alt='download_button_image' className='download_button_image' src='download_icon.png'/>
                <p className='download_text'>Download</p>
            </div>
        </section>
        <section className='download_types_container'>
            <img className='download_image telephone' alt='google play' src='phone.png'/>
            <div className='download_button_container google_play'>
                <img alt='google_play_download' className='download_button_image google_play_image' src='google_play_icon.svg'/>
                <div className='download_google_play_content'>
                    <p className='download_google_play_get_text'>GET IT ON</p>
                    <p className='download_google_play__text'>Google Play</p>
                </div>
            </div>
        </section>
        <section className='download_types_container'>
            <img className='download_image' alt='telegram bot' src='telegram.png'/>
            <div className='download_button_container'>
                <img alt='telegram_logo' className='download_button_image' src='telegram_logo.png'/>
                <p className='download_text'>Telegram bot</p>
            </div>
        </section>
    </div>
  )
}
