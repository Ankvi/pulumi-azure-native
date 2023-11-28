import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * MQ mqttBridgeConnector resource
 * Azure REST API version: 2023-10-04-preview.
 */
export class MqttBridgeConnector extends pulumi.CustomResource {
    /**
     * Get an existing MqttBridgeConnector resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MqttBridgeConnector {
        return new MqttBridgeConnector(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:iotoperationsmq:MqttBridgeConnector';

    /**
     * Returns true if the given object is an instance of MqttBridgeConnector.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MqttBridgeConnector {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MqttBridgeConnector.__pulumiType;
    }

    /**
     * The number of instances to deploy for a bridge rollout.
     */
    public readonly bridgeInstances!: pulumi.Output<number | undefined>;
    /**
     * The client id prefix of the dynamically generated client ids.
     */
    public readonly clientIdPrefix!: pulumi.Output<string | undefined>;
    /**
     * Extended Location
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationPropertyResponse>;
    /**
     * The details of MqttBridge Docker Image.
     */
    public readonly image!: pulumi.Output<types.outputs.ContainerImageResponse>;
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
     * The protocol to use for connecting with Brokers.
     */
    public readonly protocol!: pulumi.Output<string>;
    /**
     * The status of the last operation.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The details for connecting with Remote Broker.
     */
    public readonly remoteBrokerConnection!: pulumi.Output<types.outputs.MqttBridgeRemoteBrokerConnectionSpecResponse>;
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
     * Create a MqttBridgeConnector resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MqttBridgeConnectorArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.extendedLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'extendedLocation'");
            }
            if ((!args || args.image === undefined) && !opts.urn) {
                throw new Error("Missing required property 'image'");
            }
            if ((!args || args.mqName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mqName'");
            }
            if ((!args || args.protocol === undefined) && !opts.urn) {
                throw new Error("Missing required property 'protocol'");
            }
            if ((!args || args.remoteBrokerConnection === undefined) && !opts.urn) {
                throw new Error("Missing required property 'remoteBrokerConnection'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["bridgeInstances"] = args ? args.bridgeInstances : undefined;
            resourceInputs["clientIdPrefix"] = args ? args.clientIdPrefix : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["image"] = args ? args.image : undefined;
            resourceInputs["localBrokerConnection"] = args ? (args.localBrokerConnection ? pulumi.output(args.localBrokerConnection).apply(types.inputs.localBrokerConnectionSpecArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["logLevel"] = args ? args.logLevel : undefined;
            resourceInputs["mqName"] = args ? args.mqName : undefined;
            resourceInputs["mqttBridgeConnectorName"] = args ? args.mqttBridgeConnectorName : undefined;
            resourceInputs["nodeTolerations"] = args ? args.nodeTolerations : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["remoteBrokerConnection"] = args ? (args.remoteBrokerConnection ? pulumi.output(args.remoteBrokerConnection).apply(types.inputs.mqttBridgeRemoteBrokerConnectionSpecArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["bridgeInstances"] = undefined /*out*/;
            resourceInputs["clientIdPrefix"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["image"] = undefined /*out*/;
            resourceInputs["localBrokerConnection"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["logLevel"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nodeTolerations"] = undefined /*out*/;
            resourceInputs["protocol"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["remoteBrokerConnection"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:iotoperationsmq/v20231004preview:MqttBridgeConnector" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(MqttBridgeConnector.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a MqttBridgeConnector resource.
 */
export interface MqttBridgeConnectorArgs {
    /**
     * The number of instances to deploy for a bridge rollout.
     */
    bridgeInstances?: pulumi.Input<number>;
    /**
     * The client id prefix of the dynamically generated client ids.
     */
    clientIdPrefix?: pulumi.Input<string>;
    /**
     * Extended Location
     */
    extendedLocation: pulumi.Input<types.inputs.ExtendedLocationPropertyArgs>;
    /**
     * The details of MqttBridge Docker Image.
     */
    image: pulumi.Input<types.inputs.ContainerImageArgs>;
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
     * Name of MQ mqttBridgeConnector resource
     */
    mqttBridgeConnectorName?: pulumi.Input<string>;
    /**
     * The Node Tolerations for the Bridge Connector pods.
     */
    nodeTolerations?: pulumi.Input<types.inputs.NodeTolerationsArgs>;
    /**
     * The protocol to use for connecting with Brokers.
     */
    protocol: pulumi.Input<string | types.enums.MqttProtocol>;
    /**
     * The details for connecting with Remote Broker.
     */
    remoteBrokerConnection: pulumi.Input<types.inputs.MqttBridgeRemoteBrokerConnectionSpecArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
