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
    public static readonly __pulumiType = 'azure-native:network/v20230501:NetworkVirtualAppliance';

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
     * Details required for Additional Network Interface.
     */
    public readonly additionalNics!: pulumi.Output<types.outputs.VirtualApplianceAdditionalNicPropertiesResponse[] | undefined>;
    /**
     * Address Prefix.
     */
    public /*out*/ readonly addressPrefix!: pulumi.Output<string>;
    /**
     * BootStrapConfigurationBlobs storage URLs.
     */
    public readonly bootStrapConfigurationBlobs!: pulumi.Output<string[] | undefined>;
    /**
     * CloudInitConfiguration string in plain text.
     */
    public readonly cloudInitConfiguration!: pulumi.Output<string | undefined>;
    /**
     * CloudInitConfigurationBlob storage URLs.
     */
    public readonly cloudInitConfigurationBlobs!: pulumi.Output<string[] | undefined>;
    /**
     * The delegation for the Virtual Appliance
     */
    public readonly delegation!: pulumi.Output<types.outputs.DelegationPropertiesResponse | undefined>;
    /**
     * The deployment type. PartnerManaged for the SaaS NVA
     */
    public /*out*/ readonly deploymentType!: pulumi.Output<string>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The service principal that has read access to cloud-init and config blob.
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedServiceIdentityResponse | undefined>;
    /**
     * List of references to InboundSecurityRules.
     */
    public /*out*/ readonly inboundSecurityRules!: pulumi.Output<types.outputs.SubResourceResponse[]>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Network Virtual Appliance SKU.
     */
    public readonly nvaSku!: pulumi.Output<types.outputs.VirtualApplianceSkuPropertiesResponse | undefined>;
    /**
     * The delegation for the Virtual Appliance
     */
    public /*out*/ readonly partnerManagedResource!: pulumi.Output<types.outputs.PartnerManagedResourcePropertiesResponse | undefined>;
    /**
     * The provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Public key for SSH login.
     */
    public readonly sshPublicKey!: pulumi.Output<string | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * VirtualAppliance ASN. Microsoft private, public and IANA reserved ASN are not supported.
     */
    public readonly virtualApplianceAsn!: pulumi.Output<number | undefined>;
    /**
     * List of references to VirtualApplianceConnections.
     */
    public /*out*/ readonly virtualApplianceConnections!: pulumi.Output<types.outputs.SubResourceResponse[]>;
    /**
     * List of Virtual Appliance Network Interfaces.
     */
    public /*out*/ readonly virtualApplianceNics!: pulumi.Output<types.outputs.VirtualApplianceNicPropertiesResponse[]>;
    /**
     * List of references to VirtualApplianceSite.
     */
    public /*out*/ readonly virtualApplianceSites!: pulumi.Output<types.outputs.SubResourceResponse[]>;
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
            resourceInputs["additionalNics"] = args ? args.additionalNics : undefined;
            resourceInputs["bootStrapConfigurationBlobs"] = args ? args.bootStrapConfigurationBlobs : undefined;
            resourceInputs["cloudInitConfiguration"] = args ? args.cloudInitConfiguration : undefined;
            resourceInputs["cloudInitConfigurationBlobs"] = args ? args.cloudInitConfigurationBlobs : undefined;
            resourceInputs["delegation"] = args ? args.delegation : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["networkVirtualApplianceName"] = args ? args.networkVirtualApplianceName : undefined;
            resourceInputs["nvaSku"] = args ? args.nvaSku : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sshPublicKey"] = args ? args.sshPublicKey : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["virtualApplianceAsn"] = args ? args.virtualApplianceAsn : undefined;
            resourceInputs["virtualHub"] = args ? args.virtualHub : undefined;
            resourceInputs["addressPrefix"] = undefined /*out*/;
            resourceInputs["deploymentType"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["inboundSecurityRules"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["partnerManagedResource"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualApplianceConnections"] = undefined /*out*/;
            resourceInputs["virtualApplianceNics"] = undefined /*out*/;
            resourceInputs["virtualApplianceSites"] = undefined /*out*/;
        } else {
            resourceInputs["additionalNics"] = undefined /*out*/;
            resourceInputs["addressPrefix"] = undefined /*out*/;
            resourceInputs["bootStrapConfigurationBlobs"] = undefined /*out*/;
            resourceInputs["cloudInitConfiguration"] = undefined /*out*/;
            resourceInputs["cloudInitConfigurationBlobs"] = undefined /*out*/;
            resourceInputs["delegation"] = undefined /*out*/;
            resourceInputs["deploymentType"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["inboundSecurityRules"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nvaSku"] = undefined /*out*/;
            resourceInputs["partnerManagedResource"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sshPublicKey"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualApplianceAsn"] = undefined /*out*/;
            resourceInputs["virtualApplianceConnections"] = undefined /*out*/;
            resourceInputs["virtualApplianceNics"] = undefined /*out*/;
            resourceInputs["virtualApplianceSites"] = undefined /*out*/;
            resourceInputs["virtualHub"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:NetworkVirtualAppliance" }, { type: "azure-native:network/v20191201:NetworkVirtualAppliance" }, { type: "azure-native:network/v20200301:NetworkVirtualAppliance" }, { type: "azure-native:network/v20200401:NetworkVirtualAppliance" }, { type: "azure-native:network/v20200501:NetworkVirtualAppliance" }, { type: "azure-native:network/v20200601:NetworkVirtualAppliance" }, { type: "azure-native:network/v20200701:NetworkVirtualAppliance" }, { type: "azure-native:network/v20200801:NetworkVirtualAppliance" }, { type: "azure-native:network/v20201101:NetworkVirtualAppliance" }, { type: "azure-native:network/v20210201:NetworkVirtualAppliance" }, { type: "azure-native:network/v20210301:NetworkVirtualAppliance" }, { type: "azure-native:network/v20210501:NetworkVirtualAppliance" }, { type: "azure-native:network/v20210801:NetworkVirtualAppliance" }, { type: "azure-native:network/v20220101:NetworkVirtualAppliance" }, { type: "azure-native:network/v20220501:NetworkVirtualAppliance" }, { type: "azure-native:network/v20220701:NetworkVirtualAppliance" }, { type: "azure-native:network/v20220901:NetworkVirtualAppliance" }, { type: "azure-native:network/v20221101:NetworkVirtualAppliance" }, { type: "azure-native:network/v20230201:NetworkVirtualAppliance" }, { type: "azure-native:network/v20230401:NetworkVirtualAppliance" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NetworkVirtualAppliance.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NetworkVirtualAppliance resource.
 */
export interface NetworkVirtualApplianceArgs {
    /**
     * Details required for Additional Network Interface.
     */
    additionalNics?: pulumi.Input<pulumi.Input<types.inputs.VirtualApplianceAdditionalNicPropertiesArgs>[]>;
    /**
     * BootStrapConfigurationBlobs storage URLs.
     */
    bootStrapConfigurationBlobs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * CloudInitConfiguration string in plain text.
     */
    cloudInitConfiguration?: pulumi.Input<string>;
    /**
     * CloudInitConfigurationBlob storage URLs.
     */
    cloudInitConfigurationBlobs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The delegation for the Virtual Appliance
     */
    delegation?: pulumi.Input<types.inputs.DelegationPropertiesArgs>;
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
     * Network Virtual Appliance SKU.
     */
    nvaSku?: pulumi.Input<types.inputs.VirtualApplianceSkuPropertiesArgs>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Public key for SSH login.
     */
    sshPublicKey?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * VirtualAppliance ASN. Microsoft private, public and IANA reserved ASN are not supported.
     */
    virtualApplianceAsn?: pulumi.Input<number>;
    /**
     * The Virtual Hub where Network Virtual Appliance is being deployed.
     */
    virtualHub?: pulumi.Input<types.inputs.SubResourceArgs>;
}
