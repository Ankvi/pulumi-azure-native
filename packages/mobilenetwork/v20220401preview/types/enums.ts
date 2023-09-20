export const BillingSku = {
    /**
     * Evaluation package plan
     */
    EvaluationPackage: "EvaluationPackage",
    /**
     * Flagship starter package plan
     */
    FlagshipStarterPackage: "FlagshipStarterPackage",
    /**
     * Edge site 2Gbps plan
     */
    EdgeSite2GBPS: "EdgeSite2GBPS",
    /**
     * Edge site 3Gbps plan
     */
    EdgeSite3GBPS: "EdgeSite3GBPS",
    /**
     * Edge site 4Gbps plan
     */
    EdgeSite4GBPS: "EdgeSite4GBPS",
    /**
     * Medium package plan
     */
    MediumPackage: "MediumPackage",
    /**
     * Large package plan
     */
    LargePackage: "LargePackage",
} as const;

export type BillingSku = (typeof BillingSku)[keyof typeof BillingSku];

export const CoreNetworkType = {
    /**
     * 5G core
     */
    CoreNetworkType_5GC: "5GC",
    /**
     * EPC / 4G core
     */
    EPC: "EPC",
} as const;

export type CoreNetworkType = (typeof CoreNetworkType)[keyof typeof CoreNetworkType];

export const CreatedByType = {
    User: "User",
    Application: "Application",
    ManagedIdentity: "ManagedIdentity",
    Key: "Key",
} as const;

export type CreatedByType = (typeof CreatedByType)[keyof typeof CreatedByType];

export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const NaptEnabled = {
    /**
     * NAPT is enabled
     */
    Enabled: "Enabled",
    /**
     * NAPT is disabled
     */
    Disabled: "Disabled",
} as const;

export type NaptEnabled = (typeof NaptEnabled)[keyof typeof NaptEnabled];

export const PduSessionType = {
    IPv4: "IPv4",
    IPv6: "IPv6",
} as const;

export type PduSessionType = (typeof PduSessionType)[keyof typeof PduSessionType];

export const PlatformType = {
    /**
     * If this option is chosen, you must set one of "azureStackEdgeDevice", "connectedCluster" or "customLocation". If multiple are set then "customLocation" will take precedence over "connectedCluster" which takes precedence over "azureStackEdgeDevice".
     */
    AKS_HCI: "AKS-HCI",
    /**
     * If this option is chosen, you must set one of "connectedCluster" or "customLocation". If multiple are set then "customLocation" will take precedence over "connectedCluster".
     */
    BaseVM: "BaseVM",
} as const;

export type PlatformType = (typeof PlatformType)[keyof typeof PlatformType];

export const PreemptionCapability = {
    /**
     * Cannot preempt
     */
    NotPreempt: "NotPreempt",
    /**
     * May preempt
     */
    MayPreempt: "MayPreempt",
} as const;

export type PreemptionCapability = (typeof PreemptionCapability)[keyof typeof PreemptionCapability];

export const PreemptionVulnerability = {
    /**
     * Cannot be preempted
     */
    NotPreemptable: "NotPreemptable",
    /**
     * May be preempted
     */
    Preemptable: "Preemptable",
} as const;

export type PreemptionVulnerability = (typeof PreemptionVulnerability)[keyof typeof PreemptionVulnerability];

export const SdfDirection = {
    /**
     * Traffic flowing from the UE to the data network.
     */
    Uplink: "Uplink",
    /**
     * Traffic flowing from the data network to the UE.
     */
    Downlink: "Downlink",
    /**
     * Traffic flowing both to and from the UE.
     */
    Bidirectional: "Bidirectional",
} as const;

export type SdfDirection = (typeof SdfDirection)[keyof typeof SdfDirection];

export const TrafficControlPermission = {
    /**
     * Traffic matching this rule is allowed to flow.
     */
    Enabled: "Enabled",
    /**
     * Traffic matching this rule is not allowed to flow.
     */
    Blocked: "Blocked",
} as const;

export type TrafficControlPermission = (typeof TrafficControlPermission)[keyof typeof TrafficControlPermission];