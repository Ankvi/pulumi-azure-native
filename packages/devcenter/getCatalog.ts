import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a catalog
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2023-08-01-preview, 2023-10-01-preview, 2024-02-01, 2024-05-01-preview, 2024-06-01-preview, 2024-07-01-preview, 2024-08-01-preview.
 */
export function getCatalog(args: GetCatalogArgs, opts?: pulumi.InvokeOptions): Promise<GetCatalogResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devcenter:getCatalog", {
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
     * Properties for a GitHub catalog type.
     */
    readonly gitHub?: types.outputs.GitCatalogResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
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
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2023-08-01-preview, 2023-10-01-preview, 2024-02-01, 2024-05-01-preview, 2024-06-01-preview, 2024-07-01-preview, 2024-08-01-preview.
 */
export function getCatalogOutput(args: GetCatalogOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCatalogResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:devcenter:getCatalog", {
        "catalogName": args.catalogName,
        "devCenterName": args.devCenterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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