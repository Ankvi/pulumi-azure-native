import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Cognitive Services account is an Azure resource representing the provisioned account, it's type, location and SKU.
 *
 * Uses Azure REST API version 2024-10-01. In version 2.x of the Azure Native provider, it used API version 2023-05-01.
 *
 * Other available API versions: 2023-05-01, 2023-10-01-preview, 2024-04-01-preview, 2024-06-01-preview, 2025-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cognitiveservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Account extends pulumi.CustomResource {
    /**
     * Get an existing Account resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Account {
        return new Account(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:cognitiveservices:Account';

    /**
     * Returns true if the given object is an instance of Account.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Account {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Account.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Resource Etag.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Identity for the resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.IdentityResponse | undefined>;
    /**
     * The Kind of the resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Properties of Cognitive Services account.
     */
    public readonly properties!: pulumi.Output<types.outputs.AccountPropertiesResponse>;
    /**
     * The resource model definition representing SKU
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
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
     * Create a Account resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AccountArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["properties"] = args ? (args.properties ? pulumi.output(args.properties).apply(types.inputs.accountPropertiesArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:cognitiveservices/v20160201preview:Account" }, { type: "azure-native:cognitiveservices/v20170418:Account" }, { type: "azure-native:cognitiveservices/v20210430:Account" }, { type: "azure-native:cognitiveservices/v20211001:Account" }, { type: "azure-native:cognitiveservices/v20220301:Account" }, { type: "azure-native:cognitiveservices/v20221001:Account" }, { type: "azure-native:cognitiveservices/v20221201:Account" }, { type: "azure-native:cognitiveservices/v20230501:Account" }, { type: "azure-native:cognitiveservices/v20231001preview:Account" }, { type: "azure-native:cognitiveservices/v20240401preview:Account" }, { type: "azure-native:cognitiveservices/v20240601preview:Account" }, { type: "azure-native:cognitiveservices/v20241001:Account" }, { type: "azure-native:cognitiveservices/v20250401preview:Account" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Account.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Account resource.
 */
export interface AccountArgs {
    /**
     * The name of Cognitive Services account.
     */
    accountName?: pulumi.Input<string>;
    /**
     * Identity for the resource.
     */
    identity?: pulumi.Input<types.inputs.IdentityArgs>;
    /**
     * The Kind of the resource.
     */
    kind?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Properties of Cognitive Services account.
     */
    properties?: pulumi.Input<types.inputs.AccountPropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource model definition representing SKU
     */
    sku?: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}