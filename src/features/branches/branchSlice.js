import { createSlice } from "@reduxjs/toolkit";

import {
    fetchBranches,
    fetchBranchById,
    createBranch,
    updateBranch,
    deleteBranch,
} from "./branchThunks";

const initialState = {
    branches: [],
    branch: null,
    loading: false,
    error: null,
};

const branchSlice = createSlice({
    name: "branches",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBranches.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchBranches.fulfilled, (state, action) => {
                state.loading = false;
                state.branches = action.payload;
            })
            .addCase(fetchBranches.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
});

export default branchSlice.reducer;