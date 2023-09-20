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
     * If this option is chosen, you must set one of "azureStackEdgeDevice", "connectedCluster" or "customLocation". If multiple are set, they must be consistent with each other.
     */
    AKS_HCI: "AKS-HCI",
    /**
     * If this option is chosen, you must set one of "azureStackHciCluster", "connectedCluster" or "customLocation". If multiple are set, they must be consistent with each other.
     */
    PlatformType_3P_AZURE_STACK_HCI: "3P-AZURE-STACK-HCI",
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