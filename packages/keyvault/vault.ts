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
export class Vault extends pulumi.CustomResource {
    /**
     * Get an existing Vault resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Vault {
        return new Vault(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:keyvault:Vault';

    /**
     * Returns true if the given object is an instance of Vault.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Vault {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Vault.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Azure location of the key vault resource.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Name of the key vault resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Properties of the vault
     */
    public readonly properties!: pulumi.Output<types.outputs.VaultPropertiesResponse>;
    /**
     * System metadata for the key vault.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Tags assigned to the key vault resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type of the key vault resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Vault resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VaultArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.properties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'properties'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["properties"] = args ? (args.properties ? pulumi.output(args.properties).apply(types.inputs.vaultPropertiesArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vaultName"] = args ? args.vaultName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:keyvault/v20150601:Vault" }, { type: "azure-native:keyvault/v20161001:Vault" }, { type: "azure-native:keyvault/v20180214:Vault" }, { type: "azure-native:keyvault/v20180214preview:Vault" }, { type: "azure-native:keyvault/v20190901:Vault" }, { type: "azure-native:keyvault/v20200401preview:Vault" }, { type: "azure-native:keyvault/v20210401preview:Vault" }, { type: "azure-native:keyvault/v20210601preview:Vault" }, { type: "azure-native:keyvault/v20211001:Vault" }, { type: "azure-native:keyvault/v20211101preview:Vault" }, { type: "azure-native:keyvault/v20220201preview:Vault" }, { type: "azure-native:keyvault/v20220701:Vault" }, { type: "azure-native:keyvault/v20221101:Vault" }, { type: "azure-native:keyvault/v20230201:Vault" }, { type: "azure-native:keyvault/v20230701:Vault" }, { type: "azure-native:keyvault/v20240401preview:Vault" }, { type: "azure-native:keyvault/v20241101:Vault" }, { type: "azure-native:keyvault/v20241201preview:Vault" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Vault.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Vault resource.
 */
export interface VaultArgs {
    /**
     * The supported Azure location where the key vault should be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Properties of the vault
     */
    properties: pulumi.Input<types.inputs.VaultPropertiesArgs>;
    /**
     * The name of the Resource Group to which the server belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The tags that will be assigned to the key vault.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of the vault
     */
    vaultName?: pulumi.Input<string>;
}