import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the specified Data Lake Analytics firewall rule.
 *
 * Uses Azure REST API version 2019-11-01-preview.
 */
export function getFirewallRule(args: GetFirewallRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetFirewallRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datalakeanalytics:getFirewallRule", {
        "accountName": args.accountName,
        "firewallRuleName": args.firewallRuleName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFirewallRuleArgs {
    /**
     * The name of the Data Lake Analytics account.
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
 * Data Lake Analytics firewall rule information.
 */
export interface GetFirewallRuleResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 * Gets the specified Data Lake Analytics firewall rule.
 *
 * Uses Azure REST API version 2019-11-01-preview.
 */
export function getFirewallRuleOutput(args: GetFirewallRuleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetFirewallRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datalakeanalytics:getFirewallRule", {
        "accountName": args.accountName,
        "firewallRuleName": args.firewallRuleName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFirewallRuleOutputArgs {
    /**
     * The name of the Data Lake Analytics account.
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