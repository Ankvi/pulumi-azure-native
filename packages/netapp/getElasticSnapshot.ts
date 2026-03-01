import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a ElasticSnapshot
 *
 * Uses Azure REST API version 2025-09-01-preview.
 */
export function getElasticSnapshot(args: GetElasticSnapshotArgs, opts?: pulumi.InvokeOptions): Promise<GetElasticSnapshotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:netapp:getElasticSnapshot", {
        "accountName": args.accountName,
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
        "snapshotName": args.snapshotName,
        "volumeName": args.volumeName,
    }, opts);
}

export interface GetElasticSnapshotArgs {
    /**
     * The name of the ElasticAccount
     */
    accountName: string;
    /**
     * The name of the ElasticCapacityPool
     */
    poolName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the ElasticSnapshot
     */
    snapshotName: string;
    /**
     * The name of the ElasticVolume
     */
    volumeName: string;
}

/**
 * NetApp Elastic Snapshot under an Elastic Volume
 */
export interface GetElasticSnapshotResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.ElasticSnapshotPropertiesResponse;
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
 * Get a ElasticSnapshot
 *
 * Uses Azure REST API version 2025-09-01-preview.
 */
export function getElasticSnapshotOutput(args: GetElasticSnapshotOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetElasticSnapshotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:netapp:getElasticSnapshot", {
        "accountName": args.accountName,
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
        "snapshotName": args.snapshotName,
        "volumeName": args.volumeName,
    }, opts);
}

export interface GetElasticSnapshotOutputArgs {
    /**
     * The name of the ElasticAccount
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the ElasticCapacityPool
     */
    poolName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the ElasticSnapshot
     */
    snapshotName: pulumi.Input<string>;
    /**
     * The name of the ElasticVolume
     */
    volumeName: pulumi.Input<string>;
}