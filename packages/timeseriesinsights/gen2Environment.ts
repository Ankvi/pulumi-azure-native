import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An environment is a set of time-series data available for query, and is the top level Azure Time Series Insights resource. Gen2 environments do not have set data retention limits.
 * Azure REST API version: 2020-05-15. Prior API version in Azure Native 1.x: 2020-05-15.
 */
export class Gen2Environment extends pulumi.CustomResource {
    /**
     * Get an existing Gen2Environment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Gen2Environment {
        return new Gen2Environment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:timeseriesinsights:Gen2Environment';

    /**
     * Returns true if the given object is an instance of Gen2Environment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Gen2Environment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Gen2Environment.__pulumiType;
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
     * The kind of the environment.
     * Expected value is 'Gen2'.
     */
    public readonly kind!: pulumi.Output<"Gen2">;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
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
     * The storage configuration provides the connection details that allows the Time Series Insights service to connect to the customer storage account that is used to store the environment's data.
     */
    public readonly storageConfiguration!: pulumi.Output<types.outputs.Gen2StorageConfigurationOutputResponse>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The list of event properties which will be used to define the environment's time series id.
     */
    public readonly timeSeriesIdProperties!: pulumi.Output<types.outputs.TimeSeriesIdPropertyResponse[]>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The warm store configuration provides the details to create a warm store cache that will retain a copy of the environment's data available for faster query.
     */
    public readonly warmStoreConfiguration!: pulumi.Output<types.outputs.WarmStoreConfigurationPropertiesResponse | undefined>;

    /**
     * Create a Gen2Environment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Gen2EnvironmentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sku'");
            }
            if ((!args || args.storageConfiguration === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storageConfiguration'");
            }
            if ((!args || args.timeSeriesIdProperties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'timeSeriesIdProperties'");
            }
            resourceInputs["environmentName"] = args ? args.environmentName : undefined;
            resourceInputs["kind"] = "Gen2";
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["storageConfiguration"] = args ? args.storageConfiguration : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeSeriesIdProperties"] = args ? args.timeSeriesIdProperties : undefined;
            resourceInputs["warmStoreConfiguration"] = args ? args.warmStoreConfiguration : undefined;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["dataAccessFqdn"] = undefined /*out*/;
            resourceInputs["dataAccessId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["dataAccessFqdn"] = undefined /*out*/;
            resourceInputs["dataAccessId"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["storageConfiguration"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["timeSeriesIdProperties"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["warmStoreConfiguration"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:timeseriesinsights/v20170228preview:Gen2Environment" }, { type: "azure-native:timeseriesinsights/v20171115:Gen2Environment" }, { type: "azure-native:timeseriesinsights/v20180815preview:Gen2Environment" }, { type: "azure-native:timeseriesinsights/v20200515:Gen2Environment" }, { type: "azure-native:timeseriesinsights/v20210331preview:Gen2Environment" }, { type: "azure-native:timeseriesinsights/v20210630preview:Gen2Environment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Gen2Environment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Gen2Environment resource.
 */
export interface Gen2EnvironmentArgs {
    /**
     * Name of the environment
     */
    environmentName?: pulumi.Input<string>;
    /**
     * The kind of the environment.
     * Expected value is 'Gen2'.
     */
    kind: pulumi.Input<"Gen2">;
    /**
     * The location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The sku determines the type of environment, either Gen1 (S1 or S2) or Gen2 (L1). For Gen1 environments the sku determines the capacity of the environment, the ingress rate, and the billing rate.
     */
    sku: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * The storage configuration provides the connection details that allows the Time Series Insights service to connect to the customer storage account that is used to store the environment's data.
     */
    storageConfiguration: pulumi.Input<types.inputs.Gen2StorageConfigurationInputArgs>;
    /**
     * Key-value pairs of additional properties for the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The list of event properties which will be used to define the environment's time series id.
     */
    timeSeriesIdProperties: pulumi.Input<pulumi.Input<types.inputs.TimeSeriesIdPropertyArgs>[]>;
    /**
     * The warm store configuration provides the details to create a warm store cache that will retain a copy of the environment's data available for faster query.
     */
    warmStoreConfiguration?: pulumi.Input<types.inputs.WarmStoreConfigurationPropertiesArgs>;
}
