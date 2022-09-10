import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
    const quiz1 = useSelector(state => state.quiz.quiz)
    const quiz2 = useSelector(state => state.quiz.quiz2)
    const score1 = quiz1.score;
    const score2 = quiz2.score;
    let attemptedQuiz = quiz1.questions.length > 0 && quiz2.questions.length > 0 ? 2 : 1

    return (
        <h2>
            Cummulative Score: {(score1 + score2)/attemptedQuiz}
        </h2>
    )
}

export default Header;