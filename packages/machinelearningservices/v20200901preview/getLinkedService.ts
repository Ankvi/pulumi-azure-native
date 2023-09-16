import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get the detail of a linked service.
 */
export function getLinkedService(args: GetLinkedServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetLinkedServiceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices/v20200901preview:getLinkedService", {
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
    readonly identity?: types.outputs.machinelearningservices.v20200901preview.IdentityResponse;
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
    readonly properties: types.outputs.machinelearningservices.v20200901preview.LinkedServicePropsResponse;
    /**
     * Resource type of linked service.
     */
    readonly type: string;
}
/**
 * Get the detail of a linked service.
 */
export function getLinkedServiceOutput(args: GetLinkedServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLinkedServiceResult> {
    return pulumi.output(args).apply((a: any) => getLinkedService(a, opts))
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
