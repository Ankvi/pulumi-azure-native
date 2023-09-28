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

export const ServiceName = {
    SSH: "SSH",
    WAC: "WAC",
} as const;

/**
 * The name of the service. It is an optional property, if not provided, service configuration tokens issue code would be by passed.
 */
export type ServiceName = (typeof ServiceName)[keyof typeof ServiceName];

export const Type = {
    Default: "default",
    Custom: "custom",
} as const;

/**
 * The type of endpoint.
 */
export type Type = (typeof Type)[keyof typeof Type];
