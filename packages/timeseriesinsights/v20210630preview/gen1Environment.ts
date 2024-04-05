import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An environment is a set of time-series data available for query, and is the top level Azure Time Series Insights resource. Gen1 environments have data retention limits.
 */
export class Gen1Environment extends pulumi.CustomResource {
    /**
     * Get an existing Gen1Environment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Gen1Environment {
        return new Gen1Environment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:timeseriesinsights/v20210630preview:Gen1Environment';

    /**
     * Returns true if the given object is an instance of Gen1Environment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Gen1Environment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Gen1Environment.__pulumiType;
    }

    /**
     * The time the resource was created.
     */
    public /*out*/ readonly creationTime!: pulumi.Output<string>;
    /**
     * The fully qualified domain name used to access the environment data, e.g. to query the environment's events or upload reference data for the environment.
     */
    public /*out*/ readonly dataAccessFqdn!: pulumi.Output<string>;
    /**
     * An id used to access the environment data, e.g. to query the environment's events or upload reference data for the environment.
     */
    public /*out*/ readonly dataAccessId!: pulumi.Output<string>;
    /**
     * ISO8601 timespan specifying the minimum number of days the environment's events will be available for query.
     */
    public readonly dataRetentionTime!: pulumi.Output<string>;
    /**
     * The kind of the environment.
     * Expected value is 'Gen1'.
     */
    public readonly kind!: pulumi.Output<"Gen1">;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The list of event properties which will be used to partition data in the environment. Currently, only a single partition key property is supported.
     */
    public readonly partitionKeyProperties!: pulumi.Output<types.outputs.TimeSeriesIdPropertyResponse[] | undefined>;
    /**
     * Provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The sku determines the type of environment, either Gen1 (S1 or S2) or Gen2 (L1). For Gen1 environments the sku determines the capacity of the environment, the ingress rate, and the billing rate.
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse>;
    /**
     * An object that represents the status of the environment, and its internal state in the Time Series Insights service.
     */
    public /*out*/ readonly status!: pulumi.Output<types.outputs.EnvironmentStatusResponse>;
    /**
     * The behavior the Time Series Insights service should take when the environment's capacity has been exceeded. If "PauseIngress" is specified, new events will not be read from the event source. If "PurgeOldData" is specified, new events will continue to be read and old events will be deleted from the environment. The default behavior is PurgeOldData.
     */
    public readonly storageLimitExceededBehavior!: pulumi.Output<string | undefined>;
    /**
     * Indicates whether an environment supports Encryption at Rest with Customer Managed Key.
     */
    public /*out*/ readonly supportsCustomerManagedKey!: pulumi.Output<boolean>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Gen1Environment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Gen1EnvironmentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.dataRetentionTime === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataRetentionTime'");
            }
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sku'");
            }
            resourceInputs["dataRetentionTime"] = args ? args.dataRetentionTime : undefined;
            resourceInputs["environmentName"] = args ? args.environmentName : undefined;
            resourceInputs["kind"] = "Gen1";
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["partitionKeyProperties"] = args ? args.partitionKeyProperties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["storageLimitExceededBehavior"] = args ? args.storageLimitExceededBehavior : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["dataAccessFqdn"] = undefined /*out*/;
            resourceInputs["dataAccessId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["supportsCustomerManagedKey"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["dataAccessFqdn"] = undefined /*out*/;
            resourceInputs["dataAccessId"] = undefined /*out*/;
            resourceInputs["dataRetentionTime"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["partitionKeyProperties"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["storageLimitExceededBehavior"] = undefined /*out*/;
            resourceInputs["supportsCustomerManagedKey"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:timeseriesinsights:Gen1Environment" }, { type: "azure-native:timeseriesinsights/v20170228preview:Gen1Environment" }, { type: "azure-native:timeseriesinsights/v20171115:Gen1Environment" }, { type: "azure-native:timeseriesinsights/v20180815preview:Gen1Environment" }, { type: "azure-native:timeseriesinsights/v20200515:Gen1Environment" }, { type: "azure-native:timeseriesinsights/v20210331preview:Gen1Environment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Gen1Environment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Gen1Environment resource.
 */
export interface Gen1EnvironmentArgs {
    /**
     * ISO8601 timespan specifying the minimum number of days the environment's events will be available for query.
     */
    dataRetentionTime: pulumi.Input<string>;
    /**
     * Name of the environment
     */
    environmentName?: pulumi.Input<string>;
    /**
     * The kind of the environment.
     * Expected value is 'Gen1'.
     */
    kind: pulumi.Input<"Gen1">;
    /**
     * The location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The list of event properties which will be used to partition data in the environment. Currently, only a single partition key property is supported.
     */
    partitionKeyProperties?: pulumi.Input<pulumi.Input<types.inputs.TimeSeriesIdPropertyArgs>[]>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The sku determines the type of environment, either Gen1 (S1 or S2) or Gen2 (L1). For Gen1 environments the sku determines the capacity of the environment, the ingress rate, and the billing rate.
     */
    sku: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * The behavior the Time Series Insights service should take when the environment's capacity has been exceeded. If "PauseIngress" is specified, new events will not be read from the event source. If "PurgeOldData" is specified, new events will continue to be read and old events will be deleted from the environment. The default behavior is PurgeOldData.
     */
    storageLimitExceededBehavior?: pulumi.Input<string | types.enums.StorageLimitExceededBehavior>;
    /**
     * Key-value pairs of additional properties for the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}