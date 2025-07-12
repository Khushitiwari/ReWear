
import React from 'react';

const imageList = [
  './assets/dress1.jpg',
  '/assets/dress2.jpg',
  './assets/dress3.jpg',
  './assets/dress4.jpg',
  './assets/kurti1.jpg',
  './assets/kurti2.jpg',
  
  
  './assets/shirt1.jpg',
  './assets/kurti3.jpg',
  './assets/kurti4.jpg',
  
  
  './assets/tshirt2.jpg',
  './assets/dress1.jpg',
  '/assets/dress2.jpg',
  './assets/dress3.jpg',
  './assets/dress4.jpg',
  './assets/kurti1.jpg',
  './assets/kurti2.jpg',
  
  
  './assets/shirt1.jpg',
  './assets/kurti3.jpg',
  './assets/kurti4.jpg',
  
  
  './assets/tshirt2.jpg',
  
  
];

const ReWearScroll = () => {
  return (
    <div className="overflow-hidden w-full bg-white py-4">
      <div className="flex gap-9 scroll-animation whitespace-nowrap">
        {imageList.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`model-${index}`}
            className="w-80 h-80 rounded-full object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default ReWearScroll;
