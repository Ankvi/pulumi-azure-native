import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A Streaming Locator resource
 */
export class StreamingLocator extends pulumi.CustomResource {
    /**
     * Get an existing StreamingLocator resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): StreamingLocator {
        return new StreamingLocator(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:media/v20180330preview:StreamingLocator';

    /**
     * Returns true if the given object is an instance of StreamingLocator.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StreamingLocator {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StreamingLocator.__pulumiType;
    }

    /**
     * Asset Name
     */
    public readonly assetName!: pulumi.Output<string>;
    /**
     * ContentKeys used by this Streaming Locator
     */
    public readonly contentKeys!: pulumi.Output<types.outputs.StreamingLocatorUserDefinedContentKeyResponse[] | undefined>;
    /**
     * Creation time of Streaming Locator
     */
    public /*out*/ readonly created!: pulumi.Output<string>;
    /**
     * Default ContentKeyPolicy used by this Streaming Locator
     */
    public readonly defaultContentKeyPolicyName!: pulumi.Output<string | undefined>;
    /**
     * EndTime of Streaming Locator
     */
    public readonly endTime!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * StartTime of Streaming Locator
     */
    public readonly startTime!: pulumi.Output<string | undefined>;
    /**
     * StreamingLocatorId of Streaming Locator
     */
    public readonly streamingLocatorId!: pulumi.Output<string | undefined>;
    /**
     * Streaming policy name used by this streaming locator. Either specify the name of streaming policy you created or use one of the predefined streaming polices. The predefined streaming policies available are: 'Predefined_DownloadOnly', 'Predefined_ClearStreamingOnly', 'Predefined_DownloadAndClearStreaming', 'Predefined_ClearKey', 'Predefined_SecureStreaming' and 'Predefined_SecureStreamingWithFairPlay'
     */
    public readonly streamingPolicyName!: pulumi.Output<string>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a StreamingLocator resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StreamingLocatorArgs, opts?: pulumi.CustomResourceOptions) {
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
            if ((!args || args.streamingPolicyName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'streamingPolicyName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["assetName"] = args ? args.assetName : undefined;
            resourceInputs["contentKeys"] = args ? args.contentKeys : undefined;
            resourceInputs["defaultContentKeyPolicyName"] = args ? args.defaultContentKeyPolicyName : undefined;
            resourceInputs["endTime"] = args ? args.endTime : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["startTime"] = args ? args.startTime : undefined;
            resourceInputs["streamingLocatorId"] = args ? args.streamingLocatorId : undefined;
            resourceInputs["streamingLocatorName"] = args ? args.streamingLocatorName : undefined;
            resourceInputs["streamingPolicyName"] = args ? args.streamingPolicyName : undefined;
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["assetName"] = undefined /*out*/;
            resourceInputs["contentKeys"] = undefined /*out*/;
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["defaultContentKeyPolicyName"] = undefined /*out*/;
            resourceInputs["endTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["startTime"] = undefined /*out*/;
            resourceInputs["streamingLocatorId"] = undefined /*out*/;
            resourceInputs["streamingPolicyName"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:media:StreamingLocator" }, { type: "azure-native:media/v20180601preview:StreamingLocator" }, { type: "azure-native:media/v20180701:StreamingLocator" }, { type: "azure-native:media/v20200501:StreamingLocator" }, { type: "azure-native:media/v20210601:StreamingLocator" }, { type: "azure-native:media/v20211101:StreamingLocator" }, { type: "azure-native:media/v20220801:StreamingLocator" }, { type: "azure-native:media/v20230101:StreamingLocator" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(StreamingLocator.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a StreamingLocator resource.
 */
export interface StreamingLocatorArgs {
    /**
     * The Media Services account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * Asset Name
     */
    assetName: pulumi.Input<string>;
    /**
     * ContentKeys used by this Streaming Locator
     */
    contentKeys?: pulumi.Input<pulumi.Input<types.inputs.StreamingLocatorUserDefinedContentKeyArgs>[]>;
    /**
     * Default ContentKeyPolicy used by this Streaming Locator
     */
    defaultContentKeyPolicyName?: pulumi.Input<string>;
    /**
     * EndTime of Streaming Locator
     */
    endTime?: pulumi.Input<string>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * StartTime of Streaming Locator
     */
    startTime?: pulumi.Input<string>;
    /**
     * StreamingLocatorId of Streaming Locator
     */
    streamingLocatorId?: pulumi.Input<string>;
    /**
     * The Streaming Locator name.
     */
    streamingLocatorName?: pulumi.Input<string>;
    /**
     * Streaming policy name used by this streaming locator. Either specify the name of streaming policy you created or use one of the predefined streaming polices. The predefined streaming policies available are: 'Predefined_DownloadOnly', 'Predefined_ClearStreamingOnly', 'Predefined_DownloadAndClearStreaming', 'Predefined_ClearKey', 'Predefined_SecureStreaming' and 'Predefined_SecureStreamingWithFairPlay'
     */
    streamingPolicyName: pulumi.Input<string>;
}