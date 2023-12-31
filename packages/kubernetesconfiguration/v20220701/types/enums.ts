export const AKSIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
} as const;

/**
 * The identity type.
 */
export type AKSIdentityType = (typeof AKSIdentityType)[keyof typeof AKSIdentityType];

export const LevelType = {
    Error: "Error",
    Warning: "Warning",
    Information: "Information",
} as const;

/**
 * Level of the status.
 */
export type LevelType = (typeof LevelType)[keyof typeof LevelType];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
} as const;

/**
 * The identity type.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];
