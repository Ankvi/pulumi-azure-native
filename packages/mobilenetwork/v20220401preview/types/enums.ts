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

/**
 * The SKU defining the throughput and SIM allowances for this packet core control plane deployment.
 */
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

/**
 * The core network technology generation (5G core or EPC / 4G core).
 */
export type CoreNetworkType = (typeof CoreNetworkType)[keyof typeof CoreNetworkType];

export const CreatedByType = {
    User: "User",
    Application: "Application",
    ManagedIdentity: "ManagedIdentity",
    Key: "Key",
} as const;

/**
 * The type of identity that last modified the resource.
 */
export type CreatedByType = (typeof CreatedByType)[keyof typeof CreatedByType];

export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

/**
 * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
 */
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

/**
 * Whether NAPT is enabled for connections to this attached data network.
 */
export type NaptEnabled = (typeof NaptEnabled)[keyof typeof NaptEnabled];

export const PduSessionType = {
    IPv4: "IPv4",
    IPv6: "IPv6",
} as const;

/**
 * The default PDU session type, which is used if the UE does not request a specific session type.
 */
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

/**
 * The platform type where packet core is deployed.
 */
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

/**
 * Default QoS Flow preemption capability. The preemption capability of a QoS Flow controls whether it can preempt another QoS Flow with a lower priority level. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.
 */
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

/**
 * Default QoS Flow preemption vulnerability. The preemption vulnerability of a QoS Flow controls whether it can be preempted by a QoS Flow with a higher priority level. See 3GPP TS23.501 section 5.7.2.2 for a full description of the ARP parameters.
 */
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

/**
 * The direction of this flow.
 */
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

/**
 * Determines whether flows that match this data flow policy rule are permitted.
 */
export type TrafficControlPermission = (typeof TrafficControlPermission)[keyof typeof TrafficControlPermission];
