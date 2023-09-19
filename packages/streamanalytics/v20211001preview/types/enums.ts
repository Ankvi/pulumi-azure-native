export const AuthenticationMode = {
    Msi: "Msi",
    UserToken: "UserToken",
    ConnectionString: "ConnectionString",
} as const;

export type AuthenticationMode = (typeof AuthenticationMode)[keyof typeof AuthenticationMode];

export const BlobWriteMode = {
    Append: "Append",
    Once: "Once",
} as const;

export type BlobWriteMode = (typeof BlobWriteMode)[keyof typeof BlobWriteMode];

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

export const EventGridEventSchemaType = {
    EventGridEventSchema: "EventGridEventSchema",
    CloudEventSchema: "CloudEventSchema",
} as const;

export type EventGridEventSchemaType = (typeof EventGridEventSchemaType)[keyof typeof EventGridEventSchemaType];

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

export const InputWatermarkMode = {
    None: "None",
    ReadWatermark: "ReadWatermark",
} as const;

export type InputWatermarkMode = (typeof InputWatermarkMode)[keyof typeof InputWatermarkMode];

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

export const OutputWatermarkMode = {
    None: "None",
    SendCurrentPartitionWatermark: "SendCurrentPartitionWatermark",
    SendLowestWatermarkAcrossPartitions: "SendLowestWatermarkAcrossPartitions",
} as const;

export type OutputWatermarkMode = (typeof OutputWatermarkMode)[keyof typeof OutputWatermarkMode];

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

export const UpdatableUdfRefreshType = {
    Blocking: "Blocking",
    Nonblocking: "Nonblocking",
} as const;

export type UpdatableUdfRefreshType = (typeof UpdatableUdfRefreshType)[keyof typeof UpdatableUdfRefreshType];

export const UpdateMode = {
    Static: "Static",
    Refreshable: "Refreshable",
} as const;

export type UpdateMode = (typeof UpdateMode)[keyof typeof UpdateMode];
