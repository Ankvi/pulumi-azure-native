import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the detail of a linked service.
 *
 * Uses Azure REST API version 2020-09-01-preview.
 */
export function getLinkedService(args: GetLinkedServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetLinkedServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices:getLinkedService", {
        "linkName": args.linkName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetLinkedServiceArgs {
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
 * Linked service.
 */
export interface GetLinkedServiceResult {
    /**
     * ResourceId of the link of the linked service.
     */
    readonly id: string;
    /**
     * Identity for the resource.
     */
    readonly identity?: types.outputs.IdentityResponse;
    /**
     * location of the linked service.
     */
    readonly location?: string;
    /**
     * Friendly name of the linked service.
     */
    readonly name: string;
    /**
     * LinkedService specific properties.
     */
    readonly properties: types.outputs.LinkedServicePropsResponse;
    /**
     * Resource type of linked service.
     */
    readonly type: string;
}
/**
 * Get the detail of a linked service.
 *
 * Uses Azure REST API version 2020-09-01-preview.
 */
export function getLinkedServiceOutput(args: GetLinkedServiceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetLinkedServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:machinelearningservices:getLinkedService", {
        "linkName": args.linkName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetLinkedServiceOutputArgs {
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