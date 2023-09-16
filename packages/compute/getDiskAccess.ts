import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about a disk access resource.
 * Azure REST API version: 2022-07-02.
 */
export function getDiskAccess(args: GetDiskAccessArgs, opts?: pulumi.InvokeOptions): Promise<GetDiskAccessResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:compute:getDiskAccess", {
        "diskAccessName": args.diskAccessName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDiskAccessArgs {
    /**
     * The name of the disk access resource that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
     */
    diskAccessName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * disk access resource.
 */
export interface GetDiskAccessResult {
    /**
     * The extended location where the disk access will be created. Extended location cannot be changed.
     */
    readonly extendedLocation?: types.outputs.compute.ExtendedLocationResponse;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * A readonly collection of private endpoint connections created on the disk. Currently only one endpoint connection is supported.
     */
    readonly privateEndpointConnections: types.outputs.compute.PrivateEndpointConnectionResponse[];
    /**
     * The disk access resource provisioning state.
     */
    readonly provisioningState: string;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * The time when the disk access was created.
     */
    readonly timeCreated: string;
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Gets information about a disk access resource.
 * Azure REST API version: 2022-07-02.
 */
export function getDiskAccessOutput(args: GetDiskAccessOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDiskAccessResult> {
    return pulumi.output(args).apply((a: any) => getDiskAccess(a, opts))
}

export interface GetDiskAccessOutputArgs {
    /**
     * The name of the disk access resource that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
     */
    diskAccessName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
