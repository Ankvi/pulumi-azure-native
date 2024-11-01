import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves a SQL Managed Instance resource
 * Azure REST API version: 2023-01-15-preview.
 *
 * Other available API versions: 2024-01-01, 2024-05-01-preview.
 */
export function getSqlManagedInstance(args: GetSqlManagedInstanceArgs, opts?: pulumi.InvokeOptions): Promise<GetSqlManagedInstanceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurearcdata:getSqlManagedInstance", {
        "resourceGroupName": args.resourceGroupName,
        "sqlManagedInstanceName": args.sqlManagedInstanceName,
    }, opts);
}

export interface GetSqlManagedInstanceArgs {
    /**
     * The name of the Azure resource group
     */
    resourceGroupName: string;
    /**
     * Name of SQL Managed Instance
     */
    sqlManagedInstanceName: string;
}

/**
 * A SqlManagedInstance.
 */
export interface GetSqlManagedInstanceResult {
    /**
     * The extendedLocation of the resource.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
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
     * null
     */
    readonly properties: types.outputs.SqlManagedInstancePropertiesResponse;
    /**
     * Resource sku.
     */
    readonly sku?: types.outputs.SqlManagedInstanceSkuResponse;
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
 * Retrieves a SQL Managed Instance resource
 * Azure REST API version: 2023-01-15-preview.
 *
 * Other available API versions: 2024-01-01, 2024-05-01-preview.
 */
export function getSqlManagedInstanceOutput(args: GetSqlManagedInstanceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSqlManagedInstanceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azurearcdata:getSqlManagedInstance", {
        "resourceGroupName": args.resourceGroupName,
        "sqlManagedInstanceName": args.sqlManagedInstanceName,
    }, opts);
}

export interface GetSqlManagedInstanceOutputArgs {
    /**
     * The name of the Azure resource group
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of SQL Managed Instance
     */
    sqlManagedInstanceName: pulumi.Input<string>;
}