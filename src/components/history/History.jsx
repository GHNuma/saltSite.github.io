import React from 'react'
import "./history.css"
export default function History() {
  return (
    <div className='history_container'>
        <div className='history_title'>
            <p className='history_title_text'>
                Patients 
            </p>
        </div>
        <div className='history_content'>
            <section className='history_clients_list'>
                <div className='each_client_container'>
                    <p className='each_client_name'>
                        S.Aslan
                    </p>
                </div>
                <div className='each_client_container'>
                    <p className='each_client_name'>
                        K.Azamat
                    </p>
                </div>
            </section>
            <section className='table'>
                
            </section>
        </div>
    </div>
  )
}
