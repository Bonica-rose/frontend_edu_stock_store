const fakeDelay = (ms = 1500) =>
    new Promise((resolve) =>
        setTimeout(resolve, ms)
    );

export const getProfileAPII = async () => {
    await fakeDelay();
    const profile = JSON.parse(localStorage.getItem("profile"));
    return (
        profile || {
            user_details: null,
            user_contacts: [],
        }
    );
};

export const getProfileAPI = async (userId) => {

    const profiles =
        JSON.parse(
            localStorage.getItem("profiles")
        ) || [];

    const foundProfile =
        profiles.find(
            (p) =>
                p.user_details?.user_id === userId
        );

    return (
        foundProfile || {
            user_details: null,
            user_contacts: [],
        }
    );
};

export const updateUserDetailsAPI = async (data) => {
    await fakeDelay();
    const profile = JSON.parse(localStorage.getItem("profile")) || {};

    const updatedProfile = {
        ...profile,
        user_details: data,
    };

    localStorage.setItem("profile",JSON.stringify(updatedProfile) );
    return updatedProfile.user_details;
};

export const updateUserContactsAPI = async (contacts) => {
    await fakeDelay();
    const profile = JSON.parse(localStorage.getItem("profile")) || {};

    const updatedProfile = {
        ...profile,
        user_contacts: contacts,
    };
    
    localStorage.setItem("profile",JSON.stringify(updatedProfile));
    return updatedProfile.user_contacts;
};