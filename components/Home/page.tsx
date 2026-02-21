import ThreeRow from "./components/ThreeRow";
import HomeContent from"./components/Home";
import History from"./components/History";
import Vision from"./components/Vision";
import Service from"./components/Service";
import WhyWe from"./components/WhyWe";
import OurCustomers from "../about/_components/OurCustomers";
import HomeExperience from "./components/HomeExperience";

export default function HomePage() {
  return (
    <div>
      <HomeContent/>
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
