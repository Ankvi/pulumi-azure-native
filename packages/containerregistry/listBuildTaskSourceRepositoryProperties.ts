import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the source control properties for a build task.
 * Azure REST API version: 2018-02-01-preview.
 */
export function listBuildTaskSourceRepositoryProperties(args: ListBuildTaskSourceRepositoryPropertiesArgs, opts?: pulumi.InvokeOptions): Promise<ListBuildTaskSourceRepositoryPropertiesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerregistry:listBuildTaskSourceRepositoryProperties", {
        "buildTaskName": args.buildTaskName,
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListBuildTaskSourceRepositoryPropertiesArgs {
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
 * The properties of the source code repository.
 */
export interface ListBuildTaskSourceRepositoryPropertiesResult {
    /**
     * The value of this property indicates whether the source control commit trigger is enabled or not.
     */
    readonly isCommitTriggerEnabled?: boolean;
    /**
     * The full URL to the source code repository
     */
    readonly repositoryUrl: string;
    /**
     * The authorization properties for accessing the source code repository.
     */
    readonly sourceControlAuthProperties?: types.outputs.SourceControlAuthInfoResponse;
    /**
     * The type of source control service.
     */
    readonly sourceControlType: string;
}
/**
 * Get the source control properties for a build task.
 * Azure REST API version: 2018-02-01-preview.
 */
export function listBuildTaskSourceRepositoryPropertiesOutput(args: ListBuildTaskSourceRepositoryPropertiesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListBuildTaskSourceRepositoryPropertiesResult> {
    return pulumi.output(args).apply((a: any) => listBuildTaskSourceRepositoryProperties(a, opts))
}

export interface ListBuildTaskSourceRepositoryPropertiesOutputArgs {
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
