import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Product. '.default' and '.unassigned' are system defined values and cannot be used for product name.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2022-09-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native azuresphere [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getProduct(args: GetProductArgs, opts?: pulumi.InvokeOptions): Promise<GetProductResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azuresphere:getProduct", {
        "catalogName": args.catalogName,
        "productName": args.productName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetProductArgs {
    /**
     * Name of catalog
     */
    catalogName: string;
    /**
     * Name of product.
     */
    productName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * An product resource belonging to a catalog resource.
 */
export interface GetProductResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Description of the product
     */
    readonly description?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The status of the last operation.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a Product. '.default' and '.unassigned' are system defined values and cannot be used for product name.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2022-09-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native azuresphere [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getProductOutput(args: GetProductOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetProductResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azuresphere:getProduct", {
        "catalogName": args.catalogName,
        "productName": args.productName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetProductOutputArgs {
    /**
     * Name of catalog
     */
    catalogName: pulumi.Input<string>;
    /**
     * Name of product.
     */
    productName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}