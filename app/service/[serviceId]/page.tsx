import { notFound } from "next/navigation";
import { serviceData } from "@/data/Service";
import SingleService from "@/components/Service/component/SingleService";
import Hero from "@/components/Service/component/Hero";
import OtherService from "@/components/Service/component/OtherService";

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
      <Hero service={service} />
      <SingleService service={service} />
      <div className="mt-20">
        <OtherService currentId={currentId} />
      </div>
    </div>
  );
}
