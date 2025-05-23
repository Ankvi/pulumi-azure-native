import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * MQ kafkaConnector/topicMap resource
 *
 * Uses Azure REST API version 2023-10-04-preview. In version 2.x of the Azure Native provider, it used API version 2023-10-04-preview.
 */
export class KafkaConnectorTopicMap extends pulumi.CustomResource {
    /**
     * Get an existing KafkaConnectorTopicMap resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): KafkaConnectorTopicMap {
        return new KafkaConnectorTopicMap(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:iotoperationsmq:KafkaConnectorTopicMap';

    /**
     * Returns true if the given object is an instance of KafkaConnectorTopicMap.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KafkaConnectorTopicMap {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KafkaConnectorTopicMap.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The batching settings for kafka messages.
     */
    public readonly batching!: pulumi.Output<types.outputs.KafkaTopicMapBatchingResponse | undefined>;
    /**
     * The compression to use for kafka messages.
     */
    public readonly compression!: pulumi.Output<string | undefined>;
    /**
     * The flag to copy Mqtt properties.
     */
    public readonly copyMqttProperties!: pulumi.Output<string | undefined>;
    /**
     * Extended Location
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationPropertyResponse>;
    /**
     * The kafkaConnector CRD it refers to.
     */
    public readonly kafkaConnectorRef!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The partition to use for Kafka.
     */
    public readonly partitionKeyProperty!: pulumi.Output<string | undefined>;
    /**
     * The partition strategy to use for Kafka.
     */
    public readonly partitionStrategy!: pulumi.Output<string | undefined>;
    /**
     * The status of the last operation.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The route details for Kafka connector.
     */
    public readonly routes!: pulumi.Output<types.outputs.KafkaRoutesResponse[]>;
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
     * Create a KafkaConnectorTopicMap resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KafkaConnectorTopicMapArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.extendedLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'extendedLocation'");
            }
            if ((!args || args.kafkaConnectorName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kafkaConnectorName'");
            }
            if ((!args || args.kafkaConnectorRef === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kafkaConnectorRef'");
            }
            if ((!args || args.mqName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mqName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.routes === undefined) && !opts.urn) {
                throw new Error("Missing required property 'routes'");
            }
            resourceInputs["batching"] = args ? (args.batching ? pulumi.output(args.batching).apply(types.inputs.kafkaTopicMapBatchingArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["compression"] = (args ? args.compression : undefined) ?? "none";
            resourceInputs["copyMqttProperties"] = args ? args.copyMqttProperties : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["kafkaConnectorName"] = args ? args.kafkaConnectorName : undefined;
            resourceInputs["kafkaConnectorRef"] = args ? args.kafkaConnectorRef : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["mqName"] = args ? args.mqName : undefined;
            resourceInputs["partitionKeyProperty"] = args ? args.partitionKeyProperty : undefined;
            resourceInputs["partitionStrategy"] = (args ? args.partitionStrategy : undefined) ?? "default";
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["routes"] = args ? args.routes : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["topicMapName"] = args ? args.topicMapName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["batching"] = undefined /*out*/;
            resourceInputs["compression"] = undefined /*out*/;
            resourceInputs["copyMqttProperties"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["kafkaConnectorRef"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["partitionKeyProperty"] = undefined /*out*/;
            resourceInputs["partitionStrategy"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["routes"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:iotoperationsmq/v20231004preview:KafkaConnectorTopicMap" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(KafkaConnectorTopicMap.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a KafkaConnectorTopicMap resource.
 */
export interface KafkaConnectorTopicMapArgs {
    /**
     * The batching settings for kafka messages.
     */
    batching?: pulumi.Input<types.inputs.KafkaTopicMapBatchingArgs>;
    /**
     * The compression to use for kafka messages.
     */
    compression?: pulumi.Input<string | types.enums.KafkaMessageCompressionType>;
    /**
     * The flag to copy Mqtt properties.
     */
    copyMqttProperties?: pulumi.Input<string>;
    /**
     * Extended Location
     */
    extendedLocation: pulumi.Input<types.inputs.ExtendedLocationPropertyArgs>;
    /**
     * Name of MQ kafkaConnector resource
     */
    kafkaConnectorName: pulumi.Input<string>;
    /**
     * The kafkaConnector CRD it refers to.
     */
    kafkaConnectorRef: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Name of MQ resource
     */
    mqName: pulumi.Input<string>;
    /**
     * The partition to use for Kafka.
     */
    partitionKeyProperty?: pulumi.Input<string>;
    /**
     * The partition strategy to use for Kafka.
     */
    partitionStrategy?: pulumi.Input<string | types.enums.KafkaPartitionStrategy>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The route details for Kafka connector.
     */
    routes: pulumi.Input<pulumi.Input<types.inputs.KafkaRoutesArgs>[]>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of MQ kafka/topicMap resource
     */
    topicMapName?: pulumi.Input<string>;
}