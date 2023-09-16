import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * A short term retention policy.
 */
export class BackupShortTermRetentionPolicy extends pulumi.CustomResource {
    /**
     * Get an existing BackupShortTermRetentionPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BackupShortTermRetentionPolicy {
        return new BackupShortTermRetentionPolicy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql/v20221101preview:BackupShortTermRetentionPolicy';

    /**
     * Returns true if the given object is an instance of BackupShortTermRetentionPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BackupShortTermRetentionPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BackupShortTermRetentionPolicy.__pulumiType;
    }

    /**
     * The differential backup interval in hours. This is how many interval hours between each differential backup will be supported. This is only applicable to live databases but not dropped databases.
     */
    public readonly diffBackupIntervalInHours!: pulumi.Output<number | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The backup retention period in days. This is how many days Point-in-Time Restore will be supported.
     */
    public readonly retentionDays!: pulumi.Output<number | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a BackupShortTermRetentionPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BackupShortTermRetentionPolicyArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["diffBackupIntervalInHours"] = args ? args.diffBackupIntervalInHours : undefined;
            resourceInputs["policyName"] = args ? args.policyName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["retentionDays"] = args ? args.retentionDays : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["diffBackupIntervalInHours"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["retentionDays"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql:BackupShortTermRetentionPolicy" }, { type: "azure-native:sql/v20171001preview:BackupShortTermRetentionPolicy" }, { type: "azure-native:sql/v20200202preview:BackupShortTermRetentionPolicy" }, { type: "azure-native:sql/v20200801preview:BackupShortTermRetentionPolicy" }, { type: "azure-native:sql/v20201101preview:BackupShortTermRetentionPolicy" }, { type: "azure-native:sql/v20210201preview:BackupShortTermRetentionPolicy" }, { type: "azure-native:sql/v20210501preview:BackupShortTermRetentionPolicy" }, { type: "azure-native:sql/v20210801preview:BackupShortTermRetentionPolicy" }, { type: "azure-native:sql/v20211101:BackupShortTermRetentionPolicy" }, { type: "azure-native:sql/v20211101preview:BackupShortTermRetentionPolicy" }, { type: "azure-native:sql/v20220201preview:BackupShortTermRetentionPolicy" }, { type: "azure-native:sql/v20220501preview:BackupShortTermRetentionPolicy" }, { type: "azure-native:sql/v20220801preview:BackupShortTermRetentionPolicy" }, { type: "azure-native:sql/v20230201preview:BackupShortTermRetentionPolicy" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(BackupShortTermRetentionPolicy.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a BackupShortTermRetentionPolicy resource.
 */
export interface BackupShortTermRetentionPolicyArgs {
    /**
     * The name of the database.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The differential backup interval in hours. This is how many interval hours between each differential backup will be supported. This is only applicable to live databases but not dropped databases.
     */
    diffBackupIntervalInHours?: pulumi.Input<number>;
    /**
     * The policy name. Should always be "default".
     */
    policyName?: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The backup retention period in days. This is how many days Point-in-Time Restore will be supported.
     */
    retentionDays?: pulumi.Input<number>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}
