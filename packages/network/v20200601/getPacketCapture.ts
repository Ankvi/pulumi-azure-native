import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets a packet capture session by name.
 */
export function getPacketCapture(args: GetPacketCaptureArgs, opts?: pulumi.InvokeOptions): Promise<GetPacketCaptureResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20200601:getPacketCapture", {
        "networkWatcherName": args.networkWatcherName,
        "packetCaptureName": args.packetCaptureName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPacketCaptureArgs {
    /**
     * The name of the network watcher.
     */
    networkWatcherName: string;
    /**
     * The name of the packet capture session.
     */
    packetCaptureName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Information about packet capture session.
 */
export interface GetPacketCaptureResult {
    /**
     * Number of bytes captured per packet, the remaining bytes are truncated.
     */
    readonly bytesToCapturePerPacket?: number;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * A list of packet capture filters.
     */
    readonly filters?: types.outputs.network.v20200601.PacketCaptureFilterResponse[];
    /**
     * ID of the packet capture operation.
     */
    readonly id: string;
    /**
     * Name of the packet capture session.
     */
    readonly name: string;
    /**
     * The provisioning state of the packet capture session.
     */
    readonly provisioningState: string;
    /**
     * The storage location for a packet capture session.
     */
    readonly storageLocation: types.outputs.network.v20200601.PacketCaptureStorageLocationResponse;
    /**
     * The ID of the targeted resource, only VM is currently supported.
     */
    readonly target: string;
    /**
     * Maximum duration of the capture session in seconds.
     */
    readonly timeLimitInSeconds?: number;
    /**
     * Maximum size of the capture output.
     */
    readonly totalBytesPerSession?: number;
}
/**
 * Gets a packet capture session by name.
 */
export function getPacketCaptureOutput(args: GetPacketCaptureOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPacketCaptureResult> {
    return pulumi.output(args).apply((a: any) => getPacketCapture(a, opts))
}

export interface GetPacketCaptureOutputArgs {
    /**
     * The name of the network watcher.
     */
    networkWatcherName: pulumi.Input<string>;
    /**
     * The name of the packet capture session.
     */
    packetCaptureName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
