import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Class representing a Kusto database.
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
    public static readonly __pulumiType = 'azure-native:kusto/v20180907preview:Database';

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
     * An ETag of the resource created.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The number of days of data that should be kept in cache for fast queries.
     */
    public readonly hotCachePeriodInDays!: pulumi.Output<number | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioned state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The number of days data should be kept before it stops being accessible to queries.
     */
    public readonly softDeletePeriodInDays!: pulumi.Output<number>;
    /**
     * The statistics of the database.
     */
    public /*out*/ readonly statistics!: pulumi.Output<types.outputs.kusto.v20180907preview.DatabaseStatisticsResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
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
            if ((!args || args.softDeletePeriodInDays === undefined) && !opts.urn) {
                throw new Error("Missing required property 'softDeletePeriodInDays'");
            }
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["hotCachePeriodInDays"] = args ? args.hotCachePeriodInDays : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["softDeletePeriodInDays"] = args ? args.softDeletePeriodInDays : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["statistics"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["hotCachePeriodInDays"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["softDeletePeriodInDays"] = undefined /*out*/;
            resourceInputs["statistics"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:kusto:Database" }, { type: "azure-native:kusto/v20170907privatepreview:Database" }, { type: "azure-native:kusto/v20190121:Database" }, { type: "azure-native:kusto/v20190515:Database" }, { type: "azure-native:kusto/v20190907:Database" }, { type: "azure-native:kusto/v20191109:Database" }, { type: "azure-native:kusto/v20200215:Database" }, { type: "azure-native:kusto/v20200614:Database" }, { type: "azure-native:kusto/v20200918:Database" }, { type: "azure-native:kusto/v20210101:Database" }, { type: "azure-native:kusto/v20210827:Database" }, { type: "azure-native:kusto/v20220201:Database" }, { type: "azure-native:kusto/v20220707:Database" }, { type: "azure-native:kusto/v20221111:Database" }, { type: "azure-native:kusto/v20221229:Database" }, { type: "azure-native:kusto/v20230502:Database" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Database.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Database resource.
 */
export interface DatabaseArgs {
    /**
     * The name of the Kusto cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the database in the Kusto cluster.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * The number of days of data that should be kept in cache for fast queries.
     */
    hotCachePeriodInDays?: pulumi.Input<number>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group containing the Kusto cluster.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The number of days data should be kept before it stops being accessible to queries.
     */
    softDeletePeriodInDays: pulumi.Input<number>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
