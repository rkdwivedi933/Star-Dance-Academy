import React from 'react'
import FunctionWorkHeader from '../components/functionwork/FunctionWorkHeader'
import FunctionChoreographyInfo from '../components/functionwork/FunctionChoreographyInfo'
import FunctionServices from '../components/functionwork/FunctionServices'
import FunctionVideoSection from '../components/functionwork/FunctionVideoSection'

import ServicesCTA from '../components/functionwork/ServicesCTA'

function FunctionWork() {
  return (
    <div>
      <FunctionWorkHeader/>
      <FunctionChoreographyInfo/>
      <FunctionServices/>
      <FunctionVideoSection/>
      
      <ServicesCTA/>
    </div>
  )
}

export default FunctionWork
