const fakeDelay = () =>
    new Promise((resolve) =>
        setTimeout(resolve, 500)
    );

// GET ALL USERS
export const getBranchesAPI = async () => {
    await fakeDelay();
    const organizations = JSON.parse(localStorage.getItem("organizations")) || [];
    const roles = JSON.parse(localStorage.getItem("roles")) || [];
    const branches = JSON.parse(localStorage.getItem("branches")) || [];

    const branchDetails = branches.map(branch => {
        const role = organizations.find(role => role.id === user.role_id);
        const branch = branches.find(branch => branch.id === user.branch_id);

        return {
            ...user,
            role_name: role?.name || null,
            branch_name: branch?.branch_name || null
        };
    });
    return usersWithDetails;
};