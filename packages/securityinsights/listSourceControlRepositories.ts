import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a list of repositories metadata.
 * Azure REST API version: 2023-06-01-preview.
 *
 * Other available API versions: 2021-03-01-preview, 2021-09-01-preview, 2021-10-01-preview, 2022-01-01-preview, 2022-04-01-preview, 2022-05-01-preview, 2022-06-01-preview, 2022-07-01-preview, 2022-08-01-preview, 2022-09-01-preview, 2022-10-01-preview, 2022-11-01-preview, 2022-12-01-preview, 2023-02-01-preview, 2023-03-01-preview, 2023-04-01-preview, 2023-05-01-preview, 2023-07-01-preview, 2023-08-01-preview, 2023-09-01-preview, 2023-10-01-preview, 2023-11-01, 2023-12-01-preview.
 */
export function listSourceControlRepositories(args: ListSourceControlRepositoriesArgs, opts?: pulumi.InvokeOptions): Promise<ListSourceControlRepositoriesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights:listSourceControlRepositories", {
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
    readonly value: types.outputs.RepoResponse[];
}
/**
 * Gets a list of repositories metadata.
 * Azure REST API version: 2023-06-01-preview.
 *
 * Other available API versions: 2021-03-01-preview, 2021-09-01-preview, 2021-10-01-preview, 2022-01-01-preview, 2022-04-01-preview, 2022-05-01-preview, 2022-06-01-preview, 2022-07-01-preview, 2022-08-01-preview, 2022-09-01-preview, 2022-10-01-preview, 2022-11-01-preview, 2022-12-01-preview, 2023-02-01-preview, 2023-03-01-preview, 2023-04-01-preview, 2023-05-01-preview, 2023-07-01-preview, 2023-08-01-preview, 2023-09-01-preview, 2023-10-01-preview, 2023-11-01, 2023-12-01-preview.
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