import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get the details of an Account Filter in the Media Services account.
 */
export function getAccountFilter(args: GetAccountFilterArgs, opts?: pulumi.InvokeOptions): Promise<GetAccountFilterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:media/v20230101:getAccountFilter", {
        "accountName": args.accountName,
        "filterName": args.filterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAccountFilterArgs {
    /**
     * The Media Services account name.
     */
    accountName: string;
    /**
     * The Account Filter name
     */
    filterName: string;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: string;
}

/**
 * An Account Filter.
 */
export interface GetAccountFilterResult {
    /**
     * The first quality.
     */
    readonly firstQuality?: types.outputs.media.v20230101.FirstQualityResponse;
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
    readonly presentationTimeRange?: types.outputs.media.v20230101.PresentationTimeRangeResponse;
    /**
     * The system metadata relating to this resource.
     */
    readonly systemData: types.outputs.media.v20230101.SystemDataResponse;
    /**
     * The tracks selection conditions.
     */
    readonly tracks?: types.outputs.media.v20230101.FilterTrackSelectionResponse[];
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get the details of an Account Filter in the Media Services account.
 */
export function getAccountFilterOutput(args: GetAccountFilterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAccountFilterResult> {
    return pulumi.output(args).apply((a: any) => getAccountFilter(a, opts))
}

export interface GetAccountFilterOutputArgs {
    /**
     * The Media Services account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The Account Filter name
     */
    filterName: pulumi.Input<string>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}
