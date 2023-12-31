import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of the Wiki for a Product specified by its identifier.
 */
export function getProductWiki(args: GetProductWikiArgs, opts?: pulumi.InvokeOptions): Promise<GetProductWikiResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement/v20220801:getProductWiki", {
        "productId": args.productId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetProductWikiArgs {
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
 * Wiki properties
 */
export interface GetProductWikiResult {
    /**
     * Collection wiki documents included into this wiki.
     */
    readonly documents?: types.outputs.WikiDocumentationContractResponse[];
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
 * Gets the details of the Wiki for a Product specified by its identifier.
 */
export function getProductWikiOutput(args: GetProductWikiOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProductWikiResult> {
    return pulumi.output(args).apply((a: any) => getProductWiki(a, opts))
}

export interface GetProductWikiOutputArgs {
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
