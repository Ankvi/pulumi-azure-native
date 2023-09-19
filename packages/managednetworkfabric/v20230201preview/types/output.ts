import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Access Control List condition model.
     */
    export interface AccessControlListConditionPropertiesResponse {
        /**
         * action. Example: allow | deny.
         */
        action: string;
        /**
         * Switch configuration description.
         */
        annotation?: string;
        /**
         * destinationAddress. Example: any | 1.1.1.0/24 | 1.1.10.10
         */
        destinationAddress: string;
        /**
         * destinationPort. Example: any | 1253
         */
        destinationPort: string;
        /**
         * TCP/IP protocol as defined in the list of IP protocol numbers. Example: 255 (any) | 0 | 1.
         */
        protocol: number;
        /**
         * sequenceNumber of the Access Control List.
         */
        sequenceNumber: number;
        /**
         * sourceAddress. Example: any | 1.1.1.0/24 | 1.1.10.10
         */
        sourceAddress: string;
        /**
         * sourcePort. Example: any | 1253
         */
        sourcePort: string;
    }

    /**
     * IP Community Properties.
     */
    export interface ActionIpCommunityPropertiesResponse {
        /**
         * IP Community ID list properties.
         */
        add?: IpCommunityIdListResponse;
        /**
         * IP Community ID list properties.
         */
        delete?: IpCommunityIdListResponse;
        /**
         * IP Community ID list properties.
         */
        set?: IpCommunityIdListResponse;
    }

    /**
     * IP Extended Community Properties.
     */
    export interface ActionIpExtendedCommunityPropertiesResponse {
        /**
         * IP Extended Community Id list properties.
         */
        add?: IpExtendedCommunityIdListResponse;
        /**
         * IP Extended Community Id list properties.
         */
        delete?: IpExtendedCommunityIdListResponse;
        /**
         * IP Extended Community Id list properties.
         */
        set?: IpExtendedCommunityIdListResponse;
    }

    /**
     * List of IPv4 and IPv6 route configurations.
     */
    export interface AggregateRouteConfigurationResponse {
        /**
         * List of IPv4 Route prefixes.
         */
        ipv4Routes?: AggregateRouteResponse[];
        /**
         * List of IPv6 Routes prefixes.
         */
        ipv6Routes?: AggregateRouteResponse[];
    }

    /**
     * Aggregate Route properties.
     */
    export interface AggregateRouteResponse {
        /**
         * Prefix of the aggregate Route.
         */
        prefix?: string;
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
         * interval in milliseconds. Example: 300.
         */
        interval: number;
        /**
         * Multiplier for the Bfd Configuration. Example: 3.
         */
        multiplier: number;
    }

    /**
     * BGP configuration properties
     */
    export interface BgpConfigurationResponse {
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
         * BGP Ipv4 ListenRange.
         */
        ipv4ListenRangePrefixes?: string[];
        /**
         * List with stringified ipv4NeighborAddresses.
         */
        ipv4NeighborAddress?: NeighborAddressResponse[];
        /**
         * BGP Ipv6 ListenRange.
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
     * bgpConfigurationResponseProvideDefaults sets the appropriate defaults for BgpConfigurationResponse
     */
    export function bgpConfigurationResponseProvideDefaults(val: BgpConfigurationResponse): BgpConfigurationResponse {
        return {
            ...val,
            allowAS: (val.allowAS) ?? 2,
        };
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
         * Prefix of the connected Subnet.
         */
        prefix?: string;
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
         * Fabric ASN number. Example 65001 
         */
        fabricASN: number;
        /**
         * MTU to use for option A peering.
         */
        mtu?: number;
        /**
         * Peer ASN number.Example : 28
         */
        peerASN: number;
        /**
         * IPv4 Address Prefix of CE-PE interconnect links. Example: 172.31.0.0/31. The values can be specified at the time of creation or can be updated afterwards. Any update to the values post-provisioning may disrupt traffic. The 1st and 3rd IPs are to be configured on CE1 and CE2 for Option B interfaces. The 2nd and 4th IPs are to be configured on PE1 and PE2 for Option B interfaces.
         */
        primaryIpv4Prefix?: string;
        /**
         * IPv6 Address Prefix of CE-PE interconnect links. Example: 3FFE:FFFF:0:CD30::a0/126. The values can be specified at the time of creation or can be updated afterwards. Any update to the values post-provisioning may disrupt traffic. The 1st and 3rd IPs are to be configured on CE1 and CE2 for Option B interfaces. The 2nd and 4th IPs are to be configured on PE1 and PE2 for Option B interfaces.
         */
        primaryIpv6Prefix?: string;
        /**
         * Secondary IPv4 Address Prefix of CE-PE interconnect links. Example: 172.31.0.20/31. The values can be specified at the time of creation or can be updated afterwards. Any update to the values post-provisioning may disrupt traffic. The 1st and 3rd IPs are to be configured on CE1 and CE2 for Option B interfaces. The 2nd and 4th IPs are to be configured on PE1 and PE2 for Option B interfaces.
         */
        secondaryIpv4Prefix?: string;
        /**
         * Secondary IPv6 Address Prefix of CE-PE interconnect links. Example: 3FFE:FFFF:0:CD30::a4/126. The values can be specified at the time of creation or can be updated afterwards. Any update to the values post-provisioning may disrupt traffic. The 1st and 3rd IPs are to be configured on CE1 and CE2 for Option B interfaces. The 2nd and 4th IPs are to be configured on PE1 and PE2 for Option B interfaces.
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
            mtu: (val.mtu) ?? 1500,
        };
    }

    /**
     * BFD Configuration properties.
     */
    export interface FabricBfdConfigurationResponse {
        /**
         * interval in seconds. Example: 300.
         */
        interval: number;
        /**
         * multiplier. Example: 3.
         */
        multiplier: number;
    }

    /**
     * Option B configuration.
     */
    export interface FabricOptionBPropertiesResponse {
        /**
         * Route Targets to be applied for outgoing routes from CE.
         */
        exportRouteTargets: string[];
        /**
         * Route Targets to be applied for incoming routes into CE.
         */
        importRouteTargets: string[];
    }

    /**
     * InfrastructureServices IP ranges.
     */
    export interface InfrastructureServicesResponse {
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
     * IP Community ID list properties.
     */
    export interface IpCommunityIdListResponse {
        /**
         * List of IP Community resource IDs.
         */
        ipCommunityIds?: string[];
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

    export interface IpPrefixPropertiesResponseIpPrefixRules {
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
         * SubnetMaskLength gives the minimum NetworkPrefix length to be matched.Possible values for IPv4 are 1 - 32. Possible values of IPv6 are 1 - 128.
         */
        subnetMaskLength?: number;
    }

    /**
     * Connected Subnet RoutePolicy
     */
    export interface L3IsolationDomainPatchPropertiesResponseConnectedSubnetRoutePolicy {
        /**
         * Enabled/Disabled connected subnet route policy. Ex: Enabled | Disabled.
         */
        administrativeState: string;
        /**
         * exportRoutePolicyId value.
         */
        exportRoutePolicyId?: string;
    }

    /**
     * layer2Configuration
     */
    export interface Layer2ConfigurationResponse {
        /**
         * List of network device interfaces resource IDs.
         */
        interfaces: string[];
        /**
         * MTU of the packets between PE & CE.
         */
        mtu: number;
        /**
         * Number of ports connected between PE/CE. Maximum value depends on FabricSKU.
         */
        portCount?: number;
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
     * layer3Configuration
     */
    export interface Layer3ConfigurationResponse {
        /**
         * exportRoutePolicyId
         */
        exportRoutePolicyId?: string;
        /**
         * ASN of CE devices for CE/PE connectivity.
         */
        fabricASN: number;
        /**
         * importRoutePolicyId
         */
        importRoutePolicyId?: string;
        /**
         * ASN of PE devices for CE/PE connectivity.Example : 28
         */
        peerASN?: number;
        /**
         * IPv4 Address Prefix of CE-PE interconnect links. Example: 172.31.0.0/31. The values can be specified at the time of creation or can be updated afterwards. Any update to the values post-provisioning may disrupt traffic. The 1st and 3rd IPs are to be configured on CE1 and CE2 for Option B interfaces. The 2nd and 4th IPs are to be configured on PE1 and PE2 for Option B interfaces.
         */
        primaryIpv4Prefix?: string;
        /**
         * IPv6 Address Prefix of CE-PE interconnect links. Example: 3FFE:FFFF:0:CD30::a0/126. The values can be specified at the time of creation or can be updated afterwards. Any update to the values post-provisioning may disrupt traffic. The 1st and 3rd IPs are to be configured on CE1 and CE2 for Option B interfaces. The 2nd and 4th IPs are to be configured on PE1 and PE2 for Option B interfaces.
         */
        primaryIpv6Prefix?: string;
        /**
         * Secondary IPv4 Address Prefix of CE-PE interconnect links. Example: 172.31.0.20/31. The values can be specified at the time of creation or can be updated afterwards. Any update to the values post-provisioning may disrupt traffic. The 1st and 3rd IPs are to be configured on CE1 and CE2 for Option B interfaces. The 2nd and 4th IPs are to be configured on PE1 and PE2 for Option B interfaces.
         */
        secondaryIpv4Prefix?: string;
        /**
         * Secondary IPv6 Address Prefix of CE-PE interconnect links. Example: 3FFE:FFFF:0:CD30::a4/126. The values can be specified at the time of creation or can be updated afterwards. Any update to the values post-provisioning may disrupt traffic. The 1st and 3rd IPs are to be configured on CE1 and CE2 for Option B interfaces. The 2nd and 4th IPs are to be configured on PE1 and PE2 for Option B interfaces.
         */
        secondaryIpv6Prefix?: string;
        /**
         * VLAN for CE/PE Layer 3 connectivity.Example : 501
         */
        vlanId?: number;
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
    export interface ManagementNetworkConfigurationResponse {
        /**
         * Configuration for infrastructure vpn.
         */
        infrastructureVpnConfiguration: VpnConfigurationPropertiesResponse;
        /**
         * Configuration for workload vpn.
         */
        workloadVpnConfiguration: VpnConfigurationPropertiesResponse;
    }
    /**
     * managementNetworkConfigurationResponseProvideDefaults sets the appropriate defaults for ManagementNetworkConfigurationResponse
     */
    export function managementNetworkConfigurationResponseProvideDefaults(val: ManagementNetworkConfigurationResponse): ManagementNetworkConfigurationResponse {
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
         * OperationalState of the NeighborAddress.
         */
        operationalState: string;
    }

    /**
     * Peering optionA properties
     */
    export interface OptionAPropertiesResponse {
        /**
         * BFD Configuration properties.
         */
        bfdConfiguration?: FabricBfdConfigurationResponse;
        /**
         * MTU to use for option A peering.
         */
        mtu?: number;
        /**
         * Peer ASN number.Example : 28
         */
        peerASN?: number;
        /**
         * IPv4 Address Prefix of CE-PE interconnect links. Example: 172.31.0.0/31. The values can be specified at the time of creation or can be updated afterwards. Any update to the values post-provisioning may disrupt traffic. The 1st and 3rd IPs are to be configured on CE1 and CE2 for Option B interfaces. The 2nd and 4th IPs are to be configured on PE1 and PE2 for Option B interfaces.
         */
        primaryIpv4Prefix?: string;
        /**
         * IPv6 Address Prefix of CE-PE interconnect links. Example: 3FFE:FFFF:0:CD30::a0/126. The values can be specified at the time of creation or can be updated afterwards. Any update to the values post-provisioning may disrupt traffic. The 1st and 3rd IPs are to be configured on CE1 and CE2 for Option B interfaces. The 2nd and 4th IPs are to be configured on PE1 and PE2 for Option B interfaces.
         */
        primaryIpv6Prefix?: string;
        /**
         * Secondary IPv4 Address Prefix of CE-PE interconnect links. Example: 172.31.0.20/31. The values can be specified at the time of creation or can be updated afterwards. Any update to the values post-provisioning may disrupt traffic. The 1st and 3rd IPs are to be configured on CE1 and CE2 for Option B interfaces. The 2nd and 4th IPs are to be configured on PE1 and PE2 for Option B interfaces.
         */
        secondaryIpv4Prefix?: string;
        /**
         * Secondary IPv6 Address Prefix of CE-PE interconnect links. Example: 3FFE:FFFF:0:CD30::a4/126. The values can be specified at the time of creation or can be updated afterwards. Any update to the values post-provisioning may disrupt traffic. The 1st and 3rd IPs are to be configured on CE1 and CE2 for Option B interfaces. The 2nd and 4th IPs are to be configured on PE1 and PE2 for Option B interfaces.
         */
        secondaryIpv6Prefix?: string;
        /**
         * Vlan identifier. Example : 501
         */
        vlanId?: number;
    }
    /**
     * optionAPropertiesResponseProvideDefaults sets the appropriate defaults for OptionAPropertiesResponse
     */
    export function optionAPropertiesResponseProvideDefaults(val: OptionAPropertiesResponse): OptionAPropertiesResponse {
        return {
            ...val,
            mtu: (val.mtu) ?? 1500,
        };
    }

    /**
     * Option B configuration.
     */
    export interface OptionBPropertiesResponse {
        /**
         * Route Targets to be applied for outgoing routes from CE.
         */
        exportRouteTargets?: string[];
        /**
         * Route Targets to be applied for incoming routes into CE.
         */
        importRouteTargets?: string[];
    }

    /**
     * Route Policy Statement properties..
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
     * Route policy action properties.
     */
    export interface StatementActionPropertiesResponse {
        /**
         * action. Example: Permit | Deny.
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
         * localPreference of the route policy.
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
    }

    /**
     * staticRouteConfiguration model.
     */
    export interface StaticRouteConfigurationResponse {
        /**
         * BFD configuration properties
         */
        bfdConfiguration?: BfdConfigurationResponse;
        /**
         * List with object IPv4Routes.
         */
        ipv4Routes?: StaticRoutePropertiesResponse[];
        /**
         * List with object IPv6Routes.
         */
        ipv6Routes?: StaticRoutePropertiesResponse[];
    }

    /**
     * Static Route properties.
     */
    export interface StaticRoutePropertiesResponse {
        /**
         * List of next hop IPv4 | IPv6 addresses.
         */
        nextHop: string[];
        /**
         * IPv4 | IPv6 Prefix.
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
         * IPv4 Address Prefix of CE-PE interconnect links. Example: 172.31.0.0/31. The values can be specified at the time of creation or can be updated afterwards. Any update to the values post-provisioning may disrupt traffic. The 1st and 3rd IPs are to be configured on CE1 and CE2 for Option B interfaces. The 2nd and 4th IPs are to be configured on PE1 and PE2 for Option B interfaces.
         */
        primaryIpv4Prefix: string;
        /**
         * IPv6 Address Prefix of CE-PE interconnect links. Example: 3FFE:FFFF:0:CD30::a0/126. The values can be specified at the time of creation or can be updated afterwards. Any update to the values post-provisioning may disrupt traffic. The 1st and 3rd IPs are to be configured on CE1 and CE2 for Option B interfaces. The 2nd and 4th IPs are to be configured on PE1 and PE2 for Option B interfaces.
         */
        primaryIpv6Prefix?: string;
        /**
         * Secondary IPv4 Address Prefix of CE-PE interconnect links. Example: 172.31.0.20/31. The values can be specified at the time of creation or can be updated afterwards. Any update to the values post-provisioning may disrupt traffic. The 1st and 3rd IPs are to be configured on CE1 and CE2 for Option B interfaces. The 2nd and 4th IPs are to be configured on PE1 and PE2 for Option B interfaces.
         */
        secondaryIpv4Prefix: string;
        /**
         * Secondary IPv6 Address Prefix of CE-PE interconnect links. Example: 3FFE:FFFF:0:CD30::a4/126. The values can be specified at the time of creation or can be updated afterwards. Any update to the values post-provisioning may disrupt traffic. The 1st and 3rd IPs are to be configured on CE1 and CE2 for Option B interfaces. The 2nd and 4th IPs are to be configured on PE1 and PE2 for Option B interfaces.
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
     * Configuration for infrastructure vpn.
     */
    export interface VpnConfigurationPropertiesResponse {
        /**
         * Indicates configuration state. Example: Enabled | Disabled.
         */
        administrativeState: string;
        /**
         * Gets the networkToNetworkInterconnectId of the resource.
         */
        networkToNetworkInterconnectId: string;
        /**
         * option A properties
         */
        optionAProperties?: OptionAPropertiesResponse;
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
            optionAProperties: (val.optionAProperties ? optionAPropertiesResponseProvideDefaults(val.optionAProperties) : undefined),
        };
    }

    /**
     * WorkloadServices IP ranges.
     */
    export interface WorkloadServicesResponse {
        /**
         * The IPv4 Address space is optional, if the value is defined at the time of NFC creation, then the default value 10.0.0.0/19 is considered. The IPV4 address subnet is an optional attribute.
         */
        ipv4AddressSpaces?: string[];
        /**
         * The IPv6 is not supported right now.
         */
        ipv6AddressSpaces?: string[];
    }
