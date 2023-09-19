import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Backend Address Pool of an application gateway.
     */
    export interface ApplicationGatewayBackendAddressPoolResponse {
        /**
         * Backend addresses
         */
        backendAddresses?: ApplicationGatewayBackendAddressResponse[];
        /**
         * Collection of references to IPs defined in network interfaces.
         */
        backendIPConfigurations?: NetworkInterfaceIPConfigurationResponse[];
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Name of the backend address pool that is unique within an Application Gateway.
         */
        name?: string;
        /**
         * Provisioning state of the backend address pool resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
        /**
         * Type of the resource.
         */
        type?: string;
    }

    /**
     * Backend address of an application gateway.
     */
    export interface ApplicationGatewayBackendAddressResponse {
        /**
         * Fully qualified domain name (FQDN).
         */
        fqdn?: string;
        /**
         * IP address
         */
        ipAddress?: string;
    }

    /**
     * An application security group in a resource group.
     */
    export interface ApplicationSecurityGroupResponse {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Resource location.
         */
        location?: string;
        /**
         * Resource name.
         */
        name: string;
        /**
         * The provisioning state of the application security group resource. Possible values are: 'Succeeded', 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState: string;
        /**
         * The resource GUID property of the application security group resource. It uniquely identifies a resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.
         */
        resourceGuid: string;
        /**
         * Resource tags.
         */
        tags?: {[key: string]: string};
        /**
         * Resource type.
         */
        type: string;
    }

    /**
     * Pool of backend IP addresses.
     */
    export interface BackendAddressPoolResponse {
        /**
         * Gets collection of references to IP addresses defined in network interfaces.
         */
        backendIPConfigurations: NetworkInterfaceIPConfigurationResponse[];
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Gets load balancing rules that use this backend address pool.
         */
        loadBalancingRules: SubResourceResponse[];
        /**
         * Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * Gets outbound rules that use this backend address pool.
         */
        outboundRule: SubResourceResponse;
        /**
         * Gets outbound rules that use this backend address pool.
         */
        outboundRules: SubResourceResponse[];
        /**
         * Get provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
    }

    /**
     * Contains the DDoS protection settings of the public IP.
     */
    export interface DdosSettingsResponse {
        /**
         * The DDoS custom policy associated with the public IP.
         */
        ddosCustomPolicy?: SubResourceResponse;
        /**
         * The DDoS protection policy customizability of the public IP. Only standard coverage will have the ability to be customized.
         */
        protectionCoverage?: string;
    }

    /**
     * Details the service to which the subnet is delegated.
     */
    export interface DelegationResponse {
        /**
         * Describes the actions permitted to the service upon delegation
         */
        actions?: string[];
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The name of the resource that is unique within a subnet. This name can be used to access the resource.
         */
        name?: string;
        /**
         * The provisioning state of the resource.
         */
        provisioningState: string;
        /**
         * The name of the service to whom the subnet should be delegated (e.g. Microsoft.Sql/servers)
         */
        serviceName?: string;
    }

    /**
     * Identifies the service being brought into the virtual network.
     */
    export interface EndpointServiceResponse {
        /**
         * A unique identifier of the service being referenced by the interface endpoint.
         */
        id?: string;
    }

    /**
     * Express Route Circuit Connection in an ExpressRouteCircuitPeering resource.
     */
    export interface ExpressRouteCircuitConnectionResponse {
        /**
         * /29 IP address space to carve out Customer addresses for tunnels.
         */
        addressPrefix?: string;
        /**
         * The authorization key.
         */
        authorizationKey?: string;
        /**
         * Express Route Circuit connection state.
         */
        circuitConnectionStatus: string;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * Reference to Express Route Circuit Private Peering Resource of the circuit initiating connection.
         */
        expressRouteCircuitPeering?: SubResourceResponse;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * Reference to Express Route Circuit Private Peering Resource of the peered circuit.
         */
        peerExpressRouteCircuitPeering?: SubResourceResponse;
        /**
         * Provisioning state of the circuit connection resource. Possible values are: 'Succeeded', 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState: string;
    }

    /**
     * Specifies the peering configuration.
     */
    export interface ExpressRouteCircuitPeeringConfigResponse {
        /**
         * The communities of bgp peering. Specified for microsoft peering
         */
        advertisedCommunities?: string[];
        /**
         * The reference of AdvertisedPublicPrefixes.
         */
        advertisedPublicPrefixes?: string[];
        /**
         * AdvertisedPublicPrefixState of the Peering resource. Possible values are 'NotConfigured', 'Configuring', 'Configured', and 'ValidationNeeded'.
         */
        advertisedPublicPrefixesState?: string;
        /**
         * The CustomerASN of the peering.
         */
        customerASN?: number;
        /**
         * The legacy mode of the peering.
         */
        legacyMode?: number;
        /**
         * The RoutingRegistryName of the configuration.
         */
        routingRegistryName?: string;
    }

    /**
     * Peering in an ExpressRouteCircuit resource.
     */
    export interface ExpressRouteCircuitPeeringResponse {
        /**
         * The Azure ASN.
         */
        azureASN?: number;
        /**
         * The list of circuit connections associated with Azure Private Peering for this circuit.
         */
        connections?: ExpressRouteCircuitConnectionResponse[];
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * The ExpressRoute connection.
         */
        expressRouteConnection?: ExpressRouteConnectionIdResponse;
        /**
         * The GatewayManager Etag.
         */
        gatewayManagerEtag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The IPv6 peering configuration.
         */
        ipv6PeeringConfig?: Ipv6ExpressRouteCircuitPeeringConfigResponse;
        /**
         * Gets whether the provider or the customer last modified the peering.
         */
        lastModifiedBy?: string;
        /**
         * The Microsoft peering configuration.
         */
        microsoftPeeringConfig?: ExpressRouteCircuitPeeringConfigResponse;
        /**
         * Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * The peer ASN.
         */
        peerASN?: number;
        /**
         * The list of peered circuit connections associated with Azure Private Peering for this circuit.
         */
        peeredConnections: PeerExpressRouteCircuitConnectionResponse[];
        /**
         * The peering type.
         */
        peeringType?: string;
        /**
         * The primary port.
         */
        primaryAzurePort?: string;
        /**
         * The primary address prefix.
         */
        primaryPeerAddressPrefix?: string;
        /**
         * Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
        /**
         * The reference of the RouteFilter resource.
         */
        routeFilter?: RouteFilterResponse;
        /**
         * The secondary port.
         */
        secondaryAzurePort?: string;
        /**
         * The secondary address prefix.
         */
        secondaryPeerAddressPrefix?: string;
        /**
         * The shared key.
         */
        sharedKey?: string;
        /**
         * The peering state.
         */
        state?: string;
        /**
         * Gets peering stats.
         */
        stats?: ExpressRouteCircuitStatsResponse;
        /**
         * The VLAN ID.
         */
        vlanId?: number;
    }

    /**
     * Contains stats associated with the peering.
     */
    export interface ExpressRouteCircuitStatsResponse {
        /**
         * Gets BytesIn of the peering.
         */
        primarybytesIn?: number;
        /**
         * Gets BytesOut of the peering.
         */
        primarybytesOut?: number;
        /**
         * Gets BytesIn of the peering.
         */
        secondarybytesIn?: number;
        /**
         * Gets BytesOut of the peering.
         */
        secondarybytesOut?: number;
    }

    /**
     * The ID of the ExpressRouteConnection.
     */
    export interface ExpressRouteConnectionIdResponse {
        /**
         * The ID of the ExpressRouteConnection.
         */
        id: string;
    }

    /**
     * Frontend IP address of the load balancer.
     */
    export interface FrontendIPConfigurationResponse {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Read only. Inbound pools URIs that use this frontend IP.
         */
        inboundNatPools: SubResourceResponse[];
        /**
         * Read only. Inbound rules URIs that use this frontend IP.
         */
        inboundNatRules: SubResourceResponse[];
        /**
         * Gets load balancing rules URIs that use this frontend IP.
         */
        loadBalancingRules: SubResourceResponse[];
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * Read only. Outbound rules URIs that use this frontend IP.
         */
        outboundRules: SubResourceResponse[];
        /**
         * The private IP address of the IP configuration.
         */
        privateIPAddress?: string;
        /**
         * The Private IP allocation method.
         */
        privateIPAllocationMethod?: string;
        /**
         * Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
        /**
         * The reference of the Public IP resource.
         */
        publicIPAddress?: PublicIPAddressResponse;
        /**
         * The reference of the Public IP Prefix resource.
         */
        publicIPPrefix?: SubResourceResponse;
        /**
         * The reference of the subnet resource.
         */
        subnet?: SubnetResponse;
        /**
         * A list of availability zones denoting the IP allocated for the resource needs to come from.
         */
        zones?: string[];
    }

    /**
     * IP configuration profile child resource.
     */
    export interface IPConfigurationProfileResponse {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The name of the resource. This name can be used to access the resource.
         */
        name?: string;
        /**
         * The provisioning state of the resource.
         */
        provisioningState: string;
        /**
         * The reference of the subnet resource to create a container network interface ip configuration.
         */
        subnet?: SubnetResponse;
        /**
         * Sub Resource type.
         */
        type: string;
    }

    /**
     * IP configuration
     */
    export interface IPConfigurationResponse {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * The private IP address of the IP configuration.
         */
        privateIPAddress?: string;
        /**
         * The private IP address allocation method.
         */
        privateIPAllocationMethod?: string;
        /**
         * Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
        /**
         * The reference of the public IP resource.
         */
        publicIPAddress?: PublicIPAddressResponse;
        /**
         * The reference of the subnet resource.
         */
        subnet?: SubnetResponse;
    }

    /**
     * Inbound NAT rule of the load balancer.
     */
    export interface InboundNatRuleResponse {
        /**
         * A reference to a private IP address defined on a network interface of a VM. Traffic sent to the frontend port of each of the frontend IP configurations is forwarded to the backend IP.
         */
        backendIPConfiguration: NetworkInterfaceIPConfigurationResponse;
        /**
         * The port used for the internal endpoint. Acceptable values range from 1 to 65535.
         */
        backendPort?: number;
        /**
         * Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
         */
        enableFloatingIP?: boolean;
        /**
         * Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
         */
        enableTcpReset?: boolean;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * A reference to frontend IP addresses.
         */
        frontendIPConfiguration?: SubResourceResponse;
        /**
         * The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values range from 1 to 65534.
         */
        frontendPort?: number;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
         */
        idleTimeoutInMinutes?: number;
        /**
         * Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * The reference to the transport protocol used by the load balancing rule.
         */
        protocol?: string;
        /**
         * Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
    }

    /**
     * Interface endpoint resource.
     */
    export interface InterfaceEndpointResponse {
        /**
         * A reference to the service being brought into the virtual network.
         */
        endpointService?: EndpointServiceResponse;
        /**
         * Gets a unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * A first-party service's FQDN that is mapped to the private IP allocated via this interface endpoint.
         */
        fqdn?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Resource location.
         */
        location?: string;
        /**
         * Resource name.
         */
        name: string;
        /**
         * Gets an array of references to the network interfaces created for this interface endpoint.
         */
        networkInterfaces: NetworkInterfaceResponse[];
        /**
         * A read-only property that identifies who created this interface endpoint.
         */
        owner: string;
        /**
         * The provisioning state of the interface endpoint. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState: string;
        /**
         * The ID of the subnet from which the private IP will be allocated.
         */
        subnet?: SubnetResponse;
        /**
         * Resource tags.
         */
        tags?: {[key: string]: string};
        /**
         * Resource type.
         */
        type: string;
    }

    /**
     * Contains the IpTag associated with the object
     */
    export interface IpTagResponse {
        /**
         * Gets or sets the ipTag type: Example FirstPartyUsage.
         */
        ipTagType?: string;
        /**
         * Gets or sets value of the IpTag associated with the public IP. Example SQL, Storage etc
         */
        tag?: string;
    }

    /**
     * Contains IPv6 peering config.
     */
    export interface Ipv6ExpressRouteCircuitPeeringConfigResponse {
        /**
         * The Microsoft peering configuration.
         */
        microsoftPeeringConfig?: ExpressRouteCircuitPeeringConfigResponse;
        /**
         * The primary address prefix.
         */
        primaryPeerAddressPrefix?: string;
        /**
         * The reference of the RouteFilter resource.
         */
        routeFilter?: RouteFilterResponse;
        /**
         * The secondary address prefix.
         */
        secondaryPeerAddressPrefix?: string;
        /**
         * The state of peering. Possible values are: 'Disabled' and 'Enabled'
         */
        state?: string;
    }

    /**
     * DNS settings of a network interface.
     */
    export interface NetworkInterfaceDnsSettingsResponse {
        /**
         * If the VM that uses this NIC is part of an Availability Set, then this list will have the union of all DNS servers from all NICs that are part of the Availability Set. This property is what is configured on each of those VMs.
         */
        appliedDnsServers?: string[];
        /**
         * List of DNS servers IP addresses. Use 'AzureProvidedDNS' to switch to azure provided DNS resolution. 'AzureProvidedDNS' value cannot be combined with other IPs, it must be the only value in dnsServers collection.
         */
        dnsServers?: string[];
        /**
         * Relative DNS name for this NIC used for internal communications between VMs in the same virtual network.
         */
        internalDnsNameLabel?: string;
        /**
         * Even if internalDnsNameLabel is not specified, a DNS entry is created for the primary NIC of the VM. This DNS name can be constructed by concatenating the VM name with the value of internalDomainNameSuffix.
         */
        internalDomainNameSuffix?: string;
        /**
         * Fully qualified DNS name supporting internal communications between VMs in the same virtual network.
         */
        internalFqdn?: string;
    }

    /**
     * IPConfiguration in a network interface.
     */
    export interface NetworkInterfaceIPConfigurationResponse {
        /**
         * The reference of ApplicationGatewayBackendAddressPool resource.
         */
        applicationGatewayBackendAddressPools?: ApplicationGatewayBackendAddressPoolResponse[];
        /**
         * Application security groups in which the IP configuration is included.
         */
        applicationSecurityGroups?: ApplicationSecurityGroupResponse[];
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The reference of LoadBalancerBackendAddressPool resource.
         */
        loadBalancerBackendAddressPools?: BackendAddressPoolResponse[];
        /**
         * A list of references of LoadBalancerInboundNatRules.
         */
        loadBalancerInboundNatRules?: InboundNatRuleResponse[];
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * Gets whether this is a primary customer address on the network interface.
         */
        primary?: boolean;
        /**
         * Private IP address of the IP configuration.
         */
        privateIPAddress?: string;
        /**
         * Available from Api-Version 2016-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.
         */
        privateIPAddressVersion?: string;
        /**
         * The private IP address allocation method.
         */
        privateIPAllocationMethod?: string;
        /**
         * The provisioning state of the network interface IP configuration. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
        /**
         * Public IP address bound to the IP configuration.
         */
        publicIPAddress?: PublicIPAddressResponse;
        /**
         * Subnet bound to the IP configuration.
         */
        subnet?: SubnetResponse;
        /**
         * The reference to Virtual Network Taps.
         */
        virtualNetworkTaps?: VirtualNetworkTapResponse[];
    }

    /**
     * A network interface in a resource group.
     */
    export interface NetworkInterfaceResponse {
        /**
         * The DNS settings in network interface.
         */
        dnsSettings?: NetworkInterfaceDnsSettingsResponse;
        /**
         * If the network interface is accelerated networking enabled.
         */
        enableAcceleratedNetworking?: boolean;
        /**
         * Indicates whether IP forwarding is enabled on this network interface.
         */
        enableIPForwarding?: boolean;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * A list of references to linked BareMetal resources
         */
        hostedWorkloads: string[];
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * A reference to the interface endpoint to which the network interface is linked.
         */
        interfaceEndpoint: InterfaceEndpointResponse;
        /**
         * A list of IPConfigurations of the network interface.
         */
        ipConfigurations?: NetworkInterfaceIPConfigurationResponse[];
        /**
         * Resource location.
         */
        location?: string;
        /**
         * The MAC address of the network interface.
         */
        macAddress?: string;
        /**
         * Resource name.
         */
        name: string;
        /**
         * The reference of the NetworkSecurityGroup resource.
         */
        networkSecurityGroup?: NetworkSecurityGroupResponse;
        /**
         * Gets whether this is a primary network interface on a virtual machine.
         */
        primary?: boolean;
        /**
         * The provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
        /**
         * The resource GUID property of the network interface resource.
         */
        resourceGuid?: string;
        /**
         * Resource tags.
         */
        tags?: {[key: string]: string};
        /**
         * A list of TapConfigurations of the network interface.
         */
        tapConfigurations?: NetworkInterfaceTapConfigurationResponse[];
        /**
         * Resource type.
         */
        type: string;
        /**
         * The reference of a virtual machine.
         */
        virtualMachine: SubResourceResponse;
    }

    /**
     * Tap configuration in a Network Interface
     */
    export interface NetworkInterfaceTapConfigurationResponse {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * The provisioning state of the network interface tap configuration. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState: string;
        /**
         * Sub Resource type.
         */
        type: string;
        /**
         * The reference of the Virtual Network Tap resource.
         */
        virtualNetworkTap?: VirtualNetworkTapResponse;
    }

    /**
     * NetworkSecurityGroup resource.
     */
    export interface NetworkSecurityGroupResponse {
        /**
         * The default security rules of network security group.
         */
        defaultSecurityRules?: SecurityRuleResponse[];
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Resource location.
         */
        location?: string;
        /**
         * Resource name.
         */
        name: string;
        /**
         * A collection of references to network interfaces.
         */
        networkInterfaces: NetworkInterfaceResponse[];
        /**
         * The provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
        /**
         * The resource GUID property of the network security group resource.
         */
        resourceGuid?: string;
        /**
         * A collection of security rules of the network security group.
         */
        securityRules?: SecurityRuleResponse[];
        /**
         * A collection of references to subnets.
         */
        subnets: SubnetResponse[];
        /**
         * Resource tags.
         */
        tags?: {[key: string]: string};
        /**
         * Resource type.
         */
        type: string;
    }

    /**
     * Peer Express Route Circuit Connection in an ExpressRouteCircuitPeering resource.
     */
    export interface PeerExpressRouteCircuitConnectionResponse {
        /**
         * /29 IP address space to carve out Customer addresses for tunnels.
         */
        addressPrefix?: string;
        /**
         * The resource guid of the authorization used for the express route circuit connection.
         */
        authResourceGuid?: string;
        /**
         * Express Route Circuit connection state.
         */
        circuitConnectionStatus: string;
        /**
         * The name of the express route circuit connection resource.
         */
        connectionName?: string;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * Reference to Express Route Circuit Private Peering Resource of the circuit.
         */
        expressRouteCircuitPeering?: SubResourceResponse;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * Reference to Express Route Circuit Private Peering Resource of the peered circuit.
         */
        peerExpressRouteCircuitPeering?: SubResourceResponse;
        /**
         * Provisioning state of the peer express route circuit connection resource. Possible values are: 'Succeeded', 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState: string;
    }

    /**
     * Contains FQDN of the DNS record associated with the public IP address
     */
    export interface PublicIPAddressDnsSettingsResponse {
        /**
         * Gets or sets the Domain name label.The concatenation of the domain name label and the regionalized DNS zone make up the fully qualified domain name associated with the public IP address. If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system.
         */
        domainNameLabel?: string;
        /**
         * Gets the FQDN, Fully qualified domain name of the A DNS record associated with the public IP. This is the concatenation of the domainNameLabel and the regionalized DNS zone.
         */
        fqdn?: string;
        /**
         * Gets or Sets the Reverse FQDN. A user-visible, fully qualified domain name that resolves to this public IP address. If the reverseFqdn is specified, then a PTR DNS record is created pointing from the IP address in the in-addr.arpa domain to the reverse FQDN. 
         */
        reverseFqdn?: string;
    }

    /**
     * Public IP address resource.
     */
    export interface PublicIPAddressResponse {
        /**
         * The DDoS protection custom policy associated with the public IP address.
         */
        ddosSettings?: DdosSettingsResponse;
        /**
         * The FQDN of the DNS record associated with the public IP address.
         */
        dnsSettings?: PublicIPAddressDnsSettingsResponse;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The idle timeout of the public IP address.
         */
        idleTimeoutInMinutes?: number;
        /**
         * The IP address associated with the public IP address resource.
         */
        ipAddress?: string;
        /**
         * The IP configuration associated with the public IP address.
         */
        ipConfiguration: IPConfigurationResponse;
        /**
         * The list of tags associated with the public IP address.
         */
        ipTags?: IpTagResponse[];
        /**
         * Resource location.
         */
        location?: string;
        /**
         * Resource name.
         */
        name: string;
        /**
         * The provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
        /**
         * The public IP address version.
         */
        publicIPAddressVersion?: string;
        /**
         * The public IP address allocation method.
         */
        publicIPAllocationMethod?: string;
        /**
         * The Public IP Prefix this Public IP Address should be allocated from.
         */
        publicIPPrefix?: SubResourceResponse;
        /**
         * The resource GUID property of the public IP resource.
         */
        resourceGuid?: string;
        /**
         * The public IP address SKU.
         */
        sku?: PublicIPAddressSkuResponse;
        /**
         * Resource tags.
         */
        tags?: {[key: string]: string};
        /**
         * Resource type.
         */
        type: string;
        /**
         * A list of availability zones denoting the IP allocated for the resource needs to come from.
         */
        zones?: string[];
    }

    /**
     * SKU of a public IP address
     */
    export interface PublicIPAddressSkuResponse {
        /**
         * Name of a public IP address SKU.
         */
        name?: string;
    }

    /**
     * ResourceNavigationLink resource.
     */
    export interface ResourceNavigationLinkResponse {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Link to the external resource
         */
        link?: string;
        /**
         * Resource type of the linked resource.
         */
        linkedResourceType?: string;
        /**
         * Name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * Provisioning state of the ResourceNavigationLink resource.
         */
        provisioningState: string;
    }

    /**
     * Route Filter Resource.
     */
    export interface RouteFilterResponse {
        /**
         * Gets a unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Resource location.
         */
        location: string;
        /**
         * Resource name.
         */
        name: string;
        /**
         * A collection of references to express route circuit peerings.
         */
        peerings?: ExpressRouteCircuitPeeringResponse[];
        /**
         * The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', 'Succeeded' and 'Failed'.
         */
        provisioningState: string;
        /**
         * Collection of RouteFilterRules contained within a route filter.
         */
        rules?: RouteFilterRuleResponse[];
        /**
         * Resource tags.
         */
        tags?: {[key: string]: string};
        /**
         * Resource type.
         */
        type: string;
    }

    /**
     * Route Filter Rule Resource
     */
    export interface RouteFilterRuleResponse {
        /**
         * The access type of the rule.
         */
        access: string;
        /**
         * The collection for bgp community values to filter on. e.g. ['12076:5010','12076:5020']
         */
        communities: string[];
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Resource location.
         */
        location?: string;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', 'Succeeded' and 'Failed'.
         */
        provisioningState: string;
        /**
         * The rule type of the rule. Valid value is: 'Community'
         */
        routeFilterRuleType: string;
    }

    /**
     * Route resource
     */
    export interface RouteResponse {
        /**
         * The destination CIDR to which the route applies.
         */
        addressPrefix?: string;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance.
         */
        nextHopIpAddress?: string;
        /**
         * The type of Azure hop the packet should be sent to.
         */
        nextHopType: string;
        /**
         * The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
    }

    /**
     * Route table resource.
     */
    export interface RouteTableResponse {
        /**
         * Gets or sets whether to disable the routes learned by BGP on that route table. True means disable.
         */
        disableBgpRoutePropagation?: boolean;
        /**
         * Gets a unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Resource location.
         */
        location?: string;
        /**
         * Resource name.
         */
        name: string;
        /**
         * The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
        /**
         * Collection of routes contained within a route table.
         */
        routes?: RouteResponse[];
        /**
         * A collection of references to subnets.
         */
        subnets: SubnetResponse[];
        /**
         * Resource tags.
         */
        tags?: {[key: string]: string};
        /**
         * Resource type.
         */
        type: string;
    }

    /**
     * Network security rule.
     */
    export interface SecurityRuleResponse {
        /**
         * The network traffic is allowed or denied.
         */
        access: string;
        /**
         * A description for this rule. Restricted to 140 chars.
         */
        description?: string;
        /**
         * The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
         */
        destinationAddressPrefix?: string;
        /**
         * The destination address prefixes. CIDR or destination IP ranges.
         */
        destinationAddressPrefixes?: string[];
        /**
         * The application security group specified as destination.
         */
        destinationApplicationSecurityGroups?: ApplicationSecurityGroupResponse[];
        /**
         * The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
         */
        destinationPortRange?: string;
        /**
         * The destination port ranges.
         */
        destinationPortRanges?: string[];
        /**
         * The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic.
         */
        direction: string;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
         */
        priority?: number;
        /**
         * Network protocol this rule applies to. Possible values are 'Tcp', 'Udp', 'Icmp', 'Esp', and '*'.
         */
        protocol: string;
        /**
         * The provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
        /**
         * The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from. 
         */
        sourceAddressPrefix?: string;
        /**
         * The CIDR or source IP ranges.
         */
        sourceAddressPrefixes?: string[];
        /**
         * The application security group specified as source.
         */
        sourceApplicationSecurityGroups?: ApplicationSecurityGroupResponse[];
        /**
         * The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
         */
        sourcePortRange?: string;
        /**
         * The source port ranges.
         */
        sourcePortRanges?: string[];
    }

    /**
     * ServiceAssociationLink resource.
     */
    export interface ServiceAssociationLinkResponse {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Link to the external resource.
         */
        link?: string;
        /**
         * Resource type of the linked resource.
         */
        linkedResourceType?: string;
        /**
         * Name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * Provisioning state of the ServiceAssociationLink resource.
         */
        provisioningState: string;
    }

    /**
     * Service Endpoint policy definitions.
     */
    export interface ServiceEndpointPolicyDefinitionResponse {
        /**
         * A description for this rule. Restricted to 140 chars.
         */
        description?: string;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * The provisioning state of the service end point policy definition. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState: string;
        /**
         * Service endpoint name.
         */
        service?: string;
        /**
         * A list of service resources.
         */
        serviceResources?: string[];
    }

    /**
     * Service End point policy resource.
     */
    export interface ServiceEndpointPolicyResponse {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Resource location.
         */
        location?: string;
        /**
         * Resource name.
         */
        name: string;
        /**
         * The provisioning state of the service endpoint policy. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState: string;
        /**
         * The resource GUID property of the service endpoint policy resource.
         */
        resourceGuid: string;
        /**
         * A collection of service endpoint policy definitions of the service endpoint policy.
         */
        serviceEndpointPolicyDefinitions?: ServiceEndpointPolicyDefinitionResponse[];
        /**
         * A collection of references to subnets.
         */
        subnets: SubnetResponse[];
        /**
         * Resource tags.
         */
        tags?: {[key: string]: string};
        /**
         * Resource type.
         */
        type: string;
    }

    /**
     * The service endpoint properties.
     */
    export interface ServiceEndpointPropertiesFormatResponse {
        /**
         * A list of locations.
         */
        locations?: string[];
        /**
         * The provisioning state of the resource.
         */
        provisioningState?: string;
        /**
         * The type of the endpoint service.
         */
        service?: string;
    }

    /**
     * Reference to another subresource.
     */
    export interface SubResourceResponse {
        /**
         * Resource ID.
         */
        id?: string;
    }

    /**
     * Subnet in a virtual network resource.
     */
    export interface SubnetResponse {
        /**
         * The address prefix for the subnet.
         */
        addressPrefix?: string;
        /**
         * List of  address prefixes for the subnet.
         */
        addressPrefixes?: string[];
        /**
         * Gets an array of references to the delegations on the subnet.
         */
        delegations?: DelegationResponse[];
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * An array of references to interface endpoints 
         */
        interfaceEndpoints: InterfaceEndpointResponse[];
        /**
         * Array of IP configuration profiles which reference this subnet.
         */
        ipConfigurationProfiles: IPConfigurationProfileResponse[];
        /**
         * Gets an array of references to the network interface IP configurations using subnet.
         */
        ipConfigurations: IPConfigurationResponse[];
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * Nat gateway associated with this subnet.
         */
        natGateway?: SubResourceResponse;
        /**
         * The reference of the NetworkSecurityGroup resource.
         */
        networkSecurityGroup?: NetworkSecurityGroupResponse;
        /**
         * The provisioning state of the resource.
         */
        provisioningState?: string;
        /**
         * A read-only string identifying the intention of use for this subnet based on delegations and other user-defined properties.
         */
        purpose: string;
        /**
         * Gets an array of references to the external resources using subnet.
         */
        resourceNavigationLinks?: ResourceNavigationLinkResponse[];
        /**
         * The reference of the RouteTable resource.
         */
        routeTable?: RouteTableResponse;
        /**
         * Gets an array of references to services injecting into this subnet.
         */
        serviceAssociationLinks?: ServiceAssociationLinkResponse[];
        /**
         * An array of service endpoint policies.
         */
        serviceEndpointPolicies?: ServiceEndpointPolicyResponse[];
        /**
         * An array of service endpoints.
         */
        serviceEndpoints?: ServiceEndpointPropertiesFormatResponse[];
    }

    /**
     * Virtual Network Tap resource
     */
    export interface VirtualNetworkTapResponse {
        /**
         * The reference to the private IP address on the internal Load Balancer that will receive the tap
         */
        destinationLoadBalancerFrontEndIPConfiguration?: FrontendIPConfigurationResponse;
        /**
         * The reference to the private IP Address of the collector nic that will receive the tap
         */
        destinationNetworkInterfaceIPConfiguration?: NetworkInterfaceIPConfigurationResponse;
        /**
         * The VXLAN destination port that will receive the tapped traffic.
         */
        destinationPort?: number;
        /**
         * Gets a unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Resource location.
         */
        location?: string;
        /**
         * Resource name.
         */
        name: string;
        /**
         * Specifies the list of resource IDs for the network interface IP configuration that needs to be tapped.
         */
        networkInterfaceTapConfigurations: NetworkInterfaceTapConfigurationResponse[];
        /**
         * The provisioning state of the virtual network tap. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState: string;
        /**
         * The resourceGuid property of the virtual network tap.
         */
        resourceGuid: string;
        /**
         * Resource tags.
         */
        tags?: {[key: string]: string};
        /**
         * Resource type.
         */
        type: string;
    }
