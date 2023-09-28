export const ResourceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
} as const;

/**
 * The type of identity used for the resource mover service.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const TargetAvailabilityZone = {
    One: "1",
    Two: "2",
    Three: "3",
    NA: "NA",
} as const;

/**
 * Gets or sets the target availability zone.
 */
export type TargetAvailabilityZone = (typeof TargetAvailabilityZone)[keyof typeof TargetAvailabilityZone];

export const ZoneRedundant = {
    Enable: "Enable",
    Disable: "Disable",
} as const;

/**
 * Defines the zone redundant resource setting.
 */
export type ZoneRedundant = (typeof ZoneRedundant)[keyof typeof ZoneRedundant];
