import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets the details of the Wiki for an API specified by its identifier.
 */
export function getApiWiki(args: GetApiWikiArgs, opts?: pulumi.InvokeOptions): Promise<GetApiWikiResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement/v20220901preview:getApiWiki", {
        "apiId": args.apiId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetApiWikiArgs {
    /**
     * API identifier. Must be unique in the current API Management service instance.
     */
    apiId: string;
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
export interface GetApiWikiResult {
    /**
     * Collection wiki documents included into this wiki.
     */
    readonly documents?: types.outputs.apimanagement.v20220901preview.WikiDocumentationContractResponse[];
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
 * Gets the details of the Wiki for an API specified by its identifier.
 */
export function getApiWikiOutput(args: GetApiWikiOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApiWikiResult> {
    return pulumi.output(args).apply((a: any) => getApiWiki(a, opts))
}

export interface GetApiWikiOutputArgs {
    /**
     * API identifier. Must be unique in the current API Management service instance.
     */
    apiId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}
