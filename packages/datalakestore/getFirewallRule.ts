import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the specified Data Lake Store firewall rule.
 * Azure REST API version: 2016-11-01.
 */
export function getFirewallRule(args: GetFirewallRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetFirewallRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datalakestore:getFirewallRule", {
        "accountName": args.accountName,
        "firewallRuleName": args.firewallRuleName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFirewallRuleArgs {
    /**
     * The name of the Data Lake Store account.
     */
    accountName: string;
    /**
     * The name of the firewall rule to retrieve.
     */
    firewallRuleName: string;
    /**
     * The name of the Azure resource group.
     */
    resourceGroupName: string;
}

/**
 * Data Lake Store firewall rule information.
 */
export interface GetFirewallRuleResult {
    /**
     * The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.
     */
    readonly endIpAddress: string;
    /**
     * The resource identifier.
     */
    readonly id: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.
     */
    readonly startIpAddress: string;
    /**
     * The resource type.
     */
    readonly type: string;
}
/**
 * Gets the specified Data Lake Store firewall rule.
 * Azure REST API version: 2016-11-01.
 */
export function getFirewallRuleOutput(args: GetFirewallRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFirewallRuleResult> {
    return pulumi.output(args).apply((a: any) => getFirewallRule(a, opts))
}

export interface GetFirewallRuleOutputArgs {
    /**
     * The name of the Data Lake Store account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the firewall rule to retrieve.
     */
    firewallRuleName: pulumi.Input<string>;
    /**
     * The name of the Azure resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}