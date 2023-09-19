import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Friendly Routes name mapping to the any Routes or secret related information.
 * Azure REST API version: 2023-05-01. Prior API version in Azure Native 1.x: 2020-09-01
 */
export class Route extends pulumi.CustomResource {
    /**
     * Get an existing Route resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Route {
        return new Route(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:cdn:Route';

    /**
     * Returns true if the given object is an instance of Route.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Route {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Route.__pulumiType;
    }

    /**
     * The caching configuration for this route. To disable caching, do not provide a cacheConfiguration object.
     */
    public readonly cacheConfiguration!: pulumi.Output<types.outputs.AfdRouteCacheConfigurationResponse | undefined>;
    /**
     * Domains referenced by this endpoint.
     */
    public readonly customDomains!: pulumi.Output<types.outputs.ActivatedResourceReferenceResponse[] | undefined>;
    public /*out*/ readonly deploymentStatus!: pulumi.Output<string>;
    /**
     * Whether to enable use of this rule. Permitted values are 'Enabled' or 'Disabled'
     */
    public readonly enabledState!: pulumi.Output<string | undefined>;
    /**
     * The name of the endpoint which holds the route.
     */
    public readonly endpointName!: pulumi.Output<string>;
    /**
     * Protocol this rule will use when forwarding traffic to backends.
     */
    public readonly forwardingProtocol!: pulumi.Output<string | undefined>;
    /**
     * Whether to automatically redirect HTTP traffic to HTTPS traffic. Note that this is a easy way to set up this rule and it will be the first rule that gets executed.
     */
    public readonly httpsRedirect!: pulumi.Output<string | undefined>;
    /**
     * whether this route will be linked to the default endpoint domain.
     */
    public readonly linkToDefaultDomain!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * A reference to the origin group.
     */
    public readonly originGroup!: pulumi.Output<types.outputs.ResourceReferenceResponse>;
    /**
     * A directory path on the origin that AzureFrontDoor can use to retrieve content from, e.g. contoso.cloudapp.net/originpath.
     */
    public readonly originPath!: pulumi.Output<string | undefined>;
    /**
     * The route patterns of the rule.
     */
    public readonly patternsToMatch!: pulumi.Output<string[] | undefined>;
    /**
     * Provisioning status
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * rule sets referenced by this endpoint.
     */
    public readonly ruleSets!: pulumi.Output<types.outputs.ResourceReferenceResponse[] | undefined>;
    /**
     * List of supported protocols for this route.
     */
    public readonly supportedProtocols!: pulumi.Output<string[] | undefined>;
    /**
     * Read only system data
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Route resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RouteArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.endpointName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'endpointName'");
            }
            if ((!args || args.originGroup === undefined) && !opts.urn) {
                throw new Error("Missing required property 'originGroup'");
            }
            if ((!args || args.profileName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'profileName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["cacheConfiguration"] = args ? args.cacheConfiguration : undefined;
            resourceInputs["customDomains"] = args ? args.customDomains : undefined;
            resourceInputs["enabledState"] = args ? args.enabledState : undefined;
            resourceInputs["endpointName"] = args ? args.endpointName : undefined;
            resourceInputs["forwardingProtocol"] = (args ? args.forwardingProtocol : undefined) ?? "MatchRequest";
            resourceInputs["httpsRedirect"] = (args ? args.httpsRedirect : undefined) ?? "Disabled";
            resourceInputs["linkToDefaultDomain"] = (args ? args.linkToDefaultDomain : undefined) ?? "Disabled";
            resourceInputs["originGroup"] = args ? args.originGroup : undefined;
            resourceInputs["originPath"] = args ? args.originPath : undefined;
            resourceInputs["patternsToMatch"] = args ? args.patternsToMatch : undefined;
            resourceInputs["profileName"] = args ? args.profileName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["routeName"] = args ? args.routeName : undefined;
            resourceInputs["ruleSets"] = args ? args.ruleSets : undefined;
            resourceInputs["supportedProtocols"] = args ? args.supportedProtocols : undefined;
            resourceInputs["deploymentStatus"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["cacheConfiguration"] = undefined /*out*/;
            resourceInputs["customDomains"] = undefined /*out*/;
            resourceInputs["deploymentStatus"] = undefined /*out*/;
            resourceInputs["enabledState"] = undefined /*out*/;
            resourceInputs["endpointName"] = undefined /*out*/;
            resourceInputs["forwardingProtocol"] = undefined /*out*/;
            resourceInputs["httpsRedirect"] = undefined /*out*/;
            resourceInputs["linkToDefaultDomain"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["originGroup"] = undefined /*out*/;
            resourceInputs["originPath"] = undefined /*out*/;
            resourceInputs["patternsToMatch"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["ruleSets"] = undefined /*out*/;
            resourceInputs["supportedProtocols"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:cdn/v20200901:Route" }, { type: "azure-native:cdn/v20210601:Route" }, { type: "azure-native:cdn/v20220501preview:Route" }, { type: "azure-native:cdn/v20221101preview:Route" }, { type: "azure-native:cdn/v20230501:Route" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Route.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Route resource.
 */
export interface RouteArgs {
    /**
     * The caching configuration for this route. To disable caching, do not provide a cacheConfiguration object.
     */
    cacheConfiguration?: pulumi.Input<types.inputs.AfdRouteCacheConfigurationArgs>;
    /**
     * Domains referenced by this endpoint.
     */
    customDomains?: pulumi.Input<pulumi.Input<types.inputs.ActivatedResourceReferenceArgs>[]>;
    /**
     * Whether to enable use of this rule. Permitted values are 'Enabled' or 'Disabled'
     */
    enabledState?: pulumi.Input<string | types.enums.EnabledState>;
    /**
     * Name of the endpoint under the profile which is unique globally.
     */
    endpointName: pulumi.Input<string>;
    /**
     * Protocol this rule will use when forwarding traffic to backends.
     */
    forwardingProtocol?: pulumi.Input<string | types.enums.ForwardingProtocol>;
    /**
     * Whether to automatically redirect HTTP traffic to HTTPS traffic. Note that this is a easy way to set up this rule and it will be the first rule that gets executed.
     */
    httpsRedirect?: pulumi.Input<string | types.enums.HttpsRedirect>;
    /**
     * whether this route will be linked to the default endpoint domain.
     */
    linkToDefaultDomain?: pulumi.Input<string | types.enums.LinkToDefaultDomain>;
    /**
     * A reference to the origin group.
     */
    originGroup: pulumi.Input<types.inputs.ResourceReferenceArgs>;
    /**
     * A directory path on the origin that AzureFrontDoor can use to retrieve content from, e.g. contoso.cloudapp.net/originpath.
     */
    originPath?: pulumi.Input<string>;
    /**
     * The route patterns of the rule.
     */
    patternsToMatch?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the Azure Front Door Standard or Azure Front Door Premium profile which is unique within the resource group.
     */
    profileName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the routing rule.
     */
    routeName?: pulumi.Input<string>;
    /**
     * rule sets referenced by this endpoint.
     */
    ruleSets?: pulumi.Input<pulumi.Input<types.inputs.ResourceReferenceArgs>[]>;
    /**
     * List of supported protocols for this route.
     */
    supportedProtocols?: pulumi.Input<pulumi.Input<string | types.enums.AFDEndpointProtocols>[]>;
}
