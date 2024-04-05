import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Datastore
 */
export function getDatastore(args: GetDatastoreArgs, opts?: pulumi.InvokeOptions): Promise<GetDatastoreResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:avs/v20230901:getDatastore", {
        "clusterName": args.clusterName,
        "datastoreName": args.datastoreName,
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDatastoreArgs {
    /**
     * Name of the cluster
     */
    clusterName: string;
    /**
     * Name of the datastore
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
     * An Elastic SAN volume
     */
    readonly elasticSanVolume?: types.outputs.ElasticSanVolumeResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
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
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a Datastore
 */
export function getDatastoreOutput(args: GetDatastoreOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatastoreResult> {
    return pulumi.output(args).apply((a: any) => getDatastore(a, opts))
}

export interface GetDatastoreOutputArgs {
    /**
     * Name of the cluster
     */
    clusterName: pulumi.Input<string>;
    /**
     * Name of the datastore
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