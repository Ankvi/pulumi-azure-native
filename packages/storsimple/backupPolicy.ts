import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The backup policy.
 *
 * Uses Azure REST API version 2017-06-01. In version 2.x of the Azure Native provider, it used API version 2017-06-01.
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
    public static readonly __pulumiType = 'azure-native:storsimple:BackupPolicy';

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
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The backup policy creation type. Indicates whether this was created through SaaS or through StorSimple Snapshot Manager.
     */
    public /*out*/ readonly backupPolicyCreationType!: pulumi.Output<string>;
    /**
     * The Kind of the object. Currently only Series8000 is supported
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * The time of the last backup for the backup policy.
     */
    public /*out*/ readonly lastBackupTime!: pulumi.Output<string>;
    /**
     * The name of the object.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The time of the next backup for the backup policy.
     */
    public /*out*/ readonly nextBackupTime!: pulumi.Output<string>;
    /**
     * Indicates whether at least one of the schedules in the backup policy is active or not.
     */
    public /*out*/ readonly scheduledBackupStatus!: pulumi.Output<string>;
    /**
     * The count of schedules the backup policy contains.
     */
    public /*out*/ readonly schedulesCount!: pulumi.Output<number>;
    /**
     * If the backup policy was created by StorSimple Snapshot Manager, then this field indicates the hostname of the StorSimple Snapshot Manager.
     */
    public /*out*/ readonly ssmHostName!: pulumi.Output<string>;
    /**
     * The hierarchical type of the object.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The path IDs of the volumes which are part of the backup policy.
     */
    public readonly volumeIds!: pulumi.Output<string[]>;

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
            if ((!args || args.deviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'deviceName'");
            }
            if ((!args || args.managerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'managerName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.volumeIds === undefined) && !opts.urn) {
                throw new Error("Missing required property 'volumeIds'");
            }
            resourceInputs["backupPolicyName"] = args ? args.backupPolicyName : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["managerName"] = args ? args.managerName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["volumeIds"] = args ? args.volumeIds : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["backupPolicyCreationType"] = undefined /*out*/;
            resourceInputs["lastBackupTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nextBackupTime"] = undefined /*out*/;
            resourceInputs["scheduledBackupStatus"] = undefined /*out*/;
            resourceInputs["schedulesCount"] = undefined /*out*/;
            resourceInputs["ssmHostName"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["backupPolicyCreationType"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["lastBackupTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nextBackupTime"] = undefined /*out*/;
            resourceInputs["scheduledBackupStatus"] = undefined /*out*/;
            resourceInputs["schedulesCount"] = undefined /*out*/;
            resourceInputs["ssmHostName"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["volumeIds"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:storsimple/v20170601:BackupPolicy" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(BackupPolicy.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a BackupPolicy resource.
 */
export interface BackupPolicyArgs {
    /**
     * The name of the backup policy to be created/updated.
     */
    backupPolicyName?: pulumi.Input<string>;
    /**
     * The device name
     */
    deviceName: pulumi.Input<string>;
    /**
     * The Kind of the object. Currently only Series8000 is supported
     */
    kind?: pulumi.Input<types.enums.Kind>;
    /**
     * The manager name
     */
    managerName: pulumi.Input<string>;
    /**
     * The resource group name
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The path IDs of the volumes which are part of the backup policy.
     */
    volumeIds: pulumi.Input<pulumi.Input<string>[]>;
}