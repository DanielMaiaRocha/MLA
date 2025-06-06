import React from 'react'
import Link from 'next/link'

const ProjectsCard = ({ imgUrl, title, description, country, address, site, tpn, dolby , previewURL}) => {
  return (
    <div>
        <div className="h-52 md:h-72 rounded-t-xl relative group" 
            style={{background: `url(${imgUrl})`, backgroundSize: "contain", backgroundRepeat: "false"}}>
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link href={previewURL} className='h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7bE] hover:border-white group/link' target='_blank'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 m-1.5 text-[#ADB7bE]  cursor-pointer group-hover/link:text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </Link>
        </div>
        </div>
        <div className='text-white rounded-b-xl  bg-[#19325a] py-6 px-4'>
            <h5 className='text-xl font-semibold mb-2 '>{title}</h5> 
            <p className='text-[#ADB7BE]'>{description}</p>
            <p className='text-[#ADB7BE]'>{address}</p>
            <p className='text-[#ADB7BE]'>{country}</p>
            <p className='text-[#ADB7BE]'>{tpn}</p>
            <p className='text-[#ADB7BE]'>{dolby}</p>
            <p className='text-[#ADB7BE]'>{site}</p>
        </div>
    </div>
  )
}

export default ProjectsCard