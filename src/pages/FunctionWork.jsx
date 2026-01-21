import React from 'react'

import FunctionChoreographyInfo from '../components/functionwork/FunctionChoreographyInfo'

import FunctionVideoSection from '../components/functionwork/FunctionVideoSection'

import ServicesHeroSection from '../components/functionwork/ServicesHeroSection'
import CTAServices from '../components/functionwork/CTAServices'

import FunctionCards from '../components/functionwork/FunctionCard'

function FunctionWork() {
  return (
    <div>
      <ServicesHeroSection/>
     
      <FunctionChoreographyInfo/>
      <FunctionCards/>
      <FunctionVideoSection/>
      <CTAServices/>
      
    </div>
  )
}

export default FunctionWork
