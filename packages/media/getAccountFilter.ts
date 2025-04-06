import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the details of an Account Filter in the Media Services account.
 *
 * Uses Azure REST API version 2023-01-01.
 *
 * Other available API versions: 2018-07-01, 2020-05-01, 2021-06-01, 2021-11-01, 2022-08-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native media [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAccountFilter(args: GetAccountFilterArgs, opts?: pulumi.InvokeOptions): Promise<GetAccountFilterResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:media:getAccountFilter", {
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 * Get the details of an Account Filter in the Media Services account.
 *
 * Uses Azure REST API version 2023-01-01.
 *
 * Other available API versions: 2018-07-01, 2020-05-01, 2021-06-01, 2021-11-01, 2022-08-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native media [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAccountFilterOutput(args: GetAccountFilterOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAccountFilterResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:media:getAccountFilter", {
        "accountName": args.accountName,
        "filterName": args.filterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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