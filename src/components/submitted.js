import React from 'react';

const Submitted = ({ question }) => {
    return (
        <div>
            <h4>Test Analysis</h4>
            {question.map((questions, index) => (
                <>
               <p className={questions.status !== 'correct' && 'highlight'}>Q{index+1}:  {questions.question}</p>
               <p>Correct Answer: {questions.answer}</p>
               </>
            ))} 
        </div>
    )
}

export default Submitted;