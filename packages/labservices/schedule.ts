import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Schedule for automatically turning virtual machines in a lab on and off at specified times.
 *
 * Uses Azure REST API version 2023-06-07. In version 2.x of the Azure Native provider, it used API version 2022-08-01.
 *
 * Other available API versions: 2021-10-01-preview, 2021-11-15-preview, 2022-08-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native labservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
    public static readonly __pulumiType = 'azure-native:labservices:Schedule';

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
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Notes for this schedule.
     */
    public readonly notes!: pulumi.Output<string | undefined>;
    /**
     * Current provisioning state of the schedule.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The recurrence pattern of the scheduled actions.
     */
    public readonly recurrencePattern!: pulumi.Output<types.outputs.RecurrencePatternResponse | undefined>;
    /**
     * Error details of last operation done on schedule.
     */
    public /*out*/ readonly resourceOperationError!: pulumi.Output<types.outputs.ResourceOperationErrorResponse>;
    /**
     * When lab user virtual machines will be started. Timestamp offsets will be ignored and timeZoneId is used instead.
     */
    public readonly startAt!: pulumi.Output<string | undefined>;
    /**
     * When lab user virtual machines will be stopped. Timestamp offsets will be ignored and timeZoneId is used instead.
     */
    public readonly stopAt!: pulumi.Output<string>;
    /**
     * Metadata pertaining to creation and last modification of the schedule.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The IANA timezone id for the schedule.
     */
    public readonly timeZoneId!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
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
            if ((!args || args.labName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'labName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.stopAt === undefined) && !opts.urn) {
                throw new Error("Missing required property 'stopAt'");
            }
            if ((!args || args.timeZoneId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'timeZoneId'");
            }
            resourceInputs["labName"] = args ? args.labName : undefined;
            resourceInputs["notes"] = args ? args.notes : undefined;
            resourceInputs["recurrencePattern"] = args ? args.recurrencePattern : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scheduleName"] = args ? args.scheduleName : undefined;
            resourceInputs["startAt"] = args ? args.startAt : undefined;
            resourceInputs["stopAt"] = args ? args.stopAt : undefined;
            resourceInputs["timeZoneId"] = args ? args.timeZoneId : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceOperationError"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["notes"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["recurrencePattern"] = undefined /*out*/;
            resourceInputs["resourceOperationError"] = undefined /*out*/;
            resourceInputs["startAt"] = undefined /*out*/;
            resourceInputs["stopAt"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["timeZoneId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:labservices/v20211001preview:Schedule" }, { type: "azure-native:labservices/v20211115preview:Schedule" }, { type: "azure-native:labservices/v20220801:Schedule" }, { type: "azure-native:labservices/v20230607:Schedule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Schedule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Schedule resource.
 */
export interface ScheduleArgs {
    /**
     * The name of the lab that uniquely identifies it within containing lab plan. Used in resource URIs.
     */
    labName: pulumi.Input<string>;
    /**
     * Notes for this schedule.
     */
    notes?: pulumi.Input<string>;
    /**
     * The recurrence pattern of the scheduled actions.
     */
    recurrencePattern?: pulumi.Input<types.inputs.RecurrencePatternArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the schedule that uniquely identifies it within containing lab. Used in resource URIs.
     */
    scheduleName?: pulumi.Input<string>;
    /**
     * When lab user virtual machines will be started. Timestamp offsets will be ignored and timeZoneId is used instead.
     */
    startAt?: pulumi.Input<string>;
    /**
     * When lab user virtual machines will be stopped. Timestamp offsets will be ignored and timeZoneId is used instead.
     */
    stopAt: pulumi.Input<string>;
    /**
     * The IANA timezone id for the schedule.
     */
    timeZoneId: pulumi.Input<string>;
}