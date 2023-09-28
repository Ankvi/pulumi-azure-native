import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Action that need to performed.
     */
    export interface AccessControlListActionResponse {
        /**
         * Name of the counter block to get match count information.
         */
        counterName?: string;
        /**
         * Type of actions that can be performed.
         */
        type?: string;
    }

    /**
     * Defines the match condition that is supported to filter the traffic.
     */
    export interface AccessControlListMatchConditionResponse {
        /**
         * List of DSCP Markings that need to be matched.
         */
        dscpMarkings?: string[];
        /**
         * List of ether type values that need to be matched.
         */
        etherTypes?: string[];
        /**
         * List of IP fragment packets that need to be matched.
         */
        fragments?: string[];
        /**
         * IP condition that needs to be matched.
         */
        ipCondition?: IpMatchConditionResponse;
        /**
         * List of IP Lengths that need to be matched.
         */
        ipLengths?: string[];
        /**
         * Defines the port condition that needs to be matched.
         */
        portCondition?: AccessControlListPortConditionResponse;
        /**
         * List of the protocols that need to be matched.
         */
        protocolTypes?: string[];
        /**
         * List of TTL [Time To Live] values that need to be matched.
         */
        ttlValues?: string[];
        /**
         * Vlan match condition that needs to be matched.
         */
        vlanMatchCondition?: VlanMatchConditionResponse;
    }

    /**
     * Defines the match configuration that are supported to filter the traffic.
     */
    export interface AccessControlListMatchConfigurationResponse {
        /**
         * List of actions that need to be performed for the matched conditions.
         */
        actions?: AccessControlListActionResponse[];
        /**
         * Type of IP Address. IPv4 or IPv6
         */
        ipAddressType?: string;
        /**
         * List of the match conditions.
         */
        matchConditions?: AccessControlListMatchConditionResponse[];
        /**
         * The name of the match configuration.
         */
        matchConfigurationName?: string;
        /**
         * Sequence Number of the match configuration.
         */
        sequenceNumber?: number;
    }

    /**
     * Defines the port condition that needs to be matched.
     */
    export interface AccessControlListPortConditionResponse {
        /**
         * List of protocol flags that need to be matched. Example: established | initial | <List-of-TCP-flags>. List of eligible TCP Flags are ack, fin, not-ack, not-fin, not-psh, not-rst, not-syn, not-urg, psh, rst, syn, urg
         */
        flags?: string[];
        /**
         * Layer4 protocol type that needs to be matched.
         */
        layer4Protocol: string;
        /**
         * List of the port Group Names that need to be matched.
         */
        portGroupNames?: string[];
        /**
         * Port type that needs to be matched.
         */
        portType?: string;
        /**
         * List of the Ports that need to be matched.
         */
        ports?: string[];
    }

    /**
     * IP Community Properties.
     */
    export interface ActionIpCommunityPropertiesResponse {
        /**
         * List of IP Community IDs.
         */
        add?: IpCommunityIdListResponse;
        /**
         * List of IP Community IDs.
         */
        delete?: IpCommunityIdListResponse;
        /**
         * List of IP Community IDs.
         */
        set?: IpCommunityIdListResponse;
    }

    /**
     * IP Extended Community Properties.
     */
    export interface ActionIpExtendedCommunityPropertiesResponse {
        /**
         * List of IP Extended Community IDs.
         */
        add?: IpExtendedCommunityIdListResponse;
        /**
         * List of IP Extended Community IDs.
         */
        delete?: IpExtendedCommunityIdListResponse;
        /**
         * List of IP Extended Community IDs.
         */
        set?: IpExtendedCommunityIdListResponse;
    }

    /**
     * List of IPv4 and IPv6 aggregate routes.
     */
    export interface AggregateRouteConfigurationResponse {
        /**
         * List of IPv4 Route prefixes.
         */
        ipv4Routes?: AggregateRouteResponse[];
        /**
         * List of Ipv6Routes prefixes.
         */
        ipv6Routes?: AggregateRouteResponse[];
    }

    /**
     * aggregateIpv4Route model.
     */
    export interface AggregateRouteResponse {
        /**
         * IPv4 Prefix of the aggregate Ipv4Route.
         */
        prefix: string;
    }

    /**
     * BFD configuration properties
     */
    export interface BfdConfigurationResponse {
        /**
         * Administrative state of the BfdConfiguration. Example: Enabled | Disabled.
         */
        administrativeState: string;
        /**
         * Interval in milliseconds. Example: 300.
         */
        intervalInMilliSeconds?: number;
        /**
         * Multiplier for the Bfd Configuration. Example: 5.
         */
        multiplier?: number;
    }
    /**
     * bfdConfigurationResponseProvideDefaults sets the appropriate defaults for BfdConfigurationResponse
     */
    export function bfdConfigurationResponseProvideDefaults(val: BfdConfigurationResponse): BfdConfigurationResponse {
        return {
            ...val,
            administrativeState: (val.administrativeState) ?? "Disabled",
            intervalInMilliSeconds: (val.intervalInMilliSeconds) ?? 300,
            multiplier: (val.multiplier) ?? 5,
        };
    }

    /**
     * Dynamic match configuration object.
     */
    export interface CommonDynamicMatchConfigurationResponse {
        /**
         * List of IP Groups.
         */
        ipGroups?: IpGroupPropertiesResponse[];
        /**
         * List of the port groups.
         */
        portGroups?: PortGroupPropertiesResponse[];
        /**
         * List of vlan groups.
         */
        vlanGroups?: VlanGroupPropertiesResponse[];
    }

    /**
     * Connected Subnet properties.
     */
    export interface ConnectedSubnetResponse {
        /**
         * Switch configuration description.
         */
        annotation?: string;
        /**
         * Prefix of the Connected Subnet.
         */
        prefix: string;
    }

    /**
     * Connected Subnet Route Policy properties.
     */
    export interface ConnectedSubnetRoutePolicyResponse {
        /**
         * Array of ARM Resource ID of the RoutePolicies.
         */
        exportRoutePolicy?: L3ExportRoutePolicyResponse;
        /**
         * ARM Resource ID of the Route Policy. This is used for the backward compatibility.
         */
        exportRoutePolicyId?: string;
    }

    /**
     * Network Fabric Controller services.
     */
    export interface ControllerServicesResponse {
        /**
         * The IPv4 Address space is optional, if the value is not defined at the time of NFC creation, then the default value 10.0.0.0/19 is considered. The IPV4 address subnet is an optional attribute.
         */
        ipv4AddressSpaces?: string[];
        /**
         * The IPv6 is not supported right now.
         */
        ipv6AddressSpaces?: string[];
    }

    /**
     * The resource management error additional info.
     */
    export interface ErrorAdditionalInfoResponse {
        /**
         * The additional info.
         */
        info: any;
        /**
         * The additional info type.
         */
        type: string;
    }

    /**
     * The error detail.
     */
    export interface ErrorDetailResponse {
        /**
         * The error additional info.
         */
        additionalInfo: ErrorAdditionalInfoResponse[];
        /**
         * The error code.
         */
        code: string;
        /**
         * The error details.
         */
        details: ErrorDetailResponse[];
        /**
         * The error message.
         */
        message: string;
        /**
         * The error target.
         */
        target: string;
    }

    /**
     * Export Route Policy Configuration.
     */
    export interface ExportRoutePolicyInformationResponse {
        /**
         * Export IPv4 Route Policy Id.
         */
        exportIpv4RoutePolicyId?: string;
        /**
         * Export IPv6 Route Policy Id.
         */
        exportIpv6RoutePolicyId?: string;
    }

    /**
     * Export Route Policy either IPv4 or IPv6.
     */
    export interface ExportRoutePolicyResponse {
        /**
         * ARM resource ID of RoutePolicy.
         */
        exportIpv4RoutePolicyId?: string;
        /**
         * ARM resource ID of RoutePolicy.
         */
        exportIpv6RoutePolicyId?: string;
    }

    /**
     * The ExpressRoute circuit ID and the Auth Key are required for you to successfully deploy NFC service.
     */
    export interface ExpressRouteConnectionInformationResponse {
        /**
         * Authorization key for the circuit, must be of type Microsoft.Network/expressRouteCircuits/authorizations. The Auth Key is a mandatory attribute.
         */
        expressRouteAuthorizationKey: string;
        /**
         * The express route circuit Azure resource ID, must be of type Microsoft.Network/expressRouteCircuits/circuitName. The ExpressRoute Circuit is a mandatory attribute.
         */
        expressRouteCircuitId: string;
    }

    /**
     * option A properties object
     */
    export interface ExternalNetworkPropertiesResponseOptionAProperties {
        /**
         * BFD configuration properties
         */
        bfdConfiguration?: BfdConfigurationResponse;
        /**
         * Egress Acl. ARM resource ID of Access Control Lists.
         */
        egressAclId?: string;
        /**
         * Fabric ASN number. Example 65001 
         */
        fabricASN: number;
        /**
         * Ingress Acl. ARM resource ID of Access Control Lists.
         */
        ingressAclId?: string;
        /**
         * MTU to use for option A peering.
         */
        mtu?: number;
        /**
         * Peer ASN number.Example : 28
         */
        peerASN: number;
        /**
         * IPv4 Address Prefix.
         */
        primaryIpv4Prefix?: string;
        /**
         * IPv6 Address Prefix.
         */
        primaryIpv6Prefix?: string;
        /**
         * Secondary IPv4 Address Prefix.
         */
        secondaryIpv4Prefix?: string;
        /**
         * Secondary IPv6 Address Prefix.
         */
        secondaryIpv6Prefix?: string;
        /**
         * Vlan identifier. Example : 501
         */
        vlanId: number;
    }
    /**
     * externalNetworkPropertiesResponseOptionAPropertiesProvideDefaults sets the appropriate defaults for ExternalNetworkPropertiesResponseOptionAProperties
     */
    export function externalNetworkPropertiesResponseOptionAPropertiesProvideDefaults(val: ExternalNetworkPropertiesResponseOptionAProperties): ExternalNetworkPropertiesResponseOptionAProperties {
        return {
            ...val,
            bfdConfiguration: (val.bfdConfiguration ? bfdConfigurationResponseProvideDefaults(val.bfdConfiguration) : undefined),
            mtu: (val.mtu) ?? 1500,
        };
    }

    /**
     * Option B configuration to be used for Management VPN.
     */
    export interface FabricOptionBPropertiesResponse {
        /**
         * Route Targets to be applied for outgoing routes from CE. This is for backward compatibility.
         */
        exportRouteTargets?: string[];
        /**
         * Route Targets to be applied for incoming routes into CE. This is for backward compatibility.
         */
        importRouteTargets?: string[];
        /**
         * Route Targets to be applied.
         */
        routeTargets?: RouteTargetInformationResponse;
    }

    /**
     * Import Route Policy Configuration.
     */
    export interface ImportRoutePolicyInformationResponse {
        /**
         * Import IPv4 Route Policy Id.
         */
        importIpv4RoutePolicyId?: string;
        /**
         * Import IPv6 Route Policy Id.
         */
        importIpv6RoutePolicyId?: string;
    }

    /**
     * Import Route Policy either IPv4 or IPv6.
     */
    export interface ImportRoutePolicyResponse {
        /**
         * ARM resource ID of RoutePolicy.
         */
        importIpv4RoutePolicyId?: string;
        /**
         * ARM resource ID of RoutePolicy.
         */
        importIpv6RoutePolicyId?: string;
    }

    /**
     * BGP configuration properties.
     */
    export interface InternalNetworkPropertiesResponseBgpConfiguration {
        /**
         * Allows for routes to be received and processed even if the router detects its own ASN in the AS-Path. 0 is disable, Possible values are 1-10, default is 2.
         */
        allowAS?: number;
        /**
         * Enable Or Disable state.
         */
        allowASOverride?: string;
        /**
         * Switch configuration description.
         */
        annotation?: string;
        /**
         * BFD configuration properties
         */
        bfdConfiguration?: BfdConfigurationResponse;
        /**
         * Originate a defaultRoute. Ex: "True" | "False".
         */
        defaultRouteOriginate?: string;
        /**
         * ASN of Network Fabric. Example: 65048.
         */
        fabricASN: number;
        /**
         * List of BGP IPv4 Listen Range prefixes.
         */
        ipv4ListenRangePrefixes?: string[];
        /**
         * List with stringified IPv4 Neighbor Addresses.
         */
        ipv4NeighborAddress?: NeighborAddressResponse[];
        /**
         * List of BGP IPv6 Listen Ranges prefixes.
         */
        ipv6ListenRangePrefixes?: string[];
        /**
         * List with stringified IPv6 Neighbor Address.
         */
        ipv6NeighborAddress?: NeighborAddressResponse[];
        /**
         * Peer ASN. Example: 65047.
         */
        peerASN: number;
    }
    /**
     * internalNetworkPropertiesResponseBgpConfigurationProvideDefaults sets the appropriate defaults for InternalNetworkPropertiesResponseBgpConfiguration
     */
    export function internalNetworkPropertiesResponseBgpConfigurationProvideDefaults(val: InternalNetworkPropertiesResponseBgpConfiguration): InternalNetworkPropertiesResponseBgpConfiguration {
        return {
            ...val,
            allowAS: (val.allowAS) ?? 2,
            bfdConfiguration: (val.bfdConfiguration ? bfdConfigurationResponseProvideDefaults(val.bfdConfiguration) : undefined),
        };
    }

    /**
     * Static Route Configuration properties.
     */
    export interface InternalNetworkPropertiesResponseStaticRouteConfiguration {
        /**
         * BFD configuration properties
         */
        bfdConfiguration?: BfdConfigurationResponse;
        /**
         * Extension. Example: NoExtension | NPB.
         */
        extension?: string;
        /**
         * List of IPv4 Routes.
         */
        ipv4Routes?: StaticRoutePropertiesResponse[];
        /**
         * List of IPv6 Routes.
         */
        ipv6Routes?: StaticRoutePropertiesResponse[];
    }
    /**
     * internalNetworkPropertiesResponseStaticRouteConfigurationProvideDefaults sets the appropriate defaults for InternalNetworkPropertiesResponseStaticRouteConfiguration
     */
    export function internalNetworkPropertiesResponseStaticRouteConfigurationProvideDefaults(val: InternalNetworkPropertiesResponseStaticRouteConfiguration): InternalNetworkPropertiesResponseStaticRouteConfiguration {
        return {
            ...val,
            bfdConfiguration: (val.bfdConfiguration ? bfdConfigurationResponseProvideDefaults(val.bfdConfiguration) : undefined),
            extension: (val.extension) ?? "NoExtension",
        };
    }

    /**
     * IP Community ID list properties.
     */
    export interface IpCommunityIdListResponse {
        /**
         * List of IP Community resource IDs.
         */
        ipCommunityIds?: string[];
    }

    /**
     * IP Community patchable properties.
     */
    export interface IpCommunityRuleResponse {
        /**
         * Action to be taken on the configuration. Example: Permit | Deny.
         */
        action: string;
        /**
         * List the community members of IP Community.
         */
        communityMembers: string[];
        /**
         * Sequence to insert to/delete from existing route. Prefix lists are evaluated starting with the lowest sequence number and continue down the list until a match is made. Once a match is made, the permit or deny statement is applied to that network and the rest of the list is ignored.
         */
        sequenceNumber: number;
        /**
         * Supported well known Community List.
         */
        wellKnownCommunities?: string[];
    }

    /**
     * IP Extended Community Id list properties.
     */
    export interface IpExtendedCommunityIdListResponse {
        /**
         * List of IP Extended Community resource IDs.
         */
        ipExtendedCommunityIds?: string[];
    }

    /**
     * List of IP Extended Community Rules.
     */
    export interface IpExtendedCommunityRuleResponse {
        /**
         * Action to be taken on the configuration. Example: Permit | Deny.
         */
        action: string;
        /**
         * Route Target List.The expected formats are ASN(plain):NN >> example 4294967294:50, ASN.ASN:NN >> example 65533.65333:40, IP-address:NN >> example 10.10.10.10:65535. The possible values of ASN,NN are in range of 0-65535, ASN(plain) is in range of 0-4294967295.
         */
        routeTargets: string[];
        /**
         * Sequence to insert to/delete from existing route. Prefix lists are evaluated starting with the lowest sequence number and continue down the list until a match is made. Once a match is made, the permit or deny statement is applied to that network and the rest of the list is ignored.
         */
        sequenceNumber: number;
    }

    /**
     * IP Group properties.
     */
    export interface IpGroupPropertiesResponse {
        /**
         * IP Address type.
         */
        ipAddressType?: string;
        /**
         * List of IP Prefixes.
         */
        ipPrefixes?: string[];
        /**
         * IP Group name.
         */
        name?: string;
    }

    /**
     * Defines the condition that can be filtered using the selected IPs.
     */
    export interface IpMatchConditionResponse {
        /**
         * The List of IP Group Names that need to be matched.
         */
        ipGroupNames?: string[];
        /**
         * The list of IP Prefixes that need to be matched.
         */
        ipPrefixValues?: string[];
        /**
         * IP Prefix Type that needs to be matched.
         */
        prefixType?: string;
        /**
         * IP Address type that needs to be matched.
         */
        type?: string;
    }

    /**
     * IP Prefix Rule properties.
     */
    export interface IpPrefixRuleResponse {
        /**
         * Action to be taken on the configuration. Example: Permit | Deny.
         */
        action: string;
        /**
         * Specify prefix-list bounds.
         */
        condition?: string;
        /**
         * Network Prefix specifying IPv4/IPv6 packets to be permitted or denied. Example: 1.1.1.0/24 | 3FFE:FFFF:0:CD30::/126 
         */
        networkPrefix: string;
        /**
         * Sequence to insert to/delete from existing route. Prefix lists are evaluated starting with the lowest sequence number and continue down the list until a match is made. Once a match is made, the permit or deny statement is applied to that network and the rest of the list is ignored.
         */
        sequenceNumber: number;
        /**
         * SubnetMaskLength gives the minimum NetworkPrefix length to be matched. Possible values for IPv4 are 1 - 32 . Possible values of IPv6 are 1 - 128.
         */
        subnetMaskLength?: string;
    }

    /**
     * Isolation Domain Properties.
     */
    export interface IsolationDomainPropertiesResponse {
        /**
         * Type of encapsulation.
         */
        encapsulation?: string;
        /**
         * List of Neighbor Group IDs.
         */
        neighborGroupIds?: string[];
    }

    /**
     * Array of ARM Resource ID of the RoutePolicies.
     */
    export interface L3ExportRoutePolicyResponse {
        /**
         * ARM Resource ID of the RoutePolicy.
         */
        exportIpv4RoutePolicyId?: string;
        /**
         * ARM Resource ID of the RoutePolicy.
         */
        exportIpv6RoutePolicyId?: string;
    }

    /**
     * Option B configuration.
     */
    export interface L3OptionBPropertiesResponse {
        /**
         * RouteTargets to be applied. This is used for the backward compatibility.
         */
        exportRouteTargets?: string[];
        /**
         * RouteTargets to be applied. This is used for the backward compatibility.
         */
        importRouteTargets?: string[];
        /**
         * RouteTargets to be applied.
         */
        routeTargets?: RouteTargetInformationResponse;
    }

    /**
     * Common properties for Layer2 Configuration.
     */
    export interface Layer2ConfigurationResponse {
        /**
         * List of network device interfaces resource IDs.
         */
        interfaces?: string[];
        /**
         * MTU of the packets between PE & CE.
         */
        mtu?: number;
    }
    /**
     * layer2ConfigurationResponseProvideDefaults sets the appropriate defaults for Layer2ConfigurationResponse
     */
    export function layer2ConfigurationResponseProvideDefaults(val: Layer2ConfigurationResponse): Layer2ConfigurationResponse {
        return {
            ...val,
            mtu: (val.mtu) ?? 1500,
        };
    }

    /**
     * Managed Resource Group configuration properties.
     */
    export interface ManagedResourceGroupConfigurationResponse {
        /**
         * Managed resource group location.
         */
        location?: string;
        /**
         * The NFC service will be hosted in a Managed resource group.
         */
        name?: string;
    }

    /**
     * Configuration to be used to setup the management network.
     */
    export interface ManagementNetworkConfigurationPropertiesResponse {
        /**
         * VPN Configuration properties.
         */
        infrastructureVpnConfiguration: VpnConfigurationPropertiesResponse;
        /**
         * VPN Configuration properties.
         */
        workloadVpnConfiguration: VpnConfigurationPropertiesResponse;
    }
    /**
     * managementNetworkConfigurationPropertiesResponseProvideDefaults sets the appropriate defaults for ManagementNetworkConfigurationPropertiesResponse
     */
    export function managementNetworkConfigurationPropertiesResponseProvideDefaults(val: ManagementNetworkConfigurationPropertiesResponse): ManagementNetworkConfigurationPropertiesResponse {
        return {
            ...val,
            infrastructureVpnConfiguration: vpnConfigurationPropertiesResponseProvideDefaults(val.infrastructureVpnConfiguration),
            workloadVpnConfiguration: vpnConfigurationPropertiesResponseProvideDefaults(val.workloadVpnConfiguration),
        };
    }

    /**
     * Neighbor Address properties.
     */
    export interface NeighborAddressResponse {
        /**
         * IP Address.
         */
        address?: string;
        /**
         * Configuration state of the resource.
         */
        configurationState: string;
    }

    /**
     * An array of destination IPv4 Addresses or IPv6 Addresses.
     */
    export interface NeighborGroupDestinationResponse {
        /**
         * Array of IPv4 Addresses.
         */
        ipv4Addresses?: string[];
        /**
         * Array of IPv6 Addresses.
         */
        ipv6Addresses?: string[];
    }

    /**
     * Destination.
     */
    export interface NetworkTapPropertiesResponseDestinations {
        /**
         * The destination Id. ARM Resource ID of either NNI or Internal Networks.
         */
        destinationId: string;
        /**
         * ARM Resource ID of destination Tap Rule that contains match configurations.
         */
        destinationTapRuleId?: string;
        /**
         * Type of destination. Input can be IsolationDomain or Direct.
         */
        destinationType: string;
        /**
         * Isolation Domain Properties.
         */
        isolationDomainProperties?: IsolationDomainPropertiesResponse;
        /**
         * Destination name.
         */
        name: string;
    }

    /**
     * Action that need to performed.
     */
    export interface NetworkTapRuleActionResponse {
        /**
         * Destination Id. The ARM resource Id may be either Network To Network Interconnect or NeighborGroup.
         */
        destinationId?: string;
        /**
         * The parameter to enable or disable the timestamp.
         */
        isTimestampEnabled?: string;
        /**
         * The name of the match configuration. This is used when Goto type is provided. If Goto type is selected and no match configuration name is provided. It goes to next configuration.
         */
        matchConfigurationName?: string;
        /**
         * Truncate. 0 indicates do not truncate.
         */
        truncate?: string;
        /**
         * Type of actions that can be performed.
         */
        type?: string;
    }

    /**
     * Defines the match condition that is supported to filter the traffic.
     */
    export interface NetworkTapRuleMatchConditionResponse {
        /**
         * Encapsulation Type that needs to be matched.
         */
        encapsulationType?: string;
        /**
         * IP condition that needs to be matched.
         */
        ipCondition?: IpMatchConditionResponse;
        /**
         * Defines the port condition that needs to be matched.
         */
        portCondition?: PortConditionResponse;
        /**
         * List of the protocols that need to be matched.
         */
        protocolTypes?: string[];
        /**
         * Vlan match condition that needs to be matched.
         */
        vlanMatchCondition?: VlanMatchConditionResponse;
    }
    /**
     * networkTapRuleMatchConditionResponseProvideDefaults sets the appropriate defaults for NetworkTapRuleMatchConditionResponse
     */
    export function networkTapRuleMatchConditionResponseProvideDefaults(val: NetworkTapRuleMatchConditionResponse): NetworkTapRuleMatchConditionResponse {
        return {
            ...val,
            encapsulationType: (val.encapsulationType) ?? "None",
        };
    }

    /**
     * Defines the match configuration that are supported to filter the traffic.
     */
    export interface NetworkTapRuleMatchConfigurationResponse {
        /**
         * List of actions that need to be performed for the matched conditions.
         */
        actions?: NetworkTapRuleActionResponse[];
        /**
         * Type of IP Address. IPv4 or IPv6
         */
        ipAddressType?: string;
        /**
         * List of the match conditions.
         */
        matchConditions?: NetworkTapRuleMatchConditionResponse[];
        /**
         * The name of the match configuration.
         */
        matchConfigurationName?: string;
        /**
         * Sequence Number of the match configuration..
         */
        sequenceNumber?: number;
    }

    /**
     * Common properties for Layer3Configuration.
     */
    export interface NetworkToNetworkInterconnectPropertiesResponseOptionBLayer3Configuration {
        /**
         * ASN of CE devices for CE/PE connectivity.
         */
        fabricASN: number;
        /**
         * ASN of PE devices for CE/PE connectivity.Example : 28
         */
        peerASN: number;
        /**
         * IPv4 Address Prefix.
         */
        primaryIpv4Prefix?: string;
        /**
         * IPv6 Address Prefix.
         */
        primaryIpv6Prefix?: string;
        /**
         * Secondary IPv4 Address Prefix.
         */
        secondaryIpv4Prefix?: string;
        /**
         * Secondary IPv6 Address Prefix.
         */
        secondaryIpv6Prefix?: string;
        /**
         * VLAN for CE/PE Layer 3 connectivity.Example : 501
         */
        vlanId: number;
    }

    /**
     * NPB Static Route Configuration properties.
     */
    export interface NpbStaticRouteConfigurationResponse {
        /**
         * BFD Configuration properties.
         */
        bfdConfiguration?: BfdConfigurationResponse;
        /**
         * List of IPv4 Routes.
         */
        ipv4Routes?: StaticRoutePropertiesResponse[];
        /**
         * List of IPv6 Routes.
         */
        ipv6Routes?: StaticRoutePropertiesResponse[];
    }
    /**
     * npbStaticRouteConfigurationResponseProvideDefaults sets the appropriate defaults for NpbStaticRouteConfigurationResponse
     */
    export function npbStaticRouteConfigurationResponseProvideDefaults(val: NpbStaticRouteConfigurationResponse): NpbStaticRouteConfigurationResponse {
        return {
            ...val,
            bfdConfiguration: (val.bfdConfiguration ? bfdConfigurationResponseProvideDefaults(val.bfdConfiguration) : undefined),
        };
    }

    /**
     * Port condition that needs to be matched.
     */
    export interface PortConditionResponse {
        /**
         * Layer4 protocol type that needs to be matched.
         */
        layer4Protocol: string;
        /**
         * List of the port Group Names that need to be matched.
         */
        portGroupNames?: string[];
        /**
         * Port type that needs to be matched.
         */
        portType?: string;
        /**
         * List of the Ports that need to be matched.
         */
        ports?: string[];
    }

    /**
     * Port Group properties.
     */
    export interface PortGroupPropertiesResponse {
        /**
         * The name of the port group.
         */
        name?: string;
        /**
         * List of the ports that need to be matched.
         */
        ports?: string[];
    }

    /**
     * Route Policy Statement properties.
     */
    export interface RoutePolicyStatementPropertiesResponse {
        /**
         * Route policy action properties.
         */
        action: StatementActionPropertiesResponse;
        /**
         * Switch configuration description.
         */
        annotation?: string;
        /**
         * Route policy condition properties.
         */
        condition: StatementConditionPropertiesResponse;
        /**
         * Sequence to insert to/delete from existing route.
         */
        sequenceNumber: number;
    }
    /**
     * routePolicyStatementPropertiesResponseProvideDefaults sets the appropriate defaults for RoutePolicyStatementPropertiesResponse
     */
    export function routePolicyStatementPropertiesResponseProvideDefaults(val: RoutePolicyStatementPropertiesResponse): RoutePolicyStatementPropertiesResponse {
        return {
            ...val,
            condition: statementConditionPropertiesResponseProvideDefaults(val.condition),
        };
    }

    /**
     * Route Target Configuration.
     */
    export interface RouteTargetInformationResponse {
        /**
         * Route Targets to be applied for outgoing routes into CE.
         */
        exportIpv4RouteTargets?: string[];
        /**
         * Route Targets to be applied for outgoing routes from CE.
         */
        exportIpv6RouteTargets?: string[];
        /**
         * Route Targets to be applied for incoming routes into CE.
         */
        importIpv4RouteTargets?: string[];
        /**
         * Route Targets to be applied for incoming routes from CE.
         */
        importIpv6RouteTargets?: string[];
    }

    /**
     * Rules for the InternetGateways
     */
    export interface RulePropertiesResponse {
        /**
         * Specify action.
         */
        action: string;
        /**
         * List of Addresses to be allowed or denied.
         */
        addressList: string[];
    }

    /**
     * Route policy action properties.
     */
    export interface StatementActionPropertiesResponse {
        /**
         * Action type. Example: Permit | Deny | Continue.
         */
        actionType: string;
        /**
         * IP Community Properties.
         */
        ipCommunityProperties?: ActionIpCommunityPropertiesResponse;
        /**
         * IP Extended Community Properties.
         */
        ipExtendedCommunityProperties?: ActionIpExtendedCommunityPropertiesResponse;
        /**
         * Local Preference of the route policy.
         */
        localPreference?: number;
    }

    /**
     * Route policy statement condition properties.
     */
    export interface StatementConditionPropertiesResponse {
        /**
         * List of IP Community resource IDs.
         */
        ipCommunityIds?: string[];
        /**
         * List of IP Extended Community resource IDs.
         */
        ipExtendedCommunityIds?: string[];
        /**
         * Arm Resource Id of IpPrefix.
         */
        ipPrefixId?: string;
        /**
         * Type of the condition used.
         */
        type?: string;
    }
    /**
     * statementConditionPropertiesResponseProvideDefaults sets the appropriate defaults for StatementConditionPropertiesResponse
     */
    export function statementConditionPropertiesResponseProvideDefaults(val: StatementConditionPropertiesResponse): StatementConditionPropertiesResponse {
        return {
            ...val,
            type: (val.type) ?? "Or",
        };
    }

    /**
     * Route Properties.
     */
    export interface StaticRoutePropertiesResponse {
        /**
         * List of next hop addresses.
         */
        nextHop: string[];
        /**
         * Prefix of the route.
         */
        prefix: string;
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
         * The timestamp of resource last modification (UTC)
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

    /**
     * Network and credentials configuration currently applied to terminal server.
     */
    export interface TerminalServerConfigurationResponse {
        /**
         * ARM Resource ID used for the NetworkDevice.
         */
        networkDeviceId: string;
        /**
         * Password for the terminal server connection.
         */
        password: string;
        /**
         * IPv4 Address Prefix.
         */
        primaryIpv4Prefix: string;
        /**
         * IPv6 Address Prefix.
         */
        primaryIpv6Prefix?: string;
        /**
         * Secondary IPv4 Address Prefix.
         */
        secondaryIpv4Prefix: string;
        /**
         * Secondary IPv6 Address Prefix.
         */
        secondaryIpv6Prefix?: string;
        /**
         * Serial Number of Terminal server.
         */
        serialNumber?: string;
        /**
         * Username for the terminal server connection.
         */
        username: string;
    }

    /**
     * Vlan group properties.
     */
    export interface VlanGroupPropertiesResponse {
        /**
         * Vlan group name.
         */
        name?: string;
        /**
         * List of vlans.
         */
        vlans?: string[];
    }

    /**
     * The vlan match conditions that need to be matched.
     */
    export interface VlanMatchConditionResponse {
        /**
         * List of inner vlans that need to be matched.
         */
        innerVlans?: string[];
        /**
         * List of vlan group names that need to be matched.
         */
        vlanGroupNames?: string[];
        /**
         * List of vlans that need to be matched.
         */
        vlans?: string[];
    }

    /**
     * Network and credential configuration currently applied on terminal server.
     */
    export interface VpnConfigurationPropertiesResponse {
        /**
         * Administrative state of the resource.
         */
        administrativeState: string;
        /**
         * ARM Resource ID of the Network To Network Interconnect.
         */
        networkToNetworkInterconnectId?: string;
        /**
         * option A properties
         */
        optionAProperties?: VpnConfigurationPropertiesResponseOptionAProperties;
        /**
         * option B properties
         */
        optionBProperties?: FabricOptionBPropertiesResponse;
        /**
         * Peering option list.
         */
        peeringOption: string;
    }
    /**
     * vpnConfigurationPropertiesResponseProvideDefaults sets the appropriate defaults for VpnConfigurationPropertiesResponse
     */
    export function vpnConfigurationPropertiesResponseProvideDefaults(val: VpnConfigurationPropertiesResponse): VpnConfigurationPropertiesResponse {
        return {
            ...val,
            optionAProperties: (val.optionAProperties ? vpnConfigurationPropertiesResponseOptionAPropertiesProvideDefaults(val.optionAProperties) : undefined),
        };
    }

    /**
     * option A properties
     */
    export interface VpnConfigurationPropertiesResponseOptionAProperties {
        /**
         * BFD Configuration properties.
         */
        bfdConfiguration?: BfdConfigurationResponse;
        /**
         * MTU to use for option A peering.
         */
        mtu?: number;
        /**
         * Peer ASN number.Example : 28
         */
        peerASN: number;
        /**
         * IPv4 Address Prefix.
         */
        primaryIpv4Prefix?: string;
        /**
         * IPv6 Address Prefix.
         */
        primaryIpv6Prefix?: string;
        /**
         * Secondary IPv4 Address Prefix.
         */
        secondaryIpv4Prefix?: string;
        /**
         * Secondary IPv6 Address Prefix.
         */
        secondaryIpv6Prefix?: string;
        /**
         * Vlan Id.Example : 501
         */
        vlanId: number;
    }
    /**
     * vpnConfigurationPropertiesResponseOptionAPropertiesProvideDefaults sets the appropriate defaults for VpnConfigurationPropertiesResponseOptionAProperties
     */
    export function vpnConfigurationPropertiesResponseOptionAPropertiesProvideDefaults(val: VpnConfigurationPropertiesResponseOptionAProperties): VpnConfigurationPropertiesResponseOptionAProperties {
        return {
            ...val,
            bfdConfiguration: (val.bfdConfiguration ? bfdConfigurationResponseProvideDefaults(val.bfdConfiguration) : undefined),
            mtu: (val.mtu) ?? 1500,
        };
    }
