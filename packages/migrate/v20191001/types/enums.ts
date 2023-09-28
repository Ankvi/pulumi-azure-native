export const AssessmentSizingCriterion = {
    PerformanceBased: "PerformanceBased",
    AsOnPremises: "AsOnPremises",
} as const;

/**
 * Assessment sizing criterion.
 */
export type AssessmentSizingCriterion = (typeof AssessmentSizingCriterion)[keyof typeof AssessmentSizingCriterion];

export const AssessmentStage = {
    InProgress: "InProgress",
    UnderReview: "UnderReview",
    Approved: "Approved",
} as const;

/**
 * User configurable setting that describes the status of the assessment.
 */
export type AssessmentStage = (typeof AssessmentStage)[keyof typeof AssessmentStage];

export const AzureDiskType = {
    Unknown: "Unknown",
    Standard: "Standard",
    Premium: "Premium",
    StandardSSD: "StandardSSD",
    StandardOrPremium: "StandardOrPremium",
} as const;

/**
 * Storage type selected for this disk.
 */
export type AzureDiskType = (typeof AzureDiskType)[keyof typeof AzureDiskType];

export const AzureHybridUseBenefit = {
    Unknown: "Unknown",
    Yes: "Yes",
    No: "No",
} as const;

/**
 * AHUB discount on windows virtual machines.
 */
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
    USGovArizona: "USGovArizona",
    USGovTexas: "USGovTexas",
    USGovIowa: "USGovIowa",
    USGovVirginia: "USGovVirginia",
    USDoDCentral: "USDoDCentral",
    USDoDEast: "USDoDEast",
} as const;

/**
 * Target Azure location for which the machines should be assessed. These enums are the same as used by Compute API.
 */
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
    MSAZRUSGOV0003P: "MSAZRUSGOV0003P",
    EA: "EA",
} as const;

/**
 * Offer code according to which cost estimation is done.
 */
export type AzureOfferCode = (typeof AzureOfferCode)[keyof typeof AzureOfferCode];

export const AzurePricingTier = {
    Standard: "Standard",
    Basic: "Basic",
} as const;

/**
 * Pricing tier for Size evaluation.
 */
export type AzurePricingTier = (typeof AzurePricingTier)[keyof typeof AzurePricingTier];

export const AzureStorageRedundancy = {
    Unknown: "Unknown",
    LocallyRedundant: "LocallyRedundant",
    ZoneRedundant: "ZoneRedundant",
    GeoRedundant: "GeoRedundant",
    ReadAccessGeoRedundant: "ReadAccessGeoRedundant",
} as const;

/**
 * Storage Redundancy type offered by Azure.
 */
export type AzureStorageRedundancy = (typeof AzureStorageRedundancy)[keyof typeof AzureStorageRedundancy];

export const AzureVmFamily = {
    Unknown: "Unknown",
    Basic_A0_A4: "Basic_A0_A4",
    Standard_A0_A7: "Standard_A0_A7",
    Standard_A8_A11: "Standard_A8_A11",
    Av2_series: "Av2_series",
    D_series: "D_series",
    Dv2_series: "Dv2_series",
    DS_series: "DS_series",
    DSv2_series: "DSv2_series",
    F_series: "F_series",
    Fs_series: "Fs_series",
    G_series: "G_series",
    GS_series: "GS_series",
    H_series: "H_series",
    Ls_series: "Ls_series",
    Dsv3_series: "Dsv3_series",
    Dv3_series: "Dv3_series",
    Fsv2_series: "Fsv2_series",
    Ev3_series: "Ev3_series",
    Esv3_series: "Esv3_series",
    M_series: "M_series",
    DC_Series: "DC_Series",
} as const;

/**
 * Azure VM family.
 */
export type AzureVmFamily = (typeof AzureVmFamily)[keyof typeof AzureVmFamily];

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

/**
 * Currency to report prices in.
 */
export type Currency = (typeof Currency)[keyof typeof Currency];

export const Percentile = {
    Percentile50: "Percentile50",
    Percentile90: "Percentile90",
    Percentile95: "Percentile95",
    Percentile99: "Percentile99",
} as const;

/**
 * Percentile of performance data used to recommend Azure size.
 */
export type Percentile = (typeof Percentile)[keyof typeof Percentile];

export const ProjectStatus = {
    Active: "Active",
    Inactive: "Inactive",
} as const;

/**
 * Assessment project status.
 */
export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus];

export const ReservedInstance = {
    None: "None",
    RI1Year: "RI1Year",
    RI3Year: "RI3Year",
} as const;

/**
 * Azure reserved instance.
 */
export type ReservedInstance = (typeof ReservedInstance)[keyof typeof ReservedInstance];

export const TimeRange = {
    Day: "Day",
    Week: "Week",
    Month: "Month",
    Custom: "Custom",
} as const;

/**
 * Time range of performance data used to recommend a size.
 */
export type TimeRange = (typeof TimeRange)[keyof typeof TimeRange];
