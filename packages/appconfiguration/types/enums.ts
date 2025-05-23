export const AuthenticationMode = {
    /**
     * The local authentication mode. Users are not required to have data plane permissions if local authentication is not disabled.
     */
    Local: "Local",
    /**
     * The pass-through authentication mode. User identity will be passed through from Azure Resource Manager (ARM), requiring user to have data plane action permissions (Available via App Configuration Data Owner/ App Configuration Data Reader).
     */
    Pass_through: "Pass-through",
} as const;

/**
 * The data plane proxy authentication mode. This property manages the authentication mode of request to the data plane resources.
 */
export type AuthenticationMode = (typeof AuthenticationMode)[keyof typeof AuthenticationMode];

export const ConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
    Disconnected: "Disconnected",
} as const;

/**
 * The private link service connection status.
 */
export type ConnectionStatus = (typeof ConnectionStatus)[keyof typeof ConnectionStatus];

export const CreateMode = {
    Recover: "Recover",
    Default: "Default",
} as const;

/**
 * Indicates whether the configuration store need to be recovered.
 */
export type CreateMode = (typeof CreateMode)[keyof typeof CreateMode];

export const IdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
} as const;

/**
 * The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identities.
 */
export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

export const PrivateLinkDelegation = {
    /**
     * Azure Resource Manager (ARM) private endpoint is required if the resource requires private link.
     */
    Enabled: "Enabled",
    /**
     * Request is denied if the resource requires private link.
     */
    Disabled: "Disabled",
} as const;

/**
 * The data plane proxy private link delegation. This property manages if a request from delegated Azure Resource Manager (ARM) private link is allowed when the data plane resource requires private link.
 */
export type PrivateLinkDelegation = (typeof PrivateLinkDelegation)[keyof typeof PrivateLinkDelegation];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Control permission for data plane traffic coming from public networks while private endpoint is enabled.
 */
export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];
