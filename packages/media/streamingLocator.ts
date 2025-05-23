import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A Streaming Locator resource
 *
 * Uses Azure REST API version 2023-01-01. In version 2.x of the Azure Native provider, it used API version 2023-01-01.
 *
 * Other available API versions: 2018-03-30-preview, 2018-06-01-preview, 2018-07-01, 2020-05-01, 2021-06-01, 2021-11-01, 2022-08-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native media [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
    public static readonly __pulumiType = 'azure-native:media:StreamingLocator';

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
     * Alternative Media ID of this Streaming Locator
     */
    public readonly alternativeMediaId!: pulumi.Output<string | undefined>;
    /**
     * Asset Name
     */
    public readonly assetName!: pulumi.Output<string>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The ContentKeys used by this Streaming Locator.
     */
    public readonly contentKeys!: pulumi.Output<types.outputs.StreamingLocatorContentKeyResponse[] | undefined>;
    /**
     * The creation time of the Streaming Locator.
     */
    public /*out*/ readonly created!: pulumi.Output<string>;
    /**
     * Name of the default ContentKeyPolicy used by this Streaming Locator.
     */
    public readonly defaultContentKeyPolicyName!: pulumi.Output<string | undefined>;
    /**
     * The end time of the Streaming Locator.
     */
    public readonly endTime!: pulumi.Output<string | undefined>;
    /**
     * A list of asset or account filters which apply to this streaming locator
     */
    public readonly filters!: pulumi.Output<string[] | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The start time of the Streaming Locator.
     */
    public readonly startTime!: pulumi.Output<string | undefined>;
    /**
     * The StreamingLocatorId of the Streaming Locator.
     */
    public readonly streamingLocatorId!: pulumi.Output<string | undefined>;
    /**
     * Name of the Streaming Policy used by this Streaming Locator. Either specify the name of Streaming Policy you created or use one of the predefined Streaming Policies. The predefined Streaming Policies available are: 'Predefined_DownloadOnly', 'Predefined_ClearStreamingOnly', 'Predefined_DownloadAndClearStreaming', 'Predefined_ClearKey', 'Predefined_MultiDrmCencStreaming' and 'Predefined_MultiDrmStreaming'
     */
    public readonly streamingPolicyName!: pulumi.Output<string>;
    /**
     * The system metadata relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
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
            resourceInputs["alternativeMediaId"] = args ? args.alternativeMediaId : undefined;
            resourceInputs["assetName"] = args ? args.assetName : undefined;
            resourceInputs["contentKeys"] = args ? args.contentKeys : undefined;
            resourceInputs["defaultContentKeyPolicyName"] = args ? args.defaultContentKeyPolicyName : undefined;
            resourceInputs["endTime"] = args ? args.endTime : undefined;
            resourceInputs["filters"] = args ? args.filters : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["startTime"] = args ? args.startTime : undefined;
            resourceInputs["streamingLocatorId"] = args ? args.streamingLocatorId : undefined;
            resourceInputs["streamingLocatorName"] = args ? args.streamingLocatorName : undefined;
            resourceInputs["streamingPolicyName"] = args ? args.streamingPolicyName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["alternativeMediaId"] = undefined /*out*/;
            resourceInputs["assetName"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["contentKeys"] = undefined /*out*/;
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["defaultContentKeyPolicyName"] = undefined /*out*/;
            resourceInputs["endTime"] = undefined /*out*/;
            resourceInputs["filters"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["startTime"] = undefined /*out*/;
            resourceInputs["streamingLocatorId"] = undefined /*out*/;
            resourceInputs["streamingPolicyName"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:media/v20180330preview:StreamingLocator" }, { type: "azure-native:media/v20180601preview:StreamingLocator" }, { type: "azure-native:media/v20180701:StreamingLocator" }, { type: "azure-native:media/v20200501:StreamingLocator" }, { type: "azure-native:media/v20210601:StreamingLocator" }, { type: "azure-native:media/v20211101:StreamingLocator" }, { type: "azure-native:media/v20220801:StreamingLocator" }, { type: "azure-native:media/v20230101:StreamingLocator" }] };
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
     * Alternative Media ID of this Streaming Locator
     */
    alternativeMediaId?: pulumi.Input<string>;
    /**
     * Asset Name
     */
    assetName: pulumi.Input<string>;
    /**
     * The ContentKeys used by this Streaming Locator.
     */
    contentKeys?: pulumi.Input<pulumi.Input<types.inputs.StreamingLocatorContentKeyArgs>[]>;
    /**
     * Name of the default ContentKeyPolicy used by this Streaming Locator.
     */
    defaultContentKeyPolicyName?: pulumi.Input<string>;
    /**
     * The end time of the Streaming Locator.
     */
    endTime?: pulumi.Input<string>;
    /**
     * A list of asset or account filters which apply to this streaming locator
     */
    filters?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The start time of the Streaming Locator.
     */
    startTime?: pulumi.Input<string>;
    /**
     * The StreamingLocatorId of the Streaming Locator.
     */
    streamingLocatorId?: pulumi.Input<string>;
    /**
     * The Streaming Locator name.
     */
    streamingLocatorName?: pulumi.Input<string>;
    /**
     * Name of the Streaming Policy used by this Streaming Locator. Either specify the name of Streaming Policy you created or use one of the predefined Streaming Policies. The predefined Streaming Policies available are: 'Predefined_DownloadOnly', 'Predefined_ClearStreamingOnly', 'Predefined_DownloadAndClearStreaming', 'Predefined_ClearKey', 'Predefined_MultiDrmCencStreaming' and 'Predefined_MultiDrmStreaming'
     */
    streamingPolicyName: pulumi.Input<string>;
}