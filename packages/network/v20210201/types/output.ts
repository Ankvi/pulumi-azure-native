import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Backend Address Pool of an application gateway.
     */
    export interface ApplicationGatewayBackendAddressPoolResponse {
        /**
         * Backend addresses.
         */
        backendAddresses?: ApplicationGatewayBackendAddressResponse[];
        /**
         * Collection of references to IPs defined in network interfaces.
         */
        backendIPConfigurations: NetworkInterfaceIPConfigurationResponse[];
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Name of the backend address pool that is unique within an Application Gateway.
         */
        name?: string;
        /**
         * The provisioning state of the backend address pool resource.
         */
        provisioningState: string;
        /**
         * Type of the resource.
         */
        type: string;
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
         * IP address.
         */
        ipAddress?: string;
    }

    /**
     * IP configuration of an application gateway. Currently 1 public and 1 private IP configuration is allowed.
     */
    export interface ApplicationGatewayIPConfigurationResponse {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Name of the IP configuration that is unique within an Application Gateway.
         */
        name?: string;
        /**
         * The provisioning state of the application gateway IP configuration resource.
         */
        provisioningState: string;
        /**
         * Reference to the subnet resource. A subnet from where application gateway gets its private address.
         */
        subnet?: SubResourceResponse;
        /**
         * Type of the resource.
         */
        type: string;
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
         * The provisioning state of the application security group resource.
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
         * An array of references to IP addresses defined in network interfaces.
         */
        backendIPConfigurations: NetworkInterfaceIPConfigurationResponse[];
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * An array of backend addresses.
         */
        loadBalancerBackendAddresses?: LoadBalancerBackendAddressResponse[];
        /**
         * An array of references to load balancing rules that use this backend address pool.
         */
        loadBalancingRules: SubResourceResponse[];
        /**
         * The location of the backend address pool.
         */
        location?: string;
        /**
         * The name of the resource that is unique within the set of backend address pools used by the load balancer. This name can be used to access the resource.
         */
        name?: string;
        /**
         * A reference to an outbound rule that uses this backend address pool.
         */
        outboundRule: SubResourceResponse;
        /**
         * An array of references to outbound rules that use this backend address pool.
         */
        outboundRules: SubResourceResponse[];
        /**
         * The provisioning state of the backend address pool resource.
         */
        provisioningState: string;
        /**
         * An array of gateway load balancer tunnel interfaces.
         */
        tunnelInterfaces?: GatewayLoadBalancerTunnelInterfaceResponse[];
        /**
         * Type of the resource.
         */
        type: string;
    }

    /**
     * Contains custom Dns resolution configuration from customer.
     */
    export interface CustomDnsConfigPropertiesFormatResponse {
        /**
         * Fqdn that resolves to private endpoint ip address.
         */
        fqdn?: string;
        /**
         * A list of private ip addresses of the private endpoint.
         */
        ipAddresses?: string[];
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
         * Enables DDoS protection on the public IP.
         */
        protectedIP?: boolean;
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
         * The actions permitted to the service upon delegation.
         */
        actions: string[];
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The name of the resource that is unique within a subnet. This name can be used to access the resource.
         */
        name?: string;
        /**
         * The provisioning state of the service delegation resource.
         */
        provisioningState: string;
        /**
         * The name of the service to whom the subnet should be delegated (e.g. Microsoft.Sql/servers).
         */
        serviceName?: string;
        /**
         * Resource type.
         */
        type?: string;
    }

    /**
     * ExtendedLocation complex type.
     */
    export interface ExtendedLocationResponse {
        /**
         * The name of the extended location.
         */
        name?: string;
        /**
         * The type of the extended location.
         */
        type?: string;
    }

    /**
     * Parameters that define the flow log format.
     */
    export interface FlowLogFormatParametersResponse {
        /**
         * The file type of flow log.
         */
        type?: string;
        /**
         * The version (revision) of the flow log.
         */
        version?: number;
    }
    /**
     * flowLogFormatParametersResponseProvideDefaults sets the appropriate defaults for FlowLogFormatParametersResponse
     */
    export function flowLogFormatParametersResponseProvideDefaults(val: FlowLogFormatParametersResponse): FlowLogFormatParametersResponse {
        return {
            ...val,
            version: (val.version) ?? 0,
        };
    }

    /**
     * A flow log resource.
     */
    export interface FlowLogResponse {
        /**
         * Flag to enable/disable flow logging.
         */
        enabled?: boolean;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * Parameters that define the configuration of traffic analytics.
         */
        flowAnalyticsConfiguration?: TrafficAnalyticsPropertiesResponse;
        /**
         * Parameters that define the flow log format.
         */
        format?: FlowLogFormatParametersResponse;
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
         * The provisioning state of the flow log.
         */
        provisioningState: string;
        /**
         * Parameters that define the retention policy for flow log.
         */
        retentionPolicy?: RetentionPolicyParametersResponse;
        /**
         * ID of the storage account which is used to store the flow log.
         */
        storageId: string;
        /**
         * Resource tags.
         */
        tags?: {[key: string]: string};
        /**
         * Guid of network security group to which flow log will be applied.
         */
        targetResourceGuid: string;
        /**
         * ID of network security group to which flow log will be applied.
         */
        targetResourceId: string;
        /**
         * Resource type.
         */
        type: string;
    }
    /**
     * flowLogResponseProvideDefaults sets the appropriate defaults for FlowLogResponse
     */
    export function flowLogResponseProvideDefaults(val: FlowLogResponse): FlowLogResponse {
        return {
            ...val,
            format: (val.format ? flowLogFormatParametersResponseProvideDefaults(val.format) : undefined),
            retentionPolicy: (val.retentionPolicy ? retentionPolicyParametersResponseProvideDefaults(val.retentionPolicy) : undefined),
        };
    }

    /**
     * Frontend IP address of the load balancer.
     */
    export interface FrontendIPConfigurationResponse {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * The reference to gateway load balancer frontend IP.
         */
        gatewayLoadBalancer?: SubResourceResponse;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * An array of references to inbound pools that use this frontend IP.
         */
        inboundNatPools: SubResourceResponse[];
        /**
         * An array of references to inbound rules that use this frontend IP.
         */
        inboundNatRules: SubResourceResponse[];
        /**
         * An array of references to load balancing rules that use this frontend IP.
         */
        loadBalancingRules: SubResourceResponse[];
        /**
         * The name of the resource that is unique within the set of frontend IP configurations used by the load balancer. This name can be used to access the resource.
         */
        name?: string;
        /**
         * An array of references to outbound rules that use this frontend IP.
         */
        outboundRules: SubResourceResponse[];
        /**
         * The private IP address of the IP configuration.
         */
        privateIPAddress?: string;
        /**
         * Whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.
         */
        privateIPAddressVersion?: string;
        /**
         * The Private IP allocation method.
         */
        privateIPAllocationMethod?: string;
        /**
         * The provisioning state of the frontend IP configuration resource.
         */
        provisioningState: string;
        /**
         * The reference to the Public IP resource.
         */
        publicIPAddress?: PublicIPAddressResponse;
        /**
         * The reference to the Public IP Prefix resource.
         */
        publicIPPrefix?: SubResourceResponse;
        /**
         * The reference to the subnet resource.
         */
        subnet?: SubnetResponse;
        /**
         * Type of the resource.
         */
        type: string;
        /**
         * A list of availability zones denoting the IP allocated for the resource needs to come from.
         */
        zones?: string[];
    }
    /**
     * frontendIPConfigurationResponseProvideDefaults sets the appropriate defaults for FrontendIPConfigurationResponse
     */
    export function frontendIPConfigurationResponseProvideDefaults(val: FrontendIPConfigurationResponse): FrontendIPConfigurationResponse {
        return {
            ...val,
            publicIPAddress: (val.publicIPAddress ? publicIPAddressResponseProvideDefaults(val.publicIPAddress) : undefined),
            subnet: (val.subnet ? subnetResponseProvideDefaults(val.subnet) : undefined),
        };
    }

    /**
     * Gateway load balancer tunnel interface of a load balancer backend address pool.
     */
    export interface GatewayLoadBalancerTunnelInterfaceResponse {
        /**
         * Identifier of gateway load balancer tunnel interface.
         */
        identifier?: number;
        /**
         * Port of gateway load balancer tunnel interface.
         */
        port?: number;
        /**
         * Protocol of gateway load balancer tunnel interface.
         */
        protocol?: string;
        /**
         * Traffic type of gateway load balancer tunnel interface.
         */
        type?: string;
    }

    /**
     * IP configuration profile child resource.
     */
    export interface IPConfigurationProfileResponse {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The name of the resource. This name can be used to access the resource.
         */
        name?: string;
        /**
         * The provisioning state of the IP configuration profile resource.
         */
        provisioningState: string;
        /**
         * The reference to the subnet resource to create a container network interface ip configuration.
         */
        subnet?: SubnetResponse;
        /**
         * Sub Resource type.
         */
        type: string;
    }
    /**
     * ipconfigurationProfileResponseProvideDefaults sets the appropriate defaults for IPConfigurationProfileResponse
     */
    export function ipconfigurationProfileResponseProvideDefaults(val: IPConfigurationProfileResponse): IPConfigurationProfileResponse {
        return {
            ...val,
            subnet: (val.subnet ? subnetResponseProvideDefaults(val.subnet) : undefined),
        };
    }

    /**
     * IP configuration.
     */
    export interface IPConfigurationResponse {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
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
         * The provisioning state of the IP configuration resource.
         */
        provisioningState: string;
        /**
         * The reference to the public IP resource.
         */
        publicIPAddress?: PublicIPAddressResponse;
        /**
         * The reference to the subnet resource.
         */
        subnet?: SubnetResponse;
    }
    /**
     * ipconfigurationResponseProvideDefaults sets the appropriate defaults for IPConfigurationResponse
     */
    export function ipconfigurationResponseProvideDefaults(val: IPConfigurationResponse): IPConfigurationResponse {
        return {
            ...val,
            privateIPAllocationMethod: (val.privateIPAllocationMethod) ?? "Dynamic",
            publicIPAddress: (val.publicIPAddress ? publicIPAddressResponseProvideDefaults(val.publicIPAddress) : undefined),
            subnet: (val.subnet ? subnetResponseProvideDefaults(val.subnet) : undefined),
        };
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
        etag: string;
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
         * The name of the resource that is unique within the set of inbound NAT rules used by the load balancer. This name can be used to access the resource.
         */
        name?: string;
        /**
         * The reference to the transport protocol used by the load balancing rule.
         */
        protocol?: string;
        /**
         * The provisioning state of the inbound NAT rule resource.
         */
        provisioningState: string;
        /**
         * Type of the resource.
         */
        type: string;
    }
    /**
     * inboundNatRuleResponseProvideDefaults sets the appropriate defaults for InboundNatRuleResponse
     */
    export function inboundNatRuleResponseProvideDefaults(val: InboundNatRuleResponse): InboundNatRuleResponse {
        return {
            ...val,
            backendIPConfiguration: networkInterfaceIPConfigurationResponseProvideDefaults(val.backendIPConfiguration),
        };
    }

    /**
     * Contains the IpTag associated with the object.
     */
    export interface IpTagResponse {
        /**
         * The IP tag type. Example: FirstPartyUsage.
         */
        ipTagType?: string;
        /**
         * The value of the IP tag associated with the public IP. Example: SQL.
         */
        tag?: string;
    }

    /**
     * Load balancer backend addresses.
     */
    export interface LoadBalancerBackendAddressResponse {
        /**
         * IP Address belonging to the referenced virtual network.
         */
        ipAddress?: string;
        /**
         * Reference to the frontend ip address configuration defined in regional loadbalancer.
         */
        loadBalancerFrontendIPConfiguration?: SubResourceResponse;
        /**
         * Name of the backend address.
         */
        name?: string;
        /**
         * Reference to IP address defined in network interfaces.
         */
        networkInterfaceIPConfiguration: SubResourceResponse;
        /**
         * Reference to an existing subnet.
         */
        subnet?: SubResourceResponse;
        /**
         * Reference to an existing virtual network.
         */
        virtualNetwork?: SubResourceResponse;
    }

    /**
     * Nat Gateway resource.
     */
    export interface NatGatewayResponse {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The idle timeout of the nat gateway.
         */
        idleTimeoutInMinutes?: number;
        /**
         * Resource location.
         */
        location?: string;
        /**
         * Resource name.
         */
        name: string;
        /**
         * The provisioning state of the NAT gateway resource.
         */
        provisioningState: string;
        /**
         * An array of public ip addresses associated with the nat gateway resource.
         */
        publicIpAddresses?: SubResourceResponse[];
        /**
         * An array of public ip prefixes associated with the nat gateway resource.
         */
        publicIpPrefixes?: SubResourceResponse[];
        /**
         * The resource GUID property of the NAT gateway resource.
         */
        resourceGuid: string;
        /**
         * The nat gateway SKU.
         */
        sku?: NatGatewaySkuResponse;
        /**
         * An array of references to the subnets using this nat gateway resource.
         */
        subnets: SubResourceResponse[];
        /**
         * Resource tags.
         */
        tags?: {[key: string]: string};
        /**
         * Resource type.
         */
        type: string;
        /**
         * A list of availability zones denoting the zone in which Nat Gateway should be deployed.
         */
        zones?: string[];
    }

    /**
     * SKU of nat gateway.
     */
    export interface NatGatewaySkuResponse {
        /**
         * Name of Nat Gateway SKU.
         */
        name?: string;
    }

    /**
     * DNS settings of a network interface.
     */
    export interface NetworkInterfaceDnsSettingsResponse {
        /**
         * If the VM that uses this NIC is part of an Availability Set, then this list will have the union of all DNS servers from all NICs that are part of the Availability Set. This property is what is configured on each of those VMs.
         */
        appliedDnsServers: string[];
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
        internalDomainNameSuffix: string;
        /**
         * Fully qualified DNS name supporting internal communications between VMs in the same virtual network.
         */
        internalFqdn: string;
    }

    /**
     * PrivateLinkConnection properties for the network interface.
     */
    export interface NetworkInterfaceIPConfigurationPrivateLinkConnectionPropertiesResponse {
        /**
         * List of FQDNs for current private link connection.
         */
        fqdns: string[];
        /**
         * The group ID for current private link connection.
         */
        groupId: string;
        /**
         * The required member name for current private link connection.
         */
        requiredMemberName: string;
    }

    /**
     * IPConfiguration in a network interface.
     */
    export interface NetworkInterfaceIPConfigurationResponse {
        /**
         * The reference to ApplicationGatewayBackendAddressPool resource.
         */
        applicationGatewayBackendAddressPools?: ApplicationGatewayBackendAddressPoolResponse[];
        /**
         * Application security groups in which the IP configuration is included.
         */
        applicationSecurityGroups?: ApplicationSecurityGroupResponse[];
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * The reference to gateway load balancer frontend IP.
         */
        gatewayLoadBalancer?: SubResourceResponse;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The reference to LoadBalancerBackendAddressPool resource.
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
         * Whether this is a primary customer address on the network interface.
         */
        primary?: boolean;
        /**
         * Private IP address of the IP configuration.
         */
        privateIPAddress?: string;
        /**
         * Whether the specific IP configuration is IPv4 or IPv6. Default is IPv4.
         */
        privateIPAddressVersion?: string;
        /**
         * The private IP address allocation method.
         */
        privateIPAllocationMethod?: string;
        /**
         * PrivateLinkConnection properties for the network interface.
         */
        privateLinkConnectionProperties: NetworkInterfaceIPConfigurationPrivateLinkConnectionPropertiesResponse;
        /**
         * The provisioning state of the network interface IP configuration.
         */
        provisioningState: string;
        /**
         * Public IP address bound to the IP configuration.
         */
        publicIPAddress?: PublicIPAddressResponse;
        /**
         * Subnet bound to the IP configuration.
         */
        subnet?: SubnetResponse;
        /**
         * Resource type.
         */
        type?: string;
        /**
         * The reference to Virtual Network Taps.
         */
        virtualNetworkTaps?: VirtualNetworkTapResponse[];
    }
    /**
     * networkInterfaceIPConfigurationResponseProvideDefaults sets the appropriate defaults for NetworkInterfaceIPConfigurationResponse
     */
    export function networkInterfaceIPConfigurationResponseProvideDefaults(val: NetworkInterfaceIPConfigurationResponse): NetworkInterfaceIPConfigurationResponse {
        return {
            ...val,
            publicIPAddress: (val.publicIPAddress ? publicIPAddressResponseProvideDefaults(val.publicIPAddress) : undefined),
            subnet: (val.subnet ? subnetResponseProvideDefaults(val.subnet) : undefined),
        };
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
         * A reference to the dscp configuration to which the network interface is linked.
         */
        dscpConfiguration: SubResourceResponse;
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
        etag: string;
        /**
         * The extended location of the network interface.
         */
        extendedLocation?: ExtendedLocationResponse;
        /**
         * A list of references to linked BareMetal resources.
         */
        hostedWorkloads: string[];
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
        macAddress: string;
        /**
         * Migration phase of Network Interface resource.
         */
        migrationPhase?: string;
        /**
         * Resource name.
         */
        name: string;
        /**
         * The reference to the NetworkSecurityGroup resource.
         */
        networkSecurityGroup?: NetworkSecurityGroupResponse;
        /**
         * Type of Network Interface resource.
         */
        nicType?: string;
        /**
         * Whether this is a primary network interface on a virtual machine.
         */
        primary: boolean;
        /**
         * A reference to the private endpoint to which the network interface is linked.
         */
        privateEndpoint: PrivateEndpointResponse;
        /**
         * Privatelinkservice of the network interface resource.
         */
        privateLinkService?: PrivateLinkServiceResponse;
        /**
         * The provisioning state of the network interface resource.
         */
        provisioningState: string;
        /**
         * The resource GUID property of the network interface resource.
         */
        resourceGuid: string;
        /**
         * Resource tags.
         */
        tags?: {[key: string]: string};
        /**
         * A list of TapConfigurations of the network interface.
         */
        tapConfigurations: NetworkInterfaceTapConfigurationResponse[];
        /**
         * Resource type.
         */
        type: string;
        /**
         * The reference to a virtual machine.
         */
        virtualMachine: SubResourceResponse;
        /**
         * WorkloadType of the NetworkInterface for BareMetal resources
         */
        workloadType?: string;
    }
    /**
     * networkInterfaceResponseProvideDefaults sets the appropriate defaults for NetworkInterfaceResponse
     */
    export function networkInterfaceResponseProvideDefaults(val: NetworkInterfaceResponse): NetworkInterfaceResponse {
        return {
            ...val,
            privateEndpoint: privateEndpointResponseProvideDefaults(val.privateEndpoint),
        };
    }

    /**
     * Tap configuration in a Network Interface.
     */
    export interface NetworkInterfaceTapConfigurationResponse {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * The provisioning state of the network interface tap configuration resource.
         */
        provisioningState: string;
        /**
         * Sub Resource type.
         */
        type: string;
        /**
         * The reference to the Virtual Network Tap resource.
         */
        virtualNetworkTap?: VirtualNetworkTapResponse;
    }
    /**
     * networkInterfaceTapConfigurationResponseProvideDefaults sets the appropriate defaults for NetworkInterfaceTapConfigurationResponse
     */
    export function networkInterfaceTapConfigurationResponseProvideDefaults(val: NetworkInterfaceTapConfigurationResponse): NetworkInterfaceTapConfigurationResponse {
        return {
            ...val,
            virtualNetworkTap: (val.virtualNetworkTap ? virtualNetworkTapResponseProvideDefaults(val.virtualNetworkTap) : undefined),
        };
    }

    /**
     * NetworkSecurityGroup resource.
     */
    export interface NetworkSecurityGroupResponse {
        /**
         * The default security rules of network security group.
         */
        defaultSecurityRules: SecurityRuleResponse[];
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * A collection of references to flow log resources.
         */
        flowLogs: FlowLogResponse[];
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
         * The provisioning state of the network security group resource.
         */
        provisioningState: string;
        /**
         * The resource GUID property of the network security group resource.
         */
        resourceGuid: string;
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
     * PrivateDnsZoneConfig resource.
     */
    export interface PrivateDnsZoneConfigResponse {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * The id of the privateDnsZoneConfig.
         */
        id: string;
        /**
         * Name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * The resource id of the private dns zone.
         */
        privateDnsZoneId?: string;
        /**
         * The provisioning state of the private dns zone group resource.
         */
        provisioningState: string;
        /**
         * A collection of information regarding a recordSet, holding information to identify private resources.
         */
        recordSets: RecordSetResponse[];
        /**
         * Type of resource. Will be specified as private dns zone configurations.
         */
        type: string;
    }

    /**
     * PrivateEndpointConnection resource.
     */
    export interface PrivateEndpointConnectionResponse {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The consumer link id.
         */
        linkIdentifier: string;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * The resource of private end point.
         */
        privateEndpoint: PrivateEndpointResponse;
        /**
         * A collection of information about the state of the connection between service consumer and provider.
         */
        privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateResponse;
        /**
         * The provisioning state of the private endpoint connection resource.
         */
        provisioningState: string;
        /**
         * The resource type.
         */
        type: string;
    }
    /**
     * privateEndpointConnectionResponseProvideDefaults sets the appropriate defaults for PrivateEndpointConnectionResponse
     */
    export function privateEndpointConnectionResponseProvideDefaults(val: PrivateEndpointConnectionResponse): PrivateEndpointConnectionResponse {
        return {
            ...val,
            privateEndpoint: privateEndpointResponseProvideDefaults(val.privateEndpoint),
        };
    }

    /**
     * Private endpoint resource.
     */
    export interface PrivateEndpointResponse {
        /**
         * An array of custom dns configurations.
         */
        customDnsConfigs?: CustomDnsConfigPropertiesFormatResponse[];
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * The extended location of the load balancer.
         */
        extendedLocation?: ExtendedLocationResponse;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Resource location.
         */
        location?: string;
        /**
         * A grouping of information about the connection to the remote resource. Used when the network admin does not have access to approve connections to the remote resource.
         */
        manualPrivateLinkServiceConnections?: PrivateLinkServiceConnectionResponse[];
        /**
         * Resource name.
         */
        name: string;
        /**
         * An array of references to the network interfaces created for this private endpoint.
         */
        networkInterfaces: NetworkInterfaceResponse[];
        /**
         * A grouping of information about the connection to the remote resource.
         */
        privateLinkServiceConnections?: PrivateLinkServiceConnectionResponse[];
        /**
         * The provisioning state of the private endpoint resource.
         */
        provisioningState: string;
        /**
         * The resource id of private endpoint.
         */
        resourceGuid?: string;
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
     * privateEndpointResponseProvideDefaults sets the appropriate defaults for PrivateEndpointResponse
     */
    export function privateEndpointResponseProvideDefaults(val: PrivateEndpointResponse): PrivateEndpointResponse {
        return {
            ...val,
            subnet: (val.subnet ? subnetResponseProvideDefaults(val.subnet) : undefined),
        };
    }

    /**
     * PrivateLinkServiceConnection resource.
     */
    export interface PrivateLinkServiceConnectionResponse {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * The ID(s) of the group(s) obtained from the remote resource that this private endpoint should connect to.
         */
        groupIds?: string[];
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * A collection of read-only information about the state of the connection to the remote resource.
         */
        privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateResponse;
        /**
         * The resource id of private link service.
         */
        privateLinkServiceId?: string;
        /**
         * The provisioning state of the private link service connection resource.
         */
        provisioningState: string;
        /**
         * A message passed to the owner of the remote resource with this connection request. Restricted to 140 chars.
         */
        requestMessage?: string;
        /**
         * The location for the resolved private link service.
         */
        resolvedPrivateLinkServiceLocation?: string;
        /**
         * The resource type.
         */
        type: string;
    }

    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    export interface PrivateLinkServiceConnectionStateResponse {
        /**
         * A message indicating if changes on the service provider require any updates on the consumer.
         */
        actionsRequired?: string;
        /**
         * The reason for approval/rejection of the connection.
         */
        description?: string;
        /**
         * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
         */
        status?: string;
    }

    /**
     * The private link service ip configuration.
     */
    export interface PrivateLinkServiceIpConfigurationResponse {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The name of private link service ip configuration.
         */
        name?: string;
        /**
         * Whether the ip configuration is primary or not.
         */
        primary?: boolean;
        /**
         * The private IP address of the IP configuration.
         */
        privateIPAddress?: string;
        /**
         * Whether the specific IP configuration is IPv4 or IPv6. Default is IPv4.
         */
        privateIPAddressVersion?: string;
        /**
         * The private IP address allocation method.
         */
        privateIPAllocationMethod?: string;
        /**
         * The provisioning state of the private link service IP configuration resource.
         */
        provisioningState: string;
        /**
         * The reference to the subnet resource.
         */
        subnet?: SubnetResponse;
        /**
         * The resource type.
         */
        type: string;
    }
    /**
     * privateLinkServiceIpConfigurationResponseProvideDefaults sets the appropriate defaults for PrivateLinkServiceIpConfigurationResponse
     */
    export function privateLinkServiceIpConfigurationResponseProvideDefaults(val: PrivateLinkServiceIpConfigurationResponse): PrivateLinkServiceIpConfigurationResponse {
        return {
            ...val,
            subnet: (val.subnet ? subnetResponseProvideDefaults(val.subnet) : undefined),
        };
    }

    /**
     * The auto-approval list of the private link service.
     */
    export interface PrivateLinkServicePropertiesResponseAutoApproval {
        /**
         * The list of subscriptions.
         */
        subscriptions?: string[];
    }

    /**
     * The visibility list of the private link service.
     */
    export interface PrivateLinkServicePropertiesResponseVisibility {
        /**
         * The list of subscriptions.
         */
        subscriptions?: string[];
    }

    /**
     * Private link service resource.
     */
    export interface PrivateLinkServiceResponse {
        /**
         * The alias of the private link service.
         */
        alias: string;
        /**
         * The auto-approval list of the private link service.
         */
        autoApproval?: PrivateLinkServicePropertiesResponseAutoApproval;
        /**
         * Whether the private link service is enabled for proxy protocol or not.
         */
        enableProxyProtocol?: boolean;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * The extended location of the load balancer.
         */
        extendedLocation?: ExtendedLocationResponse;
        /**
         * The list of Fqdn.
         */
        fqdns?: string[];
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * An array of private link service IP configurations.
         */
        ipConfigurations?: PrivateLinkServiceIpConfigurationResponse[];
        /**
         * An array of references to the load balancer IP configurations.
         */
        loadBalancerFrontendIpConfigurations?: FrontendIPConfigurationResponse[];
        /**
         * Resource location.
         */
        location?: string;
        /**
         * Resource name.
         */
        name: string;
        /**
         * An array of references to the network interfaces created for this private link service.
         */
        networkInterfaces: NetworkInterfaceResponse[];
        /**
         * An array of list about connections to the private endpoint.
         */
        privateEndpointConnections: PrivateEndpointConnectionResponse[];
        /**
         * The provisioning state of the private link service resource.
         */
        provisioningState: string;
        /**
         * The resource id of private link service.
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
         * The visibility list of the private link service.
         */
        visibility?: PrivateLinkServicePropertiesResponseVisibility;
    }

    /**
     * Contains FQDN of the DNS record associated with the public IP address.
     */
    export interface PublicIPAddressDnsSettingsResponse {
        /**
         * The domain name label. The concatenation of the domain name label and the regionalized DNS zone make up the fully qualified domain name associated with the public IP address. If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system.
         */
        domainNameLabel?: string;
        /**
         * The Fully Qualified Domain Name of the A DNS record associated with the public IP. This is the concatenation of the domainNameLabel and the regionalized DNS zone.
         */
        fqdn?: string;
        /**
         * The reverse FQDN. A user-visible, fully qualified domain name that resolves to this public IP address. If the reverseFqdn is specified, then a PTR DNS record is created pointing from the IP address in the in-addr.arpa domain to the reverse FQDN.
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
         * Specify what happens to the public IP address when the VM using it is deleted
         */
        deleteOption?: string;
        /**
         * The FQDN of the DNS record associated with the public IP address.
         */
        dnsSettings?: PublicIPAddressDnsSettingsResponse;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * The extended location of the public ip address.
         */
        extendedLocation?: ExtendedLocationResponse;
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
         * The linked public IP address of the public IP address resource.
         */
        linkedPublicIPAddress?: PublicIPAddressResponse;
        /**
         * Resource location.
         */
        location?: string;
        /**
         * Migration phase of Public IP Address.
         */
        migrationPhase?: string;
        /**
         * Resource name.
         */
        name: string;
        /**
         * The NatGateway for the Public IP address.
         */
        natGateway?: NatGatewayResponse;
        /**
         * The provisioning state of the public IP address resource.
         */
        provisioningState: string;
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
         * The resource GUID property of the public IP address resource.
         */
        resourceGuid: string;
        /**
         * The service public IP address of the public IP address resource.
         */
        servicePublicIPAddress?: PublicIPAddressResponse;
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
     * publicIPAddressResponseProvideDefaults sets the appropriate defaults for PublicIPAddressResponse
     */
    export function publicIPAddressResponseProvideDefaults(val: PublicIPAddressResponse): PublicIPAddressResponse {
        return {
            ...val,
            ipConfiguration: ipconfigurationResponseProvideDefaults(val.ipConfiguration),
            linkedPublicIPAddress: (val.linkedPublicIPAddress ? publicIPAddressResponseProvideDefaults(val.linkedPublicIPAddress) : undefined),
            servicePublicIPAddress: (val.servicePublicIPAddress ? publicIPAddressResponseProvideDefaults(val.servicePublicIPAddress) : undefined),
        };
    }

    /**
     * SKU of a public IP address.
     */
    export interface PublicIPAddressSkuResponse {
        /**
         * Name of a public IP address SKU.
         */
        name?: string;
        /**
         * Tier of a public IP address SKU.
         */
        tier?: string;
    }

    /**
     * A collective group of information about the record set information.
     */
    export interface RecordSetResponse {
        /**
         * Fqdn that resolves to private endpoint ip address.
         */
        fqdn?: string;
        /**
         * The private ip address of the private endpoint.
         */
        ipAddresses?: string[];
        /**
         * The provisioning state of the recordset.
         */
        provisioningState: string;
        /**
         * Recordset name.
         */
        recordSetName?: string;
        /**
         * Resource record type.
         */
        recordType?: string;
        /**
         * Recordset time to live.
         */
        ttl?: number;
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
        id: string;
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
         * The provisioning state of the resource navigation link resource.
         */
        provisioningState: string;
        /**
         * Resource type.
         */
        type: string;
    }

    /**
     * Parameters that define the retention policy for flow log.
     */
    export interface RetentionPolicyParametersResponse {
        /**
         * Number of days to retain flow log records.
         */
        days?: number;
        /**
         * Flag to enable/disable retention.
         */
        enabled?: boolean;
    }
    /**
     * retentionPolicyParametersResponseProvideDefaults sets the appropriate defaults for RetentionPolicyParametersResponse
     */
    export function retentionPolicyParametersResponseProvideDefaults(val: RetentionPolicyParametersResponse): RetentionPolicyParametersResponse {
        return {
            ...val,
            days: (val.days) ?? 0,
            enabled: (val.enabled) ?? false,
        };
    }

    /**
     * Route resource.
     */
    export interface RouteResponse {
        /**
         * The destination CIDR to which the route applies.
         */
        addressPrefix?: string;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * A value indicating whether this route overrides overlapping BGP routes regardless of LPM.
         */
        hasBgpOverride?: boolean;
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
         * The provisioning state of the route resource.
         */
        provisioningState: string;
        /**
         * The type of the resource.
         */
        type?: string;
    }

    /**
     * Route table resource.
     */
    export interface RouteTableResponse {
        /**
         * Whether to disable the routes learned by BGP on that route table. True means disable.
         */
        disableBgpRoutePropagation?: boolean;
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
         * The provisioning state of the route table resource.
         */
        provisioningState: string;
        /**
         * The resource GUID property of the route table.
         */
        resourceGuid: string;
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
        etag: string;
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
         * Network protocol this rule applies to.
         */
        protocol: string;
        /**
         * The provisioning state of the security rule resource.
         */
        provisioningState: string;
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
        /**
         * The type of the resource.
         */
        type?: string;
    }

    /**
     * ServiceAssociationLink resource.
     */
    export interface ServiceAssociationLinkResponse {
        /**
         * If true, the resource can be deleted.
         */
        allowDelete?: boolean;
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
         * A list of locations.
         */
        locations?: string[];
        /**
         * Name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * The provisioning state of the service association link resource.
         */
        provisioningState: string;
        /**
         * Resource type.
         */
        type: string;
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
        etag: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * The provisioning state of the service endpoint policy definition resource.
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
        etag: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Kind of service endpoint policy. This is metadata used for the Azure portal experience.
         */
        kind: string;
        /**
         * Resource location.
         */
        location?: string;
        /**
         * Resource name.
         */
        name: string;
        /**
         * The provisioning state of the service endpoint policy resource.
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
         * The provisioning state of the service endpoint resource.
         */
        provisioningState: string;
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
         * List of address prefixes for the subnet.
         */
        addressPrefixes?: string[];
        /**
         * Application gateway IP configurations of virtual network resource.
         */
        applicationGatewayIpConfigurations?: ApplicationGatewayIPConfigurationResponse[];
        /**
         * An array of references to the delegations on the subnet.
         */
        delegations?: DelegationResponse[];
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Array of IpAllocation which reference this subnet.
         */
        ipAllocations?: SubResourceResponse[];
        /**
         * Array of IP configuration profiles which reference this subnet.
         */
        ipConfigurationProfiles: IPConfigurationProfileResponse[];
        /**
         * An array of references to the network interface IP configurations using subnet.
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
         * The reference to the NetworkSecurityGroup resource.
         */
        networkSecurityGroup?: NetworkSecurityGroupResponse;
        /**
         * Enable or Disable apply network policies on private end point in the subnet.
         */
        privateEndpointNetworkPolicies?: string;
        /**
         * An array of references to private endpoints.
         */
        privateEndpoints: PrivateEndpointResponse[];
        /**
         * Enable or Disable apply network policies on private link service in the subnet.
         */
        privateLinkServiceNetworkPolicies?: string;
        /**
         * The provisioning state of the subnet resource.
         */
        provisioningState: string;
        /**
         * A read-only string identifying the intention of use for this subnet based on delegations and other user-defined properties.
         */
        purpose: string;
        /**
         * An array of references to the external resources using subnet.
         */
        resourceNavigationLinks: ResourceNavigationLinkResponse[];
        /**
         * The reference to the RouteTable resource.
         */
        routeTable?: RouteTableResponse;
        /**
         * An array of references to services injecting into this subnet.
         */
        serviceAssociationLinks: ServiceAssociationLinkResponse[];
        /**
         * An array of service endpoint policies.
         */
        serviceEndpointPolicies?: ServiceEndpointPolicyResponse[];
        /**
         * An array of service endpoints.
         */
        serviceEndpoints?: ServiceEndpointPropertiesFormatResponse[];
        /**
         * Resource type.
         */
        type?: string;
    }
    /**
     * subnetResponseProvideDefaults sets the appropriate defaults for SubnetResponse
     */
    export function subnetResponseProvideDefaults(val: SubnetResponse): SubnetResponse {
        return {
            ...val,
            privateEndpointNetworkPolicies: (val.privateEndpointNetworkPolicies) ?? "Enabled",
            privateLinkServiceNetworkPolicies: (val.privateLinkServiceNetworkPolicies) ?? "Enabled",
        };
    }

    /**
     * Parameters that define the configuration of traffic analytics.
     */
    export interface TrafficAnalyticsConfigurationPropertiesResponse {
        /**
         * Flag to enable/disable traffic analytics.
         */
        enabled?: boolean;
        /**
         * The interval in minutes which would decide how frequently TA service should do flow analytics.
         */
        trafficAnalyticsInterval?: number;
        /**
         * The resource guid of the attached workspace.
         */
        workspaceId?: string;
        /**
         * The location of the attached workspace.
         */
        workspaceRegion?: string;
        /**
         * Resource Id of the attached workspace.
         */
        workspaceResourceId?: string;
    }

    /**
     * Parameters that define the configuration of traffic analytics.
     */
    export interface TrafficAnalyticsPropertiesResponse {
        /**
         * Parameters that define the configuration of traffic analytics.
         */
        networkWatcherFlowAnalyticsConfiguration?: TrafficAnalyticsConfigurationPropertiesResponse;
    }

    /**
     * Virtual Network Tap resource.
     */
    export interface VirtualNetworkTapResponse {
        /**
         * The reference to the private IP address on the internal Load Balancer that will receive the tap.
         */
        destinationLoadBalancerFrontEndIPConfiguration?: FrontendIPConfigurationResponse;
        /**
         * The reference to the private IP Address of the collector nic that will receive the tap.
         */
        destinationNetworkInterfaceIPConfiguration?: NetworkInterfaceIPConfigurationResponse;
        /**
         * The VXLAN destination port that will receive the tapped traffic.
         */
        destinationPort?: number;
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
         * Specifies the list of resource IDs for the network interface IP configuration that needs to be tapped.
         */
        networkInterfaceTapConfigurations: NetworkInterfaceTapConfigurationResponse[];
        /**
         * The provisioning state of the virtual network tap resource.
         */
        provisioningState: string;
        /**
         * The resource GUID property of the virtual network tap resource.
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
     * virtualNetworkTapResponseProvideDefaults sets the appropriate defaults for VirtualNetworkTapResponse
     */
    export function virtualNetworkTapResponseProvideDefaults(val: VirtualNetworkTapResponse): VirtualNetworkTapResponse {
        return {
            ...val,
            destinationLoadBalancerFrontEndIPConfiguration: (val.destinationLoadBalancerFrontEndIPConfiguration ? frontendIPConfigurationResponseProvideDefaults(val.destinationLoadBalancerFrontEndIPConfiguration) : undefined),
            destinationNetworkInterfaceIPConfiguration: (val.destinationNetworkInterfaceIPConfiguration ? networkInterfaceIPConfigurationResponseProvideDefaults(val.destinationNetworkInterfaceIPConfiguration) : undefined),
        };
    }
