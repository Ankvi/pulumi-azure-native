import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The operation to get the restore point.
 *
 * Uses Azure REST API version 2024-11-01.
 *
 * Other available API versions: 2022-08-01, 2022-11-01, 2023-03-01, 2023-07-01, 2023-09-01, 2024-03-01, 2024-07-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native compute [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getRestorePoint(args: GetRestorePointArgs, opts?: pulumi.InvokeOptions): Promise<GetRestorePointResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:compute:getRestorePoint", {
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
        "restorePointCollectionName": args.restorePointCollectionName,
        "restorePointName": args.restorePointName,
    }, opts);
}

export interface GetRestorePointArgs {
    /**
     * The expand expression to apply on the operation. 'InstanceView' retrieves information about the run-time state of a restore point.
     */
    expand?: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the restore point collection.
     */
    restorePointCollectionName: string;
    /**
     * The name of the restore point.
     */
    restorePointName: string;
}

/**
 * Restore Point details.
 */
export interface GetRestorePointResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * ConsistencyMode of the RestorePoint. Can be specified in the input while creating a restore point. For now, only CrashConsistent is accepted as a valid input. Please refer to https://aka.ms/RestorePoints for more details.
     */
    readonly consistencyMode?: string;
    /**
     * List of disk resource ids that the customer wishes to exclude from the restore point. If no disks are specified, all disks will be included.
     */
    readonly excludeDisks?: types.outputs.ApiEntityReferenceResponse[];
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * The restore point instance view.
     */
    readonly instanceView: types.outputs.RestorePointInstanceViewResponse;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Gets the provisioning state of the restore point.
     */
    readonly provisioningState: string;
    /**
     * Gets the details of the VM captured at the time of the restore point creation.
     */
    readonly sourceMetadata?: types.outputs.RestorePointSourceMetadataResponse;
    /**
     * Resource Id of the source restore point from which a copy needs to be created.
     */
    readonly sourceRestorePoint?: types.outputs.ApiEntityReferenceResponse;
    /**
     * Gets the creation time of the restore point.
     */
    readonly timeCreated?: string;
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * The operation to get the restore point.
 *
 * Uses Azure REST API version 2024-11-01.
 *
 * Other available API versions: 2022-08-01, 2022-11-01, 2023-03-01, 2023-07-01, 2023-09-01, 2024-03-01, 2024-07-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native compute [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getRestorePointOutput(args: GetRestorePointOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetRestorePointResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:compute:getRestorePoint", {
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
        "restorePointCollectionName": args.restorePointCollectionName,
        "restorePointName": args.restorePointName,
    }, opts);
}

export interface GetRestorePointOutputArgs {
    /**
     * The expand expression to apply on the operation. 'InstanceView' retrieves information about the run-time state of a restore point.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the restore point collection.
     */
    restorePointCollectionName: pulumi.Input<string>;
    /**
     * The name of the restore point.
     */
    restorePointName: pulumi.Input<string>;
}