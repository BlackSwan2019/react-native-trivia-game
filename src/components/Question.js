import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Button, Card } from './common';
import { nextQuestion } from '../actions';

class Question extends Component {
    nextQuestion() {
        // Increment to next question index.
        this.props.nextQuestion();

        // Go to new question page showing the new question.
        Actions.question();
    }

    shuffle(inArray) {
        const outArray = inArray;

        for (let i = outArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [outArray[i], outArray[j]] = [outArray[j], outArray[i]];
        }
        return outArray;
    }

    renderAnswers() {
        // Add incorrect answers to pool of answer options.
        let answers = this.props.incorrectAnswers;

        // Add the correct answer to pool of answer options.
        answers = answers.concat(this.props.correctAnswer);

        // Shuffle the array of answer options.
        const shuffledAnswers = this.shuffle(answers);

        return shuffledAnswers.map(answer =>
            <Button key={answer}>{answer}</Button>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Card style={styles.questionStyle}>
                    <Text>{this.props.question}</Text>
                </Card>

                {this.renderAnswers()}

                <Button onPress={this.nextQuestion.bind(this)} style={styles.nextStyle}>Next Question</Button>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    questionStyle: {
        marginBottom: 30
    },
    nextStyle: {
        marginTop: 30, 
        backgroundColor: '#F90', 
        color: '#FFF'
    }
};

const mapStateToProps = state => {
    const questionIndex = state.questions.currentQuestion;

    const question = state.questions.questions[questionIndex].question;
    const correctAnswer = state.questions.questions[questionIndex].correct_answer;
    const incorrectAnswers = state.questions.questions[questionIndex].incorrect_answers;

    return { question, correctAnswer, incorrectAnswers };
};

export default connect(mapStateToProps, { nextQuestion })(Question);
