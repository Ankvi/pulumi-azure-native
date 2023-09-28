export const BatchLoggingLevel = {
    Info: "Info",
    Warning: "Warning",
    Debug: "Debug",
} as const;

/**
 * Logging level for batch inference operation.
 */
export type BatchLoggingLevel = (typeof BatchLoggingLevel)[keyof typeof BatchLoggingLevel];

export const BatchOutputAction = {
    SummaryOnly: "SummaryOnly",
    AppendRow: "AppendRow",
} as const;

/**
 * Indicates how the output will be organized.
 */
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

/**
 * [Required] Storage type backing the datastore.
 */
export type ContentsType = (typeof ContentsType)[keyof typeof ContentsType];

export const CredentialsType = {
    AccountKey: "AccountKey",
    Certificate: "Certificate",
    None: "None",
    Sas: "Sas",
    ServicePrincipal: "ServicePrincipal",
    SqlAdmin: "SqlAdmin",
} as const;

/**
 * [Required] Credential type used to authentication with storage.
 */
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

/**
 * Mechanism for data movement to datastore.
 */
export type DataBindingMode = (typeof DataBindingMode)[keyof typeof DataBindingMode];

export const DatasetType = {
    Simple: "Simple",
    Dataflow: "Dataflow",
} as const;

/**
 * The Format of dataset.
 */
export type DatasetType = (typeof DatasetType)[keyof typeof DatasetType];

export const DistributionType = {
    PyTorch: "PyTorch",
    TensorFlow: "TensorFlow",
    Mpi: "Mpi",
} as const;

/**
 * [Required] Specifies the type of distribution framework.
 */
export type DistributionType = (typeof DistributionType)[keyof typeof DistributionType];

export const DockerSpecificationType = {
    Build: "Build",
    Image: "Image",
} as const;

/**
 * [Required] Docker specification must be either Build or Image
 */
export type DockerSpecificationType = (typeof DockerSpecificationType)[keyof typeof DockerSpecificationType];

export const EarlyTerminationPolicyType = {
    Bandit: "Bandit",
    MedianStopping: "MedianStopping",
    TruncationSelection: "TruncationSelection",
} as const;

/**
 * [Required] Name of policy configuration
 */
export type EarlyTerminationPolicyType = (typeof EarlyTerminationPolicyType)[keyof typeof EarlyTerminationPolicyType];

export const EndpointAuthMode = {
    AMLToken: "AMLToken",
    Key: "Key",
    AADToken: "AADToken",
} as const;

/**
 * [Required] Inference endpoint authentication mode type
 */
export type EndpointAuthMode = (typeof EndpointAuthMode)[keyof typeof EndpointAuthMode];

export const EndpointComputeType = {
    Managed: "Managed",
    K8S: "K8S",
    AzureMLCompute: "AzureMLCompute",
} as const;

/**
 * [Required] The compute type of the endpoint.
 */
export type EndpointComputeType = (typeof EndpointComputeType)[keyof typeof EndpointComputeType];

export const Goal = {
    Minimize: "Minimize",
    Maximize: "Maximize",
} as const;

/**
 * [Required] Defines supported metric goals for hyperparameter tuning
 */
export type Goal = (typeof Goal)[keyof typeof Goal];

export const IdentityConfigurationType = {
    Managed: "Managed",
    AMLToken: "AMLToken",
} as const;

/**
 * [Required] Specifies the type of identity framework.
 */
export type IdentityConfigurationType = (typeof IdentityConfigurationType)[keyof typeof IdentityConfigurationType];

export const ImageAnnotationType = {
    Classification: "Classification",
    BoundingBox: "BoundingBox",
    InstanceSegmentation: "InstanceSegmentation",
} as const;

/**
 * Annotation type of image labeling job.
 */
export type ImageAnnotationType = (typeof ImageAnnotationType)[keyof typeof ImageAnnotationType];

export const JobType = {
    Command: "Command",
    Sweep: "Sweep",
    Labeling: "Labeling",
} as const;

/**
 * [Required] Specifies the type of job. This field should always be set to "Labeling".
 */
export type JobType = (typeof JobType)[keyof typeof JobType];

export const MediaType = {
    Image: "Image",
    Text: "Text",
} as const;

/**
 * [Required] Media type of the job.
 */
export type MediaType = (typeof MediaType)[keyof typeof MediaType];

export const OperatingSystemType = {
    Linux: "Linux",
    Windows: "Windows",
} as const;

/**
 * The OS type the Environment.
 */
export type OperatingSystemType = (typeof OperatingSystemType)[keyof typeof OperatingSystemType];

export const OriginType = {
    Synapse: "Synapse",
} as const;

/**
 * Type of the linked service.
 */
export type OriginType = (typeof OriginType)[keyof typeof OriginType];

export const ReferenceType = {
    Id: "Id",
    DataPath: "DataPath",
    OutputPath: "OutputPath",
} as const;

/**
 * [Required] Specifies the type of asset reference.
 */
export type ReferenceType = (typeof ReferenceType)[keyof typeof ReferenceType];

export const ResourceIdentityAssignment = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
    None: "None",
} as const;

/**
 * Defines values for a ResourceIdentity's type.
 */
export type ResourceIdentityAssignment = (typeof ResourceIdentityAssignment)[keyof typeof ResourceIdentityAssignment];

export const SamplingAlgorithm = {
    Grid: "Grid",
    Random: "Random",
    Bayesian: "Bayesian",
} as const;

/**
 * [Required] Type of the hyperparameter sampling algorithms
 */
export type SamplingAlgorithm = (typeof SamplingAlgorithm)[keyof typeof SamplingAlgorithm];

export const ScaleType = {
    Auto: "Auto",
    Manual: "Manual",
} as const;

/**
 * [Required] Type of deployment scaling algorithm
 */
export type ScaleType = (typeof ScaleType)[keyof typeof ScaleType];

export const SecretsType = {
    AccountKey: "AccountKey",
    Certificate: "Certificate",
    None: "None",
    Sas: "Sas",
    ServicePrincipal: "ServicePrincipal",
    SqlAdmin: "SqlAdmin",
} as const;

/**
 * [Required] Credential type used to authentication with storage.
 */
export type SecretsType = (typeof SecretsType)[keyof typeof SecretsType];

export const TextAnnotationType = {
    Classification: "Classification",
} as const;

/**
 * Annotation type of text labeling job.
 */
export type TextAnnotationType = (typeof TextAnnotationType)[keyof typeof TextAnnotationType];
