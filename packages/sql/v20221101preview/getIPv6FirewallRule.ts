import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets an IPv6 firewall rule.
 */
export function getIPv6FirewallRule(args: GetIPv6FirewallRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetIPv6FirewallRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql/v20221101preview:getIPv6FirewallRule", {
        "firewallRuleName": args.firewallRuleName,
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
    }, opts);
}

export interface GetIPv6FirewallRuleArgs {
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
 * An IPv6 server firewall rule.
 */
export interface GetIPv6FirewallRuleResult {
    /**
     * The end IP address of the firewall rule. Must be IPv6 format. Must be greater than or equal to startIpv6Address.
     */
    readonly endIPv6Address?: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name?: string;
    /**
     * The start IP address of the firewall rule. Must be IPv6 format.
     */
    readonly startIPv6Address?: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets an IPv6 firewall rule.
 */
export function getIPv6FirewallRuleOutput(args: GetIPv6FirewallRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIPv6FirewallRuleResult> {
    return pulumi.output(args).apply((a: any) => getIPv6FirewallRule(a, opts))
}

export interface GetIPv6FirewallRuleOutputArgs {
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