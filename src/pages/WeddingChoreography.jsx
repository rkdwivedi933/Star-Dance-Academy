import React from 'react'
import WeddingHero from '../components/wedding/WeddingHero'
import CoupleDanceInfo from '../components/wedding/CoupleDanceInfo'
import Choreography from '../components/wedding/Choreography'
import PricingPackage from '../components/wedding/PricingPackages'
import WeddingGallery from '../components/wedding/WeddingGallery'
import CTAToContact from '../components/wedding/CTAToContact'

function WeddingChoreography() {
  return (
    <div>
      <WeddingHero/>
      <CoupleDanceInfo/>
      <Choreography/>
      <PricingPackage/>
      <WeddingGallery/>
      <CTAToContact/>
    </div>
  )
}

export default WeddingChoreography
