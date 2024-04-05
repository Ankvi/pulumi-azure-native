import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get properties of the provided volume.
 */
export function getVolume(args: GetVolumeArgs, opts?: pulumi.InvokeOptions): Promise<GetVolumeResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:networkcloud/v20231001preview:getVolume", {
        "resourceGroupName": args.resourceGroupName,
        "volumeName": args.volumeName,
    }, opts);
}

export interface GetVolumeArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the volume.
     */
    volumeName: string;
}

export interface GetVolumeResult {
    /**
     * The list of resource IDs that attach the volume. It may include virtual machines and Hybrid AKS clusters.
     */
    readonly attachedTo: string[];
    /**
     * The more detailed status of the volume.
     */
    readonly detailedStatus: string;
    /**
     * The descriptive message about the current detailed status.
     */
    readonly detailedStatusMessage: string;
    /**
     * The extended location of the cluster associated with the resource.
     */
    readonly extendedLocation: types.outputs.ExtendedLocationResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the volume.
     */
    readonly provisioningState: string;
    /**
     * The unique identifier of the volume.
     */
    readonly serialNumber: string;
    /**
     * The size of the allocation for this volume in Mebibytes.
     */
    readonly sizeMiB: number;
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
}
/**
 * Get properties of the provided volume.
 */
export function getVolumeOutput(args: GetVolumeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVolumeResult> {
    return pulumi.output(args).apply((a: any) => getVolume(a, opts))
}

export interface GetVolumeOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the volume.
     */
    volumeName: pulumi.Input<string>;
}