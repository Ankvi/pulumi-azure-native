export const CopyMode = {
    Additive: "Additive",
    Mirror: "Mirror",
} as const;

/**
 * Strategy to use for copy.
 */
export type CopyMode = (typeof CopyMode)[keyof typeof CopyMode];

export const CredentialType = {
    AzureKeyVaultSmb: "AzureKeyVaultSmb",
} as const;

/**
 * The Credentials type.
 */
export type CredentialType = (typeof CredentialType)[keyof typeof CredentialType];

export const DayOfWeek = {
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday",
    Sunday: "Sunday",
} as const;

/**
 * The day of week.
 */
export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek];

export const EndpointType = {
    AzureStorageBlobContainer: "AzureStorageBlobContainer",
    NfsMount: "NfsMount",
    AzureStorageSmbFileShare: "AzureStorageSmbFileShare",
    SmbMount: "SmbMount",
} as const;

/**
 * The Endpoint resource type.
 */
export type EndpointType = (typeof EndpointType)[keyof typeof EndpointType];

export const NfsVersion = {
    NFSauto: "NFSauto",
    NFSv3: "NFSv3",
    NFSv4: "NFSv4",
} as const;

/**
 * The NFS protocol version.
 */
export type NfsVersion = (typeof NfsVersion)[keyof typeof NfsVersion];
