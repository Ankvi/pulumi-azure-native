import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
 * The configuration used in this region as primary, and other regions as backup.
 */
export interface PrimaryRegionPropertiesResponse {
    /**
     * The allowed source IP address or CIDR ranges for media
     */
    allowedMediaSourceAddressPrefixes?: string[];
    /**
     * The allowed source IP address or CIDR ranges for signaling
     */
    allowedSignalingSourceAddressPrefixes?: string[];
    /**
     * IP address to use to contact the ESRP from this region
     */
    esrpAddresses?: string[];
    /**
     * IP address to use to contact the operator network from this region
     */
    operatorAddresses: string[];
}

/**
 * The service region configuration needed for Teams Callings.
 */
export interface ServiceRegionPropertiesResponse {
    /**
     * The name of the region in which the resources needed for Teams Calling will be deployed.
     */
    name: string;
    /**
     * The configuration used in this region as primary, and other regions as backup.
     */
    primaryRegionProperties: PrimaryRegionPropertiesResponse;
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


