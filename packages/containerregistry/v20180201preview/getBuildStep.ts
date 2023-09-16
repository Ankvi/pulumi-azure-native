import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets the build step for a build task.
 */
export function getBuildStep(args: GetBuildStepArgs, opts?: pulumi.InvokeOptions): Promise<GetBuildStepResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerregistry/v20180201preview:getBuildStep", {
        "buildTaskName": args.buildTaskName,
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
        "stepName": args.stepName,
    }, opts);
}

export interface GetBuildStepArgs {
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
    /**
     * The name of a build step for a container registry build task.
     */
    stepName: string;
}

/**
 * Build step resource properties
 */
export interface GetBuildStepResult {
    /**
     * The resource ID.
     */
    readonly id: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The properties of a build step.
     */
    readonly properties: types.outputs.containerregistry.v20180201preview.DockerBuildStepResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Gets the build step for a build task.
 */
export function getBuildStepOutput(args: GetBuildStepOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBuildStepResult> {
    return pulumi.output(args).apply((a: any) => getBuildStep(a, opts))
}

export interface GetBuildStepOutputArgs {
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
    /**
     * The name of a build step for a container registry build task.
     */
    stepName: pulumi.Input<string>;
}
