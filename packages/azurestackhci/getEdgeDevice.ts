import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a EdgeDevice
 * Azure REST API version: 2023-08-01-preview.
 *
 * Other available API versions: 2023-11-01-preview, 2024-01-01, 2024-02-15-preview, 2024-04-01, 2024-09-01-preview, 2024-12-01-preview.
 */
export function getEdgeDevice(args: GetEdgeDeviceArgs, opts?: pulumi.InvokeOptions): Promise<GetEdgeDeviceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestackhci:getEdgeDevice", {
        "edgeDeviceName": args.edgeDeviceName,
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetEdgeDeviceArgs {
    /**
     * Name of Device
     */
    edgeDeviceName: string;
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: string;
}

/**
 * Edge device resource
 */
export interface GetEdgeDeviceResult {
    /**
     * Device Configuration
     */
    readonly deviceConfiguration: types.outputs.DeviceConfigurationResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Provisioning state of edgeDevice resource
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a EdgeDevice
 * Azure REST API version: 2023-08-01-preview.
 *
 * Other available API versions: 2023-11-01-preview, 2024-01-01, 2024-02-15-preview, 2024-04-01, 2024-09-01-preview, 2024-12-01-preview.
 */
export function getEdgeDeviceOutput(args: GetEdgeDeviceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetEdgeDeviceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azurestackhci:getEdgeDevice", {
        "edgeDeviceName": args.edgeDeviceName,
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetEdgeDeviceOutputArgs {
    /**
     * Name of Device
     */
    edgeDeviceName: pulumi.Input<string>;
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: pulumi.Input<string>;
}