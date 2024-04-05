import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A network interface in a resource group.
 */
export class NetworkInterface extends pulumi.CustomResource {
    /**
     * Get an existing NetworkInterface resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NetworkInterface {
        return new NetworkInterface(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20190801:NetworkInterface';

    /**
     * Returns true if the given object is an instance of NetworkInterface.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkInterface {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkInterface.__pulumiType;
    }

    /**
     * The DNS settings in network interface.
     */
    public readonly dnsSettings!: pulumi.Output<types.outputs.NetworkInterfaceDnsSettingsResponse | undefined>;
    /**
     * If the network interface is accelerated networking enabled.
     */
    public readonly enableAcceleratedNetworking!: pulumi.Output<boolean | undefined>;
    /**
     * Indicates whether IP forwarding is enabled on this network interface.
     */
    public readonly enableIPForwarding!: pulumi.Output<boolean | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * A list of references to linked BareMetal resources.
     */
    public /*out*/ readonly hostedWorkloads!: pulumi.Output<string[]>;
    /**
     * A list of IPConfigurations of the network interface.
     */
    public readonly ipConfigurations!: pulumi.Output<types.outputs.NetworkInterfaceIPConfigurationResponse[] | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The MAC address of the network interface.
     */
    public readonly macAddress!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The reference of the NetworkSecurityGroup resource.
     */
    public readonly networkSecurityGroup!: pulumi.Output<types.outputs.NetworkSecurityGroupResponse | undefined>;
    /**
     * Whether this is a primary network interface on a virtual machine.
     */
    public readonly primary!: pulumi.Output<boolean | undefined>;
    /**
     * A reference to the private endpoint to which the network interface is linked.
     */
    public /*out*/ readonly privateEndpoint!: pulumi.Output<types.outputs.PrivateEndpointResponse>;
    /**
     * The provisioning state of the network interface resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The resource GUID property of the network interface resource.
     */
    public readonly resourceGuid!: pulumi.Output<string | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * A list of TapConfigurations of the network interface.
     */
    public readonly tapConfigurations!: pulumi.Output<types.outputs.NetworkInterfaceTapConfigurationResponse[] | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The reference of a virtual machine.
     */
    public /*out*/ readonly virtualMachine!: pulumi.Output<types.outputs.SubResourceResponse>;

    /**
     * Create a NetworkInterface resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkInterfaceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["dnsSettings"] = args ? args.dnsSettings : undefined;
            resourceInputs["enableAcceleratedNetworking"] = args ? args.enableAcceleratedNetworking : undefined;
            resourceInputs["enableIPForwarding"] = args ? args.enableIPForwarding : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["ipConfigurations"] = args ? args.ipConfigurations : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["macAddress"] = args ? args.macAddress : undefined;
            resourceInputs["networkInterfaceName"] = args ? args.networkInterfaceName : undefined;
            resourceInputs["networkSecurityGroup"] = args ? args.networkSecurityGroup : undefined;
            resourceInputs["primary"] = args ? args.primary : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceGuid"] = args ? args.resourceGuid : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tapConfigurations"] = args ? args.tapConfigurations : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["hostedWorkloads"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpoint"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualMachine"] = undefined /*out*/;
        } else {
            resourceInputs["dnsSettings"] = undefined /*out*/;
            resourceInputs["enableAcceleratedNetworking"] = undefined /*out*/;
            resourceInputs["enableIPForwarding"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["hostedWorkloads"] = undefined /*out*/;
            resourceInputs["ipConfigurations"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["macAddress"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkSecurityGroup"] = undefined /*out*/;
            resourceInputs["primary"] = undefined /*out*/;
            resourceInputs["privateEndpoint"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["tapConfigurations"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualMachine"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:NetworkInterface" }, { type: "azure-native:network/v20150501preview:NetworkInterface" }, { type: "azure-native:network/v20150615:NetworkInterface" }, { type: "azure-native:network/v20160330:NetworkInterface" }, { type: "azure-native:network/v20160601:NetworkInterface" }, { type: "azure-native:network/v20160901:NetworkInterface" }, { type: "azure-native:network/v20161201:NetworkInterface" }, { type: "azure-native:network/v20170301:NetworkInterface" }, { type: "azure-native:network/v20170601:NetworkInterface" }, { type: "azure-native:network/v20170801:NetworkInterface" }, { type: "azure-native:network/v20170901:NetworkInterface" }, { type: "azure-native:network/v20171001:NetworkInterface" }, { type: "azure-native:network/v20171101:NetworkInterface" }, { type: "azure-native:network/v20180101:NetworkInterface" }, { type: "azure-native:network/v20180201:NetworkInterface" }, { type: "azure-native:network/v20180401:NetworkInterface" }, { type: "azure-native:network/v20180601:NetworkInterface" }, { type: "azure-native:network/v20180701:NetworkInterface" }, { type: "azure-native:network/v20180801:NetworkInterface" }, { type: "azure-native:network/v20181001:NetworkInterface" }, { type: "azure-native:network/v20181101:NetworkInterface" }, { type: "azure-native:network/v20181201:NetworkInterface" }, { type: "azure-native:network/v20190201:NetworkInterface" }, { type: "azure-native:network/v20190401:NetworkInterface" }, { type: "azure-native:network/v20190601:NetworkInterface" }, { type: "azure-native:network/v20190701:NetworkInterface" }, { type: "azure-native:network/v20190901:NetworkInterface" }, { type: "azure-native:network/v20191101:NetworkInterface" }, { type: "azure-native:network/v20191201:NetworkInterface" }, { type: "azure-native:network/v20200301:NetworkInterface" }, { type: "azure-native:network/v20200401:NetworkInterface" }, { type: "azure-native:network/v20200501:NetworkInterface" }, { type: "azure-native:network/v20200601:NetworkInterface" }, { type: "azure-native:network/v20200701:NetworkInterface" }, { type: "azure-native:network/v20200801:NetworkInterface" }, { type: "azure-native:network/v20201101:NetworkInterface" }, { type: "azure-native:network/v20210201:NetworkInterface" }, { type: "azure-native:network/v20210301:NetworkInterface" }, { type: "azure-native:network/v20210501:NetworkInterface" }, { type: "azure-native:network/v20210801:NetworkInterface" }, { type: "azure-native:network/v20220101:NetworkInterface" }, { type: "azure-native:network/v20220501:NetworkInterface" }, { type: "azure-native:network/v20220701:NetworkInterface" }, { type: "azure-native:network/v20220901:NetworkInterface" }, { type: "azure-native:network/v20221101:NetworkInterface" }, { type: "azure-native:network/v20230201:NetworkInterface" }, { type: "azure-native:network/v20230401:NetworkInterface" }, { type: "azure-native:network/v20230501:NetworkInterface" }, { type: "azure-native:network/v20230601:NetworkInterface" }, { type: "azure-native:network/v20230901:NetworkInterface" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NetworkInterface.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NetworkInterface resource.
 */
export interface NetworkInterfaceArgs {
    /**
     * The DNS settings in network interface.
     */
    dnsSettings?: pulumi.Input<types.inputs.NetworkInterfaceDnsSettingsArgs>;
    /**
     * If the network interface is accelerated networking enabled.
     */
    enableAcceleratedNetworking?: pulumi.Input<boolean>;
    /**
     * Indicates whether IP forwarding is enabled on this network interface.
     */
    enableIPForwarding?: pulumi.Input<boolean>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * A list of IPConfigurations of the network interface.
     */
    ipConfigurations?: pulumi.Input<pulumi.Input<types.inputs.NetworkInterfaceIPConfigurationArgs>[]>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The MAC address of the network interface.
     */
    macAddress?: pulumi.Input<string>;
    /**
     * The name of the network interface.
     */
    networkInterfaceName?: pulumi.Input<string>;
    /**
     * The reference of the NetworkSecurityGroup resource.
     */
    networkSecurityGroup?: pulumi.Input<types.inputs.NetworkSecurityGroupArgs>;
    /**
     * Whether this is a primary network interface on a virtual machine.
     */
    primary?: pulumi.Input<boolean>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource GUID property of the network interface resource.
     */
    resourceGuid?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A list of TapConfigurations of the network interface.
     * These are also available as standalone resources. Do not mix inline and standalone resource as they will conflict with each other, leading to resources deletion.
     */
    tapConfigurations?: pulumi.Input<pulumi.Input<types.inputs.NetworkInterfaceTapConfigurationArgs>[]>;
}