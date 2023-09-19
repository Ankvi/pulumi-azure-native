import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Rule condition of type application.
     */
    export interface ApplicationRuleConditionArgs {
        /**
         * Description of the rule condition.
         */
        description?: pulumi.Input<string>;
        /**
         * List of destination IP addresses or Service Tags.
         */
        destinationAddresses?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * List of FQDN Tags for this rule condition.
         */
        fqdnTags?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Name of the rule condition.
         */
        name?: pulumi.Input<string>;
        /**
         * Array of Application Protocols.
         */
        protocols?: pulumi.Input<pulumi.Input<FirewallPolicyRuleConditionApplicationProtocolArgs>[]>;
        /**
         * Rule Condition Type.
         * Expected value is 'ApplicationRuleCondition'.
         */
        ruleConditionType: pulumi.Input<"ApplicationRuleCondition">;
        /**
         * List of source IP addresses for this rule.
         */
        sourceAddresses?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * List of source IpGroups for this rule.
         */
        sourceIpGroups?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * List of FQDNs for this rule condition.
         */
        targetFqdns?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Properties of an application rule.
     */
    export interface AzureFirewallApplicationRuleArgs {
        /**
         * Description of the rule.
         */
        description?: pulumi.Input<string>;
        /**
         * List of FQDN Tags for this rule.
         */
        fqdnTags?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Name of the application rule.
         */
        name?: pulumi.Input<string>;
        /**
         * Array of ApplicationRuleProtocols.
         */
        protocols?: pulumi.Input<pulumi.Input<AzureFirewallApplicationRuleProtocolArgs>[]>;
        /**
         * List of source IP addresses for this rule.
         */
        sourceAddresses?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * List of source IpGroups for this rule.
         */
        sourceIpGroups?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * List of FQDNs for this rule.
         */
        targetFqdns?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Application rule collection resource.
     */
    export interface AzureFirewallApplicationRuleCollectionArgs {
        /**
         * The action type of a rule collection.
         */
        action?: pulumi.Input<AzureFirewallRCActionArgs>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The name of the resource that is unique within the Azure firewall. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * Priority of the application rule collection resource.
         */
        priority?: pulumi.Input<number>;
        /**
         * Collection of rules used by a application rule collection.
         */
        rules?: pulumi.Input<pulumi.Input<AzureFirewallApplicationRuleArgs>[]>;
    }

    /**
     * Properties of the application rule protocol.
     */
    export interface AzureFirewallApplicationRuleProtocolArgs {
        /**
         * Port number for the protocol, cannot be greater than 64000. This field is optional.
         */
        port?: pulumi.Input<number>;
        /**
         * Protocol type.
         */
        protocolType?: pulumi.Input<string | enums.AzureFirewallApplicationRuleProtocolType>;
    }

    /**
     * IP configuration of an Azure Firewall.
     */
    export interface AzureFirewallIPConfigurationArgs {
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * Name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * Reference to the PublicIP resource. This field is a mandatory input if subnet is not null.
         */
        publicIPAddress?: pulumi.Input<SubResourceArgs>;
        /**
         * Reference to the subnet resource. This resource must be named 'AzureFirewallSubnet' or 'AzureFirewallManagementSubnet'.
         */
        subnet?: pulumi.Input<SubResourceArgs>;
    }

    /**
     * AzureFirewall NAT Rule Collection Action.
     */
    export interface AzureFirewallNatRCActionArgs {
        /**
         * The type of action.
         */
        type?: pulumi.Input<string | enums.AzureFirewallNatRCActionType>;
    }

    /**
     * Properties of a NAT rule.
     */
    export interface AzureFirewallNatRuleArgs {
        /**
         * Description of the rule.
         */
        description?: pulumi.Input<string>;
        /**
         * List of destination IP addresses for this rule. Supports IP ranges, prefixes, and service tags.
         */
        destinationAddresses?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * List of destination ports.
         */
        destinationPorts?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Name of the NAT rule.
         */
        name?: pulumi.Input<string>;
        /**
         * Array of AzureFirewallNetworkRuleProtocols applicable to this NAT rule.
         */
        protocols?: pulumi.Input<pulumi.Input<string | enums.AzureFirewallNetworkRuleProtocol>[]>;
        /**
         * List of source IP addresses for this rule.
         */
        sourceAddresses?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * List of source IpGroups for this rule.
         */
        sourceIpGroups?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The translated address for this NAT rule.
         */
        translatedAddress?: pulumi.Input<string>;
        /**
         * The translated FQDN for this NAT rule.
         */
        translatedFqdn?: pulumi.Input<string>;
        /**
         * The translated port for this NAT rule.
         */
        translatedPort?: pulumi.Input<string>;
    }

    /**
     * NAT rule collection resource.
     */
    export interface AzureFirewallNatRuleCollectionArgs {
        /**
         * The action type of a NAT rule collection.
         */
        action?: pulumi.Input<AzureFirewallNatRCActionArgs>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The name of the resource that is unique within the Azure firewall. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * Priority of the NAT rule collection resource.
         */
        priority?: pulumi.Input<number>;
        /**
         * Collection of rules used by a NAT rule collection.
         */
        rules?: pulumi.Input<pulumi.Input<AzureFirewallNatRuleArgs>[]>;
    }

    /**
     * Properties of the network rule.
     */
    export interface AzureFirewallNetworkRuleArgs {
        /**
         * Description of the rule.
         */
        description?: pulumi.Input<string>;
        /**
         * List of destination IP addresses.
         */
        destinationAddresses?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * List of destination FQDNs.
         */
        destinationFqdns?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * List of destination IpGroups for this rule.
         */
        destinationIpGroups?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * List of destination ports.
         */
        destinationPorts?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Name of the network rule.
         */
        name?: pulumi.Input<string>;
        /**
         * Array of AzureFirewallNetworkRuleProtocols.
         */
        protocols?: pulumi.Input<pulumi.Input<string | enums.AzureFirewallNetworkRuleProtocol>[]>;
        /**
         * List of source IP addresses for this rule.
         */
        sourceAddresses?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * List of source IpGroups for this rule.
         */
        sourceIpGroups?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Network rule collection resource.
     */
    export interface AzureFirewallNetworkRuleCollectionArgs {
        /**
         * The action type of a rule collection.
         */
        action?: pulumi.Input<AzureFirewallRCActionArgs>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The name of the resource that is unique within the Azure firewall. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * Priority of the network rule collection resource.
         */
        priority?: pulumi.Input<number>;
        /**
         * Collection of rules used by a network rule collection.
         */
        rules?: pulumi.Input<pulumi.Input<AzureFirewallNetworkRuleArgs>[]>;
    }

    /**
     * Properties of the AzureFirewallRCAction.
     */
    export interface AzureFirewallRCActionArgs {
        /**
         * The type of action.
         */
        type?: pulumi.Input<string | enums.AzureFirewallRCActionType>;
    }

    /**
     * SKU of an Azure Firewall.
     */
    export interface AzureFirewallSkuArgs {
        /**
         * Name of an Azure Firewall SKU.
         */
        name?: pulumi.Input<string | enums.AzureFirewallSkuName>;
        /**
         * Tier of an Azure Firewall.
         */
        tier?: pulumi.Input<string | enums.AzureFirewallSkuTier>;
    }

    /**
     * Firewall Policy Filter Rule.
     */
    export interface FirewallPolicyFilterRuleArgs {
        /**
         * The action type of a Filter rule.
         */
        action?: pulumi.Input<FirewallPolicyFilterRuleActionArgs>;
        /**
         * The name of the rule.
         */
        name?: pulumi.Input<string>;
        /**
         * Priority of the Firewall Policy Rule resource.
         */
        priority?: pulumi.Input<number>;
        /**
         * Collection of rule conditions used by a rule.
         */
        ruleConditions?: pulumi.Input<pulumi.Input<ApplicationRuleConditionArgs | NatRuleConditionArgs | NetworkRuleConditionArgs>[]>;
        /**
         * The type of the rule.
         * Expected value is 'FirewallPolicyFilterRule'.
         */
        ruleType: pulumi.Input<"FirewallPolicyFilterRule">;
    }

    /**
     * Properties of the FirewallPolicyFilterRuleAction.
     */
    export interface FirewallPolicyFilterRuleActionArgs {
        /**
         * The type of action.
         */
        type?: pulumi.Input<string | enums.FirewallPolicyFilterRuleActionType>;
    }

    /**
     * Firewall Policy NAT Rule.
     */
    export interface FirewallPolicyNatRuleArgs {
        /**
         * The action type of a Nat rule.
         */
        action?: pulumi.Input<FirewallPolicyNatRuleActionArgs>;
        /**
         * The name of the rule.
         */
        name?: pulumi.Input<string>;
        /**
         * Priority of the Firewall Policy Rule resource.
         */
        priority?: pulumi.Input<number>;
        /**
         * The match conditions for incoming traffic.
         */
        ruleCondition?: pulumi.Input<ApplicationRuleConditionArgs | NatRuleConditionArgs | NetworkRuleConditionArgs>;
        /**
         * The type of the rule.
         * Expected value is 'FirewallPolicyNatRule'.
         */
        ruleType: pulumi.Input<"FirewallPolicyNatRule">;
        /**
         * The translated address for this NAT rule.
         */
        translatedAddress?: pulumi.Input<string>;
        /**
         * The translated port for this NAT rule.
         */
        translatedPort?: pulumi.Input<string>;
    }

    /**
     * Properties of the FirewallPolicyNatRuleAction.
     */
    export interface FirewallPolicyNatRuleActionArgs {
        /**
         * The type of action.
         */
        type?: pulumi.Input<string | enums.FirewallPolicyNatRuleActionType>;
    }

    /**
     * Properties of the application rule protocol.
     */
    export interface FirewallPolicyRuleConditionApplicationProtocolArgs {
        /**
         * Port number for the protocol, cannot be greater than 64000.
         */
        port?: pulumi.Input<number>;
        /**
         * Protocol type.
         */
        protocolType?: pulumi.Input<string | enums.FirewallPolicyRuleConditionApplicationProtocolType>;
    }

    /**
     * ThreatIntel Whitelist for Firewall Policy.
     */
    export interface FirewallPolicyThreatIntelWhitelistArgs {
        /**
         * List of FQDNs for the ThreatIntel Whitelist.
         */
        fqdns?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * List of IP addresses for the ThreatIntel Whitelist.
         */
        ipAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * HubVirtualNetworkConnection Resource.
     */
    export interface HubVirtualNetworkConnectionArgs {
        /**
         * VirtualHub to RemoteVnet transit to enabled or not.
         */
        allowHubToRemoteVnetTransit?: pulumi.Input<boolean>;
        /**
         * Allow RemoteVnet to use Virtual Hub's gateways.
         */
        allowRemoteVnetToUseHubVnetGateways?: pulumi.Input<boolean>;
        /**
         * Enable internet security.
         */
        enableInternetSecurity?: pulumi.Input<boolean>;
        /**
         * Resource ID.
         */
        id?: pulumi.Input<string>;
        /**
         * The name of the resource that is unique within a resource group. This name can be used to access the resource.
         */
        name?: pulumi.Input<string>;
        /**
         * Reference to the remote virtual network.
         */
        remoteVirtualNetwork?: pulumi.Input<SubResourceArgs>;
        /**
         * The Routing Configuration indicating the associated and propagated route tables on this connection.
         */
        routingConfiguration?: pulumi.Input<RoutingConfigurationArgs>;
    }

    /**
     * Identity for the resource.
     */
    export interface ManagedServiceIdentityArgs {
        /**
         * The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine.
         */
        type?: pulumi.Input<enums.ResourceIdentityType>;
        /**
         * The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Rule condition of type nat.
     */
    export interface NatRuleConditionArgs {
        /**
         * Description of the rule condition.
         */
        description?: pulumi.Input<string>;
        /**
         * List of destination IP addresses or Service Tags.
         */
        destinationAddresses?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * List of destination ports.
         */
        destinationPorts?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Array of FirewallPolicyRuleConditionNetworkProtocols.
         */
        ipProtocols?: pulumi.Input<pulumi.Input<string | enums.FirewallPolicyRuleConditionNetworkProtocol>[]>;
        /**
         * Name of the rule condition.
         */
        name?: pulumi.Input<string>;
        /**
         * Rule Condition Type.
         * Expected value is 'NatRuleCondition'.
         */
        ruleConditionType: pulumi.Input<"NatRuleCondition">;
        /**
         * List of source IP addresses for this rule.
         */
        sourceAddresses?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * List of source IpGroups for this rule.
         */
        sourceIpGroups?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Rule condition of type network.
     */
    export interface NetworkRuleConditionArgs {
        /**
         * Description of the rule condition.
         */
        description?: pulumi.Input<string>;
        /**
         * List of destination IP addresses or Service Tags.
         */
        destinationAddresses?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * List of destination IpGroups for this rule.
         */
        destinationIpGroups?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * List of destination ports.
         */
        destinationPorts?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Array of FirewallPolicyRuleConditionNetworkProtocols.
         */
        ipProtocols?: pulumi.Input<pulumi.Input<string | enums.FirewallPolicyRuleConditionNetworkProtocol>[]>;
        /**
         * Name of the rule condition.
         */
        name?: pulumi.Input<string>;
        /**
         * Rule Condition Type.
         * Expected value is 'NetworkRuleCondition'.
         */
        ruleConditionType: pulumi.Input<"NetworkRuleCondition">;
        /**
         * List of source IP addresses for this rule.
         */
        sourceAddresses?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * List of source IpGroups for this rule.
         */
        sourceIpGroups?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The list of RouteTables to advertise the routes to.
     */
    export interface PropagatedRouteTableArgs {
        /**
         * The list of resource ids of all the RouteTables.
         */
        ids?: pulumi.Input<pulumi.Input<SubResourceArgs>[]>;
        /**
         * The list of labels.
         */
        labels?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Routing Configuration indicating the associated and propagated route tables for this connection.
     */
    export interface RoutingConfigurationArgs {
        /**
         * The resource id RouteTable associated with this RoutingConfiguration.
         */
        associatedRouteTable?: pulumi.Input<SubResourceArgs>;
        /**
         * The list of RouteTables to advertise the routes to.
         */
        propagatedRouteTables?: pulumi.Input<PropagatedRouteTableArgs>;
        /**
         * List of routes that control routing from VirtualHub into a virtual network connection.
         */
        vnetRoutes?: pulumi.Input<VnetRouteArgs>;
    }

    /**
     * List of all Static Routes.
     */
    export interface StaticRouteArgs {
        /**
         * List of all address prefixes.
         */
        addressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The name of the StaticRoute that is unique within a VnetRoute.
         */
        name?: pulumi.Input<string>;
        /**
         * The ip address of the next hop.
         */
        nextHopIpAddress?: pulumi.Input<string>;
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
     * Network Virtual Appliance Sku Properties.
     */
    export interface VirtualApplianceSkuPropertiesArgs {
        /**
         * Virtual Appliance Scale Unit.
         */
        bundledScaleUnit?: pulumi.Input<string>;
        /**
         * Virtual Appliance Version.
         */
        marketPlaceVersion?: pulumi.Input<string>;
        /**
         * Virtual Appliance Vendor.
         */
        vendor?: pulumi.Input<string>;
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

    /**
     * List of routes that control routing from VirtualHub into a virtual network connection.
     */
    export interface VnetRouteArgs {
        /**
         * List of all Static Routes.
         */
        staticRoutes?: pulumi.Input<pulumi.Input<StaticRouteArgs>[]>;
    }
