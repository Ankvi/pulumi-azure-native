import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get stream events telemetry of a live event.
 * Azure REST API version: 2022-11-01.
 */
export function getLiveEventStreamEvents(args: GetLiveEventStreamEventsArgs, opts?: pulumi.InvokeOptions): Promise<GetLiveEventStreamEventsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:media:getLiveEventStreamEvents", {
        "accountName": args.accountName,
        "liveEventName": args.liveEventName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLiveEventStreamEventsArgs {
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
 * Get live event stream events result.
 */
export interface GetLiveEventStreamEventsResult {
    /**
     * The result of the get live event stream events.
     */
    readonly value?: types.outputs.LiveEventStreamEventResponse[];
}
/**
 * Get stream events telemetry of a live event.
 * Azure REST API version: 2022-11-01.
 */
export function getLiveEventStreamEventsOutput(args: GetLiveEventStreamEventsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLiveEventStreamEventsResult> {
    return pulumi.output(args).apply((a: any) => getLiveEventStreamEvents(a, opts))
}

export interface GetLiveEventStreamEventsOutputArgs {
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