import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The RoutePolicy resource definition.
 *
 * Uses Azure REST API version 2023-06-15. In version 2.x of the Azure Native provider, it used API version 2023-02-01-preview.
 *
 * Other available API versions: 2023-02-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native managednetworkfabric [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * AddressFamilyType. This parameter decides whether the given ipv4 or ipv6 route policy.
     */
    public readonly addressFamilyType!: pulumi.Output<string | undefined>;
    /**
     * Administrative state of the resource.
     */
    public /*out*/ readonly administrativeState!: pulumi.Output<string>;
    /**
     * Switch configuration description.
     */
    public readonly annotation!: pulumi.Output<string | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Configuration state of the resource.
     */
    public /*out*/ readonly configurationState!: pulumi.Output<string>;
    /**
     * Default action that needs to be applied when no condition is matched. Example: Permit | Deny.
     */
    public readonly defaultAction!: pulumi.Output<string | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Arm Resource ID of Network Fabric.
     */
    public readonly networkFabricId!: pulumi.Output<string>;
    /**
     * Provisioning state of the resource.
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
            if ((!args || args.networkFabricId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkFabricId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.statements === undefined) && !opts.urn) {
                throw new Error("Missing required property 'statements'");
            }
            resourceInputs["addressFamilyType"] = (args ? args.addressFamilyType : undefined) ?? "IPv4";
            resourceInputs["annotation"] = args ? args.annotation : undefined;
            resourceInputs["defaultAction"] = (args ? args.defaultAction : undefined) ?? "Deny";
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["networkFabricId"] = args ? args.networkFabricId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["routePolicyName"] = args ? args.routePolicyName : undefined;
            resourceInputs["statements"] = args ? args.statements : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["administrativeState"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["configurationState"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["addressFamilyType"] = undefined /*out*/;
            resourceInputs["administrativeState"] = undefined /*out*/;
            resourceInputs["annotation"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["configurationState"] = undefined /*out*/;
            resourceInputs["defaultAction"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkFabricId"] = undefined /*out*/;
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
     * AddressFamilyType. This parameter decides whether the given ipv4 or ipv6 route policy.
     */
    addressFamilyType?: pulumi.Input<string | types.enums.AddressFamilyType>;
    /**
     * Switch configuration description.
     */
    annotation?: pulumi.Input<string>;
    /**
     * Default action that needs to be applied when no condition is matched. Example: Permit | Deny.
     */
    defaultAction?: pulumi.Input<string | types.enums.CommunityActionTypes>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Arm Resource ID of Network Fabric.
     */
    networkFabricId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the Route Policy.
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