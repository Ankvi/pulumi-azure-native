import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * ExpressRoute gateway resource.
 * Azure REST API version: 2023-02-01. Prior API version in Azure Native 1.x: 2020-11-01.
 *
 * Other available API versions: 2021-03-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01.
 */
export class ExpressRouteGateway extends pulumi.CustomResource {
    /**
     * Get an existing ExpressRouteGateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ExpressRouteGateway {
        return new ExpressRouteGateway(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:ExpressRouteGateway';

    /**
     * Returns true if the given object is an instance of ExpressRouteGateway.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ExpressRouteGateway {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ExpressRouteGateway.__pulumiType;
    }

    /**
     * Configures this gateway to accept traffic from non Virtual WAN networks.
     */
    public readonly allowNonVirtualWanTraffic!: pulumi.Output<boolean | undefined>;
    /**
     * Configuration for auto scaling.
     */
    public readonly autoScaleConfiguration!: pulumi.Output<types.outputs.ExpressRouteGatewayPropertiesResponseAutoScaleConfiguration | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * List of ExpressRoute connections to the ExpressRoute gateway.
     */
    public readonly expressRouteConnections!: pulumi.Output<types.outputs.ExpressRouteConnectionResponse[] | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the express route gateway resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The Virtual Hub where the ExpressRoute gateway is or will be deployed.
     */
    public readonly virtualHub!: pulumi.Output<types.outputs.VirtualHubIdResponse>;

    /**
     * Create a ExpressRouteGateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ExpressRouteGatewayArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.virtualHub === undefined) && !opts.urn) {
                throw new Error("Missing required property 'virtualHub'");
            }
            resourceInputs["allowNonVirtualWanTraffic"] = args ? args.allowNonVirtualWanTraffic : undefined;
            resourceInputs["autoScaleConfiguration"] = args ? args.autoScaleConfiguration : undefined;
            resourceInputs["expressRouteConnections"] = args ? args.expressRouteConnections : undefined;
            resourceInputs["expressRouteGatewayName"] = args ? args.expressRouteGatewayName : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["virtualHub"] = args ? args.virtualHub : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["allowNonVirtualWanTraffic"] = undefined /*out*/;
            resourceInputs["autoScaleConfiguration"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["expressRouteConnections"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualHub"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20180801:ExpressRouteGateway" }, { type: "azure-native:network/v20181001:ExpressRouteGateway" }, { type: "azure-native:network/v20181101:ExpressRouteGateway" }, { type: "azure-native:network/v20181201:ExpressRouteGateway" }, { type: "azure-native:network/v20190201:ExpressRouteGateway" }, { type: "azure-native:network/v20190401:ExpressRouteGateway" }, { type: "azure-native:network/v20190601:ExpressRouteGateway" }, { type: "azure-native:network/v20190701:ExpressRouteGateway" }, { type: "azure-native:network/v20190801:ExpressRouteGateway" }, { type: "azure-native:network/v20190901:ExpressRouteGateway" }, { type: "azure-native:network/v20191101:ExpressRouteGateway" }, { type: "azure-native:network/v20191201:ExpressRouteGateway" }, { type: "azure-native:network/v20200301:ExpressRouteGateway" }, { type: "azure-native:network/v20200401:ExpressRouteGateway" }, { type: "azure-native:network/v20200501:ExpressRouteGateway" }, { type: "azure-native:network/v20200601:ExpressRouteGateway" }, { type: "azure-native:network/v20200701:ExpressRouteGateway" }, { type: "azure-native:network/v20200801:ExpressRouteGateway" }, { type: "azure-native:network/v20201101:ExpressRouteGateway" }, { type: "azure-native:network/v20210201:ExpressRouteGateway" }, { type: "azure-native:network/v20210301:ExpressRouteGateway" }, { type: "azure-native:network/v20210501:ExpressRouteGateway" }, { type: "azure-native:network/v20210801:ExpressRouteGateway" }, { type: "azure-native:network/v20220101:ExpressRouteGateway" }, { type: "azure-native:network/v20220501:ExpressRouteGateway" }, { type: "azure-native:network/v20220701:ExpressRouteGateway" }, { type: "azure-native:network/v20220901:ExpressRouteGateway" }, { type: "azure-native:network/v20221101:ExpressRouteGateway" }, { type: "azure-native:network/v20230201:ExpressRouteGateway" }, { type: "azure-native:network/v20230401:ExpressRouteGateway" }, { type: "azure-native:network/v20230501:ExpressRouteGateway" }, { type: "azure-native:network/v20230601:ExpressRouteGateway" }, { type: "azure-native:network/v20230901:ExpressRouteGateway" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ExpressRouteGateway.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ExpressRouteGateway resource.
 */
export interface ExpressRouteGatewayArgs {
    /**
     * Configures this gateway to accept traffic from non Virtual WAN networks.
     */
    allowNonVirtualWanTraffic?: pulumi.Input<boolean>;
    /**
     * Configuration for auto scaling.
     */
    autoScaleConfiguration?: pulumi.Input<types.inputs.ExpressRouteGatewayPropertiesAutoScaleConfigurationArgs>;
    /**
     * List of ExpressRoute connections to the ExpressRoute gateway.
     * These are also available as standalone resources. Do not mix inline and standalone resource as they will conflict with each other, leading to resources deletion.
     */
    expressRouteConnections?: pulumi.Input<pulumi.Input<types.inputs.ExpressRouteConnectionArgs>[]>;
    /**
     * The name of the ExpressRoute gateway.
     */
    expressRouteGatewayName?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The Virtual Hub where the ExpressRoute gateway is or will be deployed.
     */
    virtualHub: pulumi.Input<types.inputs.VirtualHubIdArgs>;
}
