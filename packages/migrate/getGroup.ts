import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get information related to a specific group in the project. Returns a json object of type 'group' as specified in the models section.
 *
 * Uses Azure REST API version 2019-10-01.
 */
export function getGroup(args: GetGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate:getGroup", {
        "groupName": args.groupName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetGroupArgs {
    /**
     * Unique name of a group within a project.
     */
    groupName: string;
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
 * A group created in a Migration project.
 */
export interface GetGroupResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * For optimistic concurrency control.
     */
    readonly eTag?: string;
    /**
     * Path reference to this group. /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}
     */
    readonly id: string;
    /**
     * Name of the group.
     */
    readonly name: string;
    /**
     * Properties of the group.
     */
    readonly properties: types.outputs.GroupPropertiesResponse;
    /**
     * Type of the object = [Microsoft.Migrate/assessmentProjects/groups].
     */
    readonly type: string;
}
/**
 * Get information related to a specific group in the project. Returns a json object of type 'group' as specified in the models section.
 *
 * Uses Azure REST API version 2019-10-01.
 */
export function getGroupOutput(args: GetGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:migrate:getGroup", {
        "groupName": args.groupName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetGroupOutputArgs {
    /**
     * Unique name of a group within a project.
     */
    groupName: pulumi.Input<string>;
    /**
     * Name of the Azure Migrate project.
     */
    projectName: pulumi.Input<string>;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    resourceGroupName: pulumi.Input<string>;
}