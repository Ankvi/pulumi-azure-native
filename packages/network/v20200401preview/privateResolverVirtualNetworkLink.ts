import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Describes a virtual network link.
 */
export class PrivateResolverVirtualNetworkLink extends pulumi.CustomResource {
    /**
     * Get an existing PrivateResolverVirtualNetworkLink resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PrivateResolverVirtualNetworkLink {
        return new PrivateResolverVirtualNetworkLink(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20200401preview:PrivateResolverVirtualNetworkLink';

    /**
     * Returns true if the given object is an instance of PrivateResolverVirtualNetworkLink.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PrivateResolverVirtualNetworkLink {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PrivateResolverVirtualNetworkLink.__pulumiType;
    }

    /**
     * ETag of the virtual network link.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Metadata attached to the virtual network link.
     */
    public readonly metadata!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The current provisioning state of the virtual network link. This is a read-only property and any attempt to set this value will be ignored.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The reference to the virtual network. This cannot be changed after creation.
     */
    public readonly virtualNetwork!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;

    /**
     * Create a PrivateResolverVirtualNetworkLink resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrivateResolverVirtualNetworkLinkArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.dnsForwardingRulesetName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dnsForwardingRulesetName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["dnsForwardingRulesetName"] = args ? args.dnsForwardingRulesetName : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["virtualNetwork"] = args ? args.virtualNetwork : undefined;
            resourceInputs["virtualNetworkLinkName"] = args ? args.virtualNetworkLinkName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualNetwork"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:PrivateResolverVirtualNetworkLink" }, { type: "azure-native:network/v20220701:PrivateResolverVirtualNetworkLink" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PrivateResolverVirtualNetworkLink.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PrivateResolverVirtualNetworkLink resource.
 */
export interface PrivateResolverVirtualNetworkLinkArgs {
    /**
     * The name of the DNS forwarding ruleset.
     */
    dnsForwardingRulesetName: pulumi.Input<string>;
    /**
     * Metadata attached to the virtual network link.
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The reference to the virtual network. This cannot be changed after creation.
     */
    virtualNetwork?: pulumi.Input<types.inputs.SubResourceArgs>;
    /**
     * The name of the virtual network link.
     */
    virtualNetworkLinkName?: pulumi.Input<string>;
}