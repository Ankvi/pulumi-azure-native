import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * VirtualHubRouteTableV2 Resource.
 * Azure REST API version: 2023-02-01. Prior API version in Azure Native 1.x: 2020-11-01.
 *
 * Other available API versions: 2023-04-01, 2023-05-01.
 */
export class VirtualHubRouteTableV2 extends pulumi.CustomResource {
    /**
     * Get an existing VirtualHubRouteTableV2 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualHubRouteTableV2 {
        return new VirtualHubRouteTableV2(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:VirtualHubRouteTableV2';

    /**
     * Returns true if the given object is an instance of VirtualHubRouteTableV2.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualHubRouteTableV2 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualHubRouteTableV2.__pulumiType;
    }

    /**
     * List of all connections attached to this route table v2.
     */
    public readonly attachedConnections!: pulumi.Output<string[] | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of the virtual hub route table v2 resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * List of all routes.
     */
    public readonly routes!: pulumi.Output<types.outputs.VirtualHubRouteV2Response[] | undefined>;

    /**
     * Create a VirtualHubRouteTableV2 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualHubRouteTableV2Args, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.virtualHubName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'virtualHubName'");
            }
            resourceInputs["attachedConnections"] = args ? args.attachedConnections : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["routeTableName"] = args ? args.routeTableName : undefined;
            resourceInputs["routes"] = args ? args.routes : undefined;
            resourceInputs["virtualHubName"] = args ? args.virtualHubName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
        } else {
            resourceInputs["attachedConnections"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["routes"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20190901:VirtualHubRouteTableV2" }, { type: "azure-native:network/v20191101:VirtualHubRouteTableV2" }, { type: "azure-native:network/v20191201:VirtualHubRouteTableV2" }, { type: "azure-native:network/v20200301:VirtualHubRouteTableV2" }, { type: "azure-native:network/v20200401:VirtualHubRouteTableV2" }, { type: "azure-native:network/v20200501:VirtualHubRouteTableV2" }, { type: "azure-native:network/v20200601:VirtualHubRouteTableV2" }, { type: "azure-native:network/v20200701:VirtualHubRouteTableV2" }, { type: "azure-native:network/v20200801:VirtualHubRouteTableV2" }, { type: "azure-native:network/v20201101:VirtualHubRouteTableV2" }, { type: "azure-native:network/v20210201:VirtualHubRouteTableV2" }, { type: "azure-native:network/v20210301:VirtualHubRouteTableV2" }, { type: "azure-native:network/v20210501:VirtualHubRouteTableV2" }, { type: "azure-native:network/v20210801:VirtualHubRouteTableV2" }, { type: "azure-native:network/v20220101:VirtualHubRouteTableV2" }, { type: "azure-native:network/v20220501:VirtualHubRouteTableV2" }, { type: "azure-native:network/v20220701:VirtualHubRouteTableV2" }, { type: "azure-native:network/v20220901:VirtualHubRouteTableV2" }, { type: "azure-native:network/v20221101:VirtualHubRouteTableV2" }, { type: "azure-native:network/v20230201:VirtualHubRouteTableV2" }, { type: "azure-native:network/v20230401:VirtualHubRouteTableV2" }, { type: "azure-native:network/v20230501:VirtualHubRouteTableV2" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VirtualHubRouteTableV2.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualHubRouteTableV2 resource.
 */
export interface VirtualHubRouteTableV2Args {
    /**
     * List of all connections attached to this route table v2.
     */
    attachedConnections?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The resource group name of the VirtualHub.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the VirtualHubRouteTableV2.
     */
    routeTableName?: pulumi.Input<string>;
    /**
     * List of all routes.
     */
    routes?: pulumi.Input<pulumi.Input<types.inputs.VirtualHubRouteV2Args>[]>;
    /**
     * The name of the VirtualHub.
     */
    virtualHubName: pulumi.Input<string>;
}
