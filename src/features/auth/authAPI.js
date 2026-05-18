const fakeDelay = (ms = 1500) =>
    new Promise((resolve) =>
        setTimeout(resolve, ms)
    );

// REGISTER API - Simulates user registration and saves to localStorage
export const registerAPI = async (formData) => {

    await fakeDelay();

    // Get existing users
    const registeredUsers =
        JSON.parse(
            localStorage.getItem("registeredUsers")
        ) || [];

    // Check existing email
    const emailExists = registeredUsers.find(
        (user) =>
            user.email === formData.email
    );

    if (emailExists) {
        throw new Error(
            "Email already registered"
        );
    }

    // Check existing username
    const usernameExists =
        registeredUsers.find(
            (user) =>
                user.username ===
                formData.username
        );

    if (usernameExists) {
        throw new Error(
            "Username already taken"
        );
    }

    // Roles
    const roles = [
        "super_admin",
        "branch_head",
        "inventory_staff",
        "auditor",
        "maintenance_staff",
    ];

    // Random Role
    const randomRole =
        roles[
            Math.floor(
                Math.random() *
                roles.length
            )
        ];

    // Create new user
    const newUser = {
        id: crypto.randomUUID(),
        fullName: formData.fullName,
        username: formData.username,
        email: formData.email,
        password: formData.password,
        role: randomRole,
        createdAt: new Date().toISOString(),
    };

    // Save to users array
    registeredUsers.push(newUser);

    localStorage.setItem(
        "registeredUsers",
        JSON.stringify(registeredUsers)
    );

    // Fake token
    const token = btoa(
        JSON.stringify({
            id: newUser.id,
            email: newUser.email,
            role: newUser.role,
        })
    );

    // Save logged user
    localStorage.setItem(
        "token",
        token
    );

    localStorage.setItem(
        "user",
        JSON.stringify(newUser)
    );

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
        JSON.parse(
            localStorage.getItem("registeredUsers")
        ) || [];

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
        throw new Error(
            "Invalid email or password"
        );
    }

    // Fake token
    const token = btoa(
        JSON.stringify({
            id: foundUser.id,
            email: foundUser.email,
            role: foundUser.role,
        })
    );

    // Save logged in user
    localStorage.setItem(
        "token",
        token
    );

    localStorage.setItem(
        "user",
        JSON.stringify(foundUser)
    );

    return {
        user: foundUser,
        token,
    };
};