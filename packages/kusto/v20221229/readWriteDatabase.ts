import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Class representing a read write database.
 */
export class ReadWriteDatabase extends pulumi.CustomResource {
    /**
     * Get an existing ReadWriteDatabase resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ReadWriteDatabase {
        return new ReadWriteDatabase(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:kusto/v20221229:ReadWriteDatabase';

    /**
     * Returns true if the given object is an instance of ReadWriteDatabase.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ReadWriteDatabase {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ReadWriteDatabase.__pulumiType;
    }

    /**
     * The time the data should be kept in cache for fast queries in TimeSpan.
     */
    public readonly hotCachePeriod!: pulumi.Output<string | undefined>;
    /**
     * Indicates whether the database is followed.
     */
    public /*out*/ readonly isFollowed!: pulumi.Output<boolean>;
    /**
     * Kind of the database
     * Expected value is 'ReadWrite'.
     */
    public readonly kind!: pulumi.Output<"ReadWrite">;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioned state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The time the data should be kept before it stops being accessible to queries in TimeSpan.
     */
    public readonly softDeletePeriod!: pulumi.Output<string | undefined>;
    /**
     * The statistics of the database.
     */
    public /*out*/ readonly statistics!: pulumi.Output<types.outputs.DatabaseStatisticsResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ReadWriteDatabase resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ReadWriteDatabaseArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.clusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterName'");
            }
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["callerRole"] = args ? args.callerRole : undefined;
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["hotCachePeriod"] = args ? args.hotCachePeriod : undefined;
            resourceInputs["kind"] = "ReadWrite";
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["softDeletePeriod"] = args ? args.softDeletePeriod : undefined;
            resourceInputs["isFollowed"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["statistics"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["hotCachePeriod"] = undefined /*out*/;
            resourceInputs["isFollowed"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["softDeletePeriod"] = undefined /*out*/;
            resourceInputs["statistics"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:kusto:ReadWriteDatabase" }, { type: "azure-native:kusto/v20170907privatepreview:ReadWriteDatabase" }, { type: "azure-native:kusto/v20180907preview:ReadWriteDatabase" }, { type: "azure-native:kusto/v20190121:ReadWriteDatabase" }, { type: "azure-native:kusto/v20190515:ReadWriteDatabase" }, { type: "azure-native:kusto/v20190907:ReadWriteDatabase" }, { type: "azure-native:kusto/v20191109:ReadWriteDatabase" }, { type: "azure-native:kusto/v20200215:ReadWriteDatabase" }, { type: "azure-native:kusto/v20200614:ReadWriteDatabase" }, { type: "azure-native:kusto/v20200918:ReadWriteDatabase" }, { type: "azure-native:kusto/v20210101:ReadWriteDatabase" }, { type: "azure-native:kusto/v20210827:ReadWriteDatabase" }, { type: "azure-native:kusto/v20220201:ReadWriteDatabase" }, { type: "azure-native:kusto/v20220707:ReadWriteDatabase" }, { type: "azure-native:kusto/v20221111:ReadWriteDatabase" }, { type: "azure-native:kusto/v20230502:ReadWriteDatabase" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ReadWriteDatabase.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ReadWriteDatabase resource.
 */
export interface ReadWriteDatabaseArgs {
    /**
     * By default, any user who run operation on a database become an Admin on it. This property allows the caller to exclude the caller from Admins list.
     */
    callerRole?: pulumi.Input<string>;
    /**
     * The name of the Kusto cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the database in the Kusto cluster.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * The time the data should be kept in cache for fast queries in TimeSpan.
     */
    hotCachePeriod?: pulumi.Input<string>;
    /**
     * Kind of the database
     * Expected value is 'ReadWrite'.
     */
    kind: pulumi.Input<"ReadWrite">;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group containing the Kusto cluster.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The time the data should be kept before it stops being accessible to queries in TimeSpan.
     */
    softDeletePeriod?: pulumi.Input<string>;
}
