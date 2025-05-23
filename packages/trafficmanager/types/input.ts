import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Class containing DNS settings in a Traffic Manager profile.
 */
export interface DnsConfigArgs {
    /**
     * The relative DNS name provided by this Traffic Manager profile. This value is combined with the DNS domain name used by Azure Traffic Manager to form the fully-qualified domain name (FQDN) of the profile.
     */
    relativeName?: pulumi.Input<string>;
    /**
     * The DNS Time-To-Live (TTL), in seconds. This informs the local DNS resolvers and DNS clients how long to cache DNS responses provided by this Traffic Manager profile.
     */
    ttl?: pulumi.Input<number>;
}

/**
 * Class representing a Traffic Manager endpoint.
 */
export interface EndpointArgs {
    /**
     * If Always Serve is enabled, probing for endpoint health will be disabled and endpoints will be included in the traffic routing method.
     */
    alwaysServe?: pulumi.Input<string | enums.AlwaysServe>;
    /**
     * List of custom headers.
     */
    customHeaders?: pulumi.Input<pulumi.Input<EndpointPropertiesCustomHeadersArgs>[]>;
    /**
     * Specifies the location of the external or nested endpoints when using the 'Performance' traffic routing method.
     */
    endpointLocation?: pulumi.Input<string>;
    /**
     * The monitoring status of the endpoint.
     */
    endpointMonitorStatus?: pulumi.Input<string | enums.EndpointMonitorStatus>;
    /**
     * The status of the endpoint. If the endpoint is Enabled, it is probed for endpoint health and is included in the traffic routing method.
     */
    endpointStatus?: pulumi.Input<string | enums.EndpointStatus>;
    /**
     * The list of countries/regions mapped to this endpoint when using the 'Geographic' traffic routing method. Please consult Traffic Manager Geographic documentation for a full list of accepted values.
     */
    geoMapping?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{resourceName}
     */
    id?: pulumi.Input<string>;
    /**
     * The minimum number of endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'.
     */
    minChildEndpoints?: pulumi.Input<number>;
    /**
     * The minimum number of IPv4 (DNS record type A) endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'.
     */
    minChildEndpointsIPv4?: pulumi.Input<number>;
    /**
     * The minimum number of IPv6 (DNS record type AAAA) endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'.
     */
    minChildEndpointsIPv6?: pulumi.Input<number>;
    /**
     * The name of the resource
     */
    name?: pulumi.Input<string>;
    /**
     * The priority of this endpoint when using the 'Priority' traffic routing method. Possible values are from 1 to 1000, lower values represent higher priority. This is an optional parameter.  If specified, it must be specified on all endpoints, and no two endpoints can share the same priority value.
     */
    priority?: pulumi.Input<number>;
    /**
     * The list of subnets, IP addresses, and/or address ranges mapped to this endpoint when using the 'Subnet' traffic routing method. An empty list will match all ranges not covered by other endpoints.
     */
    subnets?: pulumi.Input<pulumi.Input<EndpointPropertiesSubnetsArgs>[]>;
    /**
     * The fully-qualified DNS name or IP address of the endpoint. Traffic Manager returns this value in DNS responses to direct traffic to this endpoint.
     */
    target?: pulumi.Input<string>;
    /**
     * The Azure Resource URI of the of the endpoint. Not applicable to endpoints of type 'ExternalEndpoints'.
     */
    targetResourceId?: pulumi.Input<string>;
    /**
     * The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles.
     */
    type?: pulumi.Input<string>;
    /**
     * The weight of this endpoint when using the 'Weighted' traffic routing method. Possible values are from 1 to 1000.
     */
    weight?: pulumi.Input<number>;
}

/**
 * Custom header name and value.
 */
export interface EndpointPropertiesCustomHeadersArgs {
    /**
     * Header name.
     */
    name?: pulumi.Input<string>;
    /**
     * Header value.
     */
    value?: pulumi.Input<string>;
}

/**
 * Subnet first address, scope, and/or last address.
 */
export interface EndpointPropertiesSubnetsArgs {
    /**
     * First address in the subnet.
     */
    first?: pulumi.Input<string>;
    /**
     * Last address in the subnet.
     */
    last?: pulumi.Input<string>;
    /**
     * Block size (number of leading bits in the subnet mask).
     */
    scope?: pulumi.Input<number>;
}

/**
 * Class containing endpoint monitoring settings in a Traffic Manager profile.
 */
export interface MonitorConfigArgs {
    /**
     * List of custom headers.
     */
    customHeaders?: pulumi.Input<pulumi.Input<MonitorConfigCustomHeadersArgs>[]>;
    /**
     * List of expected status code ranges.
     */
    expectedStatusCodeRanges?: pulumi.Input<pulumi.Input<MonitorConfigExpectedStatusCodeRangesArgs>[]>;
    /**
     * The monitor interval for endpoints in this profile. This is the interval at which Traffic Manager will check the health of each endpoint in this profile.
     */
    intervalInSeconds?: pulumi.Input<number>;
    /**
     * The path relative to the endpoint domain name used to probe for endpoint health.
     */
    path?: pulumi.Input<string>;
    /**
     * The TCP port used to probe for endpoint health.
     */
    port?: pulumi.Input<number>;
    /**
     * The profile-level monitoring status of the Traffic Manager profile.
     */
    profileMonitorStatus?: pulumi.Input<string | enums.ProfileMonitorStatus>;
    /**
     * The protocol (HTTP, HTTPS or TCP) used to probe for endpoint health.
     */
    protocol?: pulumi.Input<string | enums.MonitorProtocol>;
    /**
     * The monitor timeout for endpoints in this profile. This is the time that Traffic Manager allows endpoints in this profile to response to the health check.
     */
    timeoutInSeconds?: pulumi.Input<number>;
    /**
     * The number of consecutive failed health check that Traffic Manager tolerates before declaring an endpoint in this profile Degraded after the next failed health check.
     */
    toleratedNumberOfFailures?: pulumi.Input<number>;
}

/**
 * Custom header name and value.
 */
export interface MonitorConfigCustomHeadersArgs {
    /**
     * Header name.
     */
    name?: pulumi.Input<string>;
    /**
     * Header value.
     */
    value?: pulumi.Input<string>;
}

/**
 * Min and max value of a status code range.
 */
export interface MonitorConfigExpectedStatusCodeRangesArgs {
    /**
     * Max status code.
     */
    max?: pulumi.Input<number>;
    /**
     * Min status code.
     */
    min?: pulumi.Input<number>;
}
