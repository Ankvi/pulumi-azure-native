export const EnableRealTimeProtection = {
    True: "True",
    False: "False",
} as const;

/**
 * Enables or disables Real Time Protection
 */
export type EnableRealTimeProtection = (typeof EnableRealTimeProtection)[keyof typeof EnableRealTimeProtection];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    None: "None",
} as const;

/**
 * The type of identity used for the Automanage account. Currently, the only supported type is 'SystemAssigned', which implicitly creates an identity.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const RunScheduledScan = {
    True: "True",
    False: "False",
} as const;

/**
 * Enables or disables a periodic scan for antimalware
 */
export type RunScheduledScan = (typeof RunScheduledScan)[keyof typeof RunScheduledScan];

export const ScanType = {
    Quick: "Quick",
    Full: "Full",
} as const;

/**
 * Type of scheduled scan
 */
export type ScanType = (typeof ScanType)[keyof typeof ScanType];
