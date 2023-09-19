export const AuthenticationMode = {
    Msi: "Msi",
    UserToken: "UserToken",
    ConnectionString: "ConnectionString",
} as const;

export type AuthenticationMode = (typeof AuthenticationMode)[keyof typeof AuthenticationMode];

export const ClusterSkuName = {
    /**
     * The default SKU.
     */
    Default: "Default",
} as const;

export type ClusterSkuName = (typeof ClusterSkuName)[keyof typeof ClusterSkuName];

export const CompatibilityLevel = {
    CompatibilityLevel_1_0: "1.0",
    CompatibilityLevel_1_2: "1.2",
} as const;

export type CompatibilityLevel = (typeof CompatibilityLevel)[keyof typeof CompatibilityLevel];

export const CompressionType = {
    None: "None",
    GZip: "GZip",
    Deflate: "Deflate",
} as const;

export type CompressionType = (typeof CompressionType)[keyof typeof CompressionType];

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
    Parquet: "Parquet",
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

export const RefreshType = {
    Static: "Static",
    RefreshPeriodicallyWithFull: "RefreshPeriodicallyWithFull",
    RefreshPeriodicallyWithDelta: "RefreshPeriodicallyWithDelta",
} as const;

export type RefreshType = (typeof RefreshType)[keyof typeof RefreshType];

export const SkuName = {
    Standard: "Standard",
} as const;

export type SkuName = (typeof SkuName)[keyof typeof SkuName];
