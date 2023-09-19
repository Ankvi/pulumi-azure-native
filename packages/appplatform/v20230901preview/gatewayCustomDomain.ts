import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Custom domain of the Spring Cloud Gateway
 */
export class GatewayCustomDomain extends pulumi.CustomResource {
    /**
     * Get an existing GatewayCustomDomain resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): GatewayCustomDomain {
        return new GatewayCustomDomain(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:appplatform/v20230901preview:GatewayCustomDomain';

    /**
     * Returns true if the given object is an instance of GatewayCustomDomain.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GatewayCustomDomain {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GatewayCustomDomain.__pulumiType;
    }

    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The properties of custom domain for Spring Cloud Gateway
     */
    public readonly properties!: pulumi.Output<types.outputs.GatewayCustomDomainPropertiesResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a GatewayCustomDomain resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GatewayCustomDomainArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["domainName"] = args ? args.domainName : undefined;
            resourceInputs["gatewayName"] = args ? args.gatewayName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
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
        const aliasOpts = { aliases: [{ type: "azure-native:appplatform:GatewayCustomDomain" }, { type: "azure-native:appplatform/v20220101preview:GatewayCustomDomain" }, { type: "azure-native:appplatform/v20220301preview:GatewayCustomDomain" }, { type: "azure-native:appplatform/v20220501preview:GatewayCustomDomain" }, { type: "azure-native:appplatform/v20220901preview:GatewayCustomDomain" }, { type: "azure-native:appplatform/v20221101preview:GatewayCustomDomain" }, { type: "azure-native:appplatform/v20221201:GatewayCustomDomain" }, { type: "azure-native:appplatform/v20230101preview:GatewayCustomDomain" }, { type: "azure-native:appplatform/v20230301preview:GatewayCustomDomain" }, { type: "azure-native:appplatform/v20230501preview:GatewayCustomDomain" }, { type: "azure-native:appplatform/v20230701preview:GatewayCustomDomain" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(GatewayCustomDomain.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a GatewayCustomDomain resource.
 */
export interface GatewayCustomDomainArgs {
    /**
     * The name of the Spring Cloud Gateway custom domain.
     */
    domainName?: pulumi.Input<string>;
    /**
     * The name of Spring Cloud Gateway.
     */
    gatewayName: pulumi.Input<string>;
    /**
     * The properties of custom domain for Spring Cloud Gateway
     */
    properties?: pulumi.Input<types.inputs.GatewayCustomDomainPropertiesArgs>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Service resource.
     */
    serviceName: pulumi.Input<string>;
}
