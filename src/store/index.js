import { createStore, combineReducers } from 'redux';
import { checkboxReducer } from './reducers';

const rootReducer = combineReducers({
    checkbox: checkboxReducer
});

const store = createStore(rootReducer);

export default store;