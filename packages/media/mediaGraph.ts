import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Media Graph.
 *
 * Uses Azure REST API version 2020-02-01-preview. In version 1.x of the Azure Native provider, it used API version 2020-02-01-preview.
 */
export class MediaGraph extends pulumi.CustomResource {
    /**
     * Get an existing MediaGraph resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MediaGraph {
        return new MediaGraph(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:media:MediaGraph';

    /**
     * Returns true if the given object is an instance of MediaGraph.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MediaGraph {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MediaGraph.__pulumiType;
    }

    /**
     * Date the Media Graph was created.
     */
    public /*out*/ readonly created!: pulumi.Output<string>;
    /**
     * Media Graph description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Date the Media Graph was last modified.
     */
    public /*out*/ readonly lastModified!: pulumi.Output<string>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Media Graph sinks.
     */
    public readonly sinks!: pulumi.Output<types.outputs.MediaGraphAssetSinkResponse[]>;
    /**
     * Media Graph sources.
     */
    public readonly sources!: pulumi.Output<types.outputs.MediaGraphRtspSourceResponse[]>;
    /**
     * Media Graph state which indicates the resource allocation status for running the media graph pipeline.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a MediaGraph resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MediaGraphArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sinks === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sinks'");
            }
            if ((!args || args.sources === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sources'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["mediaGraphName"] = args ? args.mediaGraphName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sinks"] = args ? args.sinks : undefined;
            resourceInputs["sources"] = args ? args.sources : undefined;
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["lastModified"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["lastModified"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["sinks"] = undefined /*out*/;
            resourceInputs["sources"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:media/v20190901preview:MediaGraph" }, { type: "azure-native:media/v20200201preview:MediaGraph" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(MediaGraph.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a MediaGraph resource.
 */
export interface MediaGraphArgs {
    /**
     * The Media Services account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * Media Graph description.
     */
    description?: pulumi.Input<string>;
    /**
     * The Media Graph name.
     */
    mediaGraphName?: pulumi.Input<string>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Media Graph sinks.
     */
    sinks: pulumi.Input<pulumi.Input<types.inputs.MediaGraphAssetSinkArgs>[]>;
    /**
     * Media Graph sources.
     */
    sources: pulumi.Input<pulumi.Input<types.inputs.MediaGraphRtspSourceArgs>[]>;
}