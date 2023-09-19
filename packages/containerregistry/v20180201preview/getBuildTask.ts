import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the properties of a specified build task.
 */
export function getBuildTask(args: GetBuildTaskArgs, opts?: pulumi.InvokeOptions): Promise<GetBuildTaskResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerregistry/v20180201preview:getBuildTask", {
        "buildTaskName": args.buildTaskName,
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBuildTaskArgs {
    /**
     * The name of the container registry build task.
     */
    buildTaskName: string;
    /**
     * The name of the container registry.
     */
    registryName: string;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    resourceGroupName: string;
}

/**
 * The build task that has the resource properties and all build items. The build task will have all information to schedule a build against it.
 */
export interface GetBuildTaskResult {
    /**
     * The alternative updatable name for a build task.
     */
    readonly alias: string;
    /**
     * The creation date of build task.
     */
    readonly creationDate: string;
    /**
     * The resource ID.
     */
    readonly id: string;
    /**
     * The location of the resource. This cannot be changed after the resource is created.
     */
    readonly location: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The platform properties against which the build has to happen.
     */
    readonly platform: types.outputs.PlatformPropertiesResponse;
    /**
     * The provisioning state of the build task.
     */
    readonly provisioningState: string;
    /**
     * The properties that describes the source(code) for the build task.
     */
    readonly sourceRepository: types.outputs.SourceRepositoryPropertiesResponse;
    /**
     * The current status of build task.
     */
    readonly status?: string;
    /**
     * The tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Build timeout in seconds.
     */
    readonly timeout?: number;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Get the properties of a specified build task.
 */
export function getBuildTaskOutput(args: GetBuildTaskOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBuildTaskResult> {
    return pulumi.output(args).apply((a: any) => getBuildTask(a, opts))
}

export interface GetBuildTaskOutputArgs {
    /**
     * The name of the container registry build task.
     */
    buildTaskName: pulumi.Input<string>;
    /**
     * The name of the container registry.
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}
