
import ZumbaHero from '../components/zumba/ZumbaHero'
import WhatIsZumba from '../components/zumba/WhatIsZumba'
import ZumbaBenefits from '../components/zumba/ZumbaBenefits'
import ZumbaClassTimings from '../components/zumba/ZumbaClassTimings'
import ZumbaGallery from '../components/zumba/ZumbaGallery'
import ZumbaCTA from '../components/zumba/ZumbaCTA'

function Zumba() {
  return (
    <div>
      <ZumbaHero/>
       <WhatIsZumba/>
      <ZumbaBenefits/> 
      <ZumbaClassTimings/>
      <ZumbaGallery/>
      <ZumbaCTA/>
    </div>
  )
}

export default Zumba
