import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the sensitivity label of a given column
 * Azure REST API version: 2021-06-01.
 *
 * Other available API versions: 2021-06-01-preview.
 */
export function getSqlPoolSensitivityLabel(args: GetSqlPoolSensitivityLabelArgs, opts?: pulumi.InvokeOptions): Promise<GetSqlPoolSensitivityLabelResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:synapse:getSqlPoolSensitivityLabel", {
        "columnName": args.columnName,
        "resourceGroupName": args.resourceGroupName,
        "schemaName": args.schemaName,
        "sensitivityLabelSource": args.sensitivityLabelSource,
        "sqlPoolName": args.sqlPoolName,
        "tableName": args.tableName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetSqlPoolSensitivityLabelArgs {
    /**
     * The name of the column.
     */
    columnName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the schema.
     */
    schemaName: string;
    /**
     * The source of the sensitivity label.
     */
    sensitivityLabelSource: string;
    /**
     * SQL pool name
     */
    sqlPoolName: string;
    /**
     * The name of the table.
     */
    tableName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * A sensitivity label.
 */
export interface GetSqlPoolSensitivityLabelResult {
    /**
     * The column name.
     */
    readonly columnName: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The information type.
     */
    readonly informationType?: string;
    /**
     * The information type ID.
     */
    readonly informationTypeId?: string;
    /**
     * Is sensitivity recommendation disabled. Applicable for recommended sensitivity label only. Specifies whether the sensitivity recommendation on this column is disabled (dismissed) or not.
     */
    readonly isDisabled: boolean;
    /**
     * The label ID.
     */
    readonly labelId?: string;
    /**
     * The label name.
     */
    readonly labelName?: string;
    /**
     * managed by
     */
    readonly managedBy: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    readonly rank?: string;
    /**
     * The schema name.
     */
    readonly schemaName: string;
    /**
     * The table name.
     */
    readonly tableName: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the sensitivity label of a given column
 * Azure REST API version: 2021-06-01.
 *
 * Other available API versions: 2021-06-01-preview.
 */
export function getSqlPoolSensitivityLabelOutput(args: GetSqlPoolSensitivityLabelOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSqlPoolSensitivityLabelResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:synapse:getSqlPoolSensitivityLabel", {
        "columnName": args.columnName,
        "resourceGroupName": args.resourceGroupName,
        "schemaName": args.schemaName,
        "sensitivityLabelSource": args.sensitivityLabelSource,
        "sqlPoolName": args.sqlPoolName,
        "tableName": args.tableName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetSqlPoolSensitivityLabelOutputArgs {
    /**
     * The name of the column.
     */
    columnName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the schema.
     */
    schemaName: pulumi.Input<string>;
    /**
     * The source of the sensitivity label.
     */
    sensitivityLabelSource: pulumi.Input<string>;
    /**
     * SQL pool name
     */
    sqlPoolName: pulumi.Input<string>;
    /**
     * The name of the table.
     */
    tableName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}