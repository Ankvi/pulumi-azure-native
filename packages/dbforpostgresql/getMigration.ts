import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets details of a migration.
 *
 * Uses Azure REST API version 2024-08-01.
 *
 * Other available API versions: 2023-03-01-preview, 2023-06-01-preview, 2023-12-01-preview, 2024-03-01-preview, 2024-11-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native dbforpostgresql [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getMigration(args: GetMigrationArgs, opts?: pulumi.InvokeOptions): Promise<GetMigrationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dbforpostgresql:getMigration", {
        "migrationName": args.migrationName,
        "resourceGroupName": args.resourceGroupName,
        "subscriptionId": args.subscriptionId,
        "targetDbServerName": args.targetDbServerName,
    }, opts);
}

export interface GetMigrationArgs {
    /**
     * The name of the migration.
     */
    migrationName: string;
    /**
     * The resource group name of the target database server.
     */
    resourceGroupName: string;
    /**
     * The subscription ID of the target database server.
     */
    subscriptionId?: string;
    /**
     * The name of the target database server.
     */
    targetDbServerName: string;
}

/**
 * Represents a migration resource.
 */
export interface GetMigrationResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * To trigger cancel for entire migration we need to send this flag as True
     */
    readonly cancel?: string;
    /**
     * Current status of migration
     */
    readonly currentStatus: types.outputs.MigrationStatusResponse;
    /**
     * When you want to trigger cancel for specific databases send cancel flag as True and database names in this array
     */
    readonly dbsToCancelMigrationOn?: string[];
    /**
     * Number of databases to migrate
     */
    readonly dbsToMigrate?: string[];
    /**
     * When you want to trigger cutover for specific databases send triggerCutover flag as True and database names in this array
     */
    readonly dbsToTriggerCutoverOn?: string[];
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * To migrate roles and permissions we need to send this flag as True
     */
    readonly migrateRoles?: string;
    /**
     * ID for migration, a GUID.
     */
    readonly migrationId: string;
    /**
     * ResourceId of the private endpoint migration instance
     */
    readonly migrationInstanceResourceId?: string;
    /**
     * There are two types of migration modes Online and Offline
     */
    readonly migrationMode?: string;
    /**
     * This indicates the supported Migration option for the migration
     */
    readonly migrationOption?: string;
    /**
     * End time in UTC for migration window
     */
    readonly migrationWindowEndTimeInUtc?: string;
    /**
     * Start time in UTC for migration window
     */
    readonly migrationWindowStartTimeInUtc?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Indicates whether the databases on the target server can be overwritten, if already present. If set to False, the migration workflow will wait for a confirmation, if it detects that the database already exists.
     */
    readonly overwriteDbsInTarget?: string;
    /**
     * Indicates whether to setup LogicalReplicationOnSourceDb, if needed
     */
    readonly setupLogicalReplicationOnSourceDbIfNeeded?: string;
    /**
     * Source server fully qualified domain name (FQDN) or IP address. It is a optional value, if customer provide it, migration service will always use it for connection
     */
    readonly sourceDbServerFullyQualifiedDomainName?: string;
    /**
     * Metadata of the source database server
     */
    readonly sourceDbServerMetadata: types.outputs.DbServerMetadataResponse;
    /**
     * ResourceId of the source database server in case the sourceType is PostgreSQLSingleServer. For other source types this should be ipaddress:port@username or hostname:port@username
     */
    readonly sourceDbServerResourceId?: string;
    /**
     * migration source server type : OnPremises, AWS, GCP, AzureVM, PostgreSQLSingleServer, AWS_RDS, AWS_AURORA, AWS_EC2, GCP_CloudSQL, GCP_AlloyDB, GCP_Compute, or EDB
     */
    readonly sourceType?: string;
    /**
     * SSL modes for migration. Default SSL mode for PostgreSQLSingleServer is VerifyFull and Prefer for other source types
     */
    readonly sslMode?: string;
    /**
     * Indicates whether the data migration should start right away
     */
    readonly startDataMigration?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Target server fully qualified domain name (FQDN) or IP address. It is a optional value, if customer provide it, migration service will always use it for connection
     */
    readonly targetDbServerFullyQualifiedDomainName?: string;
    /**
     * Metadata of the target database server
     */
    readonly targetDbServerMetadata: types.outputs.DbServerMetadataResponse;
    /**
     * ResourceId of the source database server
     */
    readonly targetDbServerResourceId: string;
    /**
     * To trigger cutover for entire migration we need to send this flag as True
     */
    readonly triggerCutover?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets details of a migration.
 *
 * Uses Azure REST API version 2024-08-01.
 *
 * Other available API versions: 2023-03-01-preview, 2023-06-01-preview, 2023-12-01-preview, 2024-03-01-preview, 2024-11-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native dbforpostgresql [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getMigrationOutput(args: GetMigrationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetMigrationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:dbforpostgresql:getMigration", {
        "migrationName": args.migrationName,
        "resourceGroupName": args.resourceGroupName,
        "subscriptionId": args.subscriptionId,
        "targetDbServerName": args.targetDbServerName,
    }, opts);
}

export interface GetMigrationOutputArgs {
    /**
     * The name of the migration.
     */
    migrationName: pulumi.Input<string>;
    /**
     * The resource group name of the target database server.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The subscription ID of the target database server.
     */
    subscriptionId?: pulumi.Input<string>;
    /**
     * The name of the target database server.
     */
    targetDbServerName: pulumi.Input<string>;
}