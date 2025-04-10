import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a managed database.
 *
 * Uses Azure REST API version 2021-11-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01, 2023-08-01-preview, 2024-05-01-preview.
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
 * Uses Azure REST API version 2021-11-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01, 2023-08-01-preview, 2024-05-01-preview.
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