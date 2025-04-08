import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a managed database.
 *
 * Uses Azure REST API version 2023-08-01.
 *
 * Other available API versions: 2017-03-01-preview, 2018-06-01-preview, 2019-06-01-preview, 2020-02-02-preview, 2020-08-01-preview, 2020-11-01-preview, 2021-02-01-preview, 2021-05-01-preview, 2021-08-01-preview, 2021-11-01, 2021-11-01-preview, 2022-02-01-preview, 2022-05-01-preview, 2022-08-01-preview, 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01-preview, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native sql [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getManagedDatabase(args: GetManagedDatabaseArgs, opts?: pulumi.InvokeOptions): Promise<GetManagedDatabaseResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:sql:getManagedDatabase", {
        "databaseName": args.databaseName,
        "managedInstanceName": args.managedInstanceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagedDatabaseArgs {
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
}

/**
 * A managed database resource.
 */
export interface GetManagedDatabaseResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Collation of the metadata catalog.
     */
    readonly catalogCollation?: string;
    /**
     * Collation of the managed database.
     */
    readonly collation?: string;
    /**
     * Creation date of the database.
     */
    readonly creationDate: string;
    /**
     * Geo paired region.
     */
    readonly defaultSecondaryLocation: string;
    /**
     * Earliest restore point in time for point in time restore.
     */
    readonly earliestRestorePoint: string;
    /**
     * Instance Failover Group resource identifier that this managed database belongs to.
     */
    readonly failoverGroupId: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Whether or not this database is a ledger database, which means all tables in the database are ledger tables. Note: the value of this property cannot be changed after the database has been created.
     */
    readonly isLedgerOn?: boolean;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Status of the database.
     */
    readonly status: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a managed database.
 *
 * Uses Azure REST API version 2023-08-01.
 *
 * Other available API versions: 2017-03-01-preview, 2018-06-01-preview, 2019-06-01-preview, 2020-02-02-preview, 2020-08-01-preview, 2020-11-01-preview, 2021-02-01-preview, 2021-05-01-preview, 2021-08-01-preview, 2021-11-01, 2021-11-01-preview, 2022-02-01-preview, 2022-05-01-preview, 2022-08-01-preview, 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01-preview, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native sql [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getManagedDatabaseOutput(args: GetManagedDatabaseOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetManagedDatabaseResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:sql:getManagedDatabase", {
        "databaseName": args.databaseName,
        "managedInstanceName": args.managedInstanceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetManagedDatabaseOutputArgs {
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
}