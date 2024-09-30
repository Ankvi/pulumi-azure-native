import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about a mongo cluster firewall rule.
 * Azure REST API version: 2023-03-15-preview.
 *
 * Other available API versions: 2023-09-15-preview, 2023-11-15-preview, 2024-02-15-preview.
 */
export function getMongoClusterFirewallRule(args: GetMongoClusterFirewallRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetMongoClusterFirewallRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:documentdb:getMongoClusterFirewallRule", {
        "firewallRuleName": args.firewallRuleName,
        "mongoClusterName": args.mongoClusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMongoClusterFirewallRuleArgs {
    /**
     * The name of the mongo cluster firewall rule.
     */
    firewallRuleName: string;
    /**
     * The name of the mongo cluster.
     */
    mongoClusterName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Represents a mongo cluster firewall rule.
 */
export interface GetMongoClusterFirewallRuleResult {
    /**
     * The end IP address of the mongo cluster firewall rule. Must be IPv4 format.
     */
    readonly endIpAddress: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the firewall rule.
     */
    readonly provisioningState: string;
    /**
     * The start IP address of the mongo cluster firewall rule. Must be IPv4 format.
     */
    readonly startIpAddress: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets information about a mongo cluster firewall rule.
 * Azure REST API version: 2023-03-15-preview.
 *
 * Other available API versions: 2023-09-15-preview, 2023-11-15-preview, 2024-02-15-preview.
 */
export function getMongoClusterFirewallRuleOutput(args: GetMongoClusterFirewallRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMongoClusterFirewallRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:documentdb:getMongoClusterFirewallRule", {
        "firewallRuleName": args.firewallRuleName,
        "mongoClusterName": args.mongoClusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMongoClusterFirewallRuleOutputArgs {
    /**
     * The name of the mongo cluster firewall rule.
     */
    firewallRuleName: pulumi.Input<string>;
    /**
     * The name of the mongo cluster.
     */
    mongoClusterName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}