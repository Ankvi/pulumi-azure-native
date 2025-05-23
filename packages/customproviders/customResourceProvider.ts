import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A manifest file that defines the custom resource provider resources.
 *
 * Uses Azure REST API version 2018-09-01-preview. In version 2.x of the Azure Native provider, it used API version 2018-09-01-preview.
 */
export class CustomResourceProvider extends pulumi.CustomResource {
    /**
     * Get an existing CustomResourceProvider resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CustomResourceProvider {
        return new CustomResourceProvider(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:customproviders:CustomResourceProvider';

    /**
     * Returns true if the given object is an instance of CustomResourceProvider.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CustomResourceProvider {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CustomResourceProvider.__pulumiType;
    }

    /**
     * A list of actions that the custom resource provider implements.
     */
    public readonly actions!: pulumi.Output<types.outputs.CustomRPActionRouteDefinitionResponse[] | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the resource provider.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * A list of resource types that the custom resource provider implements.
     */
    public readonly resourceTypes!: pulumi.Output<types.outputs.CustomRPResourceTypeRouteDefinitionResponse[] | undefined>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * A list of validations to run on the custom resource provider's requests.
     */
    public readonly validations!: pulumi.Output<types.outputs.CustomRPValidationsResponse[] | undefined>;

    /**
     * Create a CustomResourceProvider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CustomResourceProviderArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["actions"] = args ? args.actions : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceProviderName"] = args ? args.resourceProviderName : undefined;
            resourceInputs["resourceTypes"] = args ? args.resourceTypes : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["validations"] = args ? args.validations : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["actions"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceTypes"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["validations"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:customproviders/v20180901preview:CustomResourceProvider" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(CustomResourceProvider.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a CustomResourceProvider resource.
 */
export interface CustomResourceProviderArgs {
    /**
     * A list of actions that the custom resource provider implements.
     */
    actions?: pulumi.Input<pulumi.Input<types.inputs.CustomRPActionRouteDefinitionArgs>[]>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the resource provider.
     */
    resourceProviderName?: pulumi.Input<string>;
    /**
     * A list of resource types that the custom resource provider implements.
     */
    resourceTypes?: pulumi.Input<pulumi.Input<types.inputs.CustomRPResourceTypeRouteDefinitionArgs>[]>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A list of validations to run on the custom resource provider's requests.
     */
    validations?: pulumi.Input<pulumi.Input<types.inputs.CustomRPValidationsArgs>[]>;
}