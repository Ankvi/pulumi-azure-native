import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * DNS Proxy Settings in Firewall Policy.
     */
    export interface DnsSettingsResponse {
        /**
         * Enable DNS Proxy on Firewalls attached to the Firewall Policy.
         */
        enableProxy?: boolean;
        /**
         * FQDNs in Network Rules are supported when set to true.
         */
        requireProxyForNetworkRules?: boolean;
        /**
         * List of Custom DNS Servers.
         */
        servers?: string[];
    }

    /**
     * Explicit Proxy Settings in Firewall Policy.
     */
    export interface ExplicitProxySettingsResponse {
        /**
         * When set to true, explicit proxy mode is enabled.
         */
        enableExplicitProxy?: boolean;
        /**
         * Port number for explicit proxy http protocol, cannot be greater than 64000.
         */
        httpPort?: number;
        /**
         * Port number for explicit proxy https protocol, cannot be greater than 64000.
         */
        httpsPort?: number;
        /**
         * SAS URL for PAC file.
         */
        pacFile?: string;
        /**
         * Port number for firewall to serve PAC file.
         */
        pacFilePort?: number;
    }

    /**
     * Trusted Root certificates properties for tls.
     */
    export interface FirewallPolicyCertificateAuthorityResponse {
        /**
         * Secret Id of (base-64 encoded unencrypted pfx) 'Secret' or 'Certificate' object stored in KeyVault.
         */
        keyVaultSecretId?: string;
        /**
         * Name of the CA certificate.
         */
        name?: string;
    }

    /**
     * Firewall Policy Insights.
     */
    export interface FirewallPolicyInsightsResponse {
        /**
         * A flag to indicate if the insights are enabled on the policy.
         */
        isEnabled?: boolean;
        /**
         * Workspaces needed to configure the Firewall Policy Insights.
         */
        logAnalyticsResources?: FirewallPolicyLogAnalyticsResourcesResponse;
        /**
         * Number of days the insights should be enabled on the policy.
         */
        retentionDays?: number;
    }

    /**
     * Intrusion detection bypass traffic specification.
     */
    export interface FirewallPolicyIntrusionDetectionBypassTrafficSpecificationsResponse {
        /**
         * Description of the bypass traffic rule.
         */
        description?: string;
        /**
         * List of destination IP addresses or ranges for this rule.
         */
        destinationAddresses?: string[];
        /**
         * List of destination IpGroups for this rule.
         */
        destinationIpGroups?: string[];
        /**
         * List of destination ports or ranges.
         */
        destinationPorts?: string[];
        /**
         * Name of the bypass traffic rule.
         */
        name?: string;
        /**
         * The rule bypass protocol.
         */
        protocol?: string;
        /**
         * List of source IP addresses or ranges for this rule.
         */
        sourceAddresses?: string[];
        /**
         * List of source IpGroups for this rule.
         */
        sourceIpGroups?: string[];
    }

    /**
     * The operation for configuring intrusion detection.
     */
    export interface FirewallPolicyIntrusionDetectionConfigurationResponse {
        /**
         * List of rules for traffic to bypass.
         */
        bypassTrafficSettings?: FirewallPolicyIntrusionDetectionBypassTrafficSpecificationsResponse[];
        /**
         * IDPS Private IP address ranges are used to identify traffic direction (i.e. inbound, outbound, etc.). By default, only ranges defined by IANA RFC 1918 are considered private IP addresses. To modify default ranges, specify your Private IP address ranges with this property
         */
        privateRanges?: string[];
        /**
         * List of specific signatures states.
         */
        signatureOverrides?: FirewallPolicyIntrusionDetectionSignatureSpecificationResponse[];
    }

    /**
     * Configuration for intrusion detection mode and rules.
     */
    export interface FirewallPolicyIntrusionDetectionResponse {
        /**
         * Intrusion detection configuration properties.
         */
        configuration?: FirewallPolicyIntrusionDetectionConfigurationResponse;
        /**
         * Intrusion detection general state.
         */
        mode?: string;
    }

    /**
     * Intrusion detection signatures specification states.
     */
    export interface FirewallPolicyIntrusionDetectionSignatureSpecificationResponse {
        /**
         * Signature id.
         */
        id?: string;
        /**
         * The signature state.
         */
        mode?: string;
    }

    /**
     * Log Analytics Resources for Firewall Policy Insights.
     */
    export interface FirewallPolicyLogAnalyticsResourcesResponse {
        /**
         * The default workspace Id for Firewall Policy Insights.
         */
        defaultWorkspaceId?: SubResourceResponse;
        /**
         * List of workspaces for Firewall Policy Insights.
         */
        workspaces?: FirewallPolicyLogAnalyticsWorkspaceResponse[];
    }

    /**
     * Log Analytics Workspace for Firewall Policy Insights.
     */
    export interface FirewallPolicyLogAnalyticsWorkspaceResponse {
        /**
         * Region to configure the Workspace.
         */
        region?: string;
        /**
         * The workspace Id for Firewall Policy Insights.
         */
        workspaceId?: SubResourceResponse;
    }

    /**
     * The private IP addresses/IP ranges to which traffic will not be SNAT.
     */
    export interface FirewallPolicySNATResponse {
        /**
         * List of private IP addresses/IP address ranges to not be SNAT.
         */
        privateRanges?: string[];
    }

    /**
     * SQL Settings in Firewall Policy.
     */
    export interface FirewallPolicySQLResponse {
        /**
         * A flag to indicate if SQL Redirect traffic filtering is enabled. Turning on the flag requires no rule using port 11000-11999.
         */
        allowSqlRedirect?: boolean;
    }

    /**
     * SKU of Firewall policy.
     */
    export interface FirewallPolicySkuResponse {
        /**
         * Tier of Firewall Policy.
         */
        tier?: string;
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
     * Configuration needed to perform TLS termination & initiation.
     */
    export interface FirewallPolicyTransportSecurityResponse {
        /**
         * The CA used for intermediate CA generation.
         */
        certificateAuthority?: FirewallPolicyCertificateAuthorityResponse;
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

    export interface SingleQueryResultResponse {
        /**
         * Describes what is the signature enforces
         */
        description?: string;
        /**
         * Describes the list of destination ports related to this signature
         */
        destinationPorts?: string[];
        /**
         * Describes in which direction signature is being enforced: 0 - Inbound, 1 - OutBound, 2 - Bidirectional
         */
        direction?: number;
        /**
         * Describes the groups the signature belongs to
         */
        group?: string;
        /**
         * Describes if this override is inherited from base policy or not
         */
        inheritedFromParentPolicy?: boolean;
        /**
         * Describes the last updated time of the signature (provided from 3rd party vendor)
         */
        lastUpdated?: string;
        /**
         * The current mode enforced, 0 - Disabled, 1 - Alert, 2 -Deny
         */
        mode?: number;
        /**
         * Describes the protocol the signatures is being enforced in
         */
        protocol?: string;
        /**
         * Describes the severity of signature: 1 - Low, 2 - Medium, 3 - High
         */
        severity?: number;
        /**
         * The ID of the signature
         */
        signatureId?: number;
        /**
         * Describes the list of source ports related to this signature
         */
        sourcePorts?: string[];
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
