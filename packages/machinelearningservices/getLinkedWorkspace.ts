import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the detail of a linked workspace.
 *
 * Uses Azure REST API version 2020-05-15-preview.
 *
 * Other available API versions: 2020-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native machinelearningservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 *
 * Uses Azure REST API version 2020-05-15-preview.
 *
 * Other available API versions: 2020-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native machinelearningservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getLinkedWorkspaceOutput(args: GetLinkedWorkspaceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetLinkedWorkspaceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:machinelearningservices:getLinkedWorkspace", {
        "linkName": args.linkName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
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