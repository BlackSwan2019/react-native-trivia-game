export const getQuestion = state => {
    const questionIndex = state.questions.currentQuestion;
    return state.questions.questions[questionIndex].question;
};

export const getCorrectAnswer = state => {
    const questionIndex = state.questions.currentQuestion;
    return state.questions.questions[questionIndex].correct_answer;
};

export const getIncorrectAnswers = state => {
    const questionIndex = state.questions.currentQuestion;
    return state.questions.questions[questionIndex].incorrect_answers;
};

export const getIsCorrect = state => {
    return state.questions.correct;
};
