import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the detail of a workspace connection.
 */
export function getWorkspaceConnection(args: GetWorkspaceConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkspaceConnectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices/v20210401:getWorkspaceConnection", {
        "connectionName": args.connectionName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetWorkspaceConnectionArgs {
    /**
     * Friendly name of the workspace connection
     */
    connectionName: string;
    /**
     * Name of the resource group in which workspace is located.
     */
    resourceGroupName: string;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: string;
}

/**
 * Workspace connection.
 */
export interface GetWorkspaceConnectionResult {
    /**
     * Authorization type of the workspace connection.
     */
    readonly authType?: string;
    /**
     * Category of the workspace connection.
     */
    readonly category?: string;
    /**
     * ResourceId of the workspace connection.
     */
    readonly id: string;
    /**
     * Friendly name of the workspace connection.
     */
    readonly name: string;
    /**
     * Target of the workspace connection.
     */
    readonly target?: string;
    /**
     * Resource type of workspace connection.
     */
    readonly type: string;
    /**
     * Value details of the workspace connection.
     */
    readonly value?: string;
    /**
     * format for the workspace connection value
     */
    readonly valueFormat?: string;
}
/**
 * Get the detail of a workspace connection.
 */
export function getWorkspaceConnectionOutput(args: GetWorkspaceConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkspaceConnectionResult> {
    return pulumi.output(args).apply((a: any) => getWorkspaceConnection(a, opts))
}

export interface GetWorkspaceConnectionOutputArgs {
    /**
     * Friendly name of the workspace connection
     */
    connectionName: pulumi.Input<string>;
    /**
     * Name of the resource group in which workspace is located.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}
