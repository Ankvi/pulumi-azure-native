import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns the list of query API keys for the given Azure Cognitive Search service.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2021-04-01-preview, 2023-11-01, 2024-03-01-preview, 2024-06-01-preview, 2025-02-01-preview.
 */
export function listQueryKeyBySearchService(args: ListQueryKeyBySearchServiceArgs, opts?: pulumi.InvokeOptions): Promise<ListQueryKeyBySearchServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:search:listQueryKeyBySearchService", {
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
     * The name of the Azure Cognitive Search service associated with the specified resource group.
     */
    searchServiceName: string;
}

/**
 * Response containing the query API keys for a given Azure Cognitive Search service.
 */
export interface ListQueryKeyBySearchServiceResult {
    /**
     * Request URL that can be used to query next page of query keys. Returned when the total number of requested query keys exceed maximum page size.
     */
    readonly nextLink: string;
    /**
     * The query keys for the Azure Cognitive Search service.
     */
    readonly value: types.outputs.QueryKeyResponse[];
}
/**
 * Returns the list of query API keys for the given Azure Cognitive Search service.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2021-04-01-preview, 2023-11-01, 2024-03-01-preview, 2024-06-01-preview, 2025-02-01-preview.
 */
export function listQueryKeyBySearchServiceOutput(args: ListQueryKeyBySearchServiceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListQueryKeyBySearchServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:search:listQueryKeyBySearchService", {
        "resourceGroupName": args.resourceGroupName,
        "searchServiceName": args.searchServiceName,
    }, opts);
}

export interface ListQueryKeyBySearchServiceOutputArgs {
    /**
     * The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Azure Cognitive Search service associated with the specified resource group.
     */
    searchServiceName: pulumi.Input<string>;
}