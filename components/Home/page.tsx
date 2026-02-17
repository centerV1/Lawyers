import ThreeRow from "./components/ThreeRow";
import HomeContent from"./components/Home";
import History from"./components/History";
import Vision from"./components/Vision";
import Service from"./components/Service";
import WhyWe from"./components/WhyWe";
// import Experian from"./components/Experian";
import OurCustomers from "./components/OurCustomers";
import HomeExperience from "./components/HomeExperience";

export default function HomePage({ dict }: { dict: any }) {
  return (
    <div>
      <HomeContent content={dict.home.hero} />
      <div className="-mt-32 relative z-10">
        <ThreeRow />
      </div>
      <History/>
      <Vision/>
      <Service/>
      <WhyWe/>
      <HomeExperience/>
      <OurCustomers/>
    </div>
  );
}
