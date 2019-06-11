import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import TopicList from './components/TopicList';
import Question from './components/Question';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" headerLayoutPreset="center" hideNavBar>
                <Scene key="main">
                    <Scene key="topicList" component={TopicList} title="Trivia Game" initial />
                    <Scene key="question" component={Question} title="Question" />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;
