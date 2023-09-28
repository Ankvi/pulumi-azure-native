import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Retrieves the connection info for the notebook workspace
 */
export function listNotebookWorkspaceConnectionInfo(args: ListNotebookWorkspaceConnectionInfoArgs, opts?: pulumi.InvokeOptions): Promise<ListNotebookWorkspaceConnectionInfoResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:documentdb/v20230915:listNotebookWorkspaceConnectionInfo", {
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
 */
export function listNotebookWorkspaceConnectionInfoOutput(args: ListNotebookWorkspaceConnectionInfoOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListNotebookWorkspaceConnectionInfoResult> {
    return pulumi.output(args).apply((a: any) => listNotebookWorkspaceConnectionInfo(a, opts))
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
