import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Tap configuration in a Network Interface.
 */
export class NetworkInterfaceTapConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing NetworkInterfaceTapConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NetworkInterfaceTapConfiguration {
        return new NetworkInterfaceTapConfiguration(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20230401:NetworkInterfaceTapConfiguration';

    /**
     * Returns true if the given object is an instance of NetworkInterfaceTapConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkInterfaceTapConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkInterfaceTapConfiguration.__pulumiType;
    }

    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of the network interface tap configuration resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Sub Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The reference to the Virtual Network Tap resource.
     */
    public readonly virtualNetworkTap!: pulumi.Output<types.outputs.VirtualNetworkTapResponse | undefined>;

    /**
     * Create a NetworkInterfaceTapConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkInterfaceTapConfigurationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.networkInterfaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkInterfaceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["networkInterfaceName"] = args ? args.networkInterfaceName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tapConfigurationName"] = args ? args.tapConfigurationName : undefined;
            resourceInputs["virtualNetworkTap"] = args ? (args.virtualNetworkTap ? pulumi.output(args.virtualNetworkTap).apply(types.inputs.virtualNetworkTapArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualNetworkTap"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:NetworkInterfaceTapConfiguration" }, { type: "azure-native:network/v20180801:NetworkInterfaceTapConfiguration" }, { type: "azure-native:network/v20181001:NetworkInterfaceTapConfiguration" }, { type: "azure-native:network/v20181101:NetworkInterfaceTapConfiguration" }, { type: "azure-native:network/v20181201:NetworkInterfaceTapConfiguration" }, { type: "azure-native:network/v20190201:NetworkInterfaceTapConfiguration" }, { type: "azure-native:network/v20190401:NetworkInterfaceTapConfiguration" }, { type: "azure-native:network/v20190601:NetworkInterfaceTapConfiguration" }, { type: "azure-native:network/v20190701:NetworkInterfaceTapConfiguration" }, { type: "azure-native:network/v20190801:NetworkInterfaceTapConfiguration" }, { type: "azure-native:network/v20190901:NetworkInterfaceTapConfiguration" }, { type: "azure-native:network/v20191101:NetworkInterfaceTapConfiguration" }, { type: "azure-native:network/v20191201:NetworkInterfaceTapConfiguration" }, { type: "azure-native:network/v20200301:NetworkInterfaceTapConfiguration" }, { type: "azure-native:network/v20200401:NetworkInterfaceTapConfiguration" }, { type: "azure-native:network/v20200501:NetworkInterfaceTapConfiguration" }, { type: "azure-native:network/v20200601:NetworkInterfaceTapConfiguration" }, { type: "azure-native:network/v20200701:NetworkInterfaceTapConfiguration" }, { type: "azure-native:network/v20200801:NetworkInterfaceTapConfiguration" }, { type: "azure-native:network/v20201101:NetworkInterfaceTapConfiguration" }, { type: "azure-native:network/v20210201:NetworkInterfaceTapConfiguration" }, { type: "azure-native:network/v20210301:NetworkInterfaceTapConfiguration" }, { type: "azure-native:network/v20210501:NetworkInterfaceTapConfiguration" }, { type: "azure-native:network/v20210801:NetworkInterfaceTapConfiguration" }, { type: "azure-native:network/v20220101:NetworkInterfaceTapConfiguration" }, { type: "azure-native:network/v20220501:NetworkInterfaceTapConfiguration" }, { type: "azure-native:network/v20220701:NetworkInterfaceTapConfiguration" }, { type: "azure-native:network/v20220901:NetworkInterfaceTapConfiguration" }, { type: "azure-native:network/v20221101:NetworkInterfaceTapConfiguration" }, { type: "azure-native:network/v20230201:NetworkInterfaceTapConfiguration" }, { type: "azure-native:network/v20230501:NetworkInterfaceTapConfiguration" }, { type: "azure-native:network/v20230601:NetworkInterfaceTapConfiguration" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NetworkInterfaceTapConfiguration.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NetworkInterfaceTapConfiguration resource.
 */
export interface NetworkInterfaceTapConfigurationArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the network interface.
     */
    networkInterfaceName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the tap configuration.
     */
    tapConfigurationName?: pulumi.Input<string>;
    /**
     * The reference to the Virtual Network Tap resource.
     */
    virtualNetworkTap?: pulumi.Input<types.inputs.VirtualNetworkTapArgs>;
}
