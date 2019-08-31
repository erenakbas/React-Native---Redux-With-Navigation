

var initialState = {
    fetching: false,
    current: [],
    error: {}
};
export default (function (state=initialState,action)  {   
    switch (action.type) {
        case "changeDefault":
            return Object.assign({}, action.payload, {
                fetching: true
            }); 
        default:
            return state;
    }
});
