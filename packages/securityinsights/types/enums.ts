export const ActionType = {
    /**
     * Modify an object's properties
     */
    ModifyProperties: "ModifyProperties",
    /**
     * Run a playbook on an object
     */
    RunPlaybook: "RunPlaybook",
    /**
     * Add a task to an incident object
     */
    AddIncidentTask: "AddIncidentTask",
} as const;

/**
 * The type of the automation rule action.
 */
export type ActionType = (typeof ActionType)[keyof typeof ActionType];

export const AgentType = {
    SAP: "SAP",
} as const;

/**
 * Type of the agent
 */
export type AgentType = (typeof AgentType)[keyof typeof AgentType];

export const AlertDetail = {
    /**
     * Alert display name
     */
    DisplayName: "DisplayName",
    /**
     * Alert severity
     */
    Severity: "Severity",
} as const;

/**
 * Alert detail
 */
export type AlertDetail = (typeof AlertDetail)[keyof typeof AlertDetail];

export const AlertProperty = {
    /**
     * Alert's link
     */
    AlertLink: "AlertLink",
    /**
     * Confidence level property
     */
    ConfidenceLevel: "ConfidenceLevel",
    /**
     * Confidence score
     */
    ConfidenceScore: "ConfidenceScore",
    /**
     * Extended links to the alert
     */
    ExtendedLinks: "ExtendedLinks",
    /**
     * Product name alert property
     */
    ProductName: "ProductName",
    /**
     * Provider name alert property
     */
    ProviderName: "ProviderName",
    /**
     * Product component name alert property
     */
    ProductComponentName: "ProductComponentName",
    /**
     * Remediation steps alert property
     */
    RemediationSteps: "RemediationSteps",
    /**
     * Techniques alert property
     */
    Techniques: "Techniques",
} as const;

/**
 * The V3 alert property
 */
export type AlertProperty = (typeof AlertProperty)[keyof typeof AlertProperty];

export const AlertRuleKind = {
    Scheduled: "Scheduled",
    MicrosoftSecurityIncidentCreation: "MicrosoftSecurityIncidentCreation",
    Fusion: "Fusion",
} as const;

/**
 * The alert rule kind
 */
export type AlertRuleKind = (typeof AlertRuleKind)[keyof typeof AlertRuleKind];

export const AlertSeverity = {
    /**
     * High severity
     */
    High: "High",
    /**
     * Medium severity
     */
    Medium: "Medium",
    /**
     * Low severity
     */
    Low: "Low",
    /**
     * Informational severity
     */
    Informational: "Informational",
} as const;

/**
 * The severity for alerts created by this alert rule.
 */
export type AlertSeverity = (typeof AlertSeverity)[keyof typeof AlertSeverity];

export const AttackTactic = {
    Reconnaissance: "Reconnaissance",
    ResourceDevelopment: "ResourceDevelopment",
    InitialAccess: "InitialAccess",
    Execution: "Execution",
    Persistence: "Persistence",
    PrivilegeEscalation: "PrivilegeEscalation",
    DefenseEvasion: "DefenseEvasion",
    CredentialAccess: "CredentialAccess",
    Discovery: "Discovery",
    LateralMovement: "LateralMovement",
    Collection: "Collection",
    Exfiltration: "Exfiltration",
    CommandAndControl: "CommandAndControl",
    Impact: "Impact",
    PreAttack: "PreAttack",
    ImpairProcessControl: "ImpairProcessControl",
    InhibitResponseFunction: "InhibitResponseFunction",
} as const;

/**
 * The severity for alerts created by this alert rule.
 */
export type AttackTactic = (typeof AttackTactic)[keyof typeof AttackTactic];

export const AutomationRuleBooleanConditionSupportedOperator = {
    /**
     * Evaluates as true if all the item conditions are evaluated as true
     */
    And: "And",
    /**
     * Evaluates as true if at least one of the item conditions are evaluated as true
     */
    Or: "Or",
} as const;

/**
 * Describes a boolean condition operator.
 */
export type AutomationRuleBooleanConditionSupportedOperator = (typeof AutomationRuleBooleanConditionSupportedOperator)[keyof typeof AutomationRuleBooleanConditionSupportedOperator];

export const AutomationRulePropertyArrayChangedConditionSupportedArrayType = {
    /**
     * Evaluate the condition on the alerts
     */
    Alerts: "Alerts",
    /**
     * Evaluate the condition on the labels
     */
    Labels: "Labels",
    /**
     * Evaluate the condition on the tactics
     */
    Tactics: "Tactics",
    /**
     * Evaluate the condition on the comments
     */
    Comments: "Comments",
} as const;

export type AutomationRulePropertyArrayChangedConditionSupportedArrayType = (typeof AutomationRulePropertyArrayChangedConditionSupportedArrayType)[keyof typeof AutomationRulePropertyArrayChangedConditionSupportedArrayType];

export const AutomationRulePropertyArrayChangedConditionSupportedChangeType = {
    /**
     * Evaluate the condition on items added to the array
     */
    Added: "Added",
} as const;

export type AutomationRulePropertyArrayChangedConditionSupportedChangeType = (typeof AutomationRulePropertyArrayChangedConditionSupportedChangeType)[keyof typeof AutomationRulePropertyArrayChangedConditionSupportedChangeType];

export const AutomationRulePropertyArrayConditionSupportedArrayConditionType = {
    /**
     * Evaluate the condition as true if any item fulfills it
     */
    AnyItem: "AnyItem",
} as const;

/**
 * Describes an array condition evaluation type.
 */
export type AutomationRulePropertyArrayConditionSupportedArrayConditionType = (typeof AutomationRulePropertyArrayConditionSupportedArrayConditionType)[keyof typeof AutomationRulePropertyArrayConditionSupportedArrayConditionType];

export const AutomationRulePropertyArrayConditionSupportedArrayType = {
    /**
     * Evaluate the condition on the custom detail keys
     */
    CustomDetails: "CustomDetails",
    /**
     * Evaluate the condition on a custom detail's values
     */
    CustomDetailValues: "CustomDetailValues",
} as const;

/**
 * Describes an array condition evaluated array type.
 */
export type AutomationRulePropertyArrayConditionSupportedArrayType = (typeof AutomationRulePropertyArrayConditionSupportedArrayType)[keyof typeof AutomationRulePropertyArrayConditionSupportedArrayType];

export const AutomationRulePropertyChangedConditionSupportedChangedType = {
    /**
     * Evaluate the condition on the previous value of the property
     */
    ChangedFrom: "ChangedFrom",
    /**
     * Evaluate the condition on the updated value of the property
     */
    ChangedTo: "ChangedTo",
} as const;

export type AutomationRulePropertyChangedConditionSupportedChangedType = (typeof AutomationRulePropertyChangedConditionSupportedChangedType)[keyof typeof AutomationRulePropertyChangedConditionSupportedChangedType];

export const AutomationRulePropertyChangedConditionSupportedPropertyType = {
    /**
     * Evaluate the condition on the incident severity
     */
    IncidentSeverity: "IncidentSeverity",
    /**
     * Evaluate the condition on the incident status
     */
    IncidentStatus: "IncidentStatus",
    /**
     * Evaluate the condition on the incident owner
     */
    IncidentOwner: "IncidentOwner",
} as const;

export type AutomationRulePropertyChangedConditionSupportedPropertyType = (typeof AutomationRulePropertyChangedConditionSupportedPropertyType)[keyof typeof AutomationRulePropertyChangedConditionSupportedPropertyType];

export const AutomationRulePropertyConditionSupportedOperator = {
    /**
     * Evaluates if the property equals at least one of the condition values
     */
    Equals: "Equals",
    /**
     * Evaluates if the property does not equal any of the condition values
     */
    NotEquals: "NotEquals",
    /**
     * Evaluates if the property contains at least one of the condition values
     */
    Contains: "Contains",
    /**
     * Evaluates if the property does not contain any of the condition values
     */
    NotContains: "NotContains",
    /**
     * Evaluates if the property starts with any of the condition values
     */
    StartsWith: "StartsWith",
    /**
     * Evaluates if the property does not start with any of the condition values
     */
    NotStartsWith: "NotStartsWith",
    /**
     * Evaluates if the property ends with any of the condition values
     */
    EndsWith: "EndsWith",
    /**
     * Evaluates if the property does not end with any of the condition values
     */
    NotEndsWith: "NotEndsWith",
} as const;

export type AutomationRulePropertyConditionSupportedOperator = (typeof AutomationRulePropertyConditionSupportedOperator)[keyof typeof AutomationRulePropertyConditionSupportedOperator];

export const AutomationRulePropertyConditionSupportedProperty = {
    /**
     * The title of the incident
     */
    IncidentTitle: "IncidentTitle",
    /**
     * The description of the incident
     */
    IncidentDescription: "IncidentDescription",
    /**
     * The severity of the incident
     */
    IncidentSeverity: "IncidentSeverity",
    /**
     * The status of the incident
     */
    IncidentStatus: "IncidentStatus",
    /**
     * The related Analytic rule ids of the incident
     */
    IncidentRelatedAnalyticRuleIds: "IncidentRelatedAnalyticRuleIds",
    /**
     * The tactics of the incident
     */
    IncidentTactics: "IncidentTactics",
    /**
     * The labels of the incident
     */
    IncidentLabel: "IncidentLabel",
    /**
     * The provider name of the incident
     */
    IncidentProviderName: "IncidentProviderName",
    /**
     * The update source of the incident
     */
    IncidentUpdatedBySource: "IncidentUpdatedBySource",
    /**
     * The incident custom detail key
     */
    IncidentCustomDetailsKey: "IncidentCustomDetailsKey",
    /**
     * The incident custom detail value
     */
    IncidentCustomDetailsValue: "IncidentCustomDetailsValue",
    /**
     * The account Azure Active Directory tenant id
     */
    AccountAadTenantId: "AccountAadTenantId",
    /**
     * The account Azure Active Directory user id
     */
    AccountAadUserId: "AccountAadUserId",
    /**
     * The account name
     */
    AccountName: "AccountName",
    /**
     * The account NetBIOS domain name
     */
    AccountNTDomain: "AccountNTDomain",
    /**
     * The account Azure Active Directory Passport User ID
     */
    AccountPUID: "AccountPUID",
    /**
     * The account security identifier
     */
    AccountSid: "AccountSid",
    /**
     * The account unique identifier
     */
    AccountObjectGuid: "AccountObjectGuid",
    /**
     * The account user principal name suffix
     */
    AccountUPNSuffix: "AccountUPNSuffix",
    /**
     * The name of the product of the alert
     */
    AlertProductNames: "AlertProductNames",
    /**
     * The analytic rule ids of the alert
     */
    AlertAnalyticRuleIds: "AlertAnalyticRuleIds",
    /**
     * The Azure resource id
     */
    AzureResourceResourceId: "AzureResourceResourceId",
    /**
     * The Azure resource subscription id
     */
    AzureResourceSubscriptionId: "AzureResourceSubscriptionId",
    /**
     * The cloud application identifier
     */
    CloudApplicationAppId: "CloudApplicationAppId",
    /**
     * The cloud application name
     */
    CloudApplicationAppName: "CloudApplicationAppName",
    /**
     * The dns record domain name
     */
    DNSDomainName: "DNSDomainName",
    /**
     * The file directory full path
     */
    FileDirectory: "FileDirectory",
    /**
     * The file name without path
     */
    FileName: "FileName",
    /**
     * The file hash value
     */
    FileHashValue: "FileHashValue",
    /**
     * The host Azure resource id
     */
    HostAzureID: "HostAzureID",
    /**
     * The host name without domain
     */
    HostName: "HostName",
    /**
     * The host NetBIOS name
     */
    HostNetBiosName: "HostNetBiosName",
    /**
     * The host NT domain
     */
    HostNTDomain: "HostNTDomain",
    /**
     * The host operating system
     */
    HostOSVersion: "HostOSVersion",
    /**
     * "The IoT device id
     */
    IoTDeviceId: "IoTDeviceId",
    /**
     * The IoT device name
     */
    IoTDeviceName: "IoTDeviceName",
    /**
     * The IoT device type
     */
    IoTDeviceType: "IoTDeviceType",
    /**
     * The IoT device vendor
     */
    IoTDeviceVendor: "IoTDeviceVendor",
    /**
     * The IoT device model
     */
    IoTDeviceModel: "IoTDeviceModel",
    /**
     * The IoT device operating system
     */
    IoTDeviceOperatingSystem: "IoTDeviceOperatingSystem",
    /**
     * The IP address
     */
    IPAddress: "IPAddress",
    /**
     * The mailbox display name
     */
    MailboxDisplayName: "MailboxDisplayName",
    /**
     * The mailbox primary address
     */
    MailboxPrimaryAddress: "MailboxPrimaryAddress",
    /**
     * The mailbox user principal name
     */
    MailboxUPN: "MailboxUPN",
    /**
     * The mail message delivery action
     */
    MailMessageDeliveryAction: "MailMessageDeliveryAction",
    /**
     * The mail message delivery location
     */
    MailMessageDeliveryLocation: "MailMessageDeliveryLocation",
    /**
     * The mail message recipient
     */
    MailMessageRecipient: "MailMessageRecipient",
    /**
     * The mail message sender IP address
     */
    MailMessageSenderIP: "MailMessageSenderIP",
    /**
     * The mail message subject
     */
    MailMessageSubject: "MailMessageSubject",
    /**
     * The mail message P1 sender
     */
    MailMessageP1Sender: "MailMessageP1Sender",
    /**
     * The mail message P2 sender
     */
    MailMessageP2Sender: "MailMessageP2Sender",
    /**
     * The malware category
     */
    MalwareCategory: "MalwareCategory",
    /**
     * The malware name
     */
    MalwareName: "MalwareName",
    /**
     * The process execution command line
     */
    ProcessCommandLine: "ProcessCommandLine",
    /**
     * The process id
     */
    ProcessId: "ProcessId",
    /**
     * The registry key path
     */
    RegistryKey: "RegistryKey",
    /**
     * The registry key value in string formatted representation
     */
    RegistryValueData: "RegistryValueData",
    /**
     * The url
     */
    Url: "Url",
} as const;

/**
 * The property to evaluate in an automation rule property condition.
 */
export type AutomationRulePropertyConditionSupportedProperty = (typeof AutomationRulePropertyConditionSupportedProperty)[keyof typeof AutomationRulePropertyConditionSupportedProperty];

export const CcpAuthType = {
    Basic: "Basic",
    APIKey: "APIKey",
    OAuth2: "OAuth2",
    AWS: "AWS",
    GCP: "GCP",
    Session: "Session",
    JwtToken: "JwtToken",
    GitHub: "GitHub",
    ServiceBus: "ServiceBus",
    Oracle: "Oracle",
    None: "None",
} as const;

/**
 * The auth type
 */
export type CcpAuthType = (typeof CcpAuthType)[keyof typeof CcpAuthType];

export const ConditionType = {
    /**
     * Evaluate an object property value
     */
    Property: "Property",
    /**
     * Evaluate an object array property value
     */
    PropertyArray: "PropertyArray",
    /**
     * Evaluate an object property changed value
     */
    PropertyChanged: "PropertyChanged",
    /**
     * Evaluate an object array property changed value
     */
    PropertyArrayChanged: "PropertyArrayChanged",
    /**
     * Apply a boolean operator (e.g AND, OR) to conditions
     */
    Boolean: "Boolean",
} as const;

export type ConditionType = (typeof ConditionType)[keyof typeof ConditionType];

export const ConfigurationType = {
    SAP: "SAP",
} as const;

/**
 * Represents the types of configuration for a system.
 */
export type ConfigurationType = (typeof ConfigurationType)[keyof typeof ConfigurationType];

export const ContentType = {
    AnalyticsRule: "AnalyticsRule",
    Workbook: "Workbook",
} as const;

/**
 * Content type.
 */
export type ContentType = (typeof ContentType)[keyof typeof ContentType];

export const CustomEntityQueryKind = {
    Activity: "Activity",
} as const;

/**
 * the entity query kind
 */
export type CustomEntityQueryKind = (typeof CustomEntityQueryKind)[keyof typeof CustomEntityQueryKind];

export const DataConnectorDefinitionKind = {
    Customizable: "Customizable",
} as const;

/**
 * The data connector kind
 */
export type DataConnectorDefinitionKind = (typeof DataConnectorDefinitionKind)[keyof typeof DataConnectorDefinitionKind];

export const DataConnectorKind = {
    AzureActiveDirectory: "AzureActiveDirectory",
    AzureSecurityCenter: "AzureSecurityCenter",
    MicrosoftCloudAppSecurity: "MicrosoftCloudAppSecurity",
    ThreatIntelligence: "ThreatIntelligence",
    MicrosoftThreatIntelligence: "MicrosoftThreatIntelligence",
    PremiumMicrosoftDefenderForThreatIntelligence: "PremiumMicrosoftDefenderForThreatIntelligence",
    Office365: "Office365",
    AmazonWebServicesCloudTrail: "AmazonWebServicesCloudTrail",
    AzureAdvancedThreatProtection: "AzureAdvancedThreatProtection",
    MicrosoftDefenderAdvancedThreatProtection: "MicrosoftDefenderAdvancedThreatProtection",
    RestApiPoller: "RestApiPoller",
} as const;

/**
 * The data connector kind
 */
export type DataConnectorKind = (typeof DataConnectorKind)[keyof typeof DataConnectorKind];

export const DataTypeState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Describe whether this data type connection is enabled or not.
 */
export type DataTypeState = (typeof DataTypeState)[keyof typeof DataTypeState];

export const DeploymentFetchStatus = {
    Success: "Success",
    Unauthorized: "Unauthorized",
    NotFound: "NotFound",
} as const;

/**
 * Status while fetching the last deployment.
 */
export type DeploymentFetchStatus = (typeof DeploymentFetchStatus)[keyof typeof DeploymentFetchStatus];

export const DeploymentResult = {
    Success: "Success",
    Canceled: "Canceled",
    Failed: "Failed",
} as const;

/**
 * The outcome of the deployment.
 */
export type DeploymentResult = (typeof DeploymentResult)[keyof typeof DeploymentResult];

export const DeploymentState = {
    In_Progress: "In_Progress",
    Completed: "Completed",
    Queued: "Queued",
    Canceling: "Canceling",
} as const;

/**
 * Current status of the deployment.
 */
export type DeploymentState = (typeof DeploymentState)[keyof typeof DeploymentState];

export const EntityMappingType = {
    /**
     * User account entity type
     */
    Account: "Account",
    /**
     * Host entity type
     */
    Host: "Host",
    /**
     * IP address entity type
     */
    IP: "IP",
    /**
     * Malware entity type
     */
    Malware: "Malware",
    /**
     * System file entity type
     */
    File: "File",
    /**
     * Process entity type
     */
    Process: "Process",
    /**
     * Cloud app entity type
     */
    CloudApplication: "CloudApplication",
    /**
     * DNS entity type
     */
    DNS: "DNS",
    /**
     * Azure resource entity type
     */
    AzureResource: "AzureResource",
    /**
     * File-hash entity type
     */
    FileHash: "FileHash",
    /**
     * Registry key entity type
     */
    RegistryKey: "RegistryKey",
    /**
     * Registry value entity type
     */
    RegistryValue: "RegistryValue",
    /**
     * Security group entity type
     */
    SecurityGroup: "SecurityGroup",
    /**
     * URL entity type
     */
    URL: "URL",
    /**
     * Mailbox entity type
     */
    Mailbox: "Mailbox",
    /**
     * Mail cluster entity type
     */
    MailCluster: "MailCluster",
    /**
     * Mail message entity type
     */
    MailMessage: "MailMessage",
    /**
     * Submission mail entity type
     */
    SubmissionMail: "SubmissionMail",
} as const;

/**
 * The V3 type of the mapped entity
 */
export type EntityMappingType = (typeof EntityMappingType)[keyof typeof EntityMappingType];

export const EntityProviders = {
    ActiveDirectory: "ActiveDirectory",
    AzureActiveDirectory: "AzureActiveDirectory",
} as const;

/**
 * The entity provider that is synced.
 */
export type EntityProviders = (typeof EntityProviders)[keyof typeof EntityProviders];

export const EntityTimelineKind = {
    /**
     * activity
     */
    Activity: "Activity",
    /**
     * bookmarks
     */
    Bookmark: "Bookmark",
    /**
     * security alerts
     */
    SecurityAlert: "SecurityAlert",
    /**
     * anomaly
     */
    Anomaly: "Anomaly",
} as const;

/**
 * The entity query kind
 */
export type EntityTimelineKind = (typeof EntityTimelineKind)[keyof typeof EntityTimelineKind];

export const EntityType = {
    /**
     * Entity represents account in the system.
     */
    Account: "Account",
    /**
     * Entity represents host in the system.
     */
    Host: "Host",
    /**
     * Entity represents file in the system.
     */
    File: "File",
    /**
     * Entity represents azure resource in the system.
     */
    AzureResource: "AzureResource",
    /**
     * Entity represents cloud application in the system.
     */
    CloudApplication: "CloudApplication",
    /**
     * Entity represents dns in the system.
     */
    DNS: "DNS",
    /**
     * Entity represents file hash in the system.
     */
    FileHash: "FileHash",
    /**
     * Entity represents ip in the system.
     */
    IP: "IP",
    /**
     * Entity represents malware in the system.
     */
    Malware: "Malware",
    /**
     * Entity represents process in the system.
     */
    Process: "Process",
    /**
     * Entity represents registry key in the system.
     */
    RegistryKey: "RegistryKey",
    /**
     * Entity represents registry value in the system.
     */
    RegistryValue: "RegistryValue",
    /**
     * Entity represents security group in the system.
     */
    SecurityGroup: "SecurityGroup",
    /**
     * Entity represents url in the system.
     */
    URL: "URL",
    /**
     * Entity represents IoT device in the system.
     */
    IoTDevice: "IoTDevice",
    /**
     * Entity represents security alert in the system.
     */
    SecurityAlert: "SecurityAlert",
    /**
     * Entity represents HuntingBookmark in the system.
     */
    HuntingBookmark: "HuntingBookmark",
    /**
     * Entity represents mail cluster in the system.
     */
    MailCluster: "MailCluster",
    /**
     * Entity represents mail message in the system.
     */
    MailMessage: "MailMessage",
    /**
     * Entity represents mailbox in the system.
     */
    Mailbox: "Mailbox",
    /**
     * Entity represents submission mail in the system.
     */
    SubmissionMail: "SubmissionMail",
    /**
     * Entity represents network interface in the system.
     */
    Nic: "Nic",
} as const;

/**
 * The type of the query's source entity
 */
export type EntityType = (typeof EntityType)[keyof typeof EntityType];

export const EventGroupingAggregationKind = {
    SingleAlert: "SingleAlert",
    AlertPerResult: "AlertPerResult",
} as const;

/**
 * The event grouping aggregation kinds
 */
export type EventGroupingAggregationKind = (typeof EventGroupingAggregationKind)[keyof typeof EventGroupingAggregationKind];

export const FileFormat = {
    /**
     * A CSV file.
     */
    CSV: "CSV",
    /**
     * A JSON file.
     */
    JSON: "JSON",
    /**
     * A file of other format.
     */
    Unspecified: "Unspecified",
} as const;

/**
 * The format of the file
 */
export type FileFormat = (typeof FileFormat)[keyof typeof FileFormat];

export const FileImportContentType = {
    /**
     * File containing records with the core fields of an indicator, plus the observables to construct the STIX pattern.
     */
    BasicIndicator: "BasicIndicator",
    /**
     * File containing STIX indicators.
     */
    StixIndicator: "StixIndicator",
    /**
     * File containing other records.
     */
    Unspecified: "Unspecified",
} as const;

/**
 * The content type of this file.
 */
export type FileImportContentType = (typeof FileImportContentType)[keyof typeof FileImportContentType];

export const Flag = {
    True: "true",
    False: "false",
} as const;

/**
 * Flag indicates if this package is in preview.
 */
export type Flag = (typeof Flag)[keyof typeof Flag];

export const HttpMethodVerb = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
} as const;

/**
 * The HTTP method, default value GET.
 */
export type HttpMethodVerb = (typeof HttpMethodVerb)[keyof typeof HttpMethodVerb];

export const HttpsConfigurationType = {
    HttpOnly: "HttpOnly",
    HttpsWithSslVerification: "HttpsWithSslVerification",
    HttpsWithoutSslVerification: "HttpsWithoutSslVerification",
} as const;

/**
 * Represents the types of HTTPS configuration to connect to the SapControl service.
 */
export type HttpsConfigurationType = (typeof HttpsConfigurationType)[keyof typeof HttpsConfigurationType];

export const HypothesisStatus = {
    Unknown: "Unknown",
    Invalidated: "Invalidated",
    Validated: "Validated",
} as const;

/**
 * The hypothesis status of the hunt.
 */
export type HypothesisStatus = (typeof HypothesisStatus)[keyof typeof HypothesisStatus];

export const IncidentClassification = {
    /**
     * Incident classification was undetermined
     */
    Undetermined: "Undetermined",
    /**
     * Incident was true positive
     */
    TruePositive: "TruePositive",
    /**
     * Incident was benign positive
     */
    BenignPositive: "BenignPositive",
    /**
     * Incident was false positive
     */
    FalsePositive: "FalsePositive",
} as const;

/**
 * The reason the incident was closed
 */
export type IncidentClassification = (typeof IncidentClassification)[keyof typeof IncidentClassification];

export const IncidentClassificationReason = {
    /**
     * Classification reason was suspicious activity
     */
    SuspiciousActivity: "SuspiciousActivity",
    /**
     * Classification reason was suspicious but expected
     */
    SuspiciousButExpected: "SuspiciousButExpected",
    /**
     * Classification reason was incorrect alert logic
     */
    IncorrectAlertLogic: "IncorrectAlertLogic",
    /**
     * Classification reason was inaccurate data
     */
    InaccurateData: "InaccurateData",
} as const;

/**
 * The classification reason the incident was closed with
 */
export type IncidentClassificationReason = (typeof IncidentClassificationReason)[keyof typeof IncidentClassificationReason];

export const IncidentSeverity = {
    /**
     * High severity
     */
    High: "High",
    /**
     * Medium severity
     */
    Medium: "Medium",
    /**
     * Low severity
     */
    Low: "Low",
    /**
     * Informational severity
     */
    Informational: "Informational",
} as const;

/**
 * The severity of the incident
 */
export type IncidentSeverity = (typeof IncidentSeverity)[keyof typeof IncidentSeverity];

export const IncidentStatus = {
    /**
     * An active incident which isn't being handled currently
     */
    New: "New",
    /**
     * An active incident which is being handled
     */
    Active: "Active",
    /**
     * A non-active incident
     */
    Closed: "Closed",
} as const;

/**
 * The status of the incident
 */
export type IncidentStatus = (typeof IncidentStatus)[keyof typeof IncidentStatus];

export const IncidentTaskStatus = {
    /**
     * A new task
     */
    New: "New",
    /**
     * A completed task
     */
    Completed: "Completed",
} as const;

/**
 * The status of the task
 */
export type IncidentTaskStatus = (typeof IncidentTaskStatus)[keyof typeof IncidentTaskStatus];

export const IngestionMode = {
    /**
     * No records should be ingested when invalid records are detected.
     */
    IngestOnlyIfAllAreValid: "IngestOnlyIfAllAreValid",
    /**
     * Valid records should still be ingested when invalid records are detected.
     */
    IngestAnyValidRecords: "IngestAnyValidRecords",
    /**
     * Unspecified
     */
    Unspecified: "Unspecified",
} as const;

/**
 * Describes how to ingest the records in the file.
 */
export type IngestionMode = (typeof IngestionMode)[keyof typeof IngestionMode];

export const IngestionType = {
    Full: "Full",
    Incremental: "Incremental",
} as const;

/**
 * Types of ingestion.
 */
export type IngestionType = (typeof IngestionType)[keyof typeof IngestionType];

export const KeyVaultAuthenticationMode = {
    ManagedIdentity: "ManagedIdentity",
    ServicePrincipal: "ServicePrincipal",
} as const;

/**
 * The key mode of the agent.
 * ManagedIdentity|ApplicationIdentity are the options
 */
export type KeyVaultAuthenticationMode = (typeof KeyVaultAuthenticationMode)[keyof typeof KeyVaultAuthenticationMode];

export const Kind = {
    DataConnector: "DataConnector",
    DataType: "DataType",
    Workbook: "Workbook",
    WorkbookTemplate: "WorkbookTemplate",
    Playbook: "Playbook",
    PlaybookTemplate: "PlaybookTemplate",
    AnalyticsRuleTemplate: "AnalyticsRuleTemplate",
    AnalyticsRule: "AnalyticsRule",
    HuntingQuery: "HuntingQuery",
    InvestigationQuery: "InvestigationQuery",
    Parser: "Parser",
    Watchlist: "Watchlist",
    WatchlistTemplate: "WatchlistTemplate",
    Solution: "Solution",
    AzureFunction: "AzureFunction",
    LogicAppsCustomConnector: "LogicAppsCustomConnector",
    AutomationRule: "AutomationRule",
} as const;

/**
 * Type of the content item we depend on
 */
export type Kind = (typeof Kind)[keyof typeof Kind];

export const LogStatusType = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Types of log status.
 */
export type LogStatusType = (typeof LogStatusType)[keyof typeof LogStatusType];

export const LogType = {
    AbapAuditLog: "AbapAuditLog",
    AbapJobLog: "AbapJobLog",
    AbapSpoolLog: "AbapSpoolLog",
    AbapSpoolOutputLog: "AbapSpoolOutputLog",
    AbapChangeDocsLog: "AbapChangeDocsLog",
    AbapAppLog: "AbapAppLog",
    AbapWorkflowLog: "AbapWorkflowLog",
    AbapCrLog: "AbapCrLog",
    AbapTableDataLog: "AbapTableDataLog",
    AbapFilesLogs: "AbapFilesLogs",
    JavaFilesLogs: "JavaFilesLogs",
    AGRTCODES: "AGRTCODES",
    USR01: "USR01",
    USR02: "USR02",
    AGR1251: "AGR1251",
    AGRUSERS: "AGRUSERS",
    AGRPROF: "AGRPROF",
    UST04: "UST04",
    USR21: "USR21",
    ADR6: "ADR6",
    ADCP: "ADCP",
    USR05: "USR05",
    USGRPUSER: "USGRPUSER",
    USERADDR: "USERADDR",
    DEVACCESS: "DEVACCESS",
    AGRDEFINE: "AGRDEFINE",
    PAHI: "PAHI",
    AGRAGRS: "AGRAGRS",
    USRSTAMP: "USRSTAMP",
    AGRFLAGS: "AGRFLAGS",
    SNCSYSACL: "SNCSYSACL",
    USRACL: "USRACL",
} as const;

/**
 * Types of logs and tables.
 */
export type LogType = (typeof LogType)[keyof typeof LogType];

export const MatchingMethod = {
    /**
     * Grouping alerts into a single incident if all the entities match
     */
    AllEntities: "AllEntities",
    /**
     * Grouping any alerts triggered by this rule into a single incident
     */
    AnyAlert: "AnyAlert",
    /**
     * Grouping alerts into a single incident if the selected entities, custom details and alert details match
     */
    Selected: "Selected",
} as const;

/**
 * Grouping matching method. When method is Selected at least one of groupByEntities, groupByAlertDetails, groupByCustomDetails must be provided and not empty.
 */
export type MatchingMethod = (typeof MatchingMethod)[keyof typeof MatchingMethod];

export const MicrosoftSecurityProductName = {
    Microsoft_Cloud_App_Security: "Microsoft Cloud App Security",
    Azure_Security_Center: "Azure Security Center",
    Azure_Advanced_Threat_Protection: "Azure Advanced Threat Protection",
    Azure_Active_Directory_Identity_Protection: "Azure Active Directory Identity Protection",
    Azure_Security_Center_for_IoT: "Azure Security Center for IoT",
} as const;

/**
 * The alerts' productName on which the cases will be generated
 */
export type MicrosoftSecurityProductName = (typeof MicrosoftSecurityProductName)[keyof typeof MicrosoftSecurityProductName];

export const Mode = {
    /**
     * The workspace manager configuration is enabled
     */
    Enabled: "Enabled",
    /**
     * The workspace manager configuration is disabled
     */
    Disabled: "Disabled",
} as const;

/**
 * The current mode of the workspace manager configuration
 */
export type Mode = (typeof Mode)[keyof typeof Mode];

export const Operator = {
    AND: "AND",
    OR: "OR",
} as const;

/**
 * Operator used for list of dependencies in criteria array.
 */
export type Operator = (typeof Operator)[keyof typeof Operator];

export const OwnerType = {
    /**
     * The incident owner type is unknown
     */
    Unknown: "Unknown",
    /**
     * The incident owner type is an AAD user
     */
    User: "User",
    /**
     * The incident owner type is an AAD group
     */
    Group: "Group",
} as const;

/**
 * The type of the owner the incident is assigned to.
 */
export type OwnerType = (typeof OwnerType)[keyof typeof OwnerType];

export const PackageKind = {
    Solution: "Solution",
    Standalone: "Standalone",
} as const;

/**
 * the packageKind of the package contains this template
 */
export type PackageKind = (typeof PackageKind)[keyof typeof PackageKind];

export const ProviderPermissionsScope = {
    Subscription: "Subscription",
    ResourceGroup: "ResourceGroup",
    Workspace: "Workspace",
} as const;

/**
 * The scope on which the user should have permissions, in order to be able to create connections.
 */
export type ProviderPermissionsScope = (typeof ProviderPermissionsScope)[keyof typeof ProviderPermissionsScope];

export const RepoType = {
    Github: "Github",
    DevOps: "DevOps",
} as const;

/**
 * The repository type of the source control
 */
export type RepoType = (typeof RepoType)[keyof typeof RepoType];

export const RepositoryAccessKind = {
    OAuth: "OAuth",
    PAT: "PAT",
    App: "App",
} as const;

/**
 * The kind of repository access credentials
 */
export type RepositoryAccessKind = (typeof RepositoryAccessKind)[keyof typeof RepositoryAccessKind];

export const RestApiPollerRequestPagingKind = {
    LinkHeader: "LinkHeader",
    NextPageToken: "NextPageToken",
    NextPageUrl: "NextPageUrl",
    PersistentToken: "PersistentToken",
    PersistentLinkHeader: "PersistentLinkHeader",
    Offset: "Offset",
    CountBasedPaging: "CountBasedPaging",
} as const;

/**
 * Type of paging
 */
export type RestApiPollerRequestPagingKind = (typeof RestApiPollerRequestPagingKind)[keyof typeof RestApiPollerRequestPagingKind];

export const SapAuthenticationType = {
    UsernamePassword: "UsernamePassword",
    Snc: "Snc",
    SncWithUsernamePassword: "SncWithUsernamePassword",
} as const;

/**
 * The authentication type to SAP.
 */
export type SapAuthenticationType = (typeof SapAuthenticationType)[keyof typeof SapAuthenticationType];

export const SecretSource = {
    AzureKeyVault: "AzureKeyVault",
} as const;

/**
 * The secret source of the agent.
 * AzureKeyVault is the option
 */
export type SecretSource = (typeof SecretSource)[keyof typeof SecretSource];

export const SecurityMLAnalyticsSettingsKind = {
    Anomaly: "Anomaly",
} as const;

/**
 * The kind of security ML Analytics Settings
 */
export type SecurityMLAnalyticsSettingsKind = (typeof SecurityMLAnalyticsSettingsKind)[keyof typeof SecurityMLAnalyticsSettingsKind];

export const SettingKind = {
    Anomalies: "Anomalies",
    EyesOn: "EyesOn",
    EntityAnalytics: "EntityAnalytics",
    Ueba: "Ueba",
} as const;

/**
 * The kind of the setting
 */
export type SettingKind = (typeof SettingKind)[keyof typeof SettingKind];

export const SettingsStatus = {
    /**
     * Anomaly settings status in Production mode
     */
    Production: "Production",
    /**
     * Anomaly settings status in Flighting mode
     */
    Flighting: "Flighting",
} as const;

/**
 * The anomaly SecurityMLAnalyticsSettings status
 */
export type SettingsStatus = (typeof SettingsStatus)[keyof typeof SettingsStatus];

export const SourceKind = {
    LocalWorkspace: "LocalWorkspace",
    Community: "Community",
    Solution: "Solution",
    SourceRepository: "SourceRepository",
} as const;

/**
 * Source type of the content
 */
export type SourceKind = (typeof SourceKind)[keyof typeof SourceKind];

export const SourceType = {
    /**
     * The source from local file.
     */
    Local: "Local",
    /**
     * The source from Azure storage.
     */
    AzureStorage: "AzureStorage",
} as const;

/**
 * The sourceType of the watchlist
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];

export const Status = {
    New: "New",
    Active: "Active",
    Closed: "Closed",
    Backlog: "Backlog",
    Approved: "Approved",
} as const;

/**
 * The status of the hunt.
 */
export type Status = (typeof Status)[keyof typeof Status];

export const SupportTier = {
    Microsoft: "Microsoft",
    Partner: "Partner",
    Community: "Community",
} as const;

/**
 * Type of support for content item
 */
export type SupportTier = (typeof SupportTier)[keyof typeof SupportTier];

export const SystemConfigurationConnectorType = {
    Rfc: "Rfc",
    SapControl: "SapControl",
} as const;

/**
 * Represents the types of SAP systems.
 */
export type SystemConfigurationConnectorType = (typeof SystemConfigurationConnectorType)[keyof typeof SystemConfigurationConnectorType];

export const SystemStatusType = {
    Running: "Running",
    Stopped: "Stopped",
} as const;

/**
 * The status of the system.
 */
export type SystemStatusType = (typeof SystemStatusType)[keyof typeof SystemStatusType];

export const ThreatIntelligenceResourceInnerKind = {
    /**
     * Entity represents threat intelligence indicator in the system.
     */
    Indicator: "indicator",
} as const;

/**
 * The kind of the entity.
 */
export type ThreatIntelligenceResourceInnerKind = (typeof ThreatIntelligenceResourceInnerKind)[keyof typeof ThreatIntelligenceResourceInnerKind];

export const TriggerOperator = {
    GreaterThan: "GreaterThan",
    LessThan: "LessThan",
    Equal: "Equal",
    NotEqual: "NotEqual",
} as const;

/**
 * The operation against the threshold that triggers alert rule.
 */
export type TriggerOperator = (typeof TriggerOperator)[keyof typeof TriggerOperator];

export const TriggersOn = {
    /**
     * Trigger on Incidents
     */
    Incidents: "Incidents",
    /**
     * Trigger on Alerts
     */
    Alerts: "Alerts",
} as const;

export type TriggersOn = (typeof TriggersOn)[keyof typeof TriggersOn];

export const TriggersWhen = {
    /**
     * Trigger on created objects
     */
    Created: "Created",
    /**
     * Trigger on updated objects
     */
    Updated: "Updated",
} as const;

export type TriggersWhen = (typeof TriggersWhen)[keyof typeof TriggersWhen];

export const UebaDataSources = {
    AuditLogs: "AuditLogs",
    AzureActivity: "AzureActivity",
    SecurityEvent: "SecurityEvent",
    SigninLogs: "SigninLogs",
} as const;

/**
 * The data source that enriched by ueba.
 */
export type UebaDataSources = (typeof UebaDataSources)[keyof typeof UebaDataSources];

export const Version = {
    V1: "V1",
    V2: "V2",
} as const;

/**
 * The version number associated with the source control
 */
export type Version = (typeof Version)[keyof typeof Version];
