import React from 'react';
import Image from 'next/image';


interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
  }
  
const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-[#0D0D0D] rounded-lg shadow-md p-4">
      <Image src={imageUrl} alt={title} width={100} height={100} />
      <h2 className="text-xl font-bold text-center text-white">{title}</h2>
      <p className="text-white text-center">{description}</p>
    </div>
  );
}

export default Card