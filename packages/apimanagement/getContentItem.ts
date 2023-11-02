import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Returns the developer portal's content item specified by its identifier.
 * Azure REST API version: 2022-08-01.
 *
 * Other available API versions: 2022-09-01-preview, 2023-03-01-preview.
 */
export function getContentItem(args: GetContentItemArgs, opts?: pulumi.InvokeOptions): Promise<GetContentItemResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:getContentItem", {
        "contentItemId": args.contentItemId,
        "contentTypeId": args.contentTypeId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetContentItemArgs {
    /**
     * Content item identifier.
     */
    contentItemId: string;
    /**
     * Content type identifier.
     */
    contentTypeId: string;
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
 * Content type contract details.
 */
export interface GetContentItemResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Properties of the content item.
     */
    readonly properties: any;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Returns the developer portal's content item specified by its identifier.
 * Azure REST API version: 2022-08-01.
 *
 * Other available API versions: 2022-09-01-preview, 2023-03-01-preview.
 */
export function getContentItemOutput(args: GetContentItemOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetContentItemResult> {
    return pulumi.output(args).apply((a: any) => getContentItem(a, opts))
}

export interface GetContentItemOutputArgs {
    /**
     * Content item identifier.
     */
    contentItemId: pulumi.Input<string>;
    /**
     * Content type identifier.
     */
    contentTypeId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}
