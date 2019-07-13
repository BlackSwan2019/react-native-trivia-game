import {
    LOAD_QUESTIONS,
    NEXT_QUESTION,
    SELECT_ANSWER,
    CORRECT_ANSWER,
    INCORRECT_ANSWER
} from '../actions/types';

const INITIAL_STATE = {
    questions: [],
    currentQuestion: 0,
    selectedAnswer: '',
    correct: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_QUESTIONS:
            return { ...state, questions: action.payload };
        case NEXT_QUESTION:
            return { ...state, currentQuestion: state.currentQuestion + 1 };
        case SELECT_ANSWER:
            return { ...state, selectedAnswer: action.payload };
        case CORRECT_ANSWER:
            return { ...state, correct: 1 };
        case INCORRECT_ANSWER:
            return { ...state, correct: 0 };
        default:
            return state;
    }
};
