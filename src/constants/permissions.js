export const ROLES = {
    SUPER_ADMIN: "super_admin",
    BRANCH_HEAD: "branch_head",
    INVENTORY_MANAGER: "inventory_manager",
    ASSET_MANAGER: "asset_manager",
    PURCHASE_MANAGER: "purchase_manager",
    STAFF: "staff"
};

export const ROLE_PERMISSIONS = {
    [ROLES.SUPER_ADMIN]: {
        dashboard: true,

        users: {
            view: true,
            create: true,
            edit: true,
            delete: true,
        },

        branches: {
            view: true,
            create: true,
            edit: true,
            delete: true,
        },

        products: {
            view: true,
            create: true,
            edit: true,
            delete: true,
        },

        inventory: {
            view: true,
            stock_in: true,
            stock_out: true,
            transfer: true,
        },

        assets: {
            view: true,
            create: true,
            edit: true,
            maintenance: true,
        },

        vendors: {
            view: true,
            create: true,
            edit: true,
            delete: true,
        },

        purchases: {
            view: true,
            create: true,
            edit: true,
            delete: true,
        },

        reports: {
            view: true,
        },

        settings: true,
    },

    [ROLES.BRANCH_HEAD]: {
        dashboard: true,

        users: {
            view: false,
        },

        branches: {
            view: true,
        },

        products: {
            view: true,
        },

        inventory: {
            view: true,
            stock_in: false,
            stock_out: false,
            transfer: true,
        },

        assets: {
            view: true,
            maintenance: true,
        },

        vendors: {
            view: true,
        },

        purchases: {
            view: true,
        },

        reports: {
            view: true,
        },

        settings: false,
    },

    [ROLES.INVENTORY_MANAGER]: {
        dashboard: true,

        products: {
            view: true,
            create: true,
            edit: true,
            delete: false,
        },

        inventory: {
            view: true,
            stock_in: true,
            stock_out: true,
            transfer: true,
        },

        assets: {
            view: true,
        },

        reports: {
            view: true,
        },
    },

    [ROLES.ASSET_MANAGER]: {
        dashboard: true,

        assets: {
            view: true,
            create: true,
            edit: true,
            maintenance: true,
        },

        inventory: {
            view: true,
        },

        reports: {
            view: true,
        },
    },

    [ROLES.PURCHASE_MANAGER]: {
        dashboard: true,

        vendors: {
            view: true,
            create: true,
            edit: true,
            delete: false,
        },

        purchases: {
            view: true,
            create: true,
            edit: true,
            delete: false,
        },

        inventory: {
            view: true,
            stock_in: true,
        },

        reports: {
            view: true,
        },
    },

    [ROLES.STAFF]: {
        dashboard: true,

        products: {
            view: true,
        },

        inventory: {
            view: true,
        },

        assets: {
            view: true,
        },

        reports: {
            view: false,
        },
    },
};

// export const ROLE_PERMISSIONS = {
//     super_admin: [
//         "view_users",
//         "create_users",
//         "edit_users",
//         "delete_users",
//     ],

//     auditor: [
//         "view_users",
//     ],

//     inventory_manager: [
//         "view_inventory",
//         "edit_inventory",
//     ],

//     asset_manager: [
//         "view_assets",
//         "edit_assets",
//     ],

//     purchase_manager: [
//         "view_purchases",
//         "edit_purchases",
//     ],

//     staff: [
//         "view_products",
//     ],
// };