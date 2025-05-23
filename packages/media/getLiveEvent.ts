import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets properties of a live event.
 *
 * Uses Azure REST API version 2022-11-01.
 *
 * Other available API versions: 2018-03-30-preview, 2018-06-01-preview, 2018-07-01, 2019-05-01-preview, 2020-05-01, 2021-06-01, 2021-11-01, 2022-08-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native media [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getLiveEvent(args: GetLiveEventArgs, opts?: pulumi.InvokeOptions): Promise<GetLiveEventResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:media:getLiveEvent", {
        "accountName": args.accountName,
        "liveEventName": args.liveEventName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLiveEventArgs {
    /**
     * The Media Services account name.
     */
    accountName: string;
    /**
     * The name of the live event, maximum length is 32.
     */
    liveEventName: string;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: string;
}

/**
 * The live event.
 */
export interface GetLiveEventResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The creation time for the live event
     */
    readonly created: string;
    /**
     * Live event cross site access policies.
     */
    readonly crossSiteAccessPolicies?: types.outputs.CrossSiteAccessPoliciesResponse;
    /**
     * A description for the live event.
     */
    readonly description?: string;
    /**
     * Encoding settings for the live event. It configures whether a live encoder is used for the live event and settings for the live encoder if it is used.
     */
    readonly encoding?: types.outputs.LiveEventEncodingResponse;
    /**
     * When useStaticHostname is set to true, the hostnamePrefix specifies the first part of the hostname assigned to the live event preview and ingest endpoints. The final hostname would be a combination of this prefix, the media service account name and a short code for the Azure Media Services data center.
     */
    readonly hostnamePrefix?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Live event input settings. It defines how the live event receives input from a contribution encoder.
     */
    readonly input: types.outputs.LiveEventInputResponse;
    /**
     * The last modified time of the live event.
     */
    readonly lastModified: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Live event preview settings. Preview allows live event producers to preview the live streaming content without creating any live output.
     */
    readonly preview?: types.outputs.LiveEventPreviewResponse;
    /**
     * The provisioning state of the live event.
     */
    readonly provisioningState: string;
    /**
     * The resource state of the live event. See https://go.microsoft.com/fwlink/?linkid=2139012 for more information.
     */
    readonly resourceState: string;
    /**
     * The options to use for the LiveEvent. This value is specified at creation time and cannot be updated. The valid values for the array entry values are 'Default' and 'LowLatency'.
     */
    readonly streamOptions?: string[];
    /**
     * The system metadata relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Live transcription settings for the live event. See https://go.microsoft.com/fwlink/?linkid=2133742 for more information about the live transcription feature.
     */
    readonly transcriptions?: types.outputs.LiveEventTranscriptionResponse[];
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Specifies whether a static hostname would be assigned to the live event preview and ingest endpoints. This value can only be updated if the live event is in Standby state
     */
    readonly useStaticHostname?: boolean;
}
/**
 * Gets properties of a live event.
 *
 * Uses Azure REST API version 2022-11-01.
 *
 * Other available API versions: 2018-03-30-preview, 2018-06-01-preview, 2018-07-01, 2019-05-01-preview, 2020-05-01, 2021-06-01, 2021-11-01, 2022-08-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native media [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getLiveEventOutput(args: GetLiveEventOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetLiveEventResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:media:getLiveEvent", {
        "accountName": args.accountName,
        "liveEventName": args.liveEventName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLiveEventOutputArgs {
    /**
     * The Media Services account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the live event, maximum length is 32.
     */
    liveEventName: pulumi.Input<string>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}