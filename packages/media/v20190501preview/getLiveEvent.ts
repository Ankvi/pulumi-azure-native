import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets a Live Event.
 */
export function getLiveEvent(args: GetLiveEventArgs, opts?: pulumi.InvokeOptions): Promise<GetLiveEventResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:media/v20190501preview:getLiveEvent", {
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
     * The name of the Live Event.
     */
    liveEventName: string;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: string;
}

/**
 * The Live Event.
 */
export interface GetLiveEventResult {
    /**
     * The exact time the Live Event was created.
     */
    readonly created: string;
    /**
     * The Live Event access policies.
     */
    readonly crossSiteAccessPolicies?: types.outputs.media.v20190501preview.CrossSiteAccessPoliciesResponse;
    /**
     * The Live Event description.
     */
    readonly description?: string;
    /**
     * The Live Event encoding.
     */
    readonly encoding?: types.outputs.media.v20190501preview.LiveEventEncodingResponse;
    /**
     * Fully qualified resource ID for the resource.
     */
    readonly id: string;
    /**
     * The Live Event input.
     */
    readonly input: types.outputs.media.v20190501preview.LiveEventInputResponse;
    /**
     * The exact time the Live Event was last modified.
     */
    readonly lastModified: string;
    /**
     * The Azure Region of the resource.
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The Live Event preview.
     */
    readonly preview?: types.outputs.media.v20190501preview.LiveEventPreviewResponse;
    /**
     * The provisioning state of the Live Event.
     */
    readonly provisioningState: string;
    /**
     * The resource state of the Live Event.
     */
    readonly resourceState: string;
    /**
     * The options to use for the LiveEvent.  This value is specified at creation time and cannot be updated.
     */
    readonly streamOptions?: string[];
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The Live Event transcription.
     */
    readonly transcriptions?: types.outputs.media.v20190501preview.LiveEventTranscriptionResponse[];
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * Specifies whether to use a vanity url with the Live Event.  This value is specified at creation time and cannot be updated.
     */
    readonly vanityUrl?: boolean;
}
/**
 * Gets a Live Event.
 */
export function getLiveEventOutput(args: GetLiveEventOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLiveEventResult> {
    return pulumi.output(args).apply((a: any) => getLiveEvent(a, opts))
}

export interface GetLiveEventOutputArgs {
    /**
     * The Media Services account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the Live Event.
     */
    liveEventName: pulumi.Input<string>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}
