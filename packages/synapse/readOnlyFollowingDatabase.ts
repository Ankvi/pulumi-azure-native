import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Class representing a read only following database.
 *
 * Uses Azure REST API version 2021-06-01-preview. In version 2.x of the Azure Native provider, it used API version 2021-06-01-preview.
 */
export class ReadOnlyFollowingDatabase extends pulumi.CustomResource {
    /**
     * Get an existing ReadOnlyFollowingDatabase resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ReadOnlyFollowingDatabase {
        return new ReadOnlyFollowingDatabase(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:synapse:ReadOnlyFollowingDatabase';

    /**
     * Returns true if the given object is an instance of ReadOnlyFollowingDatabase.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ReadOnlyFollowingDatabase {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ReadOnlyFollowingDatabase.__pulumiType;
    }

    /**
     * The name of the attached database configuration cluster
     */
    public /*out*/ readonly attachedDatabaseConfigurationName!: pulumi.Output<string>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The time the data should be kept in cache for fast queries in TimeSpan.
     */
    public readonly hotCachePeriod!: pulumi.Output<string | undefined>;
    /**
     * Kind of the database
     * Expected value is 'ReadOnlyFollowing'.
     */
    public readonly kind!: pulumi.Output<"ReadOnlyFollowing">;
    /**
     * The name of the leader cluster
     */
    public /*out*/ readonly leaderClusterResourceId!: pulumi.Output<string>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The principals modification kind of the database
     */
    public /*out*/ readonly principalsModificationKind!: pulumi.Output<string>;
    /**
     * The provisioned state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The time the data should be kept before it stops being accessible to queries in TimeSpan.
     */
    public /*out*/ readonly softDeletePeriod!: pulumi.Output<string>;
    /**
     * The statistics of the database.
     */
    public /*out*/ readonly statistics!: pulumi.Output<types.outputs.DatabaseStatisticsResponse>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ReadOnlyFollowingDatabase resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ReadOnlyFollowingDatabaseArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.kustoPoolName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kustoPoolName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["hotCachePeriod"] = args ? args.hotCachePeriod : undefined;
            resourceInputs["kind"] = "ReadOnlyFollowing";
            resourceInputs["kustoPoolName"] = args ? args.kustoPoolName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["attachedDatabaseConfigurationName"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["leaderClusterResourceId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["principalsModificationKind"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["softDeletePeriod"] = undefined /*out*/;
            resourceInputs["statistics"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["attachedDatabaseConfigurationName"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["hotCachePeriod"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["leaderClusterResourceId"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["principalsModificationKind"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["softDeletePeriod"] = undefined /*out*/;
            resourceInputs["statistics"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:synapse/v20210401preview:ReadOnlyFollowingDatabase" }, { type: "azure-native:synapse/v20210601preview:ReadOnlyFollowingDatabase" }, { type: "azure-native:synapse/v20210601preview:ReadWriteDatabase" }, { type: "azure-native:synapse:ReadWriteDatabase" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ReadOnlyFollowingDatabase.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ReadOnlyFollowingDatabase resource.
 */
export interface ReadOnlyFollowingDatabaseArgs {
    /**
     * The name of the database in the Kusto pool.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * The time the data should be kept in cache for fast queries in TimeSpan.
     */
    hotCachePeriod?: pulumi.Input<string>;
    /**
     * Kind of the database
     * Expected value is 'ReadOnlyFollowing'.
     */
    kind: pulumi.Input<"ReadOnlyFollowing">;
    /**
     * The name of the Kusto pool.
     */
    kustoPoolName: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}