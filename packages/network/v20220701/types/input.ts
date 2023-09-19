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
     * IP configuration.
     */
    export interface InboundEndpointIPConfigurationArgs {
        /**
         * Private IP address of the IP configuration.
         */
        privateIpAddress?: pulumi.Input<string>;
        /**
         * Private IP address allocation method.
         */
        privateIpAllocationMethod?: pulumi.Input<string | enums.IpAllocationMethod>;
        /**
         * The reference to the subnet bound to the IP configuration.
         */
        subnet: pulumi.Input<SubResourceArgs>;
    }
    /**
     * inboundEndpointIPConfigurationArgsProvideDefaults sets the appropriate defaults for InboundEndpointIPConfigurationArgs
     */
    export function inboundEndpointIPConfigurationArgsProvideDefaults(val: InboundEndpointIPConfigurationArgs): InboundEndpointIPConfigurationArgs {
        return {
            ...val,
            privateIpAllocationMethod: (val.privateIpAllocationMethod) ?? "Dynamic",
        };
    }

    /**
     * NetworkSecurityGroup resource.
     */
    export interface NetworkSecurityGroupArgs {
        /**
         * When enabled, flows created from Network Security Group connections will be re-evaluated when rules are updates. Initial enablement will trigger re-evaluation.
         */
        flushConnection?: pulumi.Input<boolean>;
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
         * A collection of contextual service endpoint policy.
         */
        contextualServiceEndpointPolicies?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Resource location.
         */
        location?: pulumi.Input<string>;
        /**
         * The alias indicating if the policy belongs to a service
         */
        serviceAlias?: pulumi.Input<string>;
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
        /**
         * The type of the resource.
         */
        type?: pulumi.Input<string>;
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
     * Describes a server to forward the DNS queries to.
     */
    export interface TargetDnsServerArgs {
        /**
         * DNS server IP address.
         */
        ipAddress: pulumi.Input<string>;
        /**
         * DNS server port.
         */
        port?: pulumi.Input<number>;
    }
    /**
     * targetDnsServerArgsProvideDefaults sets the appropriate defaults for TargetDnsServerArgs
     */
    export function targetDnsServerArgsProvideDefaults(val: TargetDnsServerArgs): TargetDnsServerArgs {
        return {
            ...val,
            port: (val.port) ?? 53,
        };
    }
