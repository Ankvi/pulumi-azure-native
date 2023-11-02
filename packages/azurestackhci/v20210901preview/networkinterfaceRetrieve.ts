import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The network interface resource definition.
 */
export class NetworkinterfaceRetrieve extends pulumi.CustomResource {
    /**
     * Get an existing NetworkinterfaceRetrieve resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NetworkinterfaceRetrieve {
        return new NetworkinterfaceRetrieve(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:azurestackhci/v20210901preview:NetworkinterfaceRetrieve';

    /**
     * Returns true if the given object is an instance of NetworkinterfaceRetrieve.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkinterfaceRetrieve {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkinterfaceRetrieve.__pulumiType;
    }

    /**
     * DNS Settings for the interface
     */
    public readonly dnsSettings!: pulumi.Output<types.outputs.InterfaceDNSSettingsResponse | undefined>;
    /**
     * The extendedLocation of the resource.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse | undefined>;
    /**
     * IPConfigurations - A list of IPConfigurations of the network interface.
     */
    public readonly ipConfigurations!: pulumi.Output<types.outputs.IpConfigurationResponse[] | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * MacAddress - The MAC address of the network interface.
     */
    public readonly macAddress!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * name of the object to be used in moc
     */
    public readonly resourceName!: pulumi.Output<string | undefined>;
    /**
     * NetworkInterfaceStatus defines the observed state of network interfaces
     */
    public /*out*/ readonly status!: pulumi.Output<types.outputs.NetworkInterfaceStatusResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
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
     * Create a NetworkinterfaceRetrieve resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkinterfaceRetrieveArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["dnsSettings"] = args ? args.dnsSettings : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["ipConfigurations"] = args ? args.ipConfigurations : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["macAddress"] = args ? args.macAddress : undefined;
            resourceInputs["networkinterfacesName"] = args ? args.networkinterfacesName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["dnsSettings"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["ipConfigurations"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["macAddress"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceName"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:azurestackhci/v20210901preview:networkinterfaceRetrieve" }, { type: "azure-native:azurestackhci:NetworkinterfaceRetrieve" }, { type: "azure-native:azurestackhci:networkinterfaceRetrieve" }, { type: "azure-native:azurestackhci/v20210701preview:NetworkinterfaceRetrieve" }, { type: "azure-native:azurestackhci/v20210701preview:networkinterfaceRetrieve" }, { type: "azure-native:azurestackhci/v20221215preview:NetworkinterfaceRetrieve" }, { type: "azure-native:azurestackhci/v20221215preview:networkinterfaceRetrieve" }, { type: "azure-native:azurestackhci/v20230701preview:NetworkinterfaceRetrieve" }, { type: "azure-native:azurestackhci/v20230701preview:networkinterfaceRetrieve" }, { type: "azure-native:azurestackhci/v20230901preview:NetworkinterfaceRetrieve" }, { type: "azure-native:azurestackhci/v20230901preview:networkinterfaceRetrieve" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NetworkinterfaceRetrieve.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NetworkinterfaceRetrieve resource.
 */
export interface NetworkinterfaceRetrieveArgs {
    /**
     * DNS Settings for the interface
     */
    dnsSettings?: pulumi.Input<types.inputs.InterfaceDNSSettingsArgs>;
    /**
     * The extendedLocation of the resource.
     */
    extendedLocation?: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * IPConfigurations - A list of IPConfigurations of the network interface.
     */
    ipConfigurations?: pulumi.Input<pulumi.Input<types.inputs.IpConfigurationArgs>[]>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * MacAddress - The MAC address of the network interface.
     */
    macAddress?: pulumi.Input<string>;
    networkinterfacesName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * name of the object to be used in moc
     */
    resourceName?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
