import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * The routing intent child resource of a Virtual hub.
 */
export class RoutingIntent extends pulumi.CustomResource {
    /**
     * Get an existing RoutingIntent resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RoutingIntent {
        return new RoutingIntent(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20230201:RoutingIntent';

    /**
     * Returns true if the given object is an instance of RoutingIntent.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RoutingIntent {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RoutingIntent.__pulumiType;
    }

    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of the RoutingIntent resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * List of routing policies.
     */
    public readonly routingPolicies!: pulumi.Output<types.outputs.network.v20230201.RoutingPolicyResponse[] | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a RoutingIntent resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RoutingIntentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.virtualHubName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'virtualHubName'");
            }
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["routingIntentName"] = args ? args.routingIntentName : undefined;
            resourceInputs["routingPolicies"] = args ? args.routingPolicies : undefined;
            resourceInputs["virtualHubName"] = args ? args.virtualHubName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["routingPolicies"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:RoutingIntent" }, { type: "azure-native:network/v20210501:RoutingIntent" }, { type: "azure-native:network/v20210801:RoutingIntent" }, { type: "azure-native:network/v20220101:RoutingIntent" }, { type: "azure-native:network/v20220501:RoutingIntent" }, { type: "azure-native:network/v20220701:RoutingIntent" }, { type: "azure-native:network/v20220901:RoutingIntent" }, { type: "azure-native:network/v20221101:RoutingIntent" }, { type: "azure-native:network/v20230401:RoutingIntent" }, { type: "azure-native:network/v20230501:RoutingIntent" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(RoutingIntent.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a RoutingIntent resource.
 */
export interface RoutingIntentArgs {
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The resource group name of the RoutingIntent.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the per VirtualHub singleton Routing Intent resource.
     */
    routingIntentName?: pulumi.Input<string>;
    /**
     * List of routing policies.
     */
    routingPolicies?: pulumi.Input<pulumi.Input<types.inputs.network.v20230201.RoutingPolicyArgs>[]>;
    /**
     * The name of the VirtualHub.
     */
    virtualHubName: pulumi.Input<string>;
}
