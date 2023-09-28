export const AuthenticationType = {
    /**
     * Use AAD SSO to authenticate the user (this requires internet access).
     */
    AAD: "AAD",
    /**
     * Use locally stored passwords to authenticate the user.
     */
    Password: "Password",
} as const;

/**
 * How to authenticate users who access local diagnostics APIs.
 */
export type AuthenticationType = (typeof AuthenticationType)[keyof typeof AuthenticationType];

export const BillingSku = {
    /**
     * 100 Mbps, 20 active SIMs plan, 2 RANs
     */
    G0: "G0",
    /**
     * 1 Gbps, 100 active SIMs plan, 5 RANs
     */
    G1: "G1",
    /**
     * 2 Gbps, 200 active SIMs plan, 10 RANs
     */
    G2: "G2",
    /**
     * 5 Gbps, 500 active SIMs plan
     */
    G5: "G5",
    /**
     * 10 Gbps, 1000 active SIMs plan
     */
    G10: "G10",
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
    /**
     * Combined EPC / 4G and 5G core
     */
    EPC_5GC: "EPC + 5GC",
} as const;

/**
 * The core network technology generation (5G core or EPC / 4G core).
 */
export type CoreNetworkType = (typeof CoreNetworkType)[keyof typeof CoreNetworkType];

export const DesiredInstallationState = {
    /**
     * Don't install the packet core.
     */
    Uninstalled: "Uninstalled",
    /**
     * Install the packet core.
     */
    Installed: "Installed",
} as const;

/**
 * The desired installation state
 */
export type DesiredInstallationState = (typeof DesiredInstallationState)[keyof typeof DesiredInstallationState];

export const ManagedServiceIdentityType = {
    None: "None",
    UserAssigned: "UserAssigned",
} as const;

/**
 * Type of managed service identity (currently only UserAssigned allowed).
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
     * If this option is chosen, you must set one of "azureStackEdgeDevice", "connectedCluster" or "customLocation". If multiple are set, they must be consistent with each other.
     */
    AKS_HCI: "AKS-HCI",
    /**
     * If this option is chosen, you must set one of "azureStackHciCluster", "connectedCluster" or "customLocation". If multiple are set, they must be consistent with each other.
     */
    PlatformType_3P_AZURE_STACK_HCI: "3P-AZURE-STACK-HCI",
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
