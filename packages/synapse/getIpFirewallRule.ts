import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get a firewall rule
 * Azure REST API version: 2021-06-01.
 *
 * Other available API versions: 2021-06-01-preview.
 */
export function getIpFirewallRule(args: GetIpFirewallRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetIpFirewallRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:synapse:getIpFirewallRule", {
        "resourceGroupName": args.resourceGroupName,
        "ruleName": args.ruleName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetIpFirewallRuleArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The IP firewall rule name
     */
    ruleName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * IP firewall rule
 */
export interface GetIpFirewallRuleResult {
    /**
     * The end IP address of the firewall rule. Must be IPv4 format. Must be greater than or equal to startIpAddress
     */
    readonly endIpAddress?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Resource provisioning state
     */
    readonly provisioningState: string;
    /**
     * The start IP address of the firewall rule. Must be IPv4 format
     */
    readonly startIpAddress?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a firewall rule
 * Azure REST API version: 2021-06-01.
 *
 * Other available API versions: 2021-06-01-preview.
 */
export function getIpFirewallRuleOutput(args: GetIpFirewallRuleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetIpFirewallRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:synapse:getIpFirewallRule", {
        "resourceGroupName": args.resourceGroupName,
        "ruleName": args.ruleName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetIpFirewallRuleOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The IP firewall rule name
     */
    ruleName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}