import React from 'react'
import {Data} from '../../data/Data';
import Image from 'next/image';
import img from '../../images/App-Night.png';
function fouthContainer() {
  return (
    <div className="flex flex-col space-y-10 size-full bg-custom-gradient-fouth">
        <h1 className='text-h2 text-center text-white'>{Data.content.fouthCon_title}</h1>

        <div className="flex flex-row justify-center">
        <p className='text-BodyLarge text-center text-white w-[535px]'>{Data.content.fouthCon_para}</p>
        </div>
       

        <div className="flex justify-center">
            <Image src={img} alt='Night image' ></Image>
        </div>
    </div>
  )
}

export default fouthContainer