import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * The representation of a single video in a Video Analyzer account.
 */
export class Video extends pulumi.CustomResource {
    /**
     * Get an existing Video resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Video {
        return new Video(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:videoanalyzer/v20210501preview:Video';

    /**
     * Returns true if the given object is an instance of Video.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Video {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Video.__pulumiType;
    }

    /**
     * Optional video description provided by the user. Value can be up to 2048 characters long.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Video flags contain information about the available video actions and its dynamic properties based on the current video state.
     */
    public /*out*/ readonly flags!: pulumi.Output<types.outputs.videoanalyzer.v20210501preview.VideoFlagsResponse>;
    /**
     * Contains information about the video and audio content.
     */
    public /*out*/ readonly mediaInfo!: pulumi.Output<types.outputs.videoanalyzer.v20210501preview.VideoMediaInfoResponse>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Video streaming holds information about video streaming URLs.
     */
    public /*out*/ readonly streaming!: pulumi.Output<types.outputs.videoanalyzer.v20210501preview.VideoStreamingResponse>;
    /**
     * The system metadata relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.videoanalyzer.v20210501preview.SystemDataResponse>;
    /**
     * Optional video title provided by the user. Value can be up to 256 characters long.
     */
    public readonly title!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Video resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VideoArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["title"] = args ? args.title : undefined;
            resourceInputs["videoName"] = args ? args.videoName : undefined;
            resourceInputs["flags"] = undefined /*out*/;
            resourceInputs["mediaInfo"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["streaming"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["flags"] = undefined /*out*/;
            resourceInputs["mediaInfo"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["streaming"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["title"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:videoanalyzer:Video" }, { type: "azure-native:videoanalyzer/v20211101preview:Video" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Video.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Video resource.
 */
export interface VideoArgs {
    /**
     * The Azure Video Analyzer account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * Optional video description provided by the user. Value can be up to 2048 characters long.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Optional video title provided by the user. Value can be up to 256 characters long.
     */
    title?: pulumi.Input<string>;
    /**
     * The name of the video to create or update.
     */
    videoName?: pulumi.Input<string>;
}
