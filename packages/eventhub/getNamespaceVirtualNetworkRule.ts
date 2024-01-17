import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets an VirtualNetworkRule for a Namespace by rule name.
 * Azure REST API version: 2018-01-01-preview.
 */
export function getNamespaceVirtualNetworkRule(args: GetNamespaceVirtualNetworkRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetNamespaceVirtualNetworkRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventhub:getNamespaceVirtualNetworkRule", {
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
        "virtualNetworkRuleName": args.virtualNetworkRuleName,
    }, opts);
}

export interface GetNamespaceVirtualNetworkRuleArgs {
    /**
     * The Namespace name
     */
    namespaceName: string;
    /**
     * Name of the resource group within the azure subscription.
     */
    resourceGroupName: string;
    /**
     * The Virtual Network Rule name.
     */
    virtualNetworkRuleName: string;
}

/**
 * Single item in a List or Get VirtualNetworkRules operation
 */
export interface GetNamespaceVirtualNetworkRuleResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * ARM ID of Virtual Network Subnet
     */
    readonly virtualNetworkSubnetId?: string;
}
/**
 * Gets an VirtualNetworkRule for a Namespace by rule name.
 * Azure REST API version: 2018-01-01-preview.
 */
export function getNamespaceVirtualNetworkRuleOutput(args: GetNamespaceVirtualNetworkRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNamespaceVirtualNetworkRuleResult> {
    return pulumi.output(args).apply((a: any) => getNamespaceVirtualNetworkRule(a, opts))
}

export interface GetNamespaceVirtualNetworkRuleOutputArgs {
    /**
     * The Namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * Name of the resource group within the azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Virtual Network Rule name.
     */
    virtualNetworkRuleName: pulumi.Input<string>;
}