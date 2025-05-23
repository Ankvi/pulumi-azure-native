import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The gateway details.
 */
export interface GatewayDetailsResponse {
    /**
     * Uri of the DMTS cluster.
     */
    dmtsClusterUri: string;
    /**
     * Gateway object id from in the DMTS cluster for the gateway resource.
     */
    gatewayObjectId: string;
    /**
     * Gateway resource to be associated with the server.
     */
    gatewayResourceId?: string;
}

/**
 * The detail of firewall rule.
 */
export interface IPv4FirewallRuleResponse {
    /**
     * The rule name.
     */
    firewallRuleName?: string;
    /**
     * The end range of IPv4.
     */
    rangeEnd?: string;
    /**
     * The start range of IPv4.
     */
    rangeStart?: string;
}

/**
 * An array of firewall rules.
 */
export interface IPv4FirewallSettingsResponse {
    /**
     * The indicator of enabling PBI service.
     */
    enablePowerBIService?: boolean;
    /**
     * An array of firewall rules.
     */
    firewallRules?: IPv4FirewallRuleResponse[];
}

/**
 * Represents the SKU name and Azure pricing tier for Analysis Services resource.
 */
export interface ResourceSkuResponse {
    /**
     * The number of instances in the read only query pool.
     */
    capacity?: number;
    /**
     * Name of the SKU level.
     */
    name: string;
    /**
     * The name of the Azure pricing tier to which the SKU applies.
     */
    tier?: string;
}
/**
 * resourceSkuResponseProvideDefaults sets the appropriate defaults for ResourceSkuResponse
 */
export function resourceSkuResponseProvideDefaults(val: ResourceSkuResponse): ResourceSkuResponse {
    return {
        ...val,
        capacity: (val.capacity) ?? 1,
    };
}

/**
 * An array of administrator user identities.
 */
export interface ServerAdministratorsResponse {
    /**
     * An array of administrator user identities.
     */
    members?: string[];
}
