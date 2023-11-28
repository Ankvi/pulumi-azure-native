import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A flow log resource.
 */
export class FlowLog extends pulumi.CustomResource {
    /**
     * Get an existing FlowLog resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): FlowLog {
        return new FlowLog(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20230601:FlowLog';

    /**
     * Returns true if the given object is an instance of FlowLog.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FlowLog {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FlowLog.__pulumiType;
    }

    /**
     * Flag to enable/disable flow logging.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Parameters that define the configuration of traffic analytics.
     */
    public readonly flowAnalyticsConfiguration!: pulumi.Output<types.outputs.TrafficAnalyticsPropertiesResponse | undefined>;
    /**
     * Parameters that define the flow log format.
     */
    public readonly format!: pulumi.Output<types.outputs.FlowLogFormatParametersResponse | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the flow log.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Parameters that define the retention policy for flow log.
     */
    public readonly retentionPolicy!: pulumi.Output<types.outputs.RetentionPolicyParametersResponse | undefined>;
    /**
     * ID of the storage account which is used to store the flow log.
     */
    public readonly storageId!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Guid of network security group to which flow log will be applied.
     */
    public /*out*/ readonly targetResourceGuid!: pulumi.Output<string>;
    /**
     * ID of network security group to which flow log will be applied.
     */
    public readonly targetResourceId!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a FlowLog resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FlowLogArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.networkWatcherName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkWatcherName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.storageId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storageId'");
            }
            if ((!args || args.targetResourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetResourceId'");
            }
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["flowAnalyticsConfiguration"] = args ? args.flowAnalyticsConfiguration : undefined;
            resourceInputs["flowLogName"] = args ? args.flowLogName : undefined;
            resourceInputs["format"] = args ? (args.format ? pulumi.output(args.format).apply(types.inputs.flowLogFormatParametersArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["networkWatcherName"] = args ? args.networkWatcherName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["retentionPolicy"] = args ? (args.retentionPolicy ? pulumi.output(args.retentionPolicy).apply(types.inputs.retentionPolicyParametersArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["storageId"] = args ? args.storageId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["targetResourceId"] = args ? args.targetResourceId : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["targetResourceGuid"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["enabled"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["flowAnalyticsConfiguration"] = undefined /*out*/;
            resourceInputs["format"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["retentionPolicy"] = undefined /*out*/;
            resourceInputs["storageId"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["targetResourceGuid"] = undefined /*out*/;
            resourceInputs["targetResourceId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:FlowLog" }, { type: "azure-native:network/v20191101:FlowLog" }, { type: "azure-native:network/v20191201:FlowLog" }, { type: "azure-native:network/v20200301:FlowLog" }, { type: "azure-native:network/v20200401:FlowLog" }, { type: "azure-native:network/v20200501:FlowLog" }, { type: "azure-native:network/v20200601:FlowLog" }, { type: "azure-native:network/v20200701:FlowLog" }, { type: "azure-native:network/v20200801:FlowLog" }, { type: "azure-native:network/v20201101:FlowLog" }, { type: "azure-native:network/v20210201:FlowLog" }, { type: "azure-native:network/v20210301:FlowLog" }, { type: "azure-native:network/v20210501:FlowLog" }, { type: "azure-native:network/v20210801:FlowLog" }, { type: "azure-native:network/v20220101:FlowLog" }, { type: "azure-native:network/v20220501:FlowLog" }, { type: "azure-native:network/v20220701:FlowLog" }, { type: "azure-native:network/v20220901:FlowLog" }, { type: "azure-native:network/v20221101:FlowLog" }, { type: "azure-native:network/v20230201:FlowLog" }, { type: "azure-native:network/v20230401:FlowLog" }, { type: "azure-native:network/v20230501:FlowLog" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(FlowLog.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a FlowLog resource.
 */
export interface FlowLogArgs {
    /**
     * Flag to enable/disable flow logging.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Parameters that define the configuration of traffic analytics.
     */
    flowAnalyticsConfiguration?: pulumi.Input<types.inputs.TrafficAnalyticsPropertiesArgs>;
    /**
     * The name of the flow log.
     */
    flowLogName?: pulumi.Input<string>;
    /**
     * Parameters that define the flow log format.
     */
    format?: pulumi.Input<types.inputs.FlowLogFormatParametersArgs>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the network watcher.
     */
    networkWatcherName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Parameters that define the retention policy for flow log.
     */
    retentionPolicy?: pulumi.Input<types.inputs.RetentionPolicyParametersArgs>;
    /**
     * ID of the storage account which is used to store the flow log.
     */
    storageId: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * ID of network security group to which flow log will be applied.
     */
    targetResourceId: pulumi.Input<string>;
}
