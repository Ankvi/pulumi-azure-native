import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the Log Analytics Workspace ID and Primary Key for the specified project.
 *
 * Uses Azure REST API version 2018-02-02.
 */
export function getProjectKeys(args: GetProjectKeysArgs, opts?: pulumi.InvokeOptions): Promise<GetProjectKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:migrate:getProjectKeys", {
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetProjectKeysArgs {
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
 * ID and Key for Migration Project.
 */
export interface GetProjectKeysResult {
    /**
     * ID of Migration Project.
     */
    readonly workspaceId: string;
    /**
     * Key of Migration Project.
     */
    readonly workspaceKey: string;
}
/**
 * Gets the Log Analytics Workspace ID and Primary Key for the specified project.
 *
 * Uses Azure REST API version 2018-02-02.
 */
export function getProjectKeysOutput(args: GetProjectKeysOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetProjectKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:migrate:getProjectKeys", {
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetProjectKeysOutputArgs {
    /**
     * Name of the Azure Migrate project.
     */
    projectName: pulumi.Input<string>;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    resourceGroupName: pulumi.Input<string>;
}