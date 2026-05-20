// import { ROLE } from "../../constants/permissions";
import { ROLES, BRANCHES } from "../../constants/default";

const fakeDelay = (ms = 1500) =>
    new Promise((resolve) =>
        setTimeout(resolve, ms)
    );

const generateToken = (user) =>
    btoa(
        JSON.stringify({
            id: user.id,
            email: user.email,
            role_id: user.role_id            
        })
    ); 


// REGISTER API - Simulates user registration and saves to localStorage
export const registerAPI = async (formData) => {

    await fakeDelay();

    // Get existing users
    const registeredUsers =
        JSON.parse(localStorage.getItem("users")) || [];

    // Check existing email
    const emailExists = registeredUsers.find(
        (user) => user.email.toLowerCase() === formData.email.toLowerCase()
    );

    if (emailExists) {
        throw new Error("Email already registered");        
    }

    // Check existing username
    const usernameExists =
        registeredUsers.find(
            (user) => user.username === formData.username
        );

    if (usernameExists) {
        throw new Error("Username already taken");
    }

    // Create new user
    const newUser = {
        id: crypto.randomUUID(),
        username: formData.username,
        email: formData.email,
        password: formData.password,
        role_id: ROLES[1].id,
        branch_id: BRANCHES[0].id,
        createdAt: new Date(new Date()).toLocaleString('en-IN'),
    };   
    

    // Save to users array
    registeredUsers.push(newUser);

    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));

    // Fake token
    const token = generateToken(newUser);

    return {
        user: newUser,
        token,
    };
};

// LOGIN API - Simulates user login and retrieves user data from localStorage
export const loginAPI = async (formData) => {

    await fakeDelay();

    // Get registered users
    const registeredUsers =
        JSON.parse(localStorage.getItem("users")) || [];

    // Find matching user
    const foundUser =
        registeredUsers.find(
            (user) =>
                user.email ===
                    formData.email &&
                user.password ===
                    formData.password
        );

    if (!foundUser) {
        throw new Error("Invalid email or password");
    }

    // Fake token
    const token = generateToken(foundUser);

    // Save logged in user
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(foundUser));

    return {
        user: foundUser,
        token,
    };
};

export const changePasswordAPI = async (formData) => {

    await fakeDelay();
    // Get registered users
    const registeredUsers =
        JSON.parse(localStorage.getItem("users")) || [];
    
    const updatedUsers = registeredUsers.map(user =>
        (user.id === formData.user_id &&
        user.email === formData.user_email)
            ?
            {
                ...user,
                password: formData.new_password,
                must_change_password: false,                 
            }
            : user
    );
    
    // Save back to localStorage
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // Get current logged-in user
    const currentUser = JSON.parse(localStorage.getItem("user"));
    // Update current session user
    if (currentUser) {
        localStorage.setItem(
            "user",
            JSON.stringify({
                ...currentUser,
                password: formData.new_password,
                must_change_password: false
            })
        );
    }
    
    return {
        success: true,
        flag: 1,
        message: "Password changed successfully"
    };
};