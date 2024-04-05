import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets an VirtualNetworkRule for a Namespace by rule name.
 */
export function getNamespaceVirtualNetworkRule(args: GetNamespaceVirtualNetworkRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetNamespaceVirtualNetworkRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicebus/v20180101preview:getNamespaceVirtualNetworkRule", {
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
        "virtualNetworkRuleName": args.virtualNetworkRuleName,
    }, opts);
}

export interface GetNamespaceVirtualNetworkRuleArgs {
    /**
     * The namespace name
     */
    namespaceName: string;
    /**
     * Name of the Resource group within the Azure subscription.
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
     * Resource Id
     */
    readonly id: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * Resource ID of Virtual Network Subnet
     */
    readonly virtualNetworkSubnetId?: string;
}
/**
 * Gets an VirtualNetworkRule for a Namespace by rule name.
 */
export function getNamespaceVirtualNetworkRuleOutput(args: GetNamespaceVirtualNetworkRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNamespaceVirtualNetworkRuleResult> {
    return pulumi.output(args).apply((a: any) => getNamespaceVirtualNetworkRule(a, opts))
}

export interface GetNamespaceVirtualNetworkRuleOutputArgs {
    /**
     * The namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Virtual Network Rule name.
     */
    virtualNetworkRuleName: pulumi.Input<string>;
}