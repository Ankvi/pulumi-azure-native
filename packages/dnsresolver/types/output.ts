import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The action to take on DNS requests that match the DNS security rule.
 */
export interface DnsSecurityRuleActionResponse {
    /**
     * The type of action to take.
     */
    actionType?: string;
    /**
     * The response code for block actions.
     */
    blockResponseCode?: string;
}

/**
 * IP configuration.
 */
export interface IpConfigurationResponse {
    /**
     * Private IP address of the IP configuration.
     */
    privateIpAddress?: string;
    /**
     * Private IP address allocation method.
     */
    privateIpAllocationMethod?: string;
    /**
     * The reference to the subnet bound to the IP configuration.
     */
    subnet: SubResourceResponse;
}
/**
 * ipConfigurationResponseProvideDefaults sets the appropriate defaults for IpConfigurationResponse
 */
export function ipConfigurationResponseProvideDefaults(val: IpConfigurationResponse): IpConfigurationResponse {
    return {
        ...val,
        privateIpAllocationMethod: (val.privateIpAllocationMethod) ?? "Dynamic",
    };
}

/**
 * Reference to another ARM resource.
 */
export interface SubResourceResponse {
    /**
     * Resource ID.
     */
    id: string;
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
 * Describes a server to forward the DNS queries to.
 */
export interface TargetDnsServerResponse {
    /**
     * DNS server IP address.
     */
    ipAddress: string;
    /**
     * DNS server port.
     */
    port?: number;
}
/**
 * targetDnsServerResponseProvideDefaults sets the appropriate defaults for TargetDnsServerResponse
 */
export function targetDnsServerResponseProvideDefaults(val: TargetDnsServerResponse): TargetDnsServerResponse {
    return {
        ...val,
        port: (val.port) ?? 53,
    };
}

/**
 * Reference to DNS forwarding ruleset and associated virtual network link.
 */
export interface VirtualNetworkDnsForwardingRulesetResponse {
    /**
     * DNS Forwarding Ruleset Resource ID.
     */
    id?: string;
    /**
     * The reference to the virtual network link.
     */
    virtualNetworkLink?: SubResourceResponse;
}
