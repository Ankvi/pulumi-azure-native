export const DriveState = {
    Specified: "Specified",
    Received: "Received",
    NeverReceived: "NeverReceived",
    Transferring: "Transferring",
    Completed: "Completed",
    CompletedMoreInfo: "CompletedMoreInfo",
    ShippedBack: "ShippedBack",
} as const;

export type DriveState = (typeof DriveState)[keyof typeof DriveState];

export const EncryptionKekType = {
    MicrosoftManaged: "MicrosoftManaged",
    CustomerManaged: "CustomerManaged",
} as const;

export type EncryptionKekType = (typeof EncryptionKekType)[keyof typeof EncryptionKekType];
