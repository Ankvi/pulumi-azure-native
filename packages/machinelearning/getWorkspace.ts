import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the properties of the specified machine learning workspace.
 *
 * Uses Azure REST API version 2019-10-01.
 */
export function getWorkspace(args: GetWorkspaceArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkspaceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearning:getWorkspace", {
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetWorkspaceArgs {
    /**
     * The name of the resource group to which the machine learning workspace belongs.
     */
    resourceGroupName: string;
    /**
     * The name of the machine learning workspace.
     */
    workspaceName: string;
}

/**
 * An object that represents a machine learning workspace.
 */
export interface GetWorkspaceResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The creation time for this workspace resource.
     */
    readonly creationTime: string;
    /**
     * The resource ID.
     */
    readonly id: string;
    /**
     * The key vault identifier used for encrypted workspaces.
     */
    readonly keyVaultIdentifierId?: string;
    /**
     * The location of the resource. This cannot be changed after the resource is created.
     */
    readonly location: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The email id of the owner for this workspace.
     */
    readonly ownerEmail: string;
    /**
     * The sku of the workspace.
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * The regional endpoint for the machine learning studio service which hosts this workspace.
     */
    readonly studioEndpoint: string;
    /**
     * The tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * The fully qualified arm id of the storage account associated with this workspace.
     */
    readonly userStorageAccountId: string;
    /**
     * The immutable id associated with this workspace.
     */
    readonly workspaceId: string;
    /**
     * The current state of workspace resource.
     */
    readonly workspaceState: string;
    /**
     * The type of this workspace.
     */
    readonly workspaceType: string;
}
/**
 * Gets the properties of the specified machine learning workspace.
 *
 * Uses Azure REST API version 2019-10-01.
 */
export function getWorkspaceOutput(args: GetWorkspaceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWorkspaceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:machinelearning:getWorkspace", {
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetWorkspaceOutputArgs {
    /**
     * The name of the resource group to which the machine learning workspace belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the machine learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}