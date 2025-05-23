import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A Streaming Policy resource
 *
 * Uses Azure REST API version 2023-01-01. In version 2.x of the Azure Native provider, it used API version 2023-01-01.
 *
 * Other available API versions: 2018-03-30-preview, 2018-06-01-preview, 2018-07-01, 2020-05-01, 2021-06-01, 2021-11-01, 2022-08-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native media [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class StreamingPolicy extends pulumi.CustomResource {
    /**
     * Get an existing StreamingPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): StreamingPolicy {
        return new StreamingPolicy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:media:StreamingPolicy';

    /**
     * Returns true if the given object is an instance of StreamingPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StreamingPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StreamingPolicy.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Configuration of CommonEncryptionCbcs
     */
    public readonly commonEncryptionCbcs!: pulumi.Output<types.outputs.CommonEncryptionCbcsResponse | undefined>;
    /**
     * Configuration of CommonEncryptionCenc
     */
    public readonly commonEncryptionCenc!: pulumi.Output<types.outputs.CommonEncryptionCencResponse | undefined>;
    /**
     * Creation time of Streaming Policy
     */
    public /*out*/ readonly created!: pulumi.Output<string>;
    /**
     * Default ContentKey used by current Streaming Policy
     */
    public readonly defaultContentKeyPolicyName!: pulumi.Output<string | undefined>;
    /**
     * Configuration of EnvelopeEncryption
     */
    public readonly envelopeEncryption!: pulumi.Output<types.outputs.EnvelopeEncryptionResponse | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Configurations of NoEncryption
     */
    public readonly noEncryption!: pulumi.Output<types.outputs.NoEncryptionResponse | undefined>;
    /**
     * The system metadata relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a StreamingPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StreamingPolicyArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["commonEncryptionCbcs"] = args ? args.commonEncryptionCbcs : undefined;
            resourceInputs["commonEncryptionCenc"] = args ? args.commonEncryptionCenc : undefined;
            resourceInputs["defaultContentKeyPolicyName"] = args ? args.defaultContentKeyPolicyName : undefined;
            resourceInputs["envelopeEncryption"] = args ? args.envelopeEncryption : undefined;
            resourceInputs["noEncryption"] = args ? args.noEncryption : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["streamingPolicyName"] = args ? args.streamingPolicyName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["commonEncryptionCbcs"] = undefined /*out*/;
            resourceInputs["commonEncryptionCenc"] = undefined /*out*/;
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["defaultContentKeyPolicyName"] = undefined /*out*/;
            resourceInputs["envelopeEncryption"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["noEncryption"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:media/v20180330preview:StreamingPolicy" }, { type: "azure-native:media/v20180601preview:StreamingPolicy" }, { type: "azure-native:media/v20180701:StreamingPolicy" }, { type: "azure-native:media/v20200501:StreamingPolicy" }, { type: "azure-native:media/v20210601:StreamingPolicy" }, { type: "azure-native:media/v20211101:StreamingPolicy" }, { type: "azure-native:media/v20220801:StreamingPolicy" }, { type: "azure-native:media/v20230101:StreamingPolicy" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(StreamingPolicy.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a StreamingPolicy resource.
 */
export interface StreamingPolicyArgs {
    /**
     * The Media Services account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * Configuration of CommonEncryptionCbcs
     */
    commonEncryptionCbcs?: pulumi.Input<types.inputs.CommonEncryptionCbcsArgs>;
    /**
     * Configuration of CommonEncryptionCenc
     */
    commonEncryptionCenc?: pulumi.Input<types.inputs.CommonEncryptionCencArgs>;
    /**
     * Default ContentKey used by current Streaming Policy
     */
    defaultContentKeyPolicyName?: pulumi.Input<string>;
    /**
     * Configuration of EnvelopeEncryption
     */
    envelopeEncryption?: pulumi.Input<types.inputs.EnvelopeEncryptionArgs>;
    /**
     * Configurations of NoEncryption
     */
    noEncryption?: pulumi.Input<types.inputs.NoEncryptionArgs>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Streaming Policy name.
     */
    streamingPolicyName?: pulumi.Input<string>;
}