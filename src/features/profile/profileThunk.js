import { createAsyncThunk } from "@reduxjs/toolkit";

import {
    getProfileAPI,
    updateUserDetailsAPI,
    updateUserContactsAPI,
} from "./profileAPI";

export const fetchProfile =
createAsyncThunk(
    "profile/fetchProfile",
    async () => {
        return await getProfileAPI();
    }
);


export const updateUserDetails =
createAsyncThunk(
    "profile/updateUserDetails",
    async (data) => {
        return await updateUserDetailsAPI(data);
    }
);

export const updateUserContacts =
createAsyncThunk(
    "profile/updateUserContacts",
    async (contacts) => {
        return await updateUserContactsAPI(contacts);
    }
);