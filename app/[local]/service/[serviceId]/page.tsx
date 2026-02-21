import { notFound } from "next/navigation";
import { serviceData } from "@/data/Service";
import SingleService from "@/components/Service/component/SingleService";
import OtherService from "@/components/Service/component/OtherService";
import HeroService from "@/components/Service/component/HeroService";

type PageProps = {
  params: Promise<{
    serviceId: string;
  }>;
};

export default async function ServicePage({ params }: PageProps) {
  const { serviceId } = await params;
  const currentId = Number(serviceId);
  const service = serviceData.find(
    (item) => item.serviceId === Number(serviceId),
  );

  if (!service) {
    notFound();
  }

  return (
    <div>
      <HeroService service={service} />
      <SingleService service={service} />
      <div className="mt-20">
        <OtherService currentId={currentId} />
      </div>
    </div>
  );
}
