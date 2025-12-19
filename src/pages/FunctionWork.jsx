import React from 'react'

import FunctionChoreographyInfo from '../components/functionwork/FunctionChoreographyInfo'
import FunctionServices from '../components/functionwork/FunctionServices'
import FunctionVideoSection from '../components/functionwork/FunctionVideoSection'

import ServicesHeroSection from '../components/functionwork/ServicesHeroSection'
import CTAServices from '../components/functionwork/CTAServices'

function FunctionWork() {
  return (
    <div>
      <ServicesHeroSection/>
     
      <FunctionChoreographyInfo/>
      <FunctionServices/>
      <FunctionVideoSection/>
      <CTAServices/>
      
    </div>
  )
}

export default FunctionWork
