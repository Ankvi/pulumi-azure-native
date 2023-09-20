export const CopyMode = {
    Additive: "Additive",
    Mirror: "Mirror",
} as const;

export type CopyMode = (typeof CopyMode)[keyof typeof CopyMode];

export const EndpointType = {
    AzureStorageBlobContainer: "AzureStorageBlobContainer",
    NfsMount: "NfsMount",
} as const;

export type EndpointType = (typeof EndpointType)[keyof typeof EndpointType];

export const NfsVersion = {
    NFSauto: "NFSauto",
    NFSv3: "NFSv3",
    NFSv4: "NFSv4",
} as const;

export type NfsVersion = (typeof NfsVersion)[keyof typeof NfsVersion];