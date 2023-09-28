export const CreatedByType = {
    User: "User",
    Application: "Application",
    ManagedIdentity: "ManagedIdentity",
    Key: "Key",
} as const;

/**
 * The type of identity that last modified the resource.
 */
export type CreatedByType = (typeof CreatedByType)[keyof typeof CreatedByType];

export const Type = {
    Default: "default",
    Custom: "custom",
} as const;

/**
 * The type of endpoint.
 */
export type Type = (typeof Type)[keyof typeof Type];
