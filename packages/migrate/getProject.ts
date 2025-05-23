import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the project with the specified name.
 *
 * Uses Azure REST API version 2019-10-01.
 */
export function getProject(args: GetProjectArgs, opts?: pulumi.InvokeOptions): Promise<GetProjectResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate:getProject", {
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetProjectArgs {
    /**
     * Name of the Azure Migrate project.
     */
    projectName: string;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    resourceGroupName: string;
}

/**
 * Azure Migrate Project.
 */
export interface GetProjectResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * For optimistic concurrency control.
     */
    readonly eTag?: string;
    /**
     * Path reference to this project /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}
     */
    readonly id: string;
    /**
     * Azure location in which project is created.
     */
    readonly location?: string;
    /**
     * Name of the project.
     */
    readonly name: string;
    /**
     * Properties of the project.
     */
    readonly properties: types.outputs.ProjectPropertiesResponse;
    /**
     * Tags provided by Azure Tagging service.
     */
    readonly tags?: any;
    /**
     * Type of the object = [Microsoft.Migrate/assessmentProjects].
     */
    readonly type: string;
}
/**
 * Get the project with the specified name.
 *
 * Uses Azure REST API version 2019-10-01.
 */
export function getProjectOutput(args: GetProjectOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetProjectResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:migrate:getProject", {
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetProjectOutputArgs {
    /**
     * Name of the Azure Migrate project.
     */
    projectName: pulumi.Input<string>;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    resourceGroupName: pulumi.Input<string>;
}