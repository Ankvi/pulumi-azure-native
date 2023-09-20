export const DataSetKind = {
    Blob: "Blob",
    Container: "Container",
    BlobFolder: "BlobFolder",
    AdlsGen2FileSystem: "AdlsGen2FileSystem",
    AdlsGen2Folder: "AdlsGen2Folder",
    AdlsGen2File: "AdlsGen2File",
    AdlsGen1Folder: "AdlsGen1Folder",
    AdlsGen1File: "AdlsGen1File",
    KustoCluster: "KustoCluster",
    KustoDatabase: "KustoDatabase",
    KustoTable: "KustoTable",
    SqlDBTable: "SqlDBTable",
    SqlDWTable: "SqlDWTable",
    SynapseWorkspaceSqlPoolTable: "SynapseWorkspaceSqlPoolTable",
} as const;

export type DataSetKind = (typeof DataSetKind)[keyof typeof DataSetKind];

export const DataSetMappingKind = {
    Blob: "Blob",
    Container: "Container",
    BlobFolder: "BlobFolder",
    AdlsGen2FileSystem: "AdlsGen2FileSystem",
    AdlsGen2Folder: "AdlsGen2Folder",
    AdlsGen2File: "AdlsGen2File",
    KustoCluster: "KustoCluster",
    KustoDatabase: "KustoDatabase",
    KustoTable: "KustoTable",
    SqlDBTable: "SqlDBTable",
    SqlDWTable: "SqlDWTable",
    SynapseWorkspaceSqlPoolTable: "SynapseWorkspaceSqlPoolTable",
} as const;

export type DataSetMappingKind = (typeof DataSetMappingKind)[keyof typeof DataSetMappingKind];

export const OutputType = {
    Csv: "Csv",
    Parquet: "Parquet",
} as const;

export type OutputType = (typeof OutputType)[keyof typeof OutputType];

export const RecurrenceInterval = {
    Hour: "Hour",
    Day: "Day",
} as const;

export type RecurrenceInterval = (typeof RecurrenceInterval)[keyof typeof RecurrenceInterval];

export const ShareKind = {
    CopyBased: "CopyBased",
    InPlace: "InPlace",
} as const;

export type ShareKind = (typeof ShareKind)[keyof typeof ShareKind];

export const SynchronizationMode = {
    Incremental: "Incremental",
    FullSync: "FullSync",
} as const;

export type SynchronizationMode = (typeof SynchronizationMode)[keyof typeof SynchronizationMode];

export const SynchronizationSettingKind = {
    ScheduleBased: "ScheduleBased",
} as const;

export type SynchronizationSettingKind = (typeof SynchronizationSettingKind)[keyof typeof SynchronizationSettingKind];

export const TriggerKind = {
    ScheduleBased: "ScheduleBased",
} as const;

export type TriggerKind = (typeof TriggerKind)[keyof typeof TriggerKind];

export const Type = {
    SystemAssigned: "SystemAssigned",
} as const;

export type Type = (typeof Type)[keyof typeof Type];