import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a NetworkFirewallRuleGroup
 *
 * Uses Azure REST API version 2024-12-01.
 */
export function getNetworkFirewallRuleGroup(args: GetNetworkFirewallRuleGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkFirewallRuleGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:awsconnector:getNetworkFirewallRuleGroup", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkFirewallRuleGroupArgs {
    /**
     * Name of NetworkFirewallRuleGroup
     */
    name: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A Microsoft.AwsConnector resource
 */
export interface GetNetworkFirewallRuleGroupResult {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.NetworkFirewallRuleGroupPropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a NetworkFirewallRuleGroup
 *
 * Uses Azure REST API version 2024-12-01.
 */
export function getNetworkFirewallRuleGroupOutput(args: GetNetworkFirewallRuleGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNetworkFirewallRuleGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:awsconnector:getNetworkFirewallRuleGroup", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkFirewallRuleGroupOutputArgs {
    /**
     * Name of NetworkFirewallRuleGroup
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}