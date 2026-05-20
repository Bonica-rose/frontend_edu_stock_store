export const ROLES = [
    {
        id: 1,
        name: "super_admin",
        label: "Super Admin",
    },
    {
        id: 2,
        name: "staff",
        label: "Staff",
    }
];  

export const BRANCHES = [
    {
        id: 1,
        branch_name: "Main Campus",
        code: "MAIN",
        status: true
    }
];

export const USERS = [
    {
        id: 1,
        username: "admin",
        email: "admin@example.com",
        password: "Admin@123",
        role_id: ROLES[1].id,
        branch_id: BRANCHES[0].id,
        must_change_password: true,
        createdAt: new Date().toString(),
    }
];