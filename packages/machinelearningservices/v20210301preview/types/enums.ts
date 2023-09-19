export const BatchLoggingLevel = {
    Info: "Info",
    Warning: "Warning",
    Debug: "Debug",
} as const;

export type BatchLoggingLevel = (typeof BatchLoggingLevel)[keyof typeof BatchLoggingLevel];

export const BatchOutputAction = {
    SummaryOnly: "SummaryOnly",
    AppendRow: "AppendRow",
} as const;

export type BatchOutputAction = (typeof BatchOutputAction)[keyof typeof BatchOutputAction];

export const ContentsType = {
    AzureBlob: "AzureBlob",
    AzureDataLakeGen1: "AzureDataLakeGen1",
    AzureDataLakeGen2: "AzureDataLakeGen2",
    AzureFile: "AzureFile",
    AzureMySql: "AzureMySql",
    AzurePostgreSql: "AzurePostgreSql",
    AzureSqlDatabase: "AzureSqlDatabase",
    GlusterFs: "GlusterFs",
} as const;

export type ContentsType = (typeof ContentsType)[keyof typeof ContentsType];

export const CredentialsType = {
    AccountKey: "AccountKey",
    Certificate: "Certificate",
    None: "None",
    Sas: "Sas",
    ServicePrincipal: "ServicePrincipal",
    SqlAdmin: "SqlAdmin",
} as const;

export type CredentialsType = (typeof CredentialsType)[keyof typeof CredentialsType];

export const DataBindingMode = {
    Mount: "Mount",
    Download: "Download",
    Upload: "Upload",
    ReadOnlyMount: "ReadOnlyMount",
    ReadWriteMount: "ReadWriteMount",
    Direct: "Direct",
    EvalMount: "EvalMount",
    EvalDownload: "EvalDownload",
} as const;

export type DataBindingMode = (typeof DataBindingMode)[keyof typeof DataBindingMode];

export const DatasetType = {
    Simple: "Simple",
    Dataflow: "Dataflow",
} as const;

export type DatasetType = (typeof DatasetType)[keyof typeof DatasetType];

export const DistributionType = {
    PyTorch: "PyTorch",
    TensorFlow: "TensorFlow",
    Mpi: "Mpi",
} as const;

export type DistributionType = (typeof DistributionType)[keyof typeof DistributionType];

export const DockerSpecificationType = {
    Build: "Build",
    Image: "Image",
} as const;

export type DockerSpecificationType = (typeof DockerSpecificationType)[keyof typeof DockerSpecificationType];

export const EarlyTerminationPolicyType = {
    Bandit: "Bandit",
    MedianStopping: "MedianStopping",
    TruncationSelection: "TruncationSelection",
} as const;

export type EarlyTerminationPolicyType = (typeof EarlyTerminationPolicyType)[keyof typeof EarlyTerminationPolicyType];

export const EndpointAuthMode = {
    AMLToken: "AMLToken",
    Key: "Key",
    AADToken: "AADToken",
} as const;

export type EndpointAuthMode = (typeof EndpointAuthMode)[keyof typeof EndpointAuthMode];

export const EndpointComputeType = {
    Managed: "Managed",
    K8S: "K8S",
    AzureMLCompute: "AzureMLCompute",
} as const;

export type EndpointComputeType = (typeof EndpointComputeType)[keyof typeof EndpointComputeType];

export const Goal = {
    Minimize: "Minimize",
    Maximize: "Maximize",
} as const;

export type Goal = (typeof Goal)[keyof typeof Goal];

export const IdentityConfigurationType = {
    Managed: "Managed",
    AMLToken: "AMLToken",
} as const;

export type IdentityConfigurationType = (typeof IdentityConfigurationType)[keyof typeof IdentityConfigurationType];

export const ImageAnnotationType = {
    Classification: "Classification",
    BoundingBox: "BoundingBox",
    InstanceSegmentation: "InstanceSegmentation",
} as const;

export type ImageAnnotationType = (typeof ImageAnnotationType)[keyof typeof ImageAnnotationType];

export const JobType = {
    Command: "Command",
    Sweep: "Sweep",
    Labeling: "Labeling",
} as const;

export type JobType = (typeof JobType)[keyof typeof JobType];

export const MediaType = {
    Image: "Image",
    Text: "Text",
} as const;

export type MediaType = (typeof MediaType)[keyof typeof MediaType];

export const OperatingSystemType = {
    Linux: "Linux",
    Windows: "Windows",
} as const;

export type OperatingSystemType = (typeof OperatingSystemType)[keyof typeof OperatingSystemType];

export const OriginType = {
    Synapse: "Synapse",
} as const;

export type OriginType = (typeof OriginType)[keyof typeof OriginType];

export const ReferenceType = {
    Id: "Id",
    DataPath: "DataPath",
    OutputPath: "OutputPath",
} as const;

export type ReferenceType = (typeof ReferenceType)[keyof typeof ReferenceType];

export const ResourceIdentityAssignment = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
    None: "None",
} as const;

export type ResourceIdentityAssignment = (typeof ResourceIdentityAssignment)[keyof typeof ResourceIdentityAssignment];

export const SamplingAlgorithm = {
    Grid: "Grid",
    Random: "Random",
    Bayesian: "Bayesian",
} as const;

export type SamplingAlgorithm = (typeof SamplingAlgorithm)[keyof typeof SamplingAlgorithm];

export const ScaleType = {
    Auto: "Auto",
    Manual: "Manual",
} as const;

export type ScaleType = (typeof ScaleType)[keyof typeof ScaleType];

export const SecretsType = {
    AccountKey: "AccountKey",
    Certificate: "Certificate",
    None: "None",
    Sas: "Sas",
    ServicePrincipal: "ServicePrincipal",
    SqlAdmin: "SqlAdmin",
} as const;

export type SecretsType = (typeof SecretsType)[keyof typeof SecretsType];

export const TextAnnotationType = {
    Classification: "Classification",
} as const;

export type TextAnnotationType = (typeof TextAnnotationType)[keyof typeof TextAnnotationType];
