import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get tag associated with the Product.
 *
 * Uses Azure REST API version 2022-08-01.
 *
 * Other available API versions: 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview.
 */
export function getTagByProduct(args: GetTagByProductArgs, opts?: pulumi.InvokeOptions): Promise<GetTagByProductResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:getTagByProduct", {
        "productId": args.productId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "tagId": args.tagId,
    }, opts);
}

export interface GetTagByProductArgs {
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
     * Tag identifier. Must be unique in the current API Management service instance.
     */
    tagId: string;
}

/**
 * Tag Contract details.
 */
export interface GetTagByProductResult {
    /**
     * Tag name.
     */
    readonly displayName: string;
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
 * Get tag associated with the Product.
 *
 * Uses Azure REST API version 2022-08-01.
 *
 * Other available API versions: 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview.
 */
export function getTagByProductOutput(args: GetTagByProductOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetTagByProductResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:apimanagement:getTagByProduct", {
        "productId": args.productId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "tagId": args.tagId,
    }, opts);
}

export interface GetTagByProductOutputArgs {
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
     * Tag identifier. Must be unique in the current API Management service instance.
     */
    tagId: pulumi.Input<string>;
}