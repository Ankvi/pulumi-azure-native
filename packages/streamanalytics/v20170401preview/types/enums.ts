export const AuthenticationMode = {
    Msi: "Msi",
    UserToken: "UserToken",
    ConnectionString: "ConnectionString",
} as const;

/**
 * Authentication Mode.
 */
export type AuthenticationMode = (typeof AuthenticationMode)[keyof typeof AuthenticationMode];

export const CompatibilityLevel = {
    CompatibilityLevel_1_0: "1.0",
} as const;

/**
 * Controls certain runtime behaviors of the streaming job.
 */
export type CompatibilityLevel = (typeof CompatibilityLevel)[keyof typeof CompatibilityLevel];

export const ContentStoragePolicy = {
    SystemAccount: "SystemAccount",
    JobStorageAccount: "JobStorageAccount",
} as const;

/**
 * Valid values are JobStorageAccount and SystemAccount. If set to JobStorageAccount, this requires the user to also specify jobStorageAccount property. .
 */
export type ContentStoragePolicy = (typeof ContentStoragePolicy)[keyof typeof ContentStoragePolicy];

export const Encoding = {
    UTF8: "UTF8",
} as const;

/**
 * Specifies the encoding of the incoming data in the case of input and the encoding of outgoing data in the case of output. Required on PUT (CreateOrReplace) requests.
 */
export type Encoding = (typeof Encoding)[keyof typeof Encoding];

export const EventSerializationType = {
    Csv: "Csv",
    Avro: "Avro",
    Json: "Json",
    CustomClr: "CustomClr",
    Parquet: "Parquet",
    Delta: "Delta",
} as const;

/**
 * Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.
 */
export type EventSerializationType = (typeof EventSerializationType)[keyof typeof EventSerializationType];

export const EventsOutOfOrderPolicy = {
    Adjust: "Adjust",
    Drop: "Drop",
} as const;

/**
 * Indicates the policy to apply to events that arrive out of order in the input event stream.
 */
export type EventsOutOfOrderPolicy = (typeof EventsOutOfOrderPolicy)[keyof typeof EventsOutOfOrderPolicy];

export const JobType = {
    Cloud: "Cloud",
    Edge: "Edge",
} as const;

/**
 * Describes the type of the job. Valid modes are `Cloud` and 'Edge'.
 */
export type JobType = (typeof JobType)[keyof typeof JobType];

export const JsonOutputSerializationFormat = {
    LineSeparated: "LineSeparated",
    Array: "Array",
} as const;

/**
 * This property only applies to JSON serialization of outputs only. It is not applicable to inputs. This property specifies the format of the JSON the output will be written in. The currently supported values are 'lineSeparated' indicating the output will be formatted by having each JSON object separated by a new line and 'array' indicating the output will be formatted as an array of JSON objects. Default value is 'lineSeparated' if left null.
 */
export type JsonOutputSerializationFormat = (typeof JsonOutputSerializationFormat)[keyof typeof JsonOutputSerializationFormat];

export const OutputErrorPolicy = {
    Stop: "Stop",
    Drop: "Drop",
} as const;

/**
 * Indicates the policy to apply to events that arrive at the output and cannot be written to the external storage due to being malformed (missing column values, column values of wrong type or size).
 */
export type OutputErrorPolicy = (typeof OutputErrorPolicy)[keyof typeof OutputErrorPolicy];

export const OutputStartMode = {
    JobStartTime: "JobStartTime",
    CustomTime: "CustomTime",
    LastOutputEventTime: "LastOutputEventTime",
} as const;

/**
 * This property should only be utilized when it is desired that the job be started immediately upon creation. Value may be JobStartTime, CustomTime, or LastOutputEventTime to indicate whether the starting point of the output event stream should start whenever the job is started, start at a custom user time stamp specified via the outputStartTime property, or start from the last event output time.
 */
export type OutputStartMode = (typeof OutputStartMode)[keyof typeof OutputStartMode];

export const StreamingJobSkuName = {
    Standard: "Standard",
} as const;

/**
 * The name of the SKU. Required on PUT (CreateOrReplace) requests.
 */
export type StreamingJobSkuName = (typeof StreamingJobSkuName)[keyof typeof StreamingJobSkuName];
