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
     * Describes a policy that determines how resources within the search service are to be encrypted with customer=managed keys.
     */
    export interface EncryptionWithCmkArgs {
        /**
         * Describes how a search service should enforce having one or more non-customer-encrypted resources.
         */
        enforcement?: pulumi.Input<enums.SearchEncryptionWithCmk>;
    }

    /**
     * Identity for the resource.
     */
    export interface IdentityArgs {
        /**
         * The identity type.
         */
        type: pulumi.Input<enums.IdentityType>;
    }

    /**
     * The IP restriction rule of the search service.
     */
    export interface IpRuleArgs {
        /**
         * Value corresponding to a single IPv4 address (for example, 123.1.2.3) or an IP range in CIDR format (for example, 123.1.2.3/24) to be allowed.
         */
        value?: pulumi.Input<string>;
    }

    /**
     * Network-specific rules that determine how the search service can be reached.
     */
    export interface NetworkRuleSetArgs {
        /**
         * A list of IP restriction rules used for an IP firewall. Any IPs that do not match the rules are blocked by the firewall. These rules are only applied when the 'publicNetworkAccess' of the search service is 'enabled'.
         */
        ipRules?: pulumi.Input<pulumi.Input<IpRuleArgs>[]>;
    }

    /**
     * Describes the properties of an existing Private Endpoint connection to the search service.
     */
    export interface PrivateEndpointConnectionPropertiesArgs {
        /**
         * The group id from the provider of resource the private link service connection is for.
         */
        groupId?: pulumi.Input<string>;
        /**
         * The private endpoint resource from Microsoft.Network provider.
         */
        privateEndpoint?: pulumi.Input<PrivateEndpointConnectionPropertiesPrivateEndpointArgs>;
        /**
         * Describes the current state of an existing Private Link Service connection to the Azure Private Endpoint.
         */
        privateLinkServiceConnectionState?: pulumi.Input<PrivateEndpointConnectionPropertiesPrivateLinkServiceConnectionStateArgs>;
        /**
         * The provisioning state of the private link service connection. Valid values are Updating, Deleting, Failed, Succeeded, or Incomplete
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
         * The resource id of the private endpoint resource from Microsoft.Network provider.
         */
        id?: pulumi.Input<string>;
    }

    /**
     * Describes the current state of an existing Private Link Service connection to the Azure Private Endpoint.
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
     * Describes the properties of an existing Shared Private Link Resource managed by the search service.
     */
    export interface SharedPrivateLinkResourcePropertiesArgs {
        /**
         * The group id from the provider of resource the shared private link resource is for.
         */
        groupId?: pulumi.Input<string>;
        /**
         * The resource id of the resource the shared private link resource is for.
         */
        privateLinkResourceId?: pulumi.Input<string>;
        /**
         * The provisioning state of the shared private link resource. Valid values are Updating, Deleting, Failed, Succeeded or Incomplete.
         */
        provisioningState?: pulumi.Input<enums.SharedPrivateLinkResourceProvisioningState>;
        /**
         * The request message for requesting approval of the shared private link resource.
         */
        requestMessage?: pulumi.Input<string>;
        /**
         * Optional. Can be used to specify the Azure Resource Manager location of the resource to which a shared private link is to be created. This is only required for those resources whose DNS configuration are regional (such as Azure Kubernetes Service).
         */
        resourceRegion?: pulumi.Input<string>;
        /**
         * Status of the shared private link resource. Valid values are Pending, Approved, Rejected or Disconnected.
         */
        status?: pulumi.Input<enums.SharedPrivateLinkResourceStatus>;
    }

    /**
     * Defines the SKU of a search service, which determines billing rate and capacity limits.
     */
    export interface SkuArgs {
        /**
         * The SKU of the search service. Valid values include: 'free': Shared service. 'basic': Dedicated service with up to 3 replicas. 'standard': Dedicated service with up to 12 partitions and 12 replicas. 'standard2': Similar to standard, but with more capacity per search unit. 'standard3': The largest Standard offering with up to 12 partitions and 12 replicas (or up to 3 partitions with more indexes if you also set the hostingMode property to 'highDensity'). 'storage_optimized_l1': Supports 1TB per partition, up to 12 partitions. 'storage_optimized_l2': Supports 2TB per partition, up to 12 partitions.'
         */
        name?: pulumi.Input<enums.SkuName>;
    }
