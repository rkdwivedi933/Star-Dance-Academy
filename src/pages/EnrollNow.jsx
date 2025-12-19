import EnrollContactInfo from "../components/enrollnow/EnrollContactInfo";
import EnrollForm from "../components/enrollnow/EnrollForm";
import EnrollHeroSection from "../components/enrollnow/EnrollHeroSection";
import GoogleMapSection from "../components/enrollnow/GoogleMapSection";
import SocialMediaSection from "../components/enrollnow/SocialMediaSection";

function EnrollNow() {
  return (
    <div>
      <EnrollHeroSection />

      <EnrollContactInfo />
      <EnrollForm/>
      <GoogleMapSection/>
      <SocialMediaSection/>
    </div>
  );
}

export default EnrollNow;
