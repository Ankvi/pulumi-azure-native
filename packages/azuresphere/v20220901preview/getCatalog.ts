import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get a Catalog
 */
export function getCatalog(args: GetCatalogArgs, opts?: pulumi.InvokeOptions): Promise<GetCatalogResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azuresphere/v20220901preview:getCatalog", {
        "catalogName": args.catalogName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCatalogArgs {
    /**
     * Name of catalog
     */
    catalogName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * An Azure Sphere catalog
 */
export interface GetCatalogResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The status of the last operation.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.azuresphere.v20220901preview.SystemDataResponse;
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
 * Get a Catalog
 */
export function getCatalogOutput(args: GetCatalogOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCatalogResult> {
    return pulumi.output(args).apply((a: any) => getCatalog(a, opts))
}

export interface GetCatalogOutputArgs {
    /**
     * Name of catalog
     */
    catalogName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
