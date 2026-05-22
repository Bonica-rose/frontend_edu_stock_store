// export const ROLE_PERMISSIONS = {
//     super_admin: {
//         dashboard: {
//             view: true,
//         },

//         users: {
//             view: true,
//             create: true,
//             edit: true,
//             delete: true,
//         },

//         branches: {
//             view: true,
//             create: true,
//             edit: true,
//             delete: true,
//         },

//         products: {
//             view: true,
//             create: true,
//             edit: true,
//             delete: true,
//         },

//         inventory: {
//             view: true,
//             stock_in: true,
//             stock_out: true,
//             transfer: true,
//         },

//         assets: {
//             view: true,
//             create: true,
//             edit: true,
//             assign: true,
//             maintenance: true,
//         },

//         vendors: {
//             view: true,
//             create: true,
//             edit: true,
//             delete: true,
//         },

//         purchases: {
//             view: true,
//             create: true,
//             edit: true,
//             delete: true,
//             approve: true,
//         },

//         requests: {
//             view: true,
//             approve: true,
//             reject: true,
//         },

//         reports: {
//             view: true,
//             export: true,
//         },

//         settings: {
//             view: true,
//             edit: true,
//         },
//     },

//     branch_head: {
//         dashboard: {
//             view: true,
//         },

//         inventory: {
//             view: true,
//             transfer: true,
//         },

//         assets: {
//             view: true,
//             maintenance: true,
//         },

//         requests: {
//             view: true,
//             approve: true,
//             reject: true,
//         },

//         reports: {
//             view: true,
//         },
//     },

//     inventory_manager: {
//         dashboard: {
//             view: true,
//         },

//         products: {
//             view: true,
//             create: true,
//             edit: true,
//         },

//         inventory: {
//             view: true,
//             stock_in: true,
//             stock_out: true,
//             transfer: true,
//         },

//         reports: {
//             view: true,
//         },
//     },

//     asset_manager: {
//         dashboard: {
//             view: true,
//         },

//         assets: {
//             view: true,
//             create: true,
//             edit: true,
//             assign: true,
//             maintenance: true,
//         },

//         reports: {
//             view: true,
//         },
//     },

//     purchase_manager: {
//         dashboard: {
//             view: true,
//         },

//         vendors: {
//             view: true,
//             create: true,
//             edit: true,
//         },

//         purchases: {
//             view: true,
//             create: true,
//             edit: true,
//         },

//         reports: {
//             view: true,
//         },
//     },

//     staff: {
//         dashboard: {
//             view: true,
//         },

//         inventory: {
//             view: true,
//         },

//         requests: {
//             view: true,
//             create: true,
//         },
//     },
// };

export const ROLE_PERMISSIONS = {
    super_admin: {
        dashboard: { view: true },

        profile: {
            view: true,
            change_password: true,
        },

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
        },

        inventory: {
            view: true,
            stock_in: true,
            stock_out: true,
        },

        assets: {
            view: true,
            create: true,
            edit: true,
        },

        vendors: {
            view: true,
            create: true,
            edit: true,
        },

        purchases: {
            view: true,
            create: true,
            edit: true,
        },

        requests: {
            view: true,
            approve: true,
        },

        maintenance: {
            view: true,
            edit: true,
        },

        reports: {
            view: true,
            export: true,
        },

        settings: {
            view: true,
            edit: true,
        },

        auth: {
            logout: true,
        },
    },

    branch_head: {
        dashboard: { view: true },

        profile: {
            view: true,
            change_password: true,
        },

        inventory: {
            view: true,
        },

        assets: {
            view: true,
        },

        reports: {
            view: true,
        },

        requests: {
            view: true,
            approve: true,
        },

        auth: {
            logout: true,
        },
    },

    inventory_manager: {
        dashboard: { view: true },

        profile: {
            view: true,
            change_password: true,
        },

        products: {
            view: true,
            create: true,
            edit: true,
        },

        inventory: {
            view: true,
            stock_in: true,
            stock_out: true,
        },

        reports: {
            view: true,
        },

        auth: {
            logout: true,
        },
    },

    asset_manager: {
        dashboard: { view: true },

        profile: {
            view: true,
            change_password: true,
        },

        assets: {
            view: true,
            create: true,
            edit: true,
        },

        maintenance: {
            view: true,
            edit: true,
        },

        auth: {
            logout: true,
        },
    },

    purchase_manager: {
        dashboard: { view: true },

        profile: {
            view: true,
            change_password: true,
        },

        vendors: {
            view: true,
            create: true,
        },

        purchases: {
            view: true,
            create: true,
        },

        reports: {
            view: true,
        },

        auth: {
            logout: true,
        },
    },

    staff: {
        dashboard: { view: true },

        profile: {
            view: true,
            change_password: true,
        },

        inventory: {
            view: true,
        },

        requests: {
            view: true,
            create: true,
        },

        auth: {
            logout: true,
        },
    },
};
