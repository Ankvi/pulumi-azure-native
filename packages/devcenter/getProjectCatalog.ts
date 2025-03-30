import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an associated project catalog.
 *
 * Uses Azure REST API version 2024-02-01.
 *
 * Other available API versions: 2024-05-01-preview, 2024-06-01-preview, 2024-07-01-preview, 2024-08-01-preview, 2024-10-01-preview, 2025-02-01.
 */
export function getProjectCatalog(args: GetProjectCatalogArgs, opts?: pulumi.InvokeOptions): Promise<GetProjectCatalogResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devcenter:getProjectCatalog", {
        "catalogName": args.catalogName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetProjectCatalogArgs {
    /**
     * The name of the Catalog.
     */
    catalogName: string;
    /**
     * The name of the project.
     */
    projectName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Represents a catalog.
 */
export interface GetProjectCatalogResult {
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
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
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
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets an associated project catalog.
 *
 * Uses Azure REST API version 2024-02-01.
 *
 * Other available API versions: 2024-05-01-preview, 2024-06-01-preview, 2024-07-01-preview, 2024-08-01-preview, 2024-10-01-preview, 2025-02-01.
 */
export function getProjectCatalogOutput(args: GetProjectCatalogOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetProjectCatalogResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:devcenter:getProjectCatalog", {
        "catalogName": args.catalogName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetProjectCatalogOutputArgs {
    /**
     * The name of the Catalog.
     */
    catalogName: pulumi.Input<string>;
    /**
     * The name of the project.
     */
    projectName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}