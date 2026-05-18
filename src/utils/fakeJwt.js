export const saveAuth = (user) => {
    // btoa: convert binary string data to base64-encoded string
    const token = btoa(JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    return token;
};

export const clearAuth = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
};

export const getUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

export const getToken = () => {
    return localStorage.getItem("token");
};