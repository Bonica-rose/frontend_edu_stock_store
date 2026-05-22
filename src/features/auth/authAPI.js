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

    // Save Roles & branches into local memory
    if (!localStorage.getItem("roles")) {
        localStorage.setItem("roles", JSON.stringify(ROLES));
    }
    if (!localStorage.getItem("branches")) {
        localStorage.setItem("branches", JSON.stringify(BRANCHES));
    }

    // Get existing users
    const registeredUsers = JSON.parse(localStorage.getItem("users")) || [];

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
        must_change_password: true,
        status: "active",
        createdAt: new Date(new Date()).toLocaleString('en-IN'),
    };  
    
    // const registeredUserDetails = JSON.parse(localStorage.getItem("user_details")) || [];
    // const newUserDetails = {
    //     id: crypto.randomUUID(),
    //     user_id: newUser.id,
    //     full_name: formData.fullName,
    //     createdAt: new Date(new Date()).toLocaleString('en-IN'),
    // }
    // registeredUserDetails.push(newUserDetails);
    // localStorage.setItem("user_details", JSON.stringify(registeredUserDetails));    

    // Save to users array
    registeredUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(registeredUsers));

    // Fake token
    const token = generateToken(newUser);

    const userWithDetails = {
        ...newUser,
        role: ROLES.find(role => role.id === newUser.role_id) || null,
        branch: BRANCHES.find(branch => branch.id === newUser.branch_id) || null,
    };

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userWithDetails));

    return {
        user: userWithDetails,
        token,
    };
};

// LOGIN API - Simulates user login and retrieves user data from localStorage
export const loginAPI = async (formData) => {

    await fakeDelay();

    // Get data from local storage
    const roles = JSON.parse(localStorage.getItem('roles')) || [];
    const branches = JSON.parse(localStorage.getItem('branches')) || [];

    // Get registered users
    const registeredUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Find matching user
    const foundUser =
        registeredUsers.find(
            (user) =>
                user.email === formData.email &&
                user.password === formData.password
        );

    if (!foundUser) {
        throw new Error("Invalid email or password");
    }
    if (foundUser.status !== "active") {
        throw new Error("Account inactive. Contact administrator.");
    }
    // console.log('MatchedUser: ',foundUser);

    // Fake token
    const token = generateToken(foundUser);

    // Embed matching role and branch data into the user object
    const userWithDetails = {
        ...foundUser,
        role: roles.find(role => role.id === foundUser.role_id) || null,
        branch: branches.find(branch => branch.id === foundUser.branch_id) || null
    };
    console.log('MatchedUser with details: ', userWithDetails);

    // Save logged in user
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userWithDetails));

    return {
        user: userWithDetails,
        userBranch: branches.find(branch => branch.id === foundUser.branch_id),
        token,
    };
};

export const changePasswordAPI = async (formData) => {
    await fakeDelay();

    // Get registered users
    const registeredUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Find user
    const existingUser =
        registeredUsers.find(
            (user) =>
                user.id === formData.user_id &&
                user.email === formData.user_email
        );

    // User not found
    if (!existingUser) {
        throw new Error("User not found");
    }

    // Verify current password
    if (existingUser.password !== formData.current_password) {
        throw new Error("Current password is invalid");
    }

        // Update users
    const updatedUsers =
        registeredUsers.map((user) =>
            user.id === formData.user_id
                ? {
                    ...user,
                    password: formData.new_password,
                    must_change_password:false,
                    password_changed_at: new Date().toISOString(),
                }
                : user
        );   
    
    // Save users back to localStorage
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // Get current logged-in user
    const currentUser = JSON.parse(localStorage.getItem("user"));
    // Update current session user
    if (currentUser) {
        localStorage.setItem(
            "user",
            JSON.stringify({
                ...currentUser,
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