import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Specifies a CORS rule for the Map Account.
 */
export interface CorsRuleArgs {
    /**
     * Required if CorsRule element is present. A list of origin domains that will be allowed via CORS, or "*" to allow all domains
     */
    allowedOrigins: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Sets the CORS rules. You can include up to five CorsRule elements in the request. 
 */
export interface CorsRulesArgs {
    /**
     * The list of CORS rules. You can include up to five CorsRule elements in the request. 
     */
    corsRules?: pulumi.Input<pulumi.Input<CorsRuleArgs>[]>;
}

/**
 * Creator resource properties
 */
export interface CreatorPropertiesArgs {
    /**
     * The consumed storage unit size in bytes for the creator resource.
     */
    consumedStorageUnitSizeInBytes?: pulumi.Input<number>;
    /**
     * The storage units to be allocated. Integer values from 1 to 100, inclusive.
     */
    storageUnits: pulumi.Input<number>;
    /**
     * The total allocated storage unit size in bytes for the creator resource.
     */
    totalStorageUnitSizeInBytes?: pulumi.Input<number>;
}

/**
 * All encryption configuration for a resource.
 */
export interface EncryptionArgs {
    /**
     * All Customer-managed key encryption properties for the resource.
     */
    customerManagedKeyEncryption?: pulumi.Input<EncryptionCustomerManagedKeyEncryptionArgs>;
    /**
     * (Optional) Discouraged to include in resource definition. Only needed where it is possible to disable platform (AKA infrastructure) encryption. Azure SQL TDE is an example of this. Values are enabled and disabled.
     */
    infrastructureEncryption?: pulumi.Input<string | enums.InfrastructureEncryption>;
}

/**
 * All Customer-managed key encryption properties for the resource.
 */
export interface EncryptionCustomerManagedKeyEncryptionArgs {
    /**
     * All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault.
     */
    keyEncryptionKeyIdentity?: pulumi.Input<EncryptionKeyEncryptionKeyIdentityArgs>;
    /**
     * key encryption key Url, versioned or unversioned. Ex: https://contosovault.vault.azure.net/keys/contosokek/562a4bb76b524a1493a6afe8e536ee78 or https://contosovault.vault.azure.net/keys/contosokek.
     */
    keyEncryptionKeyUrl?: pulumi.Input<string>;
}

/**
 * All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault.
 */
export interface EncryptionKeyEncryptionKeyIdentityArgs {
    /**
     * delegated identity to use for accessing key encryption key Url. Ex: /subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/<resource group>/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId. Mutually exclusive with identityType systemAssignedIdentity and userAssignedIdentity - internal use only.
     */
    delegatedIdentityClientId?: pulumi.Input<string>;
    /**
     * application client identity to use for accessing key encryption key Url in a different tenant. Ex: f83c6b1b-4d34-47e4-bb34-9d83df58b540
     */
    federatedClientId?: pulumi.Input<string>;
    /**
     * The type of identity to use. Values can be systemAssignedIdentity, userAssignedIdentity, or delegatedResourceIdentity.
     */
    identityType?: pulumi.Input<string>;
    /**
     * User assigned identity to use for accessing key encryption key Url. Ex: /subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/<resource group>/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId. Mutually exclusive with identityType systemAssignedIdentity.
     */
    userAssignedIdentityResourceId?: pulumi.Input<string>;
}

/**
 * Linked resource is reference to a resource deployed in an Azure subscription, add the linked resource `uniqueName` value as an optional parameter for operations on Azure Maps Geospatial REST APIs.
 */
export interface LinkedResourceArgs {
    /**
     * ARM resource id in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/accounts/{storageName}'.
     */
    id: pulumi.Input<string>;
    /**
     * A provided name which uniquely identifies the linked resource.
     */
    uniqueName: pulumi.Input<string>;
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
 * Additional Maps account properties
 */
export interface MapsAccountPropertiesArgs {
    /**
     * Specifies CORS rules for the Blob service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the Blob service.
     */
    cors?: pulumi.Input<CorsRulesArgs>;
    /**
     * Allows toggle functionality on Azure Policy to disable Azure Maps local authentication support. This will disable Shared Keys and Shared Access Signature Token authentication from any usage.
     */
    disableLocalAuth?: pulumi.Input<boolean>;
    /**
     * All encryption configuration for a resource.
     */
    encryption?: pulumi.Input<EncryptionArgs>;
    /**
     * The array of associated resources to the Maps account. Linked resource in the array cannot individually update, you must update all linked resources in the array together. These resources may be used on operations on the Azure Maps REST API. Access is controlled by the Maps Account Managed Identity(s) permissions to those resource(s).
     */
    linkedResources?: pulumi.Input<pulumi.Input<LinkedResourceArgs>[]>;
    /**
     * List of additional data processing regions for the Maps Account, which may result in requests being processed in another geography. Some features or results may be restricted to specific regions. By default, Maps REST APIs process requests according to the account location or the [geographic scope](https://learn.microsoft.com/azure/azure-maps/geographic-scope).
     */
    locations?: pulumi.Input<pulumi.Input<MapsAccountPropertiesLocationsArgs>[]>;
}
/**
 * mapsAccountPropertiesArgsProvideDefaults sets the appropriate defaults for MapsAccountPropertiesArgs
 */
export function mapsAccountPropertiesArgsProvideDefaults(val: MapsAccountPropertiesArgs): MapsAccountPropertiesArgs {
    return {
        ...val,
        disableLocalAuth: (val.disableLocalAuth) ?? false,
    };
}

/**
 * Data processing location.
 */
export interface MapsAccountPropertiesLocationsArgs {
    /**
     * The location name.
     */
    locationName: pulumi.Input<string>;
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
 * The SKU of the Maps Account.
 */
export interface SkuArgs {
    /**
     * The name of the SKU, in standard format (such as G2).
     */
    name: pulumi.Input<string | enums.Name>;
}
