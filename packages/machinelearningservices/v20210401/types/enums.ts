export const ApplicationSharingPolicy = {
    Personal: "Personal",
    Shared: "Shared",
} as const;

export type ApplicationSharingPolicy = (typeof ApplicationSharingPolicy)[keyof typeof ApplicationSharingPolicy];

export const ClusterPurpose = {
    FastProd: "FastProd",
    DenseProd: "DenseProd",
    DevTest: "DevTest",
} as const;

export type ClusterPurpose = (typeof ClusterPurpose)[keyof typeof ClusterPurpose];

export const ComputeEnvironmentType = {
    ACI: "ACI",
    AKS: "AKS",
} as const;

export type ComputeEnvironmentType = (typeof ComputeEnvironmentType)[keyof typeof ComputeEnvironmentType];

export const ComputeInstanceAuthorizationType = {
    Personal: "personal",
} as const;

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

export type ComputeType = (typeof ComputeType)[keyof typeof ComputeType];

export const LoadBalancerType = {
    PublicIp: "PublicIp",
    InternalLoadBalancer: "InternalLoadBalancer",
} as const;

export type LoadBalancerType = (typeof LoadBalancerType)[keyof typeof LoadBalancerType];

export const OsType = {
    Linux: "Linux",
    Windows: "Windows",
} as const;

export type OsType = (typeof OsType)[keyof typeof OsType];

export const RemoteLoginPortPublicAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
    NotSpecified: "NotSpecified",
} as const;

export type RemoteLoginPortPublicAccess = (typeof RemoteLoginPortPublicAccess)[keyof typeof RemoteLoginPortPublicAccess];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
    UserAssigned: "UserAssigned",
    None: "None",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const SshPublicAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type SshPublicAccess = (typeof SshPublicAccess)[keyof typeof SshPublicAccess];

export const ValueFormat = {
    JSON: "JSON",
} as const;

export type ValueFormat = (typeof ValueFormat)[keyof typeof ValueFormat];

export const VariantType = {
    Control: "Control",
    Treatment: "Treatment",
} as const;

export type VariantType = (typeof VariantType)[keyof typeof VariantType];

export const VmPriority = {
    Dedicated: "Dedicated",
    LowPriority: "LowPriority",
} as const;

export type VmPriority = (typeof VmPriority)[keyof typeof VmPriority];
