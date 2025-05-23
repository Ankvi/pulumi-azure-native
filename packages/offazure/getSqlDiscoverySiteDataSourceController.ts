import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a SqlDiscoverySiteDataSource
 *
 * Uses Azure REST API version 2023-10-01-preview.
 *
 * Other available API versions: 2023-06-06, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native offazure [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 *
 * Uses Azure REST API version 2023-10-01-preview.
 *
 * Other available API versions: 2023-06-06, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native offazure [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSqlDiscoverySiteDataSourceControllerOutput(args: GetSqlDiscoverySiteDataSourceControllerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSqlDiscoverySiteDataSourceControllerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:offazure:getSqlDiscoverySiteDataSourceController", {
        "discoverySiteDataSourceName": args.discoverySiteDataSourceName,
        "resourceGroupName": args.resourceGroupName,
        "siteName": args.siteName,
        "sqlSiteName": args.sqlSiteName,
    }, opts);
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