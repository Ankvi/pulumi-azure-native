import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the detailed information for a given task run that includes all secrets.
 * Azure REST API version: 2019-06-01-preview.
 */
export function listTaskRunDetails(args: ListTaskRunDetailsArgs, opts?: pulumi.InvokeOptions): Promise<ListTaskRunDetailsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerregistry:listTaskRunDetails", {
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
        "taskRunName": args.taskRunName,
    }, opts);
}

export interface ListTaskRunDetailsArgs {
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
export interface ListTaskRunDetailsResult {
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
    readonly identity?: types.outputs.containerregistry.IdentityPropertiesResponse;
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
    readonly runRequest?: types.outputs.containerregistry.DockerBuildRequestResponse | types.outputs.containerregistry.EncodedTaskRunRequestResponse | types.outputs.containerregistry.FileTaskRunRequestResponse | types.outputs.containerregistry.TaskRunRequestResponse;
    /**
     * The result of this task run
     */
    readonly runResult: types.outputs.containerregistry.RunResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.containerregistry.SystemDataResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Gets the detailed information for a given task run that includes all secrets.
 * Azure REST API version: 2019-06-01-preview.
 */
export function listTaskRunDetailsOutput(args: ListTaskRunDetailsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListTaskRunDetailsResult> {
    return pulumi.output(args).apply((a: any) => listTaskRunDetails(a, opts))
}

export interface ListTaskRunDetailsOutputArgs {
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
