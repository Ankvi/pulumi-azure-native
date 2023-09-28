export const IdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
} as const;

/**
 * The identity type.
 */
export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];
