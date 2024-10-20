import React from 'react';
import { Data } from '../../data/Data';
import Image from 'next/image';
import img from '../../images/logo.png'
// Font Awosome link
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
  return (

    // minHeader
    <div className="">
      <div className="bg-custom-gradient p-header-padding text-center flex flex-row justify-center">
        <p className='text-BodySmallTag'>{Data.minHeader.textOne}</p>
        <p className='text-BodySmallTag'>{Data.minHeader.textTwo}</p>
        {/* <FontAwesomeIcon icon={faArrowRight} className='arrowIcon'/> */}
      </div>

      {/* header of down */}
      <div className="bg-black p-header-down flex justify-center justify-between">
        <Image src={img} alt='Logo' width={150} height={150}/>
        <button className='bg-white text-black text-BodyBold   w-115px h-39px rounded-buttonBorder justify-end'>{Data.button.headerButtonTxt}</button>
      </div>
    </div>

  )
}
