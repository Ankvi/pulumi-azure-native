import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets an IpFilterRule for a Namespace by rule name.
 * Azure REST API version: 2018-01-01-preview.
 */
export function getNamespaceIpFilterRule(args: GetNamespaceIpFilterRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetNamespaceIpFilterRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicebus:getNamespaceIpFilterRule", {
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
     * The namespace name
     */
    namespaceName: string;
    /**
     * Name of the Resource group within the Azure subscription.
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
     * IP Filter name
     */
    readonly filterName?: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * IP Mask
     */
    readonly ipMask?: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Gets an IpFilterRule for a Namespace by rule name.
 * Azure REST API version: 2018-01-01-preview.
 */
export function getNamespaceIpFilterRuleOutput(args: GetNamespaceIpFilterRuleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNamespaceIpFilterRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:servicebus:getNamespaceIpFilterRule", {
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
     * The namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}