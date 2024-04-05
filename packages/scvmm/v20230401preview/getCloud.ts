import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Implements Cloud GET method.
 */
export function getCloud(args: GetCloudArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:scvmm/v20230401preview:getCloud", {
        "cloudName": args.cloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCloudArgs {
    /**
     * Name of the Cloud.
     */
    cloudName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * The Clouds resource definition.
 */
export interface GetCloudResult {
    /**
     * Capacity of the cloud.
     */
    readonly cloudCapacity: types.outputs.CloudCapacityResponse;
    /**
     * Name of the cloud in VMMServer.
     */
    readonly cloudName: string;
    /**
     * The extended location.
     */
    readonly extendedLocation: types.outputs.ExtendedLocationResponse;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Gets or sets the inventory Item ID for the resource.
     */
    readonly inventoryItemId?: string;
    /**
     * Gets or sets the location.
     */
    readonly location: string;
    /**
     * Resource Name
     */
    readonly name: string;
    /**
     * Gets or sets the provisioning state.
     */
    readonly provisioningState: string;
    /**
     * List of QoS policies available for the cloud.
     */
    readonly storageQoSPolicies: types.outputs.StorageQoSPolicyResponse[];
    /**
     * The system data.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource Type
     */
    readonly type: string;
    /**
     * Unique ID of the cloud.
     */
    readonly uuid?: string;
    /**
     * ARM Id of the vmmServer resource in which this resource resides.
     */
    readonly vmmServerId?: string;
}
/**
 * Implements Cloud GET method.
 */
export function getCloudOutput(args: GetCloudOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCloudResult> {
    return pulumi.output(args).apply((a: any) => getCloud(a, opts))
}

export interface GetCloudOutputArgs {
    /**
     * Name of the Cloud.
     */
    cloudName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}