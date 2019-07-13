import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Sound from 'react-native-sound';
import Audio from 'react-native-audio-polyfill';
import { Player } from 'react-native-audio-toolkit';
import music from '../assets/topic_music.mp3';
import { Button } from './common';
import { fetchQuestions } from '../actions';

class TopicList extends Component {
    componentDidMount() {
        
    }

    componentDidUpdate() {
        console.log('Questions: ', this.props.questions);
    }

    _fetchQuestions(topicId) {
        this.props.fetchQuestions({ topicId });
    }

    _renderWelcome() {
        const { welcome, instructions } = styles;

        return (
            <View>
                <Text style={welcome}>Welcome to Ben's Trivia Game!</Text>
                <Text style={instructions}>To get started, select a trivia topic below.</Text>
            </View>
        );
    }

    _renderTopics() {
        return (
            this.props.topics.map(topic => {
                return (<Button key={topic.id} onPress={this._fetchQuestions.bind(this, topic.id)}>{topic.title}</Button>);
            })
        );
    }

    render() {
        const { container } = styles;

        return (
            <View style={container}>
                <View>
                    {this._renderWelcome()}
                    {this._renderTopics()}
                </View>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
  },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
  },
  instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 20,
  }
};

const mapStateToProps = state => {
    const topics = state.topicList.topics;    
    const questions = state.questions.questions;

    return { topics, questions };
};

export default connect(mapStateToProps, { fetchQuestions })(TopicList);
