import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
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
        const { container, questionStyle, buttonStyle, textStyle } = styles;

        return (
            <View style={container}>
                <Card style={questionStyle}>
                    <Text>{this.props.question}</Text>
                </Card>

                {this.renderAnswers()}

                <TouchableOpacity 
                    style={buttonStyle}
                    onPress={this.nextQuestion.bind(this)} 
                >
                    <Text style={textStyle}>
                        Next Question
                    </Text>
        </TouchableOpacity>
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
    textStyle: {
        color: '#FFF'
    },
    buttonStyle: {
        width: 200,
        alignSelf: 'center',
        backgroundColor: '#999', 
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '4d4d4d',
        marginTop: 30, 
        margin: 5,
        padding: 10,
        alignItems: 'center'
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
