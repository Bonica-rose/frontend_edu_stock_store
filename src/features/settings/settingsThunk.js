import { createAsyncThunk } from "@reduxjs/toolkit";

export const addOrganization = createAsyncThunk(
    "settings/addOrganization",
    async (data) => {
        return {
            id: crypto.randomUUID(),
            ...data,
        };
    }
);

export const updateOrganization = createAsyncThunk(
    "settings/updateOrganization",
    async ({ id, data }) => {
        return {
            id,
            ...data,
        };
    }
);