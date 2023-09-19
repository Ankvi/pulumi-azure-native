export const AllowCrashDumpCollection = {
    /**
     * Crash dump collection enabled
     */
    Enabled: "Enabled",
    /**
     * Crash dump collection disabled
     */
    Disabled: "Disabled",
} as const;

export type AllowCrashDumpCollection = (typeof AllowCrashDumpCollection)[keyof typeof AllowCrashDumpCollection];

export const OSFeedType = {
    /**
     * Retail OS feed type.
     */
    Retail: "Retail",
    /**
     * Retail evaluation OS feed type.
     */
    RetailEval: "RetailEval",
} as const;

export type OSFeedType = (typeof OSFeedType)[keyof typeof OSFeedType];

export const RegionalDataBoundary = {
    /**
     * No data boundary
     */
    None: "None",
    /**
     * EU data boundary
     */
    EU: "EU",
} as const;

export type RegionalDataBoundary = (typeof RegionalDataBoundary)[keyof typeof RegionalDataBoundary];

export const UpdatePolicy = {
    /**
     * Update all policy.
     */
    UpdateAll: "UpdateAll",
    /**
     * No update for 3rd party app policy.
     */
    No3rdPartyAppUpdates: "No3rdPartyAppUpdates",
} as const;

export type UpdatePolicy = (typeof UpdatePolicy)[keyof typeof UpdatePolicy];
