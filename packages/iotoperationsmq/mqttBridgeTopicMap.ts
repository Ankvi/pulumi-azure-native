import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * MQ mqttBridgeTopicMap resource
 *
 * Uses Azure REST API version 2023-10-04-preview. In version 2.x of the Azure Native provider, it used API version 2023-10-04-preview.
 */
export class MqttBridgeTopicMap extends pulumi.CustomResource {
    /**
     * Get an existing MqttBridgeTopicMap resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MqttBridgeTopicMap {
        return new MqttBridgeTopicMap(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:iotoperationsmq:MqttBridgeTopicMap';

    /**
     * Returns true if the given object is an instance of MqttBridgeTopicMap.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MqttBridgeTopicMap {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MqttBridgeTopicMap.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Extended Location
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationPropertyResponse>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The MqttBridgeConnector CRD it refers to.
     */
    public readonly mqttBridgeConnectorRef!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The status of the last operation.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The route details for MqttBridge connector.
     */
    public readonly routes!: pulumi.Output<types.outputs.MqttBridgeRoutesResponse[] | undefined>;
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
     * Create a MqttBridgeTopicMap resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MqttBridgeTopicMapArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.extendedLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'extendedLocation'");
            }
            if ((!args || args.mqName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mqName'");
            }
            if ((!args || args.mqttBridgeConnectorName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mqttBridgeConnectorName'");
            }
            if ((!args || args.mqttBridgeConnectorRef === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mqttBridgeConnectorRef'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["mqName"] = args ? args.mqName : undefined;
            resourceInputs["mqttBridgeConnectorName"] = args ? args.mqttBridgeConnectorName : undefined;
            resourceInputs["mqttBridgeConnectorRef"] = args ? args.mqttBridgeConnectorRef : undefined;
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
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["mqttBridgeConnectorRef"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["routes"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:iotoperationsmq/v20231004preview:MqttBridgeTopicMap" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(MqttBridgeTopicMap.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a MqttBridgeTopicMap resource.
 */
export interface MqttBridgeTopicMapArgs {
    /**
     * Extended Location
     */
    extendedLocation: pulumi.Input<types.inputs.ExtendedLocationPropertyArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Name of MQ resource
     */
    mqName: pulumi.Input<string>;
    /**
     * Name of MQ mqttBridgeConnector resource
     */
    mqttBridgeConnectorName: pulumi.Input<string>;
    /**
     * The MqttBridgeConnector CRD it refers to.
     */
    mqttBridgeConnectorRef: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The route details for MqttBridge connector.
     */
    routes?: pulumi.Input<pulumi.Input<types.inputs.MqttBridgeRoutesArgs>[]>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of MQ mqttBridgeTopicMap resource
     */
    topicMapName?: pulumi.Input<string>;
}