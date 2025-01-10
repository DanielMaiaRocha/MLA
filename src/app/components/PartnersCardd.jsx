import React from 'react';
import Link from 'next/link';

const ProjectsCard = ({ imgUrl, title, description, country, state, tpnBadge, dolbyAtmos, siteURL }) => {
  return (
    <div>
      <div
        className="h-48 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: 'cover' }}
      >
        {/* Image Section */}
      </div>
      <div className="text-white rounded-b-xl bg-[#0D1D38] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] mb-4">{description}</p>
        <div className="text-sm  mb-2">
          <p>
            <strong >Country:</strong> <span className='text-[#E6C88A]'>{country}</span>
          </p>
          <p>
            <strong >State:</strong> <span className='text-[#E6C88A]'>{state}</span>
          </p>
        </div>
        <div className="mb-2">
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
              tpnBadge === 'gold' ? 'bg-yellow-500 text-black' : 'bg-blue-500 text-white'
            }`}
          >
            TPN Badge: {tpnBadge.charAt(0).toUpperCase() + tpnBadge.slice(1)}
          </span>
        </div>
        <p className="text-sm text-[#ADB7BE] mb-4">
          <strong>Dolby ATMOS:</strong> {dolbyAtmos ? 'Yes' : 'No'}
        </p>
        <Link
          href={siteURL}
          className="text-[#E6C88A] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Website
        </Link>
      </div>
    </div>
  );
};

export default ProjectsCard;
