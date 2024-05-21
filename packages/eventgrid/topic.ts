import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * EventGrid Topic
 * Azure REST API version: 2022-06-15. Prior API version in Azure Native 1.x: 2020-06-01.
 *
 * Other available API versions: 2020-04-01-preview, 2023-06-01-preview, 2023-12-15-preview, 2024-06-01-preview.
 */
export class Topic extends pulumi.CustomResource {
    /**
     * Get an existing Topic resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Topic {
        return new Topic(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:eventgrid:Topic';

    /**
     * Returns true if the given object is an instance of Topic.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Topic {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Topic.__pulumiType;
    }

    /**
     * Data Residency Boundary of the resource.
     */
    public readonly dataResidencyBoundary!: pulumi.Output<string | undefined>;
    /**
     * This boolean is used to enable or disable local auth. Default value is false. When the property is set to true, only AAD token will be used to authenticate if user is allowed to publish to the topic.
     */
    public readonly disableLocalAuth!: pulumi.Output<boolean | undefined>;
    /**
     * Endpoint for the topic.
     */
    public /*out*/ readonly endpoint!: pulumi.Output<string>;
    /**
     * Identity information for the resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.IdentityInfoResponse | undefined>;
    /**
     * This can be used to restrict traffic from specific IPs instead of all IPs. Note: These are considered only if PublicNetworkAccess is enabled.
     */
    public readonly inboundIpRules!: pulumi.Output<types.outputs.InboundIpRuleResponse[] | undefined>;
    /**
     * This determines the format that Event Grid should expect for incoming events published to the topic.
     */
    public readonly inputSchema!: pulumi.Output<string | undefined>;
    /**
     * This enables publishing using custom event schemas. An InputSchemaMapping can be specified to map various properties of a source schema to various required properties of the EventGridEvent schema.
     */
    public readonly inputSchemaMapping!: pulumi.Output<types.outputs.JsonInputSchemaMappingResponse | undefined>;
    /**
     * Location of the resource.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Metric resource id for the topic.
     */
    public /*out*/ readonly metricResourceId!: pulumi.Output<string>;
    /**
     * Name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public /*out*/ readonly privateEndpointConnections!: pulumi.Output<types.outputs.PrivateEndpointConnectionResponse[]>;
    /**
     * Provisioning state of the topic.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * This determines if traffic is allowed over public network. By default it is enabled. 
     * You can further restrict to specific IPs by configuring <seealso cref="P:Microsoft.Azure.Events.ResourceProvider.Common.Contracts.TopicProperties.InboundIpRules" />
     */
    public readonly publicNetworkAccess!: pulumi.Output<string | undefined>;
    /**
     * The system metadata relating to Topic resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Tags of the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Topic resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TopicArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["dataResidencyBoundary"] = args ? args.dataResidencyBoundary : undefined;
            resourceInputs["disableLocalAuth"] = (args ? args.disableLocalAuth : undefined) ?? false;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["inboundIpRules"] = args ? args.inboundIpRules : undefined;
            resourceInputs["inputSchema"] = (args ? args.inputSchema : undefined) ?? "EventGridSchema";
            resourceInputs["inputSchemaMapping"] = args ? args.inputSchemaMapping : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["publicNetworkAccess"] = (args ? args.publicNetworkAccess : undefined) ?? "Enabled";
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["topicName"] = args ? args.topicName : undefined;
            resourceInputs["endpoint"] = undefined /*out*/;
            resourceInputs["metricResourceId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["dataResidencyBoundary"] = undefined /*out*/;
            resourceInputs["disableLocalAuth"] = undefined /*out*/;
            resourceInputs["endpoint"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["inboundIpRules"] = undefined /*out*/;
            resourceInputs["inputSchema"] = undefined /*out*/;
            resourceInputs["inputSchemaMapping"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["metricResourceId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicNetworkAccess"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:eventgrid/v20170615preview:Topic" }, { type: "azure-native:eventgrid/v20170915preview:Topic" }, { type: "azure-native:eventgrid/v20180101:Topic" }, { type: "azure-native:eventgrid/v20180501preview:Topic" }, { type: "azure-native:eventgrid/v20180915preview:Topic" }, { type: "azure-native:eventgrid/v20190101:Topic" }, { type: "azure-native:eventgrid/v20190201preview:Topic" }, { type: "azure-native:eventgrid/v20190601:Topic" }, { type: "azure-native:eventgrid/v20200101preview:Topic" }, { type: "azure-native:eventgrid/v20200401preview:Topic" }, { type: "azure-native:eventgrid/v20200601:Topic" }, { type: "azure-native:eventgrid/v20201015preview:Topic" }, { type: "azure-native:eventgrid/v20210601preview:Topic" }, { type: "azure-native:eventgrid/v20211015preview:Topic" }, { type: "azure-native:eventgrid/v20211201:Topic" }, { type: "azure-native:eventgrid/v20220615:Topic" }, { type: "azure-native:eventgrid/v20230601preview:Topic" }, { type: "azure-native:eventgrid/v20231215preview:Topic" }, { type: "azure-native:eventgrid/v20240601preview:Topic" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Topic.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Topic resource.
 */
export interface TopicArgs {
    /**
     * Data Residency Boundary of the resource.
     */
    dataResidencyBoundary?: pulumi.Input<string | types.enums.DataResidencyBoundary>;
    /**
     * This boolean is used to enable or disable local auth. Default value is false. When the property is set to true, only AAD token will be used to authenticate if user is allowed to publish to the topic.
     */
    disableLocalAuth?: pulumi.Input<boolean>;
    /**
     * Identity information for the resource.
     */
    identity?: pulumi.Input<types.inputs.IdentityInfoArgs>;
    /**
     * This can be used to restrict traffic from specific IPs instead of all IPs. Note: These are considered only if PublicNetworkAccess is enabled.
     */
    inboundIpRules?: pulumi.Input<pulumi.Input<types.inputs.InboundIpRuleArgs>[]>;
    /**
     * This determines the format that Event Grid should expect for incoming events published to the topic.
     */
    inputSchema?: pulumi.Input<string | types.enums.InputSchema>;
    /**
     * This enables publishing using custom event schemas. An InputSchemaMapping can be specified to map various properties of a source schema to various required properties of the EventGridEvent schema.
     */
    inputSchemaMapping?: pulumi.Input<types.inputs.JsonInputSchemaMappingArgs>;
    /**
     * Location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * This determines if traffic is allowed over public network. By default it is enabled. 
     * You can further restrict to specific IPs by configuring <seealso cref="P:Microsoft.Azure.Events.ResourceProvider.Common.Contracts.TopicProperties.InboundIpRules" />
     */
    publicNetworkAccess?: pulumi.Input<string | types.enums.PublicNetworkAccess>;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Tags of the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of the topic.
     */
    topicName?: pulumi.Input<string>;
}