import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Namespace resource.
 * Azure REST API version: 2023-06-01-preview.
 *
 * Other available API versions: 2023-12-15-preview.
 */
export class Namespace extends pulumi.CustomResource {
    /**
     * Get an existing Namespace resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Namespace {
        return new Namespace(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:eventgrid:Namespace';

    /**
     * Returns true if the given object is an instance of Namespace.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Namespace {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Namespace.__pulumiType;
    }

    /**
     * Identity information for the Namespace resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.IdentityInfoResponse | undefined>;
    /**
     * This can be used to restrict traffic from specific IPs instead of all IPs. Note: These are considered only if PublicNetworkAccess is enabled.
     */
    public readonly inboundIpRules!: pulumi.Output<types.outputs.InboundIpRuleResponse[] | undefined>;
    /**
     * Allows the user to specify if the service is zone-redundant. This is a required property and user needs to specify this value explicitly.
     * Once specified, this property cannot be updated.
     */
    public readonly isZoneRedundant!: pulumi.Output<boolean | undefined>;
    /**
     * Location of the resource.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Minimum TLS version of the publisher allowed to publish to this namespace. Only TLS version 1.2 is supported.
     */
    public readonly minimumTlsVersionAllowed!: pulumi.Output<string | undefined>;
    /**
     * Name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly privateEndpointConnections!: pulumi.Output<types.outputs.PrivateEndpointConnectionResponse[] | undefined>;
    /**
     * Provisioning state of the namespace resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * This determines if traffic is allowed over public network. By default it is enabled.
     * You can further restrict to specific IPs by configuring <seealso cref="P:Microsoft.Azure.Events.ResourceProvider.Common.Contracts.PubSub.NamespaceProperties.InboundIpRules" />
     */
    public readonly publicNetworkAccess!: pulumi.Output<string | undefined>;
    /**
     * Represents available Sku pricing tiers.
     */
    public readonly sku!: pulumi.Output<types.outputs.NamespaceSkuResponse | undefined>;
    /**
     * The system metadata relating to the namespace resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Tags of the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Topic spaces configuration information for the namespace resource
     */
    public readonly topicSpacesConfiguration!: pulumi.Output<types.outputs.TopicSpacesConfigurationResponse | undefined>;
    /**
     * Topics configuration information for the namespace resource
     */
    public /*out*/ readonly topicsConfiguration!: pulumi.Output<types.outputs.TopicsConfigurationResponse | undefined>;
    /**
     * Type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Namespace resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NamespaceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["inboundIpRules"] = args ? args.inboundIpRules : undefined;
            resourceInputs["isZoneRedundant"] = args ? args.isZoneRedundant : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["minimumTlsVersionAllowed"] = args ? args.minimumTlsVersionAllowed : undefined;
            resourceInputs["namespaceName"] = args ? args.namespaceName : undefined;
            resourceInputs["privateEndpointConnections"] = args ? args.privateEndpointConnections : undefined;
            resourceInputs["publicNetworkAccess"] = args ? args.publicNetworkAccess : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["topicSpacesConfiguration"] = args ? (args.topicSpacesConfiguration ? pulumi.output(args.topicSpacesConfiguration).apply(types.inputs.topicSpacesConfigurationArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["topicsConfiguration"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["inboundIpRules"] = undefined /*out*/;
            resourceInputs["isZoneRedundant"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["minimumTlsVersionAllowed"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicNetworkAccess"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["topicSpacesConfiguration"] = undefined /*out*/;
            resourceInputs["topicsConfiguration"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:eventgrid/v20230601preview:Namespace" }, { type: "azure-native:eventgrid/v20231215preview:Namespace" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Namespace.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Namespace resource.
 */
export interface NamespaceArgs {
    /**
     * Identity information for the Namespace resource.
     */
    identity?: pulumi.Input<types.inputs.IdentityInfoArgs>;
    /**
     * This can be used to restrict traffic from specific IPs instead of all IPs. Note: These are considered only if PublicNetworkAccess is enabled.
     */
    inboundIpRules?: pulumi.Input<pulumi.Input<types.inputs.InboundIpRuleArgs>[]>;
    /**
     * Allows the user to specify if the service is zone-redundant. This is a required property and user needs to specify this value explicitly.
     * Once specified, this property cannot be updated.
     */
    isZoneRedundant?: pulumi.Input<boolean>;
    /**
     * Location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * Minimum TLS version of the publisher allowed to publish to this namespace. Only TLS version 1.2 is supported.
     */
    minimumTlsVersionAllowed?: pulumi.Input<string | types.enums.TlsVersion>;
    /**
     * Name of the namespace.
     */
    namespaceName?: pulumi.Input<string>;
    privateEndpointConnections?: pulumi.Input<pulumi.Input<types.inputs.PrivateEndpointConnectionArgs>[]>;
    /**
     * This determines if traffic is allowed over public network. By default it is enabled.
     * You can further restrict to specific IPs by configuring <seealso cref="P:Microsoft.Azure.Events.ResourceProvider.Common.Contracts.PubSub.NamespaceProperties.InboundIpRules" />
     */
    publicNetworkAccess?: pulumi.Input<string | types.enums.PublicNetworkAccess>;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Represents available Sku pricing tiers.
     */
    sku?: pulumi.Input<types.inputs.NamespaceSkuArgs>;
    /**
     * Tags of the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Topic spaces configuration information for the namespace resource
     */
    topicSpacesConfiguration?: pulumi.Input<types.inputs.TopicSpacesConfigurationArgs>;
}