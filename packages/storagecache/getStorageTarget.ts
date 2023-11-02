import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns a Storage Target from a cache.
 * Azure REST API version: 2023-05-01.
 *
 * Other available API versions: 2019-11-01, 2021-03-01.
 */
export function getStorageTarget(args: GetStorageTargetArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageTargetResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storagecache:getStorageTarget", {
        "cacheName": args.cacheName,
        "resourceGroupName": args.resourceGroupName,
        "storageTargetName": args.storageTargetName,
    }, opts);
}

export interface GetStorageTargetArgs {
    /**
     * Name of cache. Length of name must not be greater than 80 and chars must be from the [-0-9a-zA-Z_] char class.
     */
    cacheName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of Storage Target.
     */
    storageTargetName: string;
}

/**
 * Type of the Storage Target.
 */
export interface GetStorageTargetResult {
    /**
     * The percentage of cache space allocated for this storage target
     */
    readonly allocationPercentage: number;
    /**
     * Properties when targetType is blobNfs.
     */
    readonly blobNfs?: types.outputs.BlobNfsTargetResponse;
    /**
     * Properties when targetType is clfs.
     */
    readonly clfs?: types.outputs.ClfsTargetResponse;
    /**
     * Resource ID of the Storage Target.
     */
    readonly id: string;
    /**
     * List of cache namespace junctions to target for namespace associations.
     */
    readonly junctions?: types.outputs.NamespaceJunctionResponse[];
    /**
     * Region name string.
     */
    readonly location: string;
    /**
     * Name of the Storage Target.
     */
    readonly name: string;
    /**
     * Properties when targetType is nfs3.
     */
    readonly nfs3?: types.outputs.Nfs3TargetResponse;
    /**
     * ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
     */
    readonly provisioningState: string;
    /**
     * Storage target operational state.
     */
    readonly state?: string;
    /**
     * The system meta data relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Type of the Storage Target.
     */
    readonly targetType: string;
    /**
     * Type of the Storage Target; Microsoft.StorageCache/Cache/StorageTarget
     */
    readonly type: string;
    /**
     * Properties when targetType is unknown.
     */
    readonly unknown?: types.outputs.UnknownTargetResponse;
}
/**
 * Returns a Storage Target from a cache.
 * Azure REST API version: 2023-05-01.
 *
 * Other available API versions: 2019-11-01, 2021-03-01.
 */
export function getStorageTargetOutput(args: GetStorageTargetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStorageTargetResult> {
    return pulumi.output(args).apply((a: any) => getStorageTarget(a, opts))
}

export interface GetStorageTargetOutputArgs {
    /**
     * Name of cache. Length of name must not be greater than 80 and chars must be from the [-0-9a-zA-Z_] char class.
     */
    cacheName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of Storage Target.
     */
    storageTargetName: pulumi.Input<string>;
}
