import { ROLE_PERMISSIONS } from "../constants/rolePermissions";

export const hasPermission = (
    role,
    module,
    action
) => {
    return ROLE_PERMISSIONS?.[role]?.[
        module
    ]?.[action];
};