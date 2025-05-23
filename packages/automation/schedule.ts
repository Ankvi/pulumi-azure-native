import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Definition of the schedule.
 *
 * Uses Azure REST API version 2023-11-01. In version 2.x of the Azure Native provider, it used API version 2022-08-08.
 *
 * Other available API versions: 2015-10-31, 2019-06-01, 2020-01-13-preview, 2022-08-08, 2023-05-15-preview, 2024-10-23. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native automation [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Schedule extends pulumi.CustomResource {
    /**
     * Get an existing Schedule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Schedule {
        return new Schedule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:automation:Schedule';

    /**
     * Returns true if the given object is an instance of Schedule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Schedule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Schedule.__pulumiType;
    }

    /**
     * Gets or sets the advanced schedule.
     */
    public readonly advancedSchedule!: pulumi.Output<types.outputs.AdvancedScheduleResponse | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Gets or sets the creation time.
     */
    public /*out*/ readonly creationTime!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the end time of the schedule.
     */
    public readonly expiryTime!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the expiry time's offset in minutes.
     */
    public /*out*/ readonly expiryTimeOffsetMinutes!: pulumi.Output<number | undefined>;
    /**
     * Gets or sets the frequency of the schedule.
     */
    public readonly frequency!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the interval of the schedule.
     */
    public readonly interval!: pulumi.Output<any | undefined>;
    /**
     * Gets or sets a value indicating whether this schedule is enabled.
     */
    public /*out*/ readonly isEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * Gets or sets the last modified time.
     */
    public /*out*/ readonly lastModifiedTime!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Gets or sets the next run time of the schedule.
     */
    public /*out*/ readonly nextRun!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the next run time's offset in minutes.
     */
    public /*out*/ readonly nextRunOffsetMinutes!: pulumi.Output<number | undefined>;
    /**
     * Gets or sets the start time of the schedule.
     */
    public readonly startTime!: pulumi.Output<string | undefined>;
    /**
     * Gets the start time's offset in minutes.
     */
    public /*out*/ readonly startTimeOffsetMinutes!: pulumi.Output<number>;
    /**
     * Gets or sets the time zone of the schedule.
     */
    public readonly timeZone!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Schedule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ScheduleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.automationAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'automationAccountName'");
            }
            if ((!args || args.frequency === undefined) && !opts.urn) {
                throw new Error("Missing required property 'frequency'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.startTime === undefined) && !opts.urn) {
                throw new Error("Missing required property 'startTime'");
            }
            resourceInputs["advancedSchedule"] = args ? args.advancedSchedule : undefined;
            resourceInputs["automationAccountName"] = args ? args.automationAccountName : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["expiryTime"] = args ? args.expiryTime : undefined;
            resourceInputs["frequency"] = args ? args.frequency : undefined;
            resourceInputs["interval"] = args ? args.interval : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scheduleName"] = args ? args.scheduleName : undefined;
            resourceInputs["startTime"] = args ? args.startTime : undefined;
            resourceInputs["timeZone"] = args ? args.timeZone : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["expiryTimeOffsetMinutes"] = undefined /*out*/;
            resourceInputs["isEnabled"] = undefined /*out*/;
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["nextRun"] = undefined /*out*/;
            resourceInputs["nextRunOffsetMinutes"] = undefined /*out*/;
            resourceInputs["startTimeOffsetMinutes"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["advancedSchedule"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["expiryTime"] = undefined /*out*/;
            resourceInputs["expiryTimeOffsetMinutes"] = undefined /*out*/;
            resourceInputs["frequency"] = undefined /*out*/;
            resourceInputs["interval"] = undefined /*out*/;
            resourceInputs["isEnabled"] = undefined /*out*/;
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nextRun"] = undefined /*out*/;
            resourceInputs["nextRunOffsetMinutes"] = undefined /*out*/;
            resourceInputs["startTime"] = undefined /*out*/;
            resourceInputs["startTimeOffsetMinutes"] = undefined /*out*/;
            resourceInputs["timeZone"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:automation/v20151031:Schedule" }, { type: "azure-native:automation/v20190601:Schedule" }, { type: "azure-native:automation/v20200113preview:Schedule" }, { type: "azure-native:automation/v20220808:Schedule" }, { type: "azure-native:automation/v20230515preview:Schedule" }, { type: "azure-native:automation/v20231101:Schedule" }, { type: "azure-native:automation/v20241023:Schedule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Schedule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Schedule resource.
 */
export interface ScheduleArgs {
    /**
     * Gets or sets the AdvancedSchedule.
     */
    advancedSchedule?: pulumi.Input<types.inputs.AdvancedScheduleArgs>;
    /**
     * The name of the automation account.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * Gets or sets the description of the schedule.
     */
    description?: pulumi.Input<string>;
    /**
     * Gets or sets the end time of the schedule.
     */
    expiryTime?: pulumi.Input<string>;
    /**
     * Gets or sets the frequency of the schedule.
     */
    frequency: pulumi.Input<string | types.enums.ScheduleFrequency>;
    /**
     * Gets or sets the interval of the schedule.
     */
    interval?: any;
    /**
     * Gets or sets the name of the Schedule.
     */
    name: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The schedule name.
     */
    scheduleName?: pulumi.Input<string>;
    /**
     * Gets or sets the start time of the schedule.
     */
    startTime: pulumi.Input<string>;
    /**
     * Gets or sets the time zone of the schedule.
     */
    timeZone?: pulumi.Input<string>;
}