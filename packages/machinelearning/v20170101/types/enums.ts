export const AssetType = {
    Module: "Module",
    Resource: "Resource",
} as const;

/**
 * Asset's type.
 */
export type AssetType = (typeof AssetType)[keyof typeof AssetType];

export const ColumnFormat = {
    Byte: "Byte",
    Char: "Char",
    Complex64: "Complex64",
    Complex128: "Complex128",
    Date_time: "Date-time",
    Date_timeOffset: "Date-timeOffset",
    Double: "Double",
    Duration: "Duration",
    Float: "Float",
    Int8: "Int8",
    Int16: "Int16",
    Int32: "Int32",
    Int64: "Int64",
    Uint8: "Uint8",
    Uint16: "Uint16",
    Uint32: "Uint32",
    Uint64: "Uint64",
} as const;

/**
 * Additional format information for the data type.
 */
export type ColumnFormat = (typeof ColumnFormat)[keyof typeof ColumnFormat];

export const ColumnType = {
    Boolean: "Boolean",
    Integer: "Integer",
    Number: "Number",
    String: "String",
} as const;

/**
 * Data type of the column.
 */
export type ColumnType = (typeof ColumnType)[keyof typeof ColumnType];

export const DiagnosticsLevel = {
    None: "None",
    Error: "Error",
    All: "All",
} as const;

/**
 * Specifies the verbosity of the diagnostic output. Valid values are: None - disables tracing; Error - collects only error (stderr) traces; All - collects all traces (stdout and stderr).
 */
export type DiagnosticsLevel = (typeof DiagnosticsLevel)[keyof typeof DiagnosticsLevel];

export const InputPortType = {
    Dataset: "Dataset",
} as const;

/**
 * Port data type.
 */
export type InputPortType = (typeof InputPortType)[keyof typeof InputPortType];

export const OutputPortType = {
    Dataset: "Dataset",
} as const;

/**
 * Port data type.
 */
export type OutputPortType = (typeof OutputPortType)[keyof typeof OutputPortType];

export const ParameterType = {
    String: "String",
    Int: "Int",
    Float: "Float",
    Enumerated: "Enumerated",
    Script: "Script",
    Mode: "Mode",
    Credential: "Credential",
    Boolean: "Boolean",
    Double: "Double",
    ColumnPicker: "ColumnPicker",
    ParameterRange: "ParameterRange",
    DataGatewayName: "DataGatewayName",
} as const;

/**
 * Graph parameter's type.
 */
export type ParameterType = (typeof ParameterType)[keyof typeof ParameterType];
