import  History  from "@/components/Home/History";
import HomeContent from "@/components/Home/Home";
import ThreeRow from "@/components/Home/ThreeRow";
export default function Home() {
  return (
    <div>
      <HomeContent />
      <div className="-mt-32 relative z-10">
        <ThreeRow />
      </div>
      <History/>
    </div>
  );
}
