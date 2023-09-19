import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the details of an Asset Filter associated with the specified Asset.
 * Azure REST API version: 2023-01-01.
 */
export function getAssetFilter(args: GetAssetFilterArgs, opts?: pulumi.InvokeOptions): Promise<GetAssetFilterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:media:getAssetFilter", {
        "accountName": args.accountName,
        "assetName": args.assetName,
        "filterName": args.filterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAssetFilterArgs {
    /**
     * The Media Services account name.
     */
    accountName: string;
    /**
     * The Asset name.
     */
    assetName: string;
    /**
     * The Asset Filter name
     */
    filterName: string;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: string;
}

/**
 * An Asset Filter.
 */
export interface GetAssetFilterResult {
    /**
     * The first quality.
     */
    readonly firstQuality?: types.outputs.FirstQualityResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The presentation time range.
     */
    readonly presentationTimeRange?: types.outputs.PresentationTimeRangeResponse;
    /**
     * The system metadata relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The tracks selection conditions.
     */
    readonly tracks?: types.outputs.FilterTrackSelectionResponse[];
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get the details of an Asset Filter associated with the specified Asset.
 * Azure REST API version: 2023-01-01.
 */
export function getAssetFilterOutput(args: GetAssetFilterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAssetFilterResult> {
    return pulumi.output(args).apply((a: any) => getAssetFilter(a, opts))
}

export interface GetAssetFilterOutputArgs {
    /**
     * The Media Services account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The Asset name.
     */
    assetName: pulumi.Input<string>;
    /**
     * The Asset Filter name
     */
    filterName: pulumi.Input<string>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}
