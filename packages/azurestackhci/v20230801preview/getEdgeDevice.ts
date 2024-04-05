import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a EdgeDevice
 */
export function getEdgeDevice(args: GetEdgeDeviceArgs, opts?: pulumi.InvokeOptions): Promise<GetEdgeDeviceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestackhci/v20230801preview:getEdgeDevice", {
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
 */
export function getEdgeDeviceOutput(args: GetEdgeDeviceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEdgeDeviceResult> {
    return pulumi.output(args).apply((a: any) => getEdgeDevice(a, opts))
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