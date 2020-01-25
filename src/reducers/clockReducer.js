import { SET_CURRENT_TIME } from '../actions/clock';

let initState = {
    currentTime: new Date(),
};

const clockReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_CURRENT_TIME:
            return Object.assign({}, state, {
                currentTime: action.currentTime,
            });

        default:
            return state;
    }
};

export default clockReducer;
