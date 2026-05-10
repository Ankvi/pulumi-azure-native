export const DesiredEnablementState = {
    /**
     * Enable the service.
     */
    Enable: "Enable",
    /**
     * Disable the service.
     */
    Disable: "Disable",
} as const;

/**
 * Desired enablement state of the Defender For Servers service.
 */
export type DesiredEnablementState = (typeof DesiredEnablementState)[keyof typeof DesiredEnablementState];
