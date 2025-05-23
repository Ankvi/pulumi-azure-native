import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Live Output.
 *
 * Uses Azure REST API version 2022-11-01. In version 2.x of the Azure Native provider, it used API version 2022-11-01.
 *
 * Other available API versions: 2018-03-30-preview, 2018-06-01-preview, 2018-07-01, 2019-05-01-preview, 2020-05-01, 2021-06-01, 2021-11-01, 2022-08-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native media [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class LiveOutput extends pulumi.CustomResource {
    /**
     * Get an existing LiveOutput resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): LiveOutput {
        return new LiveOutput(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:media:LiveOutput';

    /**
     * Returns true if the given object is an instance of LiveOutput.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LiveOutput {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LiveOutput.__pulumiType;
    }

    /**
     * ISO 8601 time between 1 minute to 25 hours to indicate the maximum content length that can be archived in the asset for this live output. This also sets the maximum content length for the rewind window. For example, use PT1H30M to indicate 1 hour and 30 minutes of archive window.
     */
    public readonly archiveWindowLength!: pulumi.Output<string>;
    /**
     * The asset that the live output will write to.
     */
    public readonly assetName!: pulumi.Output<string>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The creation time the live output.
     */
    public /*out*/ readonly created!: pulumi.Output<string>;
    /**
     * The description of the live output.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * HTTP Live Streaming (HLS) packing setting for the live output.
     */
    public readonly hls!: pulumi.Output<types.outputs.HlsResponse | undefined>;
    /**
     * The time the live output was last modified.
     */
    public /*out*/ readonly lastModified!: pulumi.Output<string>;
    /**
     * The manifest file name. If not provided, the service will generate one automatically.
     */
    public readonly manifestName!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The initial timestamp that the live output will start at, any content before this value will not be archived.
     */
    public readonly outputSnapTime!: pulumi.Output<number | undefined>;
    /**
     * The provisioning state of the live output.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The resource state of the live output.
     */
    public /*out*/ readonly resourceState!: pulumi.Output<string>;
    /**
     * ISO 8601 time between 1 minute to the duration of archiveWindowLength to control seek-able window length during Live. The service won't use this property once LiveOutput stops. The archived VOD will have full content with original ArchiveWindowLength. For example, use PT1H30M to indicate 1 hour and 30 minutes of rewind window length. Service will use implicit default value 30m only if Live Event enables LL.
     */
    public readonly rewindWindowLength!: pulumi.Output<string | undefined>;
    /**
     * The system metadata relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a LiveOutput resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LiveOutputArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.archiveWindowLength === undefined) && !opts.urn) {
                throw new Error("Missing required property 'archiveWindowLength'");
            }
            if ((!args || args.assetName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'assetName'");
            }
            if ((!args || args.liveEventName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'liveEventName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["archiveWindowLength"] = args ? args.archiveWindowLength : undefined;
            resourceInputs["assetName"] = args ? args.assetName : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["hls"] = args ? args.hls : undefined;
            resourceInputs["liveEventName"] = args ? args.liveEventName : undefined;
            resourceInputs["liveOutputName"] = args ? args.liveOutputName : undefined;
            resourceInputs["manifestName"] = args ? args.manifestName : undefined;
            resourceInputs["outputSnapTime"] = args ? args.outputSnapTime : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["rewindWindowLength"] = args ? args.rewindWindowLength : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["lastModified"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["archiveWindowLength"] = undefined /*out*/;
            resourceInputs["assetName"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["hls"] = undefined /*out*/;
            resourceInputs["lastModified"] = undefined /*out*/;
            resourceInputs["manifestName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["outputSnapTime"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceState"] = undefined /*out*/;
            resourceInputs["rewindWindowLength"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:media/v20180330preview:LiveOutput" }, { type: "azure-native:media/v20180601preview:LiveOutput" }, { type: "azure-native:media/v20180701:LiveOutput" }, { type: "azure-native:media/v20190501preview:LiveOutput" }, { type: "azure-native:media/v20200501:LiveOutput" }, { type: "azure-native:media/v20210601:LiveOutput" }, { type: "azure-native:media/v20211101:LiveOutput" }, { type: "azure-native:media/v20220801:LiveOutput" }, { type: "azure-native:media/v20221101:LiveOutput" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(LiveOutput.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a LiveOutput resource.
 */
export interface LiveOutputArgs {
    /**
     * The Media Services account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * ISO 8601 time between 1 minute to 25 hours to indicate the maximum content length that can be archived in the asset for this live output. This also sets the maximum content length for the rewind window. For example, use PT1H30M to indicate 1 hour and 30 minutes of archive window.
     */
    archiveWindowLength: pulumi.Input<string>;
    /**
     * The asset that the live output will write to.
     */
    assetName: pulumi.Input<string>;
    /**
     * The description of the live output.
     */
    description?: pulumi.Input<string>;
    /**
     * HTTP Live Streaming (HLS) packing setting for the live output.
     */
    hls?: pulumi.Input<types.inputs.HlsArgs>;
    /**
     * The name of the live event, maximum length is 32.
     */
    liveEventName: pulumi.Input<string>;
    /**
     * The name of the live output.
     */
    liveOutputName?: pulumi.Input<string>;
    /**
     * The manifest file name. If not provided, the service will generate one automatically.
     */
    manifestName?: pulumi.Input<string>;
    /**
     * The initial timestamp that the live output will start at, any content before this value will not be archived.
     */
    outputSnapTime?: pulumi.Input<number>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * ISO 8601 time between 1 minute to the duration of archiveWindowLength to control seek-able window length during Live. The service won't use this property once LiveOutput stops. The archived VOD will have full content with original ArchiveWindowLength. For example, use PT1H30M to indicate 1 hour and 30 minutes of rewind window length. Service will use implicit default value 30m only if Live Event enables LL.
     */
    rewindWindowLength?: pulumi.Input<string>;
}