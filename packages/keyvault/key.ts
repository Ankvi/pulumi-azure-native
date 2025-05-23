import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The key resource.
 *
 * Uses Azure REST API version 2024-11-01. In version 2.x of the Azure Native provider, it used API version 2023-02-01.
 *
 * Other available API versions: 2023-02-01, 2023-07-01, 2024-04-01-preview, 2024-12-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native keyvault [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Key extends pulumi.CustomResource {
    /**
     * Get an existing Key resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Key {
        return new Key(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:keyvault:Key';

    /**
     * Returns true if the given object is an instance of Key.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Key {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Key.__pulumiType;
    }

    /**
     * The attributes of the key.
     */
    public /*out*/ readonly attributes!: pulumi.Output<types.outputs.KeyAttributesResponse | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The elliptic curve name. For valid values, see JsonWebKeyCurveName. Default for EC and EC-HSM keys is P-256
     */
    public /*out*/ readonly curveName!: pulumi.Output<string | undefined>;
    public /*out*/ readonly keyOps!: pulumi.Output<string[] | undefined>;
    /**
     * The key size in bits. For example: 2048, 3072, or 4096 for RSA. Default for RSA and RSA-HSM keys is 2048. Exception made for bring your own key (BYOK), key exchange keys default to 4096.
     */
    public /*out*/ readonly keySize!: pulumi.Output<number | undefined>;
    /**
     * The URI to retrieve the current version of the key.
     */
    public /*out*/ readonly keyUri!: pulumi.Output<string>;
    /**
     * The URI to retrieve the specific version of the key.
     */
    public /*out*/ readonly keyUriWithVersion!: pulumi.Output<string>;
    /**
     * The type of the key. For valid values, see JsonWebKeyType.
     */
    public /*out*/ readonly kty!: pulumi.Output<string | undefined>;
    /**
     * Azure location of the key vault resource.
     */
    public /*out*/ readonly location!: pulumi.Output<string>;
    /**
     * Name of the key vault resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Key release policy in response. It will be used for both output and input. Omitted if empty
     */
    public /*out*/ readonly releasePolicy!: pulumi.Output<types.outputs.KeyReleasePolicyResponse | undefined>;
    /**
     * Key rotation policy in response. It will be used for both output and input. Omitted if empty
     */
    public /*out*/ readonly rotationPolicy!: pulumi.Output<types.outputs.RotationPolicyResponse | undefined>;
    /**
     * Tags assigned to the key vault resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string}>;
    /**
     * Resource type of the key vault resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Key resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KeyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.properties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'properties'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.vaultName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vaultName'");
            }
            resourceInputs["keyName"] = args ? args.keyName : undefined;
            resourceInputs["properties"] = args ? (args.properties ? pulumi.output(args.properties).apply(types.inputs.keyPropertiesArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vaultName"] = args ? args.vaultName : undefined;
            resourceInputs["attributes"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["curveName"] = undefined /*out*/;
            resourceInputs["keyOps"] = undefined /*out*/;
            resourceInputs["keySize"] = undefined /*out*/;
            resourceInputs["keyUri"] = undefined /*out*/;
            resourceInputs["keyUriWithVersion"] = undefined /*out*/;
            resourceInputs["kty"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["releasePolicy"] = undefined /*out*/;
            resourceInputs["rotationPolicy"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["attributes"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["curveName"] = undefined /*out*/;
            resourceInputs["keyOps"] = undefined /*out*/;
            resourceInputs["keySize"] = undefined /*out*/;
            resourceInputs["keyUri"] = undefined /*out*/;
            resourceInputs["keyUriWithVersion"] = undefined /*out*/;
            resourceInputs["kty"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["releasePolicy"] = undefined /*out*/;
            resourceInputs["rotationPolicy"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:keyvault/v20190901:Key" }, { type: "azure-native:keyvault/v20200401preview:Key" }, { type: "azure-native:keyvault/v20210401preview:Key" }, { type: "azure-native:keyvault/v20210601preview:Key" }, { type: "azure-native:keyvault/v20211001:Key" }, { type: "azure-native:keyvault/v20211101preview:Key" }, { type: "azure-native:keyvault/v20220201preview:Key" }, { type: "azure-native:keyvault/v20220701:Key" }, { type: "azure-native:keyvault/v20221101:Key" }, { type: "azure-native:keyvault/v20230201:Key" }, { type: "azure-native:keyvault/v20230701:Key" }, { type: "azure-native:keyvault/v20240401preview:Key" }, { type: "azure-native:keyvault/v20241101:Key" }, { type: "azure-native:keyvault/v20241201preview:Key" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Key.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Key resource.
 */
export interface KeyArgs {
    /**
     * The name of the key to be created. The value you provide may be copied globally for the purpose of running the service. The value provided should not include personally identifiable or sensitive information.
     */
    keyName?: pulumi.Input<string>;
    /**
     * The properties of the key to be created.
     */
    properties: pulumi.Input<types.inputs.KeyPropertiesArgs>;
    /**
     * The name of the resource group which contains the specified key vault.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The tags that will be assigned to the key.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the key vault which contains the key to be created.
     */
    vaultName: pulumi.Input<string>;
}