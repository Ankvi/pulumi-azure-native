import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets information about a server firewall rule.
 *
 * Uses Azure REST API version 2017-12-01.
 */
export function getSingleServerFirewallRule(args: GetSingleServerFirewallRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetSingleServerFirewallRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dbforpostgresql:getSingleServerFirewallRule", {
        "firewallRuleName": args.firewallRuleName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetSingleServerFirewallRuleArgs {
    /**
     * The name of the server firewall rule.
     */
    firewallRuleName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the server.
     */
    serverName: string;
}

/**
 * Represents a server firewall rule.
 */
export interface GetSingleServerFirewallRuleResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The end IP address of the server firewall rule. Must be IPv4 format.
     */
    readonly endIpAddress: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The start IP address of the server firewall rule. Must be IPv4 format.
     */
    readonly startIpAddress: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets information about a server firewall rule.
 *
 * Uses Azure REST API version 2017-12-01.
 */
export function getSingleServerFirewallRuleOutput(args: GetSingleServerFirewallRuleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSingleServerFirewallRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:dbforpostgresql:getSingleServerFirewallRule", {
        "firewallRuleName": args.firewallRuleName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetSingleServerFirewallRuleOutputArgs {
    /**
     * The name of the server firewall rule.
     */
    firewallRuleName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}