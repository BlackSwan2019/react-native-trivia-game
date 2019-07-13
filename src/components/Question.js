import React, { Component } from 'react';
import { Text, View, Modal } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { Button, Card } from './common';
import { nextQuestion, selectAnswer } from '../actions';
import { 
    getQuestion, 
    getCorrectAnswer, 
    getIncorrectAnswers, 
    getIsCorrect 
} from '../selectors/QuestionSelector';

class Question extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false
        };
    }

    _nextQuestion() {
        // Increment to next question index.
        this.props.nextQuestion();

        // Go to new question page showing the new question.
        Actions.question();
    }

    _handleAnswer(selectedAnswer) {
        const correctAnswer = this.props.correctAnswer;

        this.props.selectAnswer({ selectedAnswer, correctAnswer });

        this.setState({ modalVisible: true });
    }

    _shuffle(inArray) {
        const outArray = inArray;

        for (let i = outArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [outArray[i], outArray[j]] = [outArray[j], outArray[i]];
        }
        return outArray;
    }

    _renderAnswers() {
        // Add incorrect answers to pool of answer options.
        let answers = this.props.incorrectAnswers;

        // Add the correct answer to pool of answer options.
        answers = answers.concat(this.props.correctAnswer);

        // Shuffle the array of answer options.
        const shuffledAnswers = this._shuffle(answers);

        return shuffledAnswers.map(answer =>
            <Button 
                key={answer}
                onPress={this._handleAnswer.bind(this, answer)}
            >
                {answer}
            </Button>
        );
    }

    _renderModal() {
        const { modalContainerStyle, modalMessageStyle, correctAnswerStyle, incorrectAnswerStyle } = styles;

        return (
            <Modal
                animationType="slide"
                visible={this.state.modalVisible}
                onRequestClose={() => { alert('Modal has been closed'); }}
                transparent
            >
                <View style={modalContainerStyle}>
                    <View style={modalMessageStyle}>
                        <View >
                            {this.props.correct ? 
                                <Text style={correctAnswerStyle}>Correct!</Text> : 
                                <Text style={incorrectAnswerStyle}>Incorrect!</Text>}
                        </View>
                        <Button 
                            onPress={() => { 
                                this.props.nextQuestion();
                                //this._nextQuestion.bind(this);

                                this.setState({ modalVisible: false });
                            }}
                        >
                            Next Question
                        </Button>
                    </View>
                </View>
            </Modal>
        );
    }

    render() {
        const { container, questionStyle } = styles;

        return (
            <View style={container}>
                <Card style={questionStyle}>
                    <Text>{this.props.question}</Text>
                </Card>

                {this._renderAnswers()}
                {this._renderModal()}
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
    },
    modalContainerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalMessageStyle: {
        padding: 20,
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007AFF',
    },
    correctAnswerStyle: {
        color: 'green',
        fontSize: 30
    },
    incorrectAnswerStyle: {
        color: 'red',
        fontSize: 30
    }
};

const mapStateToProps = state => {
    return { 
        question: getQuestion(state),
        correctAnswer: getCorrectAnswer(state),
        incorrectAnswers: getIncorrectAnswers(state),
        correct: getIsCorrect(state) 
    };
};

export default connect(
    mapStateToProps, { 
        nextQuestion, 
        selectAnswer 
    })(Question);
