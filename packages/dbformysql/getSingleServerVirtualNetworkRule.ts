import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a virtual network rule.
 *
 * Uses Azure REST API version 2017-12-01.
 */
export function getSingleServerVirtualNetworkRule(args: GetSingleServerVirtualNetworkRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetSingleServerVirtualNetworkRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dbformysql:getSingleServerVirtualNetworkRule", {
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
        "virtualNetworkRuleName": args.virtualNetworkRuleName,
    }, opts);
}

export interface GetSingleServerVirtualNetworkRuleArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the server.
     */
    serverName: string;
    /**
     * The name of the virtual network rule.
     */
    virtualNetworkRuleName: string;
}

/**
 * A virtual network rule.
 */
export interface GetSingleServerVirtualNetworkRuleResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Create firewall rule before the virtual network has vnet service endpoint enabled.
     */
    readonly ignoreMissingVnetServiceEndpoint?: boolean;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Virtual Network Rule State
     */
    readonly state: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The ARM resource id of the virtual network subnet.
     */
    readonly virtualNetworkSubnetId: string;
}
/**
 * Gets a virtual network rule.
 *
 * Uses Azure REST API version 2017-12-01.
 */
export function getSingleServerVirtualNetworkRuleOutput(args: GetSingleServerVirtualNetworkRuleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSingleServerVirtualNetworkRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:dbformysql:getSingleServerVirtualNetworkRule", {
        "resourceGroupName": args.resourceGroupName,
        "serverName": args.serverName,
        "virtualNetworkRuleName": args.virtualNetworkRuleName,
    }, opts);
}

export interface GetSingleServerVirtualNetworkRuleOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
    /**
     * The name of the virtual network rule.
     */
    virtualNetworkRuleName: pulumi.Input<string>;
}