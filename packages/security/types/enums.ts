export const ActionType = {
    LogicApp: "LogicApp",
    EventHub: "EventHub",
    Workspace: "Workspace",
} as const;

/**
 * The type of the action that will be triggered by the Automation
 */
export type ActionType = (typeof ActionType)[keyof typeof ActionType];

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

export const ApplicationSourceResourceType = {
    /**
     * The source of the application is assessments
     */
    Assessments: "Assessments",
} as const;

/**
 * The application source, what it affects, e.g. Assessments
 */
export type ApplicationSourceResourceType = (typeof ApplicationSourceResourceType)[keyof typeof ApplicationSourceResourceType];

export const AssessmentStatusCode = {
    /**
     * The resource is healthy
     */
    Healthy: "Healthy",
    /**
     * The resource has a security issue that needs to be addressed
     */
    Unhealthy: "Unhealthy",
    /**
     * Assessment for this resource did not happen
     */
    NotApplicable: "NotApplicable",
} as const;

/**
 * Programmatic code for the status of the assessment
 */
export type AssessmentStatusCode = (typeof AssessmentStatusCode)[keyof typeof AssessmentStatusCode];

export const AssessmentType = {
    /**
     * Microsoft Defender for Cloud managed assessments
     */
    BuiltIn: "BuiltIn",
    /**
     * User defined policies that are automatically ingested from Azure Policy to Microsoft Defender for Cloud
     */
    CustomPolicy: "CustomPolicy",
    /**
     * User assessments pushed directly by the user or other third party to Microsoft Defender for Cloud
     */
    CustomerManaged: "CustomerManaged",
} as const;

/**
 * BuiltIn if the assessment based on built-in Azure Policy definition, Custom if the assessment based on custom Azure Policy definition
 */
export type AssessmentType = (typeof AssessmentType)[keyof typeof AssessmentType];

export const AttestationComplianceState = {
    Unknown: "unknown",
    Compliant: "compliant",
    NonCompliant: "nonCompliant",
} as const;

/**
 * Attest category of this assignment
 */
export type AttestationComplianceState = (typeof AttestationComplianceState)[keyof typeof AttestationComplianceState];

export const AuthenticationType = {
    AccessToken: "AccessToken",
} as const;

/**
 * The authentication type
 */
export type AuthenticationType = (typeof AuthenticationType)[keyof typeof AuthenticationType];

export const AutoDiscovery = {
    Disabled: "Disabled",
    Enabled: "Enabled",
    NotApplicable: "NotApplicable",
} as const;

/**
 * AutoDiscovery states.
 */
export type AutoDiscovery = (typeof AutoDiscovery)[keyof typeof AutoDiscovery];

export const AutoProvision = {
    /**
     * Install missing Azure Arc agents on machines automatically
     */
    On: "On",
    /**
     * Do not install Azure Arc agent on the machines automatically
     */
    Off: "Off",
} as const;

/**
 * Whether or not to automatically install Azure Arc (hybrid compute) agents on machines
 */
export type AutoProvision = (typeof AutoProvision)[keyof typeof AutoProvision];

export const Categories = {
    Compute: "Compute",
    Networking: "Networking",
    Data: "Data",
    IdentityAndAccess: "IdentityAndAccess",
    IoT: "IoT",
} as const;

/**
 * The categories of resource that is at risk when the assessment is unhealthy
 */
export type Categories = (typeof Categories)[keyof typeof Categories];

export const CloudName = {
    Azure: "Azure",
    AWS: "AWS",
    GCP: "GCP",
    Github: "Github",
    AzureDevOps: "AzureDevOps",
    GitLab: "GitLab",
    DockerHub: "DockerHub",
    JFrog: "JFrog",
} as const;

/**
 * The multi cloud resource's cloud name.
 */
export type CloudName = (typeof CloudName)[keyof typeof CloudName];

export const DataSource = {
    /**
     * Devices twin data
     */
    TwinData: "TwinData",
} as const;

export type DataSource = (typeof DataSource)[keyof typeof DataSource];

export const DevOpsProvisioningState = {
    Succeeded: "Succeeded",
    Failed: "Failed",
    Canceled: "Canceled",
    Pending: "Pending",
    PendingDeletion: "PendingDeletion",
    DeletionSuccess: "DeletionSuccess",
    DeletionFailure: "DeletionFailure",
} as const;

/**
 * The provisioning state of the resource.
 * 
 * Pending - Provisioning pending.
 * Failed - Provisioning failed.
 * Succeeded - Successful provisioning.
 * Canceled - Provisioning canceled.
 * PendingDeletion - Deletion pending.
 * DeletionSuccess - Deletion successful.
 * DeletionFailure - Deletion failure.
 */
export type DevOpsProvisioningState = (typeof DevOpsProvisioningState)[keyof typeof DevOpsProvisioningState];

export const Effect = {
    Audit: "Audit",
    Exempt: "Exempt",
    Attest: "Attest",
} as const;

/**
 * Expected effect of this assignment (Audit/Exempt/Attest)
 */
export type Effect = (typeof Effect)[keyof typeof Effect];

export const Enforce = {
    /**
     * Allows the descendants of this scope to override the pricing configuration set on this scope (allows setting inherited="False")
     */
    False: "False",
    /**
     * Prevents overrides and forces the current scope's pricing configuration to all descendants
     */
    True: "True",
} as const;

/**
 * If set to "False", it allows the descendants of this scope to override the pricing configuration set on this scope (allows setting inherited="False"). If set to "True", it prevents overrides and forces this pricing configuration on all the descendants of this scope. This field is only available for subscription-level pricing.
 */
export type Enforce = (typeof Enforce)[keyof typeof Enforce];

export const EnvironmentType = {
    AwsAccount: "AwsAccount",
    GcpProject: "GcpProject",
    GithubScope: "GithubScope",
    AzureDevOpsScope: "AzureDevOpsScope",
    GitlabScope: "GitlabScope",
    DockerHubOrganization: "DockerHubOrganization",
    JFrogArtifactory: "JFrogArtifactory",
} as const;

/**
 * The type of the environment data.
 */
export type EnvironmentType = (typeof EnvironmentType)[keyof typeof EnvironmentType];

export const EventSource = {
    Assessments: "Assessments",
    AssessmentsSnapshot: "AssessmentsSnapshot",
    SubAssessments: "SubAssessments",
    SubAssessmentsSnapshot: "SubAssessmentsSnapshot",
    Alerts: "Alerts",
    SecureScores: "SecureScores",
    SecureScoresSnapshot: "SecureScoresSnapshot",
    SecureScoreControls: "SecureScoreControls",
    SecureScoreControlsSnapshot: "SecureScoreControlsSnapshot",
    RegulatoryComplianceAssessment: "RegulatoryComplianceAssessment",
    RegulatoryComplianceAssessmentSnapshot: "RegulatoryComplianceAssessmentSnapshot",
    AttackPaths: "AttackPaths",
    AttackPathsSnapshot: "AttackPathsSnapshot",
} as const;

/**
 * A valid event source type.
 */
export type EventSource = (typeof EventSource)[keyof typeof EventSource];

export const ExemptionCategory = {
    Waiver: "waiver",
    Mitigated: "mitigated",
} as const;

/**
 * Exemption category of this assignment
 */
export type ExemptionCategory = (typeof ExemptionCategory)[keyof typeof ExemptionCategory];

export const ExportData = {
    /**
     * Agent raw events
     */
    RawEvents: "RawEvents",
} as const;

export type ExportData = (typeof ExportData)[keyof typeof ExportData];

export const GovernanceRuleOwnerSourceType = {
    /**
     * The rule source type defined using resource tag
     */
    ByTag: "ByTag",
    /**
     * The rule source type defined manually
     */
    Manually: "Manually",
} as const;

/**
 * The owner type for the governance rule owner source
 */
export type GovernanceRuleOwnerSourceType = (typeof GovernanceRuleOwnerSourceType)[keyof typeof GovernanceRuleOwnerSourceType];

export const GovernanceRuleSourceResourceType = {
    /**
     * The source of the governance rule is assessments
     */
    Assessments: "Assessments",
} as const;

/**
 * The governance rule source, what the rule affects, e.g. Assessments
 */
export type GovernanceRuleSourceResourceType = (typeof GovernanceRuleSourceResourceType)[keyof typeof GovernanceRuleSourceResourceType];

export const GovernanceRuleType = {
    /**
     * The source of the rule type definition is integrated
     */
    Integrated: "Integrated",
    /**
     * The source of the rule type definition is ServiceNow
     */
    ServiceNow: "ServiceNow",
} as const;

/**
 * The rule type of the governance rule, defines the source of the rule e.g. Integrated
 */
export type GovernanceRuleType = (typeof GovernanceRuleType)[keyof typeof GovernanceRuleType];

export const ImplementationEffort = {
    Low: "Low",
    Moderate: "Moderate",
    High: "High",
} as const;

/**
 * The implementation effort required to remediate this assessment
 */
export type ImplementationEffort = (typeof ImplementationEffort)[keyof typeof ImplementationEffort];

export const IsEnabled = {
    /**
     * Indicates the extension is enabled
     */
    True: "True",
    /**
     * Indicates the extension is disabled
     */
    False: "False",
} as const;

/**
 * Indicates whether the extension is enabled.
 */
export type IsEnabled = (typeof IsEnabled)[keyof typeof IsEnabled];

export const MinimalRiskLevel = {
    /**
     * Get notifications on new attack paths with Critical risk level
     */
    Critical: "Critical",
    /**
     * Get notifications on new attack paths with High or Critical risk level
     */
    High: "High",
    /**
     * Get notifications on new attach paths with Medium, High or Critical risk level
     */
    Medium: "Medium",
    /**
     * Get notifications on new attach paths with Low, Medium, High or Critical risk level
     */
    Low: "Low",
} as const;

/**
 * Defines the minimal attach path risk level which will be sent as email notifications
 */
export type MinimalRiskLevel = (typeof MinimalRiskLevel)[keyof typeof MinimalRiskLevel];

export const MinimalSeverity = {
    /**
     * Get notifications on new alerts with High severity
     */
    High: "High",
    /**
     * Get notifications on new alerts with Medium or High severity
     */
    Medium: "Medium",
    /**
     * Get notifications on new alerts with Low, Medium or High severity
     */
    Low: "Low",
} as const;

/**
 * Defines the minimal alert severity which will be sent as email notifications
 */
export type MinimalSeverity = (typeof MinimalSeverity)[keyof typeof MinimalSeverity];

export const OfferingType = {
    CspmMonitorAws: "CspmMonitorAws",
    DefenderForContainersAws: "DefenderForContainersAws",
    DefenderForServersAws: "DefenderForServersAws",
    DefenderForDatabasesAws: "DefenderForDatabasesAws",
    CspmMonitorGcp: "CspmMonitorGcp",
    CspmMonitorGithub: "CspmMonitorGithub",
    CspmMonitorAzureDevOps: "CspmMonitorAzureDevOps",
    DefenderForServersGcp: "DefenderForServersGcp",
    DefenderForContainersGcp: "DefenderForContainersGcp",
    DefenderForDatabasesGcp: "DefenderForDatabasesGcp",
    DefenderCspmAws: "DefenderCspmAws",
    DefenderCspmGcp: "DefenderCspmGcp",
    CspmMonitorGitLab: "CspmMonitorGitLab",
    CspmMonitorDockerHub: "CspmMonitorDockerHub",
    DefenderForContainersDockerHub: "DefenderForContainersDockerHub",
    DefenderCspmDockerHub: "DefenderCspmDockerHub",
    CspmMonitorJFrog: "CspmMonitorJFrog",
    DefenderForContainersJFrog: "DefenderForContainersJFrog",
    DefenderCspmJFrog: "DefenderCspmJFrog",
} as const;

/**
 * The type of the security offering.
 */
export type OfferingType = (typeof OfferingType)[keyof typeof OfferingType];

export const Operator = {
    /**
     * Applies for decimal and non-decimal operands
     */
    Equals: "Equals",
    /**
     * Applies only for decimal operands
     */
    GreaterThan: "GreaterThan",
    /**
     * Applies only for decimal operands
     */
    GreaterThanOrEqualTo: "GreaterThanOrEqualTo",
    /**
     * Applies only for decimal operands
     */
    LesserThan: "LesserThan",
    /**
     * Applies only for decimal operands
     */
    LesserThanOrEqualTo: "LesserThanOrEqualTo",
    /**
     * Applies  for decimal and non-decimal operands
     */
    NotEquals: "NotEquals",
    /**
     * Applies only for non-decimal operands
     */
    Contains: "Contains",
    /**
     * Applies only for non-decimal operands
     */
    StartsWith: "StartsWith",
    /**
     * Applies only for non-decimal operands
     */
    EndsWith: "EndsWith",
} as const;

/**
 * A valid comparer operator to use. A case-insensitive comparison will be applied for String PropertyType.
 */
export type Operator = (typeof Operator)[keyof typeof Operator];

export const OrganizationMembershipType = {
    Member: "Member",
    Organization: "Organization",
} as const;

/**
 * The multi cloud account's membership type in the organization
 */
export type OrganizationMembershipType = (typeof OrganizationMembershipType)[keyof typeof OrganizationMembershipType];

export const PricingTier = {
    /**
     * Get free Microsoft Defender for Cloud experience with basic security features
     */
    Free: "Free",
    /**
     * Get the standard Microsoft Defender for Cloud experience with advanced security features
     */
    Standard: "Standard",
} as const;

/**
 * Indicates whether the Defender plan is enabled on the selected scope. Microsoft Defender for Cloud is provided in two pricing tiers: free and standard. The standard tier offers advanced security capabilities, while the free tier offers basic security features.
 */
export type PricingTier = (typeof PricingTier)[keyof typeof PricingTier];

export const PropertyType = {
    String: "String",
    Integer: "Integer",
    Number: "Number",
    Boolean: "Boolean",
} as const;

/**
 * The data type of the compared operands (string, integer, floating point number or a boolean [true/false]]
 */
export type PropertyType = (typeof PropertyType)[keyof typeof PropertyType];

export const Protocol = {
    TCP: "TCP",
    UDP: "UDP",
    All: "*",
} as const;

export type Protocol = (typeof Protocol)[keyof typeof Protocol];

export const RecommendationConfigStatus = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * Recommendation status. When the recommendation status is disabled recommendations are not generated.
 */
export type RecommendationConfigStatus = (typeof RecommendationConfigStatus)[keyof typeof RecommendationConfigStatus];

export const RecommendationSupportedClouds = {
    Azure: "Azure",
    AWS: "AWS",
    GCP: "GCP",
} as const;

/**
 * The cloud that the recommendation is supported on.
 */
export type RecommendationSupportedClouds = (typeof RecommendationSupportedClouds)[keyof typeof RecommendationSupportedClouds];

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

export const RuleState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
    Expired: "Expired",
} as const;

/**
 * Possible states of the rule
 */
export type RuleState = (typeof RuleState)[keyof typeof RuleState];

export const ScanningMode = {
    Default: "Default",
} as const;

/**
 * The scanning mode for the VM scan.
 */
export type ScanningMode = (typeof ScanningMode)[keyof typeof ScanningMode];

export const SecurityContactRole = {
    /**
     * If enabled, send notification on new alerts to the account admins
     */
    AccountAdmin: "AccountAdmin",
    /**
     * If enabled, send notification on new alerts to the service admins
     */
    ServiceAdmin: "ServiceAdmin",
    /**
     * If enabled, send notification on new alerts to the subscription owners
     */
    Owner: "Owner",
    /**
     * If enabled, send notification on new alerts to the subscription contributors
     */
    Contributor: "Contributor",
} as const;

/**
 * A possible role to configure sending security notification alerts to
 */
export type SecurityContactRole = (typeof SecurityContactRole)[keyof typeof SecurityContactRole];

export const SecurityIssue = {
    Vulnerability: "Vulnerability",
    ExcessivePermissions: "ExcessivePermissions",
    AnonymousAccess: "AnonymousAccess",
    NetworkExposure: "NetworkExposure",
    TrafficEncryption: "TrafficEncryption",
    BestPractices: "BestPractices",
} as const;

/**
 * The severity to relate to the assessments generated by this Recommendation.
 */
export type SecurityIssue = (typeof SecurityIssue)[keyof typeof SecurityIssue];

export const SecuritySolutionStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Status of the IoT Security solution.
 */
export type SecuritySolutionStatus = (typeof SecuritySolutionStatus)[keyof typeof SecuritySolutionStatus];

export const ServerVulnerabilityAssessmentsAzureSettingSelectedProvider = {
    /**
     * Microsoft Defender for Endpoints threat and vulnerability management.
     */
    MdeTvm: "MdeTvm",
} as const;

/**
 * The selected vulnerability assessments provider on Azure servers in the defined scope.
 */
export type ServerVulnerabilityAssessmentsAzureSettingSelectedProvider = (typeof ServerVulnerabilityAssessmentsAzureSettingSelectedProvider)[keyof typeof ServerVulnerabilityAssessmentsAzureSettingSelectedProvider];

export const ServerVulnerabilityAssessmentsSettingKind = {
    AzureServersSetting: "AzureServersSetting",
} as const;

/**
 * The kind of the server vulnerability assessments setting.
 */
export type ServerVulnerabilityAssessmentsSettingKind = (typeof ServerVulnerabilityAssessmentsSettingKind)[keyof typeof ServerVulnerabilityAssessmentsSettingKind];

export const Severity = {
    Low: "Low",
    Medium: "Medium",
    High: "High",
} as const;

/**
 * The severity level of the assessment
 */
export type Severity = (typeof Severity)[keyof typeof Severity];

export const SeverityEnum = {
    High: "High",
    Medium: "Medium",
    Low: "Low",
} as const;

/**
 * The severity to relate to the assessments generated by this Recommendation.
 */
export type SeverityEnum = (typeof SeverityEnum)[keyof typeof SeverityEnum];

export const Source = {
    /**
     * Resource is in Azure
     */
    Azure: "Azure",
    /**
     * Resource in an on premise machine connected to Azure cloud
     */
    OnPremise: "OnPremise",
    /**
     * SQL Resource in an on premise machine connected to Azure cloud
     */
    OnPremiseSql: "OnPremiseSql",
} as const;

/**
 * The platform where the assessed resource resides
 */
export type Source = (typeof Source)[keyof typeof Source];

export const SourceType = {
    Alert: "Alert",
    AttackPath: "AttackPath",
} as const;

/**
 * The source type that will trigger the notification
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];

export const StandardSupportedCloud = {
    Azure: "Azure",
    AWS: "AWS",
    GCP: "GCP",
} as const;

/**
 * The cloud that the standard is supported on.
 */
export type StandardSupportedCloud = (typeof StandardSupportedCloud)[keyof typeof StandardSupportedCloud];

export const StandardSupportedClouds = {
    AWS: "AWS",
    GCP: "GCP",
} as const;

/**
 * The cloud that the standard is supported on.
 */
export type StandardSupportedClouds = (typeof StandardSupportedClouds)[keyof typeof StandardSupportedClouds];

export const State = {
    /**
     * Send notification on new alerts to the subscription's admins
     */
    On: "On",
    /**
     * Don't send notification on new alerts to the subscription's admins
     */
    Off: "Off",
} as const;

/**
 * Defines whether to send email notifications from AMicrosoft Defender for Cloud to persons with specific RBAC roles on the subscription.
 */
export type State = (typeof State)[keyof typeof State];

export const Status = {
    Revoked: "Revoked",
    Initiated: "Initiated",
} as const;

/**
 * The status of the port
 */
export type Status = (typeof Status)[keyof typeof Status];

export const StatusReason = {
    Expired: "Expired",
    UserRequested: "UserRequested",
    NewerRequestInitiated: "NewerRequestInitiated",
} as const;

/**
 * A description of why the `status` has its value
 */
export type StatusReason = (typeof StatusReason)[keyof typeof StatusReason];

export const SubPlan = {
    P1: "P1",
    P2: "P2",
} as const;

/**
 * The available sub plans
 */
export type SubPlan = (typeof SubPlan)[keyof typeof SubPlan];

export const SupportedCloudEnum = {
    AWS: "AWS",
    GCP: "GCP",
} as const;

/**
 * Relevant cloud for the custom assessment automation.
 */
export type SupportedCloudEnum = (typeof SupportedCloudEnum)[keyof typeof SupportedCloudEnum];

export const Tactics = {
    Reconnaissance: "Reconnaissance",
    Resource_Development: "Resource Development",
    Initial_Access: "Initial Access",
    Execution: "Execution",
    Persistence: "Persistence",
    Privilege_Escalation: "Privilege Escalation",
    Defense_Evasion: "Defense Evasion",
    Credential_Access: "Credential Access",
    Discovery: "Discovery",
    Lateral_Movement: "Lateral Movement",
    Collection: "Collection",
    Command_and_Control: "Command and Control",
    Exfiltration: "Exfiltration",
    Impact: "Impact",
} as const;

/**
 * Tactic of the assessment
 */
export type Tactics = (typeof Tactics)[keyof typeof Tactics];

export const Techniques = {
    Abuse_Elevation_Control_Mechanism: "Abuse Elevation Control Mechanism",
    Access_Token_Manipulation: "Access Token Manipulation",
    Account_Discovery: "Account Discovery",
    Account_Manipulation: "Account Manipulation",
    Active_Scanning: "Active Scanning",
    Application_Layer_Protocol: "Application Layer Protocol",
    Audio_Capture: "Audio Capture",
    Boot_or_Logon_Autostart_Execution: "Boot or Logon Autostart Execution",
    Boot_or_Logon_Initialization_Scripts: "Boot or Logon Initialization Scripts",
    Brute_Force: "Brute Force",
    Cloud_Infrastructure_Discovery: "Cloud Infrastructure Discovery",
    Cloud_Service_Dashboard: "Cloud Service Dashboard",
    Cloud_Service_Discovery: "Cloud Service Discovery",
    Command_and_Scripting_Interpreter: "Command and Scripting Interpreter",
    Compromise_Client_Software_Binary: "Compromise Client Software Binary",
    Compromise_Infrastructure: "Compromise Infrastructure",
    Container_and_Resource_Discovery: "Container and Resource Discovery",
    Create_Account: "Create Account",
    Create_or_Modify_System_Process: "Create or Modify System Process",
    Credentials_from_Password_Stores: "Credentials from Password Stores",
    Data_Destruction: "Data Destruction",
    Data_Encrypted_for_Impact: "Data Encrypted for Impact",
    Data_from_Cloud_Storage_Object: "Data from Cloud Storage Object",
    Data_from_Configuration_Repository: "Data from Configuration Repository",
    Data_from_Information_Repositories: "Data from Information Repositories",
    Data_from_Local_System: "Data from Local System",
    Data_Manipulation: "Data Manipulation",
    Data_Staged: "Data Staged",
    Defacement: "Defacement",
    Deobfuscate_Decode_Files_or_Information: "Deobfuscate/Decode Files or Information",
    Disk_Wipe: "Disk Wipe",
    Domain_Trust_Discovery: "Domain Trust Discovery",
    Drive_by_Compromise: "Drive-by Compromise",
    Dynamic_Resolution: "Dynamic Resolution",
    Endpoint_Denial_of_Service: "Endpoint Denial of Service",
    Event_Triggered_Execution: "Event Triggered Execution",
    Exfiltration_Over_Alternative_Protocol: "Exfiltration Over Alternative Protocol",
    Exploit_Public_Facing_Application: "Exploit Public-Facing Application",
    Exploitation_for_Client_Execution: "Exploitation for Client Execution",
    Exploitation_for_Credential_Access: "Exploitation for Credential Access",
    Exploitation_for_Defense_Evasion: "Exploitation for Defense Evasion",
    Exploitation_for_Privilege_Escalation: "Exploitation for Privilege Escalation",
    Exploitation_of_Remote_Services: "Exploitation of Remote Services",
    External_Remote_Services: "External Remote Services",
    Fallback_Channels: "Fallback Channels",
    File_and_Directory_Discovery: "File and Directory Discovery",
    Gather_Victim_Network_Information: "Gather Victim Network Information",
    Hide_Artifacts: "Hide Artifacts",
    Hijack_Execution_Flow: "Hijack Execution Flow",
    Impair_Defenses: "Impair Defenses",
    Implant_Container_Image: "Implant Container Image",
    Indicator_Removal_on_Host: "Indicator Removal on Host",
    Indirect_Command_Execution: "Indirect Command Execution",
    Ingress_Tool_Transfer: "Ingress Tool Transfer",
    Input_Capture: "Input Capture",
    Inter_Process_Communication: "Inter-Process Communication",
    Lateral_Tool_Transfer: "Lateral Tool Transfer",
    Man_in_the_Middle: "Man-in-the-Middle",
    Masquerading: "Masquerading",
    Modify_Authentication_Process: "Modify Authentication Process",
    Modify_Registry: "Modify Registry",
    Network_Denial_of_Service: "Network Denial of Service",
    Network_Service_Scanning: "Network Service Scanning",
    Network_Sniffing: "Network Sniffing",
    Non_Application_Layer_Protocol: "Non-Application Layer Protocol",
    Non_Standard_Port: "Non-Standard Port",
    Obtain_Capabilities: "Obtain Capabilities",
    Obfuscated_Files_or_Information: "Obfuscated Files or Information",
    Office_Application_Startup: "Office Application Startup",
    OS_Credential_Dumping: "OS Credential Dumping",
    Permission_Groups_Discovery: "Permission Groups Discovery",
    Phishing: "Phishing",
    Pre_OS_Boot: "Pre-OS Boot",
    Process_Discovery: "Process Discovery",
    Process_Injection: "Process Injection",
    Protocol_Tunneling: "Protocol Tunneling",
    Proxy: "Proxy",
    Query_Registry: "Query Registry",
    Remote_Access_Software: "Remote Access Software",
    Remote_Service_Session_Hijacking: "Remote Service Session Hijacking",
    Remote_Services: "Remote Services",
    Remote_System_Discovery: "Remote System Discovery",
    Resource_Hijacking: "Resource Hijacking",
    Scheduled_Task_Job: "Scheduled Task/Job",
    Screen_Capture: "Screen Capture",
    Search_Victim_Owned_Websites: "Search Victim-Owned Websites",
    Server_Software_Component: "Server Software Component",
    Service_Stop: "Service Stop",
    Signed_Binary_Proxy_Execution: "Signed Binary Proxy Execution",
    Software_Deployment_Tools: "Software Deployment Tools",
    SQL_Stored_Procedures: "SQL Stored Procedures",
    Steal_or_Forge_Kerberos_Tickets: "Steal or Forge Kerberos Tickets",
    Subvert_Trust_Controls: "Subvert Trust Controls",
    Supply_Chain_Compromise: "Supply Chain Compromise",
    System_Information_Discovery: "System Information Discovery",
    Taint_Shared_Content: "Taint Shared Content",
    Traffic_Signaling: "Traffic Signaling",
    Transfer_Data_to_Cloud_Account: "Transfer Data to Cloud Account",
    Trusted_Relationship: "Trusted Relationship",
    Unsecured_Credentials: "Unsecured Credentials",
    User_Execution: "User Execution",
    Valid_Accounts: "Valid Accounts",
    Windows_Management_Instrumentation: "Windows Management Instrumentation",
    File_and_Directory_Permissions_Modification: "File and Directory Permissions Modification",
} as const;

/**
 * Techniques of the assessment
 */
export type Techniques = (typeof Techniques)[keyof typeof Techniques];

export const Threats = {
    AccountBreach: "accountBreach",
    DataExfiltration: "dataExfiltration",
    DataSpillage: "dataSpillage",
    MaliciousInsider: "maliciousInsider",
    ElevationOfPrivilege: "elevationOfPrivilege",
    ThreatResistance: "threatResistance",
    MissingCoverage: "missingCoverage",
    DenialOfService: "denialOfService",
} as const;

/**
 * Threats impact of the assessment
 */
export type Threats = (typeof Threats)[keyof typeof Threats];

export const Type = {
    Qualys: "Qualys",
    TVM: "TVM",
} as const;

/**
 * The Vulnerability Assessment solution to be provisioned. Can be either 'TVM' or 'Qualys'
 */
export type Type = (typeof Type)[keyof typeof Type];

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

export const UserImpact = {
    Low: "Low",
    Moderate: "Moderate",
    High: "High",
} as const;

/**
 * The user impact of the assessment
 */
export type UserImpact = (typeof UserImpact)[keyof typeof UserImpact];
