export const SerialPortState = {
    Enabled: "enabled",
    Disabled: "disabled",
} as const;

/**
 * Specifies whether the port is enabled for a serial console connection.
 */
export type SerialPortState = (typeof SerialPortState)[keyof typeof SerialPortState];
