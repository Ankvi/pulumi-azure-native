import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Express Route Circuit Connection in an ExpressRouteCircuitPeering resource.
 */
export class ExpressRouteCircuitConnection extends pulumi.CustomResource {
    /**
     * Get an existing ExpressRouteCircuitConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ExpressRouteCircuitConnection {
        return new ExpressRouteCircuitConnection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20230601:ExpressRouteCircuitConnection';

    /**
     * Returns true if the given object is an instance of ExpressRouteCircuitConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ExpressRouteCircuitConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ExpressRouteCircuitConnection.__pulumiType;
    }

    /**
     * /29 IP address space to carve out Customer addresses for tunnels.
     */
    public readonly addressPrefix!: pulumi.Output<string | undefined>;
    /**
     * The authorization key.
     */
    public readonly authorizationKey!: pulumi.Output<string | undefined>;
    /**
     * Express Route Circuit connection state.
     */
    public /*out*/ readonly circuitConnectionStatus!: pulumi.Output<string>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Reference to Express Route Circuit Private Peering Resource of the circuit initiating connection.
     */
    public readonly expressRouteCircuitPeering!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;
    /**
     * IPv6 Address PrefixProperties of the express route circuit connection.
     */
    public readonly ipv6CircuitConnectionConfig!: pulumi.Output<types.outputs.Ipv6CircuitConnectionConfigResponse | undefined>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * Reference to Express Route Circuit Private Peering Resource of the peered circuit.
     */
    public readonly peerExpressRouteCircuitPeering!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;
    /**
     * The provisioning state of the express route circuit connection resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ExpressRouteCircuitConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ExpressRouteCircuitConnectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.circuitName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'circuitName'");
            }
            if ((!args || args.peeringName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'peeringName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["addressPrefix"] = args ? args.addressPrefix : undefined;
            resourceInputs["authorizationKey"] = args ? args.authorizationKey : undefined;
            resourceInputs["circuitName"] = args ? args.circuitName : undefined;
            resourceInputs["connectionName"] = args ? args.connectionName : undefined;
            resourceInputs["expressRouteCircuitPeering"] = args ? args.expressRouteCircuitPeering : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["ipv6CircuitConnectionConfig"] = args ? args.ipv6CircuitConnectionConfig : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["peerExpressRouteCircuitPeering"] = args ? args.peerExpressRouteCircuitPeering : undefined;
            resourceInputs["peeringName"] = args ? args.peeringName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["circuitConnectionStatus"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["addressPrefix"] = undefined /*out*/;
            resourceInputs["authorizationKey"] = undefined /*out*/;
            resourceInputs["circuitConnectionStatus"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["expressRouteCircuitPeering"] = undefined /*out*/;
            resourceInputs["ipv6CircuitConnectionConfig"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["peerExpressRouteCircuitPeering"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:ExpressRouteCircuitConnection" }, { type: "azure-native:network/v20180201:ExpressRouteCircuitConnection" }, { type: "azure-native:network/v20180401:ExpressRouteCircuitConnection" }, { type: "azure-native:network/v20180601:ExpressRouteCircuitConnection" }, { type: "azure-native:network/v20180701:ExpressRouteCircuitConnection" }, { type: "azure-native:network/v20180801:ExpressRouteCircuitConnection" }, { type: "azure-native:network/v20181001:ExpressRouteCircuitConnection" }, { type: "azure-native:network/v20181101:ExpressRouteCircuitConnection" }, { type: "azure-native:network/v20181201:ExpressRouteCircuitConnection" }, { type: "azure-native:network/v20190201:ExpressRouteCircuitConnection" }, { type: "azure-native:network/v20190401:ExpressRouteCircuitConnection" }, { type: "azure-native:network/v20190601:ExpressRouteCircuitConnection" }, { type: "azure-native:network/v20190701:ExpressRouteCircuitConnection" }, { type: "azure-native:network/v20190801:ExpressRouteCircuitConnection" }, { type: "azure-native:network/v20190901:ExpressRouteCircuitConnection" }, { type: "azure-native:network/v20191101:ExpressRouteCircuitConnection" }, { type: "azure-native:network/v20191201:ExpressRouteCircuitConnection" }, { type: "azure-native:network/v20200301:ExpressRouteCircuitConnection" }, { type: "azure-native:network/v20200401:ExpressRouteCircuitConnection" }, { type: "azure-native:network/v20200501:ExpressRouteCircuitConnection" }, { type: "azure-native:network/v20200601:ExpressRouteCircuitConnection" }, { type: "azure-native:network/v20200701:ExpressRouteCircuitConnection" }, { type: "azure-native:network/v20200801:ExpressRouteCircuitConnection" }, { type: "azure-native:network/v20201101:ExpressRouteCircuitConnection" }, { type: "azure-native:network/v20210201:ExpressRouteCircuitConnection" }, { type: "azure-native:network/v20210301:ExpressRouteCircuitConnection" }, { type: "azure-native:network/v20210501:ExpressRouteCircuitConnection" }, { type: "azure-native:network/v20210801:ExpressRouteCircuitConnection" }, { type: "azure-native:network/v20220101:ExpressRouteCircuitConnection" }, { type: "azure-native:network/v20220501:ExpressRouteCircuitConnection" }, { type: "azure-native:network/v20220701:ExpressRouteCircuitConnection" }, { type: "azure-native:network/v20220901:ExpressRouteCircuitConnection" }, { type: "azure-native:network/v20221101:ExpressRouteCircuitConnection" }, { type: "azure-native:network/v20230201:ExpressRouteCircuitConnection" }, { type: "azure-native:network/v20230401:ExpressRouteCircuitConnection" }, { type: "azure-native:network/v20230501:ExpressRouteCircuitConnection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ExpressRouteCircuitConnection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ExpressRouteCircuitConnection resource.
 */
export interface ExpressRouteCircuitConnectionArgs {
    /**
     * /29 IP address space to carve out Customer addresses for tunnels.
     */
    addressPrefix?: pulumi.Input<string>;
    /**
     * The authorization key.
     */
    authorizationKey?: pulumi.Input<string>;
    /**
     * The name of the express route circuit.
     */
    circuitName: pulumi.Input<string>;
    /**
     * The name of the express route circuit connection.
     */
    connectionName?: pulumi.Input<string>;
    /**
     * Reference to Express Route Circuit Private Peering Resource of the circuit initiating connection.
     */
    expressRouteCircuitPeering?: pulumi.Input<types.inputs.SubResourceArgs>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * IPv6 Address PrefixProperties of the express route circuit connection.
     */
    ipv6CircuitConnectionConfig?: pulumi.Input<types.inputs.Ipv6CircuitConnectionConfigArgs>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * Reference to Express Route Circuit Private Peering Resource of the peered circuit.
     */
    peerExpressRouteCircuitPeering?: pulumi.Input<types.inputs.SubResourceArgs>;
    /**
     * The name of the peering.
     */
    peeringName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
