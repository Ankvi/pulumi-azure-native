import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * EventGrid Domain.
 * Azure REST API version: 2022-06-15. Prior API version in Azure Native 1.x: 2020-06-01.
 *
 * Other available API versions: 2020-04-01-preview, 2023-06-01-preview.
 */
export class Domain extends pulumi.CustomResource {
    /**
     * Get an existing Domain resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Domain {
        return new Domain(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:eventgrid:Domain';

    /**
     * Returns true if the given object is an instance of Domain.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Domain {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Domain.__pulumiType;
    }

    /**
     * This Boolean is used to specify the creation mechanism for 'all' the Event Grid Domain Topics associated with this Event Grid Domain resource.
     * In this context, creation of domain topic can be auto-managed (when true) or self-managed (when false). The default value for this property is true.
     * When this property is null or set to true, Event Grid is responsible of automatically creating the domain topic when the first event subscription is
     * created at the scope of the domain topic. If this property is set to false, then creating the first event subscription will require creating a domain topic
     * by the user. The self-management mode can be used if the user wants full control of when the domain topic is created, while auto-managed mode provides the
     * flexibility to perform less operations and manage fewer resources by the user. Also, note that in auto-managed creation mode, user is allowed to create the
     * domain topic on demand if needed.
     */
    public readonly autoCreateTopicWithFirstSubscription!: pulumi.Output<boolean | undefined>;
    /**
     * This Boolean is used to specify the deletion mechanism for 'all' the Event Grid Domain Topics associated with this Event Grid Domain resource.
     * In this context, deletion of domain topic can be auto-managed (when true) or self-managed (when false). The default value for this property is true.
     * When this property is set to true, Event Grid is responsible of automatically deleting the domain topic when the last event subscription at the scope
     * of the domain topic is deleted. If this property is set to false, then the user needs to manually delete the domain topic when it is no longer needed
     * (e.g., when last event subscription is deleted and the resource needs to be cleaned up). The self-management mode can be used if the user wants full
     * control of when the domain topic needs to be deleted, while auto-managed mode provides the flexibility to perform less operations and manage fewer
     * resources by the user.
     */
    public readonly autoDeleteTopicWithLastSubscription!: pulumi.Output<boolean | undefined>;
    /**
     * Data Residency Boundary of the resource.
     */
    public readonly dataResidencyBoundary!: pulumi.Output<string | undefined>;
    /**
     * This boolean is used to enable or disable local auth. Default value is false. When the property is set to true, only AAD token will be used to authenticate if user is allowed to publish to the domain.
     */
    public readonly disableLocalAuth!: pulumi.Output<boolean | undefined>;
    /**
     * Endpoint for the Event Grid Domain Resource which is used for publishing the events.
     */
    public /*out*/ readonly endpoint!: pulumi.Output<string>;
    /**
     * Identity information for the Event Grid Domain resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.IdentityInfoResponse | undefined>;
    /**
     * This can be used to restrict traffic from specific IPs instead of all IPs. Note: These are considered only if PublicNetworkAccess is enabled.
     */
    public readonly inboundIpRules!: pulumi.Output<types.outputs.InboundIpRuleResponse[] | undefined>;
    /**
     * This determines the format that Event Grid should expect for incoming events published to the Event Grid Domain Resource.
     */
    public readonly inputSchema!: pulumi.Output<string | undefined>;
    /**
     * Information about the InputSchemaMapping which specified the info about mapping event payload.
     */
    public readonly inputSchemaMapping!: pulumi.Output<types.outputs.JsonInputSchemaMappingResponse | undefined>;
    /**
     * Location of the resource.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Metric resource id for the Event Grid Domain Resource.
     */
    public /*out*/ readonly metricResourceId!: pulumi.Output<string>;
    /**
     * Name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * List of private endpoint connections.
     */
    public /*out*/ readonly privateEndpointConnections!: pulumi.Output<types.outputs.PrivateEndpointConnectionResponse[]>;
    /**
     * Provisioning state of the Event Grid Domain Resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * This determines if traffic is allowed over public network. By default it is enabled.
     * You can further restrict to specific IPs by configuring <seealso cref="P:Microsoft.Azure.Events.ResourceProvider.Common.Contracts.DomainProperties.InboundIpRules" />
     */
    public readonly publicNetworkAccess!: pulumi.Output<string | undefined>;
    /**
     * The system metadata relating to the Event Grid Domain resource.
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
     * Create a Domain resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DomainArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["autoCreateTopicWithFirstSubscription"] = (args ? args.autoCreateTopicWithFirstSubscription : undefined) ?? true;
            resourceInputs["autoDeleteTopicWithLastSubscription"] = (args ? args.autoDeleteTopicWithLastSubscription : undefined) ?? true;
            resourceInputs["dataResidencyBoundary"] = args ? args.dataResidencyBoundary : undefined;
            resourceInputs["disableLocalAuth"] = (args ? args.disableLocalAuth : undefined) ?? false;
            resourceInputs["domainName"] = args ? args.domainName : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["inboundIpRules"] = args ? args.inboundIpRules : undefined;
            resourceInputs["inputSchema"] = (args ? args.inputSchema : undefined) ?? "EventGridSchema";
            resourceInputs["inputSchemaMapping"] = args ? args.inputSchemaMapping : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["publicNetworkAccess"] = (args ? args.publicNetworkAccess : undefined) ?? "Enabled";
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["endpoint"] = undefined /*out*/;
            resourceInputs["metricResourceId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["autoCreateTopicWithFirstSubscription"] = undefined /*out*/;
            resourceInputs["autoDeleteTopicWithLastSubscription"] = undefined /*out*/;
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
        const aliasOpts = { aliases: [{ type: "azure-native:eventgrid/v20180915preview:Domain" }, { type: "azure-native:eventgrid/v20190201preview:Domain" }, { type: "azure-native:eventgrid/v20190601:Domain" }, { type: "azure-native:eventgrid/v20200101preview:Domain" }, { type: "azure-native:eventgrid/v20200401preview:Domain" }, { type: "azure-native:eventgrid/v20200601:Domain" }, { type: "azure-native:eventgrid/v20201015preview:Domain" }, { type: "azure-native:eventgrid/v20210601preview:Domain" }, { type: "azure-native:eventgrid/v20211015preview:Domain" }, { type: "azure-native:eventgrid/v20211201:Domain" }, { type: "azure-native:eventgrid/v20220615:Domain" }, { type: "azure-native:eventgrid/v20230601preview:Domain" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Domain.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Domain resource.
 */
export interface DomainArgs {
    /**
     * This Boolean is used to specify the creation mechanism for 'all' the Event Grid Domain Topics associated with this Event Grid Domain resource.
     * In this context, creation of domain topic can be auto-managed (when true) or self-managed (when false). The default value for this property is true.
     * When this property is null or set to true, Event Grid is responsible of automatically creating the domain topic when the first event subscription is
     * created at the scope of the domain topic. If this property is set to false, then creating the first event subscription will require creating a domain topic
     * by the user. The self-management mode can be used if the user wants full control of when the domain topic is created, while auto-managed mode provides the
     * flexibility to perform less operations and manage fewer resources by the user. Also, note that in auto-managed creation mode, user is allowed to create the
     * domain topic on demand if needed.
     */
    autoCreateTopicWithFirstSubscription?: pulumi.Input<boolean>;
    /**
     * This Boolean is used to specify the deletion mechanism for 'all' the Event Grid Domain Topics associated with this Event Grid Domain resource.
     * In this context, deletion of domain topic can be auto-managed (when true) or self-managed (when false). The default value for this property is true.
     * When this property is set to true, Event Grid is responsible of automatically deleting the domain topic when the last event subscription at the scope
     * of the domain topic is deleted. If this property is set to false, then the user needs to manually delete the domain topic when it is no longer needed
     * (e.g., when last event subscription is deleted and the resource needs to be cleaned up). The self-management mode can be used if the user wants full
     * control of when the domain topic needs to be deleted, while auto-managed mode provides the flexibility to perform less operations and manage fewer
     * resources by the user.
     */
    autoDeleteTopicWithLastSubscription?: pulumi.Input<boolean>;
    /**
     * Data Residency Boundary of the resource.
     */
    dataResidencyBoundary?: pulumi.Input<string | types.enums.DataResidencyBoundary>;
    /**
     * This boolean is used to enable or disable local auth. Default value is false. When the property is set to true, only AAD token will be used to authenticate if user is allowed to publish to the domain.
     */
    disableLocalAuth?: pulumi.Input<boolean>;
    /**
     * Name of the domain.
     */
    domainName?: pulumi.Input<string>;
    /**
     * Identity information for the Event Grid Domain resource.
     */
    identity?: pulumi.Input<types.inputs.IdentityInfoArgs>;
    /**
     * This can be used to restrict traffic from specific IPs instead of all IPs. Note: These are considered only if PublicNetworkAccess is enabled.
     */
    inboundIpRules?: pulumi.Input<pulumi.Input<types.inputs.InboundIpRuleArgs>[]>;
    /**
     * This determines the format that Event Grid should expect for incoming events published to the Event Grid Domain Resource.
     */
    inputSchema?: pulumi.Input<string | types.enums.InputSchema>;
    /**
     * Information about the InputSchemaMapping which specified the info about mapping event payload.
     */
    inputSchemaMapping?: pulumi.Input<types.inputs.JsonInputSchemaMappingArgs>;
    /**
     * Location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * This determines if traffic is allowed over public network. By default it is enabled.
     * You can further restrict to specific IPs by configuring <seealso cref="P:Microsoft.Azure.Events.ResourceProvider.Common.Contracts.DomainProperties.InboundIpRules" />
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
}
