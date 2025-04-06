import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure Resource Manager resource envelope.
 *
 * Uses Azure REST API version 2024-10-01. In version 2.x of the Azure Native provider, it used API version 2024-01-01-preview.
 *
 * Other available API versions: 2024-01-01-preview, 2024-04-01, 2024-07-01-preview, 2024-10-01-preview, 2025-01-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native machinelearningservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class MarketplaceSubscription extends pulumi.CustomResource {
    /**
     * Get an existing MarketplaceSubscription resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MarketplaceSubscription {
        return new MarketplaceSubscription(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:machinelearningservices:MarketplaceSubscription';

    /**
     * Returns true if the given object is an instance of MarketplaceSubscription.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MarketplaceSubscription {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MarketplaceSubscription.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * [Required] Additional attributes of the entity.
     */
    public readonly marketplaceSubscriptionProperties!: pulumi.Output<types.outputs.MarketplaceSubscriptionResponse>;
    /**
     * The name of the resource
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a MarketplaceSubscription resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MarketplaceSubscriptionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.marketplaceSubscriptionProperties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'marketplaceSubscriptionProperties'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["marketplaceSubscriptionProperties"] = args ? args.marketplaceSubscriptionProperties : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["marketplaceSubscriptionProperties"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:machinelearningservices/v20240101preview:MarketplaceSubscription" }, { type: "azure-native:machinelearningservices/v20240401:MarketplaceSubscription" }, { type: "azure-native:machinelearningservices/v20240401preview:MarketplaceSubscription" }, { type: "azure-native:machinelearningservices/v20240701preview:MarketplaceSubscription" }, { type: "azure-native:machinelearningservices/v20241001:MarketplaceSubscription" }, { type: "azure-native:machinelearningservices/v20241001preview:MarketplaceSubscription" }, { type: "azure-native:machinelearningservices/v20250101preview:MarketplaceSubscription" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(MarketplaceSubscription.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a MarketplaceSubscription resource.
 */
export interface MarketplaceSubscriptionArgs {
    /**
     * [Required] Additional attributes of the entity.
     */
    marketplaceSubscriptionProperties: pulumi.Input<types.inputs.MarketplaceSubscriptionArgs>;
    /**
     * Marketplace Subscription name.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}