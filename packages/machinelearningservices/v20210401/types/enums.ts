export const ApplicationSharingPolicy = {
    Personal: "Personal",
    Shared: "Shared",
} as const;

/**
 * Policy for sharing applications on this compute instance among users of parent workspace. If Personal, only the creator can access applications on this compute instance. When Shared, any workspace user can access applications on this instance depending on his/her assigned role.
 */
export type ApplicationSharingPolicy = (typeof ApplicationSharingPolicy)[keyof typeof ApplicationSharingPolicy];

export const ClusterPurpose = {
    FastProd: "FastProd",
    DenseProd: "DenseProd",
    DevTest: "DevTest",
} as const;

/**
 * Intended usage of the cluster
 */
export type ClusterPurpose = (typeof ClusterPurpose)[keyof typeof ClusterPurpose];

export const ComputeEnvironmentType = {
    ACI: "ACI",
    AKS: "AKS",
} as const;

/**
 * The compute environment type for the service.
 */
export type ComputeEnvironmentType = (typeof ComputeEnvironmentType)[keyof typeof ComputeEnvironmentType];

export const ComputeInstanceAuthorizationType = {
    Personal: "personal",
} as const;

/**
 * The Compute Instance Authorization type. Available values are personal (default).
 */
export type ComputeInstanceAuthorizationType = (typeof ComputeInstanceAuthorizationType)[keyof typeof ComputeInstanceAuthorizationType];

export const ComputeType = {
    AKS: "AKS",
    AmlCompute: "AmlCompute",
    ComputeInstance: "ComputeInstance",
    DataFactory: "DataFactory",
    VirtualMachine: "VirtualMachine",
    HDInsight: "HDInsight",
    Databricks: "Databricks",
    DataLakeAnalytics: "DataLakeAnalytics",
    SynapseSpark: "SynapseSpark",
} as const;

/**
 * The type of compute
 */
export type ComputeType = (typeof ComputeType)[keyof typeof ComputeType];

export const LoadBalancerType = {
    PublicIp: "PublicIp",
    InternalLoadBalancer: "InternalLoadBalancer",
} as const;

/**
 * Load Balancer Type
 */
export type LoadBalancerType = (typeof LoadBalancerType)[keyof typeof LoadBalancerType];

export const OsType = {
    Linux: "Linux",
    Windows: "Windows",
} as const;

/**
 * Compute OS Type
 */
export type OsType = (typeof OsType)[keyof typeof OsType];

export const RemoteLoginPortPublicAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
    NotSpecified: "NotSpecified",
} as const;

/**
 * State of the public SSH port. Possible values are: Disabled - Indicates that the public ssh port is closed on all nodes of the cluster. Enabled - Indicates that the public ssh port is open on all nodes of the cluster. NotSpecified - Indicates that the public ssh port is closed on all nodes of the cluster if VNet is defined, else is open all public nodes. It can be default only during cluster creation time, after creation it will be either enabled or disabled.
 */
export type RemoteLoginPortPublicAccess = (typeof RemoteLoginPortPublicAccess)[keyof typeof RemoteLoginPortPublicAccess];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
    UserAssigned: "UserAssigned",
    None: "None",
} as const;

/**
 * The identity type.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const SshPublicAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * State of the public SSH port. Possible values are: Disabled - Indicates that the public ssh port is closed on this instance. Enabled - Indicates that the public ssh port is open and accessible according to the VNet/subnet policy if applicable.
 */
export type SshPublicAccess = (typeof SshPublicAccess)[keyof typeof SshPublicAccess];

export const ValueFormat = {
    JSON: "JSON",
} as const;

/**
 * format for the workspace connection value
 */
export type ValueFormat = (typeof ValueFormat)[keyof typeof ValueFormat];

export const VariantType = {
    Control: "Control",
    Treatment: "Treatment",
} as const;

/**
 * The type of the variant.
 */
export type VariantType = (typeof VariantType)[keyof typeof VariantType];

export const VmPriority = {
    Dedicated: "Dedicated",
    LowPriority: "LowPriority",
} as const;

/**
 * Virtual Machine priority
 */
export type VmPriority = (typeof VmPriority)[keyof typeof VmPriority];
