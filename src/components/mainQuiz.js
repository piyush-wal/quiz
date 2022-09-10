import React from 'react';
import Quiz from './quiz';

const MainQuiz = () => {
    return (
        <div className='main-layout'>
            <Quiz type={1} />
            <Quiz type={2} />
        </div>
    )
}

export default MainQuiz;