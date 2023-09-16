import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * The L3 Isolation Domain resource definition.
 */
export class L3IsolationDomain extends pulumi.CustomResource {
    /**
     * Get an existing L3IsolationDomain resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): L3IsolationDomain {
        return new L3IsolationDomain(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:managednetworkfabric/v20230615:L3IsolationDomain';

    /**
     * Returns true if the given object is an instance of L3IsolationDomain.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is L3IsolationDomain {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === L3IsolationDomain.__pulumiType;
    }

    /**
     * Administrative state of the resource.
     */
    public /*out*/ readonly administrativeState!: pulumi.Output<string>;
    /**
     * Aggregate route configurations.
     */
    public readonly aggregateRouteConfiguration!: pulumi.Output<types.outputs.managednetworkfabric.v20230615.AggregateRouteConfigurationResponse | undefined>;
    /**
     * Switch configuration description.
     */
    public readonly annotation!: pulumi.Output<string | undefined>;
    /**
     * Configuration state of the resource.
     */
    public /*out*/ readonly configurationState!: pulumi.Output<string>;
    /**
     * Connected Subnet RoutePolicy
     */
    public readonly connectedSubnetRoutePolicy!: pulumi.Output<types.outputs.managednetworkfabric.v20230615.ConnectedSubnetRoutePolicyResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * ARM Resource ID of the Network Fabric.
     */
    public readonly networkFabricId!: pulumi.Output<string>;
    /**
     * Provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Advertise Connected Subnets. Ex: "True" | "False".
     */
    public readonly redistributeConnectedSubnets!: pulumi.Output<string | undefined>;
    /**
     * Advertise Static Routes. Ex: "True" | "False".
     */
    public readonly redistributeStaticRoutes!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.managednetworkfabric.v20230615.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a L3IsolationDomain resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: L3IsolationDomainArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.networkFabricId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkFabricId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["aggregateRouteConfiguration"] = args ? args.aggregateRouteConfiguration : undefined;
            resourceInputs["annotation"] = args ? args.annotation : undefined;
            resourceInputs["connectedSubnetRoutePolicy"] = args ? args.connectedSubnetRoutePolicy : undefined;
            resourceInputs["l3IsolationDomainName"] = args ? args.l3IsolationDomainName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["networkFabricId"] = args ? args.networkFabricId : undefined;
            resourceInputs["redistributeConnectedSubnets"] = (args ? args.redistributeConnectedSubnets : undefined) ?? "True";
            resourceInputs["redistributeStaticRoutes"] = (args ? args.redistributeStaticRoutes : undefined) ?? "False";
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["administrativeState"] = undefined /*out*/;
            resourceInputs["configurationState"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["administrativeState"] = undefined /*out*/;
            resourceInputs["aggregateRouteConfiguration"] = undefined /*out*/;
            resourceInputs["annotation"] = undefined /*out*/;
            resourceInputs["configurationState"] = undefined /*out*/;
            resourceInputs["connectedSubnetRoutePolicy"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkFabricId"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["redistributeConnectedSubnets"] = undefined /*out*/;
            resourceInputs["redistributeStaticRoutes"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:managednetworkfabric:L3IsolationDomain" }, { type: "azure-native:managednetworkfabric/v20230201preview:L3IsolationDomain" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(L3IsolationDomain.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a L3IsolationDomain resource.
 */
export interface L3IsolationDomainArgs {
    /**
     * Aggregate route configurations.
     */
    aggregateRouteConfiguration?: pulumi.Input<types.inputs.managednetworkfabric.v20230615.AggregateRouteConfigurationArgs>;
    /**
     * Switch configuration description.
     */
    annotation?: pulumi.Input<string>;
    /**
     * Connected Subnet RoutePolicy
     */
    connectedSubnetRoutePolicy?: pulumi.Input<types.inputs.managednetworkfabric.v20230615.ConnectedSubnetRoutePolicyArgs>;
    /**
     * Name of the L3 Isolation Domain.
     */
    l3IsolationDomainName?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * ARM Resource ID of the Network Fabric.
     */
    networkFabricId: pulumi.Input<string>;
    /**
     * Advertise Connected Subnets. Ex: "True" | "False".
     */
    redistributeConnectedSubnets?: pulumi.Input<string | types.enums.v20230615.RedistributeConnectedSubnets>;
    /**
     * Advertise Static Routes. Ex: "True" | "False".
     */
    redistributeStaticRoutes?: pulumi.Input<string | types.enums.v20230615.RedistributeStaticRoutes>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
