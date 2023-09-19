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
        outboundNatRule: SubResourceResponse;
        /**
         * Get provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
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
        outboundNatRules: SubResourceResponse[];
        /**
         * The private IP address of the IP configuration.
         */
        privateIPAddress?: string;
        /**
         * The Private IP allocation method. Possible values are: 'Static' and 'Dynamic'.
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
         * The reference of the subnet resource.
         */
        subnet?: SubnetResponse;
        /**
         * A list of availability zones denoting the IP allocated for the resource needs to come from.
         */
        zones?: string[];
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
     * Inbound NAT pool of the load balancer.
     */
    export interface InboundNatPoolResponse {
        /**
         * The port used for internal connections on the endpoint. Acceptable values are between 1 and 65535.
         */
        backendPort: number;
        /**
         * Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
         */
        enableFloatingIP?: boolean;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * A reference to frontend IP addresses.
         */
        frontendIPConfiguration?: SubResourceResponse;
        /**
         * The last port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with a load balancer. Acceptable values range between 1 and 65535.
         */
        frontendPortRangeEnd: number;
        /**
         * The first port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with a load balancer. Acceptable values range between 1 and 65534.
         */
        frontendPortRangeStart: number;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
         */
        idleTimeoutInMinutes?: number;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * The transport protocol for the endpoint. Possible values are 'Udp' or 'Tcp' or 'All'.
         */
        protocol: string;
        /**
         * Gets the provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
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
     * Contains the IpTag associated with the public IP address
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
     * SKU of a load balancer
     */
    export interface LoadBalancerSkuResponse {
        /**
         * Name of a load balancer SKU.
         */
        name?: string;
    }

    /**
     * A load balancing rule for a load balancer.
     */
    export interface LoadBalancingRuleResponse {
        /**
         * A reference to a pool of DIPs. Inbound traffic is randomly load balanced across IPs in the backend IPs.
         */
        backendAddressPool?: SubResourceResponse;
        /**
         * The port used for internal connections on the endpoint. Acceptable values are between 0 and 65535. Note that value 0 enables "Any Port"
         */
        backendPort?: number;
        /**
         * Configures SNAT for the VMs in the backend pool to use the publicIP address specified in the frontend of the load balancing rule.
         */
        disableOutboundSnat?: boolean;
        /**
         * Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
         */
        enableFloatingIP?: boolean;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * A reference to frontend IP addresses.
         */
        frontendIPConfiguration?: SubResourceResponse;
        /**
         * The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values are between 0 and 65534. Note that value 0 enables "Any Port"
         */
        frontendPort: number;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
         */
        idleTimeoutInMinutes?: number;
        /**
         * The load distribution policy for this rule. Possible values are 'Default', 'SourceIP', and 'SourceIPProtocol'.
         */
        loadDistribution?: string;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * The reference of the load balancer probe used by the load balancing rule.
         */
        probe?: SubResourceResponse;
        /**
         * The transport protocol for the endpoint. Possible values are 'Udp' or 'Tcp' or 'All'.
         */
        protocol: string;
        /**
         * Gets the provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
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
     * Outbound NAT pool of the load balancer.
     */
    export interface OutboundNatRuleResponse {
        /**
         * The number of outbound ports to be used for NAT.
         */
        allocatedOutboundPorts?: number;
        /**
         * A reference to a pool of DIPs. Outbound traffic is randomly load balanced across IPs in the backend IPs.
         */
        backendAddressPool: SubResourceResponse;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * The Frontend IP addresses of the load balancer.
         */
        frontendIPConfigurations?: SubResourceResponse[];
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * Gets the provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
    }

    /**
     * A load balancer probe.
     */
    export interface ProbeResponse {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The interval, in seconds, for how frequently to probe the endpoint for health status. Typically, the interval is slightly less than half the allocated timeout period (in seconds) which allows two full probes before taking the instance out of rotation. The default value is 15, the minimum value is 5.
         */
        intervalInSeconds?: number;
        /**
         * The load balancer rules that use this probe.
         */
        loadBalancingRules: SubResourceResponse[];
        /**
         * Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * The number of probes where if no response, will result in stopping further traffic from being delivered to the endpoint. This values allows endpoints to be taken out of rotation faster or slower than the typical times used in Azure.
         */
        numberOfProbes?: number;
        /**
         * The port for communicating the probe. Possible values range from 1 to 65535, inclusive.
         */
        port: number;
        /**
         * The protocol of the end point. Possible values are: 'Http', 'Tcp', or 'Https'. If 'Tcp' is specified, a received ACK is required for the probe to be successful. If 'Http' or 'Https' is specified, a 200 OK response from the specifies URI is required for the probe to be successful.
         */
        protocol: string;
        /**
         * Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: string;
        /**
         * The URI used for requesting health status from the VM. Path is required if a protocol is set to http. Otherwise, it is not allowed. There is no default value.
         */
        requestPath?: string;
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
         * An array of service endpoints.
         */
        serviceEndpoints?: ServiceEndpointPropertiesFormatResponse[];
    }
