export const AgreementType = {
    NotSpecified: "NotSpecified",
    AS2: "AS2",
    X12: "X12",
    Edifact: "Edifact",
} as const;

/**
 * The agreement type.
 */
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

/**
 * The EDIFACT frame setting characterSet.
 */
export type EdifactCharacterSet = (typeof EdifactCharacterSet)[keyof typeof EdifactCharacterSet];

export const EdifactDecimalIndicator = {
    NotSpecified: "NotSpecified",
    Comma: "Comma",
    Decimal: "Decimal",
} as const;

/**
 * The EDIFACT frame setting decimal indicator.
 */
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

/**
 * The encryption algorithm.
 */
export type EncryptionAlgorithm = (typeof EncryptionAlgorithm)[keyof typeof EncryptionAlgorithm];

export const HashingAlgorithm = {
    NotSpecified: "NotSpecified",
    None: "None",
    SHA2256: "SHA2256",
    SHA2384: "SHA2384",
    SHA2512: "SHA2512",
} as const;

/**
 * The signing or hashing algorithm.
 */
export type HashingAlgorithm = (typeof HashingAlgorithm)[keyof typeof HashingAlgorithm];

export const MapType = {
    NotSpecified: "NotSpecified",
    Xslt: "Xslt",
} as const;

/**
 * The map type.
 */
export type MapType = (typeof MapType)[keyof typeof MapType];

export const MessageFilterType = {
    NotSpecified: "NotSpecified",
    Include: "Include",
    Exclude: "Exclude",
} as const;

/**
 * The message filter type.
 */
export type MessageFilterType = (typeof MessageFilterType)[keyof typeof MessageFilterType];

export const PartnerType = {
    NotSpecified: "NotSpecified",
    B2B: "B2B",
} as const;

/**
 * The partner type.
 */
export type PartnerType = (typeof PartnerType)[keyof typeof PartnerType];

export const SchemaType = {
    NotSpecified: "NotSpecified",
    Xml: "Xml",
} as const;

/**
 * The schema type.
 */
export type SchemaType = (typeof SchemaType)[keyof typeof SchemaType];

export const SegmentTerminatorSuffix = {
    NotSpecified: "NotSpecified",
    None: "None",
    CR: "CR",
    LF: "LF",
    CRLF: "CRLF",
} as const;

/**
 * The segment terminator suffix.
 */
export type SegmentTerminatorSuffix = (typeof SegmentTerminatorSuffix)[keyof typeof SegmentTerminatorSuffix];

export const SkuName = {
    NotSpecified: "NotSpecified",
    Free: "Free",
    Shared: "Shared",
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
} as const;

/**
 * The sku name.
 */
export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const TrailingSeparatorPolicy = {
    NotSpecified: "NotSpecified",
    NotAllowed: "NotAllowed",
    Optional: "Optional",
    Mandatory: "Mandatory",
} as const;

/**
 * The trailing separator policy.
 */
export type TrailingSeparatorPolicy = (typeof TrailingSeparatorPolicy)[keyof typeof TrailingSeparatorPolicy];

export const UsageIndicator = {
    NotSpecified: "NotSpecified",
    Test: "Test",
    Information: "Information",
    Production: "Production",
} as const;

/**
 * The usage indicator.
 */
export type UsageIndicator = (typeof UsageIndicator)[keyof typeof UsageIndicator];

export const X12CharacterSet = {
    NotSpecified: "NotSpecified",
    Basic: "Basic",
    Extended: "Extended",
    UTF8: "UTF8",
} as const;

/**
 * The X12 character set.
 */
export type X12CharacterSet = (typeof X12CharacterSet)[keyof typeof X12CharacterSet];

export const X12DateFormat = {
    NotSpecified: "NotSpecified",
    CCYYMMDD: "CCYYMMDD",
    YYMMDD: "YYMMDD",
} as const;

/**
 * The group header date format.
 */
export type X12DateFormat = (typeof X12DateFormat)[keyof typeof X12DateFormat];

export const X12TimeFormat = {
    NotSpecified: "NotSpecified",
    HHMM: "HHMM",
    HHMMSS: "HHMMSS",
    HHMMSSdd: "HHMMSSdd",
    HHMMSSd: "HHMMSSd",
} as const;

/**
 * The group header time format.
 */
export type X12TimeFormat = (typeof X12TimeFormat)[keyof typeof X12TimeFormat];
