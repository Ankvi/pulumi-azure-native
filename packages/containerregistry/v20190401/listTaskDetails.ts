import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Returns a task with extended information that includes all secrets.
 */
export function listTaskDetails(args: ListTaskDetailsArgs, opts?: pulumi.InvokeOptions): Promise<ListTaskDetailsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerregistry/v20190401:listTaskDetails", {
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
    readonly agentConfiguration?: types.outputs.containerregistry.v20190401.AgentPropertiesResponse;
    /**
     * The creation date of task.
     */
    readonly creationDate: string;
    /**
     * The properties that describes a set of credentials that will be used when this run is invoked.
     */
    readonly credentials?: types.outputs.containerregistry.v20190401.CredentialsResponse;
    /**
     * The resource ID.
     */
    readonly id: string;
    /**
     * Identity for the resource.
     */
    readonly identity?: types.outputs.containerregistry.v20190401.IdentityPropertiesResponse;
    /**
     * The location of the resource. This cannot be changed after the resource is created.
     */
    readonly location: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The platform properties against which the run has to happen.
     */
    readonly platform: types.outputs.containerregistry.v20190401.PlatformPropertiesResponse;
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
    readonly step: types.outputs.containerregistry.v20190401.DockerBuildStepResponse | types.outputs.containerregistry.v20190401.EncodedTaskStepResponse | types.outputs.containerregistry.v20190401.FileTaskStepResponse;
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
    readonly trigger?: types.outputs.containerregistry.v20190401.TriggerPropertiesResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Returns a task with extended information that includes all secrets.
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
