import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the details of the product specified by its identifier.
 *
 * Uses Azure REST API version 2022-09-01-preview.
 *
 * Other available API versions: 2021-04-01-preview, 2021-08-01, 2021-12-01-preview, 2022-04-01-preview, 2022-08-01, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getProduct(args: GetProductArgs, opts?: pulumi.InvokeOptions): Promise<GetProductResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:getProduct", {
        "productId": args.productId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetProductArgs {
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
 * Product details.
 */
export interface GetProductResult {
    /**
     * whether subscription approval is required. If false, new subscriptions will be approved automatically enabling developers to call the product’s APIs immediately after subscribing. If true, administrators must manually approve the subscription before the developer can any of the product’s APIs. Can be present only if subscriptionRequired property is present and has a value of false.
     */
    readonly approvalRequired?: boolean;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Product description. May include HTML formatting tags.
     */
    readonly description?: string;
    /**
     * Product name.
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
     * whether product is published or not. Published products are discoverable by users of developer portal. Non published products are visible only to administrators. Default state of Product is notPublished.
     */
    readonly state?: string;
    /**
     * Whether a product subscription is required for accessing APIs included in this product. If true, the product is referred to as "protected" and a valid subscription key is required for a request to an API included in the product to succeed. If false, the product is referred to as "open" and requests to an API included in the product can be made without a subscription key. If property is omitted when creating a new product it's value is assumed to be true.
     */
    readonly subscriptionRequired?: boolean;
    /**
     * Whether the number of subscriptions a user can have to this product at the same time. Set to null or omit to allow unlimited per user subscriptions. Can be present only if subscriptionRequired property is present and has a value of false.
     */
    readonly subscriptionsLimit?: number;
    /**
     * Product terms of use. Developers trying to subscribe to the product will be presented and required to accept these terms before they can complete the subscription process.
     */
    readonly terms?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the details of the product specified by its identifier.
 *
 * Uses Azure REST API version 2022-09-01-preview.
 *
 * Other available API versions: 2021-04-01-preview, 2021-08-01, 2021-12-01-preview, 2022-04-01-preview, 2022-08-01, 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01, 2024-06-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native apimanagement [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getProductOutput(args: GetProductOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetProductResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:apimanagement:getProduct", {
        "productId": args.productId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetProductOutputArgs {
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