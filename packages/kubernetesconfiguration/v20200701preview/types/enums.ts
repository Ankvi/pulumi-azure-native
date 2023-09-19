export const LevelType = {
    Error: "Error",
    Warning: "Warning",
    Information: "Information",
} as const;

export type LevelType = (typeof LevelType)[keyof typeof LevelType];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    None: "None",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];
