import { TOGGLE_CHECKBOX } from './actions';

const initialState = {
    isChecked: false
};

export const checkboxReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_CHECKBOX:
            return { ...state, isChecked: !state.isChecked };
        default:
            return state;
    }
};