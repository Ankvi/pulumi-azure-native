import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The bandwidth schedule details.
 */
export class BandwidthSchedule extends pulumi.CustomResource {
    /**
     * Get an existing BandwidthSchedule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BandwidthSchedule {
        return new BandwidthSchedule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:databoxedge/v20230101preview:BandwidthSchedule';

    /**
     * Returns true if the given object is an instance of BandwidthSchedule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BandwidthSchedule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BandwidthSchedule.__pulumiType;
    }

    /**
     * The days of the week when this schedule is applicable.
     */
    public readonly days!: pulumi.Output<string[]>;
    /**
     * The object name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The bandwidth rate in Mbps.
     */
    public readonly rateInMbps!: pulumi.Output<number>;
    /**
     * The start time of the schedule in UTC.
     */
    public readonly start!: pulumi.Output<string>;
    /**
     * The stop time of the schedule in UTC.
     */
    public readonly stop!: pulumi.Output<string>;
    /**
     * Metadata pertaining to creation and last modification of BandwidthSchedule
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The hierarchical type of the object.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a BandwidthSchedule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BandwidthScheduleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.days === undefined) && !opts.urn) {
                throw new Error("Missing required property 'days'");
            }
            if ((!args || args.deviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'deviceName'");
            }
            if ((!args || args.rateInMbps === undefined) && !opts.urn) {
                throw new Error("Missing required property 'rateInMbps'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.start === undefined) && !opts.urn) {
                throw new Error("Missing required property 'start'");
            }
            if ((!args || args.stop === undefined) && !opts.urn) {
                throw new Error("Missing required property 'stop'");
            }
            resourceInputs["days"] = args ? args.days : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["rateInMbps"] = args ? args.rateInMbps : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["start"] = args ? args.start : undefined;
            resourceInputs["stop"] = args ? args.stop : undefined;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["days"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["rateInMbps"] = undefined /*out*/;
            resourceInputs["start"] = undefined /*out*/;
            resourceInputs["stop"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:databoxedge:BandwidthSchedule" }, { type: "azure-native:databoxedge/v20190301:BandwidthSchedule" }, { type: "azure-native:databoxedge/v20190701:BandwidthSchedule" }, { type: "azure-native:databoxedge/v20190801:BandwidthSchedule" }, { type: "azure-native:databoxedge/v20200501preview:BandwidthSchedule" }, { type: "azure-native:databoxedge/v20200901:BandwidthSchedule" }, { type: "azure-native:databoxedge/v20200901preview:BandwidthSchedule" }, { type: "azure-native:databoxedge/v20201201:BandwidthSchedule" }, { type: "azure-native:databoxedge/v20210201:BandwidthSchedule" }, { type: "azure-native:databoxedge/v20210201preview:BandwidthSchedule" }, { type: "azure-native:databoxedge/v20210601:BandwidthSchedule" }, { type: "azure-native:databoxedge/v20210601preview:BandwidthSchedule" }, { type: "azure-native:databoxedge/v20220301:BandwidthSchedule" }, { type: "azure-native:databoxedge/v20220401preview:BandwidthSchedule" }, { type: "azure-native:databoxedge/v20221201preview:BandwidthSchedule" }, { type: "azure-native:databoxedge/v20230701:BandwidthSchedule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(BandwidthSchedule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a BandwidthSchedule resource.
 */
export interface BandwidthScheduleArgs {
    /**
     * The days of the week when this schedule is applicable.
     */
    days: pulumi.Input<pulumi.Input<string | types.enums.DayOfWeek>[]>;
    /**
     * The device name.
     */
    deviceName: pulumi.Input<string>;
    /**
     * The bandwidth schedule name which needs to be added/updated.
     */
    name?: pulumi.Input<string>;
    /**
     * The bandwidth rate in Mbps.
     */
    rateInMbps: pulumi.Input<number>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The start time of the schedule in UTC.
     */
    start: pulumi.Input<string>;
    /**
     * The stop time of the schedule in UTC.
     */
    stop: pulumi.Input<string>;
}
