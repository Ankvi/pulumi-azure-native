export const AssessmentSizingCriterion = {
    PerformanceBased: "PerformanceBased",
    AsOnPremises: "AsOnPremises",
} as const;

export type AssessmentSizingCriterion = (typeof AssessmentSizingCriterion)[keyof typeof AssessmentSizingCriterion];

export const AssessmentStage = {
    InProgress: "InProgress",
    UnderReview: "UnderReview",
    Approved: "Approved",
} as const;

export type AssessmentStage = (typeof AssessmentStage)[keyof typeof AssessmentStage];

export const AzureHybridUseBenefit = {
    Unknown: "Unknown",
    Yes: "Yes",
    No: "No",
} as const;

export type AzureHybridUseBenefit = (typeof AzureHybridUseBenefit)[keyof typeof AzureHybridUseBenefit];

export const AzureLocation = {
    Unknown: "Unknown",
    EastAsia: "EastAsia",
    SoutheastAsia: "SoutheastAsia",
    AustraliaEast: "AustraliaEast",
    AustraliaSoutheast: "AustraliaSoutheast",
    BrazilSouth: "BrazilSouth",
    CanadaCentral: "CanadaCentral",
    CanadaEast: "CanadaEast",
    WestEurope: "WestEurope",
    NorthEurope: "NorthEurope",
    CentralIndia: "CentralIndia",
    SouthIndia: "SouthIndia",
    WestIndia: "WestIndia",
    JapanEast: "JapanEast",
    JapanWest: "JapanWest",
    KoreaCentral: "KoreaCentral",
    KoreaSouth: "KoreaSouth",
    UkWest: "UkWest",
    UkSouth: "UkSouth",
    NorthCentralUs: "NorthCentralUs",
    EastUs: "EastUs",
    WestUs2: "WestUs2",
    SouthCentralUs: "SouthCentralUs",
    CentralUs: "CentralUs",
    EastUs2: "EastUs2",
    WestUs: "WestUs",
    WestCentralUs: "WestCentralUs",
    GermanyCentral: "GermanyCentral",
    GermanyNortheast: "GermanyNortheast",
    ChinaNorth: "ChinaNorth",
    ChinaEast: "ChinaEast",
} as const;

export type AzureLocation = (typeof AzureLocation)[keyof typeof AzureLocation];

export const AzureOfferCode = {
    Unknown: "Unknown",
    MSAZR0003P: "MSAZR0003P",
    MSAZR0044P: "MSAZR0044P",
    MSAZR0059P: "MSAZR0059P",
    MSAZR0060P: "MSAZR0060P",
    MSAZR0062P: "MSAZR0062P",
    MSAZR0063P: "MSAZR0063P",
    MSAZR0064P: "MSAZR0064P",
    MSAZR0029P: "MSAZR0029P",
    MSAZR0022P: "MSAZR0022P",
    MSAZR0023P: "MSAZR0023P",
    MSAZR0148P: "MSAZR0148P",
    MSAZR0025P: "MSAZR0025P",
    MSAZR0036P: "MSAZR0036P",
    MSAZR0120P: "MSAZR0120P",
    MSAZR0121P: "MSAZR0121P",
    MSAZR0122P: "MSAZR0122P",
    MSAZR0123P: "MSAZR0123P",
    MSAZR0124P: "MSAZR0124P",
    MSAZR0125P: "MSAZR0125P",
    MSAZR0126P: "MSAZR0126P",
    MSAZR0127P: "MSAZR0127P",
    MSAZR0128P: "MSAZR0128P",
    MSAZR0129P: "MSAZR0129P",
    MSAZR0130P: "MSAZR0130P",
    MSAZR0111P: "MSAZR0111P",
    MSAZR0144P: "MSAZR0144P",
    MSAZR0149P: "MSAZR0149P",
    MSMCAZR0044P: "MSMCAZR0044P",
    MSMCAZR0059P: "MSMCAZR0059P",
    MSMCAZR0060P: "MSMCAZR0060P",
    MSMCAZR0063P: "MSMCAZR0063P",
    MSMCAZR0120P: "MSMCAZR0120P",
    MSMCAZR0121P: "MSMCAZR0121P",
    MSMCAZR0125P: "MSMCAZR0125P",
    MSMCAZR0128P: "MSMCAZR0128P",
    MSAZRDE0003P: "MSAZRDE0003P",
    MSAZRDE0044P: "MSAZRDE0044P",
} as const;

export type AzureOfferCode = (typeof AzureOfferCode)[keyof typeof AzureOfferCode];

export const AzurePricingTier = {
    Standard: "Standard",
    Basic: "Basic",
} as const;

export type AzurePricingTier = (typeof AzurePricingTier)[keyof typeof AzurePricingTier];

export const AzureStorageRedundancy = {
    Unknown: "Unknown",
    LocallyRedundant: "LocallyRedundant",
    ZoneRedundant: "ZoneRedundant",
    GeoRedundant: "GeoRedundant",
    ReadAccessGeoRedundant: "ReadAccessGeoRedundant",
} as const;

export type AzureStorageRedundancy = (typeof AzureStorageRedundancy)[keyof typeof AzureStorageRedundancy];

export const Currency = {
    Unknown: "Unknown",
    USD: "USD",
    DKK: "DKK",
    CAD: "CAD",
    IDR: "IDR",
    JPY: "JPY",
    KRW: "KRW",
    NZD: "NZD",
    NOK: "NOK",
    RUB: "RUB",
    SAR: "SAR",
    ZAR: "ZAR",
    SEK: "SEK",
    TRY: "TRY",
    GBP: "GBP",
    MXN: "MXN",
    MYR: "MYR",
    INR: "INR",
    HKD: "HKD",
    BRL: "BRL",
    TWD: "TWD",
    EUR: "EUR",
    CHF: "CHF",
    ARS: "ARS",
    AUD: "AUD",
    CNY: "CNY",
} as const;

export type Currency = (typeof Currency)[keyof typeof Currency];

export const Percentile = {
    Percentile50: "Percentile50",
    Percentile90: "Percentile90",
    Percentile95: "Percentile95",
    Percentile99: "Percentile99",
} as const;

export type Percentile = (typeof Percentile)[keyof typeof Percentile];

export const ProvisioningState = {
    Accepted: "Accepted",
    Creating: "Creating",
    Deleting: "Deleting",
    Failed: "Failed",
    Moving: "Moving",
    Succeeded: "Succeeded",
} as const;

export type ProvisioningState = (typeof ProvisioningState)[keyof typeof ProvisioningState];

export const TimeRange = {
    Day: "Day",
    Week: "Week",
    Month: "Month",
} as const;

export type TimeRange = (typeof TimeRange)[keyof typeof TimeRange];
