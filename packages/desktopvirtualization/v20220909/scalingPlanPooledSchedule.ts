import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a ScalingPlanPooledSchedule definition.
 */
export class ScalingPlanPooledSchedule extends pulumi.CustomResource {
    /**
     * Get an existing ScalingPlanPooledSchedule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ScalingPlanPooledSchedule {
        return new ScalingPlanPooledSchedule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:desktopvirtualization/v20220909:ScalingPlanPooledSchedule';

    /**
     * Returns true if the given object is an instance of ScalingPlanPooledSchedule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ScalingPlanPooledSchedule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ScalingPlanPooledSchedule.__pulumiType;
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
     * Load balancing algorithm for off-peak period.
     */
    public readonly offPeakLoadBalancingAlgorithm!: pulumi.Output<string | undefined>;
    /**
     * Starting time for off-peak period.
     */
    public readonly offPeakStartTime!: pulumi.Output<types.outputs.TimeResponse | undefined>;
    /**
     * Load balancing algorithm for peak period.
     */
    public readonly peakLoadBalancingAlgorithm!: pulumi.Output<string | undefined>;
    /**
     * Starting time for peak period.
     */
    public readonly peakStartTime!: pulumi.Output<types.outputs.TimeResponse | undefined>;
    /**
     * Capacity threshold for ramp down period.
     */
    public readonly rampDownCapacityThresholdPct!: pulumi.Output<number | undefined>;
    /**
     * Should users be logged off forcefully from hosts.
     */
    public readonly rampDownForceLogoffUsers!: pulumi.Output<boolean | undefined>;
    /**
     * Load balancing algorithm for ramp down period.
     */
    public readonly rampDownLoadBalancingAlgorithm!: pulumi.Output<string | undefined>;
    /**
     * Minimum host percentage for ramp down period.
     */
    public readonly rampDownMinimumHostsPct!: pulumi.Output<number | undefined>;
    /**
     * Notification message for users during ramp down period.
     */
    public readonly rampDownNotificationMessage!: pulumi.Output<string | undefined>;
    /**
     * Starting time for ramp down period.
     */
    public readonly rampDownStartTime!: pulumi.Output<types.outputs.TimeResponse | undefined>;
    /**
     * Specifies when to stop hosts during ramp down period.
     */
    public readonly rampDownStopHostsWhen!: pulumi.Output<string | undefined>;
    /**
     * Number of minutes to wait to stop hosts during ramp down period.
     */
    public readonly rampDownWaitTimeMinutes!: pulumi.Output<number | undefined>;
    /**
     * Capacity threshold for ramp up period.
     */
    public readonly rampUpCapacityThresholdPct!: pulumi.Output<number | undefined>;
    /**
     * Load balancing algorithm for ramp up period.
     */
    public readonly rampUpLoadBalancingAlgorithm!: pulumi.Output<string | undefined>;
    /**
     * Minimum host percentage for ramp up period.
     */
    public readonly rampUpMinimumHostsPct!: pulumi.Output<number | undefined>;
    /**
     * Starting time for ramp up period.
     */
    public readonly rampUpStartTime!: pulumi.Output<types.outputs.TimeResponse | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ScalingPlanPooledSchedule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ScalingPlanPooledScheduleArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["offPeakLoadBalancingAlgorithm"] = args ? args.offPeakLoadBalancingAlgorithm : undefined;
            resourceInputs["offPeakStartTime"] = args ? args.offPeakStartTime : undefined;
            resourceInputs["peakLoadBalancingAlgorithm"] = args ? args.peakLoadBalancingAlgorithm : undefined;
            resourceInputs["peakStartTime"] = args ? args.peakStartTime : undefined;
            resourceInputs["rampDownCapacityThresholdPct"] = args ? args.rampDownCapacityThresholdPct : undefined;
            resourceInputs["rampDownForceLogoffUsers"] = args ? args.rampDownForceLogoffUsers : undefined;
            resourceInputs["rampDownLoadBalancingAlgorithm"] = args ? args.rampDownLoadBalancingAlgorithm : undefined;
            resourceInputs["rampDownMinimumHostsPct"] = args ? args.rampDownMinimumHostsPct : undefined;
            resourceInputs["rampDownNotificationMessage"] = args ? args.rampDownNotificationMessage : undefined;
            resourceInputs["rampDownStartTime"] = args ? args.rampDownStartTime : undefined;
            resourceInputs["rampDownStopHostsWhen"] = args ? args.rampDownStopHostsWhen : undefined;
            resourceInputs["rampDownWaitTimeMinutes"] = args ? args.rampDownWaitTimeMinutes : undefined;
            resourceInputs["rampUpCapacityThresholdPct"] = args ? args.rampUpCapacityThresholdPct : undefined;
            resourceInputs["rampUpLoadBalancingAlgorithm"] = args ? args.rampUpLoadBalancingAlgorithm : undefined;
            resourceInputs["rampUpMinimumHostsPct"] = args ? args.rampUpMinimumHostsPct : undefined;
            resourceInputs["rampUpStartTime"] = args ? args.rampUpStartTime : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scalingPlanName"] = args ? args.scalingPlanName : undefined;
            resourceInputs["scalingPlanScheduleName"] = args ? args.scalingPlanScheduleName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["daysOfWeek"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["offPeakLoadBalancingAlgorithm"] = undefined /*out*/;
            resourceInputs["offPeakStartTime"] = undefined /*out*/;
            resourceInputs["peakLoadBalancingAlgorithm"] = undefined /*out*/;
            resourceInputs["peakStartTime"] = undefined /*out*/;
            resourceInputs["rampDownCapacityThresholdPct"] = undefined /*out*/;
            resourceInputs["rampDownForceLogoffUsers"] = undefined /*out*/;
            resourceInputs["rampDownLoadBalancingAlgorithm"] = undefined /*out*/;
            resourceInputs["rampDownMinimumHostsPct"] = undefined /*out*/;
            resourceInputs["rampDownNotificationMessage"] = undefined /*out*/;
            resourceInputs["rampDownStartTime"] = undefined /*out*/;
            resourceInputs["rampDownStopHostsWhen"] = undefined /*out*/;
            resourceInputs["rampDownWaitTimeMinutes"] = undefined /*out*/;
            resourceInputs["rampUpCapacityThresholdPct"] = undefined /*out*/;
            resourceInputs["rampUpLoadBalancingAlgorithm"] = undefined /*out*/;
            resourceInputs["rampUpMinimumHostsPct"] = undefined /*out*/;
            resourceInputs["rampUpStartTime"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:desktopvirtualization:ScalingPlanPooledSchedule" }, { type: "azure-native:desktopvirtualization/v20220401preview:ScalingPlanPooledSchedule" }, { type: "azure-native:desktopvirtualization/v20221014preview:ScalingPlanPooledSchedule" }, { type: "azure-native:desktopvirtualization/v20230707preview:ScalingPlanPooledSchedule" }, { type: "azure-native:desktopvirtualization/v20230905:ScalingPlanPooledSchedule" }, { type: "azure-native:desktopvirtualization/v20231004preview:ScalingPlanPooledSchedule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ScalingPlanPooledSchedule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ScalingPlanPooledSchedule resource.
 */
export interface ScalingPlanPooledScheduleArgs {
    /**
     * Set of days of the week on which this schedule is active.
     */
    daysOfWeek?: pulumi.Input<pulumi.Input<string | types.enums.DayOfWeek>[]>;
    /**
     * Load balancing algorithm for off-peak period.
     */
    offPeakLoadBalancingAlgorithm?: pulumi.Input<string | types.enums.SessionHostLoadBalancingAlgorithm>;
    /**
     * Starting time for off-peak period.
     */
    offPeakStartTime?: pulumi.Input<types.inputs.TimeArgs>;
    /**
     * Load balancing algorithm for peak period.
     */
    peakLoadBalancingAlgorithm?: pulumi.Input<string | types.enums.SessionHostLoadBalancingAlgorithm>;
    /**
     * Starting time for peak period.
     */
    peakStartTime?: pulumi.Input<types.inputs.TimeArgs>;
    /**
     * Capacity threshold for ramp down period.
     */
    rampDownCapacityThresholdPct?: pulumi.Input<number>;
    /**
     * Should users be logged off forcefully from hosts.
     */
    rampDownForceLogoffUsers?: pulumi.Input<boolean>;
    /**
     * Load balancing algorithm for ramp down period.
     */
    rampDownLoadBalancingAlgorithm?: pulumi.Input<string | types.enums.SessionHostLoadBalancingAlgorithm>;
    /**
     * Minimum host percentage for ramp down period.
     */
    rampDownMinimumHostsPct?: pulumi.Input<number>;
    /**
     * Notification message for users during ramp down period.
     */
    rampDownNotificationMessage?: pulumi.Input<string>;
    /**
     * Starting time for ramp down period.
     */
    rampDownStartTime?: pulumi.Input<types.inputs.TimeArgs>;
    /**
     * Specifies when to stop hosts during ramp down period.
     */
    rampDownStopHostsWhen?: pulumi.Input<string | types.enums.StopHostsWhen>;
    /**
     * Number of minutes to wait to stop hosts during ramp down period.
     */
    rampDownWaitTimeMinutes?: pulumi.Input<number>;
    /**
     * Capacity threshold for ramp up period.
     */
    rampUpCapacityThresholdPct?: pulumi.Input<number>;
    /**
     * Load balancing algorithm for ramp up period.
     */
    rampUpLoadBalancingAlgorithm?: pulumi.Input<string | types.enums.SessionHostLoadBalancingAlgorithm>;
    /**
     * Minimum host percentage for ramp up period.
     */
    rampUpMinimumHostsPct?: pulumi.Input<number>;
    /**
     * Starting time for ramp up period.
     */
    rampUpStartTime?: pulumi.Input<types.inputs.TimeArgs>;
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
