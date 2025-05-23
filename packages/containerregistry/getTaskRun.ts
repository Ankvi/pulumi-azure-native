import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the detailed information for a given task run.
 *
 * Uses Azure REST API version 2019-06-01-preview.
 *
 * Other available API versions: 2025-03-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native containerregistry [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getTaskRun(args: GetTaskRunArgs, opts?: pulumi.InvokeOptions): Promise<GetTaskRunResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerregistry:getTaskRun", {
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
        "taskRunName": args.taskRunName,
    }, opts);
}

export interface GetTaskRunArgs {
    /**
     * The name of the container registry.
     */
    registryName: string;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    resourceGroupName: string;
    /**
     * The name of the task run.
     */
    taskRunName: string;
}

/**
 * The task run that has the ARM resource and properties. 
 * The task run will have the information of request and result of a run.
 */
export interface GetTaskRunResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * How the run should be forced to rerun even if the run request configuration has not changed
     */
    readonly forceUpdateTag?: string;
    /**
     * The resource ID.
     */
    readonly id: string;
    /**
     * Identity for the resource.
     */
    readonly identity?: types.outputs.IdentityPropertiesResponse;
    /**
     * The location of the resource
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The provisioning state of this task run
     */
    readonly provisioningState: string;
    /**
     * The request (parameters) for the run
     */
    readonly runRequest?: types.outputs.DockerBuildRequestResponse | types.outputs.EncodedTaskRunRequestResponse | types.outputs.FileTaskRunRequestResponse | types.outputs.TaskRunRequestResponse;
    /**
     * The result of this task run
     */
    readonly runResult: types.outputs.RunResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Gets the detailed information for a given task run.
 *
 * Uses Azure REST API version 2019-06-01-preview.
 *
 * Other available API versions: 2025-03-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native containerregistry [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getTaskRunOutput(args: GetTaskRunOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetTaskRunResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:containerregistry:getTaskRun", {
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
        "taskRunName": args.taskRunName,
    }, opts);
}

export interface GetTaskRunOutputArgs {
    /**
     * The name of the container registry.
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the task run.
     */
    taskRunName: pulumi.Input<string>;
}