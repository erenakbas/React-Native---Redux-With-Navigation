import { FETCH_PRODUCT_PENDING, FETCH_PRODUCT_FULFILLED, FETCH_PRODUCT_REJECTED } from '../actions/product';
var initialState = {
    fetching: false,
    result: [],
    error: {}
};
export default (function (state=initialState,action)  {   
    switch (action.type) {
        case FETCH_PRODUCT_PENDING:
            return Object.assign({}, state, {
                fetching: true
            });
        case FETCH_PRODUCT_FULFILLED:
            return Object.assign({}, state, {
                result: action.payload,
                fetching: false
            });
        case FETCH_PRODUCT_REJECTED:
            return Object.assign({}, state, {
                error: action.payload,
                fetching: true
            });
        default:
            return state;
    }
});