import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a single firewall rule in a specified redis cache.
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2023-05-01-preview, 2023-08-01, 2024-03-01, 2024-04-01-preview, 2024-11-01.
 */
export function getFirewallRule(args: GetFirewallRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetFirewallRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cache:getFirewallRule", {
        "cacheName": args.cacheName,
        "resourceGroupName": args.resourceGroupName,
        "ruleName": args.ruleName,
    }, opts);
}

export interface GetFirewallRuleArgs {
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
export interface GetFirewallRuleResult {
    /**
     * highest IP address included in the range
     */
    readonly endIP: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * lowest IP address included in the range
     */
    readonly startIP: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets a single firewall rule in a specified redis cache.
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2023-05-01-preview, 2023-08-01, 2024-03-01, 2024-04-01-preview, 2024-11-01.
 */
export function getFirewallRuleOutput(args: GetFirewallRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFirewallRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cache:getFirewallRule", {
        "cacheName": args.cacheName,
        "resourceGroupName": args.resourceGroupName,
        "ruleName": args.ruleName,
    }, opts);
}

export interface GetFirewallRuleOutputArgs {
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