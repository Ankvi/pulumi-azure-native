import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Retrieve the List of Authentication Keys for Self Hosted Integration Runtime.
 *
 * Uses Azure REST API version 2022-03-30-preview.
 *
 * Other available API versions: 2023-07-15-preview.
 */
export function listSqlMigrationServiceAuthKeys(args: ListSqlMigrationServiceAuthKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListSqlMigrationServiceAuthKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datamigration:listSqlMigrationServiceAuthKeys", {
        "resourceGroupName": args.resourceGroupName,
        "sqlMigrationServiceName": args.sqlMigrationServiceName,
    }, opts);
}

export interface ListSqlMigrationServiceAuthKeysArgs {
    /**
     * Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * Name of the SQL Migration Service.
     */
    sqlMigrationServiceName: string;
}

/**
 * An authentication key.
 */
export interface ListSqlMigrationServiceAuthKeysResult {
    /**
     * The first authentication key.
     */
    readonly authKey1?: string;
    /**
     * The second authentication key.
     */
    readonly authKey2?: string;
}
/**
 * Retrieve the List of Authentication Keys for Self Hosted Integration Runtime.
 *
 * Uses Azure REST API version 2022-03-30-preview.
 *
 * Other available API versions: 2023-07-15-preview.
 */
export function listSqlMigrationServiceAuthKeysOutput(args: ListSqlMigrationServiceAuthKeysOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListSqlMigrationServiceAuthKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datamigration:listSqlMigrationServiceAuthKeys", {
        "resourceGroupName": args.resourceGroupName,
        "sqlMigrationServiceName": args.sqlMigrationServiceName,
    }, opts);
}

export interface ListSqlMigrationServiceAuthKeysOutputArgs {
    /**
     * Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the SQL Migration Service.
     */
    sqlMigrationServiceName: pulumi.Input<string>;
}