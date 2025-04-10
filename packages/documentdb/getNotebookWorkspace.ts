import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the notebook workspace for a Cosmos DB account.
 *
 * Uses Azure REST API version 2023-04-15.
 *
 * Other available API versions: 2023-09-15, 2023-09-15-preview, 2023-11-15, 2023-11-15-preview, 2024-02-15-preview, 2024-05-15, 2024-05-15-preview, 2024-08-15, 2024-09-01-preview, 2024-11-15, 2024-12-01-preview.
 */
export function getNotebookWorkspace(args: GetNotebookWorkspaceArgs, opts?: pulumi.InvokeOptions): Promise<GetNotebookWorkspaceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:documentdb:getNotebookWorkspace", {
        "accountName": args.accountName,
        "notebookWorkspaceName": args.notebookWorkspaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNotebookWorkspaceArgs {
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
 * A notebook workspace resource
 */
export interface GetNotebookWorkspaceResult {
    /**
     * The unique resource identifier of the database account.
     */
    readonly id: string;
    /**
     * The name of the database account.
     */
    readonly name: string;
    /**
     * Specifies the endpoint of Notebook server.
     */
    readonly notebookServerEndpoint: string;
    /**
     * Status of the notebook workspace. Possible values are: Creating, Online, Deleting, Failed, Updating.
     */
    readonly status: string;
    /**
     * The type of Azure resource.
     */
    readonly type: string;
}
/**
 * Gets the notebook workspace for a Cosmos DB account.
 *
 * Uses Azure REST API version 2023-04-15.
 *
 * Other available API versions: 2023-09-15, 2023-09-15-preview, 2023-11-15, 2023-11-15-preview, 2024-02-15-preview, 2024-05-15, 2024-05-15-preview, 2024-08-15, 2024-09-01-preview, 2024-11-15, 2024-12-01-preview.
 */
export function getNotebookWorkspaceOutput(args: GetNotebookWorkspaceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNotebookWorkspaceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:documentdb:getNotebookWorkspace", {
        "accountName": args.accountName,
        "notebookWorkspaceName": args.notebookWorkspaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNotebookWorkspaceOutputArgs {
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