import { createAsyncThunk } from "@reduxjs/toolkit";

export const addOrganization = createAsyncThunk(
    "settings/addOrganization",
    async (data) => {
        return {
            id: Date.now(),
            ...data,
        };
    }
);