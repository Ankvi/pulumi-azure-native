import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The essential information related to the peer's ASN.
 */
export class PeerAsn extends pulumi.CustomResource {
    /**
     * Get an existing PeerAsn resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PeerAsn {
        return new PeerAsn(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:peering/v20210101:PeerAsn';

    /**
     * Returns true if the given object is an instance of PeerAsn.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PeerAsn {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PeerAsn.__pulumiType;
    }

    /**
     * The error message for the validation state
     */
    public /*out*/ readonly errorMessage!: pulumi.Output<string>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The Autonomous System Number (ASN) of the peer.
     */
    public readonly peerAsn!: pulumi.Output<number | undefined>;
    /**
     * The contact details of the peer.
     */
    public readonly peerContactDetail!: pulumi.Output<types.outputs.ContactDetailResponse[] | undefined>;
    /**
     * The name of the peer.
     */
    public readonly peerName!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The validation state of the ASN associated with the peer.
     */
    public readonly validationState!: pulumi.Output<string | undefined>;

    /**
     * Create a PeerAsn resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: PeerAsnArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["peerAsn"] = args ? args.peerAsn : undefined;
            resourceInputs["peerAsnName"] = args ? args.peerAsnName : undefined;
            resourceInputs["peerContactDetail"] = args ? args.peerContactDetail : undefined;
            resourceInputs["peerName"] = args ? args.peerName : undefined;
            resourceInputs["validationState"] = args ? args.validationState : undefined;
            resourceInputs["errorMessage"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["errorMessage"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["peerAsn"] = undefined /*out*/;
            resourceInputs["peerContactDetail"] = undefined /*out*/;
            resourceInputs["peerName"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["validationState"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:peering:PeerAsn" }, { type: "azure-native:peering/v20190801preview:PeerAsn" }, { type: "azure-native:peering/v20190901preview:PeerAsn" }, { type: "azure-native:peering/v20200101preview:PeerAsn" }, { type: "azure-native:peering/v20200401:PeerAsn" }, { type: "azure-native:peering/v20201001:PeerAsn" }, { type: "azure-native:peering/v20210601:PeerAsn" }, { type: "azure-native:peering/v20220101:PeerAsn" }, { type: "azure-native:peering/v20220601:PeerAsn" }, { type: "azure-native:peering/v20221001:PeerAsn" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PeerAsn.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PeerAsn resource.
 */
export interface PeerAsnArgs {
    /**
     * The Autonomous System Number (ASN) of the peer.
     */
    peerAsn?: pulumi.Input<number>;
    /**
     * The peer ASN name.
     */
    peerAsnName?: pulumi.Input<string>;
    /**
     * The contact details of the peer.
     */
    peerContactDetail?: pulumi.Input<pulumi.Input<types.inputs.ContactDetailArgs>[]>;
    /**
     * The name of the peer.
     */
    peerName?: pulumi.Input<string>;
    /**
     * The validation state of the ASN associated with the peer.
     */
    validationState?: pulumi.Input<string | types.enums.ValidationState>;
}
