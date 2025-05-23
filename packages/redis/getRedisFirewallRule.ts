import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a single firewall rule in a specified redis cache.
 *
 * Uses Azure REST API version 2016-04-01.
 */
export function getRedisFirewallRule(args: GetRedisFirewallRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetRedisFirewallRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:redis:getRedisFirewallRule", {
        "cacheName": args.cacheName,
        "resourceGroupName": args.resourceGroupName,
        "ruleName": args.ruleName,
    }, opts);
}

export interface GetRedisFirewallRuleArgs {
    /**
     * The name of the Redis cache.
     */
    cacheName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the firewall rule.
     */
    ruleName: string;
}

/**
 * A firewall rule on a redis cache has a name, and describes a contiguous range of IP addresses permitted to connect
 */
export interface GetRedisFirewallRuleResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * highest IP address included in the range
     */
    readonly endIP: string;
    /**
     * resource ID (of the firewall rule)
     */
    readonly id: string;
    /**
     * name of the firewall rule
     */
    readonly name: string;
    /**
     * lowest IP address included in the range
     */
    readonly startIP: string;
    /**
     * type (of the firewall rule resource = 'Microsoft.Cache/redis/firewallRule')
     */
    readonly type: string;
}
/**
 * Gets a single firewall rule in a specified redis cache.
 *
 * Uses Azure REST API version 2016-04-01.
 */
export function getRedisFirewallRuleOutput(args: GetRedisFirewallRuleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetRedisFirewallRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:redis:getRedisFirewallRule", {
        "cacheName": args.cacheName,
        "resourceGroupName": args.resourceGroupName,
        "ruleName": args.ruleName,
    }, opts);
}

export interface GetRedisFirewallRuleOutputArgs {
    /**
     * The name of the Redis cache.
     */
    cacheName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the firewall rule.
     */
    ruleName: pulumi.Input<string>;
}