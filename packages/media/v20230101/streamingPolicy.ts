import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * A Streaming Policy resource
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
    public static readonly __pulumiType = 'azure-native:media/v20230101:StreamingPolicy';

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
     * Configuration of CommonEncryptionCbcs
     */
    public readonly commonEncryptionCbcs!: pulumi.Output<types.outputs.media.v20230101.CommonEncryptionCbcsResponse | undefined>;
    /**
     * Configuration of CommonEncryptionCenc
     */
    public readonly commonEncryptionCenc!: pulumi.Output<types.outputs.media.v20230101.CommonEncryptionCencResponse | undefined>;
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
    public readonly envelopeEncryption!: pulumi.Output<types.outputs.media.v20230101.EnvelopeEncryptionResponse | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Configurations of NoEncryption
     */
    public readonly noEncryption!: pulumi.Output<types.outputs.media.v20230101.NoEncryptionResponse | undefined>;
    /**
     * The system metadata relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.media.v20230101.SystemDataResponse>;
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
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
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
        const aliasOpts = { aliases: [{ type: "azure-native:media:StreamingPolicy" }, { type: "azure-native:media/v20180330preview:StreamingPolicy" }, { type: "azure-native:media/v20180601preview:StreamingPolicy" }, { type: "azure-native:media/v20180701:StreamingPolicy" }, { type: "azure-native:media/v20200501:StreamingPolicy" }, { type: "azure-native:media/v20210601:StreamingPolicy" }, { type: "azure-native:media/v20211101:StreamingPolicy" }, { type: "azure-native:media/v20220801:StreamingPolicy" }] };
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
    commonEncryptionCbcs?: pulumi.Input<types.inputs.media.v20230101.CommonEncryptionCbcsArgs>;
    /**
     * Configuration of CommonEncryptionCenc
     */
    commonEncryptionCenc?: pulumi.Input<types.inputs.media.v20230101.CommonEncryptionCencArgs>;
    /**
     * Default ContentKey used by current Streaming Policy
     */
    defaultContentKeyPolicyName?: pulumi.Input<string>;
    /**
     * Configuration of EnvelopeEncryption
     */
    envelopeEncryption?: pulumi.Input<types.inputs.media.v20230101.EnvelopeEncryptionArgs>;
    /**
     * Configurations of NoEncryption
     */
    noEncryption?: pulumi.Input<types.inputs.media.v20230101.NoEncryptionArgs>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Streaming Policy name.
     */
    streamingPolicyName?: pulumi.Input<string>;
}
