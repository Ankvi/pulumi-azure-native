import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the primary and secondary admin API keys for the specified Azure Cognitive Search service.
 * Azure REST API version: 2022-09-01.
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
 * Azure REST API version: 2022-09-01.
 */
export function listAdminKeyOutput(args: ListAdminKeyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListAdminKeyResult> {
    return pulumi.output(args).apply((a: any) => listAdminKey(a, opts))
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
