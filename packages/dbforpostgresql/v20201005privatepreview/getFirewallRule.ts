import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about a server group firewall rule.
 */
export function getFirewallRule(args: GetFirewallRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetFirewallRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dbforpostgresql/v20201005privatepreview:getFirewallRule", {
        "firewallRuleName": args.firewallRuleName,
        "resourceGroupName": args.resourceGroupName,
        "serverGroupName": args.serverGroupName,
    }, opts);
}

export interface GetFirewallRuleArgs {
    /**
     * The name of the server group firewall rule.
     */
    firewallRuleName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the server group.
     */
    serverGroupName: string;
}

/**
 * Represents a server group firewall rule.
 */
export interface GetFirewallRuleResult {
    /**
     * The end IP address of the server group firewall rule. Must be IPv4 format.
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
     * The start IP address of the server group firewall rule. Must be IPv4 format.
     */
    readonly startIpAddress: string;
    /**
     * The system metadata relating to this resource
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets information about a server group firewall rule.
 */
export function getFirewallRuleOutput(args: GetFirewallRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFirewallRuleResult> {
    return pulumi.output(args).apply((a: any) => getFirewallRule(a, opts))
}

export interface GetFirewallRuleOutputArgs {
    /**
     * The name of the server group firewall rule.
     */
    firewallRuleName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server group.
     */
    serverGroupName: pulumi.Input<string>;
}
