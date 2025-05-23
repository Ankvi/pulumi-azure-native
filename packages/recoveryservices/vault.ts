import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Resource information, as returned by the resource provider.
 *
 * Uses Azure REST API version 2024-10-01. In version 2.x of the Azure Native provider, it used API version 2023-04-01.
 *
 * Other available API versions: 2023-02-01, 2023-04-01, 2023-06-01, 2023-08-01, 2024-01-01, 2024-02-01, 2024-04-01, 2024-04-30-preview, 2024-09-30-preview, 2025-01-01, 2025-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native recoveryservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
    public static readonly __pulumiType = 'azure-native:recoveryservices:Vault';

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
     * Optional ETag.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * Identity for the resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.IdentityDataResponse | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name associated with the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Properties of the vault.
     */
    public readonly properties!: pulumi.Output<types.outputs.VaultPropertiesResponse>;
    /**
     * Identifies the unique system identifier for each Azure resource.
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
     * Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/...
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
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vaultName"] = args ? args.vaultName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:recoveryservices/v20160601:Vault" }, { type: "azure-native:recoveryservices/v20200202:Vault" }, { type: "azure-native:recoveryservices/v20201001:Vault" }, { type: "azure-native:recoveryservices/v20210101:Vault" }, { type: "azure-native:recoveryservices/v20210210:Vault" }, { type: "azure-native:recoveryservices/v20210301:Vault" }, { type: "azure-native:recoveryservices/v20210401:Vault" }, { type: "azure-native:recoveryservices/v20210601:Vault" }, { type: "azure-native:recoveryservices/v20210701:Vault" }, { type: "azure-native:recoveryservices/v20210801:Vault" }, { type: "azure-native:recoveryservices/v20211101preview:Vault" }, { type: "azure-native:recoveryservices/v20211201:Vault" }, { type: "azure-native:recoveryservices/v20220101:Vault" }, { type: "azure-native:recoveryservices/v20220131preview:Vault" }, { type: "azure-native:recoveryservices/v20220201:Vault" }, { type: "azure-native:recoveryservices/v20220301:Vault" }, { type: "azure-native:recoveryservices/v20220401:Vault" }, { type: "azure-native:recoveryservices/v20220501:Vault" }, { type: "azure-native:recoveryservices/v20220801:Vault" }, { type: "azure-native:recoveryservices/v20220910:Vault" }, { type: "azure-native:recoveryservices/v20220930preview:Vault" }, { type: "azure-native:recoveryservices/v20221001:Vault" }, { type: "azure-native:recoveryservices/v20230101:Vault" }, { type: "azure-native:recoveryservices/v20230201:Vault" }, { type: "azure-native:recoveryservices/v20230401:Vault" }, { type: "azure-native:recoveryservices/v20230601:Vault" }, { type: "azure-native:recoveryservices/v20230801:Vault" }, { type: "azure-native:recoveryservices/v20240101:Vault" }, { type: "azure-native:recoveryservices/v20240201:Vault" }, { type: "azure-native:recoveryservices/v20240401:Vault" }, { type: "azure-native:recoveryservices/v20240430preview:Vault" }, { type: "azure-native:recoveryservices/v20240930preview:Vault" }, { type: "azure-native:recoveryservices/v20241001:Vault" }, { type: "azure-native:recoveryservices/v20250101:Vault" }, { type: "azure-native:recoveryservices/v20250201:Vault" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Vault.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Vault resource.
 */
export interface VaultArgs {
    /**
     * Identity for the resource.
     */
    identity?: pulumi.Input<types.inputs.IdentityDataArgs>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * Properties of the vault.
     */
    properties?: pulumi.Input<types.inputs.VaultPropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Identifies the unique system identifier for each Azure resource.
     */
    sku?: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the recovery services vault.
     */
    vaultName?: pulumi.Input<string>;
}