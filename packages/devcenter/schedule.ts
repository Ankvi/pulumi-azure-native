import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a Schedule to execute a task.
 * Azure REST API version: 2023-04-01. Prior API version in Azure Native 1.x: 2022-09-01-preview
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
    public static readonly __pulumiType = 'azure-native:devcenter:Schedule';

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
     * The frequency of this scheduled task.
     */
    public readonly frequency!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Indicates whether or not this scheduled task is enabled.
     */
    public readonly state!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The target time to trigger the action. The format is HH:MM.
     */
    public readonly time!: pulumi.Output<string>;
    /**
     * The IANA timezone id at which the schedule should execute.
     */
    public readonly timeZone!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public readonly type!: pulumi.Output<string>;

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
            if ((!args || args.frequency === undefined) && !opts.urn) {
                throw new Error("Missing required property 'frequency'");
            }
            if ((!args || args.poolName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'poolName'");
            }
            if ((!args || args.projectName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.time === undefined) && !opts.urn) {
                throw new Error("Missing required property 'time'");
            }
            if ((!args || args.timeZone === undefined) && !opts.urn) {
                throw new Error("Missing required property 'timeZone'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["frequency"] = args ? args.frequency : undefined;
            resourceInputs["poolName"] = args ? args.poolName : undefined;
            resourceInputs["projectName"] = args ? args.projectName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scheduleName"] = args ? args.scheduleName : undefined;
            resourceInputs["state"] = args ? args.state : undefined;
            resourceInputs["time"] = args ? args.time : undefined;
            resourceInputs["timeZone"] = args ? args.timeZone : undefined;
            resourceInputs["top"] = args ? args.top : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
        } else {
            resourceInputs["frequency"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["time"] = undefined /*out*/;
            resourceInputs["timeZone"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:devcenter/v20220801preview:Schedule" }, { type: "azure-native:devcenter/v20220901preview:Schedule" }, { type: "azure-native:devcenter/v20221012preview:Schedule" }, { type: "azure-native:devcenter/v20221111preview:Schedule" }, { type: "azure-native:devcenter/v20230101preview:Schedule" }, { type: "azure-native:devcenter/v20230401:Schedule" }, { type: "azure-native:devcenter/v20230801preview:Schedule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Schedule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Schedule resource.
 */
export interface ScheduleArgs {
    /**
     * The frequency of this scheduled task.
     */
    frequency: pulumi.Input<string | types.enums.ScheduledFrequency>;
    /**
     * Name of the pool.
     */
    poolName: pulumi.Input<string>;
    /**
     * The name of the project.
     */
    projectName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the schedule that uniquely identifies it.
     */
    scheduleName?: pulumi.Input<string>;
    /**
     * Indicates whether or not this scheduled task is enabled.
     */
    state?: pulumi.Input<string | types.enums.ScheduleEnableStatus>;
    /**
     * The target time to trigger the action. The format is HH:MM.
     */
    time: pulumi.Input<string>;
    /**
     * The IANA timezone id at which the schedule should execute.
     */
    timeZone: pulumi.Input<string>;
    /**
     * The maximum number of resources to return from the operation. Example: '$top=10'.
     */
    top?: pulumi.Input<number>;
    /**
     * Supported type this scheduled task represents.
     */
    type: pulumi.Input<string | types.enums.ScheduledType>;
}
