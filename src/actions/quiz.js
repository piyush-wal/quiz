export const SET_QUESTIONS = 'SET_QUESTIONS';
export const SET_INDEX = 'SET_INDEX';
export const SET_TIMER = 'SET_TIMER';
export const SET_SCORE = 'SET_SCORE';
export const SET_SUBMITTED = 'SET_SUBMITTED';
export const RESET_QUIZ = 'RESET_QUIZ';

export const setQs = payload => ({
    type: SET_QUESTIONS,
    payload,
  });

export const setIndex = payload => ({
    type: SET_INDEX,
    payload,
});

export const setTimer = payload => ({
    type: SET_TIMER,
    payload,
});

export const setScore = payload => ({
    type: SET_SCORE,
    payload,
});

export const setSubmitted = payload => ({
    type: SET_SUBMITTED,
    payload,
});

export const reset = payload => ({
    type: RESET_QUIZ,
    payload,
});