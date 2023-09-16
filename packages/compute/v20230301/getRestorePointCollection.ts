import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * The operation to get the restore point collection.
 */
export function getRestorePointCollection(args: GetRestorePointCollectionArgs, opts?: pulumi.InvokeOptions): Promise<GetRestorePointCollectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:compute/v20230301:getRestorePointCollection", {
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
     * The name of the resource group.
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
    readonly restorePoints: types.outputs.compute.v20230301.RestorePointResponse[];
    /**
     * The properties of the source resource that this restore point collection is created from.
     */
    readonly source?: types.outputs.compute.v20230301.RestorePointCollectionSourcePropertiesResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * The operation to get the restore point collection.
 */
export function getRestorePointCollectionOutput(args: GetRestorePointCollectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRestorePointCollectionResult> {
    return pulumi.output(args).apply((a: any) => getRestorePointCollection(a, opts))
}

export interface GetRestorePointCollectionOutputArgs {
    /**
     * The expand expression to apply on the operation. If expand=restorePoints, server will return all contained restore points in the restorePointCollection.
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
}
