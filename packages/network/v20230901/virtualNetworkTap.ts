import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Virtual Network Tap resource.
 */
export class VirtualNetworkTap extends pulumi.CustomResource {
    /**
     * Get an existing VirtualNetworkTap resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualNetworkTap {
        return new VirtualNetworkTap(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20230901:VirtualNetworkTap';

    /**
     * Returns true if the given object is an instance of VirtualNetworkTap.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualNetworkTap {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualNetworkTap.__pulumiType;
    }

    /**
     * The reference to the private IP address on the internal Load Balancer that will receive the tap.
     */
    public readonly destinationLoadBalancerFrontEndIPConfiguration!: pulumi.Output<types.outputs.FrontendIPConfigurationResponse | undefined>;
    /**
     * The reference to the private IP Address of the collector nic that will receive the tap.
     */
    public readonly destinationNetworkInterfaceIPConfiguration!: pulumi.Output<types.outputs.NetworkInterfaceIPConfigurationResponse | undefined>;
    /**
     * The VXLAN destination port that will receive the tapped traffic.
     */
    public readonly destinationPort!: pulumi.Output<number | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Specifies the list of resource IDs for the network interface IP configuration that needs to be tapped.
     */
    public /*out*/ readonly networkInterfaceTapConfigurations!: pulumi.Output<types.outputs.NetworkInterfaceTapConfigurationResponse[]>;
    /**
     * The provisioning state of the virtual network tap resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The resource GUID property of the virtual network tap resource.
     */
    public /*out*/ readonly resourceGuid!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a VirtualNetworkTap resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualNetworkTapArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["destinationLoadBalancerFrontEndIPConfiguration"] = args ? (args.destinationLoadBalancerFrontEndIPConfiguration ? pulumi.output(args.destinationLoadBalancerFrontEndIPConfiguration).apply(types.inputs.frontendIPConfigurationArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["destinationNetworkInterfaceIPConfiguration"] = args ? (args.destinationNetworkInterfaceIPConfiguration ? pulumi.output(args.destinationNetworkInterfaceIPConfiguration).apply(types.inputs.networkInterfaceIPConfigurationArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["destinationPort"] = args ? args.destinationPort : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tapName"] = args ? args.tapName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkInterfaceTapConfigurations"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["destinationLoadBalancerFrontEndIPConfiguration"] = undefined /*out*/;
            resourceInputs["destinationNetworkInterfaceIPConfiguration"] = undefined /*out*/;
            resourceInputs["destinationPort"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkInterfaceTapConfigurations"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:VirtualNetworkTap" }, { type: "azure-native:network/v20180801:VirtualNetworkTap" }, { type: "azure-native:network/v20181001:VirtualNetworkTap" }, { type: "azure-native:network/v20181101:VirtualNetworkTap" }, { type: "azure-native:network/v20181201:VirtualNetworkTap" }, { type: "azure-native:network/v20190201:VirtualNetworkTap" }, { type: "azure-native:network/v20190401:VirtualNetworkTap" }, { type: "azure-native:network/v20190601:VirtualNetworkTap" }, { type: "azure-native:network/v20190701:VirtualNetworkTap" }, { type: "azure-native:network/v20190801:VirtualNetworkTap" }, { type: "azure-native:network/v20190901:VirtualNetworkTap" }, { type: "azure-native:network/v20191101:VirtualNetworkTap" }, { type: "azure-native:network/v20191201:VirtualNetworkTap" }, { type: "azure-native:network/v20200301:VirtualNetworkTap" }, { type: "azure-native:network/v20200401:VirtualNetworkTap" }, { type: "azure-native:network/v20200501:VirtualNetworkTap" }, { type: "azure-native:network/v20200601:VirtualNetworkTap" }, { type: "azure-native:network/v20200701:VirtualNetworkTap" }, { type: "azure-native:network/v20200801:VirtualNetworkTap" }, { type: "azure-native:network/v20201101:VirtualNetworkTap" }, { type: "azure-native:network/v20210201:VirtualNetworkTap" }, { type: "azure-native:network/v20210301:VirtualNetworkTap" }, { type: "azure-native:network/v20210501:VirtualNetworkTap" }, { type: "azure-native:network/v20210801:VirtualNetworkTap" }, { type: "azure-native:network/v20220101:VirtualNetworkTap" }, { type: "azure-native:network/v20220501:VirtualNetworkTap" }, { type: "azure-native:network/v20220701:VirtualNetworkTap" }, { type: "azure-native:network/v20220901:VirtualNetworkTap" }, { type: "azure-native:network/v20221101:VirtualNetworkTap" }, { type: "azure-native:network/v20230201:VirtualNetworkTap" }, { type: "azure-native:network/v20230401:VirtualNetworkTap" }, { type: "azure-native:network/v20230501:VirtualNetworkTap" }, { type: "azure-native:network/v20230601:VirtualNetworkTap" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VirtualNetworkTap.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualNetworkTap resource.
 */
export interface VirtualNetworkTapArgs {
    /**
     * The reference to the private IP address on the internal Load Balancer that will receive the tap.
     */
    destinationLoadBalancerFrontEndIPConfiguration?: pulumi.Input<types.inputs.FrontendIPConfigurationArgs>;
    /**
     * The reference to the private IP Address of the collector nic that will receive the tap.
     */
    destinationNetworkInterfaceIPConfiguration?: pulumi.Input<types.inputs.NetworkInterfaceIPConfigurationArgs>;
    /**
     * The VXLAN destination port that will receive the tapped traffic.
     */
    destinationPort?: pulumi.Input<number>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the virtual network tap.
     */
    tapName?: pulumi.Input<string>;
}