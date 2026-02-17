// app/about/[id]/page.tsx
import { notFound } from "next/navigation";
import { teamData } from "@/data/Team";
import Hero from "@/components/about/_components/Hero";
import MemberBio from "@/components/about/_components/MemberBio";
import OtherTeam from "@/components/about/_components/OtherTeam";

export default async function TeamMemberDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const member = teamData.find((t) => t.id === id);
  
  if (!member) notFound();

  return (
    <main className="min-h-screen bg-white">
      <Hero />
      
      <MemberBio member={member} />
      
      <OtherTeam currentId={id} />
    </main>
  );
}