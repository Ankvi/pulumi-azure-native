import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The action to take on DNS requests that match the DNS security rule.
 */
export interface DnsSecurityRuleActionArgs {
    /**
     * The type of action to take.
     */
    actionType?: pulumi.Input<string | enums.ActionType>;
    /**
     * The response code for block actions.
     */
    blockResponseCode?: pulumi.Input<string | enums.BlockResponseCode>;
}

/**
 * IP configuration.
 */
export interface IpConfigurationArgs {
    /**
     * Private IP address of the IP configuration.
     */
    privateIpAddress?: pulumi.Input<string>;
    /**
     * Private IP address allocation method.
     */
    privateIpAllocationMethod?: pulumi.Input<string | enums.IpAllocationMethod>;
    /**
     * The reference to the subnet bound to the IP configuration.
     */
    subnet: pulumi.Input<SubResourceArgs>;
}
/**
 * ipConfigurationArgsProvideDefaults sets the appropriate defaults for IpConfigurationArgs
 */
export function ipConfigurationArgsProvideDefaults(val: IpConfigurationArgs): IpConfigurationArgs {
    return {
        ...val,
        privateIpAllocationMethod: (val.privateIpAllocationMethod) ?? "Dynamic",
    };
}

/**
 * Reference to another ARM resource.
 */
export interface SubResourceArgs {
    /**
     * Sub-resource ID. Both absolute resource ID and a relative resource ID are accepted.
     * An absolute ID starts with /subscriptions/ and contains the entire ID of the parent resource and the ID of the sub-resource in the end.
     * A relative ID replaces the ID of the parent resource with a token '$self', followed by the sub-resource ID itself.
     * Example of a relative ID: $self/frontEndConfigurations/my-frontend.
     */
    id: pulumi.Input<string>;
}

/**
 * Describes a server to forward the DNS queries to.
 */
export interface TargetDnsServerArgs {
    /**
     * DNS server IP address.
     */
    ipAddress: pulumi.Input<string>;
    /**
     * DNS server port.
     */
    port?: pulumi.Input<number>;
}
/**
 * targetDnsServerArgsProvideDefaults sets the appropriate defaults for TargetDnsServerArgs
 */
export function targetDnsServerArgsProvideDefaults(val: TargetDnsServerArgs): TargetDnsServerArgs {
    return {
        ...val,
        port: (val.port) ?? 53,
    };
}
