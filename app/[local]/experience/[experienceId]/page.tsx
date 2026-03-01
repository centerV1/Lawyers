import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { experienceData } from "@/data/Experience";
import ExperienceHero from "@/components/experience/component/HeroExperience";
import SingleExperience from "@/components/experience/component/SingleExperience";
import OtherExperiences from "@/components/experience/component/OtherExperiences";

type PageProps = {
  params: Promise<{ 
    experienceId: string 
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { experienceId } = await params;
  const experience = experienceData.find((item) => item.experienceId === Number(experienceId));
  return {
    title: experience?.title_th || experience?.title_en || "ประสบการณ์",
  };
}

export default async function ExperienceDetailPage({ params }: PageProps) {
  const { experienceId } = await params;
  const currentId = Number(experienceId);
  const experience = experienceData.find(
    (item) => item.experienceId === currentId,
  );

  if (!experience) notFound();

  return (
    <main className="min-h-screen bg-white">
      <ExperienceHero experience={experience} />
      <SingleExperience experience={experience} />
      <div className="mt-20">
        <OtherExperiences currentId={currentId} />
      </div>
    </main>
  );
}
