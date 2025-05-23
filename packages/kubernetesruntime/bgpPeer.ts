import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A BgpPeer resource for an Arc connected cluster (Microsoft.Kubernetes/connectedClusters)
 *
 * Uses Azure REST API version 2024-03-01. In version 2.x of the Azure Native provider, it used API version 2024-03-01.
 */
export class BgpPeer extends pulumi.CustomResource {
    /**
     * Get an existing BgpPeer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BgpPeer {
        return new BgpPeer(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:kubernetesruntime:BgpPeer';

    /**
     * Returns true if the given object is an instance of BgpPeer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BgpPeer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BgpPeer.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * My ASN
     */
    public readonly myAsn!: pulumi.Output<number>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Peer Address
     */
    public readonly peerAddress!: pulumi.Output<string>;
    /**
     * Peer ASN
     */
    public readonly peerAsn!: pulumi.Output<number>;
    /**
     * Resource provision state
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a BgpPeer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BgpPeerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.myAsn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'myAsn'");
            }
            if ((!args || args.peerAddress === undefined) && !opts.urn) {
                throw new Error("Missing required property 'peerAddress'");
            }
            if ((!args || args.peerAsn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'peerAsn'");
            }
            if ((!args || args.resourceUri === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceUri'");
            }
            resourceInputs["bgpPeerName"] = args ? args.bgpPeerName : undefined;
            resourceInputs["myAsn"] = args ? args.myAsn : undefined;
            resourceInputs["peerAddress"] = args ? args.peerAddress : undefined;
            resourceInputs["peerAsn"] = args ? args.peerAsn : undefined;
            resourceInputs["resourceUri"] = args ? args.resourceUri : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["myAsn"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["peerAddress"] = undefined /*out*/;
            resourceInputs["peerAsn"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:kubernetesruntime/v20231001preview:BgpPeer" }, { type: "azure-native:kubernetesruntime/v20240301:BgpPeer" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(BgpPeer.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a BgpPeer resource.
 */
export interface BgpPeerArgs {
    /**
     * The name of the BgpPeer
     */
    bgpPeerName?: pulumi.Input<string>;
    /**
     * My ASN
     */
    myAsn: pulumi.Input<number>;
    /**
     * Peer Address
     */
    peerAddress: pulumi.Input<string>;
    /**
     * Peer ASN
     */
    peerAsn: pulumi.Input<number>;
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: pulumi.Input<string>;
}