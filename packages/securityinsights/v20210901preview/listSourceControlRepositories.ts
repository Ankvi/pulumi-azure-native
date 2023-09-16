import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets a list of repositories metadata.
 */
export function listSourceControlRepositories(args: ListSourceControlRepositoriesArgs, opts?: pulumi.InvokeOptions): Promise<ListSourceControlRepositoriesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights/v20210901preview:listSourceControlRepositories", {
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface ListSourceControlRepositoriesArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * List all the source controls.
 */
export interface ListSourceControlRepositoriesResult {
    /**
     * URL to fetch the next set of repositories.
     */
    readonly nextLink: string;
    /**
     * Array of repositories.
     */
    readonly value: types.outputs.securityinsights.v20210901preview.RepoResponse[];
}
/**
 * Gets a list of repositories metadata.
 */
export function listSourceControlRepositoriesOutput(args: ListSourceControlRepositoriesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListSourceControlRepositoriesResult> {
    return pulumi.output(args).apply((a: any) => listSourceControlRepositories(a, opts))
}

export interface ListSourceControlRepositoriesOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
