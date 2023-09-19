import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * NetworkVirtualAppliance Resource.
 */
export class NetworkVirtualAppliance extends pulumi.CustomResource {
    /**
     * Get an existing NetworkVirtualAppliance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NetworkVirtualAppliance {
        return new NetworkVirtualAppliance(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20200401:NetworkVirtualAppliance';

    /**
     * Returns true if the given object is an instance of NetworkVirtualAppliance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkVirtualAppliance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkVirtualAppliance.__pulumiType;
    }

    /**
     * BootStrapConfigurationBlob storage URLs.
     */
    public readonly bootStrapConfigurationBlob!: pulumi.Output<string[] | undefined>;
    /**
     * CloudInitConfigurationBlob storage URLs.
     */
    public readonly cloudInitConfigurationBlob!: pulumi.Output<string[] | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The service principal that has read access to cloud-init and config blob.
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedServiceIdentityResponse | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Network Virtual Appliance SKU.
     */
    public readonly sku!: pulumi.Output<types.outputs.VirtualApplianceSkuPropertiesResponse | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * VirtualAppliance ASN.
     */
    public readonly virtualApplianceAsn!: pulumi.Output<number | undefined>;
    /**
     * List of Virtual Appliance Network Interfaces.
     */
    public /*out*/ readonly virtualApplianceNics!: pulumi.Output<types.outputs.VirtualApplianceNicPropertiesResponse[]>;
    /**
     * The Virtual Hub where Network Virtual Appliance is being deployed.
     */
    public readonly virtualHub!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;

    /**
     * Create a NetworkVirtualAppliance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkVirtualApplianceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["bootStrapConfigurationBlob"] = args ? args.bootStrapConfigurationBlob : undefined;
            resourceInputs["cloudInitConfigurationBlob"] = args ? args.cloudInitConfigurationBlob : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["networkVirtualApplianceName"] = args ? args.networkVirtualApplianceName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["virtualApplianceAsn"] = args ? args.virtualApplianceAsn : undefined;
            resourceInputs["virtualHub"] = args ? args.virtualHub : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualApplianceNics"] = undefined /*out*/;
        } else {
            resourceInputs["bootStrapConfigurationBlob"] = undefined /*out*/;
            resourceInputs["cloudInitConfigurationBlob"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualApplianceAsn"] = undefined /*out*/;
            resourceInputs["virtualApplianceNics"] = undefined /*out*/;
            resourceInputs["virtualHub"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:NetworkVirtualAppliance" }, { type: "azure-native:network/v20191201:NetworkVirtualAppliance" }, { type: "azure-native:network/v20200301:NetworkVirtualAppliance" }, { type: "azure-native:network/v20200501:NetworkVirtualAppliance" }, { type: "azure-native:network/v20200601:NetworkVirtualAppliance" }, { type: "azure-native:network/v20200701:NetworkVirtualAppliance" }, { type: "azure-native:network/v20200801:NetworkVirtualAppliance" }, { type: "azure-native:network/v20201101:NetworkVirtualAppliance" }, { type: "azure-native:network/v20210201:NetworkVirtualAppliance" }, { type: "azure-native:network/v20210301:NetworkVirtualAppliance" }, { type: "azure-native:network/v20210501:NetworkVirtualAppliance" }, { type: "azure-native:network/v20210801:NetworkVirtualAppliance" }, { type: "azure-native:network/v20220101:NetworkVirtualAppliance" }, { type: "azure-native:network/v20220501:NetworkVirtualAppliance" }, { type: "azure-native:network/v20220701:NetworkVirtualAppliance" }, { type: "azure-native:network/v20220901:NetworkVirtualAppliance" }, { type: "azure-native:network/v20221101:NetworkVirtualAppliance" }, { type: "azure-native:network/v20230201:NetworkVirtualAppliance" }, { type: "azure-native:network/v20230401:NetworkVirtualAppliance" }, { type: "azure-native:network/v20230501:NetworkVirtualAppliance" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NetworkVirtualAppliance.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NetworkVirtualAppliance resource.
 */
export interface NetworkVirtualApplianceArgs {
    /**
     * BootStrapConfigurationBlob storage URLs.
     */
    bootStrapConfigurationBlob?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * CloudInitConfigurationBlob storage URLs.
     */
    cloudInitConfigurationBlob?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The service principal that has read access to cloud-init and config blob.
     */
    identity?: pulumi.Input<types.inputs.ManagedServiceIdentityArgs>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of Network Virtual Appliance.
     */
    networkVirtualApplianceName?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Network Virtual Appliance SKU.
     */
    sku?: pulumi.Input<types.inputs.VirtualApplianceSkuPropertiesArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * VirtualAppliance ASN.
     */
    virtualApplianceAsn?: pulumi.Input<number>;
    /**
     * The Virtual Hub where Network Virtual Appliance is being deployed.
     */
    virtualHub?: pulumi.Input<types.inputs.SubResourceArgs>;
}
