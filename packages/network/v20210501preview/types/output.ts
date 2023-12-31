import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Active connectivity configuration.
     */
    export interface ActiveConnectivityConfigurationResponse {
        /**
         * Groups for configuration
         */
        appliesToGroups: ConnectivityGroupItemResponse[];
        /**
         * Deployment time string.
         */
        commitTime?: string;
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
         * A friendly name for the resource.
         */
        displayName?: string;
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
        /**
         * Deployment region.
         */
        region?: string;
    }

    /**
     * Network default admin rule.
     */
    export interface ActiveDefaultSecurityAdminRuleResponse {
        /**
         * Indicates the access allowed for this particular rule
         */
        access: string;
        /**
         * Deployment time string.
         */
        commitTime?: string;
        /**
         * A description of the security admin configuration.
         */
        configurationDescription?: string;
        /**
         * A display name of the security admin configuration.
         */
        configurationDisplayName?: string;
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
         * A friendly name for the rule.
         */
        displayName: string;
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
         * Deployment region.
         */
        region?: string;
        /**
         * Groups for rule collection
         */
        ruleCollectionAppliesToGroups?: NetworkManagerSecurityGroupItemResponse[];
        /**
         * A description of the rule collection.
         */
        ruleCollectionDescription?: string;
        /**
         * A display name of the rule collection.
         */
        ruleCollectionDisplayName?: string;
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
     * Network security default user rule.
     */
    export interface ActiveDefaultSecurityUserRuleResponse {
        /**
         * Deployment time string.
         */
        commitTime?: string;
        /**
         * A description of the security user configuration.
         */
        configurationDescription?: string;
        /**
         * A display name of the security user configuration.
         */
        configurationDisplayName?: string;
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
         * A friendly name for the rule.
         */
        displayName: string;
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
         * Network protocol this rule applies to.
         */
        protocol: string;
        /**
         * The provisioning state of the security configuration user rule resource.
         */
        provisioningState: string;
        /**
         * Deployment region.
         */
        region?: string;
        /**
         * Groups for rule collection
         */
        ruleCollectionAppliesToGroups?: NetworkManagerSecurityGroupItemResponse[];
        /**
         * A description of the rule collection.
         */
        ruleCollectionDescription?: string;
        /**
         * A display name of the rule collection.
         */
        ruleCollectionDisplayName?: string;
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
    export interface ActiveSecurityAdminRuleResponse {
        /**
         * Indicates the access allowed for this particular rule
         */
        access: string;
        /**
         * Deployment time string.
         */
        commitTime?: string;
        /**
         * A description of the security admin configuration.
         */
        configurationDescription?: string;
        /**
         * A display name of the security admin configuration.
         */
        configurationDisplayName?: string;
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
         * A friendly name for the rule.
         */
        displayName?: string;
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
         * Deployment region.
         */
        region?: string;
        /**
         * Groups for rule collection
         */
        ruleCollectionAppliesToGroups?: NetworkManagerSecurityGroupItemResponse[];
        /**
         * A description of the rule collection.
         */
        ruleCollectionDescription?: string;
        /**
         * A display name of the rule collection.
         */
        ruleCollectionDisplayName?: string;
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
     * Network security user rule.
     */
    export interface ActiveSecurityUserRuleResponse {
        /**
         * Deployment time string.
         */
        commitTime?: string;
        /**
         * A description of the security user configuration.
         */
        configurationDescription?: string;
        /**
         * A display name of the security user configuration.
         */
        configurationDisplayName?: string;
        /**
         * A description for this rule.
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
         * A friendly name for the rule.
         */
        displayName?: string;
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
         * Network protocol this rule applies to.
         */
        protocol: string;
        /**
         * The provisioning state of the security configuration user rule resource.
         */
        provisioningState: string;
        /**
         * Deployment region.
         */
        region?: string;
        /**
         * Groups for rule collection
         */
        ruleCollectionAppliesToGroups?: NetworkManagerSecurityGroupItemResponse[];
        /**
         * A description of the rule collection.
         */
        ruleCollectionDescription?: string;
        /**
         * A display name of the rule collection.
         */
        ruleCollectionDisplayName?: string;
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
         * A friendly name for the network group.
         */
        displayName?: string;
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
     * Cross tenant scopes.
     */
    export interface CrossTenantScopesResponse {
        /**
         * List of management groups.
         */
        managementGroups: string[];
        /**
         * List of subscriptions.
         */
        subscriptions: string[];
        /**
         * Tenant ID.
         */
        tenantId: string;
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
         * A friendly name for the resource.
         */
        displayName?: string;
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
         * A display name of the security admin configuration.
         */
        configurationDisplayName?: string;
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
         * A friendly name for the rule.
         */
        displayName: string;
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
         * A display name of the rule collection.
         */
        ruleCollectionDisplayName?: string;
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
         * A display name of the security admin configuration.
         */
        configurationDisplayName?: string;
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
         * A friendly name for the rule.
         */
        displayName?: string;
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
         * A display name of the rule collection.
         */
        ruleCollectionDisplayName?: string;
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
     * Effective Virtual Network
     */
    export interface EffectiveVirtualNetworkResponse {
        /**
         * Effective vnet Id.
         */
        id?: string;
        /**
         * Location of vnet.
         */
        location?: string;
        /**
         * Membership Type.
         */
        membershipType?: string;
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
     * Network Manager Deployment Status.
     */
    export interface NetworkManagerDeploymentStatusResponse {
        /**
         * Commit Time.
         */
        commitTime?: string;
        /**
         * List of configuration ids.
         */
        configurationIds?: string[];
        /**
         * Deployment Status.
         */
        deploymentStatus?: string;
        /**
         * Configuration Deployment Type.
         */
        deploymentType?: string;
        /**
         * Error Message.
         */
        errorMessage?: string;
        /**
         * Region Name.
         */
        region?: string;
    }

    /**
     * Scope of Network Manager.
     */
    export interface NetworkManagerPropertiesResponseNetworkManagerScopes {
        /**
         * List of cross tenant scopes.
         */
        crossTenantScopes: CrossTenantScopesResponse[];
        /**
         * List of management groups.
         */
        managementGroups?: string[];
        /**
         * List of subscriptions.
         */
        subscriptions?: string[];
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

    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    export interface SystemDataResponse {
        /**
         * The timestamp of resource creation (UTC).
         */
        createdAt?: string;
        /**
         * The identity that created the resource.
         */
        createdBy?: string;
        /**
         * The type of identity that created the resource.
         */
        createdByType?: string;
        /**
         * The type of identity that last modified the resource.
         */
        lastModifiedAt?: string;
        /**
         * The identity that last modified the resource.
         */
        lastModifiedBy?: string;
        /**
         * The type of identity that last modified the resource.
         */
        lastModifiedByType?: string;
    }
