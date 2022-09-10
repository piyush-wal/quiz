import { RESET_QUIZ, SET_SUBMITTED, SET_SCORE, SET_INDEX, SET_QUESTIONS, SET_TIMER } from '../actions/quiz';

const initialState = {
    quiz: {
        qsCount: '',
        questions: [],
        operator: '',
        numberRange: '',
        currentIndex: 0,
        timer: 20,
        score: 0,
        submitted: false
    },
    quiz2: {
        qsCount: '',
        questions: [],
        operator: '',
        numberRange: '',
        currentIndex: 0,
        timer: 20,
        score: 0,
        submitted: false
    }
};

const quiz = (state = initialState, action) => {
    switch (action.type) {
        case RESET_QUIZ:
            if (action.payload.type === 2) {
                return {
                    ...state,
                    quiz2: {
                        ...state.quiz2,
                        qsCount: '',
                        questions: [],
                        operator: '',
                        numberRange: '',
                        currentIndex: 0,
                        timer: 20,
                        score: 0,
                        submitted: false
                    }
                }
            } else {
                return {
                    ...state,
                    quiz: {
                        ...state.quiz2,
                        qsCount: '',
                        questions: [],
                        operator: '',
                        numberRange: '',
                        currentIndex: 0,
                        timer: 20,
                        score: 0,
                        submitted: false
                    }
                }
            }

        case SET_SUBMITTED:
            if (action.payload.type === 2) {
                return { ...state, quiz2: { ...state.quiz2, submitted: action.payload.submitted } }
            } else {
                return { ...state, quiz: { ...state.quiz, submitted: action.payload.submitted } }
            }

        case SET_SCORE:
            if (action.payload.type === 2) {
                return { ...state, quiz2: { ...state.quiz2, score: action.payload.score } }
            } else {
                return { ...state, quiz: { ...state.quiz, score: action.payload.score } }
            }

        case SET_TIMER:
            if (action.payload.type === 2) {
                return { ...state, quiz2: { ...state.quiz2, timer: action.payload.timer } }
            } else {
                return { ...state, quiz: { ...state.quiz, timer: action.payload.timer } }
            }

        case SET_INDEX:
            if (action.payload.type === 2) {
                return { ...state, quiz2: { ...state.quiz2, currentIndex: action.payload.currentIndex } }
            } else {
                return { ...state, quiz: { ...state.quiz, currentIndex: action.payload.currentIndex } }
            }

        case SET_QUESTIONS:
            if (action.payload.type === 2) {
                return { ...state, quiz2: { ...state.quiz2, questions: action.payload.questions } }
            } else {
                return { ...state, quiz: { ...state.quiz, questions: action.payload.questions } }
            }

        default:
            return state;
    }
}

export default quiz;