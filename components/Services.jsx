import React from 'react';
import { ServiceCard } from "./index"

const Services = () => {
  return (
    <div className="max-w-2xl text-center">
      <h2 className="text-2xl font-bold mb-4">Services Offered</h2>
      <ServiceCard title="Engaging Presentations on Thinkering with Numbers"/>
      <ServiceCard title="Interactive Workshops and Training Sessions"/>
      <ServiceCard title="Consultations for Numeric Problem-Solving"/>
    </div>
  );
};

export default Services;
