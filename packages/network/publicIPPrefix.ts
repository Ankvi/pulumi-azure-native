import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Public IP prefix resource.
 * Azure REST API version: 2023-02-01. Prior API version in Azure Native 1.x: 2020-11-01.
 *
 * Other available API versions: 2019-06-01, 2019-08-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01.
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
    public static readonly __pulumiType = 'azure-native:network:PublicIPPrefix';

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
     * The customIpPrefix that this prefix is associated with.
     */
    public readonly customIPPrefix!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The extended location of the public ip address.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse | undefined>;
    /**
     * The allocated Prefix.
     */
    public /*out*/ readonly ipPrefix!: pulumi.Output<string>;
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
     * NatGateway of Public IP Prefix.
     */
    public readonly natGateway!: pulumi.Output<types.outputs.NatGatewayResponse | undefined>;
    /**
     * The Length of the Public IP Prefix.
     */
    public readonly prefixLength!: pulumi.Output<number | undefined>;
    /**
     * The provisioning state of the public IP prefix resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The public IP address version.
     */
    public readonly publicIPAddressVersion!: pulumi.Output<string | undefined>;
    /**
     * The list of all referenced PublicIPAddresses.
     */
    public /*out*/ readonly publicIPAddresses!: pulumi.Output<types.outputs.ReferencedPublicIpAddressResponse[]>;
    /**
     * The resource GUID property of the public IP prefix resource.
     */
    public /*out*/ readonly resourceGuid!: pulumi.Output<string>;
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
            resourceInputs["customIPPrefix"] = args ? args.customIPPrefix : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["ipTags"] = args ? args.ipTags : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["natGateway"] = args ? args.natGateway : undefined;
            resourceInputs["prefixLength"] = args ? args.prefixLength : undefined;
            resourceInputs["publicIPAddressVersion"] = args ? args.publicIPAddressVersion : undefined;
            resourceInputs["publicIpPrefixName"] = args ? args.publicIpPrefixName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["zones"] = args ? args.zones : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["ipPrefix"] = undefined /*out*/;
            resourceInputs["loadBalancerFrontendIpConfiguration"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicIPAddresses"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["customIPPrefix"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["ipPrefix"] = undefined /*out*/;
            resourceInputs["ipTags"] = undefined /*out*/;
            resourceInputs["loadBalancerFrontendIpConfiguration"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["natGateway"] = undefined /*out*/;
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
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20180701:PublicIPPrefix" }, { type: "azure-native:network/v20180801:PublicIPPrefix" }, { type: "azure-native:network/v20181001:PublicIPPrefix" }, { type: "azure-native:network/v20181101:PublicIPPrefix" }, { type: "azure-native:network/v20181201:PublicIPPrefix" }, { type: "azure-native:network/v20190201:PublicIPPrefix" }, { type: "azure-native:network/v20190401:PublicIPPrefix" }, { type: "azure-native:network/v20190601:PublicIPPrefix" }, { type: "azure-native:network/v20190701:PublicIPPrefix" }, { type: "azure-native:network/v20190801:PublicIPPrefix" }, { type: "azure-native:network/v20190901:PublicIPPrefix" }, { type: "azure-native:network/v20191101:PublicIPPrefix" }, { type: "azure-native:network/v20191201:PublicIPPrefix" }, { type: "azure-native:network/v20200301:PublicIPPrefix" }, { type: "azure-native:network/v20200401:PublicIPPrefix" }, { type: "azure-native:network/v20200501:PublicIPPrefix" }, { type: "azure-native:network/v20200601:PublicIPPrefix" }, { type: "azure-native:network/v20200701:PublicIPPrefix" }, { type: "azure-native:network/v20200801:PublicIPPrefix" }, { type: "azure-native:network/v20201101:PublicIPPrefix" }, { type: "azure-native:network/v20210201:PublicIPPrefix" }, { type: "azure-native:network/v20210301:PublicIPPrefix" }, { type: "azure-native:network/v20210501:PublicIPPrefix" }, { type: "azure-native:network/v20210801:PublicIPPrefix" }, { type: "azure-native:network/v20220101:PublicIPPrefix" }, { type: "azure-native:network/v20220501:PublicIPPrefix" }, { type: "azure-native:network/v20220701:PublicIPPrefix" }, { type: "azure-native:network/v20220901:PublicIPPrefix" }, { type: "azure-native:network/v20221101:PublicIPPrefix" }, { type: "azure-native:network/v20230201:PublicIPPrefix" }, { type: "azure-native:network/v20230401:PublicIPPrefix" }, { type: "azure-native:network/v20230501:PublicIPPrefix" }, { type: "azure-native:network/v20230601:PublicIPPrefix" }, { type: "azure-native:network/v20230901:PublicIPPrefix" }, { type: "azure-native:network/v20231101:PublicIPPrefix" }, { type: "azure-native:network/v20240101:PublicIPPrefix" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PublicIPPrefix.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PublicIPPrefix resource.
 */
export interface PublicIPPrefixArgs {
    /**
     * The customIpPrefix that this prefix is associated with.
     */
    customIPPrefix?: pulumi.Input<types.inputs.SubResourceArgs>;
    /**
     * The extended location of the public ip address.
     */
    extendedLocation?: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The list of tags associated with the public IP prefix.
     */
    ipTags?: pulumi.Input<pulumi.Input<types.inputs.IpTagArgs>[]>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * NatGateway of Public IP Prefix.
     */
    natGateway?: pulumi.Input<types.inputs.NatGatewayArgs>;
    /**
     * The Length of the Public IP Prefix.
     */
    prefixLength?: pulumi.Input<number>;
    /**
     * The public IP address version.
     */
    publicIPAddressVersion?: pulumi.Input<string | types.enums.IPVersion>;
    /**
     * The name of the public IP prefix.
     */
    publicIpPrefixName?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
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