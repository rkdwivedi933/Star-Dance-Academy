
import DanceAcademyHeader from '../components/DanceAcademy/DanceAcademyHeader'
import DanceAcademyAbout from '../components/DanceAcademy/DanceAcademyAbout'
import DanceAcademyFeatures from '../components/DanceAcademy/DanceAcademyFeatures'
import DanceClassesSection from '../components/DanceAcademy/DanceClassesSection'
import InstructorSection from '../components/DanceAcademy/InstructorSection'

import CTAabout from '../components/DanceAcademy/CTAabout'

function DanceAcademy() {
  return (
    <div>
     <DanceAcademyHeader/>
     <DanceAcademyAbout/>
     <DanceAcademyFeatures/>
     <DanceClassesSection/>
     <InstructorSection/>
     <CTAabout/>
     
    </div>
  )
}

export default DanceAcademy
