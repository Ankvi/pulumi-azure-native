import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the sensitivity label of a given column
 * Azure REST API version: 2021-11-01.
 */
export function getManagedDatabaseSensitivityLabel(args: GetManagedDatabaseSensitivityLabelArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedDatabaseSensitivityLabelResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql:getManagedDatabaseSensitivityLabel", {
        "columnName": args.columnName,
        "databaseName": args.databaseName,
        "managedInstanceName": args.managedInstanceName,
        "resourceGroupName": args.resourceGroupName,
        "schemaName": args.schemaName,
        "sensitivityLabelSource": args.sensitivityLabelSource,
        "tableName": args.tableName,
    }, opts);
}

export interface GetManagedDatabaseSensitivityLabelArgs {
    /**
     * The name of the column.
     */
    columnName: string;
    /**
     * The name of the database.
     */
    databaseName: string;
    /**
     * The name of the managed instance.
     */
    managedInstanceName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
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
     * The name of the table.
     */
    tableName: string;
}

/**
 * A sensitivity label.
 */
export interface GetManagedDatabaseSensitivityLabelResult {
    /**
     * The column name.
     */
    readonly columnName: string;
    /**
     * Resource ID.
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
     * Resource that manages the sensitivity label.
     */
    readonly managedBy: string;
    /**
     * Resource name.
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
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets the sensitivity label of a given column
 * Azure REST API version: 2021-11-01.
 */
export function getManagedDatabaseSensitivityLabelOutput(args: GetManagedDatabaseSensitivityLabelOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagedDatabaseSensitivityLabelResult> {
    return pulumi.output(args).apply((a: any) => getManagedDatabaseSensitivityLabel(a, opts))
}

export interface GetManagedDatabaseSensitivityLabelOutputArgs {
    /**
     * The name of the column.
     */
    columnName: pulumi.Input<string>;
    /**
     * The name of the database.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The name of the managed instance.
     */
    managedInstanceName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
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
     * The name of the table.
     */
    tableName: pulumi.Input<string>;
}
