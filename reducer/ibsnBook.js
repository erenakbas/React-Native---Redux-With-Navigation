import { FETCH_BOOK_PENDING, FETCH_BOOK_FULFILLED, FETCH_BOOK_REJECTED } from '../actions/ibsnBook';
var initialState = {
    fetching: false,
    result: [],
    error: {}
};
export default (function (state=initialState,action)  {   
    switch (action.type) {
        case FETCH_BOOK_PENDING:
            return Object.assign({}, state, {
                fetching: true
            });
        case FETCH_BOOK_FULFILLED:
            return Object.assign({}, state, {
                result: action.payload,
                fetching: false
            });
        case FETCH_BOOK_REJECTED:
            return Object.assign({}, state, {
                error: action.payload,
                fetching: true
            });
        default:
            return state;
    }
});