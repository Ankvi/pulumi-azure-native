import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A schedule.
 *
 * Uses Azure REST API version 2018-09-15. In version 2.x of the Azure Native provider, it used API version 2018-09-15.
 */
export class VirtualMachineSchedule extends pulumi.CustomResource {
    /**
     * Get an existing VirtualMachineSchedule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualMachineSchedule {
        return new VirtualMachineSchedule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:devtestlab:VirtualMachineSchedule';

    /**
     * Returns true if the given object is an instance of VirtualMachineSchedule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualMachineSchedule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualMachineSchedule.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The creation date of the schedule.
     */
    public /*out*/ readonly createdDate!: pulumi.Output<string>;
    /**
     * If the schedule will occur once each day of the week, specify the daily recurrence.
     */
    public readonly dailyRecurrence!: pulumi.Output<types.outputs.DayDetailsResponse | undefined>;
    /**
     * If the schedule will occur multiple times a day, specify the hourly recurrence.
     */
    public readonly hourlyRecurrence!: pulumi.Output<types.outputs.HourDetailsResponse | undefined>;
    /**
     * The location of the resource.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Notification settings.
     */
    public readonly notificationSettings!: pulumi.Output<types.outputs.NotificationSettingsResponse | undefined>;
    /**
     * The provisioning status of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The status of the schedule (i.e. Enabled, Disabled)
     */
    public readonly status!: pulumi.Output<string | undefined>;
    /**
     * The tags of the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The resource ID to which the schedule belongs
     */
    public readonly targetResourceId!: pulumi.Output<string | undefined>;
    /**
     * The task type of the schedule (e.g. LabVmsShutdownTask, LabVmAutoStart).
     */
    public readonly taskType!: pulumi.Output<string | undefined>;
    /**
     * The time zone ID (e.g. China Standard Time, Greenland Standard Time, Pacific Standard time, etc.). The possible values for this property can be found in `IReadOnlyCollection<string> TimeZoneConverter.TZConvert.KnownWindowsTimeZoneIds` (https://github.com/mattjohnsonpint/TimeZoneConverter/blob/main/README.md)
     */
    public readonly timeZoneId!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    public /*out*/ readonly uniqueIdentifier!: pulumi.Output<string>;
    /**
     * If the schedule will occur only some days of the week, specify the weekly recurrence.
     */
    public readonly weeklyRecurrence!: pulumi.Output<types.outputs.WeekDetailsResponse | undefined>;

    /**
     * Create a VirtualMachineSchedule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualMachineScheduleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.labName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'labName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.virtualMachineName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'virtualMachineName'");
            }
            resourceInputs["dailyRecurrence"] = args ? args.dailyRecurrence : undefined;
            resourceInputs["hourlyRecurrence"] = args ? args.hourlyRecurrence : undefined;
            resourceInputs["labName"] = args ? args.labName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["notificationSettings"] = args ? (args.notificationSettings ? pulumi.output(args.notificationSettings).apply(types.inputs.notificationSettingsArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["status"] = (args ? args.status : undefined) ?? "Disabled";
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["targetResourceId"] = args ? args.targetResourceId : undefined;
            resourceInputs["taskType"] = args ? args.taskType : undefined;
            resourceInputs["timeZoneId"] = args ? args.timeZoneId : undefined;
            resourceInputs["virtualMachineName"] = args ? args.virtualMachineName : undefined;
            resourceInputs["weeklyRecurrence"] = args ? args.weeklyRecurrence : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["createdDate"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uniqueIdentifier"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["createdDate"] = undefined /*out*/;
            resourceInputs["dailyRecurrence"] = undefined /*out*/;
            resourceInputs["hourlyRecurrence"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["notificationSettings"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["targetResourceId"] = undefined /*out*/;
            resourceInputs["taskType"] = undefined /*out*/;
            resourceInputs["timeZoneId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uniqueIdentifier"] = undefined /*out*/;
            resourceInputs["weeklyRecurrence"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:devtestlab/v20160515:VirtualMachineSchedule" }, { type: "azure-native:devtestlab/v20180915:VirtualMachineSchedule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VirtualMachineSchedule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualMachineSchedule resource.
 */
export interface VirtualMachineScheduleArgs {
    /**
     * If the schedule will occur once each day of the week, specify the daily recurrence.
     */
    dailyRecurrence?: pulumi.Input<types.inputs.DayDetailsArgs>;
    /**
     * If the schedule will occur multiple times a day, specify the hourly recurrence.
     */
    hourlyRecurrence?: pulumi.Input<types.inputs.HourDetailsArgs>;
    /**
     * The name of the lab.
     */
    labName: pulumi.Input<string>;
    /**
     * The location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the schedule.
     */
    name?: pulumi.Input<string>;
    /**
     * Notification settings.
     */
    notificationSettings?: pulumi.Input<types.inputs.NotificationSettingsArgs>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The status of the schedule (i.e. Enabled, Disabled)
     */
    status?: pulumi.Input<string | types.enums.EnableStatus>;
    /**
     * The tags of the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The resource ID to which the schedule belongs
     */
    targetResourceId?: pulumi.Input<string>;
    /**
     * The task type of the schedule (e.g. LabVmsShutdownTask, LabVmAutoStart).
     */
    taskType?: pulumi.Input<string>;
    /**
     * The time zone ID (e.g. China Standard Time, Greenland Standard Time, Pacific Standard time, etc.). The possible values for this property can be found in `IReadOnlyCollection<string> TimeZoneConverter.TZConvert.KnownWindowsTimeZoneIds` (https://github.com/mattjohnsonpint/TimeZoneConverter/blob/main/README.md)
     */
    timeZoneId?: pulumi.Input<string>;
    /**
     * The name of the virtual machine.
     */
    virtualMachineName: pulumi.Input<string>;
    /**
     * If the schedule will occur only some days of the week, specify the weekly recurrence.
     */
    weeklyRecurrence?: pulumi.Input<types.inputs.WeekDetailsArgs>;
}