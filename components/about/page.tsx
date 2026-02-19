"use client";
import Vision from "../Home/components/Vision";
import Hero from "./_components/Hero";
import History from "./_components/History";
import OurCustomers from "./_components/OurCustomers";
import OurTeam from "./_components/OurTeam";
import VisionMission from "./_components/VisionMission";

export default function AboutPageContent() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <History />
      <Vision/>
      <OurTeam/>
      <OurCustomers />
    </main>
  );
}