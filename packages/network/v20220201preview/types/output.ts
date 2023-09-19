import * as pulumi from "@pulumi/pulumi";
    /**
     * Address prefix item.
     */
    export interface AddressPrefixItemResponse {
        /**
         * Address prefix.
         */
        addressPrefix?: string;
        /**
         * Address prefix type.
         */
        addressPrefixType?: string;
    }

    /**
     * The network configuration group resource
     */
    export interface ConfigurationGroupResponse {
        /**
         * A description of the network group.
         */
        description?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Group member type.
         */
        memberType: string;
        /**
         * The provisioning state of the scope assignment resource.
         */
        provisioningState: string;
    }

    /**
     * Connectivity group item.
     */
    export interface ConnectivityGroupItemResponse {
        /**
         * Group connectivity type.
         */
        groupConnectivity: string;
        /**
         * Flag if global is supported.
         */
        isGlobal?: string;
        /**
         * Network group Id.
         */
        networkGroupId: string;
        /**
         * Flag if need to use hub gateway.
         */
        useHubGateway?: string;
    }

    /**
     * The network manager effective connectivity configuration
     */
    export interface EffectiveConnectivityConfigurationResponse {
        /**
         * Groups for configuration
         */
        appliesToGroups: ConnectivityGroupItemResponse[];
        /**
         * Effective configuration groups.
         */
        configurationGroups?: ConfigurationGroupResponse[];
        /**
         * Connectivity topology type.
         */
        connectivityTopology: string;
        /**
         * Flag if need to remove current existing peerings.
         */
        deleteExistingPeering?: string;
        /**
         * A description of the connectivity configuration.
         */
        description?: string;
        /**
         * List of hubItems
         */
        hubs?: HubResponse[];
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Flag if global mesh is supported.
         */
        isGlobal?: string;
        /**
         * The provisioning state of the connectivity configuration resource.
         */
        provisioningState: string;
    }

    /**
     * Network default admin rule.
     */
    export interface EffectiveDefaultSecurityAdminRuleResponse {
        /**
         * Indicates the access allowed for this particular rule
         */
        access: string;
        /**
         * A description of the security admin configuration.
         */
        configurationDescription?: string;
        /**
         * A description for this rule. Restricted to 140 chars.
         */
        description: string;
        /**
         * The destination port ranges.
         */
        destinationPortRanges: string[];
        /**
         * The destination address prefixes. CIDR or destination IP ranges.
         */
        destinations: AddressPrefixItemResponse[];
        /**
         * Indicates if the traffic matched against the rule in inbound or outbound.
         */
        direction: string;
        /**
         * Default rule flag.
         */
        flag?: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Whether the rule is custom or default.
         * Expected value is 'Default'.
         */
        kind: "Default";
        /**
         * The priority of the rule. The value can be between 1 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
         */
        priority: number;
        /**
         * Network protocol this rule applies to.
         */
        protocol: string;
        /**
         * The provisioning state of the resource.
         */
        provisioningState: string;
        /**
         * Groups for rule collection
         */
        ruleCollectionAppliesToGroups?: NetworkManagerSecurityGroupItemResponse[];
        /**
         * A description of the rule collection.
         */
        ruleCollectionDescription?: string;
        /**
         * Effective configuration groups.
         */
        ruleGroups?: ConfigurationGroupResponse[];
        /**
         * The source port ranges.
         */
        sourcePortRanges: string[];
        /**
         * The CIDR or source IP ranges.
         */
        sources: AddressPrefixItemResponse[];
    }

    /**
     * Network admin rule.
     */
    export interface EffectiveSecurityAdminRuleResponse {
        /**
         * Indicates the access allowed for this particular rule
         */
        access: string;
        /**
         * A description of the security admin configuration.
         */
        configurationDescription?: string;
        /**
         * A description for this rule. Restricted to 140 chars.
         */
        description?: string;
        /**
         * The destination port ranges.
         */
        destinationPortRanges?: string[];
        /**
         * The destination address prefixes. CIDR or destination IP ranges.
         */
        destinations?: AddressPrefixItemResponse[];
        /**
         * Indicates if the traffic matched against the rule in inbound or outbound.
         */
        direction: string;
        /**
         * Resource ID.
         */
        id?: string;
        /**
         * Whether the rule is custom or default.
         * Expected value is 'Custom'.
         */
        kind: "Custom";
        /**
         * The priority of the rule. The value can be between 1 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
         */
        priority: number;
        /**
         * Network protocol this rule applies to.
         */
        protocol: string;
        /**
         * The provisioning state of the resource.
         */
        provisioningState: string;
        /**
         * Groups for rule collection
         */
        ruleCollectionAppliesToGroups?: NetworkManagerSecurityGroupItemResponse[];
        /**
         * A description of the rule collection.
         */
        ruleCollectionDescription?: string;
        /**
         * Effective configuration groups.
         */
        ruleGroups?: ConfigurationGroupResponse[];
        /**
         * The source port ranges.
         */
        sourcePortRanges?: string[];
        /**
         * The CIDR or source IP ranges.
         */
        sources?: AddressPrefixItemResponse[];
    }

    /**
     * Hub Item.
     */
    export interface HubResponse {
        /**
         * Resource Id.
         */
        resourceId?: string;
        /**
         * Resource Type.
         */
        resourceType?: string;
    }

    /**
     * Network manager security group item.
     */
    export interface NetworkManagerSecurityGroupItemResponse {
        /**
         * Network manager group Id.
         */
        networkGroupId: string;
    }
