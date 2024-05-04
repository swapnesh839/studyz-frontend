const initialState = {
    user: "",
    isloggedin: false
};

const Authentication = (state = initialState, action) => {
    switch (action.type) {
        case "login":
            return {
                ...state,
                user: action.payload.user,
                isloggedin: true
            };
        case "logout":
            return {
                ...state,
                user: "",
                isloggedin: false
            };
        default:
            return state; // Return current state for any other action
    }
};

export default Authentication;
