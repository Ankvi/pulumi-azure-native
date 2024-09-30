import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the details of a Track in the Asset
 * Azure REST API version: 2023-01-01.
 */
export function getTrack(args: GetTrackArgs, opts?: pulumi.InvokeOptions): Promise<GetTrackResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:media:getTrack", {
        "accountName": args.accountName,
        "assetName": args.assetName,
        "resourceGroupName": args.resourceGroupName,
        "trackName": args.trackName,
    }, opts);
}

export interface GetTrackArgs {
    /**
     * The Media Services account name.
     */
    accountName: string;
    /**
     * The Asset name.
     */
    assetName: string;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: string;
    /**
     * The Asset Track name.
     */
    trackName: string;
}

/**
 * An Asset Track resource.
 */
export interface GetTrackResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Provisioning state of the asset track.
     */
    readonly provisioningState: string;
    /**
     * Detailed information about a track in the asset.
     */
    readonly track?: types.outputs.AudioTrackResponse | types.outputs.TextTrackResponse | types.outputs.VideoTrackResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get the details of a Track in the Asset
 * Azure REST API version: 2023-01-01.
 */
export function getTrackOutput(args: GetTrackOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTrackResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:media:getTrack", {
        "accountName": args.accountName,
        "assetName": args.assetName,
        "resourceGroupName": args.resourceGroupName,
        "trackName": args.trackName,
    }, opts);
}

export interface GetTrackOutputArgs {
    /**
     * The Media Services account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The Asset name.
     */
    assetName: pulumi.Input<string>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Asset Track name.
     */
    trackName: pulumi.Input<string>;
}