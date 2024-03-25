import { FaArrowRight } from 'react-icons/fa';


const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="card w-96 rounded bg-base-100 shadow-2xl mx-auto">
      <figure className="px-4 pt-4 ">
        <img
          src={img}
          alt="serviceimage"
          className="rounded-lg w-[314px] h-[208px]"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-[#FF3811] flex justify-between">Price: ${price} <span><FaArrowRight /></span></p>
      </div>
    </div>
  );
};

export default ServiceCard;
