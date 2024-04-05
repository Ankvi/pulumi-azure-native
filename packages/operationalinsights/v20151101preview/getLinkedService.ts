import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a linked service instance.
 */
export function getLinkedService(args: GetLinkedServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetLinkedServiceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:operationalinsights/v20151101preview:getLinkedService", {
        "linkedServiceName": args.linkedServiceName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetLinkedServiceArgs {
    /**
     * Name of the linked service.
     */
    linkedServiceName: string;
    /**
     * The name of the resource group to get. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of the Log Analytics Workspace that contains the linkedServices resource
     */
    workspaceName: string;
}

/**
 * The top level Linked service resource container.
 */
export interface GetLinkedServiceResult {
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The resource id of the resource that will be linked to the workspace.
     */
    readonly resourceId: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a linked service instance.
 */
export function getLinkedServiceOutput(args: GetLinkedServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLinkedServiceResult> {
    return pulumi.output(args).apply((a: any) => getLinkedService(a, opts))
}

export interface GetLinkedServiceOutputArgs {
    /**
     * Name of the linked service.
     */
    linkedServiceName: pulumi.Input<string>;
    /**
     * The name of the resource group to get. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the Log Analytics Workspace that contains the linkedServices resource
     */
    workspaceName: pulumi.Input<string>;
}