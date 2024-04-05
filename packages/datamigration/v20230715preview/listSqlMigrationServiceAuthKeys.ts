import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Retrieve the List of Authentication Keys for Self Hosted Integration Runtime.
 */
export function listSqlMigrationServiceAuthKeys(args: ListSqlMigrationServiceAuthKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListSqlMigrationServiceAuthKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datamigration/v20230715preview:listSqlMigrationServiceAuthKeys", {
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
 */
export function listSqlMigrationServiceAuthKeysOutput(args: ListSqlMigrationServiceAuthKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListSqlMigrationServiceAuthKeysResult> {
    return pulumi.output(args).apply((a: any) => listSqlMigrationServiceAuthKeys(a, opts))
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