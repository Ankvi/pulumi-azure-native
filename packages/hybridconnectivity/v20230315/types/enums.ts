export const CreatedByType = {
    User: "User",
    Application: "Application",
    ManagedIdentity: "ManagedIdentity",
    Key: "Key",
} as const;

export type CreatedByType = (typeof CreatedByType)[keyof typeof CreatedByType];

export const ServiceName = {
    SSH: "SSH",
    WAC: "WAC",
} as const;

export type ServiceName = (typeof ServiceName)[keyof typeof ServiceName];

export const Type = {
    Default: "default",
    Custom: "custom",
} as const;

export type Type = (typeof Type)[keyof typeof Type];
