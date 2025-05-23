import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a live output.
 *
 * Uses Azure REST API version 2022-11-01.
 *
 * Other available API versions: 2018-03-30-preview, 2018-06-01-preview, 2018-07-01, 2019-05-01-preview, 2020-05-01, 2021-06-01, 2021-11-01, 2022-08-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native media [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getLiveOutput(args: GetLiveOutputArgs, opts?: pulumi.InvokeOptions): Promise<GetLiveOutputResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:media:getLiveOutput", {
        "accountName": args.accountName,
        "liveEventName": args.liveEventName,
        "liveOutputName": args.liveOutputName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLiveOutputArgs {
    /**
     * The Media Services account name.
     */
    accountName: string;
    /**
     * The name of the live event, maximum length is 32.
     */
    liveEventName: string;
    /**
     * The name of the live output.
     */
    liveOutputName: string;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: string;
}

/**
 * The Live Output.
 */
export interface GetLiveOutputResult {
    /**
     * ISO 8601 time between 1 minute to 25 hours to indicate the maximum content length that can be archived in the asset for this live output. This also sets the maximum content length for the rewind window. For example, use PT1H30M to indicate 1 hour and 30 minutes of archive window.
     */
    readonly archiveWindowLength: string;
    /**
     * The asset that the live output will write to.
     */
    readonly assetName: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The creation time the live output.
     */
    readonly created: string;
    /**
     * The description of the live output.
     */
    readonly description?: string;
    /**
     * HTTP Live Streaming (HLS) packing setting for the live output.
     */
    readonly hls?: types.outputs.HlsResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The time the live output was last modified.
     */
    readonly lastModified: string;
    /**
     * The manifest file name. If not provided, the service will generate one automatically.
     */
    readonly manifestName?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The initial timestamp that the live output will start at, any content before this value will not be archived.
     */
    readonly outputSnapTime?: number;
    /**
     * The provisioning state of the live output.
     */
    readonly provisioningState: string;
    /**
     * The resource state of the live output.
     */
    readonly resourceState: string;
    /**
     * ISO 8601 time between 1 minute to the duration of archiveWindowLength to control seek-able window length during Live. The service won't use this property once LiveOutput stops. The archived VOD will have full content with original ArchiveWindowLength. For example, use PT1H30M to indicate 1 hour and 30 minutes of rewind window length. Service will use implicit default value 30m only if Live Event enables LL.
     */
    readonly rewindWindowLength?: string;
    /**
     * The system metadata relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets a live output.
 *
 * Uses Azure REST API version 2022-11-01.
 *
 * Other available API versions: 2018-03-30-preview, 2018-06-01-preview, 2018-07-01, 2019-05-01-preview, 2020-05-01, 2021-06-01, 2021-11-01, 2022-08-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native media [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getLiveOutputOutput(args: GetLiveOutputOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetLiveOutputResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:media:getLiveOutput", {
        "accountName": args.accountName,
        "liveEventName": args.liveEventName,
        "liveOutputName": args.liveOutputName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLiveOutputOutputArgs {
    /**
     * The Media Services account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the live event, maximum length is 32.
     */
    liveEventName: pulumi.Input<string>;
    /**
     * The name of the live output.
     */
    liveOutputName: pulumi.Input<string>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}