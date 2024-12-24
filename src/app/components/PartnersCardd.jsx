import React from 'react';
import Link from 'next/link';

const PartnersCardd = ({ imgUrl, title, country, previewURL }) => {
  return (
    <div className="flex bg-[#0D1D38] rounded-xl overflow-hidden shadow-lg">
      {/* Logo Section */}
      <div
        className="w-60 h-auto  bg-cover bg-center"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      ></div>

      {/* Content Section */}
      <div className="w-auto p-4 flex flex-col justify-center text-white">
        <h5 className="text-xl font-semibold text-[#E6C88A] mb-2">{title}</h5>
        <p className="text-[#ADB7BE] mb-1">
          <strong>Country:</strong> {country}
        </p>
        {/* Link */}
        <Link
          href={previewURL}
          target="_blank"
          className="mt-2 text-[#E6C88A] hover:text-[#F4D29F] underline"
        >
          Click on the card to go to their website
        </Link>
      </div>
    </div>
  );
};

export default PartnersCardd;
