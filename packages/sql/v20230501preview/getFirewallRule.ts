import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a firewall rule.
 */
export function getFirewallRule(args: GetFirewallRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetFirewallRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql/v20230501preview:getFirewallRule", {
        "firewallRuleName": args.firewallRuleName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetFirewallRuleArgs {
    /**
     * The name of the firewall rule.
     */
    firewallRuleName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the server.
     */
    serverName: string;
}

/**
 * A server firewall rule.
 */
export interface GetFirewallRuleResult {
    /**
     * The end IP address of the firewall rule. Must be IPv4 format. Must be greater than or equal to startIpAddress. Use value '0.0.0.0' for all Azure-internal IP addresses.
     */
    readonly endIpAddress?: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name?: string;
    /**
     * The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' for all Azure-internal IP addresses.
     */
    readonly startIpAddress?: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a firewall rule.
 */
export function getFirewallRuleOutput(args: GetFirewallRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFirewallRuleResult> {
    return pulumi.output(args).apply((a: any) => getFirewallRule(a, opts))
}

export interface GetFirewallRuleOutputArgs {
    /**
     * The name of the firewall rule.
     */
    firewallRuleName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}