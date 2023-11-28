import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * A long term retention policy.
 * Azure REST API version: 2017-03-01-preview.
 */
export class BackupLongTermRetentionPolicy extends pulumi.CustomResource {
    /**
     * Get an existing BackupLongTermRetentionPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BackupLongTermRetentionPolicy {
        return new BackupLongTermRetentionPolicy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql:BackupLongTermRetentionPolicy';

    /**
     * Returns true if the given object is an instance of BackupLongTermRetentionPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BackupLongTermRetentionPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BackupLongTermRetentionPolicy.__pulumiType;
    }

    /**
     * The monthly retention policy for an LTR backup in an ISO 8601 format.
     */
    public readonly monthlyRetention!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The week of year to take the yearly backup in an ISO 8601 format.
     */
    public readonly weekOfYear!: pulumi.Output<number | undefined>;
    /**
     * The weekly retention policy for an LTR backup in an ISO 8601 format.
     */
    public readonly weeklyRetention!: pulumi.Output<string | undefined>;
    /**
     * The yearly retention policy for an LTR backup in an ISO 8601 format.
     */
    public readonly yearlyRetention!: pulumi.Output<string | undefined>;

    /**
     * Create a BackupLongTermRetentionPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BackupLongTermRetentionPolicyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.databaseName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'databaseName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverName'");
            }
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["monthlyRetention"] = args ? args.monthlyRetention : undefined;
            resourceInputs["policyName"] = args ? args.policyName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["weekOfYear"] = args ? args.weekOfYear : undefined;
            resourceInputs["weeklyRetention"] = args ? args.weeklyRetention : undefined;
            resourceInputs["yearlyRetention"] = args ? args.yearlyRetention : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["monthlyRetention"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["weekOfYear"] = undefined /*out*/;
            resourceInputs["weeklyRetention"] = undefined /*out*/;
            resourceInputs["yearlyRetention"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql/v20170301preview:BackupLongTermRetentionPolicy" }, { type: "azure-native:sql/v20200202preview:BackupLongTermRetentionPolicy" }, { type: "azure-native:sql/v20200801preview:BackupLongTermRetentionPolicy" }, { type: "azure-native:sql/v20201101preview:BackupLongTermRetentionPolicy" }, { type: "azure-native:sql/v20210201preview:BackupLongTermRetentionPolicy" }, { type: "azure-native:sql/v20210501preview:BackupLongTermRetentionPolicy" }, { type: "azure-native:sql/v20210801preview:BackupLongTermRetentionPolicy" }, { type: "azure-native:sql/v20211101:BackupLongTermRetentionPolicy" }, { type: "azure-native:sql/v20211101preview:BackupLongTermRetentionPolicy" }, { type: "azure-native:sql/v20220201preview:BackupLongTermRetentionPolicy" }, { type: "azure-native:sql/v20220501preview:BackupLongTermRetentionPolicy" }, { type: "azure-native:sql/v20220801preview:BackupLongTermRetentionPolicy" }, { type: "azure-native:sql/v20221101preview:BackupLongTermRetentionPolicy" }, { type: "azure-native:sql/v20230201preview:BackupLongTermRetentionPolicy" }, { type: "azure-native:sql/v20230501preview:BackupLongTermRetentionPolicy" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(BackupLongTermRetentionPolicy.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a BackupLongTermRetentionPolicy resource.
 */
export interface BackupLongTermRetentionPolicyArgs {
    /**
     * The name of the database.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The monthly retention policy for an LTR backup in an ISO 8601 format.
     */
    monthlyRetention?: pulumi.Input<string>;
    /**
     * The policy name. Should always be Default.
     */
    policyName?: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
    /**
     * The week of year to take the yearly backup in an ISO 8601 format.
     */
    weekOfYear?: pulumi.Input<number>;
    /**
     * The weekly retention policy for an LTR backup in an ISO 8601 format.
     */
    weeklyRetention?: pulumi.Input<string>;
    /**
     * The yearly retention policy for an LTR backup in an ISO 8601 format.
     */
    yearlyRetention?: pulumi.Input<string>;
}
