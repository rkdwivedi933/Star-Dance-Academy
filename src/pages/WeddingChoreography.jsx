import React from 'react'


import Choreography from '../components/wedding/Choreography'
import PricingPackage from '../components/wedding/PricingPackages'
import WeddingGallery from '../components/wedding/WeddingGallery'

import WeddingHeroSection from '../components/wedding/WeddingHeroSection'
import CTAWedding from '../components/wedding/CTAWedding'
import AboutWedding from '../components/wedding/AboutWedding'

function WeddingChoreography() {
  return (
    <div>
      <WeddingHeroSection/>
     <AboutWedding/>
      
      <Choreography/>
      <PricingPackage/>
      <WeddingGallery/>
      <CTAWedding/>
      
    </div>
  )
}

export default WeddingChoreography
