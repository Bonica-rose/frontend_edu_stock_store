import { createSlice } from "@reduxjs/toolkit";
import {
    addOrganization,
    updateOrganization,
} from "./settingsThunk";

const initialState = {
    organizations:
        JSON.parse(
            localStorage.getItem("organizations")
        ) || [],
    loading: false,
    error: null,
};

const settingsSlice = createSlice({
    name: "settings",
    initialState,

    reducers: {},

    extraReducers: (builder) => {
        builder

            //Add Organization
            .addCase(addOrganization.pending, (state) => {
                state.loading = true;
            })

            .addCase(addOrganization.fulfilled, (state, action) => {
                state.loading = false;

                state.organizations.push(action.payload);

                localStorage.setItem(
                    "organizations",
                    JSON.stringify(state.organizations)
                );
            })

            .addCase(addOrganization.rejected, (state) => {
                state.loading = false;
                state.error = "Something went wrong";
            })

            //Update Organization
            .addCase(updateOrganization.pending, (state) => {
                state.loading = true;
            })

            .addCase(updateOrganization.fulfilled, (state, action) => {
                state.loading = false;

                const index =
                    state.organizations.findIndex(
                        (org) =>
                            org.id === action.payload.id
                    );

                if (index !== -1) {
                    state.organizations[index] =
                        action.payload;
                }

                localStorage.setItem(
                    "organizations",
                    JSON.stringify(state.organizations)
                );
            })

            .addCase(updateOrganization.rejected, (state) => {
                state.loading = false;
                state.error = "Update failed";
            });
    },
});

export default settingsSlice.reducer;