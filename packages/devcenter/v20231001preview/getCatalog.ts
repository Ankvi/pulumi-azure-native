import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a catalog
 */
export function getCatalog(args: GetCatalogArgs, opts?: pulumi.InvokeOptions): Promise<GetCatalogResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devcenter/v20231001preview:getCatalog", {
        "catalogName": args.catalogName,
        "devCenterName": args.devCenterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCatalogArgs {
    /**
     * The name of the Catalog.
     */
    catalogName: string;
    /**
     * The name of the devcenter.
     */
    devCenterName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Represents a catalog.
 */
export interface GetCatalogResult {
    /**
     * Properties for an Azure DevOps catalog type.
     */
    readonly adoGit?: types.outputs.GitCatalogResponse;
    /**
     * The connection state of the catalog.
     */
    readonly connectionState: string;
    /**
     * Properties for a GitHub catalog type.
     */
    readonly gitHub?: types.outputs.GitCatalogResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * When the catalog was last connected.
     */
    readonly lastConnectionTime: string;
    /**
     * Stats of the latest synchronization.
     */
    readonly lastSyncStats: types.outputs.SyncStatsResponse;
    /**
     * When the catalog was last synced.
     */
    readonly lastSyncTime: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * The synchronization state of the catalog.
     */
    readonly syncState: string;
    /**
     * Indicates the type of sync that is configured for the catalog.
     */
    readonly syncType?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets a catalog
 */
export function getCatalogOutput(args: GetCatalogOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCatalogResult> {
    return pulumi.output(args).apply((a: any) => getCatalog(a, opts))
}

export interface GetCatalogOutputArgs {
    /**
     * The name of the Catalog.
     */
    catalogName: pulumi.Input<string>;
    /**
     * The name of the devcenter.
     */
    devCenterName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}