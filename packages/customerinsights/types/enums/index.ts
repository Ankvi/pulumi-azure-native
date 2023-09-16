// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// Export sub-modules:
import * as v20170426 from "./v20170426";

export {
    v20170426,
};

export const CalculationWindowTypes = {
    Lifetime: "Lifetime",
    Hour: "Hour",
    Day: "Day",
    Week: "Week",
    Month: "Month",
} as const;

export type CalculationWindowTypes = (typeof CalculationWindowTypes)[keyof typeof CalculationWindowTypes];

export const CardinalityTypes = {
    OneToOne: "OneToOne",
    OneToMany: "OneToMany",
    ManyToMany: "ManyToMany",
} as const;

export type CardinalityTypes = (typeof CardinalityTypes)[keyof typeof CardinalityTypes];

export const CompletionOperationTypes = {
    DoNothing: "DoNothing",
    DeleteFile: "DeleteFile",
    MoveFile: "MoveFile",
} as const;

export type CompletionOperationTypes = (typeof CompletionOperationTypes)[keyof typeof CompletionOperationTypes];

export const ConnectorTypes = {
    None: "None",
    CRM: "CRM",
    AzureBlob: "AzureBlob",
    Salesforce: "Salesforce",
    ExchangeOnline: "ExchangeOnline",
    Outbound: "Outbound",
} as const;

export type ConnectorTypes = (typeof ConnectorTypes)[keyof typeof ConnectorTypes];

export const EntityType = {
    None: "None",
    Profile: "Profile",
    Interaction: "Interaction",
    Relationship: "Relationship",
} as const;

export type EntityType = (typeof EntityType)[keyof typeof EntityType];

export const EntityTypes = {
    None: "None",
    Profile: "Profile",
    Interaction: "Interaction",
    Relationship: "Relationship",
} as const;

export type EntityTypes = (typeof EntityTypes)[keyof typeof EntityTypes];

export const ErrorManagementTypes = {
    RejectAndContinue: "RejectAndContinue",
    StopImport: "StopImport",
    RejectUntilLimit: "RejectUntilLimit",
} as const;

export type ErrorManagementTypes = (typeof ErrorManagementTypes)[keyof typeof ErrorManagementTypes];

export const FormatTypes = {
    TextFormat: "TextFormat",
} as const;

export type FormatTypes = (typeof FormatTypes)[keyof typeof FormatTypes];

export const FrequencyTypes = {
    Minute: "Minute",
    Hour: "Hour",
    Day: "Day",
    Week: "Week",
    Month: "Month",
} as const;

export type FrequencyTypes = (typeof FrequencyTypes)[keyof typeof FrequencyTypes];

export const InstanceOperationType = {
    Upsert: "Upsert",
    Delete: "Delete",
} as const;

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

export type KpiFunctions = (typeof KpiFunctions)[keyof typeof KpiFunctions];

export const LinkTypes = {
    UpdateAlways: "UpdateAlways",
    CopyIfNull: "CopyIfNull",
} as const;

export type LinkTypes = (typeof LinkTypes)[keyof typeof LinkTypes];

export const RoleTypes = {
    Admin: "Admin",
    Reader: "Reader",
    ManageAdmin: "ManageAdmin",
    ManageReader: "ManageReader",
    DataAdmin: "DataAdmin",
    DataReader: "DataReader",
} as const;

export type RoleTypes = (typeof RoleTypes)[keyof typeof RoleTypes];
