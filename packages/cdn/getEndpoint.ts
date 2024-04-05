import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an existing CDN endpoint with the specified endpoint name under the specified subscription, resource group and profile.
 * Azure REST API version: 2023-05-01.
 *
 * Other available API versions: 2016-04-02, 2023-07-01-preview, 2024-02-01.
 */
export function getEndpoint(args: GetEndpointArgs, opts?: pulumi.InvokeOptions): Promise<GetEndpointResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cdn:getEndpoint", {
        "endpointName": args.endpointName,
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEndpointArgs {
    /**
     * Name of the endpoint under the profile which is unique globally.
     */
    endpointName: string;
    /**
     * Name of the CDN profile which is unique within the resource group.
     */
    profileName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: string;
}

/**
 * CDN endpoint is the entity within a CDN profile containing configuration information such as origin, protocol, content caching and delivery behavior. The CDN endpoint uses the URL format <endpointname>.azureedge.net.
 */
export interface GetEndpointResult {
    /**
     * List of content types on which compression applies. The value should be a valid MIME type.
     */
    readonly contentTypesToCompress?: string[];
    /**
     * The custom domains under the endpoint.
     */
    readonly customDomains: types.outputs.DeepCreatedCustomDomainResponse[];
    /**
     * A reference to the origin group.
     */
    readonly defaultOriginGroup?: types.outputs.ResourceReferenceResponse;
    /**
     * A policy that specifies the delivery rules to be used for an endpoint.
     */
    readonly deliveryPolicy?: types.outputs.EndpointPropertiesUpdateParametersResponseDeliveryPolicy;
    /**
     * List of rules defining the user's geo access within a CDN endpoint. Each geo filter defines an access rule to a specified path or content, e.g. block APAC for path /pictures/
     */
    readonly geoFilters?: types.outputs.GeoFilterResponse[];
    /**
     * The host name of the endpoint structured as {endpointName}.{DNSZone}, e.g. contoso.azureedge.net
     */
    readonly hostName: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Indicates whether content compression is enabled on CDN. Default value is false. If compression is enabled, content will be served as compressed if user requests for a compressed version. Content won't be compressed on CDN when requested content is smaller than 1 byte or larger than 1 MB.
     */
    readonly isCompressionEnabled?: boolean;
    /**
     * Indicates whether HTTP traffic is allowed on the endpoint. Default value is true. At least one protocol (HTTP or HTTPS) must be allowed.
     */
    readonly isHttpAllowed?: boolean;
    /**
     * Indicates whether HTTPS traffic is allowed on the endpoint. Default value is true. At least one protocol (HTTP or HTTPS) must be allowed.
     */
    readonly isHttpsAllowed?: boolean;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Specifies what scenario the customer wants this CDN endpoint to optimize for, e.g. Download, Media services. With this information, CDN can apply scenario driven optimization.
     */
    readonly optimizationType?: string;
    /**
     * The origin groups comprising of origins that are used for load balancing the traffic based on availability.
     */
    readonly originGroups?: types.outputs.DeepCreatedOriginGroupResponse[];
    /**
     * The host header value sent to the origin with each request. This property at Endpoint is only allowed when endpoint uses single origin and can be overridden by the same property specified at origin.If you leave this blank, the request hostname determines this value. Azure CDN origins, such as Web Apps, Blob Storage, and Cloud Services require this host header value to match the origin hostname by default.
     */
    readonly originHostHeader?: string;
    /**
     * A directory path on the origin that CDN can use to retrieve content from, e.g. contoso.cloudapp.net/originpath.
     */
    readonly originPath?: string;
    /**
     * The source of the content being delivered via CDN.
     */
    readonly origins: types.outputs.DeepCreatedOriginResponse[];
    /**
     * Path to a file hosted on the origin which helps accelerate delivery of the dynamic content and calculate the most optimal routes for the CDN. This is relative to the origin path. This property is only relevant when using a single origin.
     */
    readonly probePath?: string;
    /**
     * Provisioning status of the endpoint.
     */
    readonly provisioningState: string;
    /**
     * Defines how CDN caches requests that include query strings. You can ignore any query strings when caching, bypass caching to prevent requests that contain query strings from being cached, or cache every request with a unique URL.
     */
    readonly queryStringCachingBehavior?: string;
    /**
     * Resource status of the endpoint.
     */
    readonly resourceState: string;
    /**
     * Read only system data
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * List of keys used to validate the signed URL hashes.
     */
    readonly urlSigningKeys?: types.outputs.UrlSigningKeyResponse[];
    /**
     * Defines the Web Application Firewall policy for the endpoint (if applicable)
     */
    readonly webApplicationFirewallPolicyLink?: types.outputs.EndpointPropertiesUpdateParametersResponseWebApplicationFirewallPolicyLink;
}
/**
 * Gets an existing CDN endpoint with the specified endpoint name under the specified subscription, resource group and profile.
 * Azure REST API version: 2023-05-01.
 *
 * Other available API versions: 2016-04-02, 2023-07-01-preview, 2024-02-01.
 */
export function getEndpointOutput(args: GetEndpointOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEndpointResult> {
    return pulumi.output(args).apply((a: any) => getEndpoint(a, opts))
}

export interface GetEndpointOutputArgs {
    /**
     * Name of the endpoint under the profile which is unique globally.
     */
    endpointName: pulumi.Input<string>;
    /**
     * Name of the CDN profile which is unique within the resource group.
     */
    profileName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}