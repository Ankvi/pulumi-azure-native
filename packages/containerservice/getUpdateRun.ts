import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a UpdateRun
 *
 * Uses Azure REST API version 2023-03-15-preview.
 *
 * Other available API versions: 2023-06-15-preview, 2023-08-15-preview, 2023-10-15, 2024-02-02-preview, 2024-04-01, 2024-05-02-preview.
 */
export function getUpdateRun(args: GetUpdateRunArgs, opts?: pulumi.InvokeOptions): Promise<GetUpdateRunResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerservice:getUpdateRun", {
        "fleetName": args.fleetName,
        "resourceGroupName": args.resourceGroupName,
        "updateRunName": args.updateRunName,
    }, opts);
}

export interface GetUpdateRunArgs {
    /**
     * The name of the Fleet resource.
     */
    fleetName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the UpdateRun resource.
     */
    updateRunName: string;
}

/**
 * A multi-stage process to perform update operations across members of a Fleet.
 */
export interface GetUpdateRunResult {
    /**
     * If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
     */
    readonly eTag: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The update to be applied to all clusters in the UpdateRun. The managedClusterUpdate can be modified until the run is started.
     */
    readonly managedClusterUpdate: types.outputs.ManagedClusterUpdateResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the UpdateRun resource.
     */
    readonly provisioningState: string;
    /**
     * The status of the UpdateRun.
     */
    readonly status: types.outputs.UpdateRunStatusResponse;
    /**
     * The strategy defines the order in which the clusters will be updated.
     * If not set, all members will be updated sequentially. The UpdateRun status will show a single UpdateStage and a single UpdateGroup targeting all members.
     * The strategy of the UpdateRun can be modified until the run is started.
     */
    readonly strategy?: types.outputs.UpdateRunStrategyResponse;
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
 * Get a UpdateRun
 *
 * Uses Azure REST API version 2023-03-15-preview.
 *
 * Other available API versions: 2023-06-15-preview, 2023-08-15-preview, 2023-10-15, 2024-02-02-preview, 2024-04-01, 2024-05-02-preview.
 */
export function getUpdateRunOutput(args: GetUpdateRunOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetUpdateRunResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:containerservice:getUpdateRun", {
        "fleetName": args.fleetName,
        "resourceGroupName": args.resourceGroupName,
        "updateRunName": args.updateRunName,
    }, opts);
}

export interface GetUpdateRunOutputArgs {
    /**
     * The name of the Fleet resource.
     */
    fleetName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the UpdateRun resource.
     */
    updateRunName: pulumi.Input<string>;
}