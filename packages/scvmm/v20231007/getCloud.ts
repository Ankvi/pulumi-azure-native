import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Implements Cloud GET method.
 */
export function getCloud(args: GetCloudArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:scvmm/v20231007:getCloud", {
        "cloudResourceName": args.cloudResourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCloudArgs {
    /**
     * Name of the Cloud.
     */
    cloudResourceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
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
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Gets or sets the inventory Item ID for the resource.
     */
    readonly inventoryItemId?: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * List of QoS policies available for the cloud.
     */
    readonly storageQoSPolicies: types.outputs.StorageQoSPolicyResponse[];
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
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
    cloudResourceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}