import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the group link for the product.
 * Azure REST API version: 2022-09-01-preview.
 */
export function getProductGroupLink(args: GetProductGroupLinkArgs, opts?: pulumi.InvokeOptions): Promise<GetProductGroupLinkResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:getProductGroupLink", {
        "groupLinkId": args.groupLinkId,
        "productId": args.productId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetProductGroupLinkArgs {
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
}

/**
 * Product-group link details.
 */
export interface GetProductGroupLinkResult {
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
 */
export function getProductGroupLinkOutput(args: GetProductGroupLinkOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProductGroupLinkResult> {
    return pulumi.output(args).apply((a: any) => getProductGroupLink(a, opts))
}

export interface GetProductGroupLinkOutputArgs {
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
}
