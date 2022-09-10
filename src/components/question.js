import React from 'react';

const Question = ({ qs, selectAnswer, selectedOption }) => {
    return (
        <div>
            <p>Question: {qs?.question}</p>
            <div className='dropdown'>
                {qs?.options.map((question, index) => (
                    <button disabled={selectedOption === index} className='optionBtn' onClick={() => selectAnswer(index)}>{question}</button>
                ))
                }
            </div>
        </div>
    )
}

export default Question;