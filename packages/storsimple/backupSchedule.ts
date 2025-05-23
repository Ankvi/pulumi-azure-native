import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The backup schedule.
 *
 * Uses Azure REST API version 2017-06-01. In version 2.x of the Azure Native provider, it used API version 2017-06-01.
 */
export class BackupSchedule extends pulumi.CustomResource {
    /**
     * Get an existing BackupSchedule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BackupSchedule {
        return new BackupSchedule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:storsimple:BackupSchedule';

    /**
     * Returns true if the given object is an instance of BackupSchedule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BackupSchedule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BackupSchedule.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The type of backup which needs to be taken.
     */
    public readonly backupType!: pulumi.Output<string>;
    /**
     * The Kind of the object. Currently only Series8000 is supported
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * The last successful backup run which was triggered for the schedule.
     */
    public /*out*/ readonly lastSuccessfulRun!: pulumi.Output<string>;
    /**
     * The name of the object.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The number of backups to be retained.
     */
    public readonly retentionCount!: pulumi.Output<number>;
    /**
     * The schedule recurrence.
     */
    public readonly scheduleRecurrence!: pulumi.Output<types.outputs.ScheduleRecurrenceResponse>;
    /**
     * The schedule status.
     */
    public readonly scheduleStatus!: pulumi.Output<string>;
    /**
     * The start time of the schedule.
     */
    public readonly startTime!: pulumi.Output<string>;
    /**
     * The hierarchical type of the object.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a BackupSchedule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BackupScheduleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.backupPolicyName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'backupPolicyName'");
            }
            if ((!args || args.backupType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'backupType'");
            }
            if ((!args || args.deviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'deviceName'");
            }
            if ((!args || args.managerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'managerName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.retentionCount === undefined) && !opts.urn) {
                throw new Error("Missing required property 'retentionCount'");
            }
            if ((!args || args.scheduleRecurrence === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scheduleRecurrence'");
            }
            if ((!args || args.scheduleStatus === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scheduleStatus'");
            }
            if ((!args || args.startTime === undefined) && !opts.urn) {
                throw new Error("Missing required property 'startTime'");
            }
            resourceInputs["backupPolicyName"] = args ? args.backupPolicyName : undefined;
            resourceInputs["backupScheduleName"] = args ? args.backupScheduleName : undefined;
            resourceInputs["backupType"] = args ? args.backupType : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["managerName"] = args ? args.managerName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["retentionCount"] = args ? args.retentionCount : undefined;
            resourceInputs["scheduleRecurrence"] = args ? args.scheduleRecurrence : undefined;
            resourceInputs["scheduleStatus"] = args ? args.scheduleStatus : undefined;
            resourceInputs["startTime"] = args ? args.startTime : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["lastSuccessfulRun"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["backupType"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["lastSuccessfulRun"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["retentionCount"] = undefined /*out*/;
            resourceInputs["scheduleRecurrence"] = undefined /*out*/;
            resourceInputs["scheduleStatus"] = undefined /*out*/;
            resourceInputs["startTime"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:storsimple/v20170601:BackupSchedule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(BackupSchedule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a BackupSchedule resource.
 */
export interface BackupScheduleArgs {
    /**
     * The backup policy name.
     */
    backupPolicyName: pulumi.Input<string>;
    /**
     * The backup schedule name.
     */
    backupScheduleName?: pulumi.Input<string>;
    /**
     * The type of backup which needs to be taken.
     */
    backupType: pulumi.Input<types.enums.BackupType>;
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
     * The number of backups to be retained.
     */
    retentionCount: pulumi.Input<number>;
    /**
     * The schedule recurrence.
     */
    scheduleRecurrence: pulumi.Input<types.inputs.ScheduleRecurrenceArgs>;
    /**
     * The schedule status.
     */
    scheduleStatus: pulumi.Input<types.enums.ScheduleStatus>;
    /**
     * The start time of the schedule.
     */
    startTime: pulumi.Input<string>;
}