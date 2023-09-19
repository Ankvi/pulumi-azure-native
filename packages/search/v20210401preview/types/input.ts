import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Indicates that either the API key or an access token from Azure Active Directory can be used for authentication.
     */
    export interface DataPlaneAadOrApiKeyAuthOptionArgs {
        /**
         * Describes what response the data plane API of a Search service would send for requests that failed authentication.
         */
        aadAuthFailureMode?: pulumi.Input<enums.AadAuthFailureMode>;
    }

    /**
     * Defines the options for how the data plane API of a Search service authenticates requests. This cannot be set if 'disableLocalAuth' is set to true.
     */
    export interface DataPlaneAuthOptionsArgs {
        /**
         * Indicates that either the API key or an access token from Azure Active Directory can be used for authentication.
         */
        aadOrApiKey?: pulumi.Input<DataPlaneAadOrApiKeyAuthOptionArgs>;
        /**
         * Indicates that only the API key needs to be used for authentication.
         */
        apiKeyOnly?: any;
    }

    /**
     * Describes a policy that determines how resources within the search service are to be encrypted with Customer Managed Keys.
     */
    export interface EncryptionWithCmkArgs {
        /**
         * Describes how a search service should enforce having one or more non customer encrypted resources.
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
         * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The IP restriction rule of the Azure Cognitive Search service.
     */
    export interface IpRuleArgs {
        /**
         * Value corresponding to a single IPv4 address (eg., 123.1.2.3) or an IP range in CIDR format (eg., 123.1.2.3/24) to be allowed.
         */
        value?: pulumi.Input<string>;
    }

    /**
     * Network specific rules that determine how the Azure Cognitive Search service may be reached.
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
     * Defines the SKU of an Azure Cognitive Search Service, which determines price tier and capacity limits.
     */
    export interface SkuArgs {
        /**
         * The SKU of the search service. Valid values include: 'free': Shared service. 'basic': Dedicated service with up to 3 replicas. 'standard': Dedicated service with up to 12 partitions and 12 replicas. 'standard2': Similar to standard, but with more capacity per search unit. 'standard3': The largest Standard offering with up to 12 partitions and 12 replicas (or up to 3 partitions with more indexes if you also set the hostingMode property to 'highDensity'). 'storage_optimized_l1': Supports 1TB per partition, up to 12 partitions. 'storage_optimized_l2': Supports 2TB per partition, up to 12 partitions.'
         */
        name?: pulumi.Input<string | enums.SkuName>;
    }
