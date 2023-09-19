import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * DNS Proxy Settings in Firewall Policy.
     */
    export interface DnsSettingsArgs {
        /**
         * Enable DNS Proxy on Firewalls attached to the Firewall Policy.
         */
        enableProxy?: pulumi.Input<boolean>;
        /**
         * FQDNs in Network Rules are supported when set to true.
         */
        requireProxyForNetworkRules?: pulumi.Input<boolean>;
        /**
         * List of Custom DNS Servers.
         */
        servers?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Explicit Proxy Settings in Firewall Policy.
     */
    export interface ExplicitProxySettingsArgs {
        /**
         * When set to true, explicit proxy mode is enabled.
         */
        enableExplicitProxy?: pulumi.Input<boolean>;
        /**
         * Port number for explicit proxy http protocol, cannot be greater than 64000.
         */
        httpPort?: pulumi.Input<number>;
        /**
         * Port number for explicit proxy https protocol, cannot be greater than 64000.
         */
        httpsPort?: pulumi.Input<number>;
        /**
         * SAS URL for PAC file.
         */
        pacFile?: pulumi.Input<string>;
        /**
         * Port number for firewall to serve PAC file.
         */
        pacFilePort?: pulumi.Input<number>;
    }

    /**
     * Will contain the filter name and values to operate on
     */
    export interface FilterItems {
        /**
         * The name of the field we would like to filter
         */
        field?: string;
        /**
         * List of values to filter the current field by
         */
        values?: string[];
    }

    /**
     * Will contain the filter name and values to operate on
     */
    export interface FilterItemsArgs {
        /**
         * The name of the field we would like to filter
         */
        field?: pulumi.Input<string>;
        /**
         * List of values to filter the current field by
         */
        values?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * Trusted Root certificates properties for tls.
     */
    export interface FirewallPolicyCertificateAuthorityArgs {
        /**
         * Secret Id of (base-64 encoded unencrypted pfx) 'Secret' or 'Certificate' object stored in KeyVault.
         */
        keyVaultSecretId?: pulumi.Input<string>;
        /**
         * Name of the CA certificate.
         */
        name?: pulumi.Input<string>;
    }

    /**
     * Firewall Policy Insights.
     */
    export interface FirewallPolicyInsightsArgs {
        /**
         * A flag to indicate if the insights are enabled on the policy.
         */
        isEnabled?: pulumi.Input<boolean>;
        /**
         * Workspaces needed to configure the Firewall Policy Insights.
         */
        logAnalyticsResources?: pulumi.Input<FirewallPolicyLogAnalyticsResourcesArgs>;
        /**
         * Number of days the insights should be enabled on the policy.
         */
        retentionDays?: pulumi.Input<number>;
    }

    /**
     * Configuration for intrusion detection mode and rules.
     */
    export interface FirewallPolicyIntrusionDetectionArgs {
        /**
         * Intrusion detection configuration properties.
         */
        configuration?: pulumi.Input<FirewallPolicyIntrusionDetectionConfigurationArgs>;
        /**
         * Intrusion detection general state.
         */
        mode?: pulumi.Input<string | enums.FirewallPolicyIntrusionDetectionStateType>;
    }

    /**
     * Intrusion detection bypass traffic specification.
     */
    export interface FirewallPolicyIntrusionDetectionBypassTrafficSpecificationsArgs {
        /**
         * Description of the bypass traffic rule.
         */
        description?: pulumi.Input<string>;
        /**
         * List of destination IP addresses or ranges for this rule.
         */
        destinationAddresses?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * List of destination IpGroups for this rule.
         */
        destinationIpGroups?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * List of destination ports or ranges.
         */
        destinationPorts?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Name of the bypass traffic rule.
         */
        name?: pulumi.Input<string>;
        /**
         * The rule bypass protocol.
         */
        protocol?: pulumi.Input<string | enums.FirewallPolicyIntrusionDetectionProtocol>;
        /**
         * List of source IP addresses or ranges for this rule.
         */
        sourceAddresses?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * List of source IpGroups for this rule.
         */
        sourceIpGroups?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * The operation for configuring intrusion detection.
     */
    export interface FirewallPolicyIntrusionDetectionConfigurationArgs {
        /**
         * List of rules for traffic to bypass.
         */
        bypassTrafficSettings?: pulumi.Input<pulumi.Input<FirewallPolicyIntrusionDetectionBypassTrafficSpecificationsArgs>[]>;
        /**
         * IDPS Private IP address ranges are used to identify traffic direction (i.e. inbound, outbound, etc.). By default, only ranges defined by IANA RFC 1918 are considered private IP addresses. To modify default ranges, specify your Private IP address ranges with this property
         */
        privateRanges?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * List of specific signatures states.
         */
        signatureOverrides?: pulumi.Input<pulumi.Input<FirewallPolicyIntrusionDetectionSignatureSpecificationArgs>[]>;
    }

    /**
     * Intrusion detection signatures specification states.
     */
    export interface FirewallPolicyIntrusionDetectionSignatureSpecificationArgs {
        /**
         * Signature id.
         */
        id?: pulumi.Input<string>;
        /**
         * The signature state.
         */
        mode?: pulumi.Input<string | enums.FirewallPolicyIntrusionDetectionStateType>;
    }

    /**
     * Log Analytics Resources for Firewall Policy Insights.
     */
    export interface FirewallPolicyLogAnalyticsResourcesArgs {
        /**
         * The default workspace Id for Firewall Policy Insights.
         */
        defaultWorkspaceId?: pulumi.Input<SubResourceArgs>;
        /**
         * List of workspaces for Firewall Policy Insights.
         */
        workspaces?: pulumi.Input<pulumi.Input<FirewallPolicyLogAnalyticsWorkspaceArgs>[]>;
    }

    /**
     * Log Analytics Workspace for Firewall Policy Insights.
     */
    export interface FirewallPolicyLogAnalyticsWorkspaceArgs {
        /**
         * Region to configure the Workspace.
         */
        region?: pulumi.Input<string>;
        /**
         * The workspace Id for Firewall Policy Insights.
         */
        workspaceId?: pulumi.Input<SubResourceArgs>;
    }

    /**
     * The private IP addresses/IP ranges to which traffic will not be SNAT.
     */
    export interface FirewallPolicySNATArgs {
        /**
         * List of private IP addresses/IP address ranges to not be SNAT.
         */
        privateRanges?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * SQL Settings in Firewall Policy.
     */
    export interface FirewallPolicySQLArgs {
        /**
         * A flag to indicate if SQL Redirect traffic filtering is enabled. Turning on the flag requires no rule using port 11000-11999.
         */
        allowSqlRedirect?: pulumi.Input<boolean>;
    }

    /**
     * SKU of Firewall policy.
     */
    export interface FirewallPolicySkuArgs {
        /**
         * Tier of Firewall Policy.
         */
        tier?: pulumi.Input<string | enums.FirewallPolicySkuTier>;
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
     * Configuration needed to perform TLS termination & initiation.
     */
    export interface FirewallPolicyTransportSecurityArgs {
        /**
         * The CA used for intermediate CA generation.
         */
        certificateAuthority?: pulumi.Input<FirewallPolicyCertificateAuthorityArgs>;
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
     * Describes a column to sort
     */
    export interface OrderBy {
        /**
         * Describes the actual column name to sort by
         */
        field?: string;
        /**
         * Describes if results should be in ascending/descending order
         */
        order?: string | enums.FirewallPolicyIDPSQuerySortOrder;
    }

    /**
     * Describes a column to sort
     */
    export interface OrderByArgs {
        /**
         * Describes the actual column name to sort by
         */
        field?: pulumi.Input<string>;
        /**
         * Describes if results should be in ascending/descending order
         */
        order?: pulumi.Input<string | enums.FirewallPolicyIDPSQuerySortOrder>;
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
