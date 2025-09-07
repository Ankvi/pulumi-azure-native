import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Indicates that either the API key or an access token from a Microsoft Entra ID tenant can be used for authentication.
 */
export interface DataPlaneAadOrApiKeyAuthOptionArgs {
    /**
     * Describes what response the data plane API of a search service would send for requests that failed authentication.
     */
    aadAuthFailureMode?: pulumi.Input<enums.AadAuthFailureMode>;
}

/**
 * Defines the options for how the search service authenticates a data plane request. This cannot be set if 'disableLocalAuth' is set to true.
 */
export interface DataPlaneAuthOptionsArgs {
    /**
     * Indicates that either the API key or an access token from a Microsoft Entra ID tenant can be used for authentication.
     */
    aadOrApiKey?: pulumi.Input<DataPlaneAadOrApiKeyAuthOptionArgs>;
    /**
     * Indicates that only the API key can be used for authentication.
     */
    apiKeyOnly?: any;
}

/**
 * Describes a policy that determines how resources within the search service are to be encrypted with customer managed keys.
 */
export interface EncryptionWithCmkArgs {
    /**
     * Describes how a search service should enforce compliance if it finds objects that aren't encrypted with the customer-managed key.
     */
    enforcement?: pulumi.Input<enums.SearchEncryptionWithCmk>;
}

/**
 * Details about the search service identity. A null value indicates that the search service has no identity assigned.
 */
export interface IdentityArgs {
    /**
     * The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an identity created by the system and a set of user assigned identities. The type 'None' will remove all identities from the service.
     */
    type: pulumi.Input<string | enums.IdentityType>;
    /**
     * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource IDs in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The IP restriction rule of the Azure AI Search service.
 */
export interface IpRuleArgs {
    /**
     * Value corresponding to a single IPv4 address (eg., 123.1.2.3) or an IP range in CIDR format (eg., 123.1.2.3/24) to be allowed.
     */
    value?: pulumi.Input<string>;
}

/**
 * Network specific rules that determine how the Azure AI Search service may be reached.
 */
export interface NetworkRuleSetArgs {
    /**
     * Possible origins of inbound traffic that can bypass the rules defined in the 'ipRules' section.
     */
    bypass?: pulumi.Input<string | enums.SearchBypass>;
    /**
     * A list of IP restriction rules that defines the inbound network(s) with allowing access to the search service endpoint. At the meantime, all other public IP networks are blocked by the firewall. These restriction rules are applied only when the 'publicNetworkAccess' of the search service is 'enabled'; otherwise, traffic over public interface is not allowed even with any public IP rules, and private endpoint connections would be the exclusive access method.
     */
    ipRules?: pulumi.Input<pulumi.Input<IpRuleArgs>[]>;
}

/**
 * Describes the properties of an existing private endpoint connection to the search service.
 */
export interface PrivateEndpointConnectionPropertiesArgs {
    /**
     * The group ID of the Azure resource for which the private link service is for.
     */
    groupId?: pulumi.Input<string>;
    /**
     * The private endpoint resource from Microsoft.Network provider.
     */
    privateEndpoint?: pulumi.Input<PrivateEndpointConnectionPropertiesPrivateEndpointArgs>;
    /**
     * Describes the current state of an existing Azure Private Link service connection to the private endpoint.
     */
    privateLinkServiceConnectionState?: pulumi.Input<PrivateEndpointConnectionPropertiesPrivateLinkServiceConnectionStateArgs>;
    /**
     * The provisioning state of the private link service connection. Valid values are Updating, Deleting, Failed, Succeeded, Incomplete, or Canceled.
     */
    provisioningState?: pulumi.Input<string | enums.PrivateLinkServiceConnectionProvisioningState>;
}
/**
 * privateEndpointConnectionPropertiesArgsProvideDefaults sets the appropriate defaults for PrivateEndpointConnectionPropertiesArgs
 */
export function privateEndpointConnectionPropertiesArgsProvideDefaults(val: PrivateEndpointConnectionPropertiesArgs): PrivateEndpointConnectionPropertiesArgs {
    return {
        ...val,
        privateLinkServiceConnectionState: (val.privateLinkServiceConnectionState ? pulumi.output(val.privateLinkServiceConnectionState).apply(privateEndpointConnectionPropertiesPrivateLinkServiceConnectionStateArgsProvideDefaults) : undefined),
    };
}

/**
 * The private endpoint resource from Microsoft.Network provider.
 */
export interface PrivateEndpointConnectionPropertiesPrivateEndpointArgs {
    /**
     * The resource ID of the private endpoint resource from Microsoft.Network provider.
     */
    id?: pulumi.Input<string>;
}

/**
 * Describes the current state of an existing Azure Private Link service connection to the private endpoint.
 */
export interface PrivateEndpointConnectionPropertiesPrivateLinkServiceConnectionStateArgs {
    /**
     * A description of any extra actions that may be required.
     */
    actionsRequired?: pulumi.Input<string>;
    /**
     * The description for the private link service connection state.
     */
    description?: pulumi.Input<string>;
    /**
     * Status of the the private link service connection. Valid values are Pending, Approved, Rejected, or Disconnected.
     */
    status?: pulumi.Input<enums.PrivateLinkServiceConnectionStatus>;
}
/**
 * privateEndpointConnectionPropertiesPrivateLinkServiceConnectionStateArgsProvideDefaults sets the appropriate defaults for PrivateEndpointConnectionPropertiesPrivateLinkServiceConnectionStateArgs
 */
export function privateEndpointConnectionPropertiesPrivateLinkServiceConnectionStateArgsProvideDefaults(val: PrivateEndpointConnectionPropertiesPrivateLinkServiceConnectionStateArgs): PrivateEndpointConnectionPropertiesPrivateLinkServiceConnectionStateArgs {
    return {
        ...val,
        actionsRequired: (val.actionsRequired) ?? "None",
    };
}

/**
 * Describes the properties of an existing shared private link resource managed by the Azure AI Search service.
 */
export interface SharedPrivateLinkResourcePropertiesArgs {
    /**
     * The group ID from the provider of resource the shared private link resource is for.
     */
    groupId?: pulumi.Input<string>;
    /**
     * The resource ID of the resource the shared private link resource is for.
     */
    privateLinkResourceId?: pulumi.Input<string>;
    /**
     * The provisioning state of the shared private link resource. Valid values are Updating, Deleting, Failed, Succeeded or Incomplete.
     */
    provisioningState?: pulumi.Input<string | enums.SharedPrivateLinkResourceProvisioningState>;
    /**
     * The message for requesting approval of the shared private link resource.
     */
    requestMessage?: pulumi.Input<string>;
    /**
     * Optional. Can be used to specify the Azure Resource Manager location of the resource for which a shared private link is being created. This is only required for those resources whose DNS configuration are regional (such as Azure Kubernetes Service).
     */
    resourceRegion?: pulumi.Input<string>;
    /**
     * Status of the shared private link resource. Valid values are Pending, Approved, Rejected or Disconnected.
     */
    status?: pulumi.Input<string | enums.SharedPrivateLinkResourceStatus>;
}

/**
 * Defines the SKU of a search service, which determines billing rate and capacity limits.
 */
export interface SkuArgs {
    /**
     * The SKU of the search service. Valid values include: 'free': Shared service. 'basic': Dedicated service with up to 3 replicas. 'standard': Dedicated service with up to 12 partitions and 12 replicas. 'standard2': Similar to standard, but with more capacity per search unit. 'standard3': The largest Standard offering with up to 12 partitions and 12 replicas (or up to 3 partitions with more indexes if you also set the hostingMode property to 'highDensity'). 'storage_optimized_l1': Supports 1TB per partition, up to 12 partitions. 'storage_optimized_l2': Supports 2TB per partition, up to 12 partitions.'
     */
    name?: pulumi.Input<string | enums.SkuName>;
}
