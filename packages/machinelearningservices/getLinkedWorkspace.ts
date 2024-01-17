import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the detail of a linked workspace.
 * Azure REST API version: 2020-05-15-preview.
 */
export function getLinkedWorkspace(args: GetLinkedWorkspaceArgs, opts?: pulumi.InvokeOptions): Promise<GetLinkedWorkspaceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices:getLinkedWorkspace", {
        "linkName": args.linkName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetLinkedWorkspaceArgs {
    /**
     * Friendly name of the linked workspace
     */
    linkName: string;
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
 * Linked workspace.
 */
export interface GetLinkedWorkspaceResult {
    /**
     * ResourceId of the link of the linked workspace.
     */
    readonly id: string;
    /**
     * Friendly name of the linked workspace.
     */
    readonly name: string;
    /**
     * LinkedWorkspace specific properties.
     */
    readonly properties: types.outputs.LinkedWorkspacePropsResponse;
    /**
     * Resource type of linked workspace.
     */
    readonly type: string;
}
/**
 * Get the detail of a linked workspace.
 * Azure REST API version: 2020-05-15-preview.
 */
export function getLinkedWorkspaceOutput(args: GetLinkedWorkspaceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLinkedWorkspaceResult> {
    return pulumi.output(args).apply((a: any) => getLinkedWorkspace(a, opts))
}

export interface GetLinkedWorkspaceOutputArgs {
    /**
     * Friendly name of the linked workspace
     */
    linkName: pulumi.Input<string>;
    /**
     * Name of the resource group in which workspace is located.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}