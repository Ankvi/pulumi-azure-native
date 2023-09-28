export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

/**
 * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
 */
export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const WorkbookSharedTypeKind = {
    Shared: "shared",
} as const;

/**
 * The kind of workbook. Only valid value is shared.
 */
export type WorkbookSharedTypeKind = (typeof WorkbookSharedTypeKind)[keyof typeof WorkbookSharedTypeKind];
