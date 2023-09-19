export const AccountConfiguration = {
    Free: "Free",
    Capacity: "Capacity",
} as const;

export type AccountConfiguration = (typeof AccountConfiguration)[keyof typeof AccountConfiguration];

export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const ModelingFeatures = {
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
} as const;

export type ModelingFeatures = (typeof ModelingFeatures)[keyof typeof ModelingFeatures];

export const ModelingFrequency = {
    Low: "Low",
    Medium: "Medium",
    High: "High",
} as const;

export type ModelingFrequency = (typeof ModelingFrequency)[keyof typeof ModelingFrequency];

export const ModelingSize = {
    Small: "Small",
    Medium: "Medium",
    Large: "Large",
} as const;

export type ModelingSize = (typeof ModelingSize)[keyof typeof ModelingSize];

export const PrincipalType = {
    Application: "Application",
    User: "User",
} as const;

export type PrincipalType = (typeof PrincipalType)[keyof typeof PrincipalType];
