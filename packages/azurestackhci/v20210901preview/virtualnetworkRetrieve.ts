import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The virtual network resource definition.
 */
export class VirtualnetworkRetrieve extends pulumi.CustomResource {
    /**
     * Get an existing VirtualnetworkRetrieve resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualnetworkRetrieve {
        return new VirtualnetworkRetrieve(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:azurestackhci/v20210901preview:VirtualnetworkRetrieve';

    /**
     * Returns true if the given object is an instance of VirtualnetworkRetrieve.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualnetworkRetrieve {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualnetworkRetrieve.__pulumiType;
    }

    /**
     * The extendedLocation of the resource.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Type of the network
     */
    public readonly networkType!: pulumi.Output<string | undefined>;
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * name of the object to be used in moc
     */
    public readonly resourceName!: pulumi.Output<string | undefined>;
    /**
     * VirtualNetworkStatus defines the observed state of virtual networks
     */
    public /*out*/ readonly status!: pulumi.Output<types.outputs.VirtualNetworkStatusResponse>;
    /**
     * Subnet - list of subnets under the virtual network
     */
    public readonly subnets!: pulumi.Output<types.outputs.VirtualnetworksPropertiesResponseSubnets[] | undefined>;
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
     * Create a VirtualnetworkRetrieve resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualnetworkRetrieveArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["networkType"] = args ? args.networkType : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["subnets"] = args ? args.subnets : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["virtualnetworksName"] = args ? args.virtualnetworksName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkType"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceName"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["subnets"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:azurestackhci/v20210901preview:virtualnetworkRetrieve" }, { type: "azure-native:azurestackhci:VirtualnetworkRetrieve" }, { type: "azure-native:azurestackhci:virtualnetworkRetrieve" }, { type: "azure-native:azurestackhci/v20210701preview:VirtualnetworkRetrieve" }, { type: "azure-native:azurestackhci/v20210701preview:virtualnetworkRetrieve" }, { type: "azure-native:azurestackhci/v20221215preview:VirtualnetworkRetrieve" }, { type: "azure-native:azurestackhci/v20221215preview:virtualnetworkRetrieve" }, { type: "azure-native:azurestackhci/v20230701preview:VirtualnetworkRetrieve" }, { type: "azure-native:azurestackhci/v20230701preview:virtualnetworkRetrieve" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VirtualnetworkRetrieve.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualnetworkRetrieve resource.
 */
export interface VirtualnetworkRetrieveArgs {
    /**
     * The extendedLocation of the resource.
     */
    extendedLocation?: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Type of the network
     */
    networkType?: pulumi.Input<string | types.enums.NetworkTypeEnum>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * name of the object to be used in moc
     */
    resourceName?: pulumi.Input<string>;
    /**
     * Subnet - list of subnets under the virtual network
     */
    subnets?: pulumi.Input<pulumi.Input<types.inputs.VirtualnetworksPropertiesSubnetsArgs>[]>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    virtualnetworksName?: pulumi.Input<string>;
}
