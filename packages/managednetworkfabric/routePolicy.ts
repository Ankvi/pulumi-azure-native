import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The RoutePolicy resource definition.
 *
 * Uses Azure REST API version 2023-02-01-preview. In version 1.x of the Azure Native provider, it used API version 2023-02-01-preview.
 *
 * Other available API versions: 2023-06-15.
 */
export class RoutePolicy extends pulumi.CustomResource {
    /**
     * Get an existing RoutePolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RoutePolicy {
        return new RoutePolicy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:managednetworkfabric:RoutePolicy';

    /**
     * Returns true if the given object is an instance of RoutePolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RoutePolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RoutePolicy.__pulumiType;
    }

    /**
     * Switch configuration description.
     */
    public readonly annotation!: pulumi.Output<string | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Gets the provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Route Policy statements.
     */
    public readonly statements!: pulumi.Output<types.outputs.RoutePolicyStatementPropertiesResponse[]>;
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
     * Create a RoutePolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RoutePolicyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.statements === undefined) && !opts.urn) {
                throw new Error("Missing required property 'statements'");
            }
            resourceInputs["annotation"] = args ? args.annotation : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["routePolicyName"] = args ? args.routePolicyName : undefined;
            resourceInputs["statements"] = args ? args.statements : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["annotation"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["statements"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:managednetworkfabric/v20230201preview:RoutePolicy" }, { type: "azure-native:managednetworkfabric/v20230615:RoutePolicy" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(RoutePolicy.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a RoutePolicy resource.
 */
export interface RoutePolicyArgs {
    /**
     * Switch configuration description.
     */
    annotation?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the Route Policy
     */
    routePolicyName?: pulumi.Input<string>;
    /**
     * Route Policy statements.
     */
    statements: pulumi.Input<pulumi.Input<types.inputs.RoutePolicyStatementPropertiesArgs>[]>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}