import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * CDN endpoint is the entity within a CDN profile containing configuration information such as origin, protocol, content caching and delivery behavior. The CDN endpoint uses the URL format <endpointname>.azureedge.net.
 */
export class Endpoint extends pulumi.CustomResource {
    /**
     * Get an existing Endpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Endpoint {
        return new Endpoint(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:cdn/v20230701preview:Endpoint';

    /**
     * Returns true if the given object is an instance of Endpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Endpoint {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Endpoint.__pulumiType;
    }

    /**
     * List of content types on which compression applies. The value should be a valid MIME type.
     */
    public readonly contentTypesToCompress!: pulumi.Output<string[] | undefined>;
    /**
     * The custom domains under the endpoint.
     */
    public /*out*/ readonly customDomains!: pulumi.Output<types.outputs.DeepCreatedCustomDomainResponse[]>;
    /**
     * A reference to the origin group.
     */
    public readonly defaultOriginGroup!: pulumi.Output<types.outputs.ResourceReferenceResponse | undefined>;
    /**
     * A policy that specifies the delivery rules to be used for an endpoint.
     */
    public readonly deliveryPolicy!: pulumi.Output<types.outputs.EndpointPropertiesUpdateParametersResponseDeliveryPolicy | undefined>;
    /**
     * List of rules defining the user's geo access within a CDN endpoint. Each geo filter defines an access rule to a specified path or content, e.g. block APAC for path /pictures/
     */
    public readonly geoFilters!: pulumi.Output<types.outputs.GeoFilterResponse[] | undefined>;
    /**
     * The host name of the endpoint structured as {endpointName}.{DNSZone}, e.g. contoso.azureedge.net
     */
    public /*out*/ readonly hostName!: pulumi.Output<string>;
    /**
     * Indicates whether content compression is enabled on CDN. Default value is false. If compression is enabled, content will be served as compressed if user requests for a compressed version. Content won't be compressed on CDN when requested content is smaller than 1 byte or larger than 1 MB.
     */
    public readonly isCompressionEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * Indicates whether HTTP traffic is allowed on the endpoint. Default value is true. At least one protocol (HTTP or HTTPS) must be allowed.
     */
    public readonly isHttpAllowed!: pulumi.Output<boolean | undefined>;
    /**
     * Indicates whether HTTPS traffic is allowed on the endpoint. Default value is true. At least one protocol (HTTP or HTTPS) must be allowed.
     */
    public readonly isHttpsAllowed!: pulumi.Output<boolean | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Specifies what scenario the customer wants this CDN endpoint to optimize for, e.g. Download, Media services. With this information, CDN can apply scenario driven optimization.
     */
    public readonly optimizationType!: pulumi.Output<string | undefined>;
    /**
     * The origin groups comprising of origins that are used for load balancing the traffic based on availability.
     */
    public readonly originGroups!: pulumi.Output<types.outputs.DeepCreatedOriginGroupResponse[] | undefined>;
    /**
     * The host header value sent to the origin with each request. This property at Endpoint is only allowed when endpoint uses single origin and can be overridden by the same property specified at origin.If you leave this blank, the request hostname determines this value. Azure CDN origins, such as Web Apps, Blob Storage, and Cloud Services require this host header value to match the origin hostname by default.
     */
    public readonly originHostHeader!: pulumi.Output<string | undefined>;
    /**
     * A directory path on the origin that CDN can use to retrieve content from, e.g. contoso.cloudapp.net/originpath.
     */
    public readonly originPath!: pulumi.Output<string | undefined>;
    /**
     * The source of the content being delivered via CDN.
     */
    public readonly origins!: pulumi.Output<types.outputs.DeepCreatedOriginResponse[]>;
    /**
     * Path to a file hosted on the origin which helps accelerate delivery of the dynamic content and calculate the most optimal routes for the CDN. This is relative to the origin path. This property is only relevant when using a single origin.
     */
    public readonly probePath!: pulumi.Output<string | undefined>;
    /**
     * Provisioning status of the endpoint.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Defines how CDN caches requests that include query strings. You can ignore any query strings when caching, bypass caching to prevent requests that contain query strings from being cached, or cache every request with a unique URL.
     */
    public readonly queryStringCachingBehavior!: pulumi.Output<string | undefined>;
    /**
     * Resource status of the endpoint.
     */
    public /*out*/ readonly resourceState!: pulumi.Output<string>;
    /**
     * Read only system data
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * List of keys used to validate the signed URL hashes.
     */
    public readonly urlSigningKeys!: pulumi.Output<types.outputs.UrlSigningKeyResponse[] | undefined>;
    /**
     * Defines the Web Application Firewall policy for the endpoint (if applicable)
     */
    public readonly webApplicationFirewallPolicyLink!: pulumi.Output<types.outputs.EndpointPropertiesUpdateParametersResponseWebApplicationFirewallPolicyLink | undefined>;

    /**
     * Create a Endpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EndpointArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.origins === undefined) && !opts.urn) {
                throw new Error("Missing required property 'origins'");
            }
            if ((!args || args.profileName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'profileName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["contentTypesToCompress"] = args ? args.contentTypesToCompress : undefined;
            resourceInputs["defaultOriginGroup"] = args ? args.defaultOriginGroup : undefined;
            resourceInputs["deliveryPolicy"] = args ? args.deliveryPolicy : undefined;
            resourceInputs["endpointName"] = args ? args.endpointName : undefined;
            resourceInputs["geoFilters"] = args ? args.geoFilters : undefined;
            resourceInputs["isCompressionEnabled"] = args ? args.isCompressionEnabled : undefined;
            resourceInputs["isHttpAllowed"] = (args ? args.isHttpAllowed : undefined) ?? true;
            resourceInputs["isHttpsAllowed"] = (args ? args.isHttpsAllowed : undefined) ?? true;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["optimizationType"] = args ? args.optimizationType : undefined;
            resourceInputs["originGroups"] = args ? args.originGroups : undefined;
            resourceInputs["originHostHeader"] = args ? args.originHostHeader : undefined;
            resourceInputs["originPath"] = args ? args.originPath : undefined;
            resourceInputs["origins"] = args ? args.origins : undefined;
            resourceInputs["probePath"] = args ? args.probePath : undefined;
            resourceInputs["profileName"] = args ? args.profileName : undefined;
            resourceInputs["queryStringCachingBehavior"] = (args ? args.queryStringCachingBehavior : undefined) ?? "NotSet";
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["urlSigningKeys"] = args ? args.urlSigningKeys : undefined;
            resourceInputs["webApplicationFirewallPolicyLink"] = args ? args.webApplicationFirewallPolicyLink : undefined;
            resourceInputs["customDomains"] = undefined /*out*/;
            resourceInputs["hostName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["contentTypesToCompress"] = undefined /*out*/;
            resourceInputs["customDomains"] = undefined /*out*/;
            resourceInputs["defaultOriginGroup"] = undefined /*out*/;
            resourceInputs["deliveryPolicy"] = undefined /*out*/;
            resourceInputs["geoFilters"] = undefined /*out*/;
            resourceInputs["hostName"] = undefined /*out*/;
            resourceInputs["isCompressionEnabled"] = undefined /*out*/;
            resourceInputs["isHttpAllowed"] = undefined /*out*/;
            resourceInputs["isHttpsAllowed"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["optimizationType"] = undefined /*out*/;
            resourceInputs["originGroups"] = undefined /*out*/;
            resourceInputs["originHostHeader"] = undefined /*out*/;
            resourceInputs["originPath"] = undefined /*out*/;
            resourceInputs["origins"] = undefined /*out*/;
            resourceInputs["probePath"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["queryStringCachingBehavior"] = undefined /*out*/;
            resourceInputs["resourceState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["urlSigningKeys"] = undefined /*out*/;
            resourceInputs["webApplicationFirewallPolicyLink"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:cdn:Endpoint" }, { type: "azure-native:cdn/v20150601:Endpoint" }, { type: "azure-native:cdn/v20160402:Endpoint" }, { type: "azure-native:cdn/v20161002:Endpoint" }, { type: "azure-native:cdn/v20170402:Endpoint" }, { type: "azure-native:cdn/v20171012:Endpoint" }, { type: "azure-native:cdn/v20190415:Endpoint" }, { type: "azure-native:cdn/v20190615:Endpoint" }, { type: "azure-native:cdn/v20190615preview:Endpoint" }, { type: "azure-native:cdn/v20191231:Endpoint" }, { type: "azure-native:cdn/v20200331:Endpoint" }, { type: "azure-native:cdn/v20200415:Endpoint" }, { type: "azure-native:cdn/v20200901:Endpoint" }, { type: "azure-native:cdn/v20210601:Endpoint" }, { type: "azure-native:cdn/v20220501preview:Endpoint" }, { type: "azure-native:cdn/v20221101preview:Endpoint" }, { type: "azure-native:cdn/v20230501:Endpoint" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Endpoint.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Endpoint resource.
 */
export interface EndpointArgs {
    /**
     * List of content types on which compression applies. The value should be a valid MIME type.
     */
    contentTypesToCompress?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A reference to the origin group.
     */
    defaultOriginGroup?: pulumi.Input<types.inputs.ResourceReferenceArgs>;
    /**
     * A policy that specifies the delivery rules to be used for an endpoint.
     */
    deliveryPolicy?: pulumi.Input<types.inputs.EndpointPropertiesUpdateParametersDeliveryPolicyArgs>;
    /**
     * Name of the endpoint under the profile which is unique globally.
     */
    endpointName?: pulumi.Input<string>;
    /**
     * List of rules defining the user's geo access within a CDN endpoint. Each geo filter defines an access rule to a specified path or content, e.g. block APAC for path /pictures/
     */
    geoFilters?: pulumi.Input<pulumi.Input<types.inputs.GeoFilterArgs>[]>;
    /**
     * Indicates whether content compression is enabled on CDN. Default value is false. If compression is enabled, content will be served as compressed if user requests for a compressed version. Content won't be compressed on CDN when requested content is smaller than 1 byte or larger than 1 MB.
     */
    isCompressionEnabled?: pulumi.Input<boolean>;
    /**
     * Indicates whether HTTP traffic is allowed on the endpoint. Default value is true. At least one protocol (HTTP or HTTPS) must be allowed.
     */
    isHttpAllowed?: pulumi.Input<boolean>;
    /**
     * Indicates whether HTTPS traffic is allowed on the endpoint. Default value is true. At least one protocol (HTTP or HTTPS) must be allowed.
     */
    isHttpsAllowed?: pulumi.Input<boolean>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies what scenario the customer wants this CDN endpoint to optimize for, e.g. Download, Media services. With this information, CDN can apply scenario driven optimization.
     */
    optimizationType?: pulumi.Input<string | types.enums.OptimizationType>;
    /**
     * The origin groups comprising of origins that are used for load balancing the traffic based on availability.
     */
    originGroups?: pulumi.Input<pulumi.Input<types.inputs.DeepCreatedOriginGroupArgs>[]>;
    /**
     * The host header value sent to the origin with each request. This property at Endpoint is only allowed when endpoint uses single origin and can be overridden by the same property specified at origin.If you leave this blank, the request hostname determines this value. Azure CDN origins, such as Web Apps, Blob Storage, and Cloud Services require this host header value to match the origin hostname by default.
     */
    originHostHeader?: pulumi.Input<string>;
    /**
     * A directory path on the origin that CDN can use to retrieve content from, e.g. contoso.cloudapp.net/originpath.
     */
    originPath?: pulumi.Input<string>;
    /**
     * The source of the content being delivered via CDN.
     */
    origins: pulumi.Input<pulumi.Input<types.inputs.DeepCreatedOriginArgs>[]>;
    /**
     * Path to a file hosted on the origin which helps accelerate delivery of the dynamic content and calculate the most optimal routes for the CDN. This is relative to the origin path. This property is only relevant when using a single origin.
     */
    probePath?: pulumi.Input<string>;
    /**
     * Name of the CDN profile which is unique within the resource group.
     */
    profileName: pulumi.Input<string>;
    /**
     * Defines how CDN caches requests that include query strings. You can ignore any query strings when caching, bypass caching to prevent requests that contain query strings from being cached, or cache every request with a unique URL.
     */
    queryStringCachingBehavior?: pulumi.Input<types.enums.QueryStringCachingBehavior>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * List of keys used to validate the signed URL hashes.
     */
    urlSigningKeys?: pulumi.Input<pulumi.Input<types.inputs.UrlSigningKeyArgs>[]>;
    /**
     * Defines the Web Application Firewall policy for the endpoint (if applicable)
     */
    webApplicationFirewallPolicyLink?: pulumi.Input<types.inputs.EndpointPropertiesUpdateParametersWebApplicationFirewallPolicyLinkArgs>;
}
