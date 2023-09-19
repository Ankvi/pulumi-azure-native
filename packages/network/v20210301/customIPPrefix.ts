import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Custom IP prefix resource.
 */
export class CustomIPPrefix extends pulumi.CustomResource {
    /**
     * Get an existing CustomIPPrefix resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CustomIPPrefix {
        return new CustomIPPrefix(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20210301:CustomIPPrefix';

    /**
     * Returns true if the given object is an instance of CustomIPPrefix.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CustomIPPrefix {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CustomIPPrefix.__pulumiType;
    }

    /**
     * Authorization message for WAN validation.
     */
    public readonly authorizationMessage!: pulumi.Output<string | undefined>;
    /**
     * The list of all Children for IPv6 /48 CustomIpPrefix.
     */
    public /*out*/ readonly childCustomIpPrefixes!: pulumi.Output<types.outputs.CustomIpPrefixResponse[]>;
    /**
     * The prefix range in CIDR notation. Should include the start address and the prefix length.
     */
    public readonly cidr!: pulumi.Output<string | undefined>;
    /**
     * The commissioned state of the Custom IP Prefix.
     */
    public readonly commissionedState!: pulumi.Output<string | undefined>;
    /**
     * The Parent CustomIpPrefix for IPv6 /64 CustomIpPrefix.
     */
    public readonly customIpPrefixParent!: pulumi.Output<types.outputs.CustomIpPrefixResponse | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The extended location of the custom IP prefix.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse | undefined>;
    /**
     * The reason why resource is in failed state.
     */
    public /*out*/ readonly failedReason!: pulumi.Output<string>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the custom IP prefix resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The list of all referenced PublicIpPrefixes.
     */
    public /*out*/ readonly publicIpPrefixes!: pulumi.Output<types.outputs.SubResourceResponse[]>;
    /**
     * The resource GUID property of the custom IP prefix resource.
     */
    public /*out*/ readonly resourceGuid!: pulumi.Output<string>;
    /**
     * Signed message for WAN validation.
     */
    public readonly signedMessage!: pulumi.Output<string | undefined>;
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
     * Create a CustomIPPrefix resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CustomIPPrefixArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["authorizationMessage"] = args ? args.authorizationMessage : undefined;
            resourceInputs["cidr"] = args ? args.cidr : undefined;
            resourceInputs["commissionedState"] = args ? args.commissionedState : undefined;
            resourceInputs["customIpPrefixName"] = args ? args.customIpPrefixName : undefined;
            resourceInputs["customIpPrefixParent"] = args ? args.customIpPrefixParent : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["signedMessage"] = args ? args.signedMessage : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["zones"] = args ? args.zones : undefined;
            resourceInputs["childCustomIpPrefixes"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["failedReason"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicIpPrefixes"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["authorizationMessage"] = undefined /*out*/;
            resourceInputs["childCustomIpPrefixes"] = undefined /*out*/;
            resourceInputs["cidr"] = undefined /*out*/;
            resourceInputs["commissionedState"] = undefined /*out*/;
            resourceInputs["customIpPrefixParent"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["failedReason"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicIpPrefixes"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["signedMessage"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["zones"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:CustomIPPrefix" }, { type: "azure-native:network/v20200601:CustomIPPrefix" }, { type: "azure-native:network/v20200701:CustomIPPrefix" }, { type: "azure-native:network/v20200801:CustomIPPrefix" }, { type: "azure-native:network/v20201101:CustomIPPrefix" }, { type: "azure-native:network/v20210201:CustomIPPrefix" }, { type: "azure-native:network/v20210501:CustomIPPrefix" }, { type: "azure-native:network/v20210801:CustomIPPrefix" }, { type: "azure-native:network/v20220101:CustomIPPrefix" }, { type: "azure-native:network/v20220501:CustomIPPrefix" }, { type: "azure-native:network/v20220701:CustomIPPrefix" }, { type: "azure-native:network/v20220901:CustomIPPrefix" }, { type: "azure-native:network/v20221101:CustomIPPrefix" }, { type: "azure-native:network/v20230201:CustomIPPrefix" }, { type: "azure-native:network/v20230401:CustomIPPrefix" }, { type: "azure-native:network/v20230501:CustomIPPrefix" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(CustomIPPrefix.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a CustomIPPrefix resource.
 */
export interface CustomIPPrefixArgs {
    /**
     * Authorization message for WAN validation.
     */
    authorizationMessage?: pulumi.Input<string>;
    /**
     * The prefix range in CIDR notation. Should include the start address and the prefix length.
     */
    cidr?: pulumi.Input<string>;
    /**
     * The commissioned state of the Custom IP Prefix.
     */
    commissionedState?: pulumi.Input<string | types.enums.CommissionedState>;
    /**
     * The name of the custom IP prefix.
     */
    customIpPrefixName?: pulumi.Input<string>;
    /**
     * The Parent CustomIpPrefix for IPv6 /64 CustomIpPrefix.
     */
    customIpPrefixParent?: pulumi.Input<types.inputs.CustomIpPrefixArgs>;
    /**
     * The extended location of the custom IP prefix.
     */
    extendedLocation?: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Signed message for WAN validation.
     */
    signedMessage?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A list of availability zones denoting the IP allocated for the resource needs to come from.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}
