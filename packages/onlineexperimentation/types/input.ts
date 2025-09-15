import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Customer-managed key encryption properties for the resource.
 */
export interface CustomerManagedKeyEncryptionArgs {
    /**
     * All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault.
     */
    keyEncryptionKeyIdentity?: pulumi.Input<KeyEncryptionKeyIdentityArgs>;
    /**
     * key encryption key Url, versioned or non-versioned. Ex: https://contosovault.vault.azure.net/keys/contosokek/562a4bb76b524a1493a6afe8e536ee78 or https://contosovault.vault.azure.net/keys/contosokek.
     */
    keyEncryptionKeyUrl?: pulumi.Input<string>;
}

/**
 * All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault.
 */
export interface KeyEncryptionKeyIdentityArgs {
    /**
     * application client identity to use for accessing key encryption key Url in a different tenant. Ex: f83c6b1b-4d34-47e4-bb34-9d83df58b540
     */
    federatedClientId?: pulumi.Input<string>;
    /**
     * The type of identity to use. Values can be systemAssignedIdentity, userAssignedIdentity, or delegatedResourceIdentity.
     */
    identityType?: pulumi.Input<string | enums.KeyEncryptionKeyIdentityType>;
    /**
     * User assigned identity to use for accessing key encryption key Url. Ex: /subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/<resource group>/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId. Mutually exclusive with identityType systemAssignedIdentity.
     */
    userAssignedIdentityResourceId?: pulumi.Input<string>;
}

/**
 * Managed service identity (system assigned and/or user assigned identities)
 */
export interface ManagedServiceIdentityArgs {
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: pulumi.Input<string | enums.ManagedServiceIdentityType>;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The properties of an online experimentation workspace.
 */
export interface OnlineExperimentationWorkspacePropertiesArgs {
    /**
     * The resource identifier of App Configuration with which this online experimentation workspace is tied for experimentation. This is a required field for creating an online experimentation workspace.
     */
    appConfigurationResourceId: pulumi.Input<string>;
    /**
     * The encryption configuration for the online experimentation workspace resource.
     */
    encryption?: pulumi.Input<ResourceEncryptionConfigurationArgs>;
    /**
     * The resource identifier of the Log Analytics workspace which online experimentation workspace uses for generating experiment analysis results.
     */
    logAnalyticsWorkspaceResourceId: pulumi.Input<string>;
    /**
     * The resource identifier of storage account where logs are exported from Log Analytics workspace. online experimentation workspace uses it generating experiment analysis results.
     */
    logsExporterStorageAccountResourceId: pulumi.Input<string>;
}

/**
 * The SKU (Stock Keeping Unit) assigned to this resource.
 */
export interface OnlineExperimentationWorkspaceSkuArgs {
    /**
     * The name of the SKU. Ex - F0, P0. It is typically a letter+number code
     */
    name: pulumi.Input<string | enums.OnlineExperimentationWorkspaceSkuName>;
}

/**
 * Properties of the private endpoint connection.
 */
export interface PrivateEndpointConnectionPropertiesArgs {
    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    privateLinkServiceConnectionState: pulumi.Input<PrivateLinkServiceConnectionStateArgs>;
}

/**
 * A collection of information about the state of the connection between service consumer and provider.
 */
export interface PrivateLinkServiceConnectionStateArgs {
    /**
     * A message indicating if changes on the service provider require any updates on the consumer.
     */
    actionsRequired?: pulumi.Input<string>;
    /**
     * The reason for approval/rejection of the connection.
     */
    description?: pulumi.Input<string>;
    /**
     * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
     */
    status?: pulumi.Input<string | enums.PrivateEndpointServiceConnectionStatus>;
}

/**
 * The encryption configuration for the online experimentation workspace resource.
 */
export interface ResourceEncryptionConfigurationArgs {
    /**
     * All Customer-managed key encryption properties for the resource.
     */
    customerManagedKeyEncryption?: pulumi.Input<CustomerManagedKeyEncryptionArgs>;
}
