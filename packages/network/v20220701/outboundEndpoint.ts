import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Describes an outbound endpoint for a DNS resolver.
 */
export class OutboundEndpoint extends pulumi.CustomResource {
    /**
     * Get an existing OutboundEndpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): OutboundEndpoint {
        return new OutboundEndpoint(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20220701:OutboundEndpoint';

    /**
     * Returns true if the given object is an instance of OutboundEndpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OutboundEndpoint {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OutboundEndpoint.__pulumiType;
    }

    /**
     * ETag of the outbound endpoint.
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
     * The current provisioning state of the outbound endpoint. This is a read-only property and any attempt to set this value will be ignored.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The resourceGuid property of the outbound endpoint resource.
     */
    public /*out*/ readonly resourceGuid!: pulumi.Output<string>;
    /**
     * The reference to the subnet used for the outbound endpoint.
     */
    public readonly subnet!: pulumi.Output<types.outputs.network.v20220701.SubResourceResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.network.v20220701.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a OutboundEndpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OutboundEndpointArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.dnsResolverName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dnsResolverName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.subnet === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subnet'");
            }
            resourceInputs["dnsResolverName"] = args ? args.dnsResolverName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["outboundEndpointName"] = args ? args.outboundEndpointName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["subnet"] = args ? args.subnet : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["subnet"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:OutboundEndpoint" }, { type: "azure-native:network/v20200401preview:OutboundEndpoint" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(OutboundEndpoint.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a OutboundEndpoint resource.
 */
export interface OutboundEndpointArgs {
    /**
     * The name of the DNS resolver.
     */
    dnsResolverName: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the outbound endpoint for the DNS resolver.
     */
    outboundEndpointName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The reference to the subnet used for the outbound endpoint.
     */
    subnet: pulumi.Input<types.inputs.network.v20220701.SubResourceArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
