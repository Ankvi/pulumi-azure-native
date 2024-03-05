import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The properties of a data store.
 */
export interface DatastoreResponse {
    /**
     * The Azure ResourceId of an Azure Data Explorer cluster.
     */
    adxClusterResourceId?: string;
    /**
     * The Kusto cluster display name.
     */
    kustoClusterDisplayName?: string;
    /**
     * The Kusto cluster URI.
     */
    kustoClusterUri: string;
    /**
     * The Kusto data ingestion URI.
     */
    kustoDataIngestionUri: string;
    /**
     * The name of a Kusto database.
     */
    kustoDatabaseName: string;
    /**
     * The Kusto management URL.
     */
    kustoManagementUrl: string;
    /**
     * The type of a Kusto offering.
     */
    kustoOfferingType: string;
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

/**
 * The vault specific details required if using SQL authentication to connect to a target.
 */
export interface VaultSecretResponse {
    /**
     * The Azure ResourceId of the Key Vault instance storing database authentication secrets.
     */
    akvResourceId?: string;
    /**
     * The path to the Key Vault secret storing the password for authentication to a target.
     */
    akvTargetPassword?: string;
    /**
     * The path to the Key Vault secret storing the login name (aka user name, aka account name) for authentication to a target.
     */
    akvTargetUser?: string;
}
