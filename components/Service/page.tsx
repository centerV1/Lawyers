"use client";

import OurCustomers from "../about/_components/OurCustomers";
import Hero from "./component/Hero";
import Service from "./component/Service";

export default function ServicePage() {
  return (
    <div>
      <Hero/>
      <Service/>
      <OurCustomers />
    </div>
  )
}