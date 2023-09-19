import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Backend address of an application gateway.
     */
    export interface ApplicationGatewayBackendAddressArgs {
        /**
         * Fully qualified domain name (FQDN).
         */
        fqdn?: pulumi.Input<string>;
        /**
         * IP address
         */
        ipAddress?: pulumi.Input<string>;
    }

    /**
     * Backend Address Pool of an application gateway.
     */
    export interface ApplicationGatewayBackendAddressPoolArgs {
        /**
         * Backend addresses
         */
        backendAddresses?: pulumi.Input<pulumi.Input<ApplicationGatewayBackendAddressArgs>[]>;
        /**
         * Collection of references to IPs defined in network interfaces.
         */
        backendIPConfigurations?: pulumi.Input<pulumi.Input<NetworkInterfaceIPConfigurationArgs>[]>;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Name of the backend address pool that is unique within an Application Gateway.
         */
        name?: pulumi.Input<string>;
        /**
         * Provisioning state of the backend address pool resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: pulumi.Input<string>;
        /**
         * Type of the resource.
         */
        type?: pulumi.Input<string>;
    }

    /**
     * An application security group in a resource group.
     */
    export interface ApplicationSecurityGroupArgs {
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Resource location.
         */
        location?: pulumi.Input<string>;
        /**
         * Resource tags.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    /**
     * Pool of backend IP addresses.
     */
    export interface BackendAddressPoolArgs {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * Get provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: pulumi.Input<string>;
    }

    /**
     * Contains the DDoS protection settings of the public IP.
     */
    export interface DdosSettingsArgs {
        /**
         * The DDoS custom policy associated with the public IP.
         */
        ddosCustomPolicy?: pulumi.Input<SubResourceArgs>;
        /**
         * The DDoS protection policy customizability of the public IP. Only standard coverage will have the ability to be customized.
         */
        protectionCoverage?: pulumi.Input<string | enums.DdosSettingsProtectionCoverage>;
    }

    /**
     * Details the service to which the subnet is delegated.
     */
    export interface DelegationArgs {
        /**
         * Describes the actions permitted to the service upon delegation
         */
        actions?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The name of the resource that is unique within a subnet. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * The name of the service to whom the subnet should be delegated (e.g. Microsoft.Sql/servers)
         */
        serviceName?: pulumi.Input<string>;
    }

    /**
     * Identifies the service being brought into the virtual network.
     */
    export interface EndpointServiceArgs {
        /**
         * A unique identifier of the service being referenced by the interface endpoint.
         */
        id?: pulumi.Input<string>;
    }

    /**
     * Express Route Circuit Connection in an ExpressRouteCircuitPeering resource.
     */
    export interface ExpressRouteCircuitConnectionArgs {
        /**
         * /29 IP address space to carve out Customer addresses for tunnels.
         */
        addressPrefix?: pulumi.Input<string>;
        /**
         * The authorization key.
         */
        authorizationKey?: pulumi.Input<string>;
        /**
         * Reference to Express Route Circuit Private Peering Resource of the circuit initiating connection.
         */
        expressRouteCircuitPeering?: pulumi.Input<SubResourceArgs>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * Reference to Express Route Circuit Private Peering Resource of the peered circuit.
         */
        peerExpressRouteCircuitPeering?: pulumi.Input<SubResourceArgs>;
    }

    /**
     * Peering in an ExpressRouteCircuit resource.
     */
    export interface ExpressRouteCircuitPeeringArgs {
        /**
         * The Azure ASN.
         */
        azureASN?: pulumi.Input<number>;
        /**
         * The list of circuit connections associated with Azure Private Peering for this circuit.
         */
        connections?: pulumi.Input<pulumi.Input<ExpressRouteCircuitConnectionArgs>[]>;
        /**
         * The GatewayManager Etag.
         */
        gatewayManagerEtag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The IPv6 peering configuration.
         */
        ipv6PeeringConfig?: pulumi.Input<Ipv6ExpressRouteCircuitPeeringConfigArgs>;
        /**
         * Gets whether the provider or the customer last modified the peering.
         */
        lastModifiedBy?: pulumi.Input<string>;
        /**
         * The Microsoft peering configuration.
         */
        microsoftPeeringConfig?: pulumi.Input<ExpressRouteCircuitPeeringConfigArgs>;
        /**
         * Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * The peer ASN.
         */
        peerASN?: pulumi.Input<number>;
        /**
         * The peering type.
         */
        peeringType?: pulumi.Input<string | enums.ExpressRoutePeeringType>;
        /**
         * The primary port.
         */
        primaryAzurePort?: pulumi.Input<string>;
        /**
         * The primary address prefix.
         */
        primaryPeerAddressPrefix?: pulumi.Input<string>;
        /**
         * Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: pulumi.Input<string>;
        /**
         * The reference of the RouteFilter resource.
         */
        routeFilter?: pulumi.Input<RouteFilterArgs>;
        /**
         * The secondary port.
         */
        secondaryAzurePort?: pulumi.Input<string>;
        /**
         * The secondary address prefix.
         */
        secondaryPeerAddressPrefix?: pulumi.Input<string>;
        /**
         * The shared key.
         */
        sharedKey?: pulumi.Input<string>;
        /**
         * The peering state.
         */
        state?: pulumi.Input<string | enums.ExpressRoutePeeringState>;
        /**
         * Gets peering stats.
         */
        stats?: pulumi.Input<ExpressRouteCircuitStatsArgs>;
        /**
         * The VLAN ID.
         */
        vlanId?: pulumi.Input<number>;
    }

    /**
     * Specifies the peering configuration.
     */
    export interface ExpressRouteCircuitPeeringConfigArgs {
        /**
         * The communities of bgp peering. Specified for microsoft peering
         */
        advertisedCommunities?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The reference of AdvertisedPublicPrefixes.
         */
        advertisedPublicPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * AdvertisedPublicPrefixState of the Peering resource. Possible values are 'NotConfigured', 'Configuring', 'Configured', and 'ValidationNeeded'.
         */
        advertisedPublicPrefixesState?: pulumi.Input<string | enums.ExpressRouteCircuitPeeringAdvertisedPublicPrefixState>;
        /**
         * The CustomerASN of the peering.
         */
        customerASN?: pulumi.Input<number>;
        /**
         * The legacy mode of the peering.
         */
        legacyMode?: pulumi.Input<number>;
        /**
         * The RoutingRegistryName of the configuration.
         */
        routingRegistryName?: pulumi.Input<string>;
    }

    /**
     * Contains stats associated with the peering.
     */
    export interface ExpressRouteCircuitStatsArgs {
        /**
         * Gets BytesIn of the peering.
         */
        primarybytesIn?: pulumi.Input<number>;
        /**
         * Gets BytesOut of the peering.
         */
        primarybytesOut?: pulumi.Input<number>;
        /**
         * Gets BytesIn of the peering.
         */
        secondarybytesIn?: pulumi.Input<number>;
        /**
         * Gets BytesOut of the peering.
         */
        secondarybytesOut?: pulumi.Input<number>;
    }

    /**
     * Frontend IP address of the load balancer.
     */
    export interface FrontendIPConfigurationArgs {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * The private IP address of the IP configuration.
         */
        privateIPAddress?: pulumi.Input<string>;
        /**
         * The Private IP allocation method.
         */
        privateIPAllocationMethod?: pulumi.Input<string | enums.IPAllocationMethod>;
        /**
         * Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: pulumi.Input<string>;
        /**
         * The reference of the Public IP resource.
         */
        publicIPAddress?: pulumi.Input<PublicIPAddressArgs>;
        /**
         * The reference of the Public IP Prefix resource.
         */
        publicIPPrefix?: pulumi.Input<SubResourceArgs>;
        /**
         * The reference of the subnet resource.
         */
        subnet?: pulumi.Input<SubnetArgs>;
        /**
         * A list of availability zones denoting the IP allocated for the resource needs to come from.
         */
        zones?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Inbound NAT rule of the load balancer.
     */
    export interface InboundNatRuleArgs {
        /**
         * The port used for the internal endpoint. Acceptable values range from 1 to 65535.
         */
        backendPort?: pulumi.Input<number>;
        /**
         * Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
         */
        enableFloatingIP?: pulumi.Input<boolean>;
        /**
         * Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
         */
        enableTcpReset?: pulumi.Input<boolean>;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * A reference to frontend IP addresses.
         */
        frontendIPConfiguration?: pulumi.Input<SubResourceArgs>;
        /**
         * The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values range from 1 to 65534.
         */
        frontendPort?: pulumi.Input<number>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
         */
        idleTimeoutInMinutes?: pulumi.Input<number>;
        /**
         * Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * The reference to the transport protocol used by the load balancing rule.
         */
        protocol?: pulumi.Input<string | enums.TransportProtocol>;
        /**
         * Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: pulumi.Input<string>;
    }

    /**
     * Contains the IpTag associated with the object
     */
    export interface IpTagArgs {
        /**
         * Gets or sets the ipTag type: Example FirstPartyUsage.
         */
        ipTagType?: pulumi.Input<string>;
        /**
         * Gets or sets value of the IpTag associated with the public IP. Example SQL, Storage etc
         */
        tag?: pulumi.Input<string>;
    }

    /**
     * Contains IPv6 peering config.
     */
    export interface Ipv6ExpressRouteCircuitPeeringConfigArgs {
        /**
         * The Microsoft peering configuration.
         */
        microsoftPeeringConfig?: pulumi.Input<ExpressRouteCircuitPeeringConfigArgs>;
        /**
         * The primary address prefix.
         */
        primaryPeerAddressPrefix?: pulumi.Input<string>;
        /**
         * The reference of the RouteFilter resource.
         */
        routeFilter?: pulumi.Input<RouteFilterArgs>;
        /**
         * The secondary address prefix.
         */
        secondaryPeerAddressPrefix?: pulumi.Input<string>;
        /**
         * The state of peering. Possible values are: 'Disabled' and 'Enabled'
         */
        state?: pulumi.Input<string | enums.ExpressRouteCircuitPeeringState>;
    }

    /**
     * DNS settings of a network interface.
     */
    export interface NetworkInterfaceDnsSettingsArgs {
        /**
         * If the VM that uses this NIC is part of an Availability Set, then this list will have the union of all DNS servers from all NICs that are part of the Availability Set. This property is what is configured on each of those VMs.
         */
        appliedDnsServers?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * List of DNS servers IP addresses. Use 'AzureProvidedDNS' to switch to azure provided DNS resolution. 'AzureProvidedDNS' value cannot be combined with other IPs, it must be the only value in dnsServers collection.
         */
        dnsServers?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Relative DNS name for this NIC used for internal communications between VMs in the same virtual network.
         */
        internalDnsNameLabel?: pulumi.Input<string>;
        /**
         * Even if internalDnsNameLabel is not specified, a DNS entry is created for the primary NIC of the VM. This DNS name can be constructed by concatenating the VM name with the value of internalDomainNameSuffix.
         */
        internalDomainNameSuffix?: pulumi.Input<string>;
        /**
         * Fully qualified DNS name supporting internal communications between VMs in the same virtual network.
         */
        internalFqdn?: pulumi.Input<string>;
    }

    /**
     * IPConfiguration in a network interface.
     */
    export interface NetworkInterfaceIPConfigurationArgs {
        /**
         * The reference of ApplicationGatewayBackendAddressPool resource.
         */
        applicationGatewayBackendAddressPools?: pulumi.Input<pulumi.Input<ApplicationGatewayBackendAddressPoolArgs>[]>;
        /**
         * Application security groups in which the IP configuration is included.
         */
        applicationSecurityGroups?: pulumi.Input<pulumi.Input<ApplicationSecurityGroupArgs>[]>;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The reference of LoadBalancerBackendAddressPool resource.
         */
        loadBalancerBackendAddressPools?: pulumi.Input<pulumi.Input<BackendAddressPoolArgs>[]>;
        /**
         * A list of references of LoadBalancerInboundNatRules.
         */
        loadBalancerInboundNatRules?: pulumi.Input<pulumi.Input<InboundNatRuleArgs>[]>;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * Gets whether this is a primary customer address on the network interface.
         */
        primary?: pulumi.Input<boolean>;
        /**
         * Private IP address of the IP configuration.
         */
        privateIPAddress?: pulumi.Input<string>;
        /**
         * Available from Api-Version 2016-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.
         */
        privateIPAddressVersion?: pulumi.Input<string | enums.IPVersion>;
        /**
         * The private IP address allocation method.
         */
        privateIPAllocationMethod?: pulumi.Input<string | enums.IPAllocationMethod>;
        /**
         * The provisioning state of the network interface IP configuration. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: pulumi.Input<string>;
        /**
         * Public IP address bound to the IP configuration.
         */
        publicIPAddress?: pulumi.Input<PublicIPAddressArgs>;
        /**
         * Subnet bound to the IP configuration.
         */
        subnet?: pulumi.Input<SubnetArgs>;
        /**
         * The reference to Virtual Network Taps.
         */
        virtualNetworkTaps?: pulumi.Input<pulumi.Input<VirtualNetworkTapArgs>[]>;
    }

    /**
     * Tap configuration in a Network Interface
     */
    export interface NetworkInterfaceTapConfigurationArgs {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * The reference of the Virtual Network Tap resource.
         */
        virtualNetworkTap?: pulumi.Input<VirtualNetworkTapArgs>;
    }

    /**
     * NetworkSecurityGroup resource.
     */
    export interface NetworkSecurityGroupArgs {
        /**
         * The default security rules of network security group.
         */
        defaultSecurityRules?: pulumi.Input<pulumi.Input<SecurityRuleArgs>[]>;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Resource location.
         */
        location?: pulumi.Input<string>;
        /**
         * The provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: pulumi.Input<string>;
        /**
         * The resource GUID property of the network security group resource.
         */
        resourceGuid?: pulumi.Input<string>;
        /**
         * A collection of security rules of the network security group.
         */
        securityRules?: pulumi.Input<pulumi.Input<SecurityRuleArgs>[]>;
        /**
         * Resource tags.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    /**
     * Public IP address resource.
     */
    export interface PublicIPAddressArgs {
        /**
         * The DDoS protection custom policy associated with the public IP address.
         */
        ddosSettings?: pulumi.Input<DdosSettingsArgs>;
        /**
         * The FQDN of the DNS record associated with the public IP address.
         */
        dnsSettings?: pulumi.Input<PublicIPAddressDnsSettingsArgs>;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The idle timeout of the public IP address.
         */
        idleTimeoutInMinutes?: pulumi.Input<number>;
        /**
         * The IP address associated with the public IP address resource.
         */
        ipAddress?: pulumi.Input<string>;
        /**
         * The list of tags associated with the public IP address.
         */
        ipTags?: pulumi.Input<pulumi.Input<IpTagArgs>[]>;
        /**
         * Resource location.
         */
        location?: pulumi.Input<string>;
        /**
         * The provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: pulumi.Input<string>;
        /**
         * The public IP address version.
         */
        publicIPAddressVersion?: pulumi.Input<string | enums.IPVersion>;
        /**
         * The public IP address allocation method.
         */
        publicIPAllocationMethod?: pulumi.Input<string | enums.IPAllocationMethod>;
        /**
         * The Public IP Prefix this Public IP Address should be allocated from.
         */
        publicIPPrefix?: pulumi.Input<SubResourceArgs>;
        /**
         * The resource GUID property of the public IP resource.
         */
        resourceGuid?: pulumi.Input<string>;
        /**
         * The public IP address SKU.
         */
        sku?: pulumi.Input<PublicIPAddressSkuArgs>;
        /**
         * Resource tags.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * A list of availability zones denoting the IP allocated for the resource needs to come from.
         */
        zones?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Contains FQDN of the DNS record associated with the public IP address
     */
    export interface PublicIPAddressDnsSettingsArgs {
        /**
         * Gets or sets the Domain name label.The concatenation of the domain name label and the regionalized DNS zone make up the fully qualified domain name associated with the public IP address. If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system.
         */
        domainNameLabel?: pulumi.Input<string>;
        /**
         * Gets the FQDN, Fully qualified domain name of the A DNS record associated with the public IP. This is the concatenation of the domainNameLabel and the regionalized DNS zone.
         */
        fqdn?: pulumi.Input<string>;
        /**
         * Gets or Sets the Reverse FQDN. A user-visible, fully qualified domain name that resolves to this public IP address. If the reverseFqdn is specified, then a PTR DNS record is created pointing from the IP address in the in-addr.arpa domain to the reverse FQDN. 
         */
        reverseFqdn?: pulumi.Input<string>;
    }

    /**
     * SKU of a public IP address
     */
    export interface PublicIPAddressSkuArgs {
        /**
         * Name of a public IP address SKU.
         */
        name?: pulumi.Input<string | enums.PublicIPAddressSkuName>;
    }

    /**
     * ResourceNavigationLink resource.
     */
    export interface ResourceNavigationLinkArgs {
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Link to the external resource
         */
        link?: pulumi.Input<string>;
        /**
         * Resource type of the linked resource.
         */
        linkedResourceType?: pulumi.Input<string>;
        /**
         * Name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
    }

    /**
     * Route resource
     */
    export interface RouteArgs {
        /**
         * The destination CIDR to which the route applies.
         */
        addressPrefix?: pulumi.Input<string>;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance.
         */
        nextHopIpAddress?: pulumi.Input<string>;
        /**
         * The type of Azure hop the packet should be sent to.
         */
        nextHopType: pulumi.Input<string | enums.RouteNextHopType>;
        /**
         * The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: pulumi.Input<string>;
    }

    /**
     * Route Filter Resource.
     */
    export interface RouteFilterArgs {
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Resource location.
         */
        location: pulumi.Input<string>;
        /**
         * A collection of references to express route circuit peerings.
         */
        peerings?: pulumi.Input<pulumi.Input<ExpressRouteCircuitPeeringArgs>[]>;
        /**
         * Collection of RouteFilterRules contained within a route filter.
         */
        rules?: pulumi.Input<pulumi.Input<RouteFilterRuleArgs>[]>;
        /**
         * Resource tags.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    /**
     * Route Filter Rule Resource
     */
    export interface RouteFilterRuleArgs {
        /**
         * The access type of the rule.
         */
        access: pulumi.Input<string | enums.Access>;
        /**
         * The collection for bgp community values to filter on. e.g. ['12076:5010','12076:5020']
         */
        communities: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Resource location.
         */
        location?: pulumi.Input<string>;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * The rule type of the rule. Valid value is: 'Community'
         */
        routeFilterRuleType: pulumi.Input<string | enums.RouteFilterRuleType>;
    }

    /**
     * Route table resource.
     */
    export interface RouteTableArgs {
        /**
         * Gets or sets whether to disable the routes learned by BGP on that route table. True means disable.
         */
        disableBgpRoutePropagation?: pulumi.Input<boolean>;
        /**
         * Gets a unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Resource location.
         */
        location?: pulumi.Input<string>;
        /**
         * The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: pulumi.Input<string>;
        /**
         * Collection of routes contained within a route table.
         */
        routes?: pulumi.Input<pulumi.Input<RouteArgs>[]>;
        /**
         * Resource tags.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    /**
     * Network security rule.
     */
    export interface SecurityRuleArgs {
        /**
         * The network traffic is allowed or denied.
         */
        access: pulumi.Input<string | enums.SecurityRuleAccess>;
        /**
         * A description for this rule. Restricted to 140 chars.
         */
        description?: pulumi.Input<string>;
        /**
         * The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
         */
        destinationAddressPrefix?: pulumi.Input<string>;
        /**
         * The destination address prefixes. CIDR or destination IP ranges.
         */
        destinationAddressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The application security group specified as destination.
         */
        destinationApplicationSecurityGroups?: pulumi.Input<pulumi.Input<ApplicationSecurityGroupArgs>[]>;
        /**
         * The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
         */
        destinationPortRange?: pulumi.Input<string>;
        /**
         * The destination port ranges.
         */
        destinationPortRanges?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic.
         */
        direction: pulumi.Input<string | enums.SecurityRuleDirection>;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
         */
        priority?: pulumi.Input<number>;
        /**
         * Network protocol this rule applies to. Possible values are 'Tcp', 'Udp', 'Icmp', 'Esp', and '*'.
         */
        protocol: pulumi.Input<string | enums.SecurityRuleProtocol>;
        /**
         * The provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: pulumi.Input<string>;
        /**
         * The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from. 
         */
        sourceAddressPrefix?: pulumi.Input<string>;
        /**
         * The CIDR or source IP ranges.
         */
        sourceAddressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The application security group specified as source.
         */
        sourceApplicationSecurityGroups?: pulumi.Input<pulumi.Input<ApplicationSecurityGroupArgs>[]>;
        /**
         * The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
         */
        sourcePortRange?: pulumi.Input<string>;
        /**
         * The source port ranges.
         */
        sourcePortRanges?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * ServiceAssociationLink resource.
     */
    export interface ServiceAssociationLinkArgs {
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Link to the external resource.
         */
        link?: pulumi.Input<string>;
        /**
         * Resource type of the linked resource.
         */
        linkedResourceType?: pulumi.Input<string>;
        /**
         * Name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
    }

    /**
     * Service End point policy resource.
     */
    export interface ServiceEndpointPolicyArgs {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Resource location.
         */
        location?: pulumi.Input<string>;
        /**
         * A collection of service endpoint policy definitions of the service endpoint policy.
         */
        serviceEndpointPolicyDefinitions?: pulumi.Input<pulumi.Input<ServiceEndpointPolicyDefinitionArgs>[]>;
        /**
         * Resource tags.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    /**
     * Service Endpoint policy definitions.
     */
    export interface ServiceEndpointPolicyDefinitionArgs {
        /**
         * A description for this rule. Restricted to 140 chars.
         */
        description?: pulumi.Input<string>;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * Service endpoint name.
         */
        service?: pulumi.Input<string>;
        /**
         * A list of service resources.
         */
        serviceResources?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The service endpoint properties.
     */
    export interface ServiceEndpointPropertiesFormatArgs {
        /**
         * A list of locations.
         */
        locations?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The provisioning state of the resource.
         */
        provisioningState?: pulumi.Input<string>;
        /**
         * The type of the endpoint service.
         */
        service?: pulumi.Input<string>;
    }

    /**
     * Reference to another subresource.
     */
    export interface SubResourceArgs {
        /**
         * Sub-resource ID. Both absolute resource ID and a relative resource ID are accepted.
         * An absolute ID starts with /subscriptions/ and contains the entire ID of the parent resource and the ID of the sub-resource in the end.
         * A relative ID replaces the ID of the parent resource with a token '$self', followed by the sub-resource ID itself.
         * Example of a relative ID: $self/frontEndConfigurations/my-frontend.
         */
        id?: pulumi.Input<string>;
    }

    /**
     * Subnet in a virtual network resource.
     */
    export interface SubnetArgs {
        /**
         * The address prefix for the subnet.
         */
        addressPrefix?: pulumi.Input<string>;
        /**
         * List of  address prefixes for the subnet.
         */
        addressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Gets an array of references to the delegations on the subnet.
         */
        delegations?: pulumi.Input<pulumi.Input<DelegationArgs>[]>;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * Nat gateway associated with this subnet.
         */
        natGateway?: pulumi.Input<SubResourceArgs>;
        /**
         * The reference of the NetworkSecurityGroup resource.
         */
        networkSecurityGroup?: pulumi.Input<NetworkSecurityGroupArgs>;
        /**
         * The provisioning state of the resource.
         */
        provisioningState?: pulumi.Input<string>;
        /**
         * Gets an array of references to the external resources using subnet.
         */
        resourceNavigationLinks?: pulumi.Input<pulumi.Input<ResourceNavigationLinkArgs>[]>;
        /**
         * The reference of the RouteTable resource.
         */
        routeTable?: pulumi.Input<RouteTableArgs>;
        /**
         * Gets an array of references to services injecting into this subnet.
         */
        serviceAssociationLinks?: pulumi.Input<pulumi.Input<ServiceAssociationLinkArgs>[]>;
        /**
         * An array of service endpoint policies.
         */
        serviceEndpointPolicies?: pulumi.Input<pulumi.Input<ServiceEndpointPolicyArgs>[]>;
        /**
         * An array of service endpoints.
         */
        serviceEndpoints?: pulumi.Input<pulumi.Input<ServiceEndpointPropertiesFormatArgs>[]>;
    }

    /**
     * Virtual Network Tap resource
     */
    export interface VirtualNetworkTapArgs {
        /**
         * The reference to the private IP address on the internal Load Balancer that will receive the tap
         */
        destinationLoadBalancerFrontEndIPConfiguration?: pulumi.Input<FrontendIPConfigurationArgs>;
        /**
         * The reference to the private IP Address of the collector nic that will receive the tap
         */
        destinationNetworkInterfaceIPConfiguration?: pulumi.Input<NetworkInterfaceIPConfigurationArgs>;
        /**
         * The VXLAN destination port that will receive the tapped traffic.
         */
        destinationPort?: pulumi.Input<number>;
        /**
         * Gets a unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Resource location.
         */
        location?: pulumi.Input<string>;
        /**
         * Resource tags.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
