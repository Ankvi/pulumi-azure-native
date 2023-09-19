import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Rule condition of type application.
     */
    export interface ApplicationRuleConditionResponse {
        /**
         * Description of the rule condition.
         */
        description?: string;
        /**
         * List of destination IP addresses or Service Tags.
         */
        destinationAddresses?: string[];
        /**
         * List of FQDN Tags for this rule condition.
         */
        fqdnTags?: string[];
        /**
         * Name of the rule condition.
         */
        name?: string;
        /**
         * Array of Application Protocols.
         */
        protocols?: FirewallPolicyRuleConditionApplicationProtocolResponse[];
        /**
         * Rule Condition Type.
         * Expected value is 'ApplicationRuleCondition'.
         */
        ruleConditionType: "ApplicationRuleCondition";
        /**
         * List of source IP addresses for this rule.
         */
        sourceAddresses?: string[];
        /**
         * List of source IpGroups for this rule.
         */
        sourceIpGroups?: string[];
        /**
         * List of FQDNs for this rule condition.
         */
        targetFqdns?: string[];
    }

    /**
     * Application rule collection resource.
     */
    export interface AzureFirewallApplicationRuleCollectionResponse {
        /**
         * The action type of a rule collection.
         */
        action?: AzureFirewallRCActionResponse;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The name of the resource that is unique within the Azure firewall. This name can be used to access the resource.
         */
        name?: string;
        /**
         * Priority of the application rule collection resource.
         */
        priority?: number;
        /**
         * The provisioning state of the application rule collection resource.
         */
        provisioningState: string;
        /**
         * Collection of rules used by a application rule collection.
         */
        rules?: AzureFirewallApplicationRuleResponse[];
    }

    /**
     * Properties of the application rule protocol.
     */
    export interface AzureFirewallApplicationRuleProtocolResponse {
        /**
         * Port number for the protocol, cannot be greater than 64000. This field is optional.
         */
        port?: number;
        /**
         * Protocol type.
         */
        protocolType?: string;
    }

    /**
     * Properties of an application rule.
     */
    export interface AzureFirewallApplicationRuleResponse {
        /**
         * Description of the rule.
         */
        description?: string;
        /**
         * List of FQDN Tags for this rule.
         */
        fqdnTags?: string[];
        /**
         * Name of the application rule.
         */
        name?: string;
        /**
         * Array of ApplicationRuleProtocols.
         */
        protocols?: AzureFirewallApplicationRuleProtocolResponse[];
        /**
         * List of source IP addresses for this rule.
         */
        sourceAddresses?: string[];
        /**
         * List of source IpGroups for this rule.
         */
        sourceIpGroups?: string[];
        /**
         * List of FQDNs for this rule.
         */
        targetFqdns?: string[];
    }

    /**
     * IP configuration of an Azure Firewall.
     */
    export interface AzureFirewallIPConfigurationResponse {
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: string;
        /**
         * The Firewall Internal Load Balancer IP to be used as the next hop in User Defined Routes.
         */
        privateIPAddress: string;
        /**
         * The provisioning state of the Azure firewall IP configuration resource.
         */
        provisioningState: string;
        /**
         * Reference to the PublicIP resource. This field is a mandatory input if subnet is not null.
         */
        publicIPAddress?: SubResourceResponse;
        /**
         * Reference to the subnet resource. This resource must be named 'AzureFirewallSubnet' or 'AzureFirewallManagementSubnet'.
         */
        subnet?: SubResourceResponse;
        /**
         * Type of the resource.
         */
        type: string;
    }

    /**
     * IpGroups associated with azure firewall.
     */
    export interface AzureFirewallIpGroupsResponse {
        /**
         * The iteration number.
         */
        changeNumber: string;
        /**
         * Resource ID.
         */
        id: string;
    }

    /**
     * AzureFirewall NAT Rule Collection Action.
     */
    export interface AzureFirewallNatRCActionResponse {
        /**
         * The type of action.
         */
        type?: string;
    }

    /**
     * NAT rule collection resource.
     */
    export interface AzureFirewallNatRuleCollectionResponse {
        /**
         * The action type of a NAT rule collection.
         */
        action?: AzureFirewallNatRCActionResponse;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The name of the resource that is unique within the Azure firewall. This name can be used to access the resource.
         */
        name?: string;
        /**
         * Priority of the NAT rule collection resource.
         */
        priority?: number;
        /**
         * The provisioning state of the NAT rule collection resource.
         */
        provisioningState: string;
        /**
         * Collection of rules used by a NAT rule collection.
         */
        rules?: AzureFirewallNatRuleResponse[];
    }

    /**
     * Properties of a NAT rule.
     */
    export interface AzureFirewallNatRuleResponse {
        /**
         * Description of the rule.
         */
        description?: string;
        /**
         * List of destination IP addresses for this rule. Supports IP ranges, prefixes, and service tags.
         */
        destinationAddresses?: string[];
        /**
         * List of destination ports.
         */
        destinationPorts?: string[];
        /**
         * Name of the NAT rule.
         */
        name?: string;
        /**
         * Array of AzureFirewallNetworkRuleProtocols applicable to this NAT rule.
         */
        protocols?: string[];
        /**
         * List of source IP addresses for this rule.
         */
        sourceAddresses?: string[];
        /**
         * List of source IpGroups for this rule.
         */
        sourceIpGroups?: string[];
        /**
         * The translated address for this NAT rule.
         */
        translatedAddress?: string;
        /**
         * The translated FQDN for this NAT rule.
         */
        translatedFqdn?: string;
        /**
         * The translated port for this NAT rule.
         */
        translatedPort?: string;
    }

    /**
     * Network rule collection resource.
     */
    export interface AzureFirewallNetworkRuleCollectionResponse {
        /**
         * The action type of a rule collection.
         */
        action?: AzureFirewallRCActionResponse;
        /**
         * A unique read-only string that changes whenever the resource is updated.
         */
        etag: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * The name of the resource that is unique within the Azure firewall. This name can be used to access the resource.
         */
        name?: string;
        /**
         * Priority of the network rule collection resource.
         */
        priority?: number;
        /**
         * The provisioning state of the network rule collection resource.
         */
        provisioningState: string;
        /**
         * Collection of rules used by a network rule collection.
         */
        rules?: AzureFirewallNetworkRuleResponse[];
    }

    /**
     * Properties of the network rule.
     */
    export interface AzureFirewallNetworkRuleResponse {
        /**
         * Description of the rule.
         */
        description?: string;
        /**
         * List of destination IP addresses.
         */
        destinationAddresses?: string[];
        /**
         * List of destination FQDNs.
         */
        destinationFqdns?: string[];
        /**
         * List of destination IpGroups for this rule.
         */
        destinationIpGroups?: string[];
        /**
         * List of destination ports.
         */
        destinationPorts?: string[];
        /**
         * Name of the network rule.
         */
        name?: string;
        /**
         * Array of AzureFirewallNetworkRuleProtocols.
         */
        protocols?: string[];
        /**
         * List of source IP addresses for this rule.
         */
        sourceAddresses?: string[];
        /**
         * List of source IpGroups for this rule.
         */
        sourceIpGroups?: string[];
    }

    /**
     * Public IP Address associated with azure firewall.
     */
    export interface AzureFirewallPublicIPAddressResponse {
        /**
         * Public IP Address value.
         */
        address?: string;
    }

    /**
     * Properties of the AzureFirewallRCAction.
     */
    export interface AzureFirewallRCActionResponse {
        /**
         * The type of action.
         */
        type?: string;
    }

    /**
     * SKU of an Azure Firewall.
     */
    export interface AzureFirewallSkuResponse {
        /**
         * Name of an Azure Firewall SKU.
         */
        name?: string;
        /**
         * Tier of an Azure Firewall.
         */
        tier?: string;
    }

    /**
     * Properties of the FirewallPolicyFilterRuleAction.
     */
    export interface FirewallPolicyFilterRuleActionResponse {
        /**
         * The type of action.
         */
        type?: string;
    }

    /**
     * Firewall Policy Filter Rule.
     */
    export interface FirewallPolicyFilterRuleResponse {
        /**
         * The action type of a Filter rule.
         */
        action?: FirewallPolicyFilterRuleActionResponse;
        /**
         * The name of the rule.
         */
        name?: string;
        /**
         * Priority of the Firewall Policy Rule resource.
         */
        priority?: number;
        /**
         * Collection of rule conditions used by a rule.
         */
        ruleConditions?: (ApplicationRuleConditionResponse | NatRuleConditionResponse | NetworkRuleConditionResponse)[];
        /**
         * The type of the rule.
         * Expected value is 'FirewallPolicyFilterRule'.
         */
        ruleType: "FirewallPolicyFilterRule";
    }

    /**
     * Properties of the FirewallPolicyNatRuleAction.
     */
    export interface FirewallPolicyNatRuleActionResponse {
        /**
         * The type of action.
         */
        type?: string;
    }

    /**
     * Firewall Policy NAT Rule.
     */
    export interface FirewallPolicyNatRuleResponse {
        /**
         * The action type of a Nat rule.
         */
        action?: FirewallPolicyNatRuleActionResponse;
        /**
         * The name of the rule.
         */
        name?: string;
        /**
         * Priority of the Firewall Policy Rule resource.
         */
        priority?: number;
        /**
         * The match conditions for incoming traffic.
         */
        ruleCondition?: ApplicationRuleConditionResponse | NatRuleConditionResponse | NetworkRuleConditionResponse;
        /**
         * The type of the rule.
         * Expected value is 'FirewallPolicyNatRule'.
         */
        ruleType: "FirewallPolicyNatRule";
        /**
         * The translated address for this NAT rule.
         */
        translatedAddress?: string;
        /**
         * The translated port for this NAT rule.
         */
        translatedPort?: string;
    }

    /**
     * Properties of the application rule protocol.
     */
    export interface FirewallPolicyRuleConditionApplicationProtocolResponse {
        /**
         * Port number for the protocol, cannot be greater than 64000.
         */
        port?: number;
        /**
         * Protocol type.
         */
        protocolType?: string;
    }

    /**
     * ThreatIntel Whitelist for Firewall Policy.
     */
    export interface FirewallPolicyThreatIntelWhitelistResponse {
        /**
         * List of FQDNs for the ThreatIntel Whitelist.
         */
        fqdns?: string[];
        /**
         * List of IP addresses for the ThreatIntel Whitelist.
         */
        ipAddresses?: string[];
    }

    /**
     * IP addresses associated with azure firewall.
     */
    export interface HubIPAddressesResponse {
        /**
         * Private IP Address associated with azure firewall.
         */
        privateIPAddress?: string;
        /**
         * List of Public IP addresses associated with azure firewall.
         */
        publicIPAddresses?: AzureFirewallPublicIPAddressResponse[];
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
         * Enable internet security.
         */
        enableInternetSecurity?: boolean;
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
         * The provisioning state of the hub virtual network connection resource.
         */
        provisioningState: string;
        /**
         * Reference to the remote virtual network.
         */
        remoteVirtualNetwork?: SubResourceResponse;
        /**
         * The Routing Configuration indicating the associated and propagated route tables on this connection.
         */
        routingConfiguration?: RoutingConfigurationResponse;
    }

    /**
     * Identity for the resource.
     */
    export interface ManagedServiceIdentityResponse {
        /**
         * The principal id of the system assigned identity. This property will only be provided for a system assigned identity.
         */
        principalId: string;
        /**
         * The tenant id of the system assigned identity. This property will only be provided for a system assigned identity.
         */
        tenantId: string;
        /**
         * The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine.
         */
        type?: string;
        /**
         * The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: {[key: string]: ManagedServiceIdentityResponseUserAssignedIdentities};
    }

    export interface ManagedServiceIdentityResponseUserAssignedIdentities {
        /**
         * The client id of user assigned identity.
         */
        clientId: string;
        /**
         * The principal id of user assigned identity.
         */
        principalId: string;
    }

    /**
     * Rule condition of type nat.
     */
    export interface NatRuleConditionResponse {
        /**
         * Description of the rule condition.
         */
        description?: string;
        /**
         * List of destination IP addresses or Service Tags.
         */
        destinationAddresses?: string[];
        /**
         * List of destination ports.
         */
        destinationPorts?: string[];
        /**
         * Array of FirewallPolicyRuleConditionNetworkProtocols.
         */
        ipProtocols?: string[];
        /**
         * Name of the rule condition.
         */
        name?: string;
        /**
         * Rule Condition Type.
         * Expected value is 'NatRuleCondition'.
         */
        ruleConditionType: "NatRuleCondition";
        /**
         * List of source IP addresses for this rule.
         */
        sourceAddresses?: string[];
        /**
         * List of source IpGroups for this rule.
         */
        sourceIpGroups?: string[];
    }

    /**
     * Rule condition of type network.
     */
    export interface NetworkRuleConditionResponse {
        /**
         * Description of the rule condition.
         */
        description?: string;
        /**
         * List of destination IP addresses or Service Tags.
         */
        destinationAddresses?: string[];
        /**
         * List of destination IpGroups for this rule.
         */
        destinationIpGroups?: string[];
        /**
         * List of destination ports.
         */
        destinationPorts?: string[];
        /**
         * Array of FirewallPolicyRuleConditionNetworkProtocols.
         */
        ipProtocols?: string[];
        /**
         * Name of the rule condition.
         */
        name?: string;
        /**
         * Rule Condition Type.
         * Expected value is 'NetworkRuleCondition'.
         */
        ruleConditionType: "NetworkRuleCondition";
        /**
         * List of source IP addresses for this rule.
         */
        sourceAddresses?: string[];
        /**
         * List of source IpGroups for this rule.
         */
        sourceIpGroups?: string[];
    }

    /**
     * The list of RouteTables to advertise the routes to.
     */
    export interface PropagatedRouteTableResponse {
        /**
         * The list of resource ids of all the RouteTables.
         */
        ids?: SubResourceResponse[];
        /**
         * The list of labels.
         */
        labels?: string[];
    }

    /**
     * Routing Configuration indicating the associated and propagated route tables for this connection.
     */
    export interface RoutingConfigurationResponse {
        /**
         * The resource id RouteTable associated with this RoutingConfiguration.
         */
        associatedRouteTable?: SubResourceResponse;
        /**
         * The list of RouteTables to advertise the routes to.
         */
        propagatedRouteTables?: PropagatedRouteTableResponse;
        /**
         * List of routes that control routing from VirtualHub into a virtual network connection.
         */
        vnetRoutes?: VnetRouteResponse;
    }

    /**
     * List of all Static Routes.
     */
    export interface StaticRouteResponse {
        /**
         * List of all address prefixes.
         */
        addressPrefixes?: string[];
        /**
         * The name of the StaticRoute that is unique within a VnetRoute.
         */
        name?: string;
        /**
         * The ip address of the next hop.
         */
        nextHopIpAddress?: string;
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
     * Network Virtual Appliance NIC properties.
     */
    export interface VirtualApplianceNicPropertiesResponse {
        /**
         * NIC name.
         */
        name: string;
        /**
         * Private IP address.
         */
        privateIpAddress: string;
        /**
         * Public IP address.
         */
        publicIpAddress: string;
    }

    /**
     * Network Virtual Appliance Sku Properties.
     */
    export interface VirtualApplianceSkuPropertiesResponse {
        /**
         * Virtual Appliance Scale Unit.
         */
        bundledScaleUnit?: string;
        /**
         * Virtual Appliance Version.
         */
        marketPlaceVersion?: string;
        /**
         * Virtual Appliance Vendor.
         */
        vendor?: string;
    }

    /**
     * VirtualHub route.
     */
    export interface VirtualHubRouteResponse {
        /**
         * List of all addressPrefixes.
         */
        addressPrefixes?: string[];
        /**
         * NextHop ip address.
         */
        nextHopIpAddress?: string;
    }

    /**
     * VirtualHub route table.
     */
    export interface VirtualHubRouteTableResponse {
        /**
         * List of all routes.
         */
        routes?: VirtualHubRouteResponse[];
    }

    /**
     * VirtualHubRouteTableV2 Resource.
     */
    export interface VirtualHubRouteTableV2Response {
        /**
         * List of all connections attached to this route table v2.
         */
        attachedConnections?: string[];
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
         * The provisioning state of the virtual hub route table v2 resource.
         */
        provisioningState: string;
        /**
         * List of all routes.
         */
        routes?: VirtualHubRouteV2Response[];
    }

    /**
     * VirtualHubRouteTableV2 route.
     */
    export interface VirtualHubRouteV2Response {
        /**
         * The type of destinations.
         */
        destinationType?: string;
        /**
         * List of all destinations.
         */
        destinations?: string[];
        /**
         * The type of next hops.
         */
        nextHopType?: string;
        /**
         * NextHops ip address.
         */
        nextHops?: string[];
    }

    /**
     * List of routes that control routing from VirtualHub into a virtual network connection.
     */
    export interface VnetRouteResponse {
        /**
         * List of all Static Routes.
         */
        staticRoutes?: StaticRouteResponse[];
    }
