import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Virtual Router Peering resource.
 *
 * Uses Azure REST API version 2024-05-01. In version 2.x of the Azure Native provider, it used API version 2023-02-01.
 *
 * Other available API versions: 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class VirtualRouterPeering extends pulumi.CustomResource {
    /**
     * Get an existing VirtualRouterPeering resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualRouterPeering {
        return new VirtualRouterPeering(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:VirtualRouterPeering';

    /**
     * Returns true if the given object is an instance of VirtualRouterPeering.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualRouterPeering {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualRouterPeering.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Name of the virtual router peering that is unique within a virtual router.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * Peer ASN.
     */
    public readonly peerAsn!: pulumi.Output<number | undefined>;
    /**
     * Peer IP.
     */
    public readonly peerIp!: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Peering type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a VirtualRouterPeering resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualRouterPeeringArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.virtualRouterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'virtualRouterName'");
            }
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["peerAsn"] = args ? args.peerAsn : undefined;
            resourceInputs["peerIp"] = args ? args.peerIp : undefined;
            resourceInputs["peeringName"] = args ? args.peeringName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["virtualRouterName"] = args ? args.virtualRouterName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["peerAsn"] = undefined /*out*/;
            resourceInputs["peerIp"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20190701:VirtualRouterPeering" }, { type: "azure-native:network/v20190801:VirtualRouterPeering" }, { type: "azure-native:network/v20190901:VirtualRouterPeering" }, { type: "azure-native:network/v20191101:VirtualRouterPeering" }, { type: "azure-native:network/v20191201:VirtualRouterPeering" }, { type: "azure-native:network/v20200301:VirtualRouterPeering" }, { type: "azure-native:network/v20200401:VirtualRouterPeering" }, { type: "azure-native:network/v20200501:VirtualRouterPeering" }, { type: "azure-native:network/v20200601:VirtualRouterPeering" }, { type: "azure-native:network/v20200701:VirtualRouterPeering" }, { type: "azure-native:network/v20200801:VirtualRouterPeering" }, { type: "azure-native:network/v20201101:VirtualRouterPeering" }, { type: "azure-native:network/v20210201:VirtualRouterPeering" }, { type: "azure-native:network/v20210301:VirtualRouterPeering" }, { type: "azure-native:network/v20210501:VirtualRouterPeering" }, { type: "azure-native:network/v20210801:VirtualRouterPeering" }, { type: "azure-native:network/v20220101:VirtualRouterPeering" }, { type: "azure-native:network/v20220501:VirtualRouterPeering" }, { type: "azure-native:network/v20220701:VirtualRouterPeering" }, { type: "azure-native:network/v20220901:VirtualRouterPeering" }, { type: "azure-native:network/v20221101:VirtualRouterPeering" }, { type: "azure-native:network/v20230201:VirtualRouterPeering" }, { type: "azure-native:network/v20230401:VirtualRouterPeering" }, { type: "azure-native:network/v20230501:VirtualRouterPeering" }, { type: "azure-native:network/v20230601:VirtualRouterPeering" }, { type: "azure-native:network/v20230901:VirtualRouterPeering" }, { type: "azure-native:network/v20231101:VirtualRouterPeering" }, { type: "azure-native:network/v20240101:VirtualRouterPeering" }, { type: "azure-native:network/v20240301:VirtualRouterPeering" }, { type: "azure-native:network/v20240501:VirtualRouterPeering" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VirtualRouterPeering.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualRouterPeering resource.
 */
export interface VirtualRouterPeeringArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Name of the virtual router peering that is unique within a virtual router.
     */
    name?: pulumi.Input<string>;
    /**
     * Peer ASN.
     */
    peerAsn?: pulumi.Input<number>;
    /**
     * Peer IP.
     */
    peerIp?: pulumi.Input<string>;
    /**
     * The name of the Virtual Router Peering.
     */
    peeringName?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Virtual Router.
     */
    virtualRouterName: pulumi.Input<string>;
}