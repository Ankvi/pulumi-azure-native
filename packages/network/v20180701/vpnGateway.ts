import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * VpnGateway Resource.
 */
export class VpnGateway extends pulumi.CustomResource {
    /**
     * Get an existing VpnGateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VpnGateway {
        return new VpnGateway(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20180701:VpnGateway';

    /**
     * Returns true if the given object is an instance of VpnGateway.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VpnGateway {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VpnGateway.__pulumiType;
    }

    /**
     * Local network gateway's BGP speaker settings.
     */
    public readonly bgpSettings!: pulumi.Output<types.outputs.BgpSettingsResponse | undefined>;
    /**
     * list of all vpn connections to the gateway.
     */
    public readonly connections!: pulumi.Output<types.outputs.VpnConnectionResponse[] | undefined>;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The policies applied to this vpn gateway.
     */
    public readonly policies!: pulumi.Output<types.outputs.PoliciesResponse | undefined>;
    /**
     * The provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The VirtualHub to which the gateway belongs
     */
    public readonly virtualHub!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;

    /**
     * Create a VpnGateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VpnGatewayArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["bgpSettings"] = args ? args.bgpSettings : undefined;
            resourceInputs["connections"] = args ? args.connections : undefined;
            resourceInputs["gatewayName"] = args ? args.gatewayName : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["policies"] = args ? args.policies : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["virtualHub"] = args ? args.virtualHub : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["bgpSettings"] = undefined /*out*/;
            resourceInputs["connections"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["policies"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualHub"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:VpnGateway" }, { type: "azure-native:network/v20180401:VpnGateway" }, { type: "azure-native:network/v20180601:VpnGateway" }, { type: "azure-native:network/v20180801:VpnGateway" }, { type: "azure-native:network/v20181001:VpnGateway" }, { type: "azure-native:network/v20181101:VpnGateway" }, { type: "azure-native:network/v20181201:VpnGateway" }, { type: "azure-native:network/v20190201:VpnGateway" }, { type: "azure-native:network/v20190401:VpnGateway" }, { type: "azure-native:network/v20190601:VpnGateway" }, { type: "azure-native:network/v20190701:VpnGateway" }, { type: "azure-native:network/v20190801:VpnGateway" }, { type: "azure-native:network/v20190901:VpnGateway" }, { type: "azure-native:network/v20191101:VpnGateway" }, { type: "azure-native:network/v20191201:VpnGateway" }, { type: "azure-native:network/v20200301:VpnGateway" }, { type: "azure-native:network/v20200401:VpnGateway" }, { type: "azure-native:network/v20200501:VpnGateway" }, { type: "azure-native:network/v20200601:VpnGateway" }, { type: "azure-native:network/v20200701:VpnGateway" }, { type: "azure-native:network/v20200801:VpnGateway" }, { type: "azure-native:network/v20201101:VpnGateway" }, { type: "azure-native:network/v20210201:VpnGateway" }, { type: "azure-native:network/v20210301:VpnGateway" }, { type: "azure-native:network/v20210501:VpnGateway" }, { type: "azure-native:network/v20210801:VpnGateway" }, { type: "azure-native:network/v20220101:VpnGateway" }, { type: "azure-native:network/v20220501:VpnGateway" }, { type: "azure-native:network/v20220701:VpnGateway" }, { type: "azure-native:network/v20220901:VpnGateway" }, { type: "azure-native:network/v20221101:VpnGateway" }, { type: "azure-native:network/v20230201:VpnGateway" }, { type: "azure-native:network/v20230401:VpnGateway" }, { type: "azure-native:network/v20230501:VpnGateway" }, { type: "azure-native:network/v20230601:VpnGateway" }, { type: "azure-native:network/v20230901:VpnGateway" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VpnGateway.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VpnGateway resource.
 */
export interface VpnGatewayArgs {
    /**
     * Local network gateway's BGP speaker settings.
     */
    bgpSettings?: pulumi.Input<types.inputs.BgpSettingsArgs>;
    /**
     * list of all vpn connections to the gateway.
     * These are also available as standalone resources. Do not mix inline and standalone resource as they will conflict with each other, leading to resources deletion.
     */
    connections?: pulumi.Input<pulumi.Input<types.inputs.VpnConnectionArgs>[]>;
    /**
     * The name of the gateway.
     */
    gatewayName?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The policies applied to this vpn gateway.
     */
    policies?: pulumi.Input<types.inputs.PoliciesArgs>;
    /**
     * The resource group name of the VpnGateway.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The VirtualHub to which the gateway belongs
     */
    virtualHub?: pulumi.Input<types.inputs.SubResourceArgs>;
}