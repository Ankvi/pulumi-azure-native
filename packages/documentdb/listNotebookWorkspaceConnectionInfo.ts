import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Retrieves the connection info for the notebook workspace
 *
 * Uses Azure REST API version 2023-04-15.
 *
 * Other available API versions: 2023-09-15, 2023-09-15-preview, 2023-11-15, 2023-11-15-preview, 2024-02-15-preview, 2024-05-15, 2024-05-15-preview, 2024-08-15, 2024-09-01-preview, 2024-11-15, 2024-12-01-preview.
 */
export function listNotebookWorkspaceConnectionInfo(args: ListNotebookWorkspaceConnectionInfoArgs, opts?: pulumi.InvokeOptions): Promise<ListNotebookWorkspaceConnectionInfoResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:documentdb:listNotebookWorkspaceConnectionInfo", {
        "accountName": args.accountName,
        "notebookWorkspaceName": args.notebookWorkspaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListNotebookWorkspaceConnectionInfoArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: string;
    /**
     * The name of the notebook workspace resource.
     */
    notebookWorkspaceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The connection info for the given notebook workspace
 */
export interface ListNotebookWorkspaceConnectionInfoResult {
    /**
     * Specifies auth token used for connecting to Notebook server (uses token-based auth).
     */
    readonly authToken: string;
    /**
     * Specifies the endpoint of Notebook server.
     */
    readonly notebookServerEndpoint: string;
}
/**
 * Retrieves the connection info for the notebook workspace
 *
 * Uses Azure REST API version 2023-04-15.
 *
 * Other available API versions: 2023-09-15, 2023-09-15-preview, 2023-11-15, 2023-11-15-preview, 2024-02-15-preview, 2024-05-15, 2024-05-15-preview, 2024-08-15, 2024-09-01-preview, 2024-11-15, 2024-12-01-preview.
 */
export function listNotebookWorkspaceConnectionInfoOutput(args: ListNotebookWorkspaceConnectionInfoOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListNotebookWorkspaceConnectionInfoResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:documentdb:listNotebookWorkspaceConnectionInfo", {
        "accountName": args.accountName,
        "notebookWorkspaceName": args.notebookWorkspaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListNotebookWorkspaceConnectionInfoOutputArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the notebook workspace resource.
     */
    notebookWorkspaceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}