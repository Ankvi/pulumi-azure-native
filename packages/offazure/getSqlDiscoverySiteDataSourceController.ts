import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a SqlDiscoverySiteDataSource
 * Azure REST API version: 2023-06-06.
 */
export function getSqlDiscoverySiteDataSourceController(args: GetSqlDiscoverySiteDataSourceControllerArgs, opts?: pulumi.InvokeOptions): Promise<GetSqlDiscoverySiteDataSourceControllerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:offazure:getSqlDiscoverySiteDataSourceController", {
        "discoverySiteDataSourceName": args.discoverySiteDataSourceName,
        "resourceGroupName": args.resourceGroupName,
        "siteName": args.siteName,
        "sqlSiteName": args.sqlSiteName,
    }, opts);
}

export interface GetSqlDiscoverySiteDataSourceControllerArgs {
    /**
     * SQL Discovery site data source name.
     */
    discoverySiteDataSourceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Site name
     */
    siteName: string;
    /**
     * SQL site name.
     */
    sqlSiteName: string;
}

/**
 * A SQL discovery site data source resource.
 */
export interface GetSqlDiscoverySiteDataSourceControllerResult {
    /**
     * Gets or sets the discovery site Id.
     */
    readonly discoverySiteId?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * provisioning state enum
     */
    readonly provisioningState: string;
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
 * Get a SqlDiscoverySiteDataSource
 * Azure REST API version: 2023-06-06.
 */
export function getSqlDiscoverySiteDataSourceControllerOutput(args: GetSqlDiscoverySiteDataSourceControllerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSqlDiscoverySiteDataSourceControllerResult> {
    return pulumi.output(args).apply((a: any) => getSqlDiscoverySiteDataSourceController(a, opts))
}

export interface GetSqlDiscoverySiteDataSourceControllerOutputArgs {
    /**
     * SQL Discovery site data source name.
     */
    discoverySiteDataSourceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Site name
     */
    siteName: pulumi.Input<string>;
    /**
     * SQL site name.
     */
    sqlSiteName: pulumi.Input<string>;
}
