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

export type EnablementStatus = (typeof EnablementStatus)[keyof typeof EnablementStatus];
