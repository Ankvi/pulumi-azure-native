import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A datastore resource
 *
 * Uses Azure REST API version 2022-05-01.
 *
 * Other available API versions: 2023-03-01, 2023-09-01.
 */
export function getDatastore(args: GetDatastoreArgs, opts?: pulumi.InvokeOptions): Promise<GetDatastoreResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:avs:getDatastore", {
        "clusterName": args.clusterName,
        "datastoreName": args.datastoreName,
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDatastoreArgs {
    /**
     * Name of the cluster in the private cloud
     */
    clusterName: string;
    /**
     * Name of the datastore in the private cloud cluster
     */
    datastoreName: string;
    /**
     * Name of the private cloud
     */
    privateCloudName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A datastore resource
 */
export interface GetDatastoreResult {
    /**
     * An iSCSI volume
     */
    readonly diskPoolVolume?: types.outputs.DiskPoolVolumeResponse;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * An Azure NetApp Files volume
     */
    readonly netAppVolume?: types.outputs.NetAppVolumeResponse;
    /**
     * The state of the datastore provisioning
     */
    readonly provisioningState: string;
    /**
     * The operational status of the datastore
     */
    readonly status: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * A datastore resource
 *
 * Uses Azure REST API version 2022-05-01.
 *
 * Other available API versions: 2023-03-01, 2023-09-01.
 */
export function getDatastoreOutput(args: GetDatastoreOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDatastoreResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:avs:getDatastore", {
        "clusterName": args.clusterName,
        "datastoreName": args.datastoreName,
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDatastoreOutputArgs {
    /**
     * Name of the cluster in the private cloud
     */
    clusterName: pulumi.Input<string>;
    /**
     * Name of the datastore in the private cloud cluster
     */
    datastoreName: pulumi.Input<string>;
    /**
     * Name of the private cloud
     */
    privateCloudName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}