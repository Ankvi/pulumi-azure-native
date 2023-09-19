export const ActionType = {
    /**
     * Modify an object's properties
     */
    ModifyProperties: "ModifyProperties",
    /**
     * Run a playbook on an object
     */
    RunPlaybook: "RunPlaybook",
} as const;

export type ActionType = (typeof ActionType)[keyof typeof ActionType];

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

export type AutomationRulePropertyConditionSupportedProperty = (typeof AutomationRulePropertyConditionSupportedProperty)[keyof typeof AutomationRulePropertyConditionSupportedProperty];

export const ConditionType = {
    /**
     * Evaluate an object property value
     */
    Property: "Property",
    /**
     * Evaluate an object property changed value
     */
    PropertyChanged: "PropertyChanged",
    /**
     * Evaluate an object array property changed value
     */
    PropertyArrayChanged: "PropertyArrayChanged",
} as const;

export type ConditionType = (typeof ConditionType)[keyof typeof ConditionType];

export const DataConnectorKind = {
    AzureActiveDirectory: "AzureActiveDirectory",
    AzureSecurityCenter: "AzureSecurityCenter",
    MicrosoftCloudAppSecurity: "MicrosoftCloudAppSecurity",
    ThreatIntelligence: "ThreatIntelligence",
    Office365: "Office365",
    AmazonWebServicesCloudTrail: "AmazonWebServicesCloudTrail",
    AzureAdvancedThreatProtection: "AzureAdvancedThreatProtection",
    MicrosoftDefenderAdvancedThreatProtection: "MicrosoftDefenderAdvancedThreatProtection",
} as const;

export type DataConnectorKind = (typeof DataConnectorKind)[keyof typeof DataConnectorKind];

export const DataTypeState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type DataTypeState = (typeof DataTypeState)[keyof typeof DataTypeState];

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

export type IncidentStatus = (typeof IncidentStatus)[keyof typeof IncidentStatus];

export const Operator = {
    AND: "AND",
    OR: "OR",
} as const;

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

export type OwnerType = (typeof OwnerType)[keyof typeof OwnerType];

export const Source = {
    Local_file: "Local file",
    Remote_storage: "Remote storage",
} as const;

export type Source = (typeof Source)[keyof typeof Source];

export const SourceKind = {
    LocalWorkspace: "LocalWorkspace",
    Community: "Community",
    Solution: "Solution",
    SourceRepository: "SourceRepository",
} as const;

export type SourceKind = (typeof SourceKind)[keyof typeof SourceKind];

export const SupportTier = {
    Microsoft: "Microsoft",
    Partner: "Partner",
    Community: "Community",
} as const;

export type SupportTier = (typeof SupportTier)[keyof typeof SupportTier];

export const ThreatIntelligenceResourceInnerKind = {
    /**
     * Entity represents threat intelligence indicator in the system.
     */
    Indicator: "indicator",
} as const;

export type ThreatIntelligenceResourceInnerKind = (typeof ThreatIntelligenceResourceInnerKind)[keyof typeof ThreatIntelligenceResourceInnerKind];

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
