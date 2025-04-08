import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Snapshot policy information
 *
 * Uses Azure REST API version 2022-11-01. In version 1.x of the Azure Native provider, it used API version 2020-12-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-05-01, 2023-05-01-preview, 2023-07-01, 2023-07-01-preview, 2023-11-01, 2023-11-01-preview, 2024-01-01, 2024-03-01, 2024-03-01-preview, 2024-05-01, 2024-05-01-preview, 2024-07-01, 2024-07-01-preview, 2024-09-01, 2024-09-01-preview.
 */
export class SnapshotPolicy extends pulumi.CustomResource {
    /**
     * Get an existing SnapshotPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SnapshotPolicy {
        return new SnapshotPolicy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:netapp:SnapshotPolicy';

    /**
     * Returns true if the given object is an instance of SnapshotPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SnapshotPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SnapshotPolicy.__pulumiType;
    }

    /**
     * Schedule for daily snapshots
     */
    public readonly dailySchedule!: pulumi.Output<types.outputs.DailyScheduleResponse | undefined>;
    /**
     * The property to decide policy is enabled or not
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Schedule for hourly snapshots
     */
    public readonly hourlySchedule!: pulumi.Output<types.outputs.HourlyScheduleResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Schedule for monthly snapshots
     */
    public readonly monthlySchedule!: pulumi.Output<types.outputs.MonthlyScheduleResponse | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Azure lifecycle management
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Schedule for weekly snapshots
     */
    public readonly weeklySchedule!: pulumi.Output<types.outputs.WeeklyScheduleResponse | undefined>;

    /**
     * Create a SnapshotPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SnapshotPolicyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["dailySchedule"] = args ? args.dailySchedule : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["hourlySchedule"] = args ? args.hourlySchedule : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["monthlySchedule"] = args ? args.monthlySchedule : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["snapshotPolicyName"] = args ? args.snapshotPolicyName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["weeklySchedule"] = args ? args.weeklySchedule : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["dailySchedule"] = undefined /*out*/;
            resourceInputs["enabled"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["hourlySchedule"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["monthlySchedule"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["weeklySchedule"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:netapp/v20200501:SnapshotPolicy" }, { type: "azure-native:netapp/v20200601:SnapshotPolicy" }, { type: "azure-native:netapp/v20200701:SnapshotPolicy" }, { type: "azure-native:netapp/v20200801:SnapshotPolicy" }, { type: "azure-native:netapp/v20200901:SnapshotPolicy" }, { type: "azure-native:netapp/v20201101:SnapshotPolicy" }, { type: "azure-native:netapp/v20201201:SnapshotPolicy" }, { type: "azure-native:netapp/v20210201:SnapshotPolicy" }, { type: "azure-native:netapp/v20210401:SnapshotPolicy" }, { type: "azure-native:netapp/v20210401preview:SnapshotPolicy" }, { type: "azure-native:netapp/v20210601:SnapshotPolicy" }, { type: "azure-native:netapp/v20210801:SnapshotPolicy" }, { type: "azure-native:netapp/v20211001:SnapshotPolicy" }, { type: "azure-native:netapp/v20220101:SnapshotPolicy" }, { type: "azure-native:netapp/v20220301:SnapshotPolicy" }, { type: "azure-native:netapp/v20220501:SnapshotPolicy" }, { type: "azure-native:netapp/v20220901:SnapshotPolicy" }, { type: "azure-native:netapp/v20221101:SnapshotPolicy" }, { type: "azure-native:netapp/v20221101preview:SnapshotPolicy" }, { type: "azure-native:netapp/v20230501:SnapshotPolicy" }, { type: "azure-native:netapp/v20230501preview:SnapshotPolicy" }, { type: "azure-native:netapp/v20230701:SnapshotPolicy" }, { type: "azure-native:netapp/v20230701preview:SnapshotPolicy" }, { type: "azure-native:netapp/v20231101:SnapshotPolicy" }, { type: "azure-native:netapp/v20231101preview:SnapshotPolicy" }, { type: "azure-native:netapp/v20240101:SnapshotPolicy" }, { type: "azure-native:netapp/v20240301:SnapshotPolicy" }, { type: "azure-native:netapp/v20240301preview:SnapshotPolicy" }, { type: "azure-native:netapp/v20240501:SnapshotPolicy" }, { type: "azure-native:netapp/v20240501preview:SnapshotPolicy" }, { type: "azure-native:netapp/v20240701:SnapshotPolicy" }, { type: "azure-native:netapp/v20240701preview:SnapshotPolicy" }, { type: "azure-native:netapp/v20240901:SnapshotPolicy" }, { type: "azure-native:netapp/v20240901preview:SnapshotPolicy" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SnapshotPolicy.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SnapshotPolicy resource.
 */
export interface SnapshotPolicyArgs {
    /**
     * The name of the NetApp account
     */
    accountName: pulumi.Input<string>;
    /**
     * Schedule for daily snapshots
     */
    dailySchedule?: pulumi.Input<types.inputs.DailyScheduleArgs>;
    /**
     * The property to decide policy is enabled or not
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Schedule for hourly snapshots
     */
    hourlySchedule?: pulumi.Input<types.inputs.HourlyScheduleArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Schedule for monthly snapshots
     */
    monthlySchedule?: pulumi.Input<types.inputs.MonthlyScheduleArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the snapshot policy
     */
    snapshotPolicyName?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Schedule for weekly snapshots
     */
    weeklySchedule?: pulumi.Input<types.inputs.WeeklyScheduleArgs>;
}