import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Managed instance's Start/Stop schedule.
 */
export class StartStopManagedInstanceSchedule extends pulumi.CustomResource {
    /**
     * Get an existing StartStopManagedInstanceSchedule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): StartStopManagedInstanceSchedule {
        return new StartStopManagedInstanceSchedule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql/v20230501preview:StartStopManagedInstanceSchedule';

    /**
     * Returns true if the given object is an instance of StartStopManagedInstanceSchedule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StartStopManagedInstanceSchedule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StartStopManagedInstanceSchedule.__pulumiType;
    }

    /**
     * The description of the schedule.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Timestamp when the next action will be executed in the corresponding schedule time zone.
     */
    public /*out*/ readonly nextExecutionTime!: pulumi.Output<string>;
    /**
     * Next action to be executed (Start or Stop)
     */
    public /*out*/ readonly nextRunAction!: pulumi.Output<string>;
    /**
     * Schedule list.
     */
    public readonly scheduleList!: pulumi.Output<types.outputs.ScheduleItemResponse[]>;
    /**
     * System data of the scheduled resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The time zone of the schedule.
     */
    public readonly timeZoneId!: pulumi.Output<string | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a StartStopManagedInstanceSchedule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StartStopManagedInstanceScheduleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.managedInstanceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'managedInstanceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.scheduleList === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scheduleList'");
            }
            resourceInputs["description"] = (args ? args.description : undefined) ?? "";
            resourceInputs["managedInstanceName"] = args ? args.managedInstanceName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scheduleList"] = args ? args.scheduleList : undefined;
            resourceInputs["startStopScheduleName"] = args ? args.startStopScheduleName : undefined;
            resourceInputs["timeZoneId"] = (args ? args.timeZoneId : undefined) ?? "UTC";
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nextExecutionTime"] = undefined /*out*/;
            resourceInputs["nextRunAction"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nextExecutionTime"] = undefined /*out*/;
            resourceInputs["nextRunAction"] = undefined /*out*/;
            resourceInputs["scheduleList"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["timeZoneId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql:StartStopManagedInstanceSchedule" }, { type: "azure-native:sql/v20220801preview:StartStopManagedInstanceSchedule" }, { type: "azure-native:sql/v20221101preview:StartStopManagedInstanceSchedule" }, { type: "azure-native:sql/v20230201preview:StartStopManagedInstanceSchedule" }, { type: "azure-native:sql/v20230801preview:StartStopManagedInstanceSchedule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(StartStopManagedInstanceSchedule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a StartStopManagedInstanceSchedule resource.
 */
export interface StartStopManagedInstanceScheduleArgs {
    /**
     * The description of the schedule.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the managed instance.
     */
    managedInstanceName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Schedule list.
     */
    scheduleList: pulumi.Input<pulumi.Input<types.inputs.ScheduleItemArgs>[]>;
    /**
     * Name of the managed instance Start/Stop schedule.
     */
    startStopScheduleName?: pulumi.Input<string>;
    /**
     * The time zone of the schedule.
     */
    timeZoneId?: pulumi.Input<string>;
}