import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the notebook workspace for a Cosmos DB account.
 */
export function getNotebookWorkspace(args: GetNotebookWorkspaceArgs, opts?: pulumi.InvokeOptions): Promise<GetNotebookWorkspaceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:documentdb/v20231115:getNotebookWorkspace", {
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
 */
export function getNotebookWorkspaceOutput(args: GetNotebookWorkspaceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNotebookWorkspaceResult> {
    return pulumi.output(args).apply((a: any) => getNotebookWorkspace(a, opts))
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