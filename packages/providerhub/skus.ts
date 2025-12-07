import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Uses Azure REST API version 2024-09-01. In version 2.x of the Azure Native provider, it used API version 2021-09-01-preview.
 *
 * Other available API versions: 2021-09-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native providerhub [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Skus extends pulumi.CustomResource {
    /**
     * Get an existing Skus resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Skus {
        return new Skus(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:providerhub:Skus';

    /**
     * Returns true if the given object is an instance of Skus.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Skus {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Skus.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    declare public /*out*/ readonly azureApiVersion: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    declare public /*out*/ readonly name: pulumi.Output<string>;
    declare public readonly properties: pulumi.Output<types.outputs.SkuResourceResponseProperties>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    declare public /*out*/ readonly systemData: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    declare public /*out*/ readonly type: pulumi.Output<string>;

    /**
     * Create a Skus resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SkusArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if (args?.providerNamespace === undefined && !opts.urn) {
                throw new Error("Missing required property 'providerNamespace'");
            }
            if (args?.resourceType === undefined && !opts.urn) {
                throw new Error("Missing required property 'resourceType'");
            }
            resourceInputs["properties"] = args?.properties;
            resourceInputs["providerNamespace"] = args?.providerNamespace;
            resourceInputs["resourceType"] = args?.resourceType;
            resourceInputs["sku"] = args?.sku;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:providerhub/v20201120:Skus" }, { type: "azure-native:providerhub/v20210501preview:Skus" }, { type: "azure-native:providerhub/v20210601preview:Skus" }, { type: "azure-native:providerhub/v20210901preview:Skus" }, { type: "azure-native:providerhub/v20240901:Skus" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Skus.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Skus resource.
 */
export interface SkusArgs {
    properties?: pulumi.Input<types.inputs.SkuResourcePropertiesArgs>;
    /**
     * The name of the resource provider hosted within ProviderHub.
     */
    providerNamespace: pulumi.Input<string>;
    /**
     * The resource type.
     */
    resourceType: pulumi.Input<string>;
    /**
     * The SKU.
     */
    sku?: pulumi.Input<string>;
}