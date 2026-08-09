import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Action that need to performed.
 */
export interface AccessControlListActionArgs {
    /**
     * Name of the counter block to get match count information.
     */
    counterName?: pulumi.Input<string | undefined>;
    /**
     * Type of actions that can be performed.
     */
    type?: pulumi.Input<string | enums.AclActionType | undefined>;
}

/**
 * Defines the match condition that is supported to filter the traffic.
 */
export interface AccessControlListMatchConditionArgs {
    /**
     * List of DSCP Markings that need to be matched.
     */
    dscpMarkings?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * List of ether type values that need to be matched.
     */
    etherTypes?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * List of IP fragment packets that need to be matched.
     */
    fragments?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * IP condition that needs to be matched.
     */
    ipCondition?: pulumi.Input<IpMatchConditionArgs | undefined>;
    /**
     * List of IP Lengths that need to be matched.
     */
    ipLengths?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Defines the port condition that needs to be matched.
     */
    portCondition?: pulumi.Input<AccessControlListPortConditionArgs | undefined>;
    /**
     * List of the protocols that need to be matched.
     */
    protocolTypes?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * List of TTL [Time To Live] values that need to be matched.
     */
    ttlValues?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Vlan match condition that needs to be matched.
     */
    vlanMatchCondition?: pulumi.Input<VlanMatchConditionArgs | undefined>;
}

/**
 * Defines the match configuration that are supported to filter the traffic.
 */
export interface AccessControlListMatchConfigurationArgs {
    /**
     * List of actions that need to be performed for the matched conditions.
     */
    actions?: pulumi.Input<pulumi.Input<AccessControlListActionArgs>[] | undefined>;
    /**
     * Type of IP Address. IPv4 or IPv6
     */
    ipAddressType?: pulumi.Input<string | enums.IPAddressType | undefined>;
    /**
     * List of the match conditions.
     */
    matchConditions?: pulumi.Input<pulumi.Input<AccessControlListMatchConditionArgs>[] | undefined>;
    /**
     * The name of the match configuration.
     */
    matchConfigurationName?: pulumi.Input<string | undefined>;
    /**
     * Sequence Number of the match configuration.
     */
    sequenceNumber?: pulumi.Input<number | undefined>;
}

/**
 * Defines the port condition that needs to be matched.
 */
export interface AccessControlListPortConditionArgs {
    /**
     * List of protocol flags that need to be matched. Example: established | initial | <List-of-TCP-flags>. List of eligible TCP Flags are ack, fin, not-ack, not-fin, not-psh, not-rst, not-syn, not-urg, psh, rst, syn, urg
     */
    flags?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Layer4 protocol type that needs to be matched.
     */
    layer4Protocol: pulumi.Input<string | enums.Layer4Protocol>;
    /**
     * List of the port Group Names that need to be matched.
     */
    portGroupNames?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Port type that needs to be matched.
     */
    portType?: pulumi.Input<string | enums.PortType | undefined>;
    /**
     * List of the Ports that need to be matched.
     */
    ports?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * IP Community Properties.
 */
export interface ActionIpCommunityPropertiesArgs {
    /**
     * List of IP Community IDs.
     */
    add?: pulumi.Input<IpCommunityIdListArgs | undefined>;
    /**
     * List of IP Community IDs.
     */
    delete?: pulumi.Input<IpCommunityIdListArgs | undefined>;
    /**
     * List of IP Community IDs.
     */
    set?: pulumi.Input<IpCommunityIdListArgs | undefined>;
}

/**
 * IP Extended Community Properties.
 */
export interface ActionIpExtendedCommunityPropertiesArgs {
    /**
     * List of IP Extended Community IDs.
     */
    add?: pulumi.Input<IpExtendedCommunityIdListArgs | undefined>;
    /**
     * List of IP Extended Community IDs.
     */
    delete?: pulumi.Input<IpExtendedCommunityIdListArgs | undefined>;
    /**
     * List of IP Extended Community IDs.
     */
    set?: pulumi.Input<IpExtendedCommunityIdListArgs | undefined>;
}

/**
 * aggregateIpv4Route model.
 */
export interface AggregateRouteArgs {
    /**
     * IPv4 Prefix of the aggregate Ipv4Route.
     */
    prefix: pulumi.Input<string>;
}

/**
 * List of IPv4 and IPv6 aggregate routes.
 */
export interface AggregateRouteConfigurationArgs {
    /**
     * List of IPv4 Route prefixes.
     */
    ipv4Routes?: pulumi.Input<pulumi.Input<AggregateRouteArgs>[] | undefined>;
    /**
     * List of Ipv6Routes prefixes.
     */
    ipv6Routes?: pulumi.Input<pulumi.Input<AggregateRouteArgs>[] | undefined>;
}

/**
 * BFD configuration properties
 */
export interface BfdConfigurationArgs {
    /**
     * Interval in milliseconds. Example: 300.
     */
    intervalInMilliSeconds?: pulumi.Input<number | undefined>;
    /**
     * Multiplier for the Bfd Configuration. Example: 5.
     */
    multiplier?: pulumi.Input<number | undefined>;
}
/**
 * bfdConfigurationArgsProvideDefaults sets the appropriate defaults for BfdConfigurationArgs
 */
export function bfdConfigurationArgsProvideDefaults(val: BfdConfigurationArgs): BfdConfigurationArgs {
    return {
        ...val,
        intervalInMilliSeconds: (val.intervalInMilliSeconds) ?? 300,
        multiplier: (val.multiplier) ?? 5,
    };
}

/**
 * BGP Monitoring Protocol (BMP) Configuration properties.
 */
export interface BmpConfigurationPropertiesArgs {
    /**
     * Export Policy for the BMP Configuration.
     */
    exportPolicy?: pulumi.Input<string | enums.BmpExportPolicy | undefined>;
    /**
     * Monitored Address Families for the BMP Configuration.
     */
    monitoredAddressFamilies?: pulumi.Input<pulumi.Input<string | enums.BmpMonitoredAddressFamily>[] | undefined>;
    /**
     * The List of Network ID's that need to be monitored.
     */
    monitoredNetworks?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Scope resource ARM Identifier.
     */
    scopeResourceId?: pulumi.Input<string | undefined>;
    /**
     * Enabling a station. Either True/False.
     */
    stationConfigurationState?: pulumi.Input<string | enums.StationConfigurationState | undefined>;
    /**
     * Station Connection Mode.
     */
    stationConnectionMode?: pulumi.Input<string | enums.StationConnectionMode | undefined>;
    /**
     * Station Connection Properties.
     */
    stationConnectionProperties?: pulumi.Input<StationConnectionPropertiesArgs | undefined>;
    /**
     * IP Address of the station.
     */
    stationIp?: pulumi.Input<string | undefined>;
    /**
     * Name of the station.
     */
    stationName?: pulumi.Input<string | undefined>;
    /**
     * Network of the station
     */
    stationNetwork?: pulumi.Input<string | undefined>;
    /**
     * Port of the station. Default value is 5000.
     */
    stationPort?: pulumi.Input<number | undefined>;
}
/**
 * bmpConfigurationPropertiesArgsProvideDefaults sets the appropriate defaults for BmpConfigurationPropertiesArgs
 */
export function bmpConfigurationPropertiesArgsProvideDefaults(val: BmpConfigurationPropertiesArgs): BmpConfigurationPropertiesArgs {
    return {
        ...val,
        exportPolicy: (val.exportPolicy) ?? "All",
        stationConnectionProperties: pulumi.output(val.stationConnectionProperties).apply(v => v === undefined ? undefined : stationConnectionPropertiesArgsProvideDefaults(v)),
        stationPort: (val.stationPort) ?? 5000,
    };
}

/**
 * Dynamic match configuration object.
 */
export interface CommonDynamicMatchConfigurationArgs {
    /**
     * List of IP Groups.
     */
    ipGroups?: pulumi.Input<pulumi.Input<IpGroupPropertiesArgs>[] | undefined>;
    /**
     * List of the port groups.
     */
    portGroups?: pulumi.Input<pulumi.Input<PortGroupPropertiesArgs>[] | undefined>;
    /**
     * List of vlan groups.
     */
    vlanGroups?: pulumi.Input<pulumi.Input<VlanGroupPropertiesArgs>[] | undefined>;
}

/**
 * Connected Subnet properties.
 */
export interface ConnectedSubnetArgs {
    /**
     * Switch configuration description.
     */
    annotation?: pulumi.Input<string | undefined>;
    /**
     * Prefix of the Connected Subnet.
     */
    prefix: pulumi.Input<string>;
}

/**
 * Connected Subnet Route Policy properties.
 */
export interface ConnectedSubnetRoutePolicyArgs {
    /**
     * Array of ARM Resource ID of the RoutePolicies.
     */
    exportRoutePolicy?: pulumi.Input<L3ExportRoutePolicyArgs | undefined>;
    /**
     * ARM Resource ID of the Route Policy. This is used for the backward compatibility.
     */
    exportRoutePolicyId?: pulumi.Input<string | undefined>;
}

/**
 * Export Route Policy either IPv4 or IPv6.
 */
export interface ExportRoutePolicyArgs {
    /**
     * ARM resource ID of RoutePolicy.
     */
    exportIpv4RoutePolicyId?: pulumi.Input<string | undefined>;
    /**
     * ARM resource ID of RoutePolicy.
     */
    exportIpv6RoutePolicyId?: pulumi.Input<string | undefined>;
}

/**
 * Export Route Policy Configuration.
 */
export interface ExportRoutePolicyInformationArgs {
    /**
     * Export IPv4 Route Policy Id.
     */
    exportIpv4RoutePolicyId?: pulumi.Input<string | undefined>;
    /**
     * Export IPv6 Route Policy Id.
     */
    exportIpv6RoutePolicyId?: pulumi.Input<string | undefined>;
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
     * BFD configuration properties
     */
    bfdConfiguration?: pulumi.Input<BfdConfigurationArgs | undefined>;
    /**
     * Egress Acl. ARM resource ID of Access Control Lists.
     */
    egressAclId?: pulumi.Input<string | undefined>;
    /**
     * Ingress Acl. ARM resource ID of Access Control Lists.
     */
    ingressAclId?: pulumi.Input<string | undefined>;
    /**
     * MTU to use for option A peering.
     */
    mtu?: pulumi.Input<number | undefined>;
    /**
     * Peer ASN number.Example : 28
     */
    peerASN: pulumi.Input<number>;
    /**
     * IPv4 Address Prefix.
     */
    primaryIpv4Prefix?: pulumi.Input<string | undefined>;
    /**
     * IPv6 Address Prefix.
     */
    primaryIpv6Prefix?: pulumi.Input<string | undefined>;
    /**
     * Secondary IPv4 Address Prefix.
     */
    secondaryIpv4Prefix?: pulumi.Input<string | undefined>;
    /**
     * Secondary IPv6 Address Prefix.
     */
    secondaryIpv6Prefix?: pulumi.Input<string | undefined>;
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
        bfdConfiguration: pulumi.output(val.bfdConfiguration).apply(v => v === undefined ? undefined : bfdConfigurationArgsProvideDefaults(v)),
        mtu: (val.mtu) ?? 1500,
    };
}

/**
 * Option B configuration to be used for Management VPN.
 */
export interface FabricOptionBPropertiesArgs {
    /**
     * Route Targets to be applied for outgoing routes from CE. This is for backward compatibility.
     */
    exportRouteTargets?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Route Targets to be applied for incoming routes into CE. This is for backward compatibility.
     */
    importRouteTargets?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Route Targets to be applied.
     */
    routeTargets?: pulumi.Input<RouteTargetInformationArgs | undefined>;
}

/**
 * Import Route Policy either IPv4 or IPv6.
 */
export interface ImportRoutePolicyArgs {
    /**
     * ARM resource ID of RoutePolicy.
     */
    importIpv4RoutePolicyId?: pulumi.Input<string | undefined>;
    /**
     * ARM resource ID of RoutePolicy.
     */
    importIpv6RoutePolicyId?: pulumi.Input<string | undefined>;
}

/**
 * Import Route Policy Configuration.
 */
export interface ImportRoutePolicyInformationArgs {
    /**
     * Import IPv4 Route Policy Id.
     */
    importIpv4RoutePolicyId?: pulumi.Input<string | undefined>;
    /**
     * Import IPv6 Route Policy Id.
     */
    importIpv6RoutePolicyId?: pulumi.Input<string | undefined>;
}

/**
 * BGP configuration properties.
 */
export interface InternalNetworkPropertiesBgpConfigurationArgs {
    /**
     * Allows for routes to be received and processed even if the router detects its own ASN in the AS-Path. 0 is disable, Possible values are 1-10, default is 2.
     */
    allowAS?: pulumi.Input<number | undefined>;
    /**
     * Enable Or Disable state.
     */
    allowASOverride?: pulumi.Input<string | enums.AllowASOverride | undefined>;
    /**
     * Switch configuration description.
     */
    annotation?: pulumi.Input<string | undefined>;
    /**
     * BFD configuration properties
     */
    bfdConfiguration?: pulumi.Input<BfdConfigurationArgs | undefined>;
    /**
     * Originate a defaultRoute. Ex: "True" | "False".
     */
    defaultRouteOriginate?: pulumi.Input<string | enums.BooleanEnumProperty | undefined>;
    /**
     * List of BGP IPv4 Listen Range prefixes.
     */
    ipv4ListenRangePrefixes?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * List with stringified IPv4 Neighbor Addresses.
     */
    ipv4NeighborAddress?: pulumi.Input<pulumi.Input<NeighborAddressArgs>[] | undefined>;
    /**
     * List of BGP IPv6 Listen Ranges prefixes.
     */
    ipv6ListenRangePrefixes?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * List with stringified IPv6 Neighbor Address.
     */
    ipv6NeighborAddress?: pulumi.Input<pulumi.Input<NeighborAddressArgs>[] | undefined>;
    /**
     * Peer ASN. Example: 65047.
     */
    peerASN: pulumi.Input<number>;
}
/**
 * internalNetworkPropertiesBgpConfigurationArgsProvideDefaults sets the appropriate defaults for InternalNetworkPropertiesBgpConfigurationArgs
 */
export function internalNetworkPropertiesBgpConfigurationArgsProvideDefaults(val: InternalNetworkPropertiesBgpConfigurationArgs): InternalNetworkPropertiesBgpConfigurationArgs {
    return {
        ...val,
        allowAS: (val.allowAS) ?? 2,
        bfdConfiguration: pulumi.output(val.bfdConfiguration).apply(v => v === undefined ? undefined : bfdConfigurationArgsProvideDefaults(v)),
    };
}

/**
 * Static Route Configuration properties.
 */
export interface InternalNetworkPropertiesStaticRouteConfigurationArgs {
    /**
     * BFD configuration properties
     */
    bfdConfiguration?: pulumi.Input<BfdConfigurationArgs | undefined>;
    /**
     * Extension. Example: NoExtension | NPB.
     */
    extension?: pulumi.Input<string | enums.Extension | undefined>;
    /**
     * List of IPv4 Routes.
     */
    ipv4Routes?: pulumi.Input<pulumi.Input<StaticRoutePropertiesArgs>[] | undefined>;
    /**
     * List of IPv6 Routes.
     */
    ipv6Routes?: pulumi.Input<pulumi.Input<StaticRoutePropertiesArgs>[] | undefined>;
}
/**
 * internalNetworkPropertiesStaticRouteConfigurationArgsProvideDefaults sets the appropriate defaults for InternalNetworkPropertiesStaticRouteConfigurationArgs
 */
export function internalNetworkPropertiesStaticRouteConfigurationArgsProvideDefaults(val: InternalNetworkPropertiesStaticRouteConfigurationArgs): InternalNetworkPropertiesStaticRouteConfigurationArgs {
    return {
        ...val,
        bfdConfiguration: pulumi.output(val.bfdConfiguration).apply(v => v === undefined ? undefined : bfdConfigurationArgsProvideDefaults(v)),
        extension: (val.extension) ?? "NoExtension",
    };
}

/**
 * IP Community ID list properties.
 */
export interface IpCommunityIdListArgs {
    /**
     * List of IP Community resource IDs.
     */
    ipCommunityIds?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * IP Community patchable properties.
 */
export interface IpCommunityRuleArgs {
    /**
     * Action to be taken on the configuration. Example: Permit | Deny.
     */
    action: pulumi.Input<string | enums.CommunityActionTypes>;
    /**
     * List the community members of IP Community.
     */
    communityMembers: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Sequence to insert to/delete from existing route. Prefix lists are evaluated starting with the lowest sequence number and continue down the list until a match is made. Once a match is made, the permit or deny statement is applied to that network and the rest of the list is ignored.
     */
    sequenceNumber: pulumi.Input<number>;
    /**
     * Supported well known Community List.
     */
    wellKnownCommunities?: pulumi.Input<pulumi.Input<string | enums.WellKnownCommunities>[] | undefined>;
}

/**
 * IP Extended Community Id list properties.
 */
export interface IpExtendedCommunityIdListArgs {
    /**
     * List of IP Extended Community resource IDs.
     */
    ipExtendedCommunityIds?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * List of IP Extended Community Rules.
 */
export interface IpExtendedCommunityRuleArgs {
    /**
     * Action to be taken on the configuration. Example: Permit | Deny.
     */
    action: pulumi.Input<string | enums.CommunityActionTypes>;
    /**
     * Route Target List.The expected formats are ASN(plain):NN >> example 4294967294:50, ASN.ASN:NN >> example 65533.65333:40, IP-address:NN >> example 10.10.10.10:65535. The possible values of ASN,NN are in range of 0-65535, ASN(plain) is in range of 0-4294967295.
     */
    routeTargets: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Sequence to insert to/delete from existing route. Prefix lists are evaluated starting with the lowest sequence number and continue down the list until a match is made. Once a match is made, the permit or deny statement is applied to that network and the rest of the list is ignored.
     */
    sequenceNumber: pulumi.Input<number>;
}

/**
 * IP Group properties.
 */
export interface IpGroupPropertiesArgs {
    /**
     * IP Address type.
     */
    ipAddressType?: pulumi.Input<string | enums.IPAddressType | undefined>;
    /**
     * List of IP Prefixes.
     */
    ipPrefixes?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * IP Group name.
     */
    name?: pulumi.Input<string | undefined>;
}

/**
 * Defines the condition that can be filtered using the selected IPs.
 */
export interface IpMatchConditionArgs {
    /**
     * The List of IP Group Names that need to be matched.
     */
    ipGroupNames?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * The list of IP Prefixes that need to be matched.
     */
    ipPrefixValues?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * IP Prefix Type that needs to be matched.
     */
    prefixType?: pulumi.Input<string | enums.PrefixType | undefined>;
    /**
     * IP Address type that needs to be matched.
     */
    type?: pulumi.Input<string | enums.SourceDestinationType | undefined>;
}

/**
 * IP Prefix Rule properties.
 */
export interface IpPrefixRuleArgs {
    /**
     * Action to be taken on the configuration. Example: Permit | Deny.
     */
    action: pulumi.Input<string | enums.CommunityActionTypes>;
    /**
     * Specify prefix-list bounds.
     */
    condition?: pulumi.Input<string | enums.Condition | undefined>;
    /**
     * Network Prefix specifying IPv4/IPv6 packets to be permitted or denied. Example: 1.1.1.0/24 | 3FFE:FFFF:0:CD30::/126
     */
    networkPrefix: pulumi.Input<string>;
    /**
     * Sequence to insert to/delete from existing route. Prefix lists are evaluated starting with the lowest sequence number and continue down the list until a match is made. Once a match is made, the permit or deny statement is applied to that network and the rest of the list is ignored.
     */
    sequenceNumber: pulumi.Input<number>;
    /**
     * SubnetMaskLength gives the minimum NetworkPrefix length to be matched. Possible values for IPv4 are 1 - 32 . Possible values of IPv6 are 1 - 128.
     */
    subnetMaskLength?: pulumi.Input<string | undefined>;
}

/**
 * Isolation Domain Properties.
 */
export interface IsolationDomainPropertiesArgs {
    /**
     * Type of encapsulation.
     */
    encapsulation?: pulumi.Input<string | enums.Encapsulation | undefined>;
    /**
     * List of Neighbor Group IDs.
     */
    neighborGroupIds?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Array of ARM Resource ID of the RoutePolicies.
 */
export interface L3ExportRoutePolicyArgs {
    /**
     * ARM Resource ID of the RoutePolicy.
     */
    exportIpv4RoutePolicyId?: pulumi.Input<string | undefined>;
    /**
     * ARM Resource ID of the RoutePolicy.
     */
    exportIpv6RoutePolicyId?: pulumi.Input<string | undefined>;
}

/**
 * Option B configuration.
 */
export interface L3OptionBPropertiesArgs {
    /**
     * RouteTargets to be applied. This is used for the backward compatibility.
     */
    exportRouteTargets?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * RouteTargets to be applied. This is used for the backward compatibility.
     */
    importRouteTargets?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * RouteTargets to be applied.
     */
    routeTargets?: pulumi.Input<RouteTargetInformationArgs | undefined>;
}

/**
 * Common properties for Layer2 Configuration.
 */
export interface Layer2ConfigurationArgs {
    /**
     * List of network device interfaces resource IDs.
     */
    interfaces?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * MTU of the packets between PE & CE.
     */
    mtu?: pulumi.Input<number | undefined>;
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
 * Managed Resource Group configuration properties.
 */
export interface ManagedResourceGroupConfigurationArgs {
    /**
     * Managed resource group location.
     */
    location?: pulumi.Input<string | undefined>;
    /**
     * The NFC service will be hosted in a Managed resource group.
     */
    name?: pulumi.Input<string | undefined>;
}

/**
 * Managed service identity (system assigned and/or user assigned identities)
 */
export interface ManagedServiceIdentityArgs {
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: pulumi.Input<string | enums.ManagedServiceIdentityType>;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Configuration to be used to setup the management network.
 */
export interface ManagementNetworkConfigurationPropertiesArgs {
    /**
     * VPN Configuration properties.
     */
    infrastructureVpnConfiguration: pulumi.Input<VpnConfigurationPropertiesArgs>;
    /**
     * VPN Configuration properties.
     */
    workloadVpnConfiguration: pulumi.Input<VpnConfigurationPropertiesArgs>;
}
/**
 * managementNetworkConfigurationPropertiesArgsProvideDefaults sets the appropriate defaults for ManagementNetworkConfigurationPropertiesArgs
 */
export function managementNetworkConfigurationPropertiesArgsProvideDefaults(val: ManagementNetworkConfigurationPropertiesArgs): ManagementNetworkConfigurationPropertiesArgs {
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
    address?: pulumi.Input<string | undefined>;
}

/**
 * An array of destination IPv4 Addresses or IPv6 Addresses.
 */
export interface NeighborGroupDestinationArgs {
    /**
     * Array of IPv4 Addresses.
     */
    ipv4Addresses?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Array of IPv6 Addresses.
     */
    ipv6Addresses?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Destination.
 */
export interface NetworkTapPropertiesDestinationsArgs {
    /**
     * The destination Id. ARM Resource ID of either NNI or Internal Networks.
     */
    destinationId: pulumi.Input<string>;
    /**
     * ARM Resource ID of destination Tap Rule that contains match configurations.
     */
    destinationTapRuleId?: pulumi.Input<string | undefined>;
    /**
     * Type of destination. Input can be IsolationDomain or Direct.
     */
    destinationType: pulumi.Input<string | enums.DestinationType>;
    /**
     * Isolation Domain Properties.
     */
    isolationDomainProperties?: pulumi.Input<IsolationDomainPropertiesArgs | undefined>;
    /**
     * Destination name.
     */
    name: pulumi.Input<string>;
}

/**
 * Action that need to performed.
 */
export interface NetworkTapRuleActionArgs {
    /**
     * Destination Id. The ARM resource Id may be either Network To Network Interconnect or NeighborGroup.
     */
    destinationId?: pulumi.Input<string | undefined>;
    /**
     * The parameter to enable or disable the timestamp.
     */
    isTimestampEnabled?: pulumi.Input<string | enums.BooleanEnumProperty | undefined>;
    /**
     * The name of the match configuration. This is used when Goto type is provided. If Goto type is selected and no match configuration name is provided. It goes to next configuration.
     */
    matchConfigurationName?: pulumi.Input<string | undefined>;
    /**
     * Truncate. 0 indicates do not truncate.
     */
    truncate?: pulumi.Input<string | undefined>;
    /**
     * Type of actions that can be performed.
     */
    type?: pulumi.Input<string | enums.TapRuleActionType | undefined>;
}

/**
 * Defines the match condition that is supported to filter the traffic.
 */
export interface NetworkTapRuleMatchConditionArgs {
    /**
     * Encapsulation Type that needs to be matched.
     */
    encapsulationType?: pulumi.Input<string | enums.EncapsulationType | undefined>;
    /**
     * IP condition that needs to be matched.
     */
    ipCondition?: pulumi.Input<IpMatchConditionArgs | undefined>;
    /**
     * Defines the port condition that needs to be matched.
     */
    portCondition?: pulumi.Input<PortConditionArgs | undefined>;
    /**
     * List of the protocols that need to be matched.
     */
    protocolTypes?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Vlan match condition that needs to be matched.
     */
    vlanMatchCondition?: pulumi.Input<VlanMatchConditionArgs | undefined>;
}
/**
 * networkTapRuleMatchConditionArgsProvideDefaults sets the appropriate defaults for NetworkTapRuleMatchConditionArgs
 */
export function networkTapRuleMatchConditionArgsProvideDefaults(val: NetworkTapRuleMatchConditionArgs): NetworkTapRuleMatchConditionArgs {
    return {
        ...val,
        encapsulationType: (val.encapsulationType) ?? "None",
    };
}

/**
 * Defines the match configuration that are supported to filter the traffic.
 */
export interface NetworkTapRuleMatchConfigurationArgs {
    /**
     * List of actions that need to be performed for the matched conditions.
     */
    actions?: pulumi.Input<pulumi.Input<NetworkTapRuleActionArgs>[] | undefined>;
    /**
     * Type of IP Address. IPv4 or IPv6
     */
    ipAddressType?: pulumi.Input<string | enums.IPAddressType | undefined>;
    /**
     * List of the match conditions.
     */
    matchConditions?: pulumi.Input<pulumi.Input<NetworkTapRuleMatchConditionArgs>[] | undefined>;
    /**
     * The name of the match configuration.
     */
    matchConfigurationName?: pulumi.Input<string | undefined>;
    /**
     * Sequence Number of the match configuration..
     */
    sequenceNumber?: pulumi.Input<number | undefined>;
}

/**
 * Common properties for Layer3Configuration.
 */
export interface NetworkToNetworkInterconnectPropertiesOptionBLayer3ConfigurationArgs {
    /**
     * ASN of PE devices for CE/PE connectivity.Example : 28
     */
    peerASN: pulumi.Input<number>;
    /**
     * IPv4 Address Prefix.
     */
    primaryIpv4Prefix?: pulumi.Input<string | undefined>;
    /**
     * IPv6 Address Prefix.
     */
    primaryIpv6Prefix?: pulumi.Input<string | undefined>;
    /**
     * Secondary IPv4 Address Prefix.
     */
    secondaryIpv4Prefix?: pulumi.Input<string | undefined>;
    /**
     * Secondary IPv6 Address Prefix.
     */
    secondaryIpv6Prefix?: pulumi.Input<string | undefined>;
    /**
     * VLAN for CE/PE Layer 3 connectivity.Example : 501
     */
    vlanId: pulumi.Input<number>;
}

/**
 * NPB Static Route Configuration properties.
 */
export interface NpbStaticRouteConfigurationArgs {
    /**
     * BFD Configuration properties.
     */
    bfdConfiguration?: pulumi.Input<BfdConfigurationArgs | undefined>;
    /**
     * List of IPv4 Routes.
     */
    ipv4Routes?: pulumi.Input<pulumi.Input<StaticRoutePropertiesArgs>[] | undefined>;
    /**
     * List of IPv6 Routes.
     */
    ipv6Routes?: pulumi.Input<pulumi.Input<StaticRoutePropertiesArgs>[] | undefined>;
}
/**
 * npbStaticRouteConfigurationArgsProvideDefaults sets the appropriate defaults for NpbStaticRouteConfigurationArgs
 */
export function npbStaticRouteConfigurationArgsProvideDefaults(val: NpbStaticRouteConfigurationArgs): NpbStaticRouteConfigurationArgs {
    return {
        ...val,
        bfdConfiguration: pulumi.output(val.bfdConfiguration).apply(v => v === undefined ? undefined : bfdConfigurationArgsProvideDefaults(v)),
    };
}

/**
 * Port condition that needs to be matched.
 */
export interface PortConditionArgs {
    /**
     * Layer4 protocol type that needs to be matched.
     */
    layer4Protocol: pulumi.Input<string | enums.Layer4Protocol>;
    /**
     * List of the port Group Names that need to be matched.
     */
    portGroupNames?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Port type that needs to be matched.
     */
    portType?: pulumi.Input<string | enums.PortType | undefined>;
    /**
     * List of the Ports that need to be matched.
     */
    ports?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Port Group properties.
 */
export interface PortGroupPropertiesArgs {
    /**
     * The name of the port group.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * List of the ports that need to be matched.
     */
    ports?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Route Policy Statement properties.
 */
export interface RoutePolicyStatementPropertiesArgs {
    /**
     * Route policy action properties.
     */
    action: pulumi.Input<StatementActionPropertiesArgs>;
    /**
     * Switch configuration description.
     */
    annotation?: pulumi.Input<string | undefined>;
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
 * routePolicyStatementPropertiesArgsProvideDefaults sets the appropriate defaults for RoutePolicyStatementPropertiesArgs
 */
export function routePolicyStatementPropertiesArgsProvideDefaults(val: RoutePolicyStatementPropertiesArgs): RoutePolicyStatementPropertiesArgs {
    return {
        ...val,
        condition: pulumi.output(val.condition).apply(statementConditionPropertiesArgsProvideDefaults),
    };
}

/**
 * Route Target Configuration.
 */
export interface RouteTargetInformationArgs {
    /**
     * Route Targets to be applied for outgoing routes into CE.
     */
    exportIpv4RouteTargets?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Route Targets to be applied for outgoing routes from CE.
     */
    exportIpv6RouteTargets?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Route Targets to be applied for incoming routes into CE.
     */
    importIpv4RouteTargets?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Route Targets to be applied for incoming routes from CE.
     */
    importIpv6RouteTargets?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Rules for the InternetGateways
 */
export interface RulePropertiesArgs {
    /**
     * Specify action.
     */
    action: pulumi.Input<string | enums.Action>;
    /**
     * List of Addresses to be allowed or denied.
     */
    addressList: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Route policy action properties.
 */
export interface StatementActionPropertiesArgs {
    /**
     * Action type. Example: Permit | Deny | Continue.
     */
    actionType: pulumi.Input<string | enums.RoutePolicyActionType>;
    /**
     * IP Community Properties.
     */
    ipCommunityProperties?: pulumi.Input<ActionIpCommunityPropertiesArgs | undefined>;
    /**
     * IP Extended Community Properties.
     */
    ipExtendedCommunityProperties?: pulumi.Input<ActionIpExtendedCommunityPropertiesArgs | undefined>;
    /**
     * Local Preference of the route policy.
     */
    localPreference?: pulumi.Input<number | undefined>;
}

/**
 * Route policy statement condition properties.
 */
export interface StatementConditionPropertiesArgs {
    /**
     * List of IP Community resource IDs.
     */
    ipCommunityIds?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * List of IP Extended Community resource IDs.
     */
    ipExtendedCommunityIds?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * Arm Resource Id of IpPrefix.
     */
    ipPrefixId?: pulumi.Input<string | undefined>;
    /**
     * Type of the condition used.
     */
    type?: pulumi.Input<string | enums.RoutePolicyConditionType | undefined>;
}
/**
 * statementConditionPropertiesArgsProvideDefaults sets the appropriate defaults for StatementConditionPropertiesArgs
 */
export function statementConditionPropertiesArgsProvideDefaults(val: StatementConditionPropertiesArgs): StatementConditionPropertiesArgs {
    return {
        ...val,
        type: (val.type) ?? "Or",
    };
}

/**
 * Route Properties.
 */
export interface StaticRoutePropertiesArgs {
    /**
     * List of next hop addresses.
     */
    nextHop: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Prefix of the route.
     */
    prefix: pulumi.Input<string>;
}

/**
 * Station Connection Properties.
 */
export interface StationConnectionPropertiesArgs {
    /**
     * Connection keepalive idle time in seconds
     */
    keepaliveIdleTime?: pulumi.Input<number | undefined>;
    /**
     * Probe count, default value is 10
     */
    probeCount?: pulumi.Input<number | undefined>;
    /**
     * Probe interval in seconds, default value is 60
     */
    probeInterval?: pulumi.Input<number | undefined>;
}
/**
 * stationConnectionPropertiesArgsProvideDefaults sets the appropriate defaults for StationConnectionPropertiesArgs
 */
export function stationConnectionPropertiesArgsProvideDefaults(val: StationConnectionPropertiesArgs): StationConnectionPropertiesArgs {
    return {
        ...val,
        keepaliveIdleTime: (val.keepaliveIdleTime) ?? 180,
        probeCount: (val.probeCount) ?? 10,
        probeInterval: (val.probeInterval) ?? 60,
    };
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
     * IPv4 Address Prefix.
     */
    primaryIpv4Prefix: pulumi.Input<string>;
    /**
     * IPv6 Address Prefix.
     */
    primaryIpv6Prefix?: pulumi.Input<string | undefined>;
    /**
     * Secondary IPv4 Address Prefix.
     */
    secondaryIpv4Prefix: pulumi.Input<string>;
    /**
     * Secondary IPv6 Address Prefix.
     */
    secondaryIpv6Prefix?: pulumi.Input<string | undefined>;
    /**
     * Serial Number of Terminal server.
     */
    serialNumber?: pulumi.Input<string | undefined>;
    /**
     * Username for the terminal server connection.
     */
    username: pulumi.Input<string>;
}

/**
 * Vlan group properties.
 */
export interface VlanGroupPropertiesArgs {
    /**
     * Vlan group name.
     */
    name?: pulumi.Input<string | undefined>;
    /**
     * List of vlans.
     */
    vlans?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * The vlan match conditions that need to be matched.
 */
export interface VlanMatchConditionArgs {
    /**
     * List of inner vlans that need to be matched.
     */
    innerVlans?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * List of vlan group names that need to be matched.
     */
    vlanGroupNames?: pulumi.Input<pulumi.Input<string>[] | undefined>;
    /**
     * List of vlans that need to be matched.
     */
    vlans?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * Network and credential configuration currently applied on terminal server.
 */
export interface VpnConfigurationPropertiesArgs {
    /**
     * ARM Resource ID of the Network To Network Interconnect.
     */
    networkToNetworkInterconnectId?: pulumi.Input<string | undefined>;
    /**
     * option A properties
     */
    optionAProperties?: pulumi.Input<VpnConfigurationPropertiesOptionAPropertiesArgs | undefined>;
    /**
     * option B properties
     */
    optionBProperties?: pulumi.Input<FabricOptionBPropertiesArgs | undefined>;
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
        optionAProperties: pulumi.output(val.optionAProperties).apply(v => v === undefined ? undefined : vpnConfigurationPropertiesOptionAPropertiesArgsProvideDefaults(v)),
    };
}

/**
 * option A properties
 */
export interface VpnConfigurationPropertiesOptionAPropertiesArgs {
    /**
     * BFD Configuration properties.
     */
    bfdConfiguration?: pulumi.Input<BfdConfigurationArgs | undefined>;
    /**
     * MTU to use for option A peering.
     */
    mtu?: pulumi.Input<number | undefined>;
    /**
     * Peer ASN number.Example : 28
     */
    peerASN: pulumi.Input<number>;
    /**
     * IPv4 Address Prefix.
     */
    primaryIpv4Prefix?: pulumi.Input<string | undefined>;
    /**
     * IPv6 Address Prefix.
     */
    primaryIpv6Prefix?: pulumi.Input<string | undefined>;
    /**
     * Secondary IPv4 Address Prefix.
     */
    secondaryIpv4Prefix?: pulumi.Input<string | undefined>;
    /**
     * Secondary IPv6 Address Prefix.
     */
    secondaryIpv6Prefix?: pulumi.Input<string | undefined>;
    /**
     * Vlan Id.Example : 501
     */
    vlanId: pulumi.Input<number>;
}
/**
 * vpnConfigurationPropertiesOptionAPropertiesArgsProvideDefaults sets the appropriate defaults for VpnConfigurationPropertiesOptionAPropertiesArgs
 */
export function vpnConfigurationPropertiesOptionAPropertiesArgsProvideDefaults(val: VpnConfigurationPropertiesOptionAPropertiesArgs): VpnConfigurationPropertiesOptionAPropertiesArgs {
    return {
        ...val,
        bfdConfiguration: pulumi.output(val.bfdConfiguration).apply(v => v === undefined ? undefined : bfdConfigurationArgsProvideDefaults(v)),
        mtu: (val.mtu) ?? 1500,
    };
}
