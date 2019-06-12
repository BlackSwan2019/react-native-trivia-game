import {
    LOAD_QUESTIONS,
    NEXT_QUESTION,
    SELECT_ANSWER
} from '../actions/types';

const INITIAL_STATE = {
    questions: [],
    currentQuestion: 0,
    selectedAnswer: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_QUESTIONS:
            return { ...state, questions: action.payload };
        case NEXT_QUESTION:
            return { ...state, currentQuestion: state.currentQuestion + 1 };
        case SELECT_ANSWER:
            console.log('Answer: ', action.payload);
            return { ...state, selectedAnswer: action.payload };
        default:
            return state;
    }
};
