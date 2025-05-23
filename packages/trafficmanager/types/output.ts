import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Class containing DNS settings in a Traffic Manager profile.
 */
export interface DnsConfigResponse {
    /**
     * The fully-qualified domain name (FQDN) of the Traffic Manager profile. This is formed from the concatenation of the RelativeName with the DNS domain used by Azure Traffic Manager.
     */
    fqdn: string;
    /**
     * The relative DNS name provided by this Traffic Manager profile. This value is combined with the DNS domain name used by Azure Traffic Manager to form the fully-qualified domain name (FQDN) of the profile.
     */
    relativeName?: string;
    /**
     * The DNS Time-To-Live (TTL), in seconds. This informs the local DNS resolvers and DNS clients how long to cache DNS responses provided by this Traffic Manager profile.
     */
    ttl?: number;
}

/**
 * Custom header name and value.
 */
export interface EndpointPropertiesResponseCustomHeaders {
    /**
     * Header name.
     */
    name?: string;
    /**
     * Header value.
     */
    value?: string;
}

/**
 * Subnet first address, scope, and/or last address.
 */
export interface EndpointPropertiesResponseSubnets {
    /**
     * First address in the subnet.
     */
    first?: string;
    /**
     * Last address in the subnet.
     */
    last?: string;
    /**
     * Block size (number of leading bits in the subnet mask).
     */
    scope?: number;
}

/**
 * Class representing a Traffic Manager endpoint.
 */
export interface EndpointResponse {
    /**
     * If Always Serve is enabled, probing for endpoint health will be disabled and endpoints will be included in the traffic routing method.
     */
    alwaysServe?: string;
    /**
     * List of custom headers.
     */
    customHeaders?: EndpointPropertiesResponseCustomHeaders[];
    /**
     * Specifies the location of the external or nested endpoints when using the 'Performance' traffic routing method.
     */
    endpointLocation?: string;
    /**
     * The monitoring status of the endpoint.
     */
    endpointMonitorStatus?: string;
    /**
     * The status of the endpoint. If the endpoint is Enabled, it is probed for endpoint health and is included in the traffic routing method.
     */
    endpointStatus?: string;
    /**
     * The list of countries/regions mapped to this endpoint when using the 'Geographic' traffic routing method. Please consult Traffic Manager Geographic documentation for a full list of accepted values.
     */
    geoMapping?: string[];
    /**
     * Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{resourceName}
     */
    id?: string;
    /**
     * The minimum number of endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'.
     */
    minChildEndpoints?: number;
    /**
     * The minimum number of IPv4 (DNS record type A) endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'.
     */
    minChildEndpointsIPv4?: number;
    /**
     * The minimum number of IPv6 (DNS record type AAAA) endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'.
     */
    minChildEndpointsIPv6?: number;
    /**
     * The name of the resource
     */
    name?: string;
    /**
     * The priority of this endpoint when using the 'Priority' traffic routing method. Possible values are from 1 to 1000, lower values represent higher priority. This is an optional parameter.  If specified, it must be specified on all endpoints, and no two endpoints can share the same priority value.
     */
    priority?: number;
    /**
     * The list of subnets, IP addresses, and/or address ranges mapped to this endpoint when using the 'Subnet' traffic routing method. An empty list will match all ranges not covered by other endpoints.
     */
    subnets?: EndpointPropertiesResponseSubnets[];
    /**
     * The fully-qualified DNS name or IP address of the endpoint. Traffic Manager returns this value in DNS responses to direct traffic to this endpoint.
     */
    target?: string;
    /**
     * The Azure Resource URI of the of the endpoint. Not applicable to endpoints of type 'ExternalEndpoints'.
     */
    targetResourceId?: string;
    /**
     * The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles.
     */
    type?: string;
    /**
     * The weight of this endpoint when using the 'Weighted' traffic routing method. Possible values are from 1 to 1000.
     */
    weight?: number;
}

/**
 * Class containing endpoint monitoring settings in a Traffic Manager profile.
 */
export interface MonitorConfigResponse {
    /**
     * List of custom headers.
     */
    customHeaders?: MonitorConfigResponseCustomHeaders[];
    /**
     * List of expected status code ranges.
     */
    expectedStatusCodeRanges?: MonitorConfigResponseExpectedStatusCodeRanges[];
    /**
     * The monitor interval for endpoints in this profile. This is the interval at which Traffic Manager will check the health of each endpoint in this profile.
     */
    intervalInSeconds?: number;
    /**
     * The path relative to the endpoint domain name used to probe for endpoint health.
     */
    path?: string;
    /**
     * The TCP port used to probe for endpoint health.
     */
    port?: number;
    /**
     * The profile-level monitoring status of the Traffic Manager profile.
     */
    profileMonitorStatus?: string;
    /**
     * The protocol (HTTP, HTTPS or TCP) used to probe for endpoint health.
     */
    protocol?: string;
    /**
     * The monitor timeout for endpoints in this profile. This is the time that Traffic Manager allows endpoints in this profile to response to the health check.
     */
    timeoutInSeconds?: number;
    /**
     * The number of consecutive failed health check that Traffic Manager tolerates before declaring an endpoint in this profile Degraded after the next failed health check.
     */
    toleratedNumberOfFailures?: number;
}

/**
 * Custom header name and value.
 */
export interface MonitorConfigResponseCustomHeaders {
    /**
     * Header name.
     */
    name?: string;
    /**
     * Header value.
     */
    value?: string;
}

/**
 * Min and max value of a status code range.
 */
export interface MonitorConfigResponseExpectedStatusCodeRanges {
    /**
     * Max status code.
     */
    max?: number;
    /**
     * Min status code.
     */
    min?: number;
}
