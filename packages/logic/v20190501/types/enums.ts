export const AgreementType = {
    NotSpecified: "NotSpecified",
    AS2: "AS2",
    X12: "X12",
    Edifact: "Edifact",
} as const;

export type AgreementType = (typeof AgreementType)[keyof typeof AgreementType];

export const DayOfWeek = {
    Sunday: "Sunday",
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday",
} as const;

export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek];

export const DaysOfWeek = {
    Sunday: "Sunday",
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday",
} as const;

export type DaysOfWeek = (typeof DaysOfWeek)[keyof typeof DaysOfWeek];

export const EdifactCharacterSet = {
    NotSpecified: "NotSpecified",
    UNOB: "UNOB",
    UNOA: "UNOA",
    UNOC: "UNOC",
    UNOD: "UNOD",
    UNOE: "UNOE",
    UNOF: "UNOF",
    UNOG: "UNOG",
    UNOH: "UNOH",
    UNOI: "UNOI",
    UNOJ: "UNOJ",
    UNOK: "UNOK",
    UNOX: "UNOX",
    UNOY: "UNOY",
    KECA: "KECA",
} as const;

export type EdifactCharacterSet = (typeof EdifactCharacterSet)[keyof typeof EdifactCharacterSet];

export const EdifactDecimalIndicator = {
    NotSpecified: "NotSpecified",
    Comma: "Comma",
    Decimal: "Decimal",
} as const;

export type EdifactDecimalIndicator = (typeof EdifactDecimalIndicator)[keyof typeof EdifactDecimalIndicator];

export const EncryptionAlgorithm = {
    NotSpecified: "NotSpecified",
    None: "None",
    DES3: "DES3",
    RC2: "RC2",
    AES128: "AES128",
    AES192: "AES192",
    AES256: "AES256",
} as const;

export type EncryptionAlgorithm = (typeof EncryptionAlgorithm)[keyof typeof EncryptionAlgorithm];

export const HashingAlgorithm = {
    NotSpecified: "NotSpecified",
    None: "None",
    MD5: "MD5",
    SHA1: "SHA1",
    SHA2256: "SHA2256",
    SHA2384: "SHA2384",
    SHA2512: "SHA2512",
} as const;

export type HashingAlgorithm = (typeof HashingAlgorithm)[keyof typeof HashingAlgorithm];

export const IntegrationAccountSkuName = {
    NotSpecified: "NotSpecified",
    Free: "Free",
    Basic: "Basic",
    Standard: "Standard",
} as const;

export type IntegrationAccountSkuName = (typeof IntegrationAccountSkuName)[keyof typeof IntegrationAccountSkuName];

export const IntegrationServiceEnvironmentAccessEndpointType = {
    NotSpecified: "NotSpecified",
    External: "External",
    Internal: "Internal",
} as const;

export type IntegrationServiceEnvironmentAccessEndpointType = (typeof IntegrationServiceEnvironmentAccessEndpointType)[keyof typeof IntegrationServiceEnvironmentAccessEndpointType];

export const IntegrationServiceEnvironmentSkuName = {
    NotSpecified: "NotSpecified",
    Premium: "Premium",
    Developer: "Developer",
} as const;

export type IntegrationServiceEnvironmentSkuName = (typeof IntegrationServiceEnvironmentSkuName)[keyof typeof IntegrationServiceEnvironmentSkuName];

export const KeyType = {
    NotSpecified: "NotSpecified",
    Primary: "Primary",
    Secondary: "Secondary",
} as const;

export type KeyType = (typeof KeyType)[keyof typeof KeyType];

export const ManagedServiceIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    None: "None",
} as const;

export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const MapType = {
    NotSpecified: "NotSpecified",
    Xslt: "Xslt",
    Xslt20: "Xslt20",
    Xslt30: "Xslt30",
    Liquid: "Liquid",
} as const;

export type MapType = (typeof MapType)[keyof typeof MapType];

export const MessageFilterType = {
    NotSpecified: "NotSpecified",
    Include: "Include",
    Exclude: "Exclude",
} as const;

export type MessageFilterType = (typeof MessageFilterType)[keyof typeof MessageFilterType];

export const OpenAuthenticationProviderType = {
    AAD: "AAD",
} as const;

export type OpenAuthenticationProviderType = (typeof OpenAuthenticationProviderType)[keyof typeof OpenAuthenticationProviderType];

export const ParameterType = {
    NotSpecified: "NotSpecified",
    String: "String",
    SecureString: "SecureString",
    Int: "Int",
    Float: "Float",
    Bool: "Bool",
    Array: "Array",
    Object: "Object",
    SecureObject: "SecureObject",
} as const;

export type ParameterType = (typeof ParameterType)[keyof typeof ParameterType];

export const PartnerType = {
    NotSpecified: "NotSpecified",
    B2B: "B2B",
} as const;

export type PartnerType = (typeof PartnerType)[keyof typeof PartnerType];

export const RecurrenceFrequency = {
    NotSpecified: "NotSpecified",
    Second: "Second",
    Minute: "Minute",
    Hour: "Hour",
    Day: "Day",
    Week: "Week",
    Month: "Month",
    Year: "Year",
} as const;

export type RecurrenceFrequency = (typeof RecurrenceFrequency)[keyof typeof RecurrenceFrequency];

export const SchemaType = {
    NotSpecified: "NotSpecified",
    Xml: "Xml",
} as const;

export type SchemaType = (typeof SchemaType)[keyof typeof SchemaType];

export const SegmentTerminatorSuffix = {
    NotSpecified: "NotSpecified",
    None: "None",
    CR: "CR",
    LF: "LF",
    CRLF: "CRLF",
} as const;

export type SegmentTerminatorSuffix = (typeof SegmentTerminatorSuffix)[keyof typeof SegmentTerminatorSuffix];

export const SigningAlgorithm = {
    NotSpecified: "NotSpecified",
    Default: "Default",
    SHA1: "SHA1",
    SHA2256: "SHA2256",
    SHA2384: "SHA2384",
    SHA2512: "SHA2512",
} as const;

export type SigningAlgorithm = (typeof SigningAlgorithm)[keyof typeof SigningAlgorithm];

export const TrailingSeparatorPolicy = {
    NotSpecified: "NotSpecified",
    NotAllowed: "NotAllowed",
    Optional: "Optional",
    Mandatory: "Mandatory",
} as const;

export type TrailingSeparatorPolicy = (typeof TrailingSeparatorPolicy)[keyof typeof TrailingSeparatorPolicy];

export const UsageIndicator = {
    NotSpecified: "NotSpecified",
    Test: "Test",
    Information: "Information",
    Production: "Production",
} as const;

export type UsageIndicator = (typeof UsageIndicator)[keyof typeof UsageIndicator];

export const WorkflowProvisioningState = {
    NotSpecified: "NotSpecified",
    Accepted: "Accepted",
    Running: "Running",
    Ready: "Ready",
    Creating: "Creating",
    Created: "Created",
    Deleting: "Deleting",
    Deleted: "Deleted",
    Canceled: "Canceled",
    Failed: "Failed",
    Succeeded: "Succeeded",
    Moving: "Moving",
    Updating: "Updating",
    Registering: "Registering",
    Registered: "Registered",
    Unregistering: "Unregistering",
    Unregistered: "Unregistered",
    Completed: "Completed",
    Renewing: "Renewing",
    Pending: "Pending",
    Waiting: "Waiting",
    InProgress: "InProgress",
} as const;

export type WorkflowProvisioningState = (typeof WorkflowProvisioningState)[keyof typeof WorkflowProvisioningState];

export const WorkflowState = {
    NotSpecified: "NotSpecified",
    Completed: "Completed",
    Enabled: "Enabled",
    Disabled: "Disabled",
    Deleted: "Deleted",
    Suspended: "Suspended",
} as const;

export type WorkflowState = (typeof WorkflowState)[keyof typeof WorkflowState];

export const X12CharacterSet = {
    NotSpecified: "NotSpecified",
    Basic: "Basic",
    Extended: "Extended",
    UTF8: "UTF8",
} as const;

export type X12CharacterSet = (typeof X12CharacterSet)[keyof typeof X12CharacterSet];

export const X12DateFormat = {
    NotSpecified: "NotSpecified",
    CCYYMMDD: "CCYYMMDD",
    YYMMDD: "YYMMDD",
} as const;

export type X12DateFormat = (typeof X12DateFormat)[keyof typeof X12DateFormat];

export const X12TimeFormat = {
    NotSpecified: "NotSpecified",
    HHMM: "HHMM",
    HHMMSS: "HHMMSS",
    HHMMSSdd: "HHMMSSdd",
    HHMMSSd: "HHMMSSd",
} as const;

export type X12TimeFormat = (typeof X12TimeFormat)[keyof typeof X12TimeFormat];
