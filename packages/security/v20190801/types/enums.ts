export const AdditionalWorkspaceDataType = {
    Alerts: "Alerts",
    RawEvents: "RawEvents",
} as const;

/**
 * Data types sent to workspace.
 */
export type AdditionalWorkspaceDataType = (typeof AdditionalWorkspaceDataType)[keyof typeof AdditionalWorkspaceDataType];

export const AdditionalWorkspaceType = {
    Sentinel: "Sentinel",
} as const;

/**
 * Workspace type.
 */
export type AdditionalWorkspaceType = (typeof AdditionalWorkspaceType)[keyof typeof AdditionalWorkspaceType];

export const DataSource = {
    /**
     * Devices twin data
     */
    TwinData: "TwinData",
} as const;

export type DataSource = (typeof DataSource)[keyof typeof DataSource];

export const ExportData = {
    /**
     * Agent raw events
     */
    RawEvents: "RawEvents",
} as const;

export type ExportData = (typeof ExportData)[keyof typeof ExportData];

export const RecommendationConfigStatus = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * Recommendation status. When the recommendation status is disabled recommendations are not generated.
 */
export type RecommendationConfigStatus = (typeof RecommendationConfigStatus)[keyof typeof RecommendationConfigStatus];

export const RecommendationType = {
    /**
     * Authentication schema used for pull an edge module from an ACR repository does not use Service Principal Authentication.
     */
    IoT_ACRAuthentication: "IoT_ACRAuthentication",
    /**
     * IoT agent message size capacity is currently underutilized, causing an increase in the number of sent messages. Adjust message intervals for better utilization.
     */
    IoT_AgentSendsUnutilizedMessages: "IoT_AgentSendsUnutilizedMessages",
    /**
     * Identified security related system configuration issues.
     */
    IoT_Baseline: "IoT_Baseline",
    /**
     * You can optimize Edge Hub memory usage by turning off protocol heads for any protocols not used by Edge modules in your solution.
     */
    IoT_EdgeHubMemOptimize: "IoT_EdgeHubMemOptimize",
    /**
     * Logging is disabled for this edge module.
     */
    IoT_EdgeLoggingOptions: "IoT_EdgeLoggingOptions",
    /**
     * A minority within a device security group has inconsistent Edge Module settings with the rest of their group.
     */
    IoT_InconsistentModuleSettings: "IoT_InconsistentModuleSettings",
    /**
     * Install the Azure Security of Things Agent.
     */
    IoT_InstallAgent: "IoT_InstallAgent",
    /**
     * IP Filter Configuration should have rules defined for allowed traffic and should deny all other traffic by default.
     */
    IoT_IPFilter_DenyAll: "IoT_IPFilter_DenyAll",
    /**
     * An Allow IP Filter rules source IP range is too large. Overly permissive rules might expose your IoT hub to malicious intenders.
     */
    IoT_IPFilter_PermissiveRule: "IoT_IPFilter_PermissiveRule",
    /**
     * A listening endpoint was found on the device.
     */
    IoT_OpenPorts: "IoT_OpenPorts",
    /**
     * An Allowed firewall policy was found (INPUT/OUTPUT). The policy should Deny all traffic by default and define rules to allow necessary communication to/from the device.
     */
    IoT_PermissiveFirewallPolicy: "IoT_PermissiveFirewallPolicy",
    /**
     * A rule in the firewall has been found that contains a permissive pattern for a wide range of IP addresses or Ports.
     */
    IoT_PermissiveInputFirewallRules: "IoT_PermissiveInputFirewallRules",
    /**
     * A rule in the firewall has been found that contains a permissive pattern for a wide range of IP addresses or Ports.
     */
    IoT_PermissiveOutputFirewallRules: "IoT_PermissiveOutputFirewallRules",
    /**
     * Edge module is configured to run in privileged mode, with extensive Linux capabilities or with host-level network access (send/receive data to host machine).
     */
    IoT_PrivilegedDockerOptions: "IoT_PrivilegedDockerOptions",
    /**
     * Same authentication credentials to the IoT Hub used by multiple devices. This could indicate an illegitimate device impersonating a legitimate device. It also exposes the risk of device impersonation by an attacker.
     */
    IoT_SharedCredentials: "IoT_SharedCredentials",
    /**
     * Insecure TLS configurations detected. Immediate upgrade recommended.
     */
    IoT_VulnerableTLSCipherSuite: "IoT_VulnerableTLSCipherSuite",
} as const;

/**
 * The type of IoT Security recommendation.
 */
export type RecommendationType = (typeof RecommendationType)[keyof typeof RecommendationType];

export const SecuritySolutionStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Status of the IoT Security solution.
 */
export type SecuritySolutionStatus = (typeof SecuritySolutionStatus)[keyof typeof SecuritySolutionStatus];

export const UnmaskedIpLoggingStatus = {
    /**
     * Unmasked IP logging is disabled
     */
    Disabled: "Disabled",
    /**
     * Unmasked IP logging is enabled
     */
    Enabled: "Enabled",
} as const;

/**
 * Unmasked IP address logging status
 */
export type UnmaskedIpLoggingStatus = (typeof UnmaskedIpLoggingStatus)[keyof typeof UnmaskedIpLoggingStatus];
