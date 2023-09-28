export const CalculationWindowTypes = {
    Lifetime: "Lifetime",
    Hour: "Hour",
    Day: "Day",
    Week: "Week",
    Month: "Month",
} as const;

/**
 * The calculation window.
 */
export type CalculationWindowTypes = (typeof CalculationWindowTypes)[keyof typeof CalculationWindowTypes];

export const CardinalityTypes = {
    OneToOne: "OneToOne",
    OneToMany: "OneToMany",
    ManyToMany: "ManyToMany",
} as const;

/**
 * The Relationship Cardinality.
 */
export type CardinalityTypes = (typeof CardinalityTypes)[keyof typeof CardinalityTypes];

export const CompletionOperationTypes = {
    DoNothing: "DoNothing",
    DeleteFile: "DeleteFile",
    MoveFile: "MoveFile",
} as const;

/**
 * The type of completion operation.
 */
export type CompletionOperationTypes = (typeof CompletionOperationTypes)[keyof typeof CompletionOperationTypes];

export const ConnectorTypes = {
    None: "None",
    CRM: "CRM",
    AzureBlob: "AzureBlob",
    Salesforce: "Salesforce",
    ExchangeOnline: "ExchangeOnline",
    Outbound: "Outbound",
} as const;

/**
 * Type of connector.
 */
export type ConnectorTypes = (typeof ConnectorTypes)[keyof typeof ConnectorTypes];

export const EntityType = {
    None: "None",
    Profile: "Profile",
    Interaction: "Interaction",
    Relationship: "Relationship",
} as const;

/**
 * Type of target entity.
 */
export type EntityType = (typeof EntityType)[keyof typeof EntityType];

export const EntityTypes = {
    None: "None",
    Profile: "Profile",
    Interaction: "Interaction",
    Relationship: "Relationship",
} as const;

/**
 * Type of entity.
 */
export type EntityTypes = (typeof EntityTypes)[keyof typeof EntityTypes];

export const ErrorManagementTypes = {
    RejectAndContinue: "RejectAndContinue",
    StopImport: "StopImport",
    RejectUntilLimit: "RejectUntilLimit",
} as const;

/**
 * The type of error management to use for the mapping.
 */
export type ErrorManagementTypes = (typeof ErrorManagementTypes)[keyof typeof ErrorManagementTypes];

export const FormatTypes = {
    TextFormat: "TextFormat",
} as const;

/**
 * The type mapping format.
 */
export type FormatTypes = (typeof FormatTypes)[keyof typeof FormatTypes];

export const FrequencyTypes = {
    Minute: "Minute",
    Hour: "Hour",
    Day: "Day",
    Week: "Week",
    Month: "Month",
} as const;

/**
 * The frequency to update.
 */
export type FrequencyTypes = (typeof FrequencyTypes)[keyof typeof FrequencyTypes];

export const InstanceOperationType = {
    Upsert: "Upsert",
    Delete: "Delete",
} as const;

/**
 * Determines whether this link is supposed to create or delete instances if Link is NOT Reference Only.
 */
export type InstanceOperationType = (typeof InstanceOperationType)[keyof typeof InstanceOperationType];

export const KpiFunctions = {
    Sum: "Sum",
    Avg: "Avg",
    Min: "Min",
    Max: "Max",
    Last: "Last",
    Count: "Count",
    None: "None",
    CountDistinct: "CountDistinct",
} as const;

/**
 * The computation function for the KPI.
 */
export type KpiFunctions = (typeof KpiFunctions)[keyof typeof KpiFunctions];

export const LinkTypes = {
    UpdateAlways: "UpdateAlways",
    CopyIfNull: "CopyIfNull",
} as const;

/**
 * Link type.
 */
export type LinkTypes = (typeof LinkTypes)[keyof typeof LinkTypes];

export const RoleTypes = {
    Admin: "Admin",
    Reader: "Reader",
    ManageAdmin: "ManageAdmin",
    ManageReader: "ManageReader",
    DataAdmin: "DataAdmin",
    DataReader: "DataReader",
} as const;

/**
 * Type of roles.
 */
export type RoleTypes = (typeof RoleTypes)[keyof typeof RoleTypes];
