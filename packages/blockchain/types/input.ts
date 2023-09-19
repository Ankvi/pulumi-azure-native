import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Payload of the blockchain member nodes Sku for a blockchain member.
 */
export interface BlockchainMemberNodesSkuArgs {
    /**
     * Gets or sets the nodes capacity.
     */
    capacity?: pulumi.Input<number>;
}

/**
 * Ip range for firewall rules
 */
export interface FirewallRuleArgs {
    /**
     * Gets or sets the end IP address of the firewall rule range.
     */
    endIpAddress?: pulumi.Input<string>;
    /**
     * Gets or sets the name of the firewall rules.
     */
    ruleName?: pulumi.Input<string>;
    /**
     * Gets or sets the start IP address of the firewall rule range.
     */
    startIpAddress?: pulumi.Input<string>;
}

/**
 * Blockchain member Sku in payload
 */
export interface SkuArgs {
    /**
     * Gets or sets Sku name
     */
    name?: pulumi.Input<string>;
    /**
     * Gets or sets Sku tier
     */
    tier?: pulumi.Input<string>;
}
