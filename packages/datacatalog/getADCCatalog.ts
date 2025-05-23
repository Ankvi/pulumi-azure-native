import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Get Azure Data Catalog Service operation retrieves a json representation of the data catalog.
 *
 * Uses Azure REST API version 2016-03-30.
 */
export function getADCCatalog(args: GetADCCatalogArgs, opts?: pulumi.InvokeOptions): Promise<GetADCCatalogResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datacatalog:getADCCatalog", {
        "catalogName": args.catalogName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetADCCatalogArgs {
    /**
     * The name of the data catalog in the specified subscription and resource group.
     */
    catalogName: string;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Azure Data Catalog.
 */
export interface GetADCCatalogResult {
    /**
     * Azure data catalog admin list.
     */
    readonly admins?: types.outputs.PrincipalsResponse[];
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Automatic unit adjustment enabled or not.
     */
    readonly enableAutomaticUnitAdjustment?: boolean;
    /**
     * Resource etag
     */
    readonly etag?: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Resource location
     */
    readonly location?: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Azure data catalog SKU.
     */
    readonly sku?: string;
    /**
     * Azure data catalog provision status.
     */
    readonly successfullyProvisioned?: boolean;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * Azure data catalog units.
     */
    readonly units?: number;
    /**
     * Azure data catalog user list.
     */
    readonly users?: types.outputs.PrincipalsResponse[];
}
/**
 * The Get Azure Data Catalog Service operation retrieves a json representation of the data catalog.
 *
 * Uses Azure REST API version 2016-03-30.
 */
export function getADCCatalogOutput(args: GetADCCatalogOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetADCCatalogResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datacatalog:getADCCatalog", {
        "catalogName": args.catalogName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetADCCatalogOutputArgs {
    /**
     * The name of the data catalog in the specified subscription and resource group.
     */
    catalogName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}