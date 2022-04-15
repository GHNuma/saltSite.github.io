import React from 'react'
import Banner from '../components/banner/Banner';
import Cost from '../components/cost_info/Cost';
import Instruction from '../components/instruction/Instruction';
import Download from '../components/download/Download';
import Consultation from '../components/consultation/Consultation';
import Footer from '../components/footer/Footer';


export default function Home() {
  return (
    <>
        <Banner/>
        <br/>
        <Cost/>
        <br/>
        <Instruction/>
        <br/>
        <Download/>
        <br/>
        <Consultation/>
        <Footer/>
    </>
  )
}
