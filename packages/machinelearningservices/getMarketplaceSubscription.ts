import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure Resource Manager resource envelope.
 * Azure REST API version: 2024-01-01-preview.
 *
 * Other available API versions: 2024-04-01, 2024-04-01-preview.
 */
export function getMarketplaceSubscription(args: GetMarketplaceSubscriptionArgs, opts?: pulumi.InvokeOptions): Promise<GetMarketplaceSubscriptionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices:getMarketplaceSubscription", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetMarketplaceSubscriptionArgs {
    /**
     * Container name.
     */
    name: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: string;
}

/**
 * Azure Resource Manager resource envelope.
 */
export interface GetMarketplaceSubscriptionResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * [Required] Additional attributes of the entity.
     */
    readonly marketplaceSubscriptionProperties: types.outputs.MarketplaceSubscriptionResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
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
 * Azure Resource Manager resource envelope.
 * Azure REST API version: 2024-01-01-preview.
 *
 * Other available API versions: 2024-04-01, 2024-04-01-preview.
 */
export function getMarketplaceSubscriptionOutput(args: GetMarketplaceSubscriptionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMarketplaceSubscriptionResult> {
    return pulumi.output(args).apply((a: any) => getMarketplaceSubscription(a, opts))
}

export interface GetMarketplaceSubscriptionOutputArgs {
    /**
     * Container name.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}