import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Public IP prefix resource.
 */
export class PublicIPPrefix extends pulumi.CustomResource {
    /**
     * Get an existing PublicIPPrefix resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PublicIPPrefix {
        return new PublicIPPrefix(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20190601:PublicIPPrefix';

    /**
     * Returns true if the given object is an instance of PublicIPPrefix.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PublicIPPrefix {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PublicIPPrefix.__pulumiType;
    }

    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The allocated Prefix.
     */
    public readonly ipPrefix!: pulumi.Output<string | undefined>;
    /**
     * The list of tags associated with the public IP prefix.
     */
    public readonly ipTags!: pulumi.Output<types.outputs.IpTagResponse[] | undefined>;
    /**
     * The reference to load balancer frontend IP configuration associated with the public IP prefix.
     */
    public /*out*/ readonly loadBalancerFrontendIpConfiguration!: pulumi.Output<types.outputs.SubResourceResponse>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The Length of the Public IP Prefix.
     */
    public readonly prefixLength!: pulumi.Output<number | undefined>;
    /**
     * The provisioning state of the Public IP prefix resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    public readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * The public IP address version.
     */
    public readonly publicIPAddressVersion!: pulumi.Output<string | undefined>;
    /**
     * The list of all referenced PublicIPAddresses.
     */
    public readonly publicIPAddresses!: pulumi.Output<types.outputs.ReferencedPublicIpAddressResponse[] | undefined>;
    /**
     * The resource GUID property of the public IP prefix resource.
     */
    public readonly resourceGuid!: pulumi.Output<string | undefined>;
    /**
     * The public IP prefix SKU.
     */
    public readonly sku!: pulumi.Output<types.outputs.PublicIPPrefixSkuResponse | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * A list of availability zones denoting the IP allocated for the resource needs to come from.
     */
    public readonly zones!: pulumi.Output<string[] | undefined>;

    /**
     * Create a PublicIPPrefix resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PublicIPPrefixArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["ipPrefix"] = args ? args.ipPrefix : undefined;
            resourceInputs["ipTags"] = args ? args.ipTags : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["prefixLength"] = args ? args.prefixLength : undefined;
            resourceInputs["provisioningState"] = args ? args.provisioningState : undefined;
            resourceInputs["publicIPAddressVersion"] = args ? args.publicIPAddressVersion : undefined;
            resourceInputs["publicIPAddresses"] = args ? args.publicIPAddresses : undefined;
            resourceInputs["publicIpPrefixName"] = args ? args.publicIpPrefixName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceGuid"] = args ? args.resourceGuid : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["zones"] = args ? args.zones : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["loadBalancerFrontendIpConfiguration"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["ipPrefix"] = undefined /*out*/;
            resourceInputs["ipTags"] = undefined /*out*/;
            resourceInputs["loadBalancerFrontendIpConfiguration"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["prefixLength"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicIPAddressVersion"] = undefined /*out*/;
            resourceInputs["publicIPAddresses"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["zones"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:PublicIPPrefix" }, { type: "azure-native:network/v20180701:PublicIPPrefix" }, { type: "azure-native:network/v20180801:PublicIPPrefix" }, { type: "azure-native:network/v20181001:PublicIPPrefix" }, { type: "azure-native:network/v20181101:PublicIPPrefix" }, { type: "azure-native:network/v20181201:PublicIPPrefix" }, { type: "azure-native:network/v20190201:PublicIPPrefix" }, { type: "azure-native:network/v20190401:PublicIPPrefix" }, { type: "azure-native:network/v20190701:PublicIPPrefix" }, { type: "azure-native:network/v20190801:PublicIPPrefix" }, { type: "azure-native:network/v20190901:PublicIPPrefix" }, { type: "azure-native:network/v20191101:PublicIPPrefix" }, { type: "azure-native:network/v20191201:PublicIPPrefix" }, { type: "azure-native:network/v20200301:PublicIPPrefix" }, { type: "azure-native:network/v20200401:PublicIPPrefix" }, { type: "azure-native:network/v20200501:PublicIPPrefix" }, { type: "azure-native:network/v20200601:PublicIPPrefix" }, { type: "azure-native:network/v20200701:PublicIPPrefix" }, { type: "azure-native:network/v20200801:PublicIPPrefix" }, { type: "azure-native:network/v20201101:PublicIPPrefix" }, { type: "azure-native:network/v20210201:PublicIPPrefix" }, { type: "azure-native:network/v20210301:PublicIPPrefix" }, { type: "azure-native:network/v20210501:PublicIPPrefix" }, { type: "azure-native:network/v20210801:PublicIPPrefix" }, { type: "azure-native:network/v20220101:PublicIPPrefix" }, { type: "azure-native:network/v20220501:PublicIPPrefix" }, { type: "azure-native:network/v20220701:PublicIPPrefix" }, { type: "azure-native:network/v20220901:PublicIPPrefix" }, { type: "azure-native:network/v20221101:PublicIPPrefix" }, { type: "azure-native:network/v20230201:PublicIPPrefix" }, { type: "azure-native:network/v20230401:PublicIPPrefix" }, { type: "azure-native:network/v20230501:PublicIPPrefix" }, { type: "azure-native:network/v20230601:PublicIPPrefix" }, { type: "azure-native:network/v20230901:PublicIPPrefix" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PublicIPPrefix.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PublicIPPrefix resource.
 */
export interface PublicIPPrefixArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The allocated Prefix.
     */
    ipPrefix?: pulumi.Input<string>;
    /**
     * The list of tags associated with the public IP prefix.
     */
    ipTags?: pulumi.Input<pulumi.Input<types.inputs.IpTagArgs>[]>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The Length of the Public IP Prefix.
     */
    prefixLength?: pulumi.Input<number>;
    /**
     * The provisioning state of the Public IP prefix resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    provisioningState?: pulumi.Input<string>;
    /**
     * The public IP address version.
     */
    publicIPAddressVersion?: pulumi.Input<string | types.enums.IPVersion>;
    /**
     * The list of all referenced PublicIPAddresses.
     */
    publicIPAddresses?: pulumi.Input<pulumi.Input<types.inputs.ReferencedPublicIpAddressArgs>[]>;
    /**
     * The name of the public IP prefix.
     */
    publicIpPrefixName?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource GUID property of the public IP prefix resource.
     */
    resourceGuid?: pulumi.Input<string>;
    /**
     * The public IP prefix SKU.
     */
    sku?: pulumi.Input<types.inputs.PublicIPPrefixSkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A list of availability zones denoting the IP allocated for the resource needs to come from.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}