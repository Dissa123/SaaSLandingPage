import React from 'react'
import {questionData} from '../../data/qna';
import Qna from './qna_render';
function qna() {
  return (
    <div className="">
        {questionData.map((qna, index)=>(
            <Qna
            key ={index} 
            quectionTitle={qna.quectionTitle}
            answer={qna.answer}
            />
        ))}
    </div>
  )
}

export default qna