import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a list of repositories metadata.
 */
export function listSourceControlRepositories(args: ListSourceControlRepositoriesArgs, opts?: pulumi.InvokeOptions): Promise<ListSourceControlRepositoriesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights/v20231001preview:listSourceControlRepositories", {
        "clientId": args.clientId,
        "code": args.code,
        "installationId": args.installationId,
        "kind": args.kind,
        "resourceGroupName": args.resourceGroupName,
        "state": args.state,
        "token": args.token,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface ListSourceControlRepositoriesArgs {
    /**
     * OAuth ClientId. Required when `kind` is `OAuth`
     */
    clientId?: string;
    /**
     * OAuth Code. Required when `kind` is `OAuth`
     */
    code?: string;
    /**
     * Application installation ID. Required when `kind` is `App`. Supported by `GitHub` only.
     */
    installationId?: string;
    /**
     * The kind of repository access credentials
     */
    kind: string | types.enums.RepositoryAccessKind;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * OAuth State. Required when `kind` is `OAuth`
     */
    state?: string;
    /**
     * Personal Access Token. Required when `kind` is `PAT`
     */
    token?: string;
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
 */
export function listSourceControlRepositoriesOutput(args: ListSourceControlRepositoriesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListSourceControlRepositoriesResult> {
    return pulumi.output(args).apply((a: any) => listSourceControlRepositories(a, opts))
}

export interface ListSourceControlRepositoriesOutputArgs {
    /**
     * OAuth ClientId. Required when `kind` is `OAuth`
     */
    clientId?: pulumi.Input<string>;
    /**
     * OAuth Code. Required when `kind` is `OAuth`
     */
    code?: pulumi.Input<string>;
    /**
     * Application installation ID. Required when `kind` is `App`. Supported by `GitHub` only.
     */
    installationId?: pulumi.Input<string>;
    /**
     * The kind of repository access credentials
     */
    kind: pulumi.Input<string | types.enums.RepositoryAccessKind>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * OAuth State. Required when `kind` is `OAuth`
     */
    state?: pulumi.Input<string>;
    /**
     * Personal Access Token. Required when `kind` is `PAT`
     */
    token?: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
