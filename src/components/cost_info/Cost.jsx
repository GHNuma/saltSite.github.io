import React from 'react'
import "./cost.css"
export default function Cost() {
  return (
    <div className='diabet_container'>
        <h1 className='diabet_main_text'>Diabetes mellitus costs Kazakhstan about $1 billion annually.</h1>
        <p className='diabet_under_text'>According to unofficial data, 10% of the adult population of the country suffers from this disease</p>
        <div className='diabet_content'>
                <img alt='diabet' src='diabet.png' className='diabet_image'/>
                <p className='diabet_explain'>Kairat Davletov, Director of the Institute of Health, Al-Farabi Kazakh National University, said that 373,183 people in the country are currently diagnosed with diabetes mellitus. However, official statistics are far from the real picture. Davletov noted that according to randomized epidemiological studies, the prevalence of diabetes in Kazakhstan reaches 10% among the adult population, which is several times higher than official figures.
<br/>
<br/>
Analysis of data from the National Register of Diabetes Mellitus of the Republic of Kazakhstan showed an annual increase in the prevalence of diabetes mellitus in Almaty from 1.74 to 2.31% from 2015 to 2019, with a trend of 7% average annual increase.</p>
                {/* <p></p> */}
        </div>
    </div>
  )
}
