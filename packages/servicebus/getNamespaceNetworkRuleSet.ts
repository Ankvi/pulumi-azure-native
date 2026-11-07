import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets NetworkRuleSet for a Namespace.
 *
 * Uses Azure REST API version 2026-01-01.
 *
 * Other available API versions: 2018-01-01-preview, 2021-01-01-preview, 2021-06-01-preview, 2021-11-01, 2022-01-01-preview, 2022-10-01-preview, 2023-01-01-preview, 2024-01-01, 2025-05-01-preview, 2026-07-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native servicebus [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getNamespaceNetworkRuleSet(args: GetNamespaceNetworkRuleSetArgs, opts?: pulumi.InvokeOptions): Promise<GetNamespaceNetworkRuleSetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicebus:getNamespaceNetworkRuleSet", {
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
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Description of NetworkRuleSet resource.
 */
export interface GetNamespaceNetworkRuleSetResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Default Action for Network Rule Set
     */
    readonly defaultAction?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
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
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Value that indicates whether Trusted Service Access is Enabled or not.
     */
    readonly trustedServiceAccessEnabled?: boolean;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * List VirtualNetwork Rules
     */
    readonly virtualNetworkRules?: types.outputs.NWRuleSetVirtualNetworkRulesResponse[];
}
/**
 * Gets NetworkRuleSet for a Namespace.
 *
 * Uses Azure REST API version 2026-01-01.
 *
 * Other available API versions: 2018-01-01-preview, 2021-01-01-preview, 2021-06-01-preview, 2021-11-01, 2022-01-01-preview, 2022-10-01-preview, 2023-01-01-preview, 2024-01-01, 2025-05-01-preview, 2026-07-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native servicebus [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getNamespaceNetworkRuleSetOutput(args: GetNamespaceNetworkRuleSetOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNamespaceNetworkRuleSetResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:servicebus:getNamespaceNetworkRuleSet", {
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNamespaceNetworkRuleSetOutputArgs {
    /**
     * The namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}