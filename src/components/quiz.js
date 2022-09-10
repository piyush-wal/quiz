import React, { useEffect, useState, useRef } from 'react';
import Select from 'react-select'
import Question from './question';
import { useSelector, useDispatch } from 'react-redux';
import Submitted from './submitted';
import { setSubmitted, setScore, setTimer, setIndex, setQs, reset } from '../actions/quiz';
import { customStyles, questionRange, numberRange, operator } from '../utils';

const Quiz = ({ type }) => {
    const [questionNumber, setQuestionNumber] = useState('')
    const [numRange, setNumRange] = useState('')
    const [operators, setOperators] = useState('')
    const [selectedOption, setSelectedOption] = useState('')
    const timeout = useRef(null);
    const dispatch = useDispatch();
    const quizState = useSelector(state => type === 1 ? state.quiz.quiz : state.quiz.quiz2)

    const handleQs = value => setQuestionNumber(value)

    const handleNumRange = value => setNumRange(value)

    const handleOperator = value => setOperators(value)

    const handleNext = () => {
        const question = quizState.questions;
        if (selectedOption !== '') {
            const isCorrect = selectedOption === question[quizState.currentIndex].correctAnsIndex
            if (isCorrect) {
                dispatch(setScore({
                    type: type,
                    score: quizState.score + 1
                }))
            }
            question[quizState.currentIndex] = {
                ...question[quizState.currentIndex],
                status: isCorrect ? 'correct' : 'wrong'
            }
        } else {
            question[quizState.currentIndex] = {
                ...question[quizState.currentIndex],
                status: 'unAns'
            }
        }
        clearTimeout(timeout.current)
        if (quizState.currentIndex < quizState.questions.length - 1) {
            dispatch(setTimer({
                type: type,
                timer: 20
            }));
            dispatch(setIndex({
                type: type,
                currentIndex: quizState.currentIndex + 1
            }))
        } else {
            clearTimeout(timeout.current)
            dispatch(setSubmitted({
                type: type,
                submitted: true
            }))
        }
        dispatch(setQs({
            type: type,
            questions: question
        }))
        setSelectedOption('')
    }

    const selectAnswer = (optionIndex) => {
        setSelectedOption(optionIndex)
    }

    useEffect(() => {
        if (quizState.questions.length > 0 && quizState.currentIndex !== quizState.questions.length) {
            if (quizState.timer > 0) {
                timeout.current = setTimeout(() => {
                    dispatch(setTimer({
                        type: type,
                        timer: quizState.timer - 1
                    }));
                }, 1000)
            } else {
                clearTimeout(timeout.current)
                if (!quizState.submitted) {
                    handleNext()
                }
            }

        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quizState])

    const getAns = (a, b) => {
        switch (operators.label) {
            case 'Addition':
                return a + b;

            case 'Substraction':
                return a - b;

            case 'Multiplication':
                return a * b;

            case 'Division':
                return a / b;

            default:
                return a + b;
        }
    }

    const geneRateOptions = ans => {
        const opt = []
        for (let i = 0; i < 4; i++) {
            const num = Math.floor(Math.random() * 100)
            if (num !== ans) {
                opt.push(num)
            } else {
                opt.push(num - 5)
            }
        }
        return opt;
    }

    const handleStartQuiz = () => {
        const qs = [];
        for (let i = 0; i < questionNumber.value; i++) {
            const a = Math.floor(Math.random() * numRange.value);
            const b = Math.floor(Math.random() * numRange.value + 1);
            const answer = getAns(a, b)
            const options = geneRateOptions(answer);
            const correctAnsIndex = Math.floor(Math.random() * 4)
            options[correctAnsIndex] = answer;

            const obj = {
                id: i,
                question: `${a} ${operators.value} ${b} ?`,
                options: options,
                answer: answer,
                correctAnsIndex: correctAnsIndex
            }

            qs.push(obj);
        }
        dispatch(setQs({
            type: type,
            questions: qs
        }))
        dispatch(setTimer({
            type: type,
            timer: 20
        }));
    }

    const handleReset = () => {
        setQuestionNumber('');
        setNumRange('');
        setOperators('')
        dispatch(reset({
            type: type
        }))
    }

    return (
        <div className='quiz-layout'>
            {quizState.questions.length === 0 ?
                <>
                    <h2>Welcome to Maths Quiz.</h2>
                    <div className='dropdown'>
                        <label>Please Select Number of questions in quiz</label>
                        <Select styles={customStyles} value={questionNumber} onChange={handleQs} options={questionRange} />
                    </div>
                    <div className='dropdown'>
                        <label>Please Select Number Range</label>
                        <Select styles={customStyles} value={numRange} onChange={handleNumRange} options={numberRange} />
                    </div>
                    <div className='dropdown'>
                        <label>Please Select Operation Mode</label>
                        <Select styles={customStyles} value={operators} onChange={handleOperator} options={operator} />
                    </div>
                    <button onClick={handleStartQuiz}>Start Quiz</button>
                </> :
                <>
                    <div className='score-div'>
                        <h2>Score: {quizState.score}</h2>
                        <button className='reset-button' onClick={handleReset}>Reset Quiz</button>
                    </div>
                    {quizState.submitted ? <Submitted question={quizState.questions} /> :
                        <>
                            <h2>Question {quizState.currentIndex + 1} out of {quizState.questions.length}</h2><span>Time Remaining: {quizState.timer}</span>
                            <Question selectedOption={selectedOption} selectAnswer={selectAnswer} qs={quizState.questions[quizState.currentIndex]} />
                            <button onClick={handleNext}>{quizState.currentIndex === quizState.questions.length - 1 ? 'Finish' : 'Next'}</button>
                        </>
                    }
                </>
            }
        </div>
    )
}

export default Quiz;