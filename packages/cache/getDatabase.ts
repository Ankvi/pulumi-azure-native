import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about a database in a RedisEnterprise cluster.
 *
 * Uses Azure REST API version 2023-03-01-preview.
 *
 * Other available API versions: 2023-07-01, 2023-08-01-preview, 2023-10-01-preview, 2023-11-01, 2024-02-01, 2024-03-01-preview, 2024-06-01-preview, 2024-09-01-preview, 2024-10-01, 2025-04-01.
 */
export function getDatabase(args: GetDatabaseArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cache:getDatabase", {
        "clusterName": args.clusterName,
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDatabaseArgs {
    /**
     * The name of the RedisEnterprise cluster.
     */
    clusterName: string;
    /**
     * The name of the database.
     */
    databaseName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Describes a database on the RedisEnterprise cluster
 */
export interface GetDatabaseResult {
    /**
     * Specifies whether redis clients can connect using TLS-encrypted or plaintext redis protocols. Default is TLS-encrypted.
     */
    readonly clientProtocol?: string;
    /**
     * Clustering policy - default is OSSCluster. Specified at create time.
     */
    readonly clusteringPolicy?: string;
    /**
     * Redis eviction policy - default is VolatileLRU
     */
    readonly evictionPolicy?: string;
    /**
     * Optional set of properties to configure geo replication for this database.
     */
    readonly geoReplication?: types.outputs.DatabasePropertiesResponseGeoReplication;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Optional set of redis modules to enable in this database - modules can only be added at creation time.
     */
    readonly modules?: types.outputs.ModuleResponse[];
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Persistence settings
     */
    readonly persistence?: types.outputs.PersistenceResponse;
    /**
     * TCP port of the database endpoint. Specified at create time. Defaults to an available port.
     */
    readonly port?: number;
    /**
     * Current provisioning status of the database
     */
    readonly provisioningState: string;
    /**
     * Current resource status of the database
     */
    readonly resourceState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets information about a database in a RedisEnterprise cluster.
 *
 * Uses Azure REST API version 2023-03-01-preview.
 *
 * Other available API versions: 2023-07-01, 2023-08-01-preview, 2023-10-01-preview, 2023-11-01, 2024-02-01, 2024-03-01-preview, 2024-06-01-preview, 2024-09-01-preview, 2024-10-01, 2025-04-01.
 */
export function getDatabaseOutput(args: GetDatabaseOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDatabaseResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cache:getDatabase", {
        "clusterName": args.clusterName,
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDatabaseOutputArgs {
    /**
     * The name of the RedisEnterprise cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the database.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}