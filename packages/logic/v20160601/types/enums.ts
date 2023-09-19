export const AgreementType = {
    NotSpecified: "NotSpecified",
    AS2: "AS2",
    X12: "X12",
    Edifact: "Edifact",
} as const;

export type AgreementType = (typeof AgreementType)[keyof typeof AgreementType];

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

export const KeyType = {
    NotSpecified: "NotSpecified",
    Primary: "Primary",
    Secondary: "Secondary",
} as const;

export type KeyType = (typeof KeyType)[keyof typeof KeyType];

export const MapType = {
    NotSpecified: "NotSpecified",
    Xslt: "Xslt",
} as const;

export type MapType = (typeof MapType)[keyof typeof MapType];

export const MessageFilterType = {
    NotSpecified: "NotSpecified",
    Include: "Include",
    Exclude: "Exclude",
} as const;

export type MessageFilterType = (typeof MessageFilterType)[keyof typeof MessageFilterType];

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

export const RosettaNetActionType = {
    NotSpecified: "NotSpecified",
    SingleAction: "SingleAction",
    DoubleAction: "DoubleAction",
} as const;

export type RosettaNetActionType = (typeof RosettaNetActionType)[keyof typeof RosettaNetActionType];

export const RosettaNetPipActivityType = {
    NotSpecified: "NotSpecified",
    InformationDistribution: "InformationDistribution",
    BusinessTransaction: "BusinessTransaction",
    Notification: "Notification",
    QueryResponse: "QueryResponse",
    RequestConfirm: "RequestConfirm",
    RequestResponse: "RequestResponse",
} as const;

export type RosettaNetPipActivityType = (typeof RosettaNetPipActivityType)[keyof typeof RosettaNetPipActivityType];

export const RosettaNetPipConfidentialityScope = {
    NotSpecified: "NotSpecified",
    None: "None",
    Payload: "Payload",
    PayloadContainer: "PayloadContainer",
} as const;

export type RosettaNetPipConfidentialityScope = (typeof RosettaNetPipConfidentialityScope)[keyof typeof RosettaNetPipConfidentialityScope];

export const RosettaNetPipRoleType = {
    NotSpecified: "NotSpecified",
    Functional: "Functional",
    Organizational: "Organizational",
    Employee: "Employee",
} as const;

export type RosettaNetPipRoleType = (typeof RosettaNetPipRoleType)[keyof typeof RosettaNetPipRoleType];

export const RosettaNetResponseType = {
    NotSpecified: "NotSpecified",
    Sync: "Sync",
    Async: "Async",
} as const;

export type RosettaNetResponseType = (typeof RosettaNetResponseType)[keyof typeof RosettaNetResponseType];

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

export const SkuName = {
    NotSpecified: "NotSpecified",
    Free: "Free",
    Shared: "Shared",
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
} as const;

export type SkuName = (typeof SkuName)[keyof typeof SkuName];

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
