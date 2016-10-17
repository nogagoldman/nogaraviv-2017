import { combineReducers } from 'redux'

const blank_state = (state = {}, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

const reducer = combineReducers({
    blank_state
});

export default reducer;