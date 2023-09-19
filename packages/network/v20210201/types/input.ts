import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * IP configuration of an application gateway. Currently 1 public and 1 private IP configuration is allowed.
     */
    export interface ApplicationGatewayIPConfigurationArgs {
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Name of the IP configuration that is unique within an Application Gateway.
         */
        name?: pulumi.Input<string>;
        /**
         * Reference to the subnet resource. A subnet from where application gateway gets its private address.
         */
        subnet?: pulumi.Input<SubResourceArgs>;
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
     * Contains custom Dns resolution configuration from customer.
     */
    export interface CustomDnsConfigPropertiesFormatArgs {
        /**
         * Fqdn that resolves to private endpoint ip address.
         */
        fqdn?: pulumi.Input<string>;
        /**
         * A list of private ip addresses of the private endpoint.
         */
        ipAddresses?: pulumi.Input<pulumi.Input<string>[]>;
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
         * Enables DDoS protection on the public IP.
         */
        protectedIP?: pulumi.Input<boolean>;
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
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The name of the resource that is unique within a subnet. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * The name of the service to whom the subnet should be delegated (e.g. Microsoft.Sql/servers).
         */
        serviceName?: pulumi.Input<string>;
        /**
         * Resource type.
         */
        type?: pulumi.Input<string>;
    }

    /**
     * ExtendedLocation complex type.
     */
    export interface ExtendedLocationArgs {
        /**
         * The name of the extended location.
         */
        name?: pulumi.Input<string>;
        /**
         * The type of the extended location.
         */
        type?: pulumi.Input<string | enums.ExtendedLocationTypes>;
    }

    /**
     * Frontend IP address of the load balancer.
     */
    export interface FrontendIPConfigurationArgs {
        /**
         * The reference to gateway load balancer frontend IP.
         */
        gatewayLoadBalancer?: pulumi.Input<SubResourceArgs>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The name of the resource that is unique within the set of frontend IP configurations used by the load balancer. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * The private IP address of the IP configuration.
         */
        privateIPAddress?: pulumi.Input<string>;
        /**
         * Whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.
         */
        privateIPAddressVersion?: pulumi.Input<string | enums.IPVersion>;
        /**
         * The Private IP allocation method.
         */
        privateIPAllocationMethod?: pulumi.Input<string | enums.IPAllocationMethod>;
        /**
         * The reference to the Public IP resource.
         */
        publicIPAddress?: pulumi.Input<PublicIPAddressArgs>;
        /**
         * The reference to the Public IP Prefix resource.
         */
        publicIPPrefix?: pulumi.Input<SubResourceArgs>;
        /**
         * The reference to the subnet resource.
         */
        subnet?: pulumi.Input<SubnetArgs>;
        /**
         * A list of availability zones denoting the IP allocated for the resource needs to come from.
         */
        zones?: pulumi.Input<pulumi.Input<string>[]>;
    }
    /**
     * frontendIPConfigurationArgsProvideDefaults sets the appropriate defaults for FrontendIPConfigurationArgs
     */
    export function frontendIPConfigurationArgsProvideDefaults(val: FrontendIPConfigurationArgs): FrontendIPConfigurationArgs {
        return {
            ...val,
            subnet: (val.subnet ? pulumi.output(val.subnet).apply(subnetArgsProvideDefaults) : undefined),
        };
    }

    /**
     * Contains the IpTag associated with the object.
     */
    export interface IpTagArgs {
        /**
         * The IP tag type. Example: FirstPartyUsage.
         */
        ipTagType?: pulumi.Input<string>;
        /**
         * The value of the IP tag associated with the public IP. Example: SQL.
         */
        tag?: pulumi.Input<string>;
    }

    /**
     * Nat Gateway resource.
     */
    export interface NatGatewayArgs {
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The idle timeout of the nat gateway.
         */
        idleTimeoutInMinutes?: pulumi.Input<number>;
        /**
         * Resource location.
         */
        location?: pulumi.Input<string>;
        /**
         * An array of public ip addresses associated with the nat gateway resource.
         */
        publicIpAddresses?: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
        /**
         * An array of public ip prefixes associated with the nat gateway resource.
         */
        publicIpPrefixes?: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
        /**
         * The nat gateway SKU.
         */
        sku?: pulumi.Input<NatGatewaySkuArgs>;
        /**
         * Resource tags.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * A list of availability zones denoting the zone in which Nat Gateway should be deployed.
         */
        zones?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * SKU of nat gateway.
     */
    export interface NatGatewaySkuArgs {
        /**
         * Name of Nat Gateway SKU.
         */
        name?: pulumi.Input<string | enums.NatGatewaySkuName>;
    }

    /**
     * NetworkSecurityGroup resource.
     */
    export interface NetworkSecurityGroupArgs {
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Resource location.
         */
        location?: pulumi.Input<string>;
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
     * PrivateDnsZoneConfig resource.
     */
    export interface PrivateDnsZoneConfigArgs {
        /**
         * Name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * The resource id of the private dns zone.
         */
        privateDnsZoneId?: pulumi.Input<string>;
    }

    /**
     * PrivateLinkServiceConnection resource.
     */
    export interface PrivateLinkServiceConnectionArgs {
        /**
         * The ID(s) of the group(s) obtained from the remote resource that this private endpoint should connect to.
         */
        groupIds?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * A collection of read-only information about the state of the connection to the remote resource.
         */
        privateLinkServiceConnectionState?: pulumi.Input<PrivateLinkServiceConnectionStateArgs>;
        /**
         * The resource id of private link service.
         */
        privateLinkServiceId?: pulumi.Input<string>;
        /**
         * A message passed to the owner of the remote resource with this connection request. Restricted to 140 chars.
         */
        requestMessage?: pulumi.Input<string>;
        /**
         * The location for the resolved private link service.
         */
        resolvedPrivateLinkServiceLocation?: pulumi.Input<string>;
    }

    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    export interface PrivateLinkServiceConnectionStateArgs {
        /**
         * A message indicating if changes on the service provider require any updates on the consumer.
         */
        actionsRequired?: pulumi.Input<string>;
        /**
         * The reason for approval/rejection of the connection.
         */
        description?: pulumi.Input<string>;
        /**
         * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
         */
        status?: pulumi.Input<string>;
    }

    /**
     * The private link service ip configuration.
     */
    export interface PrivateLinkServiceIpConfigurationArgs {
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The name of private link service ip configuration.
         */
        name?: pulumi.Input<string>;
        /**
         * Whether the ip configuration is primary or not.
         */
        primary?: pulumi.Input<boolean>;
        /**
         * The private IP address of the IP configuration.
         */
        privateIPAddress?: pulumi.Input<string>;
        /**
         * Whether the specific IP configuration is IPv4 or IPv6. Default is IPv4.
         */
        privateIPAddressVersion?: pulumi.Input<string | enums.IPVersion>;
        /**
         * The private IP address allocation method.
         */
        privateIPAllocationMethod?: pulumi.Input<string | enums.IPAllocationMethod>;
        /**
         * The reference to the subnet resource.
         */
        subnet?: pulumi.Input<SubnetArgs>;
    }
    /**
     * privateLinkServiceIpConfigurationArgsProvideDefaults sets the appropriate defaults for PrivateLinkServiceIpConfigurationArgs
     */
    export function privateLinkServiceIpConfigurationArgsProvideDefaults(val: PrivateLinkServiceIpConfigurationArgs): PrivateLinkServiceIpConfigurationArgs {
        return {
            ...val,
            subnet: (val.subnet ? pulumi.output(val.subnet).apply(subnetArgsProvideDefaults) : undefined),
        };
    }

    /**
     * The auto-approval list of the private link service.
     */
    export interface PrivateLinkServicePropertiesAutoApprovalArgs {
        /**
         * The list of subscriptions.
         */
        subscriptions?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The visibility list of the private link service.
     */
    export interface PrivateLinkServicePropertiesVisibilityArgs {
        /**
         * The list of subscriptions.
         */
        subscriptions?: pulumi.Input<pulumi.Input<string>[]>;
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
         * Specify what happens to the public IP address when the VM using it is deleted
         */
        deleteOption?: pulumi.Input<string | enums.DeleteOptions>;
        /**
         * The FQDN of the DNS record associated with the public IP address.
         */
        dnsSettings?: pulumi.Input<PublicIPAddressDnsSettingsArgs>;
        /**
         * The extended location of the public ip address.
         */
        extendedLocation?: pulumi.Input<ExtendedLocationArgs>;
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
         * The linked public IP address of the public IP address resource.
         */
        linkedPublicIPAddress?: pulumi.Input<PublicIPAddressArgs>;
        /**
         * Resource location.
         */
        location?: pulumi.Input<string>;
        /**
         * Migration phase of Public IP Address.
         */
        migrationPhase?: pulumi.Input<string | enums.PublicIPAddressMigrationPhase>;
        /**
         * The NatGateway for the Public IP address.
         */
        natGateway?: pulumi.Input<NatGatewayArgs>;
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
         * The service public IP address of the public IP address resource.
         */
        servicePublicIPAddress?: pulumi.Input<PublicIPAddressArgs>;
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
     * Contains FQDN of the DNS record associated with the public IP address.
     */
    export interface PublicIPAddressDnsSettingsArgs {
        /**
         * The domain name label. The concatenation of the domain name label and the regionalized DNS zone make up the fully qualified domain name associated with the public IP address. If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system.
         */
        domainNameLabel?: pulumi.Input<string>;
        /**
         * The Fully Qualified Domain Name of the A DNS record associated with the public IP. This is the concatenation of the domainNameLabel and the regionalized DNS zone.
         */
        fqdn?: pulumi.Input<string>;
        /**
         * The reverse FQDN. A user-visible, fully qualified domain name that resolves to this public IP address. If the reverseFqdn is specified, then a PTR DNS record is created pointing from the IP address in the in-addr.arpa domain to the reverse FQDN.
         */
        reverseFqdn?: pulumi.Input<string>;
    }

    /**
     * SKU of a public IP address.
     */
    export interface PublicIPAddressSkuArgs {
        /**
         * Name of a public IP address SKU.
         */
        name?: pulumi.Input<string | enums.PublicIPAddressSkuName>;
        /**
         * Tier of a public IP address SKU.
         */
        tier?: pulumi.Input<string | enums.PublicIPAddressSkuTier>;
    }

    /**
     * Route resource.
     */
    export interface RouteArgs {
        /**
         * The destination CIDR to which the route applies.
         */
        addressPrefix?: pulumi.Input<string>;
        /**
         * A value indicating whether this route overrides overlapping BGP routes regardless of LPM.
         */
        hasBgpOverride?: pulumi.Input<boolean>;
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
         * The type of the resource.
         */
        type?: pulumi.Input<string>;
    }

    /**
     * Route table resource.
     */
    export interface RouteTableArgs {
        /**
         * Whether to disable the routes learned by BGP on that route table. True means disable.
         */
        disableBgpRoutePropagation?: pulumi.Input<boolean>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Resource location.
         */
        location?: pulumi.Input<string>;
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
         * Network protocol this rule applies to.
         */
        protocol: pulumi.Input<string | enums.SecurityRuleProtocol>;
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
        /**
         * The type of the resource.
         */
        type?: pulumi.Input<string>;
    }

    /**
     * Service End point policy resource.
     */
    export interface ServiceEndpointPolicyArgs {
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
         * List of address prefixes for the subnet.
         */
        addressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Application gateway IP configurations of virtual network resource.
         */
        applicationGatewayIpConfigurations?: pulumi.Input<pulumi.Input<ApplicationGatewayIPConfigurationArgs>[]>;
        /**
         * An array of references to the delegations on the subnet.
         */
        delegations?: pulumi.Input<pulumi.Input<DelegationArgs>[]>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Array of IpAllocation which reference this subnet.
         */
        ipAllocations?: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * Nat gateway associated with this subnet.
         */
        natGateway?: pulumi.Input<SubResourceArgs>;
        /**
         * The reference to the NetworkSecurityGroup resource.
         */
        networkSecurityGroup?: pulumi.Input<NetworkSecurityGroupArgs>;
        /**
         * Enable or Disable apply network policies on private end point in the subnet.
         */
        privateEndpointNetworkPolicies?: pulumi.Input<string | enums.VirtualNetworkPrivateEndpointNetworkPolicies>;
        /**
         * Enable or Disable apply network policies on private link service in the subnet.
         */
        privateLinkServiceNetworkPolicies?: pulumi.Input<string | enums.VirtualNetworkPrivateLinkServiceNetworkPolicies>;
        /**
         * The reference to the RouteTable resource.
         */
        routeTable?: pulumi.Input<RouteTableArgs>;
        /**
         * An array of service endpoint policies.
         */
        serviceEndpointPolicies?: pulumi.Input<pulumi.Input<ServiceEndpointPolicyArgs>[]>;
        /**
         * An array of service endpoints.
         */
        serviceEndpoints?: pulumi.Input<pulumi.Input<ServiceEndpointPropertiesFormatArgs>[]>;
        /**
         * Resource type.
         */
        type?: pulumi.Input<string>;
    }
    /**
     * subnetArgsProvideDefaults sets the appropriate defaults for SubnetArgs
     */
    export function subnetArgsProvideDefaults(val: SubnetArgs): SubnetArgs {
        return {
            ...val,
            privateEndpointNetworkPolicies: (val.privateEndpointNetworkPolicies) ?? "Enabled",
            privateLinkServiceNetworkPolicies: (val.privateLinkServiceNetworkPolicies) ?? "Enabled",
        };
    }
