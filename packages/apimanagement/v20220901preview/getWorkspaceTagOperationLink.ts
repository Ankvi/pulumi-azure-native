import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the operation link for the tag.
 */
export function getWorkspaceTagOperationLink(args: GetWorkspaceTagOperationLinkArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkspaceTagOperationLinkResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement/v20220901preview:getWorkspaceTagOperationLink", {
        "operationLinkId": args.operationLinkId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "tagId": args.tagId,
        "workspaceId": args.workspaceId,
    }, opts);
}

export interface GetWorkspaceTagOperationLinkArgs {
    /**
     * Tag-operation link identifier. Must be unique in the current API Management service instance.
     */
    operationLinkId: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    serviceName: string;
    /**
     * Tag identifier. Must be unique in the current API Management service instance.
     */
    tagId: string;
    /**
     * Workspace identifier. Must be unique in the current API Management service instance.
     */
    workspaceId: string;
}

/**
 * Tag-operation link details.
 */
export interface GetWorkspaceTagOperationLinkResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Full resource Id of an API operation.
     */
    readonly operationId: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the operation link for the tag.
 */
export function getWorkspaceTagOperationLinkOutput(args: GetWorkspaceTagOperationLinkOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkspaceTagOperationLinkResult> {
    return pulumi.output(args).apply((a: any) => getWorkspaceTagOperationLink(a, opts))
}

export interface GetWorkspaceTagOperationLinkOutputArgs {
    /**
     * Tag-operation link identifier. Must be unique in the current API Management service instance.
     */
    operationLinkId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Tag identifier. Must be unique in the current API Management service instance.
     */
    tagId: pulumi.Input<string>;
    /**
     * Workspace identifier. Must be unique in the current API Management service instance.
     */
    workspaceId: pulumi.Input<string>;
}
