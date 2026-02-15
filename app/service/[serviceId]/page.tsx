import { notFound } from "next/navigation";
import { serviceData } from "@/data/Service";
import SingleService from "@/components/Service/component/SingleService";
import Hero from "@/components/Service/component/Hero";

type PageProps = {
  params: Promise<{
    serviceId: string;
  }>;
};

export default async function ServicePage({ params }: PageProps) {
  const { serviceId } = await params;

  const service = serviceData.find(
    (item) => item.serviceId === Number(serviceId)
  );

  if (!service) {
    notFound();
  }
  

  return (
    <div>
      <Hero/>
      <SingleService service={service} />
    </div>
  );
}
