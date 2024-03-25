import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => {
            setServices(data)
        })
    },[])
  return (
    <div className="mt-4">
      <div className="text-center space-y-5">
        <h2 className="text-[#FF3811] font-bold">Service</h2>
        <h1 className="text-4xl font-bold">Our Service Area</h1>
        <p className="w-1/2 mx-auto">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.
        </p>
      </div>
      <div className="mt-6 mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            services?.map( service => <ServiceCard
            key={service._id}
            service={service}
            ></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Services;
