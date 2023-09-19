export const DestinationType = {
    AzureMonitor: "AzureMonitor",
} as const;

export type DestinationType = (typeof DestinationType)[keyof typeof DestinationType];

export const EmissionType = {
    IPFIX: "IPFIX",
} as const;

export type EmissionType = (typeof EmissionType)[keyof typeof EmissionType];

export const IngestionType = {
    IPFIX: "IPFIX",
} as const;

export type IngestionType = (typeof IngestionType)[keyof typeof IngestionType];

export const SourceType = {
    Resource: "Resource",
} as const;

export type SourceType = (typeof SourceType)[keyof typeof SourceType];
