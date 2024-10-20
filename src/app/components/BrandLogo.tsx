import React from 'react'
import {Data} from '../../data/Data';

import Image from 'next/image';
// logos
import logo1 from '../../images/logo1.png';
import logo2 from '../../images/Logo2.png';
import logo3 from '../../images/Logo4.png';
import logo4 from '../../images/logo5.png';
import logo5 from '../../images/logo6.png';

function BrandLogo() {
  return (
    <div className=" bg-[#0c0c0c] text-center p-10">
        <p className='text-BodyS text-[#7A7A7A]'>{Data.content.brandContent}</p>

        <div className="flex flex-row justify-center space-x-6 p-10">
            <Image src={logo1} alt='Logo'></Image>
            <Image src={logo2} alt='Logo'></Image>
            <Image src={logo3} alt='Logo'></Image>
            <Image src={logo4} alt='Logo'></Image>
            <Image src={logo5} alt='Logo'></Image>
            
        </div>
    </div>
  )
}

export default BrandLogo