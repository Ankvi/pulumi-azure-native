import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified packet capture session.
 * Azure REST API version: 2023-06-01.
 */
export function getPacketCapture(args: GetPacketCaptureArgs, opts?: pulumi.InvokeOptions): Promise<GetPacketCaptureResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:mobilenetwork:getPacketCapture", {
        "packetCaptureName": args.packetCaptureName,
        "packetCoreControlPlaneName": args.packetCoreControlPlaneName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPacketCaptureArgs {
    /**
     * The name of the packet capture session.
     */
    packetCaptureName: string;
    /**
     * The name of the packet core control plane.
     */
    packetCoreControlPlaneName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Packet capture session resource.
 */
export interface GetPacketCaptureResult {
    /**
     * Number of bytes captured per packet, the remaining bytes are truncated. The default "0" means the entire packet is captured.
     */
    readonly bytesToCapturePerPacket?: number;
    /**
     * The start time of the packet capture session.
     */
    readonly captureStartTime: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * List of network interfaces to capture on.
     */
    readonly networkInterfaces?: string[];
    /**
     * The provisioning state of the packet capture session resource.
     */
    readonly provisioningState: string;
    /**
     * The reason the current packet capture session state.
     */
    readonly reason: string;
    /**
     * The status of the packet capture session.
     */
    readonly status: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Maximum duration of the capture session in seconds.
     */
    readonly timeLimitInSeconds?: number;
    /**
     * Maximum size of the capture output.
     */
    readonly totalBytesPerSession?: number;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets information about the specified packet capture session.
 * Azure REST API version: 2023-06-01.
 */
export function getPacketCaptureOutput(args: GetPacketCaptureOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPacketCaptureResult> {
    return pulumi.output(args).apply((a: any) => getPacketCapture(a, opts))
}

export interface GetPacketCaptureOutputArgs {
    /**
     * The name of the packet capture session.
     */
    packetCaptureName: pulumi.Input<string>;
    /**
     * The name of the packet core control plane.
     */
    packetCoreControlPlaneName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
