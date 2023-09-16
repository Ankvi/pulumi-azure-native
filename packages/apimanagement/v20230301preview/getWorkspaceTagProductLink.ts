import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the product link for the tag.
 */
export function getWorkspaceTagProductLink(args: GetWorkspaceTagProductLinkArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkspaceTagProductLinkResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement/v20230301preview:getWorkspaceTagProductLink", {
        "productLinkId": args.productLinkId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "tagId": args.tagId,
        "workspaceId": args.workspaceId,
    }, opts);
}

export interface GetWorkspaceTagProductLinkArgs {
    /**
     * Tag-product link identifier. Must be unique in the current API Management service instance.
     */
    productLinkId: string;
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
 * Tag-product link details.
 */
export interface GetWorkspaceTagProductLinkResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Full resource Id of a product.
     */
    readonly productId: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the product link for the tag.
 */
export function getWorkspaceTagProductLinkOutput(args: GetWorkspaceTagProductLinkOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkspaceTagProductLinkResult> {
    return pulumi.output(args).apply((a: any) => getWorkspaceTagProductLink(a, opts))
}

export interface GetWorkspaceTagProductLinkOutputArgs {
    /**
     * Tag-product link identifier. Must be unique in the current API Management service instance.
     */
    productLinkId: pulumi.Input<string>;
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
