import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An Asset Track resource.
 *
 * Uses Azure REST API version 2023-01-01. In version 1.x of the Azure Native provider, it used API version 2021-11-01.
 */
export class Track extends pulumi.CustomResource {
    /**
     * Get an existing Track resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Track {
        return new Track(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:media:Track';

    /**
     * Returns true if the given object is an instance of Track.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Track {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Track.__pulumiType;
    }

    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the asset track.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Detailed information about a track in the asset.
     */
    public readonly track!: pulumi.Output<types.outputs.AudioTrackResponse | types.outputs.TextTrackResponse | types.outputs.VideoTrackResponse | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Track resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TrackArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.assetName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'assetName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["assetName"] = args ? args.assetName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["track"] = args ? args.track : undefined;
            resourceInputs["trackName"] = args ? args.trackName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["track"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:media/v20211101:Track" }, { type: "azure-native:media/v20220801:Track" }, { type: "azure-native:media/v20230101:Track" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Track.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Track resource.
 */
export interface TrackArgs {
    /**
     * The Media Services account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The Asset name.
     */
    assetName: pulumi.Input<string>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Detailed information about a track in the asset.
     */
    track?: pulumi.Input<types.inputs.AudioTrackArgs | types.inputs.TextTrackArgs | types.inputs.VideoTrackArgs>;
    /**
     * The Asset Track name.
     */
    trackName?: pulumi.Input<string>;
}