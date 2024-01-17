import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * IpConfigurations.
 * Azure REST API version: 2023-02-01. Prior API version in Azure Native 1.x: 2020-11-01.
 *
 * Other available API versions: 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01.
 */
export class VirtualHubIpConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing VirtualHubIpConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualHubIpConfiguration {
        return new VirtualHubIpConfiguration(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:VirtualHubIpConfiguration';

    /**
     * Returns true if the given object is an instance of VirtualHubIpConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualHubIpConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualHubIpConfiguration.__pulumiType;
    }

    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Name of the Ip Configuration.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * The private IP address of the IP configuration.
     */
    public readonly privateIPAddress!: pulumi.Output<string | undefined>;
    /**
     * The private IP address allocation method.
     */
    public readonly privateIPAllocationMethod!: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of the IP configuration resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The reference to the public IP resource.
     */
    public readonly publicIPAddress!: pulumi.Output<types.outputs.PublicIPAddressResponse | undefined>;
    /**
     * The reference to the subnet resource.
     */
    public readonly subnet!: pulumi.Output<types.outputs.SubnetResponse | undefined>;
    /**
     * Ipconfiguration type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a VirtualHubIpConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualHubIpConfigurationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.virtualHubName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'virtualHubName'");
            }
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["ipConfigName"] = args ? args.ipConfigName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["privateIPAddress"] = args ? args.privateIPAddress : undefined;
            resourceInputs["privateIPAllocationMethod"] = args ? args.privateIPAllocationMethod : undefined;
            resourceInputs["publicIPAddress"] = args ? args.publicIPAddress : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["subnet"] = args ? (args.subnet ? pulumi.output(args.subnet).apply(types.inputs.subnetArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["virtualHubName"] = args ? args.virtualHubName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateIPAddress"] = undefined /*out*/;
            resourceInputs["privateIPAllocationMethod"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicIPAddress"] = undefined /*out*/;
            resourceInputs["subnet"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20200501:VirtualHubIpConfiguration" }, { type: "azure-native:network/v20200601:VirtualHubIpConfiguration" }, { type: "azure-native:network/v20200701:VirtualHubIpConfiguration" }, { type: "azure-native:network/v20200801:VirtualHubIpConfiguration" }, { type: "azure-native:network/v20201101:VirtualHubIpConfiguration" }, { type: "azure-native:network/v20210201:VirtualHubIpConfiguration" }, { type: "azure-native:network/v20210301:VirtualHubIpConfiguration" }, { type: "azure-native:network/v20210501:VirtualHubIpConfiguration" }, { type: "azure-native:network/v20210801:VirtualHubIpConfiguration" }, { type: "azure-native:network/v20220101:VirtualHubIpConfiguration" }, { type: "azure-native:network/v20220501:VirtualHubIpConfiguration" }, { type: "azure-native:network/v20220701:VirtualHubIpConfiguration" }, { type: "azure-native:network/v20220901:VirtualHubIpConfiguration" }, { type: "azure-native:network/v20221101:VirtualHubIpConfiguration" }, { type: "azure-native:network/v20230201:VirtualHubIpConfiguration" }, { type: "azure-native:network/v20230401:VirtualHubIpConfiguration" }, { type: "azure-native:network/v20230501:VirtualHubIpConfiguration" }, { type: "azure-native:network/v20230601:VirtualHubIpConfiguration" }, { type: "azure-native:network/v20230901:VirtualHubIpConfiguration" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VirtualHubIpConfiguration.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualHubIpConfiguration resource.
 */
export interface VirtualHubIpConfigurationArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the ipconfig.
     */
    ipConfigName?: pulumi.Input<string>;
    /**
     * Name of the Ip Configuration.
     */
    name?: pulumi.Input<string>;
    /**
     * The private IP address of the IP configuration.
     */
    privateIPAddress?: pulumi.Input<string>;
    /**
     * The private IP address allocation method.
     */
    privateIPAllocationMethod?: pulumi.Input<string | types.enums.IPAllocationMethod>;
    /**
     * The reference to the public IP resource.
     */
    publicIPAddress?: pulumi.Input<types.inputs.PublicIPAddressArgs>;
    /**
     * The resource group name of the VirtualHub.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The reference to the subnet resource.
     */
    subnet?: pulumi.Input<types.inputs.SubnetArgs>;
    /**
     * The name of the VirtualHub.
     */
    virtualHubName: pulumi.Input<string>;
}
