import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Backup policy information
 * Azure REST API version: 2022-11-01. Prior API version in Azure Native 1.x: 2020-12-01.
 *
 * Other available API versions: 2021-04-01, 2021-04-01-preview, 2022-11-01-preview, 2023-05-01, 2023-05-01-preview, 2023-07-01, 2023-07-01-preview, 2023-11-01, 2023-11-01-preview, 2024-03-01, 2024-03-01-preview.
 */
export class BackupPolicy extends pulumi.CustomResource {
    /**
     * Get an existing BackupPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BackupPolicy {
        return new BackupPolicy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:netapp:BackupPolicy';

    /**
     * Returns true if the given object is an instance of BackupPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BackupPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BackupPolicy.__pulumiType;
    }

    /**
     * Backup Policy Resource ID
     */
    public /*out*/ readonly backupPolicyId!: pulumi.Output<string>;
    /**
     * Daily backups count to keep
     */
    public readonly dailyBackupsToKeep!: pulumi.Output<number | undefined>;
    /**
     * The property to decide policy is enabled or not
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Monthly backups count to keep
     */
    public readonly monthlyBackupsToKeep!: pulumi.Output<number | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Azure lifecycle management
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * A list of volumes assigned to this policy
     */
    public /*out*/ readonly volumeBackups!: pulumi.Output<types.outputs.VolumeBackupsResponse[]>;
    /**
     * Volumes using current backup policy
     */
    public /*out*/ readonly volumesAssigned!: pulumi.Output<number>;
    /**
     * Weekly backups count to keep
     */
    public readonly weeklyBackupsToKeep!: pulumi.Output<number | undefined>;

    /**
     * Create a BackupPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BackupPolicyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["backupPolicyName"] = args ? args.backupPolicyName : undefined;
            resourceInputs["dailyBackupsToKeep"] = args ? args.dailyBackupsToKeep : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["monthlyBackupsToKeep"] = args ? args.monthlyBackupsToKeep : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["weeklyBackupsToKeep"] = args ? args.weeklyBackupsToKeep : undefined;
            resourceInputs["backupPolicyId"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["volumeBackups"] = undefined /*out*/;
            resourceInputs["volumesAssigned"] = undefined /*out*/;
        } else {
            resourceInputs["backupPolicyId"] = undefined /*out*/;
            resourceInputs["dailyBackupsToKeep"] = undefined /*out*/;
            resourceInputs["enabled"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["monthlyBackupsToKeep"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["volumeBackups"] = undefined /*out*/;
            resourceInputs["volumesAssigned"] = undefined /*out*/;
            resourceInputs["weeklyBackupsToKeep"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:netapp/v20200501:BackupPolicy" }, { type: "azure-native:netapp/v20200601:BackupPolicy" }, { type: "azure-native:netapp/v20200701:BackupPolicy" }, { type: "azure-native:netapp/v20200801:BackupPolicy" }, { type: "azure-native:netapp/v20200901:BackupPolicy" }, { type: "azure-native:netapp/v20201101:BackupPolicy" }, { type: "azure-native:netapp/v20201201:BackupPolicy" }, { type: "azure-native:netapp/v20210201:BackupPolicy" }, { type: "azure-native:netapp/v20210401:BackupPolicy" }, { type: "azure-native:netapp/v20210401preview:BackupPolicy" }, { type: "azure-native:netapp/v20210601:BackupPolicy" }, { type: "azure-native:netapp/v20210801:BackupPolicy" }, { type: "azure-native:netapp/v20211001:BackupPolicy" }, { type: "azure-native:netapp/v20220101:BackupPolicy" }, { type: "azure-native:netapp/v20220301:BackupPolicy" }, { type: "azure-native:netapp/v20220501:BackupPolicy" }, { type: "azure-native:netapp/v20220901:BackupPolicy" }, { type: "azure-native:netapp/v20221101:BackupPolicy" }, { type: "azure-native:netapp/v20221101preview:BackupPolicy" }, { type: "azure-native:netapp/v20230501:BackupPolicy" }, { type: "azure-native:netapp/v20230501preview:BackupPolicy" }, { type: "azure-native:netapp/v20230701:BackupPolicy" }, { type: "azure-native:netapp/v20230701preview:BackupPolicy" }, { type: "azure-native:netapp/v20231101:BackupPolicy" }, { type: "azure-native:netapp/v20231101preview:BackupPolicy" }, { type: "azure-native:netapp/v20240301:BackupPolicy" }, { type: "azure-native:netapp/v20240301preview:BackupPolicy" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(BackupPolicy.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a BackupPolicy resource.
 */
export interface BackupPolicyArgs {
    /**
     * The name of the NetApp account
     */
    accountName: pulumi.Input<string>;
    /**
     * Backup policy Name which uniquely identify backup policy.
     */
    backupPolicyName?: pulumi.Input<string>;
    /**
     * Daily backups count to keep
     */
    dailyBackupsToKeep?: pulumi.Input<number>;
    /**
     * The property to decide policy is enabled or not
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Monthly backups count to keep
     */
    monthlyBackupsToKeep?: pulumi.Input<number>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Weekly backups count to keep
     */
    weeklyBackupsToKeep?: pulumi.Input<number>;
}