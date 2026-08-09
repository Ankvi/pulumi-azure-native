import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The gateway details.
 */
export interface GatewayDetailsArgs {
    /**
     * Gateway resource to be associated with the server.
     */
    gatewayResourceId?: pulumi.Input<string | undefined>;
}

/**
 * The detail of firewall rule.
 */
export interface IPv4FirewallRuleArgs {
    /**
     * The rule name.
     */
    firewallRuleName?: pulumi.Input<string | undefined>;
    /**
     * The end range of IPv4.
     */
    rangeEnd?: pulumi.Input<string | undefined>;
    /**
     * The start range of IPv4.
     */
    rangeStart?: pulumi.Input<string | undefined>;
}

/**
 * An array of firewall rules.
 */
export interface IPv4FirewallSettingsArgs {
    /**
     * The indicator of enabling PBI service.
     */
    enablePowerBIService?: pulumi.Input<boolean | undefined>;
    /**
     * An array of firewall rules.
     */
    firewallRules?: pulumi.Input<pulumi.Input<IPv4FirewallRuleArgs>[] | undefined>;
}

/**
 * Represents the SKU name and Azure pricing tier for Analysis Services resource.
 */
export interface ResourceSkuArgs {
    /**
     * The number of instances in the read only query pool.
     */
    capacity?: pulumi.Input<number | undefined>;
    /**
     * Name of the SKU level.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the Azure pricing tier to which the SKU applies.
     */
    tier?: pulumi.Input<string | enums.SkuTier | undefined>;
}
/**
 * resourceSkuArgsProvideDefaults sets the appropriate defaults for ResourceSkuArgs
 */
export function resourceSkuArgsProvideDefaults(val: ResourceSkuArgs): ResourceSkuArgs {
    return {
        ...val,
        capacity: (val.capacity) ?? 1,
    };
}

/**
 * An array of administrator user identities.
 */
export interface ServerAdministratorsArgs {
    /**
     * An array of administrator user identities.
     */
    members?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}
