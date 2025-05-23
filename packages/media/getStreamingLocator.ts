import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the details of a Streaming Locator in the Media Services account
 *
 * Uses Azure REST API version 2023-01-01.
 *
 * Other available API versions: 2018-03-30-preview, 2018-06-01-preview, 2018-07-01, 2020-05-01, 2021-06-01, 2021-11-01, 2022-08-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native media [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getStreamingLocator(args: GetStreamingLocatorArgs, opts?: pulumi.InvokeOptions): Promise<GetStreamingLocatorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:media:getStreamingLocator", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "streamingLocatorName": args.streamingLocatorName,
    }, opts);
}

export interface GetStreamingLocatorArgs {
    /**
     * The Media Services account name.
     */
    accountName: string;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: string;
    /**
     * The Streaming Locator name.
     */
    streamingLocatorName: string;
}

/**
 * A Streaming Locator resource
 */
export interface GetStreamingLocatorResult {
    /**
     * Alternative Media ID of this Streaming Locator
     */
    readonly alternativeMediaId?: string;
    /**
     * Asset Name
     */
    readonly assetName: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The ContentKeys used by this Streaming Locator.
     */
    readonly contentKeys?: types.outputs.StreamingLocatorContentKeyResponse[];
    /**
     * The creation time of the Streaming Locator.
     */
    readonly created: string;
    /**
     * Name of the default ContentKeyPolicy used by this Streaming Locator.
     */
    readonly defaultContentKeyPolicyName?: string;
    /**
     * The end time of the Streaming Locator.
     */
    readonly endTime?: string;
    /**
     * A list of asset or account filters which apply to this streaming locator
     */
    readonly filters?: string[];
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The start time of the Streaming Locator.
     */
    readonly startTime?: string;
    /**
     * The StreamingLocatorId of the Streaming Locator.
     */
    readonly streamingLocatorId?: string;
    /**
     * Name of the Streaming Policy used by this Streaming Locator. Either specify the name of Streaming Policy you created or use one of the predefined Streaming Policies. The predefined Streaming Policies available are: 'Predefined_DownloadOnly', 'Predefined_ClearStreamingOnly', 'Predefined_DownloadAndClearStreaming', 'Predefined_ClearKey', 'Predefined_MultiDrmCencStreaming' and 'Predefined_MultiDrmStreaming'
     */
    readonly streamingPolicyName: string;
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
 * Get the details of a Streaming Locator in the Media Services account
 *
 * Uses Azure REST API version 2023-01-01.
 *
 * Other available API versions: 2018-03-30-preview, 2018-06-01-preview, 2018-07-01, 2020-05-01, 2021-06-01, 2021-11-01, 2022-08-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native media [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getStreamingLocatorOutput(args: GetStreamingLocatorOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetStreamingLocatorResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:media:getStreamingLocator", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "streamingLocatorName": args.streamingLocatorName,
    }, opts);
}

export interface GetStreamingLocatorOutputArgs {
    /**
     * The Media Services account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Streaming Locator name.
     */
    streamingLocatorName: pulumi.Input<string>;
}