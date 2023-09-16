import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get a Product. '.default' and '.unassigned' are system defined values and cannot be used for product name.
 */
export function getProduct(args: GetProductArgs, opts?: pulumi.InvokeOptions): Promise<GetProductResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azuresphere/v20220901preview:getProduct", {
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
     * Description of the product
     */
    readonly description: string;
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
    readonly systemData: types.outputs.azuresphere.v20220901preview.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a Product. '.default' and '.unassigned' are system defined values and cannot be used for product name.
 */
export function getProductOutput(args: GetProductOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProductResult> {
    return pulumi.output(args).apply((a: any) => getProduct(a, opts))
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
