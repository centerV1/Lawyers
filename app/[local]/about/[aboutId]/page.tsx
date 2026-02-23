import { notFound } from "next/navigation";
import { teamData } from "@/data/Team";
import Hero from "@/components/about/_components/Hero";
import MemberBio from "@/components/about/_components/MemberBio";
import OtherTeam from "@/components/about/_components/OtherTeam";

type PageProps = {
  params: Promise<{
    aboutId: string;
  }>;
};

export default async function TeamMemberDetailPage({ params }:PageProps) {
  const { aboutId } = await params;
  const currentId = Number(aboutId);
  const member = teamData.find((item) => item.aboutId === Number(aboutId),);
  
    if (!member) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Hero />
      
      <MemberBio member={member} />
      
      <OtherTeam currentId={currentId} />
    </main>
  );
}