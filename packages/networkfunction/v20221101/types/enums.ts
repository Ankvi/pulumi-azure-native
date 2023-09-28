export const DestinationType = {
    AzureMonitor: "AzureMonitor",
} as const;

/**
 * Emission destination type.
 */
export type DestinationType = (typeof DestinationType)[keyof typeof DestinationType];

export const EmissionType = {
    IPFIX: "IPFIX",
} as const;

/**
 * Emission format type.
 */
export type EmissionType = (typeof EmissionType)[keyof typeof EmissionType];

export const IngestionType = {
    IPFIX: "IPFIX",
} as const;

/**
 * The ingestion type.
 */
export type IngestionType = (typeof IngestionType)[keyof typeof IngestionType];

export const SourceType = {
    Resource: "Resource",
} as const;

/**
 * Ingestion source type.
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];
