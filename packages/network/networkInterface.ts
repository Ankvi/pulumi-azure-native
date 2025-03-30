import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A network interface in a resource group.
 *
 * Uses Azure REST API version 2023-02-01. In version 1.x of the Azure Native provider, it used API version 2020-11-01.
 *
 * Other available API versions: 2018-07-01, 2019-02-01, 2019-06-01, 2019-08-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
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
    public static readonly __pulumiType = 'azure-native:network:NetworkInterface';

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
     * Auxiliary mode of Network Interface resource.
     */
    public readonly auxiliaryMode!: pulumi.Output<string | undefined>;
    /**
     * Auxiliary sku of Network Interface resource.
     */
    public readonly auxiliarySku!: pulumi.Output<string | undefined>;
    /**
     * Indicates whether to disable tcp state tracking.
     */
    public readonly disableTcpStateTracking!: pulumi.Output<boolean | undefined>;
    /**
     * The DNS settings in network interface.
     */
    public readonly dnsSettings!: pulumi.Output<types.outputs.NetworkInterfaceDnsSettingsResponse | undefined>;
    /**
     * A reference to the dscp configuration to which the network interface is linked.
     */
    public /*out*/ readonly dscpConfiguration!: pulumi.Output<types.outputs.SubResourceResponse>;
    /**
     * If the network interface is configured for accelerated networking. Not applicable to VM sizes which require accelerated networking.
     */
    public readonly enableAcceleratedNetworking!: pulumi.Output<boolean | undefined>;
    /**
     * Indicates whether IP forwarding is enabled on this network interface.
     */
    public readonly enableIPForwarding!: pulumi.Output<boolean | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The extended location of the network interface.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse | undefined>;
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
    public /*out*/ readonly macAddress!: pulumi.Output<string>;
    /**
     * Migration phase of Network Interface resource.
     */
    public readonly migrationPhase!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The reference to the NetworkSecurityGroup resource.
     */
    public readonly networkSecurityGroup!: pulumi.Output<types.outputs.NetworkSecurityGroupResponse | undefined>;
    /**
     * Type of Network Interface resource.
     */
    public readonly nicType!: pulumi.Output<string | undefined>;
    /**
     * Whether this is a primary network interface on a virtual machine.
     */
    public /*out*/ readonly primary!: pulumi.Output<boolean>;
    /**
     * A reference to the private endpoint to which the network interface is linked.
     */
    public /*out*/ readonly privateEndpoint!: pulumi.Output<types.outputs.PrivateEndpointResponse>;
    /**
     * Privatelinkservice of the network interface resource.
     */
    public readonly privateLinkService!: pulumi.Output<types.outputs.PrivateLinkServiceResponse | undefined>;
    /**
     * The provisioning state of the network interface resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The resource GUID property of the network interface resource.
     */
    public /*out*/ readonly resourceGuid!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * A list of TapConfigurations of the network interface.
     */
    public /*out*/ readonly tapConfigurations!: pulumi.Output<types.outputs.NetworkInterfaceTapConfigurationResponse[]>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The reference to a virtual machine.
     */
    public /*out*/ readonly virtualMachine!: pulumi.Output<types.outputs.SubResourceResponse>;
    /**
     * Whether the virtual machine this nic is attached to supports encryption.
     */
    public /*out*/ readonly vnetEncryptionSupported!: pulumi.Output<boolean>;
    /**
     * WorkloadType of the NetworkInterface for BareMetal resources
     */
    public readonly workloadType!: pulumi.Output<string | undefined>;

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
            resourceInputs["auxiliaryMode"] = args ? args.auxiliaryMode : undefined;
            resourceInputs["auxiliarySku"] = args ? args.auxiliarySku : undefined;
            resourceInputs["disableTcpStateTracking"] = args ? args.disableTcpStateTracking : undefined;
            resourceInputs["dnsSettings"] = args ? args.dnsSettings : undefined;
            resourceInputs["enableAcceleratedNetworking"] = args ? args.enableAcceleratedNetworking : undefined;
            resourceInputs["enableIPForwarding"] = args ? args.enableIPForwarding : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["ipConfigurations"] = args ? args.ipConfigurations : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["migrationPhase"] = args ? args.migrationPhase : undefined;
            resourceInputs["networkInterfaceName"] = args ? args.networkInterfaceName : undefined;
            resourceInputs["networkSecurityGroup"] = args ? args.networkSecurityGroup : undefined;
            resourceInputs["nicType"] = args ? args.nicType : undefined;
            resourceInputs["privateLinkService"] = args ? args.privateLinkService : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["workloadType"] = args ? args.workloadType : undefined;
            resourceInputs["dscpConfiguration"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["hostedWorkloads"] = undefined /*out*/;
            resourceInputs["macAddress"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["primary"] = undefined /*out*/;
            resourceInputs["privateEndpoint"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["tapConfigurations"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualMachine"] = undefined /*out*/;
            resourceInputs["vnetEncryptionSupported"] = undefined /*out*/;
        } else {
            resourceInputs["auxiliaryMode"] = undefined /*out*/;
            resourceInputs["auxiliarySku"] = undefined /*out*/;
            resourceInputs["disableTcpStateTracking"] = undefined /*out*/;
            resourceInputs["dnsSettings"] = undefined /*out*/;
            resourceInputs["dscpConfiguration"] = undefined /*out*/;
            resourceInputs["enableAcceleratedNetworking"] = undefined /*out*/;
            resourceInputs["enableIPForwarding"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["hostedWorkloads"] = undefined /*out*/;
            resourceInputs["ipConfigurations"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["macAddress"] = undefined /*out*/;
            resourceInputs["migrationPhase"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkSecurityGroup"] = undefined /*out*/;
            resourceInputs["nicType"] = undefined /*out*/;
            resourceInputs["primary"] = undefined /*out*/;
            resourceInputs["privateEndpoint"] = undefined /*out*/;
            resourceInputs["privateLinkService"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["tapConfigurations"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualMachine"] = undefined /*out*/;
            resourceInputs["vnetEncryptionSupported"] = undefined /*out*/;
            resourceInputs["workloadType"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20150501preview:NetworkInterface" }, { type: "azure-native:network/v20150615:NetworkInterface" }, { type: "azure-native:network/v20160330:NetworkInterface" }, { type: "azure-native:network/v20160601:NetworkInterface" }, { type: "azure-native:network/v20160901:NetworkInterface" }, { type: "azure-native:network/v20161201:NetworkInterface" }, { type: "azure-native:network/v20170301:NetworkInterface" }, { type: "azure-native:network/v20170601:NetworkInterface" }, { type: "azure-native:network/v20170801:NetworkInterface" }, { type: "azure-native:network/v20170901:NetworkInterface" }, { type: "azure-native:network/v20171001:NetworkInterface" }, { type: "azure-native:network/v20171101:NetworkInterface" }, { type: "azure-native:network/v20180101:NetworkInterface" }, { type: "azure-native:network/v20180201:NetworkInterface" }, { type: "azure-native:network/v20180401:NetworkInterface" }, { type: "azure-native:network/v20180601:NetworkInterface" }, { type: "azure-native:network/v20180701:NetworkInterface" }, { type: "azure-native:network/v20180801:NetworkInterface" }, { type: "azure-native:network/v20181001:NetworkInterface" }, { type: "azure-native:network/v20181101:NetworkInterface" }, { type: "azure-native:network/v20181201:NetworkInterface" }, { type: "azure-native:network/v20190201:NetworkInterface" }, { type: "azure-native:network/v20190401:NetworkInterface" }, { type: "azure-native:network/v20190601:NetworkInterface" }, { type: "azure-native:network/v20190701:NetworkInterface" }, { type: "azure-native:network/v20190801:NetworkInterface" }, { type: "azure-native:network/v20190901:NetworkInterface" }, { type: "azure-native:network/v20191101:NetworkInterface" }, { type: "azure-native:network/v20191201:NetworkInterface" }, { type: "azure-native:network/v20200301:NetworkInterface" }, { type: "azure-native:network/v20200401:NetworkInterface" }, { type: "azure-native:network/v20200501:NetworkInterface" }, { type: "azure-native:network/v20200601:NetworkInterface" }, { type: "azure-native:network/v20200701:NetworkInterface" }, { type: "azure-native:network/v20200801:NetworkInterface" }, { type: "azure-native:network/v20201101:NetworkInterface" }, { type: "azure-native:network/v20210201:NetworkInterface" }, { type: "azure-native:network/v20210301:NetworkInterface" }, { type: "azure-native:network/v20210501:NetworkInterface" }, { type: "azure-native:network/v20210801:NetworkInterface" }, { type: "azure-native:network/v20220101:NetworkInterface" }, { type: "azure-native:network/v20220501:NetworkInterface" }, { type: "azure-native:network/v20220701:NetworkInterface" }, { type: "azure-native:network/v20220901:NetworkInterface" }, { type: "azure-native:network/v20221101:NetworkInterface" }, { type: "azure-native:network/v20230201:NetworkInterface" }, { type: "azure-native:network/v20230401:NetworkInterface" }, { type: "azure-native:network/v20230501:NetworkInterface" }, { type: "azure-native:network/v20230601:NetworkInterface" }, { type: "azure-native:network/v20230901:NetworkInterface" }, { type: "azure-native:network/v20231101:NetworkInterface" }, { type: "azure-native:network/v20240101:NetworkInterface" }, { type: "azure-native:network/v20240301:NetworkInterface" }, { type: "azure-native:network/v20240501:NetworkInterface" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NetworkInterface.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NetworkInterface resource.
 */
export interface NetworkInterfaceArgs {
    /**
     * Auxiliary mode of Network Interface resource.
     */
    auxiliaryMode?: pulumi.Input<string | types.enums.NetworkInterfaceAuxiliaryMode>;
    /**
     * Auxiliary sku of Network Interface resource.
     */
    auxiliarySku?: pulumi.Input<string | types.enums.NetworkInterfaceAuxiliarySku>;
    /**
     * Indicates whether to disable tcp state tracking.
     */
    disableTcpStateTracking?: pulumi.Input<boolean>;
    /**
     * The DNS settings in network interface.
     */
    dnsSettings?: pulumi.Input<types.inputs.NetworkInterfaceDnsSettingsArgs>;
    /**
     * If the network interface is configured for accelerated networking. Not applicable to VM sizes which require accelerated networking.
     */
    enableAcceleratedNetworking?: pulumi.Input<boolean>;
    /**
     * Indicates whether IP forwarding is enabled on this network interface.
     */
    enableIPForwarding?: pulumi.Input<boolean>;
    /**
     * The extended location of the network interface.
     */
    extendedLocation?: pulumi.Input<types.inputs.ExtendedLocationArgs>;
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
     * Migration phase of Network Interface resource.
     */
    migrationPhase?: pulumi.Input<string | types.enums.NetworkInterfaceMigrationPhase>;
    /**
     * The name of the network interface.
     */
    networkInterfaceName?: pulumi.Input<string>;
    /**
     * The reference to the NetworkSecurityGroup resource.
     */
    networkSecurityGroup?: pulumi.Input<types.inputs.NetworkSecurityGroupArgs>;
    /**
     * Type of Network Interface resource.
     */
    nicType?: pulumi.Input<string | types.enums.NetworkInterfaceNicType>;
    /**
     * Privatelinkservice of the network interface resource.
     */
    privateLinkService?: pulumi.Input<types.inputs.PrivateLinkServiceArgs>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * WorkloadType of the NetworkInterface for BareMetal resources
     */
    workloadType?: pulumi.Input<string>;
}