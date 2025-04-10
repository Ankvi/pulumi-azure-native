import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Describes a database on the RedisEnterprise cluster
 *
 * Uses Azure REST API version 2023-03-01-preview. In version 1.x of the Azure Native provider, it used API version 2021-03-01.
 *
 * Other available API versions: 2023-07-01, 2023-08-01-preview, 2023-10-01-preview, 2023-11-01, 2024-02-01, 2024-03-01-preview, 2024-06-01-preview, 2024-09-01-preview, 2024-10-01, 2025-04-01.
 */
export class Database extends pulumi.CustomResource {
    /**
     * Get an existing Database resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Database {
        return new Database(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:cache:Database';

    /**
     * Returns true if the given object is an instance of Database.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Database {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Database.__pulumiType;
    }

    /**
     * Specifies whether redis clients can connect using TLS-encrypted or plaintext redis protocols. Default is TLS-encrypted.
     */
    public readonly clientProtocol!: pulumi.Output<string | undefined>;
    /**
     * Clustering policy - default is OSSCluster. Specified at create time.
     */
    public readonly clusteringPolicy!: pulumi.Output<string | undefined>;
    /**
     * Redis eviction policy - default is VolatileLRU
     */
    public readonly evictionPolicy!: pulumi.Output<string | undefined>;
    /**
     * Optional set of properties to configure geo replication for this database.
     */
    public readonly geoReplication!: pulumi.Output<types.outputs.DatabasePropertiesResponseGeoReplication | undefined>;
    /**
     * Optional set of redis modules to enable in this database - modules can only be added at creation time.
     */
    public readonly modules!: pulumi.Output<types.outputs.ModuleResponse[] | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Persistence settings
     */
    public readonly persistence!: pulumi.Output<types.outputs.PersistenceResponse | undefined>;
    /**
     * TCP port of the database endpoint. Specified at create time. Defaults to an available port.
     */
    public readonly port!: pulumi.Output<number | undefined>;
    /**
     * Current provisioning status of the database
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Current resource status of the database
     */
    public /*out*/ readonly resourceState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Database resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabaseArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.clusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["clientProtocol"] = args ? args.clientProtocol : undefined;
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["clusteringPolicy"] = args ? args.clusteringPolicy : undefined;
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["evictionPolicy"] = args ? args.evictionPolicy : undefined;
            resourceInputs["geoReplication"] = args ? args.geoReplication : undefined;
            resourceInputs["modules"] = args ? args.modules : undefined;
            resourceInputs["persistence"] = args ? args.persistence : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["clientProtocol"] = undefined /*out*/;
            resourceInputs["clusteringPolicy"] = undefined /*out*/;
            resourceInputs["evictionPolicy"] = undefined /*out*/;
            resourceInputs["geoReplication"] = undefined /*out*/;
            resourceInputs["modules"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["persistence"] = undefined /*out*/;
            resourceInputs["port"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:cache/v20201001preview:Database" }, { type: "azure-native:cache/v20210201preview:Database" }, { type: "azure-native:cache/v20210301:Database" }, { type: "azure-native:cache/v20210801:Database" }, { type: "azure-native:cache/v20220101:Database" }, { type: "azure-native:cache/v20221101preview:Database" }, { type: "azure-native:cache/v20230301preview:Database" }, { type: "azure-native:cache/v20230701:Database" }, { type: "azure-native:cache/v20230801preview:Database" }, { type: "azure-native:cache/v20231001preview:Database" }, { type: "azure-native:cache/v20231101:Database" }, { type: "azure-native:cache/v20240201:Database" }, { type: "azure-native:cache/v20240301preview:Database" }, { type: "azure-native:cache/v20240601preview:Database" }, { type: "azure-native:cache/v20240901preview:Database" }, { type: "azure-native:cache/v20241001:Database" }, { type: "azure-native:cache/v20250401:Database" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Database.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Database resource.
 */
export interface DatabaseArgs {
    /**
     * Specifies whether redis clients can connect using TLS-encrypted or plaintext redis protocols. Default is TLS-encrypted.
     */
    clientProtocol?: pulumi.Input<string | types.enums.Protocol>;
    /**
     * The name of the RedisEnterprise cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * Clustering policy - default is OSSCluster. Specified at create time.
     */
    clusteringPolicy?: pulumi.Input<string | types.enums.ClusteringPolicy>;
    /**
     * The name of the database.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * Redis eviction policy - default is VolatileLRU
     */
    evictionPolicy?: pulumi.Input<string | types.enums.EvictionPolicy>;
    /**
     * Optional set of properties to configure geo replication for this database.
     */
    geoReplication?: pulumi.Input<types.inputs.DatabasePropertiesGeoReplicationArgs>;
    /**
     * Optional set of redis modules to enable in this database - modules can only be added at creation time.
     */
    modules?: pulumi.Input<pulumi.Input<types.inputs.ModuleArgs>[]>;
    /**
     * Persistence settings
     */
    persistence?: pulumi.Input<types.inputs.PersistenceArgs>;
    /**
     * TCP port of the database endpoint. Specified at create time. Defaults to an available port.
     */
    port?: pulumi.Input<number>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}