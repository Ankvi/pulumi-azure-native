import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about a mongo cluster firewall rule.
 * Azure REST API version: 2024-03-01-preview.
 *
 * Other available API versions: 2024-06-01-preview, 2024-07-01.
 */
export function getFirewallRule(args: GetFirewallRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetFirewallRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:documentdb:getFirewallRule", {
        "firewallRuleName": args.firewallRuleName,
        "mongoClusterName": args.mongoClusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetFirewallRuleArgs {
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
export interface GetFirewallRuleResult {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.FirewallRulePropertiesResponse;
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
 * Azure REST API version: 2024-03-01-preview.
 *
 * Other available API versions: 2024-06-01-preview, 2024-07-01.
 */
export function getFirewallRuleOutput(args: GetFirewallRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFirewallRuleResult> {
    return pulumi.output(args).apply((a: any) => getFirewallRule(a, opts))
}

export interface GetFirewallRuleOutputArgs {
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