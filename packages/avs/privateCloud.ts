import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A private cloud resource
 *
 * Uses Azure REST API version 2022-05-01. In version 1.x of the Azure Native provider, it used API version 2020-03-20.
 *
 * Other available API versions: 2023-03-01, 2023-09-01.
 */
export class PrivateCloud extends pulumi.CustomResource {
    /**
     * Get an existing PrivateCloud resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PrivateCloud {
        return new PrivateCloud(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:avs:PrivateCloud';

    /**
     * Returns true if the given object is an instance of PrivateCloud.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PrivateCloud {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PrivateCloud.__pulumiType;
    }

    /**
     * Properties describing how the cloud is distributed across availability zones
     */
    public readonly availability!: pulumi.Output<types.outputs.AvailabilityPropertiesResponse | undefined>;
    /**
     * An ExpressRoute Circuit
     */
    public /*out*/ readonly circuit!: pulumi.Output<types.outputs.CircuitResponse | undefined>;
    /**
     * Customer managed key encryption, can be enabled or disabled
     */
    public readonly encryption!: pulumi.Output<types.outputs.EncryptionResponse | undefined>;
    /**
     * The endpoints
     */
    public /*out*/ readonly endpoints!: pulumi.Output<types.outputs.EndpointsResponse>;
    /**
     * Array of cloud link IDs from other clouds that connect to this one
     */
    public /*out*/ readonly externalCloudLinks!: pulumi.Output<string[]>;
    /**
     * The identity of the private cloud, if configured.
     */
    public readonly identity!: pulumi.Output<types.outputs.PrivateCloudIdentityResponse | undefined>;
    /**
     * vCenter Single Sign On Identity Sources
     */
    public readonly identitySources!: pulumi.Output<types.outputs.IdentitySourceResponse[] | undefined>;
    /**
     * Connectivity to internet is enabled or disabled
     */
    public readonly internet!: pulumi.Output<string | undefined>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The default cluster used for management
     */
    public readonly managementCluster!: pulumi.Output<types.outputs.ManagementClusterResponse>;
    /**
     * Network used to access vCenter Server and NSX-T Manager
     */
    public /*out*/ readonly managementNetwork!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The block of addresses should be unique across VNet in your subscription as well as on-premise. Make sure the CIDR format is conformed to (A.B.C.D/X) where A,B,C,D are between 0 and 255, and X is between 0 and 22
     */
    public readonly networkBlock!: pulumi.Output<string>;
    /**
     * Flag to indicate whether the private cloud has the quota for provisioned NSX Public IP count raised from 64 to 1024
     */
    public /*out*/ readonly nsxPublicIpQuotaRaised!: pulumi.Output<string>;
    /**
     * Thumbprint of the NSX-T Manager SSL certificate
     */
    public /*out*/ readonly nsxtCertificateThumbprint!: pulumi.Output<string>;
    /**
     * Optionally, set the NSX-T Manager password when the private cloud is created
     */
    public readonly nsxtPassword!: pulumi.Output<string | undefined>;
    /**
     * Used for virtual machine cold migration, cloning, and snapshot migration
     */
    public /*out*/ readonly provisioningNetwork!: pulumi.Output<string>;
    /**
     * The provisioning state
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * A secondary expressRoute circuit from a separate AZ. Only present in a stretched private cloud
     */
    public /*out*/ readonly secondaryCircuit!: pulumi.Output<types.outputs.CircuitResponse | undefined>;
    /**
     * The private cloud SKU
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Thumbprint of the vCenter Server SSL certificate
     */
    public /*out*/ readonly vcenterCertificateThumbprint!: pulumi.Output<string>;
    /**
     * Optionally, set the vCenter admin password when the private cloud is created
     */
    public readonly vcenterPassword!: pulumi.Output<string | undefined>;
    /**
     * Used for live migration of virtual machines
     */
    public /*out*/ readonly vmotionNetwork!: pulumi.Output<string>;

    /**
     * Create a PrivateCloud resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrivateCloudArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.managementCluster === undefined) && !opts.urn) {
                throw new Error("Missing required property 'managementCluster'");
            }
            if ((!args || args.networkBlock === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkBlock'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sku'");
            }
            resourceInputs["availability"] = args ? args.availability : undefined;
            resourceInputs["encryption"] = args ? args.encryption : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["identitySources"] = args ? args.identitySources : undefined;
            resourceInputs["internet"] = (args ? args.internet : undefined) ?? "Disabled";
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["managementCluster"] = args ? args.managementCluster : undefined;
            resourceInputs["networkBlock"] = args ? args.networkBlock : undefined;
            resourceInputs["nsxtPassword"] = args ? args.nsxtPassword : undefined;
            resourceInputs["privateCloudName"] = args ? args.privateCloudName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vcenterPassword"] = args ? args.vcenterPassword : undefined;
            resourceInputs["circuit"] = undefined /*out*/;
            resourceInputs["endpoints"] = undefined /*out*/;
            resourceInputs["externalCloudLinks"] = undefined /*out*/;
            resourceInputs["managementNetwork"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nsxPublicIpQuotaRaised"] = undefined /*out*/;
            resourceInputs["nsxtCertificateThumbprint"] = undefined /*out*/;
            resourceInputs["provisioningNetwork"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["secondaryCircuit"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vcenterCertificateThumbprint"] = undefined /*out*/;
            resourceInputs["vmotionNetwork"] = undefined /*out*/;
        } else {
            resourceInputs["availability"] = undefined /*out*/;
            resourceInputs["circuit"] = undefined /*out*/;
            resourceInputs["encryption"] = undefined /*out*/;
            resourceInputs["endpoints"] = undefined /*out*/;
            resourceInputs["externalCloudLinks"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["identitySources"] = undefined /*out*/;
            resourceInputs["internet"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managementCluster"] = undefined /*out*/;
            resourceInputs["managementNetwork"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkBlock"] = undefined /*out*/;
            resourceInputs["nsxPublicIpQuotaRaised"] = undefined /*out*/;
            resourceInputs["nsxtCertificateThumbprint"] = undefined /*out*/;
            resourceInputs["nsxtPassword"] = undefined /*out*/;
            resourceInputs["provisioningNetwork"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["secondaryCircuit"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vcenterCertificateThumbprint"] = undefined /*out*/;
            resourceInputs["vcenterPassword"] = undefined /*out*/;
            resourceInputs["vmotionNetwork"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:avs/v20200320:PrivateCloud" }, { type: "azure-native:avs/v20200717preview:PrivateCloud" }, { type: "azure-native:avs/v20210101preview:PrivateCloud" }, { type: "azure-native:avs/v20210601:PrivateCloud" }, { type: "azure-native:avs/v20211201:PrivateCloud" }, { type: "azure-native:avs/v20220501:PrivateCloud" }, { type: "azure-native:avs/v20230301:PrivateCloud" }, { type: "azure-native:avs/v20230901:PrivateCloud" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PrivateCloud.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PrivateCloud resource.
 */
export interface PrivateCloudArgs {
    /**
     * Properties describing how the cloud is distributed across availability zones
     */
    availability?: pulumi.Input<types.inputs.AvailabilityPropertiesArgs>;
    /**
     * Customer managed key encryption, can be enabled or disabled
     */
    encryption?: pulumi.Input<types.inputs.EncryptionArgs>;
    /**
     * The identity of the private cloud, if configured.
     */
    identity?: pulumi.Input<types.inputs.PrivateCloudIdentityArgs>;
    /**
     * vCenter Single Sign On Identity Sources
     */
    identitySources?: pulumi.Input<pulumi.Input<types.inputs.IdentitySourceArgs>[]>;
    /**
     * Connectivity to internet is enabled or disabled
     */
    internet?: pulumi.Input<string | types.enums.InternetEnum>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * The default cluster used for management
     */
    managementCluster: pulumi.Input<types.inputs.ManagementClusterArgs>;
    /**
     * The block of addresses should be unique across VNet in your subscription as well as on-premise. Make sure the CIDR format is conformed to (A.B.C.D/X) where A,B,C,D are between 0 and 255, and X is between 0 and 22
     */
    networkBlock: pulumi.Input<string>;
    /**
     * Optionally, set the NSX-T Manager password when the private cloud is created
     */
    nsxtPassword?: pulumi.Input<string>;
    /**
     * Name of the private cloud
     */
    privateCloudName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The private cloud SKU
     */
    sku: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Optionally, set the vCenter admin password when the private cloud is created
     */
    vcenterPassword?: pulumi.Input<string>;
}