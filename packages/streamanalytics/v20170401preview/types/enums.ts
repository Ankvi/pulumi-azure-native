export const AuthenticationMode = {
    Msi: "Msi",
    UserToken: "UserToken",
    ConnectionString: "ConnectionString",
} as const;

export type AuthenticationMode = (typeof AuthenticationMode)[keyof typeof AuthenticationMode];

export const CompatibilityLevel = {
    CompatibilityLevel_1_0: "1.0",
} as const;

export type CompatibilityLevel = (typeof CompatibilityLevel)[keyof typeof CompatibilityLevel];

export const ContentStoragePolicy = {
    SystemAccount: "SystemAccount",
    JobStorageAccount: "JobStorageAccount",
} as const;

export type ContentStoragePolicy = (typeof ContentStoragePolicy)[keyof typeof ContentStoragePolicy];

export const Encoding = {
    UTF8: "UTF8",
} as const;

export type Encoding = (typeof Encoding)[keyof typeof Encoding];

export const EventSerializationType = {
    Csv: "Csv",
    Avro: "Avro",
    Json: "Json",
    CustomClr: "CustomClr",
    Parquet: "Parquet",
    Delta: "Delta",
} as const;

export type EventSerializationType = (typeof EventSerializationType)[keyof typeof EventSerializationType];

export const EventsOutOfOrderPolicy = {
    Adjust: "Adjust",
    Drop: "Drop",
} as const;

export type EventsOutOfOrderPolicy = (typeof EventsOutOfOrderPolicy)[keyof typeof EventsOutOfOrderPolicy];

export const JobType = {
    Cloud: "Cloud",
    Edge: "Edge",
} as const;

export type JobType = (typeof JobType)[keyof typeof JobType];

export const JsonOutputSerializationFormat = {
    LineSeparated: "LineSeparated",
    Array: "Array",
} as const;

export type JsonOutputSerializationFormat = (typeof JsonOutputSerializationFormat)[keyof typeof JsonOutputSerializationFormat];

export const OutputErrorPolicy = {
    Stop: "Stop",
    Drop: "Drop",
} as const;

export type OutputErrorPolicy = (typeof OutputErrorPolicy)[keyof typeof OutputErrorPolicy];

export const OutputStartMode = {
    JobStartTime: "JobStartTime",
    CustomTime: "CustomTime",
    LastOutputEventTime: "LastOutputEventTime",
} as const;

export type OutputStartMode = (typeof OutputStartMode)[keyof typeof OutputStartMode];

export const StreamingJobSkuName = {
    Standard: "Standard",
} as const;

export type StreamingJobSkuName = (typeof StreamingJobSkuName)[keyof typeof StreamingJobSkuName];