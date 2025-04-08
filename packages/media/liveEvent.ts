import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The live event.
 *
 * Uses Azure REST API version 2022-11-01. In version 2.x of the Azure Native provider, it used API version 2022-11-01.
 *
 * Other available API versions: 2018-03-30-preview, 2018-06-01-preview, 2018-07-01, 2019-05-01-preview, 2020-05-01, 2021-06-01, 2021-11-01, 2022-08-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native media [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class LiveEvent extends pulumi.CustomResource {
    /**
     * Get an existing LiveEvent resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): LiveEvent {
        return new LiveEvent(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:media:LiveEvent';

    /**
     * Returns true if the given object is an instance of LiveEvent.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LiveEvent {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LiveEvent.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The creation time for the live event
     */
    public /*out*/ readonly created!: pulumi.Output<string>;
    /**
     * Live event cross site access policies.
     */
    public readonly crossSiteAccessPolicies!: pulumi.Output<types.outputs.CrossSiteAccessPoliciesResponse | undefined>;
    /**
     * A description for the live event.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Encoding settings for the live event. It configures whether a live encoder is used for the live event and settings for the live encoder if it is used.
     */
    public readonly encoding!: pulumi.Output<types.outputs.LiveEventEncodingResponse | undefined>;
    /**
     * When useStaticHostname is set to true, the hostnamePrefix specifies the first part of the hostname assigned to the live event preview and ingest endpoints. The final hostname would be a combination of this prefix, the media service account name and a short code for the Azure Media Services data center.
     */
    public readonly hostnamePrefix!: pulumi.Output<string | undefined>;
    /**
     * Live event input settings. It defines how the live event receives input from a contribution encoder.
     */
    public readonly input!: pulumi.Output<types.outputs.LiveEventInputResponse>;
    /**
     * The last modified time of the live event.
     */
    public /*out*/ readonly lastModified!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Live event preview settings. Preview allows live event producers to preview the live streaming content without creating any live output.
     */
    public readonly preview!: pulumi.Output<types.outputs.LiveEventPreviewResponse | undefined>;
    /**
     * The provisioning state of the live event.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The resource state of the live event. See https://go.microsoft.com/fwlink/?linkid=2139012 for more information.
     */
    public /*out*/ readonly resourceState!: pulumi.Output<string>;
    /**
     * The options to use for the LiveEvent. This value is specified at creation time and cannot be updated. The valid values for the array entry values are 'Default' and 'LowLatency'.
     */
    public readonly streamOptions!: pulumi.Output<string[] | undefined>;
    /**
     * The system metadata relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Live transcription settings for the live event. See https://go.microsoft.com/fwlink/?linkid=2133742 for more information about the live transcription feature.
     */
    public readonly transcriptions!: pulumi.Output<types.outputs.LiveEventTranscriptionResponse[] | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Specifies whether a static hostname would be assigned to the live event preview and ingest endpoints. This value can only be updated if the live event is in Standby state
     */
    public readonly useStaticHostname!: pulumi.Output<boolean | undefined>;

    /**
     * Create a LiveEvent resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LiveEventArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.input === undefined) && !opts.urn) {
                throw new Error("Missing required property 'input'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["autoStart"] = args ? args.autoStart : undefined;
            resourceInputs["crossSiteAccessPolicies"] = args ? args.crossSiteAccessPolicies : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["encoding"] = args ? args.encoding : undefined;
            resourceInputs["hostnamePrefix"] = args ? args.hostnamePrefix : undefined;
            resourceInputs["input"] = args ? args.input : undefined;
            resourceInputs["liveEventName"] = args ? args.liveEventName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["preview"] = args ? args.preview : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["streamOptions"] = args ? args.streamOptions : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["transcriptions"] = args ? args.transcriptions : undefined;
            resourceInputs["useStaticHostname"] = args ? args.useStaticHostname : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["lastModified"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["crossSiteAccessPolicies"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["encoding"] = undefined /*out*/;
            resourceInputs["hostnamePrefix"] = undefined /*out*/;
            resourceInputs["input"] = undefined /*out*/;
            resourceInputs["lastModified"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["preview"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceState"] = undefined /*out*/;
            resourceInputs["streamOptions"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["transcriptions"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["useStaticHostname"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:media/v20180330preview:LiveEvent" }, { type: "azure-native:media/v20180601preview:LiveEvent" }, { type: "azure-native:media/v20180701:LiveEvent" }, { type: "azure-native:media/v20190501preview:LiveEvent" }, { type: "azure-native:media/v20200501:LiveEvent" }, { type: "azure-native:media/v20210601:LiveEvent" }, { type: "azure-native:media/v20211101:LiveEvent" }, { type: "azure-native:media/v20220801:LiveEvent" }, { type: "azure-native:media/v20221101:LiveEvent" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(LiveEvent.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a LiveEvent resource.
 */
export interface LiveEventArgs {
    /**
     * The Media Services account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The flag indicates if the resource should be automatically started on creation.
     */
    autoStart?: pulumi.Input<boolean>;
    /**
     * Live event cross site access policies.
     */
    crossSiteAccessPolicies?: pulumi.Input<types.inputs.CrossSiteAccessPoliciesArgs>;
    /**
     * A description for the live event.
     */
    description?: pulumi.Input<string>;
    /**
     * Encoding settings for the live event. It configures whether a live encoder is used for the live event and settings for the live encoder if it is used.
     */
    encoding?: pulumi.Input<types.inputs.LiveEventEncodingArgs>;
    /**
     * When useStaticHostname is set to true, the hostnamePrefix specifies the first part of the hostname assigned to the live event preview and ingest endpoints. The final hostname would be a combination of this prefix, the media service account name and a short code for the Azure Media Services data center.
     */
    hostnamePrefix?: pulumi.Input<string>;
    /**
     * Live event input settings. It defines how the live event receives input from a contribution encoder.
     */
    input: pulumi.Input<types.inputs.LiveEventInputArgs>;
    /**
     * The name of the live event, maximum length is 32.
     */
    liveEventName?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Live event preview settings. Preview allows live event producers to preview the live streaming content without creating any live output.
     */
    preview?: pulumi.Input<types.inputs.LiveEventPreviewArgs>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The options to use for the LiveEvent. This value is specified at creation time and cannot be updated. The valid values for the array entry values are 'Default' and 'LowLatency'.
     */
    streamOptions?: pulumi.Input<pulumi.Input<string | types.enums.StreamOptionsFlag>[]>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Live transcription settings for the live event. See https://go.microsoft.com/fwlink/?linkid=2133742 for more information about the live transcription feature.
     */
    transcriptions?: pulumi.Input<pulumi.Input<types.inputs.LiveEventTranscriptionArgs>[]>;
    /**
     * Specifies whether a static hostname would be assigned to the live event preview and ingest endpoints. This value can only be updated if the live event is in Standby state
     */
    useStaticHostname?: pulumi.Input<boolean>;
}