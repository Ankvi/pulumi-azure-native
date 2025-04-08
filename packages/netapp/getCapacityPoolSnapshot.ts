import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get details of the specified snapshot
 *
 * Uses Azure REST API version 2024-09-01.
 *
 * Other available API versions: 2022-11-01, 2022-11-01-preview, 2023-05-01, 2023-05-01-preview, 2023-07-01, 2023-07-01-preview, 2023-11-01, 2023-11-01-preview, 2024-01-01, 2024-03-01, 2024-03-01-preview, 2024-05-01, 2024-05-01-preview, 2024-07-01, 2024-07-01-preview, 2024-09-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native netapp [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getCapacityPoolSnapshot(args: GetCapacityPoolSnapshotArgs, opts?: pulumi.InvokeOptions): Promise<GetCapacityPoolSnapshotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:netapp:getCapacityPoolSnapshot", {
        "accountName": args.accountName,
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
        "snapshotName": args.snapshotName,
        "volumeName": args.volumeName,
    }, opts);
}

export interface GetCapacityPoolSnapshotArgs {
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
     * The name of the snapshot
     */
    snapshotName: string;
    /**
     * The name of the volume
     */
    volumeName: string;
}

/**
 * Snapshot of a Volume
 */
export interface GetCapacityPoolSnapshotResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The creation date of the snapshot
     */
    readonly created: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Azure lifecycle management
     */
    readonly provisioningState: string;
    /**
     * UUID v4 used to identify the Snapshot
     */
    readonly snapshotId: string;
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
 * Get details of the specified snapshot
 *
 * Uses Azure REST API version 2024-09-01.
 *
 * Other available API versions: 2022-11-01, 2022-11-01-preview, 2023-05-01, 2023-05-01-preview, 2023-07-01, 2023-07-01-preview, 2023-11-01, 2023-11-01-preview, 2024-01-01, 2024-03-01, 2024-03-01-preview, 2024-05-01, 2024-05-01-preview, 2024-07-01, 2024-07-01-preview, 2024-09-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native netapp [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getCapacityPoolSnapshotOutput(args: GetCapacityPoolSnapshotOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCapacityPoolSnapshotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:netapp:getCapacityPoolSnapshot", {
        "accountName": args.accountName,
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
        "snapshotName": args.snapshotName,
        "volumeName": args.volumeName,
    }, opts);
}

export interface GetCapacityPoolSnapshotOutputArgs {
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
     * The name of the snapshot
     */
    snapshotName: pulumi.Input<string>;
    /**
     * The name of the volume
     */
    volumeName: pulumi.Input<string>;
}