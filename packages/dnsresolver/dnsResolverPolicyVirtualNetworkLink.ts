import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Describes a DNS resolver policy virtual network link.
 *
 * Uses Azure REST API version 2023-07-01-preview.
 */
export class DnsResolverPolicyVirtualNetworkLink extends pulumi.CustomResource {
    /**
     * Get an existing DnsResolverPolicyVirtualNetworkLink resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DnsResolverPolicyVirtualNetworkLink {
        return new DnsResolverPolicyVirtualNetworkLink(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:dnsresolver:DnsResolverPolicyVirtualNetworkLink';

    /**
     * Returns true if the given object is an instance of DnsResolverPolicyVirtualNetworkLink.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DnsResolverPolicyVirtualNetworkLink {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DnsResolverPolicyVirtualNetworkLink.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * ETag of the DNS resolver policy virtual network link.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The current provisioning state of the DNS resolver policy virtual network link. This is a read-only property and any attempt to set this value will be ignored.
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
     * The reference to the virtual network. This cannot be changed after creation.
     */
    public readonly virtualNetwork!: pulumi.Output<types.outputs.SubResourceResponse>;

    /**
     * Create a DnsResolverPolicyVirtualNetworkLink resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DnsResolverPolicyVirtualNetworkLinkArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.dnsResolverPolicyName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dnsResolverPolicyName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.virtualNetwork === undefined) && !opts.urn) {
                throw new Error("Missing required property 'virtualNetwork'");
            }
            resourceInputs["dnsResolverPolicyName"] = args ? args.dnsResolverPolicyName : undefined;
            resourceInputs["dnsResolverPolicyVirtualNetworkLinkName"] = args ? args.dnsResolverPolicyVirtualNetworkLinkName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["virtualNetwork"] = args ? args.virtualNetwork : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualNetwork"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:dnsresolver/v20230701preview:DnsResolverPolicyVirtualNetworkLink" }, { type: "azure-native:network/v20230701preview:DnsResolverPolicyVirtualNetworkLink" }, { type: "azure-native:network:DnsResolverPolicyVirtualNetworkLink" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DnsResolverPolicyVirtualNetworkLink.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DnsResolverPolicyVirtualNetworkLink resource.
 */
export interface DnsResolverPolicyVirtualNetworkLinkArgs {
    /**
     * The name of the DNS resolver policy.
     */
    dnsResolverPolicyName: pulumi.Input<string>;
    /**
     * The name of the DNS resolver policy virtual network link for the DNS resolver policy.
     */
    dnsResolverPolicyVirtualNetworkLinkName?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The reference to the virtual network. This cannot be changed after creation.
     */
    virtualNetwork: pulumi.Input<types.inputs.SubResourceArgs>;
}