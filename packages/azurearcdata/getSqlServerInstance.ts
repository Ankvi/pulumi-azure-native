import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves a SQL Server Instance resource
 *
 * Uses Azure REST API version 2023-01-15-preview.
 *
 * Other available API versions: 2024-01-01, 2024-05-01-preview, 2025-03-01-preview.
 */
export function getSqlServerInstance(args: GetSqlServerInstanceArgs, opts?: pulumi.InvokeOptions): Promise<GetSqlServerInstanceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurearcdata:getSqlServerInstance", {
        "resourceGroupName": args.resourceGroupName,
        "sqlServerInstanceName": args.sqlServerInstanceName,
    }, opts);
}

export interface GetSqlServerInstanceArgs {
    /**
     * The name of the Azure resource group
     */
    resourceGroupName: string;
    /**
     * Name of SQL Server Instance
     */
    sqlServerInstanceName: string;
}

/**
 * A SqlServerInstance.
 */
export interface GetSqlServerInstanceResult {
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
    readonly properties: types.outputs.SqlServerInstancePropertiesResponse;
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
 * Retrieves a SQL Server Instance resource
 *
 * Uses Azure REST API version 2023-01-15-preview.
 *
 * Other available API versions: 2024-01-01, 2024-05-01-preview, 2025-03-01-preview.
 */
export function getSqlServerInstanceOutput(args: GetSqlServerInstanceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSqlServerInstanceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azurearcdata:getSqlServerInstance", {
        "resourceGroupName": args.resourceGroupName,
        "sqlServerInstanceName": args.sqlServerInstanceName,
    }, opts);
}

export interface GetSqlServerInstanceOutputArgs {
    /**
     * The name of the Azure resource group
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of SQL Server Instance
     */
    sqlServerInstanceName: pulumi.Input<string>;
}