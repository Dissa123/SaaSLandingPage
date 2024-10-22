import React from 'react'

interface QnaProps {
     quectionTitle : string;
     answer:string;
}


    const Qna: React.FC<QnaProps> = ({quectionTitle , answer}) =>{
        return (
            <div className=''>
                <p>{quectionTitle}</p>
                <p>{answer}</p>
            </div>
          )
    }
  


export default Qna;