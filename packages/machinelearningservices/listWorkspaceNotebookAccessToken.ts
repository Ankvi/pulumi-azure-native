import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * return notebook access token and refresh token
 *
 * Uses Azure REST API version 2023-04-01.
 *
 * Other available API versions: 2022-01-01-preview, 2023-04-01-preview, 2023-06-01-preview, 2023-08-01-preview, 2023-10-01, 2024-01-01-preview, 2024-04-01, 2024-04-01-preview, 2024-07-01-preview, 2024-10-01, 2024-10-01-preview, 2025-01-01-preview.
 */
export function listWorkspaceNotebookAccessToken(args: ListWorkspaceNotebookAccessTokenArgs, opts?: pulumi.InvokeOptions): Promise<ListWorkspaceNotebookAccessTokenResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices:listWorkspaceNotebookAccessToken", {
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface ListWorkspaceNotebookAccessTokenArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: string;
}

export interface ListWorkspaceNotebookAccessTokenResult {
    readonly accessToken: string;
    readonly expiresIn: number;
    readonly hostName: string;
    readonly notebookResourceId: string;
    readonly publicDns: string;
    readonly refreshToken: string;
    readonly scope: string;
    readonly tokenType: string;
}
/**
 * return notebook access token and refresh token
 *
 * Uses Azure REST API version 2023-04-01.
 *
 * Other available API versions: 2022-01-01-preview, 2023-04-01-preview, 2023-06-01-preview, 2023-08-01-preview, 2023-10-01, 2024-01-01-preview, 2024-04-01, 2024-04-01-preview, 2024-07-01-preview, 2024-10-01, 2024-10-01-preview, 2025-01-01-preview.
 */
export function listWorkspaceNotebookAccessTokenOutput(args: ListWorkspaceNotebookAccessTokenOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListWorkspaceNotebookAccessTokenResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:machinelearningservices:listWorkspaceNotebookAccessToken", {
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface ListWorkspaceNotebookAccessTokenOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}