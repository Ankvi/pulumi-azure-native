import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List the build arguments for a step including the secret arguments.
 */
export function listBuildStepBuildArguments(args: ListBuildStepBuildArgumentsArgs, opts?: pulumi.InvokeOptions): Promise<ListBuildStepBuildArgumentsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerregistry/v20180201preview:listBuildStepBuildArguments", {
        "buildTaskName": args.buildTaskName,
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
        "stepName": args.stepName,
    }, opts);
}

export interface ListBuildStepBuildArgumentsArgs {
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
 * The list of build arguments for a build step.
 */
export interface ListBuildStepBuildArgumentsResult {
    /**
     * The URI that can be used to request the next set of paged results.
     */
    readonly nextLink?: string;
    /**
     * The collection value.
     */
    readonly value?: types.outputs.BuildArgumentResponse[];
}
/**
 * List the build arguments for a step including the secret arguments.
 */
export function listBuildStepBuildArgumentsOutput(args: ListBuildStepBuildArgumentsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListBuildStepBuildArgumentsResult> {
    return pulumi.output(args).apply((a: any) => listBuildStepBuildArguments(a, opts))
}

export interface ListBuildStepBuildArgumentsOutputArgs {
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
