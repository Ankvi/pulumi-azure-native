import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Data Product Network rule set
 */
export interface DataProductNetworkAclsArgs {
    /**
     * The list of query ips in the format of CIDR allowed to connect to query/visualization endpoint.
     */
    allowedQueryIpRangeList: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Default Action
     */
    defaultAction: pulumi.Input<string | enums.DefaultAction>;
    /**
     * IP rule with specific IP or IP range in CIDR format.
     */
    ipRules: pulumi.Input<pulumi.Input<IPRulesArgs>[]>;
    /**
     * Virtual Network Rule
     */
    virtualNetworkRule: pulumi.Input<pulumi.Input<VirtualNetworkRuleArgs>[]>;
}

/**
 * Encryption key details.
 */
export interface EncryptionKeyDetailsArgs {
    /**
     * The name of the key vault key.
     */
    keyName: pulumi.Input<string>;
    /**
     * The Uri of the key vault.
     */
    keyVaultUri: pulumi.Input<string>;
    /**
     * The version of the key vault key.
     */
    keyVersion: pulumi.Input<string>;
}

/**
 * IP rule with specific IP or IP range in CIDR format.
 */
export interface IPRulesArgs {
    /**
     * The action of virtual network rule.
     */
    action: pulumi.Input<string>;
    /**
     * IP Rules Value
     */
    value?: pulumi.Input<string>;
}

/**
 * ManagedResourceGroup related properties
 */
export interface ManagedResourceGroupConfigurationArgs {
    /**
     * Managed Resource Group location
     */
    location: pulumi.Input<string>;
    /**
     * Name of managed resource group
     */
    name: pulumi.Input<string>;
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
 * Virtual Network Rule
 */
export interface VirtualNetworkRuleArgs {
    /**
     * The action of virtual network rule.
     */
    action?: pulumi.Input<string>;
    /**
     * Resource ID of a subnet
     */
    id: pulumi.Input<string>;
    /**
     * Gets the state of virtual network rule.
     */
    state?: pulumi.Input<string>;
}
