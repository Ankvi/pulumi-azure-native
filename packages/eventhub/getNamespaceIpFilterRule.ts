import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets an IpFilterRule for a Namespace by rule name.
 *
 * Uses Azure REST API version 2018-01-01-preview.
 */
export function getNamespaceIpFilterRule(args: GetNamespaceIpFilterRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetNamespaceIpFilterRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventhub:getNamespaceIpFilterRule", {
        "ipFilterRuleName": args.ipFilterRuleName,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNamespaceIpFilterRuleArgs {
    /**
     * The IP Filter Rule name.
     */
    ipFilterRuleName: string;
    /**
     * The Namespace name
     */
    namespaceName: string;
    /**
     * Name of the resource group within the azure subscription.
     */
    resourceGroupName: string;
}

/**
 * Single item in a List or Get IpFilterRules operation
 */
export interface GetNamespaceIpFilterRuleResult {
    /**
     * The IP Filter Action
     */
    readonly action?: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * IP Filter name
     */
    readonly filterName?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * IP Mask
     */
    readonly ipMask?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets an IpFilterRule for a Namespace by rule name.
 *
 * Uses Azure REST API version 2018-01-01-preview.
 */
export function getNamespaceIpFilterRuleOutput(args: GetNamespaceIpFilterRuleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNamespaceIpFilterRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:eventhub:getNamespaceIpFilterRule", {
        "ipFilterRuleName": args.ipFilterRuleName,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNamespaceIpFilterRuleOutputArgs {
    /**
     * The IP Filter Rule name.
     */
    ipFilterRuleName: pulumi.Input<string>;
    /**
     * The Namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * Name of the resource group within the azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}