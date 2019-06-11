import {
    LOAD_QUESTIONS,
    NEXT_QUESTION
} from '../actions/types';

const INITIAL_STATE = {
    questions: [],
    currentQuestion: 0
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_QUESTIONS:
            return { ...state, questions: action.payload };
        case NEXT_QUESTION:
            return { ...state, currentQuestion: state.currentQuestion + 1 };
        default:
            return state;
    }
};
