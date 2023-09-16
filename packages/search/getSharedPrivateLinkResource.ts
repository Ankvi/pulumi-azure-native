import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of the shared private link resource managed by the search service in the given resource group.
 * Azure REST API version: 2022-09-01.
 */
export function getSharedPrivateLinkResource(args: GetSharedPrivateLinkResourceArgs, opts?: pulumi.InvokeOptions): Promise<GetSharedPrivateLinkResourceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:search:getSharedPrivateLinkResource", {
        "resourceGroupName": args.resourceGroupName,
        "searchServiceName": args.searchServiceName,
        "sharedPrivateLinkResourceName": args.sharedPrivateLinkResourceName,
    }, opts);
}

export interface GetSharedPrivateLinkResourceArgs {
    /**
     * The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the Azure Cognitive Search service associated with the specified resource group.
     */
    searchServiceName: string;
    /**
     * The name of the shared private link resource managed by the Azure Cognitive Search service within the specified resource group.
     */
    sharedPrivateLinkResourceName: string;
}

/**
 * Describes a Shared Private Link Resource managed by the Azure Cognitive Search service.
 */
export interface GetSharedPrivateLinkResourceResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Describes the properties of a Shared Private Link Resource managed by the Azure Cognitive Search service.
     */
    readonly properties: types.outputs.search.SharedPrivateLinkResourcePropertiesResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the details of the shared private link resource managed by the search service in the given resource group.
 * Azure REST API version: 2022-09-01.
 */
export function getSharedPrivateLinkResourceOutput(args: GetSharedPrivateLinkResourceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSharedPrivateLinkResourceResult> {
    return pulumi.output(args).apply((a: any) => getSharedPrivateLinkResource(a, opts))
}

export interface GetSharedPrivateLinkResourceOutputArgs {
    /**
     * The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Azure Cognitive Search service associated with the specified resource group.
     */
    searchServiceName: pulumi.Input<string>;
    /**
     * The name of the shared private link resource managed by the Azure Cognitive Search service within the specified resource group.
     */
    sharedPrivateLinkResourceName: pulumi.Input<string>;
}
