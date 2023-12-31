import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Network security default user rule.
     */
    export interface ActiveDefaultSecurityUserRuleResponse {
        /**
         * Deployment time string.
         */
        commitTime?: string;
        /**
         * A description of the security user configuration.
         */
        configurationDescription?: string;
        /**
         * A description for this rule. Restricted to 140 chars.
         */
        description: string;
        /**
         * The destination port ranges.
         */
        destinationPortRanges: string[];
        /**
         * The destination address prefixes. CIDR or destination IP ranges.
         */
        destinations: AddressPrefixItemResponse[];
        /**
         * Indicates if the traffic matched against the rule in inbound or outbound.
         */
        direction: string;
        /**
         * Default rule flag.
         */
        flag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Whether the rule is custom or default.
         * Expected value is 'Default'.
         */
        kind: "Default";
        /**
         * Network protocol this rule applies to.
         */
        protocol: string;
        /**
         * The provisioning state of the security configuration user rule resource.
         */
        provisioningState: string;
        /**
         * Deployment region.
         */
        region?: string;
        /**
         * Groups for rule collection
         */
        ruleCollectionAppliesToGroups?: NetworkManagerSecurityGroupItemResponse[];
        /**
         * A description of the rule collection.
         */
        ruleCollectionDescription?: string;
        /**
         * Effective configuration groups.
         */
        ruleGroups?: ConfigurationGroupResponse[];
        /**
         * The source port ranges.
         */
        sourcePortRanges: string[];
        /**
         * The CIDR or source IP ranges.
         */
        sources: AddressPrefixItemResponse[];
    }

    /**
     * Network security user rule.
     */
    export interface ActiveSecurityUserRuleResponse {
        /**
         * Deployment time string.
         */
        commitTime?: string;
        /**
         * A description of the security user configuration.
         */
        configurationDescription?: string;
        /**
         * A description for this rule.
         */
        description?: string;
        /**
         * The destination port ranges.
         */
        destinationPortRanges?: string[];
        /**
         * The destination address prefixes. CIDR or destination IP ranges.
         */
        destinations?: AddressPrefixItemResponse[];
        /**
         * Indicates if the traffic matched against the rule in inbound or outbound.
         */
        direction: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Whether the rule is custom or default.
         * Expected value is 'Custom'.
         */
        kind: "Custom";
        /**
         * Network protocol this rule applies to.
         */
        protocol: string;
        /**
         * The provisioning state of the security configuration user rule resource.
         */
        provisioningState: string;
        /**
         * Deployment region.
         */
        region?: string;
        /**
         * Groups for rule collection
         */
        ruleCollectionAppliesToGroups?: NetworkManagerSecurityGroupItemResponse[];
        /**
         * A description of the rule collection.
         */
        ruleCollectionDescription?: string;
        /**
         * Effective configuration groups.
         */
        ruleGroups?: ConfigurationGroupResponse[];
        /**
         * The source port ranges.
         */
        sourcePortRanges?: string[];
        /**
         * The CIDR or source IP ranges.
         */
        sources?: AddressPrefixItemResponse[];
    }

    /**
     * Address prefix item.
     */
    export interface AddressPrefixItemResponse {
        /**
         * Address prefix.
         */
        addressPrefix?: string;
        /**
         * Address prefix type.
         */
        addressPrefixType?: string;
    }

    /**
     * The network configuration group resource
     */
    export interface ConfigurationGroupResponse {
        /**
         * A description of the network group.
         */
        description?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Group member type.
         */
        memberType: string;
        /**
         * The provisioning state of the scope assignment resource.
         */
        provisioningState: string;
    }

    /**
     * Connectivity group item.
     */
    export interface ConnectivityGroupItemResponse {
        /**
         * Group connectivity type.
         */
        groupConnectivity: string;
        /**
         * Flag if global is supported.
         */
        isGlobal?: string;
        /**
         * Network group Id.
         */
        networkGroupId: string;
        /**
         * Flag if need to use hub gateway.
         */
        useHubGateway?: string;
    }

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
     * The network manager effective connectivity configuration
     */
    export interface EffectiveConnectivityConfigurationResponse {
        /**
         * Groups for configuration
         */
        appliesToGroups: ConnectivityGroupItemResponse[];
        /**
         * Effective configuration groups.
         */
        configurationGroups?: ConfigurationGroupResponse[];
        /**
         * Connectivity topology type.
         */
        connectivityTopology: string;
        /**
         * Flag if need to remove current existing peerings.
         */
        deleteExistingPeering?: string;
        /**
         * A description of the connectivity configuration.
         */
        description?: string;
        /**
         * List of hubItems
         */
        hubs?: HubResponse[];
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Flag if global mesh is supported.
         */
        isGlobal?: string;
        /**
         * The provisioning state of the connectivity configuration resource.
         */
        provisioningState: string;
    }

    /**
     * Network default admin rule.
     */
    export interface EffectiveDefaultSecurityAdminRuleResponse {
        /**
         * Indicates the access allowed for this particular rule
         */
        access: string;
        /**
         * A description of the security admin configuration.
         */
        configurationDescription?: string;
        /**
         * A description for this rule. Restricted to 140 chars.
         */
        description: string;
        /**
         * The destination port ranges.
         */
        destinationPortRanges: string[];
        /**
         * The destination address prefixes. CIDR or destination IP ranges.
         */
        destinations: AddressPrefixItemResponse[];
        /**
         * Indicates if the traffic matched against the rule in inbound or outbound.
         */
        direction: string;
        /**
         * Default rule flag.
         */
        flag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Whether the rule is custom or default.
         * Expected value is 'Default'.
         */
        kind: "Default";
        /**
         * The priority of the rule. The value can be between 1 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
         */
        priority: number;
        /**
         * Network protocol this rule applies to.
         */
        protocol: string;
        /**
         * The provisioning state of the resource.
         */
        provisioningState: string;
        /**
         * Groups for rule collection
         */
        ruleCollectionAppliesToGroups?: NetworkManagerSecurityGroupItemResponse[];
        /**
         * A description of the rule collection.
         */
        ruleCollectionDescription?: string;
        /**
         * Effective configuration groups.
         */
        ruleGroups?: ConfigurationGroupResponse[];
        /**
         * The source port ranges.
         */
        sourcePortRanges: string[];
        /**
         * The CIDR or source IP ranges.
         */
        sources: AddressPrefixItemResponse[];
    }

    /**
     * Network admin rule.
     */
    export interface EffectiveSecurityAdminRuleResponse {
        /**
         * Indicates the access allowed for this particular rule
         */
        access: string;
        /**
         * A description of the security admin configuration.
         */
        configurationDescription?: string;
        /**
         * A description for this rule. Restricted to 140 chars.
         */
        description?: string;
        /**
         * The destination port ranges.
         */
        destinationPortRanges?: string[];
        /**
         * The destination address prefixes. CIDR or destination IP ranges.
         */
        destinations?: AddressPrefixItemResponse[];
        /**
         * Indicates if the traffic matched against the rule in inbound or outbound.
         */
        direction: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Whether the rule is custom or default.
         * Expected value is 'Custom'.
         */
        kind: "Custom";
        /**
         * The priority of the rule. The value can be between 1 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
         */
        priority: number;
        /**
         * Network protocol this rule applies to.
         */
        protocol: string;
        /**
         * The provisioning state of the resource.
         */
        provisioningState: string;
        /**
         * Groups for rule collection
         */
        ruleCollectionAppliesToGroups?: NetworkManagerSecurityGroupItemResponse[];
        /**
         * A description of the rule collection.
         */
        ruleCollectionDescription?: string;
        /**
         * Effective configuration groups.
         */
        ruleGroups?: ConfigurationGroupResponse[];
        /**
         * The source port ranges.
         */
        sourcePortRanges?: string[];
        /**
         * The CIDR or source IP ranges.
         */
        sources?: AddressPrefixItemResponse[];
    }

    /**
     * Effective Virtual Network
     */
    export interface EffectiveVirtualNetworkResponse {
        /**
         * Effective vnet Id.
         */
        id?: string;
        /**
         * Location of vnet.
         */
        location?: string;
        /**
         * Membership Type.
         */
        membershipType?: string;
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
     * Hub Item.
     */
    export interface HubResponse {
        /**
         * Resource Id.
         */
        resourceId?: string;
        /**
         * Resource Type.
         */
        resourceType?: string;
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

    /**
     * Network manager security group item.
     */
    export interface NetworkManagerSecurityGroupItemResponse {
        /**
         * Network manager group Id.
         */
        networkGroupId: string;
    }

    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    export interface SystemDataResponse {
        /**
         * The timestamp of resource creation (UTC).
         */
        createdAt?: string;
        /**
         * The identity that created the resource.
         */
        createdBy?: string;
        /**
         * The type of identity that created the resource.
         */
        createdByType?: string;
        /**
         * The type of identity that last modified the resource.
         */
        lastModifiedAt?: string;
        /**
         * The identity that last modified the resource.
         */
        lastModifiedBy?: string;
        /**
         * The type of identity that last modified the resource.
         */
        lastModifiedByType?: string;
    }
