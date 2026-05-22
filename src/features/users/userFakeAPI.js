import { generatePassword } from '../../helpers/generatePassword';

const fakeDelay = () =>
    new Promise((resolve) =>
        setTimeout(resolve, 500)
    );


// GET ALL USERS
export const getUsersAPI = async () => {
    await fakeDelay();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const roles = JSON.parse(localStorage.getItem("roles")) || [];
    const branches = JSON.parse(localStorage.getItem("branches")) || [];

    const usersWithDetails = users.map(user => {

        const role = roles.find(role => role.id === user.role_id);
        const branch = branches.find(branch => branch.id === user.branch_id);

        return {
            ...user,
            role_name: role?.name || null,
            branch_name: branch?.branch_name || null
        };
    });
    return usersWithDetails;
};

// GET USER BY ID
export const getUserByIdAPI = async (id) => {
    await fakeDelay();
    const users = JSON.parse(localStorage.getItem("users") ) || [];
    const user = users.find(
        (user) => String(user.id) === String(id)
    );
    if (!user) {
        throw new Error("User not found");
    }
    return user;
};


// CREATE USER
export const createUserAPI = async (data) => {
    await fakeDelay();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const newUser = {
        ...data,
        id: crypto.randomUUID(),
        password: generatePassword(10),
        must_change_password: true,
        status: "active",
        createdAt: new Date(new Date()).toLocaleString('en-IN'),
    };

    const updatedUsers = [
        ...users,
        newUser,
    ];

    localStorage.setItem("users",JSON.stringify(updatedUsers));
    return newUser;
};


// UPDATE USER
export const updateUserAPI = async ({id,data}) => {
    await fakeDelay();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const updatedUsers = users.map(
        (user) =>
            String(user.id) === String(id)
                ? {
                    ...user,
                    ...data,
                }
                : user
    );

    localStorage.setItem("users",JSON.stringify(updatedUsers));
    return {
        success: true,
    };
};


// DELETE USER
export const deleteUserAPI = async (id) => {
    await fakeDelay();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const filteredUsers = users.filter((user) => String(user.id) !== String(id));
    localStorage.setItem("users",JSON.stringify(filteredUsers));
    return {
        id,
        success: true,
    };
};

// UPDATE USER STATUS
export const updateUserStatusAPI = async ({ id, status }) => {
    await fakeDelay();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.map((user) =>
        user.id === id
            ? { ...user, status }
            : user
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    return {
        id,
        status,
    };
};