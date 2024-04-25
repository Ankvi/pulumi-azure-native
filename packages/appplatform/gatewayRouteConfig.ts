import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Spring Cloud Gateway route config resource
 * Azure REST API version: 2023-05-01-preview. Prior API version in Azure Native 1.x: 2022-01-01-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2023-09-01-preview, 2023-11-01-preview, 2023-12-01, 2024-01-01-preview, 2024-05-01-preview.
 */
export class GatewayRouteConfig extends pulumi.CustomResource {
    /**
     * Get an existing GatewayRouteConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): GatewayRouteConfig {
        return new GatewayRouteConfig(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:appplatform:GatewayRouteConfig';

    /**
     * Returns true if the given object is an instance of GatewayRouteConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GatewayRouteConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GatewayRouteConfig.__pulumiType;
    }

    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * API route config of the Spring Cloud Gateway
     */
    public readonly properties!: pulumi.Output<types.outputs.GatewayRouteConfigPropertiesResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a GatewayRouteConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GatewayRouteConfigArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.gatewayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'gatewayName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            resourceInputs["gatewayName"] = args ? args.gatewayName : undefined;
            resourceInputs["properties"] = args ? (args.properties ? pulumi.output(args.properties).apply(types.inputs.gatewayRouteConfigPropertiesArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["routeConfigName"] = args ? args.routeConfigName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:appplatform/v20220101preview:GatewayRouteConfig" }, { type: "azure-native:appplatform/v20220301preview:GatewayRouteConfig" }, { type: "azure-native:appplatform/v20220501preview:GatewayRouteConfig" }, { type: "azure-native:appplatform/v20220901preview:GatewayRouteConfig" }, { type: "azure-native:appplatform/v20221101preview:GatewayRouteConfig" }, { type: "azure-native:appplatform/v20221201:GatewayRouteConfig" }, { type: "azure-native:appplatform/v20230101preview:GatewayRouteConfig" }, { type: "azure-native:appplatform/v20230301preview:GatewayRouteConfig" }, { type: "azure-native:appplatform/v20230501preview:GatewayRouteConfig" }, { type: "azure-native:appplatform/v20230701preview:GatewayRouteConfig" }, { type: "azure-native:appplatform/v20230901preview:GatewayRouteConfig" }, { type: "azure-native:appplatform/v20231101preview:GatewayRouteConfig" }, { type: "azure-native:appplatform/v20231201:GatewayRouteConfig" }, { type: "azure-native:appplatform/v20240101preview:GatewayRouteConfig" }, { type: "azure-native:appplatform/v20240501preview:GatewayRouteConfig" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(GatewayRouteConfig.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a GatewayRouteConfig resource.
 */
export interface GatewayRouteConfigArgs {
    /**
     * The name of Spring Cloud Gateway.
     */
    gatewayName: pulumi.Input<string>;
    /**
     * API route config of the Spring Cloud Gateway
     */
    properties?: pulumi.Input<types.inputs.GatewayRouteConfigPropertiesArgs>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Spring Cloud Gateway route config.
     */
    routeConfigName?: pulumi.Input<string>;
    /**
     * The name of the Service resource.
     */
    serviceName: pulumi.Input<string>;
}