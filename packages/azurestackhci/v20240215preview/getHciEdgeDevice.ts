import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a EdgeDevice
 */
export function getHciEdgeDevice(args: GetHciEdgeDeviceArgs, opts?: pulumi.InvokeOptions): Promise<GetHciEdgeDeviceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestackhci/v20240215preview:getHciEdgeDevice", {
        "edgeDeviceName": args.edgeDeviceName,
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetHciEdgeDeviceArgs {
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
 * Arc-enabled edge device with HCI OS.
 */
export interface GetHciEdgeDeviceResult {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Edge device kind.
     * Expected value is 'HCI'.
     */
    readonly kind: "HCI";
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * properties for Arc-enabled edge device with HCI OS.
     */
    readonly properties: types.outputs.HciEdgeDevicePropertiesResponse;
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
export function getHciEdgeDeviceOutput(args: GetHciEdgeDeviceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetHciEdgeDeviceResult> {
    return pulumi.output(args).apply((a: any) => getHciEdgeDevice(a, opts))
}

export interface GetHciEdgeDeviceOutputArgs {
    /**
     * Name of Device
     */
    edgeDeviceName: pulumi.Input<string>;
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: pulumi.Input<string>;
}