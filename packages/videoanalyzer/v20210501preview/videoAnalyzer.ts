import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A Video Analyzer account.
 */
export class VideoAnalyzer extends pulumi.CustomResource {
    /**
     * Get an existing VideoAnalyzer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VideoAnalyzer {
        return new VideoAnalyzer(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:videoanalyzer/v20210501preview:VideoAnalyzer';

    /**
     * Returns true if the given object is an instance of VideoAnalyzer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VideoAnalyzer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VideoAnalyzer.__pulumiType;
    }

    /**
     * The account encryption properties.
     */
    public readonly encryption!: pulumi.Output<types.outputs.AccountEncryptionResponse>;
    /**
     * The list of endpoints associated with this resource.
     */
    public /*out*/ readonly endpoints!: pulumi.Output<types.outputs.EndpointResponse[]>;
    /**
     * The set of managed identities associated with the Video Analyzer resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.VideoAnalyzerIdentityResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The storage accounts for this resource.
     */
    public readonly storageAccounts!: pulumi.Output<types.outputs.StorageAccountResponse[]>;
    /**
     * The system data of the Video Analyzer account.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a VideoAnalyzer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VideoAnalyzerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.encryption === undefined) && !opts.urn) {
                throw new Error("Missing required property 'encryption'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.storageAccounts === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storageAccounts'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["encryption"] = args ? args.encryption : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["storageAccounts"] = args ? args.storageAccounts : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["endpoints"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["encryption"] = undefined /*out*/;
            resourceInputs["endpoints"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["storageAccounts"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:videoanalyzer:VideoAnalyzer" }, { type: "azure-native:videoanalyzer/v20211101preview:VideoAnalyzer" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VideoAnalyzer.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VideoAnalyzer resource.
 */
export interface VideoAnalyzerArgs {
    /**
     * The Video Analyzer account name.
     */
    accountName?: pulumi.Input<string>;
    /**
     * The account encryption properties.
     */
    encryption: pulumi.Input<types.inputs.AccountEncryptionArgs>;
    /**
     * The set of managed identities associated with the Video Analyzer resource.
     */
    identity?: pulumi.Input<types.inputs.VideoAnalyzerIdentityArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The storage accounts for this resource.
     */
    storageAccounts: pulumi.Input<pulumi.Input<types.inputs.StorageAccountArgs>[]>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
