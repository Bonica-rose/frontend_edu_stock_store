import { createAsyncThunk } from "@reduxjs/toolkit";

import {
    getBranchesAPI,
    getBranchByIdAPI,
    createBranchAPI,
    updateBranchAPI,
    deleteBranchAPI,
} from "./branchFakeAPI";

export const fetchBranches = createAsyncThunk(
    "branches/fetchBranches",
    async (_, thunkAPI) => {
        try {
            return await getBranchesAPI();
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response.data.message
            );
        }
    }
);