import { combineReducers } from 'redux';
import UserReducer from './user_reducers';

const rootReducer = combineReducers({
    userReducer: UserReducer
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export default rootReducer;