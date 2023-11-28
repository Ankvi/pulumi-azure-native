import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Virtual Appliance Site resource.
 */
export class VirtualHubBgpConnection extends pulumi.CustomResource {
    /**
     * Get an existing VirtualHubBgpConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualHubBgpConnection {
        return new VirtualHubBgpConnection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20230601:VirtualHubBgpConnection';

    /**
     * Returns true if the given object is an instance of VirtualHubBgpConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualHubBgpConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualHubBgpConnection.__pulumiType;
    }

    /**
     * The current state of the VirtualHub to Peer.
     */
    public /*out*/ readonly connectionState!: pulumi.Output<string>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The reference to the HubVirtualNetworkConnection resource.
     */
    public readonly hubVirtualNetworkConnection!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;
    /**
     * Name of the connection.
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
     * Connection type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a VirtualHubBgpConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualHubBgpConnectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.virtualHubName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'virtualHubName'");
            }
            resourceInputs["connectionName"] = args ? args.connectionName : undefined;
            resourceInputs["hubVirtualNetworkConnection"] = args ? args.hubVirtualNetworkConnection : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["peerAsn"] = args ? args.peerAsn : undefined;
            resourceInputs["peerIp"] = args ? args.peerIp : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["virtualHubName"] = args ? args.virtualHubName : undefined;
            resourceInputs["connectionState"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["connectionState"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["hubVirtualNetworkConnection"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["peerAsn"] = undefined /*out*/;
            resourceInputs["peerIp"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:VirtualHubBgpConnection" }, { type: "azure-native:network/v20200501:VirtualHubBgpConnection" }, { type: "azure-native:network/v20200601:VirtualHubBgpConnection" }, { type: "azure-native:network/v20200701:VirtualHubBgpConnection" }, { type: "azure-native:network/v20200801:VirtualHubBgpConnection" }, { type: "azure-native:network/v20201101:VirtualHubBgpConnection" }, { type: "azure-native:network/v20210201:VirtualHubBgpConnection" }, { type: "azure-native:network/v20210301:VirtualHubBgpConnection" }, { type: "azure-native:network/v20210501:VirtualHubBgpConnection" }, { type: "azure-native:network/v20210801:VirtualHubBgpConnection" }, { type: "azure-native:network/v20220101:VirtualHubBgpConnection" }, { type: "azure-native:network/v20220501:VirtualHubBgpConnection" }, { type: "azure-native:network/v20220701:VirtualHubBgpConnection" }, { type: "azure-native:network/v20220901:VirtualHubBgpConnection" }, { type: "azure-native:network/v20221101:VirtualHubBgpConnection" }, { type: "azure-native:network/v20230201:VirtualHubBgpConnection" }, { type: "azure-native:network/v20230401:VirtualHubBgpConnection" }, { type: "azure-native:network/v20230501:VirtualHubBgpConnection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VirtualHubBgpConnection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualHubBgpConnection resource.
 */
export interface VirtualHubBgpConnectionArgs {
    /**
     * The name of the connection.
     */
    connectionName?: pulumi.Input<string>;
    /**
     * The reference to the HubVirtualNetworkConnection resource.
     */
    hubVirtualNetworkConnection?: pulumi.Input<types.inputs.SubResourceArgs>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Name of the connection.
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
     * The resource group name of the VirtualHub.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the VirtualHub.
     */
    virtualHubName: pulumi.Input<string>;
}
