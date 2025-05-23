import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a video resource within Azure Video Analyzer. Videos can be ingested from RTSP cameras through live pipelines or can be created by exporting sequences from existing captured video through a pipeline job. Videos ingested through live pipelines can be streamed through Azure Video Analyzer Player Widget or compatible players. Exported videos can be downloaded as MP4 files.
 *
 * Uses Azure REST API version 2021-11-01-preview. In version 2.x of the Azure Native provider, it used API version 2021-11-01-preview.
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
    public static readonly __pulumiType = 'azure-native:videoanalyzer:Video';

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
     * Video archival properties.
     */
    public readonly archival!: pulumi.Output<types.outputs.VideoArchivalResponse | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Set of URLs to the video content.
     */
    public /*out*/ readonly contentUrls!: pulumi.Output<types.outputs.VideoContentUrlsResponse>;
    /**
     * Optional video description provided by the user. Value can be up to 2048 characters long.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Video flags contain information about the available video actions and its dynamic properties based on the current video state.
     */
    public /*out*/ readonly flags!: pulumi.Output<types.outputs.VideoFlagsResponse>;
    /**
     * Contains information about the video and audio content.
     */
    public readonly mediaInfo!: pulumi.Output<types.outputs.VideoMediaInfoResponse | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
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
            resourceInputs["archival"] = args ? args.archival : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["mediaInfo"] = args ? args.mediaInfo : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["title"] = args ? args.title : undefined;
            resourceInputs["videoName"] = args ? args.videoName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["contentUrls"] = undefined /*out*/;
            resourceInputs["flags"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["archival"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["contentUrls"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["flags"] = undefined /*out*/;
            resourceInputs["mediaInfo"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["title"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:videoanalyzer/v20210501preview:Video" }, { type: "azure-native:videoanalyzer/v20211101preview:Video" }] };
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
     * Video archival properties.
     */
    archival?: pulumi.Input<types.inputs.VideoArchivalArgs>;
    /**
     * Optional video description provided by the user. Value can be up to 2048 characters long.
     */
    description?: pulumi.Input<string>;
    /**
     * Contains information about the video and audio content.
     */
    mediaInfo?: pulumi.Input<types.inputs.VideoMediaInfoArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Optional video title provided by the user. Value can be up to 256 characters long.
     */
    title?: pulumi.Input<string>;
    /**
     * The Video name.
     */
    videoName?: pulumi.Input<string>;
}