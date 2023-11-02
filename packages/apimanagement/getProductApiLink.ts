import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the API link for the product.
 * Azure REST API version: 2022-09-01-preview.
 *
 * Other available API versions: 2023-03-01-preview.
 */
export function getProductApiLink(args: GetProductApiLinkArgs, opts?: pulumi.InvokeOptions): Promise<GetProductApiLinkResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:getProductApiLink", {
        "apiLinkId": args.apiLinkId,
        "productId": args.productId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetProductApiLinkArgs {
    /**
     * Product-API link identifier. Must be unique in the current API Management service instance.
     */
    apiLinkId: string;
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
 * Product-API link details.
 */
export interface GetProductApiLinkResult {
    /**
     * Full resource Id of an API.
     */
    readonly apiId: string;
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
 * Gets the API link for the product.
 * Azure REST API version: 2022-09-01-preview.
 *
 * Other available API versions: 2023-03-01-preview.
 */
export function getProductApiLinkOutput(args: GetProductApiLinkOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProductApiLinkResult> {
    return pulumi.output(args).apply((a: any) => getProductApiLink(a, opts))
}

export interface GetProductApiLinkOutputArgs {
    /**
     * Product-API link identifier. Must be unique in the current API Management service instance.
     */
    apiLinkId: pulumi.Input<string>;
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
