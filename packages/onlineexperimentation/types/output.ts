import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Customer-managed key encryption properties for the resource.
 */
export interface CustomerManagedKeyEncryptionResponse {
    /**
     * All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault.
     */
    keyEncryptionKeyIdentity?: KeyEncryptionKeyIdentityResponse;
    /**
     * key encryption key Url, versioned or non-versioned. Ex: https://contosovault.vault.azure.net/keys/contosokek/562a4bb76b524a1493a6afe8e536ee78 or https://contosovault.vault.azure.net/keys/contosokek.
     */
    keyEncryptionKeyUrl?: string;
}

/**
 * All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault.
 */
export interface KeyEncryptionKeyIdentityResponse {
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
 * The properties of an online experimentation workspace.
 */
export interface OnlineExperimentationWorkspacePropertiesResponse {
    /**
     * The resource identifier of App Configuration with which this online experimentation workspace is tied for experimentation. This is a required field for creating an online experimentation workspace.
     */
    appConfigurationResourceId: string;
    /**
     * The encryption configuration for the online experimentation workspace resource.
     */
    encryption?: ResourceEncryptionConfigurationResponse;
    /**
     * The data plane endpoint for the online experimentation workspace resource.
     */
    endpoint: string;
    /**
     * The resource identifier of the Log Analytics workspace which online experimentation workspace uses for generating experiment analysis results.
     */
    logAnalyticsWorkspaceResourceId: string;
    /**
     * The resource identifier of storage account where logs are exported from Log Analytics workspace. online experimentation workspace uses it generating experiment analysis results.
     */
    logsExporterStorageAccountResourceId: string;
    /**
     * The provisioning state for the resource
     */
    provisioningState: string;
    /**
     * The Id of the workspace.
     */
    workspaceId: string;
}

/**
 * The SKU (Stock Keeping Unit) assigned to this resource.
 */
export interface OnlineExperimentationWorkspaceSkuResponse {
    /**
     * The name of the SKU. Ex - F0, P0. It is typically a letter+number code
     */
    name: string;
    /**
     * The name of the SKU tier
     */
    tier: string;
}

/**
 * The encryption configuration for the online experimentation workspace resource.
 */
export interface ResourceEncryptionConfigurationResponse {
    /**
     * All Customer-managed key encryption properties for the resource.
     */
    customerManagedKeyEncryption?: CustomerManagedKeyEncryptionResponse;
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
