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
export class ManagedHsm extends pulumi.CustomResource {
    /**
     * Get an existing ManagedHsm resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ManagedHsm {
        return new ManagedHsm(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:keyvault:ManagedHsm';

    /**
     * Returns true if the given object is an instance of ManagedHsm.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagedHsm {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ManagedHsm.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Managed service identity (system assigned and/or user assigned identities)
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedServiceIdentityResponse | undefined>;
    /**
     * The supported Azure location where the managed HSM Pool should be created.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the managed HSM Pool.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Properties of the managed HSM
     */
    public readonly properties!: pulumi.Output<types.outputs.ManagedHsmPropertiesResponse>;
    /**
     * SKU details
     */
    public readonly sku!: pulumi.Output<types.outputs.ManagedHsmSkuResponse | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the key vault resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The resource type of the managed HSM Pool.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ManagedHsm resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagedHsmArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["properties"] = args ? (args.properties ? pulumi.output(args.properties).apply(types.inputs.managedHsmPropertiesArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
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
        const aliasOpts = { aliases: [{ type: "azure-native:keyvault/v20200401preview:ManagedHsm" }, { type: "azure-native:keyvault/v20210401preview:ManagedHsm" }, { type: "azure-native:keyvault/v20210601preview:ManagedHsm" }, { type: "azure-native:keyvault/v20211001:ManagedHsm" }, { type: "azure-native:keyvault/v20211101preview:ManagedHsm" }, { type: "azure-native:keyvault/v20220201preview:ManagedHsm" }, { type: "azure-native:keyvault/v20220701:ManagedHsm" }, { type: "azure-native:keyvault/v20221101:ManagedHsm" }, { type: "azure-native:keyvault/v20230201:ManagedHsm" }, { type: "azure-native:keyvault/v20230701:ManagedHsm" }, { type: "azure-native:keyvault/v20240401preview:ManagedHsm" }, { type: "azure-native:keyvault/v20241101:ManagedHsm" }, { type: "azure-native:keyvault/v20241201preview:ManagedHsm" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ManagedHsm.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ManagedHsm resource.
 */
export interface ManagedHsmArgs {
    /**
     * Managed service identity (system assigned and/or user assigned identities)
     */
    identity?: pulumi.Input<types.inputs.ManagedServiceIdentityArgs>;
    /**
     * The supported Azure location where the managed HSM Pool should be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Name of the managed HSM Pool
     */
    name?: pulumi.Input<string>;
    /**
     * Properties of the managed HSM
     */
    properties?: pulumi.Input<types.inputs.ManagedHsmPropertiesArgs>;
    /**
     * Name of the resource group that contains the managed HSM pool.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * SKU details
     */
    sku?: pulumi.Input<types.inputs.ManagedHsmSkuArgs>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}