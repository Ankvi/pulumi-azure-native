import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the properties of the specified machine learning workspace.
 * Azure REST API version: 2017-05-01-preview.
 */
export function getWorkspace(args: GetWorkspaceArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkspaceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningexperimentation:getWorkspace", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetWorkspaceArgs {
    /**
     * The name of the machine learning team account.
     */
    accountName: string;
    /**
     * The name of the resource group to which the machine learning team account belongs.
     */
    resourceGroupName: string;
    /**
     * The name of the machine learning team account workspace.
     */
    workspaceName: string;
}

/**
 * An object that represents a machine learning team account workspace.
 */
export interface GetWorkspaceResult {
    /**
     * The immutable id of the team account which contains this workspace.
     */
    readonly accountId: string;
    /**
     * The creation date of the machine learning workspace in ISO8601 format.
     */
    readonly creationDate: string;
    /**
     * The description of this workspace.
     */
    readonly description?: string;
    /**
     * The friendly name for this workspace. This will be the workspace name in the arm id when the workspace object gets created
     */
    readonly friendlyName: string;
    /**
     * The resource ID.
     */
    readonly id: string;
    /**
     * The location of the resource. This cannot be changed after the resource is created.
     */
    readonly location: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The current deployment state of team account workspace resource. The provisioningState is to indicate states for resource provisioning.
     */
    readonly provisioningState: string;
    /**
     * The tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * The immutable id of this workspace.
     */
    readonly workspaceId: string;
}
/**
 * Gets the properties of the specified machine learning workspace.
 * Azure REST API version: 2017-05-01-preview.
 */
export function getWorkspaceOutput(args: GetWorkspaceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkspaceResult> {
    return pulumi.output(args).apply((a: any) => getWorkspace(a, opts))
}

export interface GetWorkspaceOutputArgs {
    /**
     * The name of the machine learning team account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the resource group to which the machine learning team account belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the machine learning team account workspace.
     */
    workspaceName: pulumi.Input<string>;
}