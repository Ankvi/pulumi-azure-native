export const MoveType = {
    RegionToRegion: "RegionToRegion",
    RegionToZone: "RegionToZone",
} as const;

export type MoveType = (typeof MoveType)[keyof typeof MoveType];

export const ResourceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const TargetAvailabilityZone = {
    One: "1",
    Two: "2",
    Three: "3",
    NA: "NA",
} as const;

export type TargetAvailabilityZone = (typeof TargetAvailabilityZone)[keyof typeof TargetAvailabilityZone];

export const ZoneRedundant = {
    Enable: "Enable",
    Disable: "Disable",
} as const;

export type ZoneRedundant = (typeof ZoneRedundant)[keyof typeof ZoneRedundant];
