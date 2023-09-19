import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Description of a namespace resource.
 * Azure REST API version: 2022-01-01-preview. Prior API version in Azure Native 1.x: 2017-04-01
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
    public static readonly __pulumiType = 'azure-native:servicebus:Namespace';

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
     * Alternate name for namespace
     */
    public readonly alternateName!: pulumi.Output<string | undefined>;
    /**
     * The time the namespace was created
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * This property disables SAS authentication for the Service Bus namespace.
     */
    public readonly disableLocalAuth!: pulumi.Output<boolean | undefined>;
    /**
     * Properties of BYOK Encryption description
     */
    public readonly encryption!: pulumi.Output<types.outputs.EncryptionResponse | undefined>;
    /**
     * Properties of BYOK Identity description
     */
    public readonly identity!: pulumi.Output<types.outputs.IdentityResponse | undefined>;
    /**
     * The Geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Identifier for Azure Insights metrics
     */
    public /*out*/ readonly metricId!: pulumi.Output<string>;
    /**
     * The minimum TLS version for the cluster to support, e.g. '1.2'
     */
    public readonly minimumTlsVersion!: pulumi.Output<string | undefined>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * List of private endpoint connections.
     */
    public readonly privateEndpointConnections!: pulumi.Output<types.outputs.PrivateEndpointConnectionResponse[] | undefined>;
    /**
     * Provisioning state of the namespace.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * This determines if traffic is allowed over public network. By default it is enabled.
     */
    public readonly publicNetworkAccess!: pulumi.Output<string | undefined>;
    /**
     * Endpoint you can use to perform Service Bus operations.
     */
    public /*out*/ readonly serviceBusEndpoint!: pulumi.Output<string>;
    /**
     * Properties of SKU
     */
    public readonly sku!: pulumi.Output<types.outputs.SBSkuResponse | undefined>;
    /**
     * Status of the namespace.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * The system meta data relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The time the namespace was updated.
     */
    public /*out*/ readonly updatedAt!: pulumi.Output<string>;
    /**
     * Enabling this property creates a Premium Service Bus Namespace in regions supported availability zones.
     */
    public readonly zoneRedundant!: pulumi.Output<boolean | undefined>;

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
            resourceInputs["alternateName"] = args ? args.alternateName : undefined;
            resourceInputs["disableLocalAuth"] = args ? args.disableLocalAuth : undefined;
            resourceInputs["encryption"] = args ? (args.encryption ? pulumi.output(args.encryption).apply(types.inputs.encryptionArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["minimumTlsVersion"] = args ? args.minimumTlsVersion : undefined;
            resourceInputs["namespaceName"] = args ? args.namespaceName : undefined;
            resourceInputs["privateEndpointConnections"] = args ? args.privateEndpointConnections : undefined;
            resourceInputs["publicNetworkAccess"] = (args ? args.publicNetworkAccess : undefined) ?? "Enabled";
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["zoneRedundant"] = args ? args.zoneRedundant : undefined;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["metricId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["serviceBusEndpoint"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedAt"] = undefined /*out*/;
        } else {
            resourceInputs["alternateName"] = undefined /*out*/;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["disableLocalAuth"] = undefined /*out*/;
            resourceInputs["encryption"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["metricId"] = undefined /*out*/;
            resourceInputs["minimumTlsVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicNetworkAccess"] = undefined /*out*/;
            resourceInputs["serviceBusEndpoint"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedAt"] = undefined /*out*/;
            resourceInputs["zoneRedundant"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:servicebus/v20140901:Namespace" }, { type: "azure-native:servicebus/v20150801:Namespace" }, { type: "azure-native:servicebus/v20170401:Namespace" }, { type: "azure-native:servicebus/v20180101preview:Namespace" }, { type: "azure-native:servicebus/v20210101preview:Namespace" }, { type: "azure-native:servicebus/v20210601preview:Namespace" }, { type: "azure-native:servicebus/v20211101:Namespace" }, { type: "azure-native:servicebus/v20220101preview:Namespace" }, { type: "azure-native:servicebus/v20221001preview:Namespace" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Namespace.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Namespace resource.
 */
export interface NamespaceArgs {
    /**
     * Alternate name for namespace
     */
    alternateName?: pulumi.Input<string>;
    /**
     * This property disables SAS authentication for the Service Bus namespace.
     */
    disableLocalAuth?: pulumi.Input<boolean>;
    /**
     * Properties of BYOK Encryption description
     */
    encryption?: pulumi.Input<types.inputs.EncryptionArgs>;
    /**
     * Properties of BYOK Identity description
     */
    identity?: pulumi.Input<types.inputs.IdentityArgs>;
    /**
     * The Geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The minimum TLS version for the cluster to support, e.g. '1.2'
     */
    minimumTlsVersion?: pulumi.Input<string | types.enums.TlsVersion>;
    /**
     * The namespace name.
     */
    namespaceName?: pulumi.Input<string>;
    /**
     * List of private endpoint connections.
     * These are also available as standalone resources. Do not mix inline and standalone resource as they will conflict with each other, leading to resources deletion.
     */
    privateEndpointConnections?: pulumi.Input<pulumi.Input<types.inputs.PrivateEndpointConnectionArgs>[]>;
    /**
     * This determines if traffic is allowed over public network. By default it is enabled.
     */
    publicNetworkAccess?: pulumi.Input<string | types.enums.PublicNetworkAccess>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Properties of SKU
     */
    sku?: pulumi.Input<types.inputs.SBSkuArgs>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Enabling this property creates a Premium Service Bus Namespace in regions supported availability zones.
     */
    zoneRedundant?: pulumi.Input<boolean>;
}
