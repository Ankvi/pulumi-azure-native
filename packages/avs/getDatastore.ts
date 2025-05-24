import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Datastore
 *
 * Uses Azure REST API version 2023-09-01.
 *
 * Other available API versions: 2022-05-01, 2023-03-01, 2024-09-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native avs [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 *
 * Uses Azure REST API version 2023-09-01.
 *
 * Other available API versions: 2022-05-01, 2023-03-01, 2024-09-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native avs [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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