import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Represents an accepted audience trusted by the cluster.
 */
export interface AcceptedAudiencesArgs {
    /**
     * GUID or valid URL representing an accepted audience.
     */
    value?: pulumi.Input<string>;
}

/**
 * Azure SKU definition.
 */
export interface AzureSkuArgs {
    /**
     * The number of instances of the cluster.
     */
    capacity?: pulumi.Input<number>;
    /**
     * SKU name.
     */
    name: pulumi.Input<string | enums.AzureSkuName>;
    /**
     * SKU tier.
     */
    tier: pulumi.Input<string | enums.AzureSkuTier>;
}

/**
 * Configuration for external callout policies, including URI patterns, access types, and service types.
 */
export interface CalloutPolicyArgs {
    /**
     * Type of the callout service, specifying the kind of external resource or service being accessed.
     */
    calloutType?: pulumi.Input<string | enums.CalloutType>;
    /**
     * Regular expression or FQDN pattern for the callout URI.
     */
    calloutUriRegex?: pulumi.Input<string>;
    /**
     * Indicates whether outbound access is permitted for the specified URI pattern.
     */
    outboundAccess?: pulumi.Input<string | enums.OutboundAccess>;
}

/**
 * Identity for the resource.
 */
export interface IdentityArgs {
    /**
     * The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove all identities.
     */
    type: pulumi.Input<string | enums.IdentityType>;
    /**
     * The list of user identities associated with the Kusto cluster. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Properties of the key vault.
 */
export interface KeyVaultPropertiesArgs {
    /**
     * The name of the key vault key.
     */
    keyName?: pulumi.Input<string>;
    /**
     * The Uri of the key vault.
     */
    keyVaultUri?: pulumi.Input<string>;
    /**
     * The version of the key vault key.
     */
    keyVersion?: pulumi.Input<string>;
    /**
     * The user assigned identity (ARM resource id) that has access to the key.
     */
    userIdentity?: pulumi.Input<string>;
}

/**
 * The language extension object.
 */
export interface LanguageExtensionArgs {
    /**
     * The language extension custom image name.
     */
    languageExtensionCustomImageName?: pulumi.Input<string>;
    /**
     * The language extension image name.
     */
    languageExtensionImageName?: pulumi.Input<string | enums.LanguageExtensionImageName>;
    /**
     * The language extension name.
     */
    languageExtensionName?: pulumi.Input<string | enums.LanguageExtensionName>;
}

/**
 * The list of language extension objects.
 */
export interface LanguageExtensionsListArgs {
    /**
     * The list of language extensions.
     */
    value?: pulumi.Input<pulumi.Input<LanguageExtensionArgs>[]>;
}

/**
 * A class that contains the optimized auto scale definition.
 */
export interface OptimizedAutoscaleArgs {
    /**
     * A boolean value that indicate if the optimized autoscale feature is enabled or not.
     */
    isEnabled: pulumi.Input<boolean>;
    /**
     * Maximum allowed instances count.
     */
    maximum: pulumi.Input<number>;
    /**
     * Minimum allowed instances count.
     */
    minimum: pulumi.Input<number>;
    /**
     * The version of the template defined, for instance 1.
     */
    version: pulumi.Input<number>;
}

/**
 * Connection State of the Private Endpoint Connection.
 */
export interface PrivateLinkServiceConnectionStatePropertyArgs {
    /**
     * The private link service connection description.
     */
    description?: pulumi.Input<string>;
    /**
     * The private link service connection status.
     */
    status?: pulumi.Input<string>;
}

/**
 * Tables that will be included and excluded in the follower database
 */
export interface TableLevelSharingPropertiesArgs {
    /**
     * List of external tables to exclude from the follower database
     */
    externalTablesToExclude?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of external tables to include in the follower database
     */
    externalTablesToInclude?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of functions to exclude from the follower database
     */
    functionsToExclude?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of functions to include in the follower database
     */
    functionsToInclude?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of materialized views to exclude from the follower database
     */
    materializedViewsToExclude?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of materialized views to include in the follower database
     */
    materializedViewsToInclude?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of tables to exclude from the follower database
     */
    tablesToExclude?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of tables to include in the follower database
     */
    tablesToInclude?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Represents a tenant ID that is trusted by the cluster.
 */
export interface TrustedExternalTenantArgs {
    /**
     * GUID representing an external tenant.
     */
    value?: pulumi.Input<string>;
}

/**
 * A class that contains virtual network definition.
 */
export interface VirtualNetworkConfigurationArgs {
    /**
     * Data management's service public IP address resource id.
     */
    dataManagementPublicIpId: pulumi.Input<string>;
    /**
     * Engine service's public IP address resource id.
     */
    enginePublicIpId: pulumi.Input<string>;
    /**
     * When enabled, the cluster is deployed into the configured subnet, when disabled it will be removed from the subnet.
     */
    state?: pulumi.Input<string | enums.VnetState>;
    /**
     * The subnet resource id.
     */
    subnetId: pulumi.Input<string>;
}
/**
 * virtualNetworkConfigurationArgsProvideDefaults sets the appropriate defaults for VirtualNetworkConfigurationArgs
 */
export function virtualNetworkConfigurationArgsProvideDefaults(val: VirtualNetworkConfigurationArgs): VirtualNetworkConfigurationArgs {
    return {
        ...val,
        state: (val.state) ?? "Enabled",
    };
}
