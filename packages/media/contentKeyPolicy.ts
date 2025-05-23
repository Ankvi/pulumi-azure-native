import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A Content Key Policy resource.
 *
 * Uses Azure REST API version 2023-01-01. In version 2.x of the Azure Native provider, it used API version 2023-01-01.
 *
 * Other available API versions: 2018-03-30-preview, 2018-06-01-preview, 2018-07-01, 2020-05-01, 2021-06-01, 2021-11-01, 2022-08-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native media [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class ContentKeyPolicy extends pulumi.CustomResource {
    /**
     * Get an existing ContentKeyPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ContentKeyPolicy {
        return new ContentKeyPolicy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:media:ContentKeyPolicy';

    /**
     * Returns true if the given object is an instance of ContentKeyPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ContentKeyPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ContentKeyPolicy.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The creation date of the Policy
     */
    public /*out*/ readonly created!: pulumi.Output<string>;
    /**
     * A description for the Policy.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The last modified date of the Policy
     */
    public /*out*/ readonly lastModified!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The Key Policy options.
     */
    public readonly options!: pulumi.Output<types.outputs.ContentKeyPolicyOptionResponse[]>;
    /**
     * The legacy Policy ID.
     */
    public /*out*/ readonly policyId!: pulumi.Output<string>;
    /**
     * The system metadata relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ContentKeyPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ContentKeyPolicyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.options === undefined) && !opts.urn) {
                throw new Error("Missing required property 'options'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["contentKeyPolicyName"] = args ? args.contentKeyPolicyName : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["options"] = args ? args.options : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["lastModified"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["policyId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["lastModified"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["options"] = undefined /*out*/;
            resourceInputs["policyId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:media/v20180330preview:ContentKeyPolicy" }, { type: "azure-native:media/v20180601preview:ContentKeyPolicy" }, { type: "azure-native:media/v20180701:ContentKeyPolicy" }, { type: "azure-native:media/v20200501:ContentKeyPolicy" }, { type: "azure-native:media/v20210601:ContentKeyPolicy" }, { type: "azure-native:media/v20211101:ContentKeyPolicy" }, { type: "azure-native:media/v20220801:ContentKeyPolicy" }, { type: "azure-native:media/v20230101:ContentKeyPolicy" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ContentKeyPolicy.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ContentKeyPolicy resource.
 */
export interface ContentKeyPolicyArgs {
    /**
     * The Media Services account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The Content Key Policy name.
     */
    contentKeyPolicyName?: pulumi.Input<string>;
    /**
     * A description for the Policy.
     */
    description?: pulumi.Input<string>;
    /**
     * The Key Policy options.
     */
    options: pulumi.Input<pulumi.Input<types.inputs.ContentKeyPolicyOptionArgs>[]>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}