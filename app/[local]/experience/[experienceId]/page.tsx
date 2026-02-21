import { notFound } from "next/navigation";
import { experienceData } from "@/data/Experience";
import ExperienceHero from "@/components/experience/component/Hero";
import SingleExperience from "@/components/experience/component/SingleExperience";
import OtherExperiences from "@/components/experience/component/OtherExperiences";

type PageProps = {
  params: Promise<{ 
    experienceId: string 
  }>;
};

export default async function ExperienceDetailPage({ params }: PageProps) {
  const { experienceId } = await params;
  const currentId = Number(experienceId);
  const experience = experienceData.find(
    (item) => item.experienceId === currentId,
  );

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
