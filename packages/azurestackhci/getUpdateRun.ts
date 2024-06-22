import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the Update run for a specified update
 * Azure REST API version: 2023-03-01.
 *
 * Other available API versions: 2022-12-15-preview, 2023-06-01, 2023-08-01, 2023-08-01-preview, 2023-11-01-preview, 2024-01-01, 2024-02-15-preview, 2024-04-01.
 */
export function getUpdateRun(args: GetUpdateRunArgs, opts?: pulumi.InvokeOptions): Promise<GetUpdateRunResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestackhci:getUpdateRun", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
        "updateName": args.updateName,
        "updateRunName": args.updateRunName,
    }, opts);
}

export interface GetUpdateRunArgs {
    /**
     * The name of the cluster.
     */
    clusterName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the Update
     */
    updateName: string;
    /**
     * The name of the Update Run
     */
    updateRunName: string;
}

/**
 * Details of an Update run
 */
export interface GetUpdateRunResult {
    /**
     * More detailed description of the step.
     */
    readonly description?: string;
    /**
     * Duration of the update run.
     */
    readonly duration?: string;
    /**
     * When the step reached a terminal state.
     */
    readonly endTimeUtc?: string;
    /**
     * Error message, specified if the step is in a failed state.
     */
    readonly errorMessage?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Timestamp of the most recently completed step in the update run.
     */
    readonly lastUpdatedTime?: string;
    /**
     * Completion time of this step or the last completed sub-step.
     */
    readonly lastUpdatedTimeUtc?: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Provisioning state of the UpdateRuns proxy resource.
     */
    readonly provisioningState: string;
    /**
     * When the step started, or empty if it has not started executing.
     */
    readonly startTimeUtc?: string;
    /**
     * State of the update run.
     */
    readonly state?: string;
    /**
     * Status of the step, bubbled up from the ECE action plan for installation attempts. Values are: 'Success', 'Error', 'InProgress', and 'Unknown status'.
     */
    readonly status?: string;
    /**
     * Recursive model for child steps of this step.
     */
    readonly steps?: types.outputs.StepResponse[];
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Timestamp of the update run was started.
     */
    readonly timeStarted?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get the Update run for a specified update
 * Azure REST API version: 2023-03-01.
 *
 * Other available API versions: 2022-12-15-preview, 2023-06-01, 2023-08-01, 2023-08-01-preview, 2023-11-01-preview, 2024-01-01, 2024-02-15-preview, 2024-04-01.
 */
export function getUpdateRunOutput(args: GetUpdateRunOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetUpdateRunResult> {
    return pulumi.output(args).apply((a: any) => getUpdateRun(a, opts))
}

export interface GetUpdateRunOutputArgs {
    /**
     * The name of the cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Update
     */
    updateName: pulumi.Input<string>;
    /**
     * The name of the Update Run
     */
    updateRunName: pulumi.Input<string>;
}