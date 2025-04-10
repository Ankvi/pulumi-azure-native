import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the primary and secondary admin API keys for the specified Azure Cognitive Search service.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2021-04-01-preview, 2023-11-01, 2024-03-01-preview, 2024-06-01-preview, 2025-02-01-preview.
 */
export function listAdminKey(args: ListAdminKeyArgs, opts?: pulumi.InvokeOptions): Promise<ListAdminKeyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:search:listAdminKey", {
        "resourceGroupName": args.resourceGroupName,
        "searchServiceName": args.searchServiceName,
    }, opts);
}

export interface ListAdminKeyArgs {
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
 * Response containing the primary and secondary admin API keys for a given Azure Cognitive Search service.
 */
export interface ListAdminKeyResult {
    /**
     * The primary admin API key of the search service.
     */
    readonly primaryKey: string;
    /**
     * The secondary admin API key of the search service.
     */
    readonly secondaryKey: string;
}
/**
 * Gets the primary and secondary admin API keys for the specified Azure Cognitive Search service.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2021-04-01-preview, 2023-11-01, 2024-03-01-preview, 2024-06-01-preview, 2025-02-01-preview.
 */
export function listAdminKeyOutput(args: ListAdminKeyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListAdminKeyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:search:listAdminKey", {
        "resourceGroupName": args.resourceGroupName,
        "searchServiceName": args.searchServiceName,
    }, opts);
}

export interface ListAdminKeyOutputArgs {
    /**
     * The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Azure Cognitive Search service associated with the specified resource group.
     */
    searchServiceName: pulumi.Input<string>;
}