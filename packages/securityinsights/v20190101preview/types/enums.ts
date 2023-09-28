export const AutomationRuleActionType = {
    /**
     * Modify an object's properties
     */
    ModifyProperties: "ModifyProperties",
    /**
     * Run a playbook on an object
     */
    RunPlaybook: "RunPlaybook",
} as const;

/**
 * The type of the automation rule action
 */
export type AutomationRuleActionType = (typeof AutomationRuleActionType)[keyof typeof AutomationRuleActionType];

export const AutomationRuleConditionType = {
    /**
     * Evaluate an object property value
     */
    Property: "Property",
} as const;

/**
 * The type of the automation rule condition
 */
export type AutomationRuleConditionType = (typeof AutomationRuleConditionType)[keyof typeof AutomationRuleConditionType];

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

/**
 * The operator to use for evaluation the condition
 */
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
     * The tactics of the incident
     */
    IncidentTactics: "IncidentTactics",
    /**
     * The related Analytic rule ids of the incident
     */
    IncidentRelatedAnalyticRuleIds: "IncidentRelatedAnalyticRuleIds",
    /**
     * The provider name of the incident
     */
    IncidentProviderName: "IncidentProviderName",
    /**
     * The account Azure Active Directory tenant id
     */
    AccountAadTenantId: "AccountAadTenantId",
    /**
     * The account Azure Active Directory user id.
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
     * The IoT device id
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
 * The property to evaluate
 */
export type AutomationRulePropertyConditionSupportedProperty = (typeof AutomationRulePropertyConditionSupportedProperty)[keyof typeof AutomationRulePropertyConditionSupportedProperty];

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
} as const;

/**
 * The entity query kind
 */
export type EntityTimelineKind = (typeof EntityTimelineKind)[keyof typeof EntityTimelineKind];

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
 * The classification reason to close the incident with
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

export const Source = {
    Local_file: "Local file",
    Remote_storage: "Remote storage",
} as const;

/**
 * The source of the watchlist
 */
export type Source = (typeof Source)[keyof typeof Source];

export const TriggersOn = {
    /**
     * Trigger on Incidents
     */
    Incidents: "Incidents",
} as const;

/**
 * The type of object the automation rule triggers on
 */
export type TriggersOn = (typeof TriggersOn)[keyof typeof TriggersOn];

export const TriggersWhen = {
    /**
     * Trigger on created objects
     */
    Created: "Created",
} as const;

/**
 * The type of event the automation rule triggers on
 */
export type TriggersWhen = (typeof TriggersWhen)[keyof typeof TriggersWhen];
