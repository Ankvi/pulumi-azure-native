import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2023-04-01-preview, 2023-06-01-preview, 2023-08-01-preview, 2023-10-01, 2024-01-01-preview.
 */
export class Registry extends pulumi.CustomResource {
    /**
     * Get an existing Registry resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Registry {
        return new Registry(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:machinelearningservices:Registry';

    /**
     * Returns true if the given object is an instance of Registry.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Registry {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Registry.__pulumiType;
    }

    /**
     * Managed service identity (system assigned and/or user assigned identities)
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedServiceIdentityResponse | undefined>;
    /**
     * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * [Required] Additional attributes of the entity.
     */
    public readonly registryProperties!: pulumi.Output<types.outputs.RegistryResponse>;
    /**
     * Sku details required for ARM contract for Autoscaling.
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
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
     * Create a Registry resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RegistryArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.registryProperties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'registryProperties'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["registryName"] = args ? args.registryName : undefined;
            resourceInputs["registryProperties"] = args ? args.registryProperties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["registryProperties"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:machinelearningservices/v20221001preview:Registry" }, { type: "azure-native:machinelearningservices/v20221201preview:Registry" }, { type: "azure-native:machinelearningservices/v20230201preview:Registry" }, { type: "azure-native:machinelearningservices/v20230401:Registry" }, { type: "azure-native:machinelearningservices/v20230401preview:Registry" }, { type: "azure-native:machinelearningservices/v20230601preview:Registry" }, { type: "azure-native:machinelearningservices/v20230801preview:Registry" }, { type: "azure-native:machinelearningservices/v20231001:Registry" }, { type: "azure-native:machinelearningservices/v20240101preview:Registry" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Registry.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Registry resource.
 */
export interface RegistryArgs {
    /**
     * Managed service identity (system assigned and/or user assigned identities)
     */
    identity?: pulumi.Input<types.inputs.ManagedServiceIdentityArgs>;
    /**
     * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type.
     */
    kind?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning registry. This is case-insensitive
     */
    registryName?: pulumi.Input<string>;
    /**
     * [Required] Additional attributes of the entity.
     */
    registryProperties: pulumi.Input<types.inputs.RegistryArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Sku details required for ARM contract for Autoscaling.
     */
    sku?: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}