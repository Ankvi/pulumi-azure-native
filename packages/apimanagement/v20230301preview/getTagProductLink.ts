import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the product link for the tag.
 */
export function getTagProductLink(args: GetTagProductLinkArgs, opts?: pulumi.InvokeOptions): Promise<GetTagProductLinkResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement/v20230301preview:getTagProductLink", {
        "productLinkId": args.productLinkId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "tagId": args.tagId,
    }, opts);
}

export interface GetTagProductLinkArgs {
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
}

/**
 * Tag-product link details.
 */
export interface GetTagProductLinkResult {
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
export function getTagProductLinkOutput(args: GetTagProductLinkOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTagProductLinkResult> {
    return pulumi.output(args).apply((a: any) => getTagProductLink(a, opts))
}

export interface GetTagProductLinkOutputArgs {
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
}
