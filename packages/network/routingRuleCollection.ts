import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Defines the routing rule collection.
 *
 * Uses Azure REST API version 2024-05-01. In version 2.x of the Azure Native provider, it used API version 2024-03-01.
 *
 * Other available API versions: 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class RoutingRuleCollection extends pulumi.CustomResource {
    /**
     * Get an existing RoutingRuleCollection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RoutingRuleCollection {
        return new RoutingRuleCollection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:RoutingRuleCollection';

    /**
     * Returns true if the given object is an instance of RoutingRuleCollection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RoutingRuleCollection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RoutingRuleCollection.__pulumiType;
    }

    /**
     * Groups for configuration
     */
    public readonly appliesTo!: pulumi.Output<types.outputs.NetworkManagerRoutingGroupItemResponse[]>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * A description of the routing rule collection.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Determines whether BGP route propagation is enabled. Defaults to true.
     */
    public readonly disableBgpRoutePropagation!: pulumi.Output<string | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Unique identifier for this resource.
     */
    public /*out*/ readonly resourceGuid!: pulumi.Output<string>;
    /**
     * The system metadata related to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a RoutingRuleCollection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RoutingRuleCollectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.appliesTo === undefined) && !opts.urn) {
                throw new Error("Missing required property 'appliesTo'");
            }
            if ((!args || args.configurationName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'configurationName'");
            }
            if ((!args || args.networkManagerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkManagerName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["appliesTo"] = args ? args.appliesTo : undefined;
            resourceInputs["configurationName"] = args ? args.configurationName : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["disableBgpRoutePropagation"] = args ? args.disableBgpRoutePropagation : undefined;
            resourceInputs["networkManagerName"] = args ? args.networkManagerName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["ruleCollectionName"] = args ? args.ruleCollectionName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["appliesTo"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["disableBgpRoutePropagation"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20240301:RoutingRuleCollection" }, { type: "azure-native:network/v20240501:RoutingRuleCollection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(RoutingRuleCollection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a RoutingRuleCollection resource.
 */
export interface RoutingRuleCollectionArgs {
    /**
     * Groups for configuration
     */
    appliesTo: pulumi.Input<pulumi.Input<types.inputs.NetworkManagerRoutingGroupItemArgs>[]>;
    /**
     * The name of the network manager Routing Configuration.
     */
    configurationName: pulumi.Input<string>;
    /**
     * A description of the routing rule collection.
     */
    description?: pulumi.Input<string>;
    /**
     * Determines whether BGP route propagation is enabled. Defaults to true.
     */
    disableBgpRoutePropagation?: pulumi.Input<string | types.enums.DisableBgpRoutePropagation>;
    /**
     * The name of the network manager.
     */
    networkManagerName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the network manager routing Configuration rule collection.
     */
    ruleCollectionName?: pulumi.Input<string>;
}