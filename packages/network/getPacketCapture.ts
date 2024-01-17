import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a packet capture session by name.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2018-01-01, 2020-06-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01.
 */
export function getPacketCapture(args: GetPacketCaptureArgs, opts?: pulumi.InvokeOptions): Promise<GetPacketCaptureResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getPacketCapture", {
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
    readonly filters?: types.outputs.PacketCaptureFilterResponse[];
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
     * A list of AzureVMSS instances which can be included or excluded to run packet capture. If both included and excluded are empty, then the packet capture will run on all instances of AzureVMSS.
     */
    readonly scope?: types.outputs.PacketCaptureMachineScopeResponse;
    /**
     * The storage location for a packet capture session.
     */
    readonly storageLocation: types.outputs.PacketCaptureStorageLocationResponse;
    /**
     * The ID of the targeted resource, only AzureVM and AzureVMSS as target type are currently supported.
     */
    readonly target: string;
    /**
     * Target type of the resource provided.
     */
    readonly targetType?: string;
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
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2018-01-01, 2020-06-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01.
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