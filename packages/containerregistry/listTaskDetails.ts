import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns a task with extended information that includes all secrets.
 * Azure REST API version: 2019-06-01-preview.
 */
export function listTaskDetails(args: ListTaskDetailsArgs, opts?: pulumi.InvokeOptions): Promise<ListTaskDetailsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerregistry:listTaskDetails", {
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
        "taskName": args.taskName,
    }, opts);
}

export interface ListTaskDetailsArgs {
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
export interface ListTaskDetailsResult {
    /**
     * The machine configuration of the run agent.
     */
    readonly agentConfiguration?: types.outputs.containerregistry.AgentPropertiesResponse;
    /**
     * The dedicated agent pool for the task.
     */
    readonly agentPoolName?: string;
    /**
     * The creation date of task.
     */
    readonly creationDate: string;
    /**
     * The properties that describes a set of credentials that will be used when this run is invoked.
     */
    readonly credentials?: types.outputs.containerregistry.CredentialsResponse;
    /**
     * The resource ID.
     */
    readonly id: string;
    /**
     * Identity for the resource.
     */
    readonly identity?: types.outputs.containerregistry.IdentityPropertiesResponse;
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
    readonly platform?: types.outputs.containerregistry.PlatformPropertiesResponse;
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
    readonly step?: types.outputs.containerregistry.DockerBuildStepResponse | types.outputs.containerregistry.EncodedTaskStepResponse | types.outputs.containerregistry.FileTaskStepResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.containerregistry.SystemDataResponse;
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
    readonly trigger?: types.outputs.containerregistry.TriggerPropertiesResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Returns a task with extended information that includes all secrets.
 * Azure REST API version: 2019-06-01-preview.
 */
export function listTaskDetailsOutput(args: ListTaskDetailsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListTaskDetailsResult> {
    return pulumi.output(args).apply((a: any) => listTaskDetails(a, opts))
}

export interface ListTaskDetailsOutputArgs {
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
