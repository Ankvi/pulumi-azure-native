import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Represents a database elastic pool.
 */
export class ElasticPool extends pulumi.CustomResource {
    /**
     * Get an existing ElasticPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ElasticPool {
        return new ElasticPool(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql/v20140401:ElasticPool';

    /**
     * Returns true if the given object is an instance of ElasticPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ElasticPool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ElasticPool.__pulumiType;
    }

    /**
     * The creation date of the elastic pool (ISO8601 format).
     */
    public /*out*/ readonly creationDate!: pulumi.Output<string>;
    /**
     * The maximum DTU any one database can consume.
     */
    public readonly databaseDtuMax!: pulumi.Output<number | undefined>;
    /**
     * The minimum DTU all databases are guaranteed.
     */
    public readonly databaseDtuMin!: pulumi.Output<number | undefined>;
    /**
     * The total shared DTU for the database elastic pool.
     */
    public readonly dtu!: pulumi.Output<number | undefined>;
    /**
     * The edition of the elastic pool.
     */
    public readonly edition!: pulumi.Output<string | undefined>;
    /**
     * Kind of elastic pool.  This is metadata used for the Azure portal experience.
     */
    public /*out*/ readonly kind!: pulumi.Output<string>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The state of the elastic pool.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * Gets storage limit for the database elastic pool in MB.
     */
    public readonly storageMB!: pulumi.Output<number | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Whether or not this database elastic pool is zone redundant, which means the replicas of this database will be spread across multiple availability zones.
     */
    public readonly zoneRedundant!: pulumi.Output<boolean | undefined>;

    /**
     * Create a ElasticPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ElasticPoolArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverName'");
            }
            resourceInputs["databaseDtuMax"] = args ? args.databaseDtuMax : undefined;
            resourceInputs["databaseDtuMin"] = args ? args.databaseDtuMin : undefined;
            resourceInputs["dtu"] = args ? args.dtu : undefined;
            resourceInputs["edition"] = args ? args.edition : undefined;
            resourceInputs["elasticPoolName"] = args ? args.elasticPoolName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["storageMB"] = args ? args.storageMB : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["zoneRedundant"] = args ? args.zoneRedundant : undefined;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["databaseDtuMax"] = undefined /*out*/;
            resourceInputs["databaseDtuMin"] = undefined /*out*/;
            resourceInputs["dtu"] = undefined /*out*/;
            resourceInputs["edition"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["storageMB"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["zoneRedundant"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql:ElasticPool" }, { type: "azure-native:sql/v20171001preview:ElasticPool" }, { type: "azure-native:sql/v20200202preview:ElasticPool" }, { type: "azure-native:sql/v20200801preview:ElasticPool" }, { type: "azure-native:sql/v20201101preview:ElasticPool" }, { type: "azure-native:sql/v20210201preview:ElasticPool" }, { type: "azure-native:sql/v20210501preview:ElasticPool" }, { type: "azure-native:sql/v20210801preview:ElasticPool" }, { type: "azure-native:sql/v20211101:ElasticPool" }, { type: "azure-native:sql/v20211101preview:ElasticPool" }, { type: "azure-native:sql/v20220201preview:ElasticPool" }, { type: "azure-native:sql/v20220501preview:ElasticPool" }, { type: "azure-native:sql/v20220801preview:ElasticPool" }, { type: "azure-native:sql/v20221101preview:ElasticPool" }, { type: "azure-native:sql/v20230201preview:ElasticPool" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ElasticPool.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ElasticPool resource.
 */
export interface ElasticPoolArgs {
    /**
     * The maximum DTU any one database can consume.
     */
    databaseDtuMax?: pulumi.Input<number>;
    /**
     * The minimum DTU all databases are guaranteed.
     */
    databaseDtuMin?: pulumi.Input<number>;
    /**
     * The total shared DTU for the database elastic pool.
     */
    dtu?: pulumi.Input<number>;
    /**
     * The edition of the elastic pool.
     */
    edition?: pulumi.Input<string | types.enums.v20140401.ElasticPoolEdition>;
    /**
     * The name of the elastic pool to be operated on (updated or created).
     */
    elasticPoolName?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
    /**
     * Gets storage limit for the database elastic pool in MB.
     */
    storageMB?: pulumi.Input<number>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Whether or not this database elastic pool is zone redundant, which means the replicas of this database will be spread across multiple availability zones.
     */
    zoneRedundant?: pulumi.Input<boolean>;
}
