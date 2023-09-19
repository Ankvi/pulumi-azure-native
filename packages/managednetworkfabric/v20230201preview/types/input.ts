import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Access Control List condition model.
     */
    export interface AccessControlListConditionPropertiesArgs {
        /**
         * action. Example: allow | deny.
         */
        action: pulumi.Input<string | enums.ConditionActionType>;
        /**
         * Switch configuration description.
         */
        annotation?: pulumi.Input<string>;
        /**
         * destinationAddress. Example: any | 1.1.1.0/24 | 1.1.10.10
         */
        destinationAddress: pulumi.Input<string>;
        /**
         * destinationPort. Example: any | 1253
         */
        destinationPort: pulumi.Input<string>;
        /**
         * TCP/IP protocol as defined in the list of IP protocol numbers. Example: 255 (any) | 0 | 1.
         */
        protocol: pulumi.Input<number>;
        /**
         * sequenceNumber of the Access Control List.
         */
        sequenceNumber: pulumi.Input<number>;
        /**
         * sourceAddress. Example: any | 1.1.1.0/24 | 1.1.10.10
         */
        sourceAddress: pulumi.Input<string>;
        /**
         * sourcePort. Example: any | 1253
         */
        sourcePort: pulumi.Input<string>;
    }

    /**
     * IP Community Properties.
     */
    export interface ActionIpCommunityPropertiesArgs {
        /**
         * IP Community ID list properties.
         */
        add?: pulumi.Input<IpCommunityIdListArgs>;
        /**
         * IP Community ID list properties.
         */
        delete?: pulumi.Input<IpCommunityIdListArgs>;
        /**
         * IP Community ID list properties.
         */
        set?: pulumi.Input<IpCommunityIdListArgs>;
    }

    /**
     * IP Extended Community Properties.
     */
    export interface ActionIpExtendedCommunityPropertiesArgs {
        /**
         * IP Extended Community Id list properties.
         */
        add?: pulumi.Input<IpExtendedCommunityIdListArgs>;
        /**
         * IP Extended Community Id list properties.
         */
        delete?: pulumi.Input<IpExtendedCommunityIdListArgs>;
        /**
         * IP Extended Community Id list properties.
         */
        set?: pulumi.Input<IpExtendedCommunityIdListArgs>;
    }

    /**
     * Aggregate Route properties.
     */
    export interface AggregateRouteArgs {
        /**
         * Prefix of the aggregate Route.
         */
        prefix?: pulumi.Input<string>;
    }

    /**
     * List of IPv4 and IPv6 route configurations.
     */
    export interface AggregateRouteConfigurationArgs {
        /**
         * List of IPv4 Route prefixes.
         */
        ipv4Routes?: pulumi.Input<pulumi.Input<AggregateRouteArgs>[]>;
        /**
         * List of IPv6 Routes prefixes.
         */
        ipv6Routes?: pulumi.Input<pulumi.Input<AggregateRouteArgs>[]>;
    }

    /**
     * BGP configuration properties
     */
    export interface BgpConfigurationArgs {
        /**
         * Allows for routes to be received and processed even if the router detects its own ASN in the AS-Path. 0 is disable, Possible values are 1-10, default is 2.
         */
        allowAS?: pulumi.Input<number>;
        /**
         * Enable Or Disable state.
         */
        allowASOverride?: pulumi.Input<string | enums.AllowASOverride>;
        /**
         * Switch configuration description.
         */
        annotation?: pulumi.Input<string>;
        /**
         * Originate a defaultRoute. Ex: "True" | "False".
         */
        defaultRouteOriginate?: pulumi.Input<string | enums.BooleanEnumProperty>;
        /**
         * BGP Ipv4 ListenRange.
         */
        ipv4ListenRangePrefixes?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * List with stringified ipv4NeighborAddresses.
         */
        ipv4NeighborAddress?: pulumi.Input<pulumi.Input<NeighborAddressArgs>[]>;
        /**
         * BGP Ipv6 ListenRange.
         */
        ipv6ListenRangePrefixes?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * List with stringified IPv6 Neighbor Address.
         */
        ipv6NeighborAddress?: pulumi.Input<pulumi.Input<NeighborAddressArgs>[]>;
        /**
         * Peer ASN. Example: 65047.
         */
        peerASN: pulumi.Input<number>;
    }
    /**
     * bgpConfigurationArgsProvideDefaults sets the appropriate defaults for BgpConfigurationArgs
     */
    export function bgpConfigurationArgsProvideDefaults(val: BgpConfigurationArgs): BgpConfigurationArgs {
        return {
            ...val,
            allowAS: (val.allowAS) ?? 2,
        };
    }

    /**
     * Connected Subnet properties.
     */
    export interface ConnectedSubnetArgs {
        /**
         * Switch configuration description.
         */
        annotation?: pulumi.Input<string>;
        /**
         * Prefix of the connected Subnet.
         */
        prefix?: pulumi.Input<string>;
    }

    /**
     * The ExpressRoute circuit ID and the Auth Key are required for you to successfully deploy NFC service.
     */
    export interface ExpressRouteConnectionInformationArgs {
        /**
         * Authorization key for the circuit, must be of type Microsoft.Network/expressRouteCircuits/authorizations. The Auth Key is a mandatory attribute.
         */
        expressRouteAuthorizationKey: pulumi.Input<string>;
        /**
         * The express route circuit Azure resource ID, must be of type Microsoft.Network/expressRouteCircuits/circuitName. The ExpressRoute Circuit is a mandatory attribute.
         */
        expressRouteCircuitId: pulumi.Input<string>;
    }

    /**
     * option A properties object
     */
    export interface ExternalNetworkPropertiesOptionAPropertiesArgs {
        /**
         * MTU to use for option A peering.
         */
        mtu?: pulumi.Input<number>;
        /**
         * Peer ASN number.Example : 28
         */
        peerASN: pulumi.Input<number>;
        /**
         * IPv4 Address Prefix of CE-PE interconnect links. Example: 172.31.0.0/31. The values can be specified at the time of creation or can be updated afterwards. Any update to the values post-provisioning may disrupt traffic. The 1st and 3rd IPs are to be configured on CE1 and CE2 for Option B interfaces. The 2nd and 4th IPs are to be configured on PE1 and PE2 for Option B interfaces.
         */
        primaryIpv4Prefix?: pulumi.Input<string>;
        /**
         * IPv6 Address Prefix of CE-PE interconnect links. Example: 3FFE:FFFF:0:CD30::a0/126. The values can be specified at the time of creation or can be updated afterwards. Any update to the values post-provisioning may disrupt traffic. The 1st and 3rd IPs are to be configured on CE1 and CE2 for Option B interfaces. The 2nd and 4th IPs are to be configured on PE1 and PE2 for Option B interfaces.
         */
        primaryIpv6Prefix?: pulumi.Input<string>;
        /**
         * Secondary IPv4 Address Prefix of CE-PE interconnect links. Example: 172.31.0.20/31. The values can be specified at the time of creation or can be updated afterwards. Any update to the values post-provisioning may disrupt traffic. The 1st and 3rd IPs are to be configured on CE1 and CE2 for Option B interfaces. The 2nd and 4th IPs are to be configured on PE1 and PE2 for Option B interfaces.
         */
        secondaryIpv4Prefix?: pulumi.Input<string>;
        /**
         * Secondary IPv6 Address Prefix of CE-PE interconnect links. Example: 3FFE:FFFF:0:CD30::a4/126. The values can be specified at the time of creation or can be updated afterwards. Any update to the values post-provisioning may disrupt traffic. The 1st and 3rd IPs are to be configured on CE1 and CE2 for Option B interfaces. The 2nd and 4th IPs are to be configured on PE1 and PE2 for Option B interfaces.
         */
        secondaryIpv6Prefix?: pulumi.Input<string>;
        /**
         * Vlan identifier. Example : 501
         */
        vlanId: pulumi.Input<number>;
    }
    /**
     * externalNetworkPropertiesOptionAPropertiesArgsProvideDefaults sets the appropriate defaults for ExternalNetworkPropertiesOptionAPropertiesArgs
     */
    export function externalNetworkPropertiesOptionAPropertiesArgsProvideDefaults(val: ExternalNetworkPropertiesOptionAPropertiesArgs): ExternalNetworkPropertiesOptionAPropertiesArgs {
        return {
            ...val,
            mtu: (val.mtu) ?? 1500,
        };
    }

    /**
     * Option B configuration.
     */
    export interface FabricOptionBPropertiesArgs {
        /**
         * Route Targets to be applied for outgoing routes from CE.
         */
        exportRouteTargets: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Route Targets to be applied for incoming routes into CE.
         */
        importRouteTargets: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * IP Community ID list properties.
     */
    export interface IpCommunityIdListArgs {
        /**
         * List of IP Community resource IDs.
         */
        ipCommunityIds?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * IP Extended Community Id list properties.
     */
    export interface IpExtendedCommunityIdListArgs {
        /**
         * List of IP Extended Community resource IDs.
         */
        ipExtendedCommunityIds?: pulumi.Input<pulumi.Input<string>[]>;
    }

    export interface IpPrefixPropertiesIpPrefixRulesArgs {
        /**
         * Action to be taken on the configuration. Example: Permit | Deny.
         */
        action: pulumi.Input<string | enums.CommunityActionTypes>;
        /**
         * Specify prefix-list bounds.
         */
        condition?: pulumi.Input<string | enums.Condition>;
        /**
         * Network Prefix specifying IPv4/IPv6 packets to be permitted or denied. Example: 1.1.1.0/24 | 3FFE:FFFF:0:CD30::/126 
         */
        networkPrefix: pulumi.Input<string>;
        /**
         * Sequence to insert to/delete from existing route. Prefix lists are evaluated starting with the lowest sequence number and continue down the list until a match is made. Once a match is made, the permit or deny statement is applied to that network and the rest of the list is ignored.
         */
        sequenceNumber: pulumi.Input<number>;
        /**
         * SubnetMaskLength gives the minimum NetworkPrefix length to be matched.Possible values for IPv4 are 1 - 32. Possible values of IPv6 are 1 - 128.
         */
        subnetMaskLength?: pulumi.Input<number>;
    }

    /**
     * Connected Subnet RoutePolicy
     */
    export interface L3IsolationDomainPatchPropertiesConnectedSubnetRoutePolicyArgs {
        /**
         * exportRoutePolicyId value.
         */
        exportRoutePolicyId?: pulumi.Input<string>;
    }

    /**
     * layer2Configuration
     */
    export interface Layer2ConfigurationArgs {
        /**
         * MTU of the packets between PE & CE.
         */
        mtu: pulumi.Input<number>;
        /**
         * Number of ports connected between PE/CE. Maximum value depends on FabricSKU.
         */
        portCount?: pulumi.Input<number>;
    }
    /**
     * layer2ConfigurationArgsProvideDefaults sets the appropriate defaults for Layer2ConfigurationArgs
     */
    export function layer2ConfigurationArgsProvideDefaults(val: Layer2ConfigurationArgs): Layer2ConfigurationArgs {
        return {
            ...val,
            mtu: (val.mtu) ?? 1500,
        };
    }

    /**
     * layer3Configuration
     */
    export interface Layer3ConfigurationArgs {
        /**
         * exportRoutePolicyId
         */
        exportRoutePolicyId?: pulumi.Input<string>;
        /**
         * importRoutePolicyId
         */
        importRoutePolicyId?: pulumi.Input<string>;
        /**
         * ASN of PE devices for CE/PE connectivity.Example : 28
         */
        peerASN?: pulumi.Input<number>;
        /**
         * IPv4 Address Prefix of CE-PE interconnect links. Example: 172.31.0.0/31. The values can be specified at the time of creation or can be updated afterwards. Any update to the values post-provisioning may disrupt traffic. The 1st and 3rd IPs are to be configured on CE1 and CE2 for Option B interfaces. The 2nd and 4th IPs are to be configured on PE1 and PE2 for Option B interfaces.
         */
        primaryIpv4Prefix?: pulumi.Input<string>;
        /**
         * IPv6 Address Prefix of CE-PE interconnect links. Example: 3FFE:FFFF:0:CD30::a0/126. The values can be specified at the time of creation or can be updated afterwards. Any update to the values post-provisioning may disrupt traffic. The 1st and 3rd IPs are to be configured on CE1 and CE2 for Option B interfaces. The 2nd and 4th IPs are to be configured on PE1 and PE2 for Option B interfaces.
         */
        primaryIpv6Prefix?: pulumi.Input<string>;
        /**
         * Secondary IPv4 Address Prefix of CE-PE interconnect links. Example: 172.31.0.20/31. The values can be specified at the time of creation or can be updated afterwards. Any update to the values post-provisioning may disrupt traffic. The 1st and 3rd IPs are to be configured on CE1 and CE2 for Option B interfaces. The 2nd and 4th IPs are to be configured on PE1 and PE2 for Option B interfaces.
         */
        secondaryIpv4Prefix?: pulumi.Input<string>;
        /**
         * Secondary IPv6 Address Prefix of CE-PE interconnect links. Example: 3FFE:FFFF:0:CD30::a4/126. The values can be specified at the time of creation or can be updated afterwards. Any update to the values post-provisioning may disrupt traffic. The 1st and 3rd IPs are to be configured on CE1 and CE2 for Option B interfaces. The 2nd and 4th IPs are to be configured on PE1 and PE2 for Option B interfaces.
         */
        secondaryIpv6Prefix?: pulumi.Input<string>;
        /**
         * VLAN for CE/PE Layer 3 connectivity.Example : 501
         */
        vlanId?: pulumi.Input<number>;
    }

    /**
     * Managed Resource Group configuration properties.
     */
    export interface ManagedResourceGroupConfigurationArgs {
        /**
         * Managed resource group location.
         */
        location?: pulumi.Input<string>;
        /**
         * The NFC service will be hosted in a Managed resource group.
         */
        name?: pulumi.Input<string>;
    }

    /**
     * Configuration to be used to setup the management network.
     */
    export interface ManagementNetworkConfigurationArgs {
        /**
         * Configuration for infrastructure vpn.
         */
        infrastructureVpnConfiguration: pulumi.Input<VpnConfigurationPropertiesArgs>;
        /**
         * Configuration for workload vpn.
         */
        workloadVpnConfiguration: pulumi.Input<VpnConfigurationPropertiesArgs>;
    }
    /**
     * managementNetworkConfigurationArgsProvideDefaults sets the appropriate defaults for ManagementNetworkConfigurationArgs
     */
    export function managementNetworkConfigurationArgsProvideDefaults(val: ManagementNetworkConfigurationArgs): ManagementNetworkConfigurationArgs {
        return {
            ...val,
            infrastructureVpnConfiguration: pulumi.output(val.infrastructureVpnConfiguration).apply(vpnConfigurationPropertiesArgsProvideDefaults),
            workloadVpnConfiguration: pulumi.output(val.workloadVpnConfiguration).apply(vpnConfigurationPropertiesArgsProvideDefaults),
        };
    }

    /**
     * Neighbor Address properties.
     */
    export interface NeighborAddressArgs {
        /**
         * IP Address.
         */
        address?: pulumi.Input<string>;
    }

    /**
     * Peering optionA properties
     */
    export interface OptionAPropertiesArgs {
        /**
         * MTU to use for option A peering.
         */
        mtu?: pulumi.Input<number>;
        /**
         * Peer ASN number.Example : 28
         */
        peerASN?: pulumi.Input<number>;
        /**
         * IPv4 Address Prefix of CE-PE interconnect links. Example: 172.31.0.0/31. The values can be specified at the time of creation or can be updated afterwards. Any update to the values post-provisioning may disrupt traffic. The 1st and 3rd IPs are to be configured on CE1 and CE2 for Option B interfaces. The 2nd and 4th IPs are to be configured on PE1 and PE2 for Option B interfaces.
         */
        primaryIpv4Prefix?: pulumi.Input<string>;
        /**
         * IPv6 Address Prefix of CE-PE interconnect links. Example: 3FFE:FFFF:0:CD30::a0/126. The values can be specified at the time of creation or can be updated afterwards. Any update to the values post-provisioning may disrupt traffic. The 1st and 3rd IPs are to be configured on CE1 and CE2 for Option B interfaces. The 2nd and 4th IPs are to be configured on PE1 and PE2 for Option B interfaces.
         */
        primaryIpv6Prefix?: pulumi.Input<string>;
        /**
         * Secondary IPv4 Address Prefix of CE-PE interconnect links. Example: 172.31.0.20/31. The values can be specified at the time of creation or can be updated afterwards. Any update to the values post-provisioning may disrupt traffic. The 1st and 3rd IPs are to be configured on CE1 and CE2 for Option B interfaces. The 2nd and 4th IPs are to be configured on PE1 and PE2 for Option B interfaces.
         */
        secondaryIpv4Prefix?: pulumi.Input<string>;
        /**
         * Secondary IPv6 Address Prefix of CE-PE interconnect links. Example: 3FFE:FFFF:0:CD30::a4/126. The values can be specified at the time of creation or can be updated afterwards. Any update to the values post-provisioning may disrupt traffic. The 1st and 3rd IPs are to be configured on CE1 and CE2 for Option B interfaces. The 2nd and 4th IPs are to be configured on PE1 and PE2 for Option B interfaces.
         */
        secondaryIpv6Prefix?: pulumi.Input<string>;
        /**
         * Vlan identifier. Example : 501
         */
        vlanId?: pulumi.Input<number>;
    }
    /**
     * optionAPropertiesArgsProvideDefaults sets the appropriate defaults for OptionAPropertiesArgs
     */
    export function optionAPropertiesArgsProvideDefaults(val: OptionAPropertiesArgs): OptionAPropertiesArgs {
        return {
            ...val,
            mtu: (val.mtu) ?? 1500,
        };
    }

    /**
     * Option B configuration.
     */
    export interface OptionBPropertiesArgs {
        /**
         * Route Targets to be applied for outgoing routes from CE.
         */
        exportRouteTargets?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Route Targets to be applied for incoming routes into CE.
         */
        importRouteTargets?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Route Policy Statement properties..
     */
    export interface RoutePolicyStatementPropertiesArgs {
        /**
         * Route policy action properties.
         */
        action: pulumi.Input<StatementActionPropertiesArgs>;
        /**
         * Switch configuration description.
         */
        annotation?: pulumi.Input<string>;
        /**
         * Route policy condition properties.
         */
        condition: pulumi.Input<StatementConditionPropertiesArgs>;
        /**
         * Sequence to insert to/delete from existing route.
         */
        sequenceNumber: pulumi.Input<number>;
    }

    /**
     * Route policy action properties.
     */
    export interface StatementActionPropertiesArgs {
        /**
         * action. Example: Permit | Deny.
         */
        actionType: pulumi.Input<string | enums.CommunityActionTypes>;
        /**
         * IP Community Properties.
         */
        ipCommunityProperties?: pulumi.Input<ActionIpCommunityPropertiesArgs>;
        /**
         * IP Extended Community Properties.
         */
        ipExtendedCommunityProperties?: pulumi.Input<ActionIpExtendedCommunityPropertiesArgs>;
        /**
         * localPreference of the route policy.
         */
        localPreference?: pulumi.Input<number>;
    }

    /**
     * Route policy statement condition properties.
     */
    export interface StatementConditionPropertiesArgs {
        /**
         * List of IP Community resource IDs.
         */
        ipCommunityIds?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * List of IP Extended Community resource IDs.
         */
        ipExtendedCommunityIds?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Arm Resource Id of IpPrefix.
         */
        ipPrefixId?: pulumi.Input<string>;
    }

    /**
     * staticRouteConfiguration model.
     */
    export interface StaticRouteConfigurationArgs {
        /**
         * List with object IPv4Routes.
         */
        ipv4Routes?: pulumi.Input<pulumi.Input<StaticRoutePropertiesArgs>[]>;
        /**
         * List with object IPv6Routes.
         */
        ipv6Routes?: pulumi.Input<pulumi.Input<StaticRoutePropertiesArgs>[]>;
    }

    /**
     * Static Route properties.
     */
    export interface StaticRoutePropertiesArgs {
        /**
         * List of next hop IPv4 | IPv6 addresses.
         */
        nextHop: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * IPv4 | IPv6 Prefix.
         */
        prefix: pulumi.Input<string>;
    }

    /**
     * Network and credentials configuration currently applied to terminal server.
     */
    export interface TerminalServerConfigurationArgs {
        /**
         * Password for the terminal server connection.
         */
        password: pulumi.Input<string>;
        /**
         * IPv4 Address Prefix of CE-PE interconnect links. Example: 172.31.0.0/31. The values can be specified at the time of creation or can be updated afterwards. Any update to the values post-provisioning may disrupt traffic. The 1st and 3rd IPs are to be configured on CE1 and CE2 for Option B interfaces. The 2nd and 4th IPs are to be configured on PE1 and PE2 for Option B interfaces.
         */
        primaryIpv4Prefix: pulumi.Input<string>;
        /**
         * IPv6 Address Prefix of CE-PE interconnect links. Example: 3FFE:FFFF:0:CD30::a0/126. The values can be specified at the time of creation or can be updated afterwards. Any update to the values post-provisioning may disrupt traffic. The 1st and 3rd IPs are to be configured on CE1 and CE2 for Option B interfaces. The 2nd and 4th IPs are to be configured on PE1 and PE2 for Option B interfaces.
         */
        primaryIpv6Prefix?: pulumi.Input<string>;
        /**
         * Secondary IPv4 Address Prefix of CE-PE interconnect links. Example: 172.31.0.20/31. The values can be specified at the time of creation or can be updated afterwards. Any update to the values post-provisioning may disrupt traffic. The 1st and 3rd IPs are to be configured on CE1 and CE2 for Option B interfaces. The 2nd and 4th IPs are to be configured on PE1 and PE2 for Option B interfaces.
         */
        secondaryIpv4Prefix: pulumi.Input<string>;
        /**
         * Secondary IPv6 Address Prefix of CE-PE interconnect links. Example: 3FFE:FFFF:0:CD30::a4/126. The values can be specified at the time of creation or can be updated afterwards. Any update to the values post-provisioning may disrupt traffic. The 1st and 3rd IPs are to be configured on CE1 and CE2 for Option B interfaces. The 2nd and 4th IPs are to be configured on PE1 and PE2 for Option B interfaces.
         */
        secondaryIpv6Prefix?: pulumi.Input<string>;
        /**
         * Serial Number of Terminal server.
         */
        serialNumber?: pulumi.Input<string>;
        /**
         * Username for the terminal server connection.
         */
        username: pulumi.Input<string>;
    }

    /**
     * Configuration for infrastructure vpn.
     */
    export interface VpnConfigurationPropertiesArgs {
        /**
         * option A properties
         */
        optionAProperties?: pulumi.Input<OptionAPropertiesArgs>;
        /**
         * option B properties
         */
        optionBProperties?: pulumi.Input<FabricOptionBPropertiesArgs>;
        /**
         * Peering option list.
         */
        peeringOption: pulumi.Input<string | enums.PeeringOption>;
    }
    /**
     * vpnConfigurationPropertiesArgsProvideDefaults sets the appropriate defaults for VpnConfigurationPropertiesArgs
     */
    export function vpnConfigurationPropertiesArgsProvideDefaults(val: VpnConfigurationPropertiesArgs): VpnConfigurationPropertiesArgs {
        return {
            ...val,
            optionAProperties: (val.optionAProperties ? pulumi.output(val.optionAProperties).apply(optionAPropertiesArgsProvideDefaults) : undefined),
        };
    }
