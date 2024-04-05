import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A common class for general resource information.
 */
export class LocalNetworkGateway extends pulumi.CustomResource {
    /**
     * Get an existing LocalNetworkGateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): LocalNetworkGateway {
        return new LocalNetworkGateway(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20190801:LocalNetworkGateway';

    /**
     * Returns true if the given object is an instance of LocalNetworkGateway.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LocalNetworkGateway {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LocalNetworkGateway.__pulumiType;
    }

    /**
     * Local network gateway's BGP speaker settings.
     */
    public readonly bgpSettings!: pulumi.Output<types.outputs.BgpSettingsResponse | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * IP address of local network gateway.
     */
    public readonly gatewayIpAddress!: pulumi.Output<string | undefined>;
    /**
     * Local network site address space.
     */
    public readonly localNetworkAddressSpace!: pulumi.Output<types.outputs.AddressSpaceResponse | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the local network gateway resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The resource GUID property of the local network gateway resource.
     */
    public readonly resourceGuid!: pulumi.Output<string | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a LocalNetworkGateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LocalNetworkGatewayArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["bgpSettings"] = args ? args.bgpSettings : undefined;
            resourceInputs["gatewayIpAddress"] = args ? args.gatewayIpAddress : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["localNetworkAddressSpace"] = args ? args.localNetworkAddressSpace : undefined;
            resourceInputs["localNetworkGatewayName"] = args ? args.localNetworkGatewayName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceGuid"] = args ? args.resourceGuid : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["bgpSettings"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["gatewayIpAddress"] = undefined /*out*/;
            resourceInputs["localNetworkAddressSpace"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:LocalNetworkGateway" }, { type: "azure-native:network/v20150615:LocalNetworkGateway" }, { type: "azure-native:network/v20160330:LocalNetworkGateway" }, { type: "azure-native:network/v20160601:LocalNetworkGateway" }, { type: "azure-native:network/v20160901:LocalNetworkGateway" }, { type: "azure-native:network/v20161201:LocalNetworkGateway" }, { type: "azure-native:network/v20170301:LocalNetworkGateway" }, { type: "azure-native:network/v20170601:LocalNetworkGateway" }, { type: "azure-native:network/v20170801:LocalNetworkGateway" }, { type: "azure-native:network/v20170901:LocalNetworkGateway" }, { type: "azure-native:network/v20171001:LocalNetworkGateway" }, { type: "azure-native:network/v20171101:LocalNetworkGateway" }, { type: "azure-native:network/v20180101:LocalNetworkGateway" }, { type: "azure-native:network/v20180201:LocalNetworkGateway" }, { type: "azure-native:network/v20180401:LocalNetworkGateway" }, { type: "azure-native:network/v20180601:LocalNetworkGateway" }, { type: "azure-native:network/v20180701:LocalNetworkGateway" }, { type: "azure-native:network/v20180801:LocalNetworkGateway" }, { type: "azure-native:network/v20181001:LocalNetworkGateway" }, { type: "azure-native:network/v20181101:LocalNetworkGateway" }, { type: "azure-native:network/v20181201:LocalNetworkGateway" }, { type: "azure-native:network/v20190201:LocalNetworkGateway" }, { type: "azure-native:network/v20190401:LocalNetworkGateway" }, { type: "azure-native:network/v20190601:LocalNetworkGateway" }, { type: "azure-native:network/v20190701:LocalNetworkGateway" }, { type: "azure-native:network/v20190901:LocalNetworkGateway" }, { type: "azure-native:network/v20191101:LocalNetworkGateway" }, { type: "azure-native:network/v20191201:LocalNetworkGateway" }, { type: "azure-native:network/v20200301:LocalNetworkGateway" }, { type: "azure-native:network/v20200401:LocalNetworkGateway" }, { type: "azure-native:network/v20200501:LocalNetworkGateway" }, { type: "azure-native:network/v20200601:LocalNetworkGateway" }, { type: "azure-native:network/v20200701:LocalNetworkGateway" }, { type: "azure-native:network/v20200801:LocalNetworkGateway" }, { type: "azure-native:network/v20201101:LocalNetworkGateway" }, { type: "azure-native:network/v20210201:LocalNetworkGateway" }, { type: "azure-native:network/v20210301:LocalNetworkGateway" }, { type: "azure-native:network/v20210501:LocalNetworkGateway" }, { type: "azure-native:network/v20210801:LocalNetworkGateway" }, { type: "azure-native:network/v20220101:LocalNetworkGateway" }, { type: "azure-native:network/v20220501:LocalNetworkGateway" }, { type: "azure-native:network/v20220701:LocalNetworkGateway" }, { type: "azure-native:network/v20220901:LocalNetworkGateway" }, { type: "azure-native:network/v20221101:LocalNetworkGateway" }, { type: "azure-native:network/v20230201:LocalNetworkGateway" }, { type: "azure-native:network/v20230401:LocalNetworkGateway" }, { type: "azure-native:network/v20230501:LocalNetworkGateway" }, { type: "azure-native:network/v20230601:LocalNetworkGateway" }, { type: "azure-native:network/v20230901:LocalNetworkGateway" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(LocalNetworkGateway.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a LocalNetworkGateway resource.
 */
export interface LocalNetworkGatewayArgs {
    /**
     * Local network gateway's BGP speaker settings.
     */
    bgpSettings?: pulumi.Input<types.inputs.BgpSettingsArgs>;
    /**
     * IP address of local network gateway.
     */
    gatewayIpAddress?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Local network site address space.
     */
    localNetworkAddressSpace?: pulumi.Input<types.inputs.AddressSpaceArgs>;
    /**
     * The name of the local network gateway.
     */
    localNetworkGatewayName?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource GUID property of the local network gateway resource.
     */
    resourceGuid?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}