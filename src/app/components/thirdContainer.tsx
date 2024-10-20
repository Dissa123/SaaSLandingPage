import React from 'react'
import { cardData, Data } from '../../data/Data';
import Card from './thirdCard';
function thirdContainer() {
    return (
        <div className="flex flex-col space-y-10 pt-10 size-full items-center bg-black pb-10">
            <div className='text-h2 w-[512px] text-center text-white'>{Data.content.thirdCon}</div>
            <div className='text-BodyLarge w-[512px] text-center text-white'>{Data.content.thirdConPara}</div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {cardData.map((card, index) => (
                    <Card key={index}
                        title={card.title}
                        description={card.description}
                        imageUrl={card.imageUrl}
                    />
                ))}
            </div>
        </div>
    )
}

export default thirdContainer