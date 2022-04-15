import React from 'react'
import "./banner.css"
export default function Banner() {
  return (
    <div className='monitoring_container'>
        <div className='monitoring_content'>
            <h1 className='monitoring_text'>Monitoring Of Diabetes Mellitus</h1>
            <hr className='line'/>
        </div>
        <p className='explains with_shadow'>Blood sugar monitoring is not a whim or a useless study, but a vital necessity for patients with diabetes mellitus. Sharp and high-amplitude fluctuations in blood glucose levels are fraught with both early and delayed complications that occur during the long course of diabetes mellitus.</p>
        <p className='explains'>Continuous glucose monitoring allows you to monitor both hypoglycemia and hyperglycemia, which is not always accompanied by characteristic clinical signs. Based on the results of glycemia monitoring, leading endocrinologists of the Zaporozhye Regional Clinical Hospital conduct an individual selection of the most effective type of treatment or correct the existing therapy regimen.</p>
    </div>
  )
}
