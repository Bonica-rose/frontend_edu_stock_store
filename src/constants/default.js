export const ROLES = [
    {
        id: 1,
        name: "super_admin",
        label: "Super Admin",
    },

    {
        id: 2,
        name: "branch_head",
        label: "Branch Head",
    },

    {
        id: 3,
        name: "inventory_manager",
        label: "Inventory Manager",
    },

    {
        id: 4,
        name: "asset_manager",
        label: "Asset Manager",
    },

    {
        id: 5,
        name: "purchase_manager",
        label: "Purchase Manager",
    },

    {
        id: 6,
        name: "staff",
        label: "Staff",
    },
];

export const BRANCHES = [
    {
        id: 1,
        organization_id: 1,
        branch_name: "Main Campus",
        code: "MC-001",
        status: true
    }
];

export const USERS = [
    {
        id: 1,
        username: "admin",
        email: "admin@example.com",
        password: "Admin@123",
        role_id: ROLES[0].id,
        branch_id: BRANCHES[0].id,
        must_change_password: true,
        status: "active",
        createdAt: new Date(new Date()).toLocaleString('en-IN'),
    }
];