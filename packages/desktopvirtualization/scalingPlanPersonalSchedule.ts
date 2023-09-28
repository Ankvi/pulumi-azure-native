import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a ScalingPlanPersonalSchedule definition.
 * Azure REST API version: 2023-07-07-preview.
 */
export class ScalingPlanPersonalSchedule extends pulumi.CustomResource {
    /**
     * Get an existing ScalingPlanPersonalSchedule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ScalingPlanPersonalSchedule {
        return new ScalingPlanPersonalSchedule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:desktopvirtualization:ScalingPlanPersonalSchedule';

    /**
     * Returns true if the given object is an instance of ScalingPlanPersonalSchedule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ScalingPlanPersonalSchedule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ScalingPlanPersonalSchedule.__pulumiType;
    }

    /**
     * Set of days of the week on which this schedule is active.
     */
    public readonly daysOfWeek!: pulumi.Output<string[] | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Action to be taken after a user disconnect during the off-peak period.
     */
    public readonly offPeakActionOnDisconnect!: pulumi.Output<string | undefined>;
    /**
     * Action to be taken after a logoff during the off-peak period.
     */
    public readonly offPeakActionOnLogoff!: pulumi.Output<string | undefined>;
    /**
     * The time in minutes to wait before performing the desired session handling action when a user disconnects during the off-peak period.
     */
    public readonly offPeakMinutesToWaitOnDisconnect!: pulumi.Output<number | undefined>;
    /**
     * The time in minutes to wait before performing the desired session handling action when a user logs off during the off-peak period.
     */
    public readonly offPeakMinutesToWaitOnLogoff!: pulumi.Output<number | undefined>;
    /**
     * Starting time for off-peak period.
     */
    public readonly offPeakStartTime!: pulumi.Output<types.outputs.TimeResponse | undefined>;
    /**
     * The desired configuration of Start VM On Connect for the hostpool during the off-peak phase.
     */
    public readonly offPeakStartVMOnConnect!: pulumi.Output<string | undefined>;
    /**
     * Action to be taken after a user disconnect during the peak period.
     */
    public readonly peakActionOnDisconnect!: pulumi.Output<string | undefined>;
    /**
     * Action to be taken after a logoff during the peak period.
     */
    public readonly peakActionOnLogoff!: pulumi.Output<string | undefined>;
    /**
     * The time in minutes to wait before performing the desired session handling action when a user disconnects during the peak period.
     */
    public readonly peakMinutesToWaitOnDisconnect!: pulumi.Output<number | undefined>;
    /**
     * The time in minutes to wait before performing the desired session handling action when a user logs off during the peak period.
     */
    public readonly peakMinutesToWaitOnLogoff!: pulumi.Output<number | undefined>;
    /**
     * Starting time for peak period.
     */
    public readonly peakStartTime!: pulumi.Output<types.outputs.TimeResponse | undefined>;
    /**
     * The desired configuration of Start VM On Connect for the hostpool during the peak phase.
     */
    public readonly peakStartVMOnConnect!: pulumi.Output<string | undefined>;
    /**
     * Action to be taken after a user disconnect during the ramp down period.
     */
    public readonly rampDownActionOnDisconnect!: pulumi.Output<string | undefined>;
    /**
     * Action to be taken after a logoff during the ramp down period.
     */
    public readonly rampDownActionOnLogoff!: pulumi.Output<string | undefined>;
    /**
     * The time in minutes to wait before performing the desired session handling action when a user disconnects during the ramp down period.
     */
    public readonly rampDownMinutesToWaitOnDisconnect!: pulumi.Output<number | undefined>;
    /**
     * The time in minutes to wait before performing the desired session handling action when a user logs off during the ramp down period.
     */
    public readonly rampDownMinutesToWaitOnLogoff!: pulumi.Output<number | undefined>;
    /**
     * Starting time for ramp down period.
     */
    public readonly rampDownStartTime!: pulumi.Output<types.outputs.TimeResponse | undefined>;
    /**
     * The desired configuration of Start VM On Connect for the hostpool during the ramp down phase.
     */
    public readonly rampDownStartVMOnConnect!: pulumi.Output<string | undefined>;
    /**
     * Action to be taken after a user disconnect during the ramp up period.
     */
    public readonly rampUpActionOnDisconnect!: pulumi.Output<string | undefined>;
    /**
     * Action to be taken after a logoff during the ramp up period.
     */
    public readonly rampUpActionOnLogoff!: pulumi.Output<string | undefined>;
    /**
     * The desired startup behavior during the ramp up period for personal vms in the hostpool.
     */
    public readonly rampUpAutoStartHosts!: pulumi.Output<string | undefined>;
    /**
     * The time in minutes to wait before performing the desired session handling action when a user disconnects during the ramp up period.
     */
    public readonly rampUpMinutesToWaitOnDisconnect!: pulumi.Output<number | undefined>;
    /**
     * The time in minutes to wait before performing the desired session handling action when a user logs off during the ramp up period.
     */
    public readonly rampUpMinutesToWaitOnLogoff!: pulumi.Output<number | undefined>;
    /**
     * Starting time for ramp up period.
     */
    public readonly rampUpStartTime!: pulumi.Output<types.outputs.TimeResponse | undefined>;
    /**
     * The desired configuration of Start VM On Connect for the hostpool during the ramp up phase. If this is disabled, session hosts must be turned on using rampUpAutoStartHosts or by turning them on manually.
     */
    public readonly rampUpStartVMOnConnect!: pulumi.Output<string | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ScalingPlanPersonalSchedule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ScalingPlanPersonalScheduleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.scalingPlanName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scalingPlanName'");
            }
            resourceInputs["daysOfWeek"] = args ? args.daysOfWeek : undefined;
            resourceInputs["offPeakActionOnDisconnect"] = args ? args.offPeakActionOnDisconnect : undefined;
            resourceInputs["offPeakActionOnLogoff"] = args ? args.offPeakActionOnLogoff : undefined;
            resourceInputs["offPeakMinutesToWaitOnDisconnect"] = args ? args.offPeakMinutesToWaitOnDisconnect : undefined;
            resourceInputs["offPeakMinutesToWaitOnLogoff"] = args ? args.offPeakMinutesToWaitOnLogoff : undefined;
            resourceInputs["offPeakStartTime"] = args ? args.offPeakStartTime : undefined;
            resourceInputs["offPeakStartVMOnConnect"] = (args ? args.offPeakStartVMOnConnect : undefined) ?? "Enable";
            resourceInputs["peakActionOnDisconnect"] = args ? args.peakActionOnDisconnect : undefined;
            resourceInputs["peakActionOnLogoff"] = args ? args.peakActionOnLogoff : undefined;
            resourceInputs["peakMinutesToWaitOnDisconnect"] = args ? args.peakMinutesToWaitOnDisconnect : undefined;
            resourceInputs["peakMinutesToWaitOnLogoff"] = args ? args.peakMinutesToWaitOnLogoff : undefined;
            resourceInputs["peakStartTime"] = args ? args.peakStartTime : undefined;
            resourceInputs["peakStartVMOnConnect"] = (args ? args.peakStartVMOnConnect : undefined) ?? "Enable";
            resourceInputs["rampDownActionOnDisconnect"] = args ? args.rampDownActionOnDisconnect : undefined;
            resourceInputs["rampDownActionOnLogoff"] = args ? args.rampDownActionOnLogoff : undefined;
            resourceInputs["rampDownMinutesToWaitOnDisconnect"] = args ? args.rampDownMinutesToWaitOnDisconnect : undefined;
            resourceInputs["rampDownMinutesToWaitOnLogoff"] = args ? args.rampDownMinutesToWaitOnLogoff : undefined;
            resourceInputs["rampDownStartTime"] = args ? args.rampDownStartTime : undefined;
            resourceInputs["rampDownStartVMOnConnect"] = (args ? args.rampDownStartVMOnConnect : undefined) ?? "Enable";
            resourceInputs["rampUpActionOnDisconnect"] = args ? args.rampUpActionOnDisconnect : undefined;
            resourceInputs["rampUpActionOnLogoff"] = args ? args.rampUpActionOnLogoff : undefined;
            resourceInputs["rampUpAutoStartHosts"] = args ? args.rampUpAutoStartHosts : undefined;
            resourceInputs["rampUpMinutesToWaitOnDisconnect"] = args ? args.rampUpMinutesToWaitOnDisconnect : undefined;
            resourceInputs["rampUpMinutesToWaitOnLogoff"] = args ? args.rampUpMinutesToWaitOnLogoff : undefined;
            resourceInputs["rampUpStartTime"] = args ? args.rampUpStartTime : undefined;
            resourceInputs["rampUpStartVMOnConnect"] = (args ? args.rampUpStartVMOnConnect : undefined) ?? "Enable";
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scalingPlanName"] = args ? args.scalingPlanName : undefined;
            resourceInputs["scalingPlanScheduleName"] = args ? args.scalingPlanScheduleName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["daysOfWeek"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["offPeakActionOnDisconnect"] = undefined /*out*/;
            resourceInputs["offPeakActionOnLogoff"] = undefined /*out*/;
            resourceInputs["offPeakMinutesToWaitOnDisconnect"] = undefined /*out*/;
            resourceInputs["offPeakMinutesToWaitOnLogoff"] = undefined /*out*/;
            resourceInputs["offPeakStartTime"] = undefined /*out*/;
            resourceInputs["offPeakStartVMOnConnect"] = undefined /*out*/;
            resourceInputs["peakActionOnDisconnect"] = undefined /*out*/;
            resourceInputs["peakActionOnLogoff"] = undefined /*out*/;
            resourceInputs["peakMinutesToWaitOnDisconnect"] = undefined /*out*/;
            resourceInputs["peakMinutesToWaitOnLogoff"] = undefined /*out*/;
            resourceInputs["peakStartTime"] = undefined /*out*/;
            resourceInputs["peakStartVMOnConnect"] = undefined /*out*/;
            resourceInputs["rampDownActionOnDisconnect"] = undefined /*out*/;
            resourceInputs["rampDownActionOnLogoff"] = undefined /*out*/;
            resourceInputs["rampDownMinutesToWaitOnDisconnect"] = undefined /*out*/;
            resourceInputs["rampDownMinutesToWaitOnLogoff"] = undefined /*out*/;
            resourceInputs["rampDownStartTime"] = undefined /*out*/;
            resourceInputs["rampDownStartVMOnConnect"] = undefined /*out*/;
            resourceInputs["rampUpActionOnDisconnect"] = undefined /*out*/;
            resourceInputs["rampUpActionOnLogoff"] = undefined /*out*/;
            resourceInputs["rampUpAutoStartHosts"] = undefined /*out*/;
            resourceInputs["rampUpMinutesToWaitOnDisconnect"] = undefined /*out*/;
            resourceInputs["rampUpMinutesToWaitOnLogoff"] = undefined /*out*/;
            resourceInputs["rampUpStartTime"] = undefined /*out*/;
            resourceInputs["rampUpStartVMOnConnect"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:desktopvirtualization/v20230707preview:ScalingPlanPersonalSchedule" }, { type: "azure-native:desktopvirtualization/v20230905:ScalingPlanPersonalSchedule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ScalingPlanPersonalSchedule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ScalingPlanPersonalSchedule resource.
 */
export interface ScalingPlanPersonalScheduleArgs {
    /**
     * Set of days of the week on which this schedule is active.
     */
    daysOfWeek?: pulumi.Input<pulumi.Input<string | types.enums.DayOfWeek>[]>;
    /**
     * Action to be taken after a user disconnect during the off-peak period.
     */
    offPeakActionOnDisconnect?: pulumi.Input<string | types.enums.SessionHandlingOperation>;
    /**
     * Action to be taken after a logoff during the off-peak period.
     */
    offPeakActionOnLogoff?: pulumi.Input<string | types.enums.SessionHandlingOperation>;
    /**
     * The time in minutes to wait before performing the desired session handling action when a user disconnects during the off-peak period.
     */
    offPeakMinutesToWaitOnDisconnect?: pulumi.Input<number>;
    /**
     * The time in minutes to wait before performing the desired session handling action when a user logs off during the off-peak period.
     */
    offPeakMinutesToWaitOnLogoff?: pulumi.Input<number>;
    /**
     * Starting time for off-peak period.
     */
    offPeakStartTime?: pulumi.Input<types.inputs.TimeArgs>;
    /**
     * The desired configuration of Start VM On Connect for the hostpool during the off-peak phase.
     */
    offPeakStartVMOnConnect?: pulumi.Input<string | types.enums.SetStartVMOnConnect>;
    /**
     * Action to be taken after a user disconnect during the peak period.
     */
    peakActionOnDisconnect?: pulumi.Input<string | types.enums.SessionHandlingOperation>;
    /**
     * Action to be taken after a logoff during the peak period.
     */
    peakActionOnLogoff?: pulumi.Input<string | types.enums.SessionHandlingOperation>;
    /**
     * The time in minutes to wait before performing the desired session handling action when a user disconnects during the peak period.
     */
    peakMinutesToWaitOnDisconnect?: pulumi.Input<number>;
    /**
     * The time in minutes to wait before performing the desired session handling action when a user logs off during the peak period.
     */
    peakMinutesToWaitOnLogoff?: pulumi.Input<number>;
    /**
     * Starting time for peak period.
     */
    peakStartTime?: pulumi.Input<types.inputs.TimeArgs>;
    /**
     * The desired configuration of Start VM On Connect for the hostpool during the peak phase.
     */
    peakStartVMOnConnect?: pulumi.Input<string | types.enums.SetStartVMOnConnect>;
    /**
     * Action to be taken after a user disconnect during the ramp down period.
     */
    rampDownActionOnDisconnect?: pulumi.Input<string | types.enums.SessionHandlingOperation>;
    /**
     * Action to be taken after a logoff during the ramp down period.
     */
    rampDownActionOnLogoff?: pulumi.Input<string | types.enums.SessionHandlingOperation>;
    /**
     * The time in minutes to wait before performing the desired session handling action when a user disconnects during the ramp down period.
     */
    rampDownMinutesToWaitOnDisconnect?: pulumi.Input<number>;
    /**
     * The time in minutes to wait before performing the desired session handling action when a user logs off during the ramp down period.
     */
    rampDownMinutesToWaitOnLogoff?: pulumi.Input<number>;
    /**
     * Starting time for ramp down period.
     */
    rampDownStartTime?: pulumi.Input<types.inputs.TimeArgs>;
    /**
     * The desired configuration of Start VM On Connect for the hostpool during the ramp down phase.
     */
    rampDownStartVMOnConnect?: pulumi.Input<string | types.enums.SetStartVMOnConnect>;
    /**
     * Action to be taken after a user disconnect during the ramp up period.
     */
    rampUpActionOnDisconnect?: pulumi.Input<string | types.enums.SessionHandlingOperation>;
    /**
     * Action to be taken after a logoff during the ramp up period.
     */
    rampUpActionOnLogoff?: pulumi.Input<string | types.enums.SessionHandlingOperation>;
    /**
     * The desired startup behavior during the ramp up period for personal vms in the hostpool.
     */
    rampUpAutoStartHosts?: pulumi.Input<string | types.enums.StartupBehavior>;
    /**
     * The time in minutes to wait before performing the desired session handling action when a user disconnects during the ramp up period.
     */
    rampUpMinutesToWaitOnDisconnect?: pulumi.Input<number>;
    /**
     * The time in minutes to wait before performing the desired session handling action when a user logs off during the ramp up period.
     */
    rampUpMinutesToWaitOnLogoff?: pulumi.Input<number>;
    /**
     * Starting time for ramp up period.
     */
    rampUpStartTime?: pulumi.Input<types.inputs.TimeArgs>;
    /**
     * The desired configuration of Start VM On Connect for the hostpool during the ramp up phase. If this is disabled, session hosts must be turned on using rampUpAutoStartHosts or by turning them on manually.
     */
    rampUpStartVMOnConnect?: pulumi.Input<string | types.enums.SetStartVMOnConnect>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the scaling plan.
     */
    scalingPlanName: pulumi.Input<string>;
    /**
     * The name of the ScalingPlanSchedule
     */
    scalingPlanScheduleName?: pulumi.Input<string>;
}
