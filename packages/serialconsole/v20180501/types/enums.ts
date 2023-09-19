export const SerialPortState = {
    Enabled: "enabled",
    Disabled: "disabled",
} as const;

export type SerialPortState = (typeof SerialPortState)[keyof typeof SerialPortState];
