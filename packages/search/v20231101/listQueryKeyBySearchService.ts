import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns the list of query API keys for the given search service.
 */
export function listQueryKeyBySearchService(args: ListQueryKeyBySearchServiceArgs, opts?: pulumi.InvokeOptions): Promise<ListQueryKeyBySearchServiceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:search/v20231101:listQueryKeyBySearchService", {
        "resourceGroupName": args.resourceGroupName,
        "searchServiceName": args.searchServiceName,
    }, opts);
}

export interface ListQueryKeyBySearchServiceArgs {
    /**
     * The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the search service associated with the specified resource group.
     */
    searchServiceName: string;
}

/**
 * Response containing the query API keys for a given search service.
 */
export interface ListQueryKeyBySearchServiceResult {
    /**
     * Request URL that can be used to query next page of query keys. Returned when the total number of requested query keys exceed maximum page size.
     */
    readonly nextLink: string;
    /**
     * The query keys for the search service.
     */
    readonly value: types.outputs.QueryKeyResponse[];
}
/**
 * Returns the list of query API keys for the given search service.
 */
export function listQueryKeyBySearchServiceOutput(args: ListQueryKeyBySearchServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListQueryKeyBySearchServiceResult> {
    return pulumi.output(args).apply((a: any) => listQueryKeyBySearchService(a, opts))
}

export interface ListQueryKeyBySearchServiceOutputArgs {
    /**
     * The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the search service associated with the specified resource group.
     */
    searchServiceName: pulumi.Input<string>;
}
