import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets status telemetry of a live event.
 *
 * Uses Azure REST API version 2022-11-01.
 */
export function getLiveEventStatus(args: GetLiveEventStatusArgs, opts?: pulumi.InvokeOptions): Promise<GetLiveEventStatusResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:media:getLiveEventStatus", {
        "accountName": args.accountName,
        "liveEventName": args.liveEventName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLiveEventStatusArgs {
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
 * Get live event status result.
 */
export interface GetLiveEventStatusResult {
    /**
     * The result of the get live event status.
     */
    readonly value?: types.outputs.LiveEventStatusResponse[];
}
/**
 * Gets status telemetry of a live event.
 *
 * Uses Azure REST API version 2022-11-01.
 */
export function getLiveEventStatusOutput(args: GetLiveEventStatusOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetLiveEventStatusResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:media:getLiveEventStatus", {
        "accountName": args.accountName,
        "liveEventName": args.liveEventName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLiveEventStatusOutputArgs {
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