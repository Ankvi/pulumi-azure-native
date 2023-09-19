import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * AddressSpace contains an array of IP address ranges that can be used by subnets of the virtual network.
     */
    export interface AddressSpaceResponse {
        /**
         * A list of address blocks reserved for this virtual network in CIDR notation.
         */
        addressPrefixes?: string[];
    }

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
     * BGP settings details
     */
    export interface BgpSettingsResponse {
        /**
         * The BGP speaker's ASN.
         */
        asn?: number;
        /**
         * The BGP peering address and BGP identifier of this BGP speaker.
         */
        bgpPeeringAddress?: string;
        /**
         * The weight added to routes learned from this BGP speaker.
         */
        peerWeight?: number;
    }

    /**
     * List of properties of the device.
     */
    export interface DevicePropertiesResponse {
        /**
         * Model of the device.
         */
        deviceModel?: string;
        /**
         * Name of the device Vendor.
         */
        deviceVendor?: string;
        /**
         * Link speed.
         */
        linkSpeedInMbps?: number;
    }

    /**
     * HubVirtualNetworkConnection Resource.
     */
    export interface HubVirtualNetworkConnectionResponse {
        /**
         * VirtualHub to RemoteVnet transit to enabled or not.
         */
        allowHubToRemoteVnetTransit?: boolean;
        /**
         * Allow RemoteVnet to use Virtual Hub's gateways.
         */
        allowRemoteVnetToUseHubVnetGateways?: boolean;
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
        location?: string;
        /**
         * Resource name.
         */
        name: string;
        /**
         * The provisioning state of the resource.
         */
        provisioningState: string;
        /**
         * Reference to the remote virtual network.
         */
        remoteVirtualNetwork?: SubResourceResponse;
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
         * The private IP allocation method. Possible values are 'Static' and 'Dynamic'.
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
         * The transport protocol for the endpoint. Possible values are 'Udp' or 'Tcp' or 'All'.
         */
        protocol?: string;
        /**
         * Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
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
     * An IPSec Policy configuration for a virtual network gateway connection
     */
    export interface IpsecPolicyResponse {
        /**
         * The DH Groups used in IKE Phase 1 for initial SA.
         */
        dhGroup: string;
        /**
         * The IKE encryption algorithm (IKE phase 2).
         */
        ikeEncryption: string;
        /**
         * The IKE integrity algorithm (IKE phase 2).
         */
        ikeIntegrity: string;
        /**
         * The IPSec encryption algorithm (IKE phase 1).
         */
        ipsecEncryption: string;
        /**
         * The IPSec integrity algorithm (IKE phase 1).
         */
        ipsecIntegrity: string;
        /**
         * The Pfs Groups used in IKE Phase 2 for new child SA.
         */
        pfsGroup: string;
        /**
         * The IPSec Security Association (also called Quick Mode or Phase 2 SA) payload size in KB for a site to site VPN tunnel.
         */
        saDataSizeKilobytes: number;
        /**
         * The IPSec Security Association (also called Quick Mode or Phase 2 SA) lifetime in seconds for a site to site VPN tunnel.
         */
        saLifeTimeSeconds: number;
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
         * Available from Api-Version 2016-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and 'IPv6'.
         */
        privateIPAddressVersion?: string;
        /**
         * Defines how a private IP address is assigned. Possible values are: 'Static' and 'Dynamic'.
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
         * Resource ID.
         */
        id?: string;
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
         * Resource type.
         */
        type: string;
        /**
         * The reference of a virtual machine.
         */
        virtualMachine?: SubResourceResponse;
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
     * Policies for vpn gateway.
     */
    export interface PoliciesResponse {
        /**
         * True if branch to branch traffic is allowed.
         */
        allowBranchToBranchTraffic?: boolean;
        /**
         * True if Vnet to Vnet traffic is allowed.
         */
        allowVnetToVnetTraffic?: boolean;
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
         * The public IP address version. Possible values are: 'IPv4' and 'IPv6'.
         */
        publicIPAddressVersion?: string;
        /**
         * The public IP allocation method. Possible values are: 'Static' and 'Dynamic'.
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
         * The type of Azure hop the packet should be sent to. Possible values are: 'VirtualNetworkGateway', 'VnetLocal', 'Internet', 'VirtualAppliance', and 'None'
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
         * The network traffic is allowed or denied. Possible values are: 'Allow' and 'Deny'.
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
         * The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic. Possible values are: 'Inbound' and 'Outbound'.
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
         * Network protocol this rule applies to. Possible values are 'Tcp', 'Udp', and '*'.
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
        provisioningState?: string;
        /**
         * service endpoint name.
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
        provisioningState?: string;
        /**
         * The resource GUID property of the service endpoint policy resource.
         */
        resourceGuid?: string;
        /**
         * A collection of service endpoint policy definitions of the service endpoint policy.
         */
        serviceEndpointPolicyDefinitions?: ServiceEndpointPolicyDefinitionResponse[];
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
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Gets an array of references to the network interface IP configurations using subnet.
         */
        ipConfigurations: IPConfigurationResponse[];
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * The reference of the NetworkSecurityGroup resource.
         */
        networkSecurityGroup?: NetworkSecurityGroupResponse;
        /**
         * The provisioning state of the resource.
         */
        provisioningState?: string;
        /**
         * Gets an array of references to the external resources using subnet.
         */
        resourceNavigationLinks?: ResourceNavigationLinkResponse[];
        /**
         * The reference of the RouteTable resource.
         */
        routeTable?: RouteTableResponse;
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
     * VpnConnection Resource.
     */
    export interface VpnConnectionResponse {
        /**
         * Expected bandwidth in MBPS.
         */
        connectionBandwidthInMbps: number;
        /**
         * The connection status.
         */
        connectionStatus: string;
        /**
         * Egress bytes transferred.
         */
        egressBytesTransferred: number;
        /**
         * EnableBgp flag
         */
        enableBgp?: boolean;
        /**
         * Gets a unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Ingress bytes transferred.
         */
        ingressBytesTransferred: number;
        /**
         * The IPSec Policies to be considered by this connection.
         */
        ipsecPolicies?: IpsecPolicyResponse[];
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * The provisioning state of the resource.
         */
        provisioningState: string;
        /**
         * Id of the connected vpn site.
         */
        remoteVpnSite?: SubResourceResponse;
        /**
         * routing weight for vpn connection.
         */
        routingWeight?: number;
        /**
         * SharedKey for the vpn connection.
         */
        sharedKey?: string;
    }
