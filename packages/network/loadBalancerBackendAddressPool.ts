import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Pool of backend IP addresses.
 *
 * Uses Azure REST API version 2024-05-01. In version 2.x of the Azure Native provider, it used API version 2023-02-01.
 *
 * Other available API versions: 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class LoadBalancerBackendAddressPool extends pulumi.CustomResource {
    /**
     * Get an existing LoadBalancerBackendAddressPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): LoadBalancerBackendAddressPool {
        return new LoadBalancerBackendAddressPool(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:LoadBalancerBackendAddressPool';

    /**
     * Returns true if the given object is an instance of LoadBalancerBackendAddressPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LoadBalancerBackendAddressPool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LoadBalancerBackendAddressPool.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * An array of references to IP addresses defined in network interfaces.
     */
    public /*out*/ readonly backendIPConfigurations!: pulumi.Output<types.outputs.NetworkInterfaceIPConfigurationResponse[]>;
    /**
     * Amount of seconds Load Balancer waits for before sending RESET to client and backend address.
     */
    public readonly drainPeriodInSeconds!: pulumi.Output<number | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * An array of references to inbound NAT rules that use this backend address pool.
     */
    public /*out*/ readonly inboundNatRules!: pulumi.Output<types.outputs.SubResourceResponse[]>;
    /**
     * An array of backend addresses.
     */
    public readonly loadBalancerBackendAddresses!: pulumi.Output<types.outputs.LoadBalancerBackendAddressResponse[] | undefined>;
    /**
     * An array of references to load balancing rules that use this backend address pool.
     */
    public /*out*/ readonly loadBalancingRules!: pulumi.Output<types.outputs.SubResourceResponse[]>;
    /**
     * The location of the backend address pool.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource that is unique within the set of backend address pools used by the load balancer. This name can be used to access the resource.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * A reference to an outbound rule that uses this backend address pool.
     */
    public /*out*/ readonly outboundRule!: pulumi.Output<types.outputs.SubResourceResponse>;
    /**
     * An array of references to outbound rules that use this backend address pool.
     */
    public /*out*/ readonly outboundRules!: pulumi.Output<types.outputs.SubResourceResponse[]>;
    /**
     * The provisioning state of the backend address pool resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Backend address synchronous mode for the backend pool
     */
    public readonly syncMode!: pulumi.Output<string | undefined>;
    /**
     * An array of gateway load balancer tunnel interfaces.
     */
    public readonly tunnelInterfaces!: pulumi.Output<types.outputs.GatewayLoadBalancerTunnelInterfaceResponse[] | undefined>;
    /**
     * Type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * A reference to a virtual network.
     */
    public readonly virtualNetwork!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;

    /**
     * Create a LoadBalancerBackendAddressPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LoadBalancerBackendAddressPoolArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.loadBalancerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'loadBalancerName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["backendAddressPoolName"] = args ? args.backendAddressPoolName : undefined;
            resourceInputs["drainPeriodInSeconds"] = args ? args.drainPeriodInSeconds : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["loadBalancerBackendAddresses"] = args ? args.loadBalancerBackendAddresses : undefined;
            resourceInputs["loadBalancerName"] = args ? args.loadBalancerName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["syncMode"] = args ? args.syncMode : undefined;
            resourceInputs["tunnelInterfaces"] = args ? args.tunnelInterfaces : undefined;
            resourceInputs["virtualNetwork"] = args ? args.virtualNetwork : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["backendIPConfigurations"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["inboundNatRules"] = undefined /*out*/;
            resourceInputs["loadBalancingRules"] = undefined /*out*/;
            resourceInputs["outboundRule"] = undefined /*out*/;
            resourceInputs["outboundRules"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["backendIPConfigurations"] = undefined /*out*/;
            resourceInputs["drainPeriodInSeconds"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["inboundNatRules"] = undefined /*out*/;
            resourceInputs["loadBalancerBackendAddresses"] = undefined /*out*/;
            resourceInputs["loadBalancingRules"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["outboundRule"] = undefined /*out*/;
            resourceInputs["outboundRules"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["syncMode"] = undefined /*out*/;
            resourceInputs["tunnelInterfaces"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualNetwork"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20200401:LoadBalancerBackendAddressPool" }, { type: "azure-native:network/v20200501:LoadBalancerBackendAddressPool" }, { type: "azure-native:network/v20200601:LoadBalancerBackendAddressPool" }, { type: "azure-native:network/v20200701:LoadBalancerBackendAddressPool" }, { type: "azure-native:network/v20200801:LoadBalancerBackendAddressPool" }, { type: "azure-native:network/v20201101:LoadBalancerBackendAddressPool" }, { type: "azure-native:network/v20210201:LoadBalancerBackendAddressPool" }, { type: "azure-native:network/v20210301:LoadBalancerBackendAddressPool" }, { type: "azure-native:network/v20210501:LoadBalancerBackendAddressPool" }, { type: "azure-native:network/v20210801:LoadBalancerBackendAddressPool" }, { type: "azure-native:network/v20220101:LoadBalancerBackendAddressPool" }, { type: "azure-native:network/v20220501:LoadBalancerBackendAddressPool" }, { type: "azure-native:network/v20220701:LoadBalancerBackendAddressPool" }, { type: "azure-native:network/v20220901:LoadBalancerBackendAddressPool" }, { type: "azure-native:network/v20221101:LoadBalancerBackendAddressPool" }, { type: "azure-native:network/v20230201:LoadBalancerBackendAddressPool" }, { type: "azure-native:network/v20230401:LoadBalancerBackendAddressPool" }, { type: "azure-native:network/v20230501:LoadBalancerBackendAddressPool" }, { type: "azure-native:network/v20230601:LoadBalancerBackendAddressPool" }, { type: "azure-native:network/v20230901:LoadBalancerBackendAddressPool" }, { type: "azure-native:network/v20231101:LoadBalancerBackendAddressPool" }, { type: "azure-native:network/v20240101:LoadBalancerBackendAddressPool" }, { type: "azure-native:network/v20240301:LoadBalancerBackendAddressPool" }, { type: "azure-native:network/v20240501:LoadBalancerBackendAddressPool" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(LoadBalancerBackendAddressPool.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a LoadBalancerBackendAddressPool resource.
 */
export interface LoadBalancerBackendAddressPoolArgs {
    /**
     * The name of the backend address pool.
     */
    backendAddressPoolName?: pulumi.Input<string>;
    /**
     * Amount of seconds Load Balancer waits for before sending RESET to client and backend address.
     */
    drainPeriodInSeconds?: pulumi.Input<number>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * An array of backend addresses.
     */
    loadBalancerBackendAddresses?: pulumi.Input<pulumi.Input<types.inputs.LoadBalancerBackendAddressArgs>[]>;
    /**
     * The name of the load balancer.
     */
    loadBalancerName: pulumi.Input<string>;
    /**
     * The location of the backend address pool.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within the set of backend address pools used by the load balancer. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Backend address synchronous mode for the backend pool
     */
    syncMode?: pulumi.Input<string | types.enums.SyncMode>;
    /**
     * An array of gateway load balancer tunnel interfaces.
     */
    tunnelInterfaces?: pulumi.Input<pulumi.Input<types.inputs.GatewayLoadBalancerTunnelInterfaceArgs>[]>;
    /**
     * A reference to a virtual network.
     */
    virtualNetwork?: pulumi.Input<types.inputs.SubResourceArgs>;
}