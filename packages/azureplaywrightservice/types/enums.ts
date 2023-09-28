export const EnablementStatus = {
    /**
     * The feature is Enabled.
     */
    Enabled: "Enabled",
    /**
     * The feature is Disabled.
     */
    Disabled: "Disabled",
} as const;

/**
 * When enabled, Playwright client workers can connect to cloud-hosted browsers. This can increase the number of parallel workers for a test run, significantly minimizing test completion durations.
 */
export type EnablementStatus = (typeof EnablementStatus)[keyof typeof EnablementStatus];
