import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the API link for the tag.
 * Azure REST API version: 2022-09-01-preview.
 *
 * Other available API versions: 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview.
 */
export function getTagApiLink(args: GetTagApiLinkArgs, opts?: pulumi.InvokeOptions): Promise<GetTagApiLinkResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:getTagApiLink", {
        "apiLinkId": args.apiLinkId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "tagId": args.tagId,
    }, opts);
}

export interface GetTagApiLinkArgs {
    /**
     * Tag-API link identifier. Must be unique in the current API Management service instance.
     */
    apiLinkId: string;
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
 * Tag-API link details.
 */
export interface GetTagApiLinkResult {
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
 * Gets the API link for the tag.
 * Azure REST API version: 2022-09-01-preview.
 *
 * Other available API versions: 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview.
 */
export function getTagApiLinkOutput(args: GetTagApiLinkOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTagApiLinkResult> {
    return pulumi.output(args).apply((a: any) => getTagApiLink(a, opts))
}

export interface GetTagApiLinkOutputArgs {
    /**
     * Tag-API link identifier. Must be unique in the current API Management service instance.
     */
    apiLinkId: pulumi.Input<string>;
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