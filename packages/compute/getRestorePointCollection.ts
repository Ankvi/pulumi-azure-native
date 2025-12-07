import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The operation to get the restore point collection.
 *
 * Uses Azure REST API version 2024-11-01.
 *
 * Other available API versions: 2022-08-01, 2022-11-01, 2023-03-01, 2023-07-01, 2023-09-01, 2024-03-01, 2024-07-01, 2025-04-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native compute [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getRestorePointCollection(args: GetRestorePointCollectionArgs, opts?: pulumi.InvokeOptions): Promise<GetRestorePointCollectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:compute:getRestorePointCollection", {
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
        "restorePointCollectionName": args.restorePointCollectionName,
    }, opts);
}

export interface GetRestorePointCollectionArgs {
    /**
     * The expand expression to apply on the operation. If expand=restorePoints, server will return all contained restore points in the restorePointCollection.
     */
    expand?: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the restore point collection.
     */
    restorePointCollectionName: string;
}

/**
 * Create or update Restore Point collection parameters.
 */
export interface GetRestorePointCollectionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
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
     * The provisioning state of the restore point collection.
     */
    readonly provisioningState: string;
    /**
     * The unique id of the restore point collection.
     */
    readonly restorePointCollectionId: string;
    /**
     * A list containing all restore points created under this restore point collection.
     */
    readonly restorePoints: types.outputs.RestorePointResponse[];
    /**
     * The properties of the source resource that this restore point collection is created from.
     */
    readonly source?: types.outputs.RestorePointCollectionSourcePropertiesResponse;
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
 * The operation to get the restore point collection.
 *
 * Uses Azure REST API version 2024-11-01.
 *
 * Other available API versions: 2022-08-01, 2022-11-01, 2023-03-01, 2023-07-01, 2023-09-01, 2024-03-01, 2024-07-01, 2025-04-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native compute [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getRestorePointCollectionOutput(args: GetRestorePointCollectionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetRestorePointCollectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:compute:getRestorePointCollection", {
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
        "restorePointCollectionName": args.restorePointCollectionName,
    }, opts);
}

export interface GetRestorePointCollectionOutputArgs {
    /**
     * The expand expression to apply on the operation. If expand=restorePoints, server will return all contained restore points in the restorePointCollection.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the restore point collection.
     */
    restorePointCollectionName: pulumi.Input<string>;
}