import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a Job Definition resource.
 */
export function getJobDefinition(args: GetJobDefinitionArgs, opts?: pulumi.InvokeOptions): Promise<GetJobDefinitionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:storagemover/v20231001:getJobDefinition", {
        "jobDefinitionName": args.jobDefinitionName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
        "storageMoverName": args.storageMoverName,
    }, opts);
}

export interface GetJobDefinitionArgs {
    /**
     * The name of the Job Definition resource.
     */
    jobDefinitionName: string;
    /**
     * The name of the Project resource.
     */
    projectName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the Storage Mover resource.
     */
    storageMoverName: string;
}

/**
 * The Job Definition resource.
 */
export interface GetJobDefinitionResult {
    /**
     * Name of the Agent to assign for new Job Runs of this Job Definition.
     */
    readonly agentName?: string;
    /**
     * Fully qualified resource id of the Agent to assign for new Job Runs of this Job Definition.
     */
    readonly agentResourceId: string;
    /**
     * Strategy to use for copy.
     */
    readonly copyMode: string;
    /**
     * A description for the Job Definition.
     */
    readonly description?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the Job Run in a non-terminal state, if exists.
     */
    readonly latestJobRunName: string;
    /**
     * The fully qualified resource ID of the Job Run in a non-terminal state, if exists.
     */
    readonly latestJobRunResourceId: string;
    /**
     * The current status of the Job Run in a non-terminal state, if exists.
     */
    readonly latestJobRunStatus: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of this resource.
     */
    readonly provisioningState: string;
    /**
     * The name of the source Endpoint.
     */
    readonly sourceName: string;
    /**
     * Fully qualified resource ID of the source Endpoint.
     */
    readonly sourceResourceId: string;
    /**
     * The subpath to use when reading from the source Endpoint.
     */
    readonly sourceSubpath?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The name of the target Endpoint.
     */
    readonly targetName: string;
    /**
     * Fully qualified resource ID of the target Endpoint.
     */
    readonly targetResourceId: string;
    /**
     * The subpath to use when writing to the target Endpoint.
     */
    readonly targetSubpath?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets a Job Definition resource.
 */
export function getJobDefinitionOutput(args: GetJobDefinitionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetJobDefinitionResult> {
    return pulumi.output(args).apply((a: any) => getJobDefinition(a, opts))
}

export interface GetJobDefinitionOutputArgs {
    /**
     * The name of the Job Definition resource.
     */
    jobDefinitionName: pulumi.Input<string>;
    /**
     * The name of the Project resource.
     */
    projectName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Storage Mover resource.
     */
    storageMoverName: pulumi.Input<string>;
}
