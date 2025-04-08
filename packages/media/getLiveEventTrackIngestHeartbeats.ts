import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get track ingest heartbeat events telemetry of a live event.
 *
 * Uses Azure REST API version 2022-11-01.
 */
export function getLiveEventTrackIngestHeartbeats(args: GetLiveEventTrackIngestHeartbeatsArgs, opts?: pulumi.InvokeOptions): Promise<GetLiveEventTrackIngestHeartbeatsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:media:getLiveEventTrackIngestHeartbeats", {
        "accountName": args.accountName,
        "liveEventName": args.liveEventName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLiveEventTrackIngestHeartbeatsArgs {
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
 * Get live event track ingest heart beats result.
 */
export interface GetLiveEventTrackIngestHeartbeatsResult {
    /**
     * The result of the get live event track events.
     */
    readonly value?: types.outputs.LiveEventTrackEventResponse[];
}
/**
 * Get track ingest heartbeat events telemetry of a live event.
 *
 * Uses Azure REST API version 2022-11-01.
 */
export function getLiveEventTrackIngestHeartbeatsOutput(args: GetLiveEventTrackIngestHeartbeatsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetLiveEventTrackIngestHeartbeatsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:media:getLiveEventTrackIngestHeartbeats", {
        "accountName": args.accountName,
        "liveEventName": args.liveEventName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLiveEventTrackIngestHeartbeatsOutputArgs {
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