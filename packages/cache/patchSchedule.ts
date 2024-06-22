import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Response to put/get patch schedules for Redis cache.
 * Azure REST API version: 2023-04-01. Prior API version in Azure Native 1.x: 2020-06-01.
 *
 * Other available API versions: 2023-05-01-preview, 2023-08-01, 2024-03-01, 2024-04-01-preview.
 */
export class PatchSchedule extends pulumi.CustomResource {
    /**
     * Get an existing PatchSchedule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PatchSchedule {
        return new PatchSchedule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:cache:PatchSchedule';

    /**
     * Returns true if the given object is an instance of PatchSchedule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PatchSchedule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PatchSchedule.__pulumiType;
    }

    /**
     * The geo-location where the resource lives
     */
    public /*out*/ readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * List of patch schedules for a Redis cache.
     */
    public readonly scheduleEntries!: pulumi.Output<types.outputs.ScheduleEntryResponse[]>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a PatchSchedule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PatchScheduleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.scheduleEntries === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scheduleEntries'");
            }
            resourceInputs["default"] = args ? args.default : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scheduleEntries"] = args ? args.scheduleEntries : undefined;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["scheduleEntries"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:cache/v20171001:PatchSchedule" }, { type: "azure-native:cache/v20180301:PatchSchedule" }, { type: "azure-native:cache/v20190701:PatchSchedule" }, { type: "azure-native:cache/v20200601:PatchSchedule" }, { type: "azure-native:cache/v20201201:PatchSchedule" }, { type: "azure-native:cache/v20210601:PatchSchedule" }, { type: "azure-native:cache/v20220501:PatchSchedule" }, { type: "azure-native:cache/v20220601:PatchSchedule" }, { type: "azure-native:cache/v20230401:PatchSchedule" }, { type: "azure-native:cache/v20230501preview:PatchSchedule" }, { type: "azure-native:cache/v20230801:PatchSchedule" }, { type: "azure-native:cache/v20240301:PatchSchedule" }, { type: "azure-native:cache/v20240401preview:PatchSchedule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PatchSchedule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PatchSchedule resource.
 */
export interface PatchScheduleArgs {
    /**
     * Default string modeled as parameter for auto generation to work correctly.
     */
    default?: pulumi.Input<string>;
    /**
     * The name of the Redis cache.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * List of patch schedules for a Redis cache.
     */
    scheduleEntries: pulumi.Input<pulumi.Input<types.inputs.ScheduleEntryArgs>[]>;
}