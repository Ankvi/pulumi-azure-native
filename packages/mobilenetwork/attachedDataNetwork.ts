import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Attached data network resource. Must be created in the same location as its parent packet core data plane.
 *
 * Uses Azure REST API version 2024-04-01. In version 2.x of the Azure Native provider, it used API version 2023-06-01.
 *
 * Other available API versions: 2022-04-01-preview, 2022-11-01, 2023-06-01, 2023-09-01, 2024-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native mobilenetwork [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class AttachedDataNetwork extends pulumi.CustomResource {
    /**
     * Get an existing AttachedDataNetwork resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AttachedDataNetwork {
        return new AttachedDataNetwork(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:mobilenetwork:AttachedDataNetwork';

    /**
     * Returns true if the given object is an instance of AttachedDataNetwork.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AttachedDataNetwork {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AttachedDataNetwork.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The DNS servers to signal to UEs to use for this attached data network. This configuration is mandatory - if you don't want DNS servers, you must provide an empty array.
     */
    public readonly dnsAddresses!: pulumi.Output<string[]>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The network address and port translation (NAPT) configuration.
     * If this is not specified, the attached data network will use a default NAPT configuration with NAPT enabled.
     */
    public readonly naptConfiguration!: pulumi.Output<types.outputs.NaptConfigurationResponse | undefined>;
    /**
     * The provisioning state of the attached data network resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
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
     * The user equipment (UE) address pool prefixes for the attached data network from which the packet core instance will dynamically assign IP addresses to UEs.
     * The packet core instance assigns an IP address to a UE when the UE sets up a PDU session.
     *  You must define at least one of userEquipmentAddressPoolPrefix and userEquipmentStaticAddressPoolPrefix. If you define both, they must be of the same size.
     */
    public readonly userEquipmentAddressPoolPrefix!: pulumi.Output<string[] | undefined>;
    /**
     * The user equipment (UE) address pool prefixes for the attached data network from which the packet core instance will assign static IP addresses to UEs.
     * The packet core instance assigns an IP address to a UE when the UE sets up a PDU session. The static IP address for a specific UE is set in StaticIPConfiguration on the corresponding SIM resource.
     * At least one of userEquipmentAddressPoolPrefix and userEquipmentStaticAddressPoolPrefix must be defined. If both are defined, they must be of the same size.
     */
    public readonly userEquipmentStaticAddressPoolPrefix!: pulumi.Output<string[] | undefined>;
    /**
     * The user plane interface on the data network. For 5G networks, this is the N6 interface. For 4G networks, this is the SGi interface.
     */
    public readonly userPlaneDataInterface!: pulumi.Output<types.outputs.InterfacePropertiesResponse>;

    /**
     * Create a AttachedDataNetwork resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AttachedDataNetworkArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.dnsAddresses === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dnsAddresses'");
            }
            if ((!args || args.packetCoreControlPlaneName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'packetCoreControlPlaneName'");
            }
            if ((!args || args.packetCoreDataPlaneName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'packetCoreDataPlaneName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.userPlaneDataInterface === undefined) && !opts.urn) {
                throw new Error("Missing required property 'userPlaneDataInterface'");
            }
            resourceInputs["attachedDataNetworkName"] = args ? args.attachedDataNetworkName : undefined;
            resourceInputs["dnsAddresses"] = args ? args.dnsAddresses : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["naptConfiguration"] = args ? (args.naptConfiguration ? pulumi.output(args.naptConfiguration).apply(types.inputs.naptConfigurationArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["packetCoreControlPlaneName"] = args ? args.packetCoreControlPlaneName : undefined;
            resourceInputs["packetCoreDataPlaneName"] = args ? args.packetCoreDataPlaneName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["userEquipmentAddressPoolPrefix"] = args ? args.userEquipmentAddressPoolPrefix : undefined;
            resourceInputs["userEquipmentStaticAddressPoolPrefix"] = args ? args.userEquipmentStaticAddressPoolPrefix : undefined;
            resourceInputs["userPlaneDataInterface"] = args ? args.userPlaneDataInterface : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["dnsAddresses"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["naptConfiguration"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userEquipmentAddressPoolPrefix"] = undefined /*out*/;
            resourceInputs["userEquipmentStaticAddressPoolPrefix"] = undefined /*out*/;
            resourceInputs["userPlaneDataInterface"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:mobilenetwork/v20220301preview:AttachedDataNetwork" }, { type: "azure-native:mobilenetwork/v20220401preview:AttachedDataNetwork" }, { type: "azure-native:mobilenetwork/v20221101:AttachedDataNetwork" }, { type: "azure-native:mobilenetwork/v20230601:AttachedDataNetwork" }, { type: "azure-native:mobilenetwork/v20230901:AttachedDataNetwork" }, { type: "azure-native:mobilenetwork/v20240201:AttachedDataNetwork" }, { type: "azure-native:mobilenetwork/v20240401:AttachedDataNetwork" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AttachedDataNetwork.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AttachedDataNetwork resource.
 */
export interface AttachedDataNetworkArgs {
    /**
     * The name of the attached data network.
     */
    attachedDataNetworkName?: pulumi.Input<string>;
    /**
     * The DNS servers to signal to UEs to use for this attached data network. This configuration is mandatory - if you don't want DNS servers, you must provide an empty array.
     */
    dnsAddresses: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The network address and port translation (NAPT) configuration.
     * If this is not specified, the attached data network will use a default NAPT configuration with NAPT enabled.
     */
    naptConfiguration?: pulumi.Input<types.inputs.NaptConfigurationArgs>;
    /**
     * The name of the packet core control plane.
     */
    packetCoreControlPlaneName: pulumi.Input<string>;
    /**
     * The name of the packet core data plane.
     */
    packetCoreDataPlaneName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The user equipment (UE) address pool prefixes for the attached data network from which the packet core instance will dynamically assign IP addresses to UEs.
     * The packet core instance assigns an IP address to a UE when the UE sets up a PDU session.
     *  You must define at least one of userEquipmentAddressPoolPrefix and userEquipmentStaticAddressPoolPrefix. If you define both, they must be of the same size.
     */
    userEquipmentAddressPoolPrefix?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The user equipment (UE) address pool prefixes for the attached data network from which the packet core instance will assign static IP addresses to UEs.
     * The packet core instance assigns an IP address to a UE when the UE sets up a PDU session. The static IP address for a specific UE is set in StaticIPConfiguration on the corresponding SIM resource.
     * At least one of userEquipmentAddressPoolPrefix and userEquipmentStaticAddressPoolPrefix must be defined. If both are defined, they must be of the same size.
     */
    userEquipmentStaticAddressPoolPrefix?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The user plane interface on the data network. For 5G networks, this is the N6 interface. For 4G networks, this is the SGi interface.
     */
    userPlaneDataInterface: pulumi.Input<types.inputs.InterfacePropertiesArgs>;
}