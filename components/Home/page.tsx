import ThreeRow from "./components/ThreeRow";
import HomeContent from"./components/Home";
import History from"./components/History";
import Vision from"./components/Vision";
import Service from"./components/Service";
import WhyWe from"./components/WhyWe";
import Experian from"./components/Experian";
import Commment from"./components/Commment";

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
      <Experian/>
      <Commment/>
    </div>
  );
}
