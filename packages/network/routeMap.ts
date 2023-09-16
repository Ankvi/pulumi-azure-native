import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The RouteMap child resource of a Virtual hub.
 * Azure REST API version: 2023-02-01.
 */
export class RouteMap extends pulumi.CustomResource {
    /**
     * Get an existing RouteMap resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RouteMap {
        return new RouteMap(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:RouteMap';

    /**
     * Returns true if the given object is an instance of RouteMap.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RouteMap {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RouteMap.__pulumiType;
    }

    /**
     * List of connections which have this RoutMap associated for inbound traffic.
     */
    public readonly associatedInboundConnections!: pulumi.Output<string[] | undefined>;
    /**
     * List of connections which have this RoutMap associated for outbound traffic.
     */
    public readonly associatedOutboundConnections!: pulumi.Output<string[] | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the RouteMap resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * List of RouteMap rules to be applied.
     */
    public readonly rules!: pulumi.Output<types.outputs.network.RouteMapRuleResponse[] | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a RouteMap resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RouteMapArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.virtualHubName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'virtualHubName'");
            }
            resourceInputs["associatedInboundConnections"] = args ? args.associatedInboundConnections : undefined;
            resourceInputs["associatedOutboundConnections"] = args ? args.associatedOutboundConnections : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["routeMapName"] = args ? args.routeMapName : undefined;
            resourceInputs["rules"] = args ? args.rules : undefined;
            resourceInputs["virtualHubName"] = args ? args.virtualHubName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["associatedInboundConnections"] = undefined /*out*/;
            resourceInputs["associatedOutboundConnections"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["rules"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20220501:RouteMap" }, { type: "azure-native:network/v20220701:RouteMap" }, { type: "azure-native:network/v20220901:RouteMap" }, { type: "azure-native:network/v20221101:RouteMap" }, { type: "azure-native:network/v20230201:RouteMap" }, { type: "azure-native:network/v20230401:RouteMap" }, { type: "azure-native:network/v20230501:RouteMap" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(RouteMap.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a RouteMap resource.
 */
export interface RouteMapArgs {
    /**
     * List of connections which have this RoutMap associated for inbound traffic.
     */
    associatedInboundConnections?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of connections which have this RoutMap associated for outbound traffic.
     */
    associatedOutboundConnections?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The resource group name of the RouteMap's resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the RouteMap.
     */
    routeMapName?: pulumi.Input<string>;
    /**
     * List of RouteMap rules to be applied.
     */
    rules?: pulumi.Input<pulumi.Input<types.inputs.network.RouteMapRuleArgs>[]>;
    /**
     * The name of the VirtualHub containing the RouteMap.
     */
    virtualHubName: pulumi.Input<string>;
}
