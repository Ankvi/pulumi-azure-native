import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The integration service environment.
 * Azure REST API version: 2019-05-01. Prior API version in Azure Native 1.x: 2019-05-01
 */
export class IntegrationServiceEnvironment extends pulumi.CustomResource {
    /**
     * Get an existing IntegrationServiceEnvironment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IntegrationServiceEnvironment {
        return new IntegrationServiceEnvironment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:logic:IntegrationServiceEnvironment';

    /**
     * Returns true if the given object is an instance of IntegrationServiceEnvironment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IntegrationServiceEnvironment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IntegrationServiceEnvironment.__pulumiType;
    }

    /**
     * Managed service identity properties.
     */
    public readonly identity!: pulumi.Output<types.outputs.logic.ManagedServiceIdentityResponse | undefined>;
    /**
     * The resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Gets the resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The integration service environment properties.
     */
    public readonly properties!: pulumi.Output<types.outputs.logic.IntegrationServiceEnvironmentPropertiesResponse>;
    /**
     * The sku.
     */
    public readonly sku!: pulumi.Output<types.outputs.logic.IntegrationServiceEnvironmentSkuResponse | undefined>;
    /**
     * The resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Gets the resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a IntegrationServiceEnvironment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IntegrationServiceEnvironmentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroup === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroup'");
            }
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["integrationServiceEnvironmentName"] = args ? args.integrationServiceEnvironmentName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroup"] = args ? args.resourceGroup : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:logic/v20190501:IntegrationServiceEnvironment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(IntegrationServiceEnvironment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a IntegrationServiceEnvironment resource.
 */
export interface IntegrationServiceEnvironmentArgs {
    /**
     * Managed service identity properties.
     */
    identity?: pulumi.Input<types.inputs.logic.ManagedServiceIdentityArgs>;
    /**
     * The integration service environment name.
     */
    integrationServiceEnvironmentName?: pulumi.Input<string>;
    /**
     * The resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The integration service environment properties.
     */
    properties?: pulumi.Input<types.inputs.logic.IntegrationServiceEnvironmentPropertiesArgs>;
    /**
     * The resource group.
     */
    resourceGroup: pulumi.Input<string>;
    /**
     * The sku.
     */
    sku?: pulumi.Input<types.inputs.logic.IntegrationServiceEnvironmentSkuArgs>;
    /**
     * The resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
