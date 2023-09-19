import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the properties of the Data Box Edge/Data Box Gateway device.
 */
export function getDevice(args: GetDeviceArgs, opts?: pulumi.InvokeOptions): Promise<GetDeviceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:databoxedge/v20230701:getDevice", {
        "deviceName": args.deviceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDeviceArgs {
    /**
     * The device name.
     */
    deviceName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * The Data Box Edge/Gateway device.
 */
export interface GetDeviceResult {
    /**
     * Type of compute roles configured.
     */
    readonly configuredRoleTypes: string[];
    /**
     * The Data Box Edge/Gateway device culture.
     */
    readonly culture: string;
    /**
     * The status of the Data Box Edge/Gateway device.
     */
    readonly dataBoxEdgeDeviceStatus: string;
    /**
     * The details of data-residency related properties for this resource
     */
    readonly dataResidency?: types.outputs.DataResidencyResponse;
    /**
     * The Description of the Data Box Edge/Gateway device.
     */
    readonly description: string;
    /**
     * The device software version number of the device (eg: 1.2.18105.6).
     */
    readonly deviceHcsVersion: string;
    /**
     * The Data Box Edge/Gateway device local capacity in MB.
     */
    readonly deviceLocalCapacity: number;
    /**
     * The Data Box Edge/Gateway device model.
     */
    readonly deviceModel: string;
    /**
     * The Data Box Edge/Gateway device software version.
     */
    readonly deviceSoftwareVersion: string;
    /**
     * The type of the Data Box Edge/Gateway device.
     */
    readonly deviceType: string;
    /**
     * The details of Edge Profile for this resource
     */
    readonly edgeProfile: types.outputs.EdgeProfileResponse;
    /**
     * The etag for the devices.
     */
    readonly etag?: string;
    /**
     * The Data Box Edge/Gateway device name.
     */
    readonly friendlyName: string;
    /**
     * The path ID that uniquely identifies the object.
     */
    readonly id: string;
    /**
     * Msi identity of the resource
     */
    readonly identity?: types.outputs.ResourceIdentityResponse;
    /**
     * The kind of the device.
     */
    readonly kind: string;
    /**
     * Kubernetes Workload Profile
     */
    readonly kubernetesWorkloadProfile: string;
    /**
     * The location of the device. This is a supported and registered Azure geographical region (for example, West US, East US, or Southeast Asia). The geographical region of a device cannot be changed once it is created, but if an identical geographical region is specified on update, the request will succeed.
     */
    readonly location: string;
    /**
     * The description of the Data Box Edge/Gateway device model.
     */
    readonly modelDescription: string;
    /**
     * The object name.
     */
    readonly name: string;
    /**
     * The number of nodes in the cluster.
     */
    readonly nodeCount: number;
    /**
     * The details of the move operation on this resource.
     */
    readonly resourceMoveDetails: types.outputs.ResourceMoveDetailsResponse;
    /**
     * The Serial Number of Data Box Edge/Gateway device.
     */
    readonly serialNumber: string;
    /**
     * The SKU type.
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * DataBoxEdge Resource
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The list of tags that describe the device. These tags can be used to view and group this device (across resource groups).
     */
    readonly tags?: {[key: string]: string};
    /**
     * The Data Box Edge/Gateway device timezone.
     */
    readonly timeZone: string;
    /**
     * The hierarchical type of the object.
     */
    readonly type: string;
}
/**
 * Gets the properties of the Data Box Edge/Data Box Gateway device.
 */
export function getDeviceOutput(args: GetDeviceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDeviceResult> {
    return pulumi.output(args).apply((a: any) => getDevice(a, opts))
}

export interface GetDeviceOutputArgs {
    /**
     * The device name.
     */
    deviceName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}
