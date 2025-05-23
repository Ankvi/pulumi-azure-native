import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * MQ kafkaConnector resource
 *
 * Uses Azure REST API version 2023-10-04-preview. In version 2.x of the Azure Native provider, it used API version 2023-10-04-preview.
 */
export class KafkaConnector extends pulumi.CustomResource {
    /**
     * Get an existing KafkaConnector resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): KafkaConnector {
        return new KafkaConnector(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:iotoperationsmq:KafkaConnector';

    /**
     * Returns true if the given object is an instance of KafkaConnector.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KafkaConnector {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KafkaConnector.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The client id prefix of the dynamically generated client ids.
     */
    public readonly clientIdPrefix!: pulumi.Output<string | undefined>;
    /**
     * Extended Location
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationPropertyResponse>;
    /**
     * The details of KafkaConnector Docker Image.
     */
    public readonly image!: pulumi.Output<types.outputs.ContainerImageResponse | undefined>;
    /**
     * The number of KafkaConnector pods to spin up.
     */
    public readonly instances!: pulumi.Output<number | undefined>;
    /**
     * The details for connecting with Remote Kafka Broker.
     */
    public readonly kafkaConnection!: pulumi.Output<types.outputs.KafkaRemoteBrokerConnectionSpecResponse>;
    /**
     * The details for connecting with Local Broker.
     */
    public readonly localBrokerConnection!: pulumi.Output<types.outputs.LocalBrokerConnectionSpecResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The log level of the Bridge Connector instances.
     */
    public readonly logLevel!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The Node Tolerations for the Bridge Connector pods.
     */
    public readonly nodeTolerations!: pulumi.Output<types.outputs.NodeTolerationsResponse | undefined>;
    /**
     * The status of the last operation.
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
     * Create a KafkaConnector resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KafkaConnectorArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.extendedLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'extendedLocation'");
            }
            if ((!args || args.kafkaConnection === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kafkaConnection'");
            }
            if ((!args || args.mqName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mqName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["clientIdPrefix"] = args ? args.clientIdPrefix : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["image"] = args ? args.image : undefined;
            resourceInputs["instances"] = args ? args.instances : undefined;
            resourceInputs["kafkaConnection"] = args ? args.kafkaConnection : undefined;
            resourceInputs["kafkaConnectorName"] = args ? args.kafkaConnectorName : undefined;
            resourceInputs["localBrokerConnection"] = args ? (args.localBrokerConnection ? pulumi.output(args.localBrokerConnection).apply(types.inputs.localBrokerConnectionSpecArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["logLevel"] = (args ? args.logLevel : undefined) ?? "info";
            resourceInputs["mqName"] = args ? args.mqName : undefined;
            resourceInputs["nodeTolerations"] = args ? args.nodeTolerations : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["clientIdPrefix"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["image"] = undefined /*out*/;
            resourceInputs["instances"] = undefined /*out*/;
            resourceInputs["kafkaConnection"] = undefined /*out*/;
            resourceInputs["localBrokerConnection"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["logLevel"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nodeTolerations"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:iotoperationsmq/v20231004preview:KafkaConnector" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(KafkaConnector.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a KafkaConnector resource.
 */
export interface KafkaConnectorArgs {
    /**
     * The client id prefix of the dynamically generated client ids.
     */
    clientIdPrefix?: pulumi.Input<string>;
    /**
     * Extended Location
     */
    extendedLocation: pulumi.Input<types.inputs.ExtendedLocationPropertyArgs>;
    /**
     * The details of KafkaConnector Docker Image.
     */
    image?: pulumi.Input<types.inputs.ContainerImageArgs>;
    /**
     * The number of KafkaConnector pods to spin up.
     */
    instances?: pulumi.Input<number>;
    /**
     * The details for connecting with Remote Kafka Broker.
     */
    kafkaConnection: pulumi.Input<types.inputs.KafkaRemoteBrokerConnectionSpecArgs>;
    /**
     * Name of MQ kafkaConnector resource
     */
    kafkaConnectorName?: pulumi.Input<string>;
    /**
     * The details for connecting with Local Broker.
     */
    localBrokerConnection?: pulumi.Input<types.inputs.LocalBrokerConnectionSpecArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The log level of the Bridge Connector instances.
     */
    logLevel?: pulumi.Input<string>;
    /**
     * Name of MQ resource
     */
    mqName: pulumi.Input<string>;
    /**
     * The Node Tolerations for the Bridge Connector pods.
     */
    nodeTolerations?: pulumi.Input<types.inputs.NodeTolerationsArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}