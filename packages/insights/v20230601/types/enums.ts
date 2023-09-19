export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const WorkbookSharedTypeKind = {
    Shared: "shared",
} as const;

export type WorkbookSharedTypeKind = (typeof WorkbookSharedTypeKind)[keyof typeof WorkbookSharedTypeKind];
