import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * NetworkVirtualApplianceConnection resource.
 *
 * Uses Azure REST API version 2023-06-01.
 *
 * Other available API versions: 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
 */
export class NetworkVirtualApplianceConnection extends pulumi.CustomResource {
    /**
     * Get an existing NetworkVirtualApplianceConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NetworkVirtualApplianceConnection {
        return new NetworkVirtualApplianceConnection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:NetworkVirtualApplianceConnection';

    /**
     * Returns true if the given object is an instance of NetworkVirtualApplianceConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkVirtualApplianceConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkVirtualApplianceConnection.__pulumiType;
    }

    /**
     * Network Virtual Appliance ASN.
     */
    public readonly asn!: pulumi.Output<number | undefined>;
    /**
     * List of bgpPeerAddresses for the NVA instances
     */
    public readonly bgpPeerAddress!: pulumi.Output<string[] | undefined>;
    /**
     * Enable internet security.
     */
    public readonly enableInternetSecurity!: pulumi.Output<boolean | undefined>;
    /**
     * The name of the resource.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of the NetworkVirtualApplianceConnection resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The Routing Configuration indicating the associated and propagated route tables on this connection.
     */
    public readonly routingConfiguration!: pulumi.Output<types.outputs.RoutingConfigurationResponse | undefined>;
    /**
     * Unique identifier for the connection.
     */
    public readonly tunnelIdentifier!: pulumi.Output<number | undefined>;

    /**
     * Create a NetworkVirtualApplianceConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkVirtualApplianceConnectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.networkVirtualApplianceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkVirtualApplianceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["asn"] = args ? args.asn : undefined;
            resourceInputs["bgpPeerAddress"] = args ? args.bgpPeerAddress : undefined;
            resourceInputs["connectionName"] = args ? args.connectionName : undefined;
            resourceInputs["enableInternetSecurity"] = args ? args.enableInternetSecurity : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["networkVirtualApplianceName"] = args ? args.networkVirtualApplianceName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["routingConfiguration"] = args ? args.routingConfiguration : undefined;
            resourceInputs["tunnelIdentifier"] = args ? args.tunnelIdentifier : undefined;
            resourceInputs["provisioningState"] = undefined /*out*/;
        } else {
            resourceInputs["asn"] = undefined /*out*/;
            resourceInputs["bgpPeerAddress"] = undefined /*out*/;
            resourceInputs["enableInternetSecurity"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["routingConfiguration"] = undefined /*out*/;
            resourceInputs["tunnelIdentifier"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20230601:NetworkVirtualApplianceConnection" }, { type: "azure-native:network/v20230901:NetworkVirtualApplianceConnection" }, { type: "azure-native:network/v20231101:NetworkVirtualApplianceConnection" }, { type: "azure-native:network/v20240101:NetworkVirtualApplianceConnection" }, { type: "azure-native:network/v20240301:NetworkVirtualApplianceConnection" }, { type: "azure-native:network/v20240501:NetworkVirtualApplianceConnection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NetworkVirtualApplianceConnection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NetworkVirtualApplianceConnection resource.
 */
export interface NetworkVirtualApplianceConnectionArgs {
    /**
     * Network Virtual Appliance ASN.
     */
    asn?: pulumi.Input<number>;
    /**
     * List of bgpPeerAddresses for the NVA instances
     */
    bgpPeerAddress?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the NVA connection.
     */
    connectionName?: pulumi.Input<string>;
    /**
     * Enable internet security.
     */
    enableInternetSecurity?: pulumi.Input<boolean>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Network Virtual Appliance.
     */
    networkVirtualApplianceName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Routing Configuration indicating the associated and propagated route tables on this connection.
     */
    routingConfiguration?: pulumi.Input<types.inputs.RoutingConfigurationArgs>;
    /**
     * Unique identifier for the connection.
     */
    tunnelIdentifier?: pulumi.Input<number>;
}