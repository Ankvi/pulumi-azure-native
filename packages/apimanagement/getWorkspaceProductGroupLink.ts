import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the group link for the product.
 * Azure REST API version: 2022-09-01-preview.
 *
 * Other available API versions: 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview.
 */
export function getWorkspaceProductGroupLink(args: GetWorkspaceProductGroupLinkArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkspaceProductGroupLinkResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:getWorkspaceProductGroupLink", {
        "groupLinkId": args.groupLinkId,
        "productId": args.productId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "workspaceId": args.workspaceId,
    }, opts);
}

export interface GetWorkspaceProductGroupLinkArgs {
    /**
     * Product-Group link identifier. Must be unique in the current API Management service instance.
     */
    groupLinkId: string;
    /**
     * Product identifier. Must be unique in the current API Management service instance.
     */
    productId: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    serviceName: string;
    /**
     * Workspace identifier. Must be unique in the current API Management service instance.
     */
    workspaceId: string;
}

/**
 * Product-group link details.
 */
export interface GetWorkspaceProductGroupLinkResult {
    /**
     * Full resource Id of a group.
     */
    readonly groupId: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the group link for the product.
 * Azure REST API version: 2022-09-01-preview.
 *
 * Other available API versions: 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview.
 */
export function getWorkspaceProductGroupLinkOutput(args: GetWorkspaceProductGroupLinkOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkspaceProductGroupLinkResult> {
    return pulumi.output(args).apply((a: any) => getWorkspaceProductGroupLink(a, opts))
}

export interface GetWorkspaceProductGroupLinkOutputArgs {
    /**
     * Product-Group link identifier. Must be unique in the current API Management service instance.
     */
    groupLinkId: pulumi.Input<string>;
    /**
     * Product identifier. Must be unique in the current API Management service instance.
     */
    productId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Workspace identifier. Must be unique in the current API Management service instance.
     */
    workspaceId: pulumi.Input<string>;
}