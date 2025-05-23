import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Resource information with extended details.
 *
 * Uses Azure REST API version 2024-11-01. In version 2.x of the Azure Native provider, it used API version 2023-02-01.
 *
 * Other available API versions: 2023-02-01, 2023-07-01, 2024-04-01-preview, 2024-12-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native keyvault [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Secret extends pulumi.CustomResource {
    /**
     * Get an existing Secret resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Secret {
        return new Secret(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:keyvault:Secret';

    /**
     * Returns true if the given object is an instance of Secret.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Secret {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Secret.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Azure location of the key vault resource.
     */
    public /*out*/ readonly location!: pulumi.Output<string>;
    /**
     * Name of the key vault resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Properties of the secret
     */
    public readonly properties!: pulumi.Output<types.outputs.SecretPropertiesResponse>;
    /**
     * Tags assigned to the key vault resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string}>;
    /**
     * Resource type of the key vault resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Secret resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecretArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["secretName"] = args ? args.secretName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vaultName"] = args ? args.vaultName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:keyvault/v20161001:Secret" }, { type: "azure-native:keyvault/v20180214:Secret" }, { type: "azure-native:keyvault/v20180214preview:Secret" }, { type: "azure-native:keyvault/v20190901:Secret" }, { type: "azure-native:keyvault/v20200401preview:Secret" }, { type: "azure-native:keyvault/v20210401preview:Secret" }, { type: "azure-native:keyvault/v20210601preview:Secret" }, { type: "azure-native:keyvault/v20211001:Secret" }, { type: "azure-native:keyvault/v20211101preview:Secret" }, { type: "azure-native:keyvault/v20220201preview:Secret" }, { type: "azure-native:keyvault/v20220701:Secret" }, { type: "azure-native:keyvault/v20221101:Secret" }, { type: "azure-native:keyvault/v20230201:Secret" }, { type: "azure-native:keyvault/v20230701:Secret" }, { type: "azure-native:keyvault/v20240401preview:Secret" }, { type: "azure-native:keyvault/v20241101:Secret" }, { type: "azure-native:keyvault/v20241201preview:Secret" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Secret.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Secret resource.
 */
export interface SecretArgs {
    /**
     * Properties of the secret
     */
    properties: pulumi.Input<types.inputs.SecretPropertiesArgs>;
    /**
     * The name of the Resource Group to which the vault belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the secret. The value you provide may be copied globally for the purpose of running the service. The value provided should not include personally identifiable or sensitive information.
     */
    secretName?: pulumi.Input<string>;
    /**
     * The tags that will be assigned to the secret. 
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of the vault
     */
    vaultName: pulumi.Input<string>;
}