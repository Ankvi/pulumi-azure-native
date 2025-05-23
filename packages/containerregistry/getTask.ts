import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the properties of a specified task.
 *
 * Uses Azure REST API version 2019-06-01-preview.
 *
 * Other available API versions: 2025-03-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native containerregistry [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getTask(args: GetTaskArgs, opts?: pulumi.InvokeOptions): Promise<GetTaskResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerregistry:getTask", {
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
        "taskName": args.taskName,
    }, opts);
}

export interface GetTaskArgs {
    /**
     * The name of the container registry.
     */
    registryName: string;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    resourceGroupName: string;
    /**
     * The name of the container registry task.
     */
    taskName: string;
}

/**
 * The task that has the ARM resource and task properties. 
 * The task will have all information to schedule a run against it.
 */
export interface GetTaskResult {
    /**
     * The machine configuration of the run agent.
     */
    readonly agentConfiguration?: types.outputs.AgentPropertiesResponse;
    /**
     * The dedicated agent pool for the task.
     */
    readonly agentPoolName?: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The creation date of task.
     */
    readonly creationDate: string;
    /**
     * The properties that describes a set of credentials that will be used when this run is invoked.
     */
    readonly credentials?: types.outputs.CredentialsResponse;
    /**
     * The resource ID.
     */
    readonly id: string;
    /**
     * Identity for the resource.
     */
    readonly identity?: types.outputs.IdentityPropertiesResponse;
    /**
     * The value of this property indicates whether the task resource is system task or not.
     */
    readonly isSystemTask?: boolean;
    /**
     * The location of the resource. This cannot be changed after the resource is created.
     */
    readonly location: string;
    /**
     * The template that describes the repository and tag information for run log artifact.
     */
    readonly logTemplate?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The platform properties against which the run has to happen.
     */
    readonly platform?: types.outputs.PlatformPropertiesResponse;
    /**
     * The provisioning state of the task.
     */
    readonly provisioningState: string;
    /**
     * The current status of task.
     */
    readonly status?: string;
    /**
     * The properties of a task step.
     */
    readonly step?: types.outputs.DockerBuildStepResponse | types.outputs.EncodedTaskStepResponse | types.outputs.FileTaskStepResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Run timeout in seconds.
     */
    readonly timeout?: number;
    /**
     * The properties that describe all triggers for the task.
     */
    readonly trigger?: types.outputs.TriggerPropertiesResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Get the properties of a specified task.
 *
 * Uses Azure REST API version 2019-06-01-preview.
 *
 * Other available API versions: 2025-03-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native containerregistry [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getTaskOutput(args: GetTaskOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetTaskResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:containerregistry:getTask", {
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
        "taskName": args.taskName,
    }, opts);
}

export interface GetTaskOutputArgs {
    /**
     * The name of the container registry.
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the container registry task.
     */
    taskName: pulumi.Input<string>;
}