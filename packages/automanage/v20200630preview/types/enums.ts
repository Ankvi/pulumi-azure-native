export const EnableRealTimeProtection = {
    True: "True",
    False: "False",
} as const;

export type EnableRealTimeProtection = (typeof EnableRealTimeProtection)[keyof typeof EnableRealTimeProtection];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    None: "None",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const RunScheduledScan = {
    True: "True",
    False: "False",
} as const;

export type RunScheduledScan = (typeof RunScheduledScan)[keyof typeof RunScheduledScan];

export const ScanType = {
    Quick: "Quick",
    Full: "Full",
} as const;

export type ScanType = (typeof ScanType)[keyof typeof ScanType];
