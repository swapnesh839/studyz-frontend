const login = (user) => {
    return {
        type: "login",
        payload: { user }
    };
};

const logout = () => {
    return {
        type: "logout"
    };
};


export {login,logout}