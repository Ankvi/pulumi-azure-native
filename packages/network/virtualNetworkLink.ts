import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Describes a link to virtual network for a Private DNS zone.
 *
 * Uses Azure REST API version 2020-06-01. In version 1.x of the Azure Native provider, it used API version 2020-06-01.
 *
 * Other available API versions: 2024-06-01.
 */
export class VirtualNetworkLink extends pulumi.CustomResource {
    /**
     * Get an existing VirtualNetworkLink resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualNetworkLink {
        return new VirtualNetworkLink(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:VirtualNetworkLink';

    /**
     * Returns true if the given object is an instance of VirtualNetworkLink.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualNetworkLink {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualNetworkLink.__pulumiType;
    }

    /**
     * The ETag of the virtual network link.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The Azure Region where the resource lives
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the resource. This is a read-only property and any attempt to set this value will be ignored.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Is auto-registration of virtual machine records in the virtual network in the Private DNS zone enabled?
     */
    public readonly registrationEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. Example - 'Microsoft.Network/privateDnsZones'.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The reference of the virtual network.
     */
    public readonly virtualNetwork!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;
    /**
     * The status of the virtual network link to the Private DNS zone. Possible values are 'InProgress' and 'Done'. This is a read-only property and any attempt to set this value will be ignored.
     */
    public /*out*/ readonly virtualNetworkLinkState!: pulumi.Output<string>;

    /**
     * Create a VirtualNetworkLink resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualNetworkLinkArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.privateZoneName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privateZoneName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["privateZoneName"] = args ? args.privateZoneName : undefined;
            resourceInputs["registrationEnabled"] = args ? args.registrationEnabled : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["virtualNetwork"] = args ? args.virtualNetwork : undefined;
            resourceInputs["virtualNetworkLinkName"] = args ? args.virtualNetworkLinkName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualNetworkLinkState"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["registrationEnabled"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualNetwork"] = undefined /*out*/;
            resourceInputs["virtualNetworkLinkState"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20180901:VirtualNetworkLink" }, { type: "azure-native:network/v20200101:VirtualNetworkLink" }, { type: "azure-native:network/v20200601:VirtualNetworkLink" }, { type: "azure-native:network/v20240601:VirtualNetworkLink" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VirtualNetworkLink.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualNetworkLink resource.
 */
export interface VirtualNetworkLinkArgs {
    /**
     * The Azure Region where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the Private DNS zone (without a terminating dot).
     */
    privateZoneName: pulumi.Input<string>;
    /**
     * Is auto-registration of virtual machine records in the virtual network in the Private DNS zone enabled?
     */
    registrationEnabled?: pulumi.Input<boolean>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The reference of the virtual network.
     */
    virtualNetwork?: pulumi.Input<types.inputs.SubResourceArgs>;
    /**
     * The name of the virtual network link.
     */
    virtualNetworkLinkName?: pulumi.Input<string>;
}