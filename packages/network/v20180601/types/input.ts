import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
         * The Private IP allocation method. Possible values are: 'Static' and 'Dynamic'.
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
         * The reference of the subnet resource.
         */
        subnet?: pulumi.Input<SubnetArgs>;
        /**
         * A list of availability zones denoting the IP allocated for the resource needs to come from.
         */
        zones?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Inbound NAT pool of the load balancer.
     */
    export interface InboundNatPoolArgs {
        /**
         * The port used for internal connections on the endpoint. Acceptable values are between 1 and 65535.
         */
        backendPort: pulumi.Input<number>;
        /**
         * Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
         */
        enableFloatingIP?: pulumi.Input<boolean>;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * A reference to frontend IP addresses.
         */
        frontendIPConfiguration?: pulumi.Input<SubResourceArgs>;
        /**
         * The last port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with a load balancer. Acceptable values range between 1 and 65535.
         */
        frontendPortRangeEnd: pulumi.Input<number>;
        /**
         * The first port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with a load balancer. Acceptable values range between 1 and 65534.
         */
        frontendPortRangeStart: pulumi.Input<number>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
         */
        idleTimeoutInMinutes?: pulumi.Input<number>;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * The transport protocol for the endpoint. Possible values are 'Udp' or 'Tcp' or 'All'.
         */
        protocol: pulumi.Input<string | enums.TransportProtocol>;
        /**
         * Gets the provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: pulumi.Input<string>;
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
         * The transport protocol for the endpoint. Possible values are 'Udp' or 'Tcp' or 'All'.
         */
        protocol?: pulumi.Input<string | enums.TransportProtocol>;
        /**
         * Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: pulumi.Input<string>;
    }

    /**
     * Contains the IpTag associated with the public IP address
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
     * SKU of a load balancer
     */
    export interface LoadBalancerSkuArgs {
        /**
         * Name of a load balancer SKU.
         */
        name?: pulumi.Input<string | enums.LoadBalancerSkuName>;
    }

    /**
     * A load balancing rule for a load balancer.
     */
    export interface LoadBalancingRuleArgs {
        /**
         * A reference to a pool of DIPs. Inbound traffic is randomly load balanced across IPs in the backend IPs.
         */
        backendAddressPool?: pulumi.Input<SubResourceArgs>;
        /**
         * The port used for internal connections on the endpoint. Acceptable values are between 0 and 65535. Note that value 0 enables "Any Port"
         */
        backendPort?: pulumi.Input<number>;
        /**
         * Configures SNAT for the VMs in the backend pool to use the publicIP address specified in the frontend of the load balancing rule.
         */
        disableOutboundSnat?: pulumi.Input<boolean>;
        /**
         * Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
         */
        enableFloatingIP?: pulumi.Input<boolean>;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * A reference to frontend IP addresses.
         */
        frontendIPConfiguration?: pulumi.Input<SubResourceArgs>;
        /**
         * The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values are between 0 and 65534. Note that value 0 enables "Any Port"
         */
        frontendPort: pulumi.Input<number>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
         */
        idleTimeoutInMinutes?: pulumi.Input<number>;
        /**
         * The load distribution policy for this rule. Possible values are 'Default', 'SourceIP', and 'SourceIPProtocol'.
         */
        loadDistribution?: pulumi.Input<string | enums.LoadDistribution>;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * The reference of the load balancer probe used by the load balancing rule.
         */
        probe?: pulumi.Input<SubResourceArgs>;
        /**
         * The transport protocol for the endpoint. Possible values are 'Udp' or 'Tcp' or 'All'.
         */
        protocol: pulumi.Input<string | enums.TransportProtocol>;
        /**
         * Gets the provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: pulumi.Input<string>;
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
     * Outbound NAT pool of the load balancer.
     */
    export interface OutboundNatRuleArgs {
        /**
         * The number of outbound ports to be used for NAT.
         */
        allocatedOutboundPorts?: pulumi.Input<number>;
        /**
         * A reference to a pool of DIPs. Outbound traffic is randomly load balanced across IPs in the backend IPs.
         */
        backendAddressPool: pulumi.Input<SubResourceArgs>;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * The Frontend IP addresses of the load balancer.
         */
        frontendIPConfigurations?: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * Gets the provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: pulumi.Input<string>;
    }

    /**
     * A load balancer probe.
     */
    export interface ProbeArgs {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag?: pulumi.Input<string>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The interval, in seconds, for how frequently to probe the endpoint for health status. Typically, the interval is slightly less than half the allocated timeout period (in seconds) which allows two full probes before taking the instance out of rotation. The default value is 15, the minimum value is 5.
         */
        intervalInSeconds?: pulumi.Input<number>;
        /**
         * Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * The number of probes where if no response, will result in stopping further traffic from being delivered to the endpoint. This values allows endpoints to be taken out of rotation faster or slower than the typical times used in Azure.
         */
        numberOfProbes?: pulumi.Input<number>;
        /**
         * The port for communicating the probe. Possible values range from 1 to 65535, inclusive.
         */
        port: pulumi.Input<number>;
        /**
         * The protocol of the end point. Possible values are: 'Http', 'Tcp', or 'Https'. If 'Tcp' is specified, a received ACK is required for the probe to be successful. If 'Http' or 'Https' is specified, a 200 OK response from the specifies URI is required for the probe to be successful.
         */
        protocol: pulumi.Input<string | enums.ProbeProtocol>;
        /**
         * Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: pulumi.Input<string>;
        /**
         * The URI used for requesting health status from the VM. Path is required if a protocol is set to http. Otherwise, it is not allowed. There is no default value.
         */
        requestPath?: pulumi.Input<string>;
    }

    /**
     * Public IP address resource.
     */
    export interface PublicIPAddressArgs {
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
         * The public IP address version. Possible values are: 'IPv4' and 'IPv6'.
         */
        publicIPAddressVersion?: pulumi.Input<string | enums.IPVersion>;
        /**
         * The public IP allocation method. Possible values are: 'Static' and 'Dynamic'.
         */
        publicIPAllocationMethod?: pulumi.Input<string | enums.IPAllocationMethod>;
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
         * The type of Azure hop the packet should be sent to. Possible values are: 'VirtualNetworkGateway', 'VnetLocal', 'Internet', 'VirtualAppliance', and 'None'
         */
        nextHopType: pulumi.Input<string | enums.RouteNextHopType>;
        /**
         * The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
         */
        provisioningState?: pulumi.Input<string>;
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
         * The network traffic is allowed or denied. Possible values are: 'Allow' and 'Deny'.
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
         * The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic. Possible values are: 'Inbound' and 'Outbound'.
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
         * Network protocol this rule applies to. Possible values are 'Tcp', 'Udp', and '*'.
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
         * An array of service endpoints.
         */
        serviceEndpoints?: pulumi.Input<pulumi.Input<ServiceEndpointPropertiesFormatArgs>[]>;
    }
