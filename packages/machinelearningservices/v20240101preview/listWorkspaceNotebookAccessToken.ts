import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
export function listWorkspaceNotebookAccessToken(args: ListWorkspaceNotebookAccessTokenArgs, opts?: pulumi.InvokeOptions): Promise<ListWorkspaceNotebookAccessTokenResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices/v20240101preview:listWorkspaceNotebookAccessToken", {
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
     * Azure Machine Learning Workspace Name
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
export function listWorkspaceNotebookAccessTokenOutput(args: ListWorkspaceNotebookAccessTokenOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListWorkspaceNotebookAccessTokenResult> {
    return pulumi.output(args).apply((a: any) => listWorkspaceNotebookAccessToken(a, opts))
}

export interface ListWorkspaceNotebookAccessTokenOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Azure Machine Learning Workspace Name
     */
    workspaceName: pulumi.Input<string>;
}