import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * An A record.
     */
    export interface ARecordArgs {
        /**
         * The IPv4 address of this A record.
         */
        ipv4Address?: pulumi.Input<string>;
    }

    /**
     * An AAAA record.
     */
    export interface AaaaRecordArgs {
        /**
         * The IPv6 address of this AAAA record.
         */
        ipv6Address?: pulumi.Input<string>;
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
     * A CNAME record.
     */
    export interface CnameRecordArgs {
        /**
         * The canonical name for this CNAME record.
         */
        cname?: pulumi.Input<string>;
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
    }

    /**
     * An MX record.
     */
    export interface MxRecordArgs {
        /**
         * The domain name of the mail host for this MX record.
         */
        exchange?: pulumi.Input<string>;
        /**
         * The preference value for this MX record.
         */
        preference?: pulumi.Input<number>;
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
     * Filter that is applied to packet capture request. Multiple filters can be applied.
     */
    export interface PacketCaptureFilterArgs {
        /**
         * Local IP Address to be filtered on. Notation: "127.0.0.1" for single address entry. "127.0.0.1-127.0.0.255" for range. "127.0.0.1;127.0.0.5"? for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.
         */
        localIPAddress?: pulumi.Input<string>;
        /**
         * Local port to be filtered on. Notation: "80" for single port entry."80-85" for range. "80;443;" for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.
         */
        localPort?: pulumi.Input<string>;
        /**
         * Protocol to be filtered on.
         */
        protocol?: pulumi.Input<string | enums.PcProtocol>;
        /**
         * Local IP Address to be filtered on. Notation: "127.0.0.1" for single address entry. "127.0.0.1-127.0.0.255" for range. "127.0.0.1;127.0.0.5;" for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.
         */
        remoteIPAddress?: pulumi.Input<string>;
        /**
         * Remote port to be filtered on. Notation: "80" for single port entry."80-85" for range. "80;443;" for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null.
         */
        remotePort?: pulumi.Input<string>;
    }
    /**
     * packetCaptureFilterArgsProvideDefaults sets the appropriate defaults for PacketCaptureFilterArgs
     */
    export function packetCaptureFilterArgsProvideDefaults(val: PacketCaptureFilterArgs): PacketCaptureFilterArgs {
        return {
            ...val,
            protocol: (val.protocol) ?? "Any",
        };
    }

    /**
     * The storage location for a packet capture session.
     */
    export interface PacketCaptureStorageLocationArgs {
        /**
         * A valid local path on the targeting VM. Must include the name of the capture file (*.cap). For linux virtual machine it must start with /var/captures. Required if no storage ID is provided, otherwise optional.
         */
        filePath?: pulumi.Input<string>;
        /**
         * The ID of the storage account to save the packet capture session. Required if no local file path is provided.
         */
        storageId?: pulumi.Input<string>;
        /**
         * The URI of the storage path to save the packet capture. Must be a well-formed URI describing the location to save the packet capture.
         */
        storagePath?: pulumi.Input<string>;
    }

    /**
     * A PTR record.
     */
    export interface PtrRecordArgs {
        /**
         * The PTR target domain name for this PTR record.
         */
        ptrdname?: pulumi.Input<string>;
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
     * An SOA record.
     */
    export interface SoaRecordArgs {
        /**
         * The email contact for this SOA record.
         */
        email?: pulumi.Input<string>;
        /**
         * The expire time for this SOA record.
         */
        expireTime?: pulumi.Input<number>;
        /**
         * The domain name of the authoritative name server for this SOA record.
         */
        host?: pulumi.Input<string>;
        /**
         * The minimum value for this SOA record. By convention this is used to determine the negative caching duration.
         */
        minimumTtl?: pulumi.Input<number>;
        /**
         * The refresh value for this SOA record.
         */
        refreshTime?: pulumi.Input<number>;
        /**
         * The retry time for this SOA record.
         */
        retryTime?: pulumi.Input<number>;
        /**
         * The serial number for this SOA record.
         */
        serialNumber?: pulumi.Input<number>;
    }

    /**
     * An SRV record.
     */
    export interface SrvRecordArgs {
        /**
         * The port value for this SRV record.
         */
        port?: pulumi.Input<number>;
        /**
         * The priority value for this SRV record.
         */
        priority?: pulumi.Input<number>;
        /**
         * The target domain name for this SRV record.
         */
        target?: pulumi.Input<string>;
        /**
         * The weight value for this SRV record.
         */
        weight?: pulumi.Input<number>;
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
     * A TXT record.
     */
    export interface TxtRecordArgs {
        /**
         * The text value of this TXT record.
         */
        value?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * VirtualHub route.
     */
    export interface VirtualHubRouteArgs {
        /**
         * List of all addressPrefixes.
         */
        addressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * NextHop ip address.
         */
        nextHopIpAddress?: pulumi.Input<string>;
    }

    /**
     * VirtualHub route table.
     */
    export interface VirtualHubRouteTableArgs {
        /**
         * List of all routes.
         */
        routes?: pulumi.Input<pulumi.Input<VirtualHubRouteArgs>[]>;
    }

    /**
     * VirtualHubRouteTableV2 Resource.
     */
    export interface VirtualHubRouteTableV2Args {
        /**
         * List of all connections attached to this route table v2.
         */
        attachedConnections?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * List of all routes.
         */
        routes?: pulumi.Input<pulumi.Input<VirtualHubRouteV2Args>[]>;
    }

    /**
     * VirtualHubRouteTableV2 route.
     */
    export interface VirtualHubRouteV2Args {
        /**
         * The type of destinations.
         */
        destinationType?: pulumi.Input<string>;
        /**
         * List of all destinations.
         */
        destinations?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The type of next hops.
         */
        nextHopType?: pulumi.Input<string>;
        /**
         * NextHops ip address.
         */
        nextHops?: pulumi.Input<pulumi.Input<string>[]>;
    }
