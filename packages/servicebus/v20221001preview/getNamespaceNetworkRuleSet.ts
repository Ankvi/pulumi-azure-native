import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets NetworkRuleSet for a Namespace.
 */
export function getNamespaceNetworkRuleSet(args: GetNamespaceNetworkRuleSetArgs, opts?: pulumi.InvokeOptions): Promise<GetNamespaceNetworkRuleSetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicebus/v20221001preview:getNamespaceNetworkRuleSet", {
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNamespaceNetworkRuleSetArgs {
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
 * Description of NetworkRuleSet resource.
 */
export interface GetNamespaceNetworkRuleSetResult {
    /**
     * Default Action for Network Rule Set
     */
    readonly defaultAction?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * List of IpRules
     */
    readonly ipRules?: types.outputs.NWRuleSetIpRulesResponse[];
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * This determines if traffic is allowed over public network. By default it is enabled.
     */
    readonly publicNetworkAccess?: string;
    /**
     * The system meta data relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Value that indicates whether Trusted Service Access is Enabled or not.
     */
    readonly trustedServiceAccessEnabled?: boolean;
    /**
     * The type of the resource. E.g. "Microsoft.EventHub/Namespaces" or "Microsoft.EventHub/Namespaces/EventHubs"
     */
    readonly type: string;
    /**
     * List VirtualNetwork Rules
     */
    readonly virtualNetworkRules?: types.outputs.NWRuleSetVirtualNetworkRulesResponse[];
}
/**
 * Gets NetworkRuleSet for a Namespace.
 */
export function getNamespaceNetworkRuleSetOutput(args: GetNamespaceNetworkRuleSetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNamespaceNetworkRuleSetResult> {
    return pulumi.output(args).apply((a: any) => getNamespaceNetworkRuleSet(a, opts))
}

export interface GetNamespaceNetworkRuleSetOutputArgs {
    /**
     * The namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}
