export const DriveState = {
    Specified: "Specified",
    Received: "Received",
    NeverReceived: "NeverReceived",
    Transferring: "Transferring",
    Completed: "Completed",
    CompletedMoreInfo: "CompletedMoreInfo",
    ShippedBack: "ShippedBack",
} as const;

/**
 * The drive's current state. 
 */
export type DriveState = (typeof DriveState)[keyof typeof DriveState];

export const EncryptionKekType = {
    MicrosoftManaged: "MicrosoftManaged",
    CustomerManaged: "CustomerManaged",
} as const;

/**
 * The type of kek encryption key
 */
export type EncryptionKekType = (typeof EncryptionKekType)[keyof typeof EncryptionKekType];
