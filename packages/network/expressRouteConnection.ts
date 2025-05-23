import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * ExpressRouteConnection resource.
 *
 * Uses Azure REST API version 2024-05-01. In version 2.x of the Azure Native provider, it used API version 2023-02-01.
 *
 * Other available API versions: 2018-08-01, 2018-10-01, 2018-11-01, 2018-12-01, 2019-02-01, 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class ExpressRouteConnection extends pulumi.CustomResource {
    /**
     * Get an existing ExpressRouteConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ExpressRouteConnection {
        return new ExpressRouteConnection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:ExpressRouteConnection';

    /**
     * Returns true if the given object is an instance of ExpressRouteConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ExpressRouteConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ExpressRouteConnection.__pulumiType;
    }

    /**
     * Authorization key to establish the connection.
     */
    public readonly authorizationKey!: pulumi.Output<string | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Enable internet security.
     */
    public readonly enableInternetSecurity!: pulumi.Output<boolean | undefined>;
    /**
     * Bypass the ExpressRoute gateway when accessing private-links. ExpressRoute FastPath (expressRouteGatewayBypass) must be enabled.
     */
    public readonly enablePrivateLinkFastPath!: pulumi.Output<boolean | undefined>;
    /**
     * The ExpressRoute circuit peering.
     */
    public readonly expressRouteCircuitPeering!: pulumi.Output<types.outputs.ExpressRouteCircuitPeeringIdResponse>;
    /**
     * Enable FastPath to vWan Firewall hub.
     */
    public readonly expressRouteGatewayBypass!: pulumi.Output<boolean | undefined>;
    /**
     * The name of the resource.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the express route connection resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The Routing Configuration indicating the associated and propagated route tables on this connection.
     */
    public readonly routingConfiguration!: pulumi.Output<types.outputs.RoutingConfigurationResponse | undefined>;
    /**
     * The routing weight associated to the connection.
     */
    public readonly routingWeight!: pulumi.Output<number | undefined>;

    /**
     * Create a ExpressRouteConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ExpressRouteConnectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.expressRouteCircuitPeering === undefined) && !opts.urn) {
                throw new Error("Missing required property 'expressRouteCircuitPeering'");
            }
            if ((!args || args.expressRouteGatewayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'expressRouteGatewayName'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["authorizationKey"] = args ? args.authorizationKey : undefined;
            resourceInputs["connectionName"] = args ? args.connectionName : undefined;
            resourceInputs["enableInternetSecurity"] = args ? args.enableInternetSecurity : undefined;
            resourceInputs["enablePrivateLinkFastPath"] = args ? args.enablePrivateLinkFastPath : undefined;
            resourceInputs["expressRouteCircuitPeering"] = args ? args.expressRouteCircuitPeering : undefined;
            resourceInputs["expressRouteGatewayBypass"] = args ? args.expressRouteGatewayBypass : undefined;
            resourceInputs["expressRouteGatewayName"] = args ? args.expressRouteGatewayName : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["routingConfiguration"] = args ? args.routingConfiguration : undefined;
            resourceInputs["routingWeight"] = args ? args.routingWeight : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
        } else {
            resourceInputs["authorizationKey"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["enableInternetSecurity"] = undefined /*out*/;
            resourceInputs["enablePrivateLinkFastPath"] = undefined /*out*/;
            resourceInputs["expressRouteCircuitPeering"] = undefined /*out*/;
            resourceInputs["expressRouteGatewayBypass"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["routingConfiguration"] = undefined /*out*/;
            resourceInputs["routingWeight"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20180801:ExpressRouteConnection" }, { type: "azure-native:network/v20181001:ExpressRouteConnection" }, { type: "azure-native:network/v20181101:ExpressRouteConnection" }, { type: "azure-native:network/v20181201:ExpressRouteConnection" }, { type: "azure-native:network/v20190201:ExpressRouteConnection" }, { type: "azure-native:network/v20190401:ExpressRouteConnection" }, { type: "azure-native:network/v20190601:ExpressRouteConnection" }, { type: "azure-native:network/v20190701:ExpressRouteConnection" }, { type: "azure-native:network/v20190801:ExpressRouteConnection" }, { type: "azure-native:network/v20190901:ExpressRouteConnection" }, { type: "azure-native:network/v20191101:ExpressRouteConnection" }, { type: "azure-native:network/v20191201:ExpressRouteConnection" }, { type: "azure-native:network/v20200301:ExpressRouteConnection" }, { type: "azure-native:network/v20200401:ExpressRouteConnection" }, { type: "azure-native:network/v20200501:ExpressRouteConnection" }, { type: "azure-native:network/v20200601:ExpressRouteConnection" }, { type: "azure-native:network/v20200701:ExpressRouteConnection" }, { type: "azure-native:network/v20200801:ExpressRouteConnection" }, { type: "azure-native:network/v20201101:ExpressRouteConnection" }, { type: "azure-native:network/v20210201:ExpressRouteConnection" }, { type: "azure-native:network/v20210301:ExpressRouteConnection" }, { type: "azure-native:network/v20210501:ExpressRouteConnection" }, { type: "azure-native:network/v20210801:ExpressRouteConnection" }, { type: "azure-native:network/v20220101:ExpressRouteConnection" }, { type: "azure-native:network/v20220501:ExpressRouteConnection" }, { type: "azure-native:network/v20220701:ExpressRouteConnection" }, { type: "azure-native:network/v20220901:ExpressRouteConnection" }, { type: "azure-native:network/v20221101:ExpressRouteConnection" }, { type: "azure-native:network/v20230201:ExpressRouteConnection" }, { type: "azure-native:network/v20230401:ExpressRouteConnection" }, { type: "azure-native:network/v20230501:ExpressRouteConnection" }, { type: "azure-native:network/v20230601:ExpressRouteConnection" }, { type: "azure-native:network/v20230901:ExpressRouteConnection" }, { type: "azure-native:network/v20231101:ExpressRouteConnection" }, { type: "azure-native:network/v20240101:ExpressRouteConnection" }, { type: "azure-native:network/v20240301:ExpressRouteConnection" }, { type: "azure-native:network/v20240501:ExpressRouteConnection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ExpressRouteConnection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ExpressRouteConnection resource.
 */
export interface ExpressRouteConnectionArgs {
    /**
     * Authorization key to establish the connection.
     */
    authorizationKey?: pulumi.Input<string>;
    /**
     * The name of the connection subresource.
     */
    connectionName?: pulumi.Input<string>;
    /**
     * Enable internet security.
     */
    enableInternetSecurity?: pulumi.Input<boolean>;
    /**
     * Bypass the ExpressRoute gateway when accessing private-links. ExpressRoute FastPath (expressRouteGatewayBypass) must be enabled.
     */
    enablePrivateLinkFastPath?: pulumi.Input<boolean>;
    /**
     * The ExpressRoute circuit peering.
     */
    expressRouteCircuitPeering: pulumi.Input<types.inputs.ExpressRouteCircuitPeeringIdArgs>;
    /**
     * Enable FastPath to vWan Firewall hub.
     */
    expressRouteGatewayBypass?: pulumi.Input<boolean>;
    /**
     * The name of the ExpressRoute gateway.
     */
    expressRouteGatewayName: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the resource.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Routing Configuration indicating the associated and propagated route tables on this connection.
     */
    routingConfiguration?: pulumi.Input<types.inputs.RoutingConfigurationArgs>;
    /**
     * The routing weight associated to the connection.
     */
    routingWeight?: pulumi.Input<number>;
}