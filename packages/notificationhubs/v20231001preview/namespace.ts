import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Notification Hubs Namespace Resource.
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
    public static readonly __pulumiType = 'azure-native:notificationhubs/v20231001preview:Namespace';

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
     * Time when the namespace was created.
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * Gets or sets whether or not the namespace is set as Critical.
     */
    public /*out*/ readonly critical!: pulumi.Output<boolean>;
    /**
     * Deprecated.
     */
    public readonly dataCenter!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets whether or not the namespace is currently enabled.
     */
    public /*out*/ readonly enabled!: pulumi.Output<boolean>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Azure Insights Metrics id.
     */
    public /*out*/ readonly metricId!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Defines values for NamespaceType.
     */
    public readonly namespaceType!: pulumi.Output<string | undefined>;
    /**
     * A collection of network authorization rules.
     */
    public readonly networkAcls!: pulumi.Output<types.outputs.NetworkAclsResponse | undefined>;
    /**
     * Collection of Notification Hub or Notification Hub Namespace PNS credentials.
     */
    public readonly pnsCredentials!: pulumi.Output<types.outputs.PnsCredentialsResponse | undefined>;
    /**
     * Private Endpoint Connections for namespace
     */
    public /*out*/ readonly privateEndpointConnections!: pulumi.Output<types.outputs.PrivateEndpointConnectionResourceResponse[]>;
    /**
     * Defines values for OperationProvisioningState.
     */
    public readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * Type of public network access.
     */
    public readonly publicNetworkAccess!: pulumi.Output<string | undefined>;
    /**
     * Region. The value is always set to the same value as Namespace.Location, so we are deprecating
     * this property.
     */
    public /*out*/ readonly region!: pulumi.Output<string>;
    /**
     * Allowed replication region
     */
    public readonly replicationRegion!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets scaleUnit where the namespace gets created
     */
    public readonly scaleUnit!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets endpoint you can use to perform NotificationHub
     * operations.
     */
    public /*out*/ readonly serviceBusEndpoint!: pulumi.Output<string>;
    /**
     * The Sku description for a namespace
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse>;
    /**
     * Namespace status.
     */
    public readonly status!: pulumi.Output<string | undefined>;
    /**
     * Namespace subscription id.
     */
    public /*out*/ readonly subscriptionId!: pulumi.Output<string>;
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
     * Time when the namespace was updated.
     */
    public /*out*/ readonly updatedAt!: pulumi.Output<string>;
    /**
     * Namespace SKU name.
     */
    public readonly zoneRedundancy!: pulumi.Output<string | undefined>;

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
            if ((!args || args.sku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sku'");
            }
            resourceInputs["dataCenter"] = args ? args.dataCenter : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["namespaceName"] = args ? args.namespaceName : undefined;
            resourceInputs["namespaceType"] = args ? args.namespaceType : undefined;
            resourceInputs["networkAcls"] = args ? args.networkAcls : undefined;
            resourceInputs["pnsCredentials"] = args ? args.pnsCredentials : undefined;
            resourceInputs["provisioningState"] = args ? args.provisioningState : undefined;
            resourceInputs["publicNetworkAccess"] = args ? args.publicNetworkAccess : undefined;
            resourceInputs["replicationRegion"] = args ? args.replicationRegion : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scaleUnit"] = args ? args.scaleUnit : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["zoneRedundancy"] = args ? args.zoneRedundancy : undefined;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["critical"] = undefined /*out*/;
            resourceInputs["enabled"] = undefined /*out*/;
            resourceInputs["metricId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["region"] = undefined /*out*/;
            resourceInputs["serviceBusEndpoint"] = undefined /*out*/;
            resourceInputs["subscriptionId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedAt"] = undefined /*out*/;
        } else {
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["critical"] = undefined /*out*/;
            resourceInputs["dataCenter"] = undefined /*out*/;
            resourceInputs["enabled"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["metricId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["namespaceType"] = undefined /*out*/;
            resourceInputs["networkAcls"] = undefined /*out*/;
            resourceInputs["pnsCredentials"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicNetworkAccess"] = undefined /*out*/;
            resourceInputs["region"] = undefined /*out*/;
            resourceInputs["replicationRegion"] = undefined /*out*/;
            resourceInputs["scaleUnit"] = undefined /*out*/;
            resourceInputs["serviceBusEndpoint"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["subscriptionId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedAt"] = undefined /*out*/;
            resourceInputs["zoneRedundancy"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:notificationhubs:Namespace" }, { type: "azure-native:notificationhubs/v20140901:Namespace" }, { type: "azure-native:notificationhubs/v20160301:Namespace" }, { type: "azure-native:notificationhubs/v20170401:Namespace" }, { type: "azure-native:notificationhubs/v20230101preview:Namespace" }, { type: "azure-native:notificationhubs/v20230901:Namespace" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Namespace.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Namespace resource.
 */
export interface NamespaceArgs {
    /**
     * Deprecated.
     */
    dataCenter?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Namespace name
     */
    namespaceName?: pulumi.Input<string>;
    /**
     * Defines values for NamespaceType.
     */
    namespaceType?: pulumi.Input<string | types.enums.NamespaceType>;
    /**
     * A collection of network authorization rules.
     */
    networkAcls?: pulumi.Input<types.inputs.NetworkAclsArgs>;
    /**
     * Collection of Notification Hub or Notification Hub Namespace PNS credentials.
     */
    pnsCredentials?: pulumi.Input<types.inputs.PnsCredentialsArgs>;
    /**
     * Defines values for OperationProvisioningState.
     */
    provisioningState?: pulumi.Input<string | types.enums.OperationProvisioningState>;
    /**
     * Type of public network access.
     */
    publicNetworkAccess?: pulumi.Input<string | types.enums.PublicNetworkAccess>;
    /**
     * Allowed replication region
     */
    replicationRegion?: pulumi.Input<string | types.enums.ReplicationRegion>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Gets or sets scaleUnit where the namespace gets created
     */
    scaleUnit?: pulumi.Input<string>;
    /**
     * The Sku description for a namespace
     */
    sku: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * Namespace status.
     */
    status?: pulumi.Input<string | types.enums.NamespaceStatus>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Namespace SKU name.
     */
    zoneRedundancy?: pulumi.Input<string | types.enums.ZoneRedundancyPreference>;
}