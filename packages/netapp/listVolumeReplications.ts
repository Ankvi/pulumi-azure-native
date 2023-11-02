import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List all replications for a specified volume
 * Azure REST API version: 2022-11-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-05-01.
 */
export function listVolumeReplications(args: ListVolumeReplicationsArgs, opts?: pulumi.InvokeOptions): Promise<ListVolumeReplicationsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:netapp:listVolumeReplications", {
        "accountName": args.accountName,
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
        "volumeName": args.volumeName,
    }, opts);
}

export interface ListVolumeReplicationsArgs {
    /**
     * The name of the NetApp account
     */
    accountName: string;
    /**
     * The name of the capacity pool
     */
    poolName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the volume
     */
    volumeName: string;
}

/**
 * List Replications
 */
export interface ListVolumeReplicationsResult {
    /**
     * A list of replications
     */
    readonly value?: types.outputs.ReplicationResponse[];
}
/**
 * List all replications for a specified volume
 * Azure REST API version: 2022-11-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-05-01.
 */
export function listVolumeReplicationsOutput(args: ListVolumeReplicationsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListVolumeReplicationsResult> {
    return pulumi.output(args).apply((a: any) => listVolumeReplications(a, opts))
}

export interface ListVolumeReplicationsOutputArgs {
    /**
     * The name of the NetApp account
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the capacity pool
     */
    poolName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the volume
     */
    volumeName: pulumi.Input<string>;
}
