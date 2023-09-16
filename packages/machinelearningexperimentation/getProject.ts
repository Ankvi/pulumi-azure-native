import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the properties of the specified machine learning project.
 * Azure REST API version: 2017-05-01-preview.
 */
export function getProject(args: GetProjectArgs, opts?: pulumi.InvokeOptions): Promise<GetProjectResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningexperimentation:getProject", {
        "accountName": args.accountName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetProjectArgs {
    /**
     * The name of the machine learning team account.
     */
    accountName: string;
    /**
     * The name of the machine learning project under a team account workspace.
     */
    projectName: string;
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
 * An object that represents a machine learning project.
 */
export interface GetProjectResult {
    /**
     * The immutable id of the team account which contains this project.
     */
    readonly accountId: string;
    /**
     * The creation date of the project in ISO8601 format.
     */
    readonly creationDate: string;
    /**
     * The description of this project.
     */
    readonly description?: string;
    /**
     * The friendly name for this project.
     */
    readonly friendlyName: string;
    /**
     * The reference to git repo for this project.
     */
    readonly gitrepo?: string;
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
     * The immutable id of this project.
     */
    readonly projectId: string;
    /**
     * The current deployment state of project resource. The provisioningState is to indicate states for resource provisioning.
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
     * The immutable id of the workspace which contains this project.
     */
    readonly workspaceId: string;
}
/**
 * Gets the properties of the specified machine learning project.
 * Azure REST API version: 2017-05-01-preview.
 */
export function getProjectOutput(args: GetProjectOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProjectResult> {
    return pulumi.output(args).apply((a: any) => getProject(a, opts))
}

export interface GetProjectOutputArgs {
    /**
     * The name of the machine learning team account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the machine learning project under a team account workspace.
     */
    projectName: pulumi.Input<string>;
    /**
     * The name of the resource group to which the machine learning team account belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the machine learning team account workspace.
     */
    workspaceName: pulumi.Input<string>;
}
