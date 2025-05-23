import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified packet capture session.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2023-06-01, 2023-09-01, 2024-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native mobilenetwork [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
     * The list of output files of a packet capture session.
     */
    readonly outputFiles: string[];
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
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2023-06-01, 2023-09-01, 2024-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native mobilenetwork [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getPacketCaptureOutput(args: GetPacketCaptureOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPacketCaptureResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:mobilenetwork:getPacketCapture", {
        "packetCaptureName": args.packetCaptureName,
        "packetCoreControlPlaneName": args.packetCoreControlPlaneName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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