import { Actions } from 'react-native-router-flux';
import {
    FETCHING_QUESTIONS,
    LOAD_QUESTIONS,
    NEXT_QUESTION
} from './types';

export const fetchQuestions = ({ topicId }) => {
    return (dispatch) => {
            dispatch({ type: FETCHING_QUESTIONS });


            fetch(`https://opentdb.com/api.php?amount=10&category=${topicId}&difficulty=medium&type=multiple`)
            .then(response => response.json())
            .then(responseJson => {
                dispatch({ type: LOAD_QUESTIONS, payload: responseJson.results });

                Actions.question();
            })
            .catch(error => console.log('Error fetching questions: ', error)); 
    };
};

export const nextQuestion = () => {
    return {
        type: NEXT_QUESTION
    };
};
