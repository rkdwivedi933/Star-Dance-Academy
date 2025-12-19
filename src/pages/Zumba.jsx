

import WhatIsZumba from '../components/zumba/WhatIsZumba'
import ZumbaBenefits from '../components/zumba/ZumbaBenefits'
import ZumbaClassTimings from '../components/zumba/ZumbaClassTimings'
import ZumbaGallery from '../components/zumba/ZumbaGallery'

import ZumbaHeroSection from '../components/zumba/ZumbaHeroSection'
import CTAZumba from '../components/zumba/CTAZumba'

function Zumba() {
  return (
    <div>
      <ZumbaHeroSection/>
      
       <WhatIsZumba/>
      <ZumbaBenefits/> 
      <ZumbaClassTimings/>
      <ZumbaGallery/>
      <CTAZumba/>
      
    </div>
  )
}

export default Zumba
