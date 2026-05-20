import api from "../../api/axios";

export const getUsersAPI = async () => {
    const response = await api.get("/users");
    return response.data;
};

export const getUserByIdAPI = async (id) => {
    const response = await api.get(`/users/${id}`);
    return response.data;
};

export const createUserAPI = async (data) => {
    const response = await api.post("/users", data);
    return response.data;
};

export const updateUserAPI = async ({id, data}) => {
    const response = await api.put(
        `/users/${id}`,
        data
    );

    return response.data;
};

export const deleteUserAPI = async (id) => {
    const response = await api.delete(
        `/users/${id}`
    );

    return response.data;
};