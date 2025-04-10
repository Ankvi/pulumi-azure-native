import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the sensitivity label of a given column
 *
 * Uses Azure REST API version 2021-11-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01, 2023-08-01-preview, 2024-05-01-preview.
 */
export function getSensitivityLabel(args: GetSensitivityLabelArgs, opts?: pulumi.InvokeOptions): Promise<GetSensitivityLabelResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql:getSensitivityLabel", {
        "columnName": args.columnName,
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
        "schemaName": args.schemaName,
        "sensitivityLabelSource": args.sensitivityLabelSource,
        "serverName": args.serverName,
        "tableName": args.tableName,
    }, opts);
}

export interface GetSensitivityLabelArgs {
    /**
     * The name of the column.
     */
    columnName: string;
    /**
     * The name of the database.
     */
    databaseName: string;
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
     * The name of the server.
     */
    serverName: string;
    /**
     * The name of the table.
     */
    tableName: string;
}

/**
 * A sensitivity label.
 */
export interface GetSensitivityLabelResult {
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
 *
 * Uses Azure REST API version 2021-11-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01, 2023-08-01-preview, 2024-05-01-preview.
 */
export function getSensitivityLabelOutput(args: GetSensitivityLabelOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSensitivityLabelResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:sql:getSensitivityLabel", {
        "columnName": args.columnName,
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
        "schemaName": args.schemaName,
        "sensitivityLabelSource": args.sensitivityLabelSource,
        "serverName": args.serverName,
        "tableName": args.tableName,
    }, opts);
}

export interface GetSensitivityLabelOutputArgs {
    /**
     * The name of the column.
     */
    columnName: pulumi.Input<string>;
    /**
     * The name of the database.
     */
    databaseName: pulumi.Input<string>;
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
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
    /**
     * The name of the table.
     */
    tableName: pulumi.Input<string>;
}