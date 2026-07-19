import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * AppLink Member properties
 */
export interface AppLinkMemberPropertiesResponse {
    /**
     * Cluster type
     */
    clusterType?: string;
    /**
     * Connectivity profile.
     */
    connectivityProfile?: ConnectivityProfileResponse;
    /**
     * AppLink Member Metadata
     */
    metadata: MetadataResponse;
    /**
     * Observability profile
     */
    observabilityProfile?: ObservabilityProfileResponse;
    /**
     * Provisioning state
     */
    provisioningState: string;
    /**
     * Upgrade profile.
     */
    upgradeProfile?: UpgradeProfileResponse;
}

/**
 * AppLink properties
 */
export interface AppLinkPropertiesResponse {
    /**
     * Provisioning state
     */
    provisioningState: string;
}

/**
 * AppLinkMember connectivity profile.
 */
export interface ConnectivityProfileResponse {
    /**
     * East-West gateway profile.
     */
    eastWestGateway?: EastWestGatewayProfileResponse;
    /**
     * Private connect profile.
     */
    privateConnect?: PrivateConnectProfileResponse;
}

/**
 * AppLinkMember east-west gateway profile.
 */
export interface EastWestGatewayProfileResponse {
    /**
     * East-West gateway visibility.
     */
    visibility: string;
}

/**
 * AppLinkMember fully managed upgrade profile
 */
export interface FullyManagedUpgradeProfileResponse {
    /**
     * Release channel
     */
    releaseChannel: string;
}

/**
 * Managed service identity (system assigned and/or user assigned identities)
 */
export interface ManagedServiceIdentityResponse {
    /**
     * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    principalId: string;
    /**
     * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    tenantId: string;
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: string;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
}

/**
 * AppLinkMember metadata
 */
export interface MetadataResponse {
    /**
     * Resource ID
     */
    resourceId: string;
}

/**
 * AppLinkMember metrics profile
 */
export interface MetricsProfileResponse {
    /**
     * Metrics endpoint URL
     */
    metricsEndpoint: string;
}

/**
 * AppLinkMember observability profile
 */
export interface ObservabilityProfileResponse {
    /**
     * Metrics configuration
     */
    metrics?: MetricsProfileResponse;
}

/**
 * AppLinkMember private connect profile.
 */
export interface PrivateConnectProfileResponse {
    /**
     * Delegated Subnet to AppLink.
     */
    subnetResourceId: string;
}

/**
 * AppLinkMember self managed upgrade profile
 */
export interface SelfManagedUpgradeProfileResponse {
    /**
     * Istio version
     */
    version: string;
}

/**
 * Metadata pertaining to creation and last modification of the resource.
 */
export interface SystemDataResponse {
    /**
     * The timestamp of resource creation (UTC).
     */
    createdAt?: string;
    /**
     * The identity that created the resource.
     */
    createdBy?: string;
    /**
     * The type of identity that created the resource.
     */
    createdByType?: string;
    /**
     * The timestamp of resource last modification (UTC)
     */
    lastModifiedAt?: string;
    /**
     * The identity that last modified the resource.
     */
    lastModifiedBy?: string;
    /**
     * The type of identity that last modified the resource.
     */
    lastModifiedByType?: string;
}

/**
 * AppLinkMember upgrade profile.
 */
export interface UpgradeProfileResponse {
    /**
     * Fully managed upgrade profile.
     */
    fullyManagedUpgradeProfile?: FullyManagedUpgradeProfileResponse;
    /**
     * Upgrade mode.
     */
    mode: string;
    /**
     * Self managed upgrade profile.
     */
    selfManagedUpgradeProfile?: SelfManagedUpgradeProfileResponse;
}

/**
 * User assigned identity properties
 */
export interface UserAssignedIdentityResponse {
    /**
     * The client ID of the assigned identity.
     */
    clientId: string;
    /**
     * The principal ID of the assigned identity.
     */
    principalId: string;
}
