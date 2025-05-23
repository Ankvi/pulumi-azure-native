import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about a database in a RedisEnterprise cluster.
 *
 * Uses Azure REST API version 2024-03-01-preview.
 *
 * Other available API versions: 2020-10-01-preview, 2021-02-01-preview, 2021-03-01, 2021-08-01, 2022-01-01, 2022-11-01-preview, 2023-03-01-preview, 2023-07-01, 2023-08-01-preview, 2023-10-01-preview, 2023-11-01, 2024-02-01, 2024-06-01-preview, 2024-09-01-preview, 2024-10-01, 2025-04-01, 2025-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native redisenterprise [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDatabase(args: GetDatabaseArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:redisenterprise:getDatabase", {
        "clusterName": args.clusterName,
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDatabaseArgs {
    /**
     * The name of the Redis Enterprise cluster.
     */
    clusterName: string;
    /**
     * The name of the Redis Enterprise database.
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Specifies whether redis clients can connect using TLS-encrypted or plaintext redis protocols. Default is TLS-encrypted.
     */
    readonly clientProtocol?: string;
    /**
     * Clustering policy - default is OSSCluster. Specified at create time.
     */
    readonly clusteringPolicy?: string;
    /**
     * Option to defer upgrade when newest version is released - default is NotDeferred. Learn more:  https://aka.ms/redisversionupgrade
     */
    readonly deferUpgrade?: string;
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
     * Version of Redis the database is running on, e.g. '6.0'
     */
    readonly redisVersion: string;
    /**
     * Current resource status of the database
     */
    readonly resourceState: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets information about a database in a RedisEnterprise cluster.
 *
 * Uses Azure REST API version 2024-03-01-preview.
 *
 * Other available API versions: 2020-10-01-preview, 2021-02-01-preview, 2021-03-01, 2021-08-01, 2022-01-01, 2022-11-01-preview, 2023-03-01-preview, 2023-07-01, 2023-08-01-preview, 2023-10-01-preview, 2023-11-01, 2024-02-01, 2024-06-01-preview, 2024-09-01-preview, 2024-10-01, 2025-04-01, 2025-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native redisenterprise [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDatabaseOutput(args: GetDatabaseOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDatabaseResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:redisenterprise:getDatabase", {
        "clusterName": args.clusterName,
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDatabaseOutputArgs {
    /**
     * The name of the Redis Enterprise cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the Redis Enterprise database.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}