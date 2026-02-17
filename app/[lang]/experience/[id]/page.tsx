// app/experience/[id]/page.tsx
import { notFound } from "next/navigation";
import { experienceData } from "@/data/Experience";
import ExperienceHero from "@/components/experience/component/Hero";
import SingleExperience from "@/components/experience/component/SingleExperience";
import OtherExperiences from "@/components/experience/component/OtherExperiences";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ExperienceDetailPage({ params }: PageProps) {
  const { id } = await params;
  const currentId = Number(id);
  const experience = experienceData.find((item) => item.id === currentId);

  if (!experience) notFound();

  return (
    <main className="min-h-screen bg-white">
      <ExperienceHero />
      <SingleExperience experience={experience} />
      <div className="mt-20"> 
        <OtherExperiences currentId={currentId} />
      </div>
    </main>
  );
}