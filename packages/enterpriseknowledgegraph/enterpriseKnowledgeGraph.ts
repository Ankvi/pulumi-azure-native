import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * EnterpriseKnowledgeGraph resource definition
 *
 * Uses Azure REST API version 2018-12-03. In version 2.x of the Azure Native provider, it used API version 2018-12-03.
 */
export class EnterpriseKnowledgeGraph extends pulumi.CustomResource {
    /**
     * Get an existing EnterpriseKnowledgeGraph resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): EnterpriseKnowledgeGraph {
        return new EnterpriseKnowledgeGraph(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:enterpriseknowledgegraph:EnterpriseKnowledgeGraph';

    /**
     * Returns true if the given object is an instance of EnterpriseKnowledgeGraph.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EnterpriseKnowledgeGraph {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EnterpriseKnowledgeGraph.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Specifies the location of the resource.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The set of properties specific to EnterpriseKnowledgeGraph resource
     */
    public readonly properties!: pulumi.Output<types.outputs.EnterpriseKnowledgeGraphPropertiesResponse>;
    /**
     * Gets or sets the SKU of the resource.
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse | undefined>;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Specifies the type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a EnterpriseKnowledgeGraph resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EnterpriseKnowledgeGraphArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:enterpriseknowledgegraph/v20181203:EnterpriseKnowledgeGraph" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(EnterpriseKnowledgeGraph.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a EnterpriseKnowledgeGraph resource.
 */
export interface EnterpriseKnowledgeGraphArgs {
    /**
     * Specifies the location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The set of properties specific to EnterpriseKnowledgeGraph resource
     */
    properties?: pulumi.Input<types.inputs.EnterpriseKnowledgeGraphPropertiesArgs>;
    /**
     * The name of the EnterpriseKnowledgeGraph resource group in the user subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the EnterpriseKnowledgeGraph resource.
     */
    resourceName?: pulumi.Input<string>;
    /**
     * Gets or sets the SKU of the resource.
     */
    sku?: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}