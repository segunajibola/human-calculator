import React from "react";
import { ServiceCard, serviceData } from "./index";

const Services = () => {
  return (
    <div className="max-w-2xl text-center">
      <h2 className="text-2xl font-bold mb-4">Services Offered</h2>
      {serviceData.map((service) => (
        <ServiceCard
          key={service.id}
          icon={service.icon}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
};

export default Services;
