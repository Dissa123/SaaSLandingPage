import React from 'react'
import { Data } from '../../data/Data';

function Hero() {
    return (
        <div className="flex flex-col space-y-8 text-center bg-custom-gradient-hero h-lvh">
            <div className="flex justify-center"> 
                <button className='text-white text-Tag border rounded-buttonBorder border-white w-[229px] h-[31px]'>{Data.button.heroButton}</button></div>

            <h1 className='text-white text-h1'>{Data.content.heroTitle}</h1>
            <div className="flex justify-center">
            <p className='justify-center text-white text-BodyLarge w-[457px] h-[93px] '>{Data.content.heroPara}</p>
            </div>
            

            <div className="flex justify-center">
                <button className='w-115px h-39px bg-white text-black text-BodyBold rounded-buttonBorder'>{Data.button.headerButtonTxt}</button>
            </div>
        </div>
    )
}

export default Hero