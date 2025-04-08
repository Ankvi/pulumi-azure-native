import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Specifies a CORS rule for the Map Account.
 */
export interface CorsRuleResponse {
    /**
     * Required if CorsRule element is present. A list of origin domains that will be allowed via CORS, or "*" to allow all domains
     */
    allowedOrigins: string[];
}

/**
 * Sets the CORS rules. You can include up to five CorsRule elements in the request. 
 */
export interface CorsRulesResponse {
    /**
     * The list of CORS rules. You can include up to five CorsRule elements in the request. 
     */
    corsRules?: CorsRuleResponse[];
}

/**
 * Creator resource properties
 */
export interface CreatorPropertiesResponse {
    /**
     * The consumed storage unit size in bytes for the creator resource.
     */
    consumedStorageUnitSizeInBytes?: number;
    /**
     * The state of the resource provisioning, terminal states: Succeeded, Failed, Canceled
     */
    provisioningState: string;
    /**
     * The storage units to be allocated. Integer values from 1 to 100, inclusive.
     */
    storageUnits: number;
    /**
     * The total allocated storage unit size in bytes for the creator resource.
     */
    totalStorageUnitSizeInBytes?: number;
}

/**
 * All encryption configuration for a resource.
 */
export interface EncryptionResponse {
    /**
     * All Customer-managed key encryption properties for the resource.
     */
    customerManagedKeyEncryption?: EncryptionResponseCustomerManagedKeyEncryption;
    /**
     * (Optional) Discouraged to include in resource definition. Only needed where it is possible to disable platform (AKA infrastructure) encryption. Azure SQL TDE is an example of this. Values are enabled and disabled.
     */
    infrastructureEncryption?: string;
}

/**
 * All Customer-managed key encryption properties for the resource.
 */
export interface EncryptionResponseCustomerManagedKeyEncryption {
    /**
     * All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault.
     */
    keyEncryptionKeyIdentity?: EncryptionResponseKeyEncryptionKeyIdentity;
    /**
     * key encryption key Url, versioned or unversioned. Ex: https://contosovault.vault.azure.net/keys/contosokek/562a4bb76b524a1493a6afe8e536ee78 or https://contosovault.vault.azure.net/keys/contosokek.
     */
    keyEncryptionKeyUrl?: string;
}

/**
 * All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault.
 */
export interface EncryptionResponseKeyEncryptionKeyIdentity {
    /**
     * delegated identity to use for accessing key encryption key Url. Ex: /subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/<resource group>/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId. Mutually exclusive with identityType systemAssignedIdentity and userAssignedIdentity - internal use only.
     */
    delegatedIdentityClientId?: string;
    /**
     * application client identity to use for accessing key encryption key Url in a different tenant. Ex: f83c6b1b-4d34-47e4-bb34-9d83df58b540
     */
    federatedClientId?: string;
    /**
     * The type of identity to use. Values can be systemAssignedIdentity, userAssignedIdentity, or delegatedResourceIdentity.
     */
    identityType?: string;
    /**
     * User assigned identity to use for accessing key encryption key Url. Ex: /subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/<resource group>/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId. Mutually exclusive with identityType systemAssignedIdentity.
     */
    userAssignedIdentityResourceId?: string;
}

/**
 * Linked resource is reference to a resource deployed in an Azure subscription, add the linked resource `uniqueName` value as an optional parameter for operations on Azure Maps Geospatial REST APIs.
 */
export interface LinkedResourceResponse {
    /**
     * ARM resource id in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/accounts/{storageName}'.
     */
    id: string;
    /**
     * A provided name which uniquely identifies the linked resource.
     */
    uniqueName: string;
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
 * Additional Maps account properties
 */
export interface MapsAccountPropertiesResponse {
    /**
     * Specifies CORS rules for the Blob service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the Blob service.
     */
    cors?: CorsRulesResponse;
    /**
     * Allows toggle functionality on Azure Policy to disable Azure Maps local authentication support. This will disable Shared Keys and Shared Access Signature Token authentication from any usage.
     */
    disableLocalAuth?: boolean;
    /**
     * All encryption configuration for a resource.
     */
    encryption?: EncryptionResponse;
    /**
     * The array of associated resources to the Maps account. Linked resource in the array cannot individually update, you must update all linked resources in the array together. These resources may be used on operations on the Azure Maps REST API. Access is controlled by the Maps Account Managed Identity(s) permissions to those resource(s).
     */
    linkedResources?: LinkedResourceResponse[];
    /**
     * List of additional data processing regions for the Maps Account, which may result in requests being processed in another geography. Some features or results may be restricted to specific regions. By default, Maps REST APIs process requests according to the account location or the [geographic scope](https://learn.microsoft.com/azure/azure-maps/geographic-scope).
     */
    locations?: MapsAccountPropertiesResponseLocations[];
    /**
     * The provisioning state of the Maps account resource, Account updates can only be performed on terminal states. Terminal states: `Succeeded` and `Failed`
     */
    provisioningState: string;
    /**
     * A unique identifier for the Maps Account
     */
    uniqueId: string;
}
/**
 * mapsAccountPropertiesResponseProvideDefaults sets the appropriate defaults for MapsAccountPropertiesResponse
 */
export function mapsAccountPropertiesResponseProvideDefaults(val: MapsAccountPropertiesResponse): MapsAccountPropertiesResponse {
    return {
        ...val,
        disableLocalAuth: (val.disableLocalAuth) ?? false,
    };
}

/**
 * Data processing location.
 */
export interface MapsAccountPropertiesResponseLocations {
    /**
     * The location name.
     */
    locationName: string;
}

/**
 * Private Atlas resource properties
 */
export interface PrivateAtlasPropertiesResponse {
    /**
     * The state of the resource provisioning, terminal states: Succeeded, Failed, Canceled
     */
    provisioningState?: string;
}

/**
 * The private endpoint resource.
 */
export interface PrivateEndpointResponse {
    /**
     * The ARM identifier for private endpoint.
     */
    id: string;
}

/**
 * A collection of information about the state of the connection between service consumer and provider.
 */
export interface PrivateLinkServiceConnectionStateResponse {
    /**
     * A message indicating if changes on the service provider require any updates on the consumer.
     */
    actionsRequired?: string;
    /**
     * The reason for approval/rejection of the connection.
     */
    description?: string;
    /**
     * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
     */
    status?: string;
}

/**
 * The SKU of the Maps Account.
 */
export interface SkuResponse {
    /**
     * The name of the SKU, in standard format (such as G2).
     */
    name: string;
    /**
     * Gets the sku tier. This is based on the SKU name.
     */
    tier: string;
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
