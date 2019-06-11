import { combineReducers } from 'redux';
import TopicListReducer from './TopicListReducer';
import QuestionsReducer from './QuestionsReducer';

export default combineReducers({
    topicList: TopicListReducer,
    questions: QuestionsReducer
});
