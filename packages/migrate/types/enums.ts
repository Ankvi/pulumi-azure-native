export const AssessmentSizingCriterion = {
    /**
     * Performance Data based Sizing.
     */
    PerformanceBased: "PerformanceBased",
    /**
     * As On Premises or Static Data based Sizing.
     */
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

export const AssessmentType = {
    Unknown: "Unknown",
    MachineAssessment: "MachineAssessment",
    AvsAssessment: "AvsAssessment",
    SqlAssessment: "SqlAssessment",
    WebAppAssessment: "WebAppAssessment",
} as const;

/**
 * Assessment type of the assessment.
 */
export type AssessmentType = (typeof AssessmentType)[keyof typeof AssessmentType];

export const AsyncCommitModeIntent = {
    None: "None",
    HighAvailability: "HighAvailability",
    DisasterRecovery: "DisasterRecovery",
} as const;

/**
 * Gets or sets user preference indicating intent of async commit mode.
 */
export type AsyncCommitModeIntent = (typeof AsyncCommitModeIntent)[keyof typeof AsyncCommitModeIntent];

export const AutomationArtifactStatus = {
    NotGenerated: "NotGenerated",
    Generated: "Generated",
} as const;

/**
 * Gets or sets the status of automation artifacts.
 */
export type AutomationArtifactStatus = (typeof AutomationArtifactStatus)[keyof typeof AutomationArtifactStatus];

export const AvsAssessmentScenario = {
    /**
     * Unknown assessment scenario
     */
    Unknown: "Unknown",
    /**
     * Create Assessment for new Avs Sddc
     */
    NewAvsSddc: "NewAvsSddc",
    /**
     * Create Assessment for existing Avs Sddc
     */
    AvsSddcExpansion: "AvsSddcExpansion",
} as const;

/**
 * AVS Assessment Scenario.
 */
export type AvsAssessmentScenario = (typeof AvsAssessmentScenario)[keyof typeof AvsAssessmentScenario];

export const AzureArcState = {
    /**
     * AzureArc state disabled.
     */
    Disabled: "Disabled",
    /**
     * AzureArc state enabled.
     */
    Enabled: "Enabled",
    /**
     * AzureArc state unknown.
     */
    Unknown: "Unknown",
} as const;

/**
 * AzureArc state indicates whether to include azure arc related costs in on-premises or not.
 */
export type AzureArcState = (typeof AzureArcState)[keyof typeof AzureArcState];

export const AzureAvsNodeType = {
    Unknown: "Unknown",
    AV36: "AV36",
    AV36P: "AV36P",
    AV52: "AV52",
    AV64: "AV64",
} as const;

export type AzureAvsNodeType = (typeof AzureAvsNodeType)[keyof typeof AzureAvsNodeType];

export const AzureCurrency = {
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
 * Currency in which prices should be reported.
 */
export type AzureCurrency = (typeof AzureCurrency)[keyof typeof AzureCurrency];

export const AzureDiskType = {
    Unknown: "Unknown",
    Standard: "Standard",
    StandardSSD: "StandardSSD",
    Premium: "Premium",
    StandardOrPremium: "StandardOrPremium",
    Ultra: "Ultra",
    PremiumV2: "PremiumV2",
} as const;

export type AzureDiskType = (typeof AzureDiskType)[keyof typeof AzureDiskType];

export const AzureEnvironmentType = {
    /**
     * Unknown. Indicates missing data.
     */
    Unknown: "Unknown",
    /**
     * Development or Test Environment.
     */
    DevTest: "DevTest",
    /**
     * Production Environment.
     */
    Production: "Production",
} as const;

/**
 * Gets or sets environment type.
 */
export type AzureEnvironmentType = (typeof AzureEnvironmentType)[keyof typeof AzureEnvironmentType];

export const AzureHybridUseBenefit = {
    Unknown: "Unknown",
    Yes: "Yes",
    No: "No",
} as const;

/**
 * Gets or sets the user configurable setting to display the linux azure hybrid use
 * benefit.
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
    FranceCentral: "FranceCentral",
    AustraliaCentral: "AustraliaCentral",
    SouthAfricaNorth: "SouthAfricaNorth",
    FranceSouth: "FranceSouth",
    AustraliaCentral2: "AustraliaCentral2",
    SouthAfricaWest: "SouthAfricaWest",
    GermanyNorth: "GermanyNorth",
    GermanyWestCentral: "GermanyWestCentral",
    NorwayEast: "NorwayEast",
    NorwayWest: "NorwayWest",
    ChinaEast2: "ChinaEast2",
    ChinaNorth2: "ChinaNorth2",
    SwitzerlandNorth: "SwitzerlandNorth",
    SwitzerlandWest: "SwitzerlandWest",
    UAENorth: "UAENorth",
    UAECentral: "UAECentral",
    UsNatEast: "UsNatEast",
    UsNatWest: "UsNatWest",
    UsSecEast: "UsSecEast",
    UsSecCentral: "UsSecCentral",
    UsSecWest: "UsSecWest",
    SwedenCentral: "SwedenCentral",
    QatarCentral: "QatarCentral",
} as const;

/**
 * Gets or sets the Azure Location or Azure region where to which the machines
 * will be migrated.
 */
export type AzureLocation = (typeof AzureLocation)[keyof typeof AzureLocation];

export const AzureOfferCode = {
    Unknown: "Unknown",
    Msazr0003P: "MSAZR0003P",
    Msazr0044P: "MSAZR0044P",
    Msazr0059P: "MSAZR0059P",
    Msazr0060P: "MSAZR0060P",
    Msazr0062P: "MSAZR0062P",
    Msazr0063P: "MSAZR0063P",
    Msazr0064P: "MSAZR0064P",
    Msazr0029P: "MSAZR0029P",
    Msazr0022P: "MSAZR0022P",
    Msazr0023P: "MSAZR0023P",
    Msazr0148P: "MSAZR0148P",
    Msazr0025P: "MSAZR0025P",
    Msazr0036P: "MSAZR0036P",
    Msazr0120P: "MSAZR0120P",
    Msazr0121P: "MSAZR0121P",
    Msazr0122P: "MSAZR0122P",
    Msazr0123P: "MSAZR0123P",
    Msazr0124P: "MSAZR0124P",
    Msazr0125P: "MSAZR0125P",
    Msazr0126P: "MSAZR0126P",
    Msazr0127P: "MSAZR0127P",
    Msazr0128P: "MSAZR0128P",
    Msazr0129P: "MSAZR0129P",
    Msazr0130P: "MSAZR0130P",
    Msazr0111P: "MSAZR0111P",
    Msazr0144P: "MSAZR0144P",
    Msazr0149P: "MSAZR0149P",
    Msmcazr0044P: "MSMCAZR0044P",
    Msmcazr0059P: "MSMCAZR0059P",
    Msmcazr0060P: "MSMCAZR0060P",
    Msmcazr0063P: "MSMCAZR0063P",
    Msmcazr0120P: "MSMCAZR0120P",
    Msmcazr0121P: "MSMCAZR0121P",
    Msmcazr0125P: "MSMCAZR0125P",
    Msmcazr0128P: "MSMCAZR0128P",
    Msazrde0003P: "MSAZRDE0003P",
    Msazrde0044P: "MSAZRDE0044P",
    Msazrusgov0003P: "MSAZRUSGOV0003P",
    EA: "EA",
    Msazr0243P: "MSAZR0243P",
    SavingsPlan1Year: "SavingsPlan1Year",
    SavingsPlan3Year: "SavingsPlan3Year",
} as const;

/**
 * Azure Offer Code.
 */
export type AzureOfferCode = (typeof AzureOfferCode)[keyof typeof AzureOfferCode];

export const AzurePricingTier = {
    Standard: "Standard",
    Basic: "Basic",
} as const;

/**
 * Gets or sets Azure Pricing Tier - Free, Basic, etc.
 */
export type AzurePricingTier = (typeof AzurePricingTier)[keyof typeof AzurePricingTier];

export const AzureReservedInstance = {
    None: "None",
    RI1Year: "RI1Year",
    RI3Year: "RI3Year",
} as const;

/**
 * Reserved instance.
 */
export type AzureReservedInstance = (typeof AzureReservedInstance)[keyof typeof AzureReservedInstance];

export const AzureSecurityOfferingType = {
    NO: "NO",
    MDC: "MDC",
} as const;

/**
 * Gets or sets a value indicating azure security offering type.
 */
export type AzureSecurityOfferingType = (typeof AzureSecurityOfferingType)[keyof typeof AzureSecurityOfferingType];

export const AzureSqlDataBaseType = {
    Unknown: "Unknown",
    Automatic: "Automatic",
    SingleDatabase: "SingleDatabase",
    ElasticPool: "ElasticPool",
} as const;

/**
 * Gets or sets the azure PAAS SQL instance type.
 */
export type AzureSqlDataBaseType = (typeof AzureSqlDataBaseType)[keyof typeof AzureSqlDataBaseType];

export const AzureSqlInstanceType = {
    Unknown: "Unknown",
    Automatic: "Automatic",
    SingleInstance: "SingleInstance",
    InstancePools: "InstancePools",
} as const;

/**
 * Gets or sets the azure PAAS SQL instance type.
 */
export type AzureSqlInstanceType = (typeof AzureSqlInstanceType)[keyof typeof AzureSqlInstanceType];

export const AzureSqlPurchaseModel = {
    Unknown: "Unknown",
    VCore: "VCore",
    DTU: "DTU",
} as const;

/**
 * Gets or sets the azure SQL purchase model.
 */
export type AzureSqlPurchaseModel = (typeof AzureSqlPurchaseModel)[keyof typeof AzureSqlPurchaseModel];

export const AzureSqlServiceTier = {
    Unknown: "Unknown",
    Automatic: "Automatic",
    GeneralPurpose: "GeneralPurpose",
    BusinessCritical: "BusinessCritical",
    HyperScale: "HyperScale",
} as const;

/**
 * Gets or sets the azure SQL service tier.
 */
export type AzureSqlServiceTier = (typeof AzureSqlServiceTier)[keyof typeof AzureSqlServiceTier];

export const AzureStorageRedundancy = {
    Unknown: "Unknown",
    LocallyRedundant: "LocallyRedundant",
    ZoneRedundant: "ZoneRedundant",
    GeoRedundant: "GeoRedundant",
    ReadAccessGeoRedundant: "ReadAccessGeoRedundant",
} as const;

/**
 * Gets or sets the Azure Storage Redundancy. Example: Locally Redundant Storage.
 */
export type AzureStorageRedundancy = (typeof AzureStorageRedundancy)[keyof typeof AzureStorageRedundancy];

export const AzureVmCategory = {
    /**
     * Indicates All categories of VM.
     */
    All: "All",
    /**
     * Compute Optimized.
     */
    ComputeOptimized: "ComputeOptimized",
    /**
     * General Purpose.
     */
    GeneralPurpose: "GeneralPurpose",
    /**
     * GPU Optimized.
     */
    GpuOptimized: "GpuOptimized",
    /**
     * High Performance Compute.
     */
    HighPerformanceCompute: "HighPerformanceCompute",
    /**
     * Memory Optimized.
     */
    MemoryOptimized: "MemoryOptimized",
    /**
     * Storage Optimized.
     */
    StorageOptimized: "StorageOptimized",
    /**
     * Isolated VM.
     */
    Isolated: "Isolated",
} as const;

/**
 * Gets or sets azure VM category.
 */
export type AzureVmCategory = (typeof AzureVmCategory)[keyof typeof AzureVmCategory];

export const AzureVmFamily = {
    Unknown: "Unknown",
    BasicA0A4: "Basic_A0_A4",
    StandardA0A7: "Standard_A0_A7",
    StandardA8A11: "Standard_A8_A11",
    Av2Series: "Av2_series",
    DSeries: "D_series",
    Dv2Series: "Dv2_series",
    DSSeries: "DS_series",
    DSv2Series: "DSv2_series",
    FSeries: "F_series",
    FsSeries: "Fs_series",
    GSeries: "G_series",
    GSSeries: "GS_series",
    HSeries: "H_series",
    LsSeries: "Ls_series",
    Dsv3Series: "Dsv3_series",
    Dv3Series: "Dv3_series",
    Fsv2Series: "Fsv2_series",
    Ev3Series: "Ev3_series",
    Esv3Series: "Esv3_series",
    MSeries: "M_series",
    DCSeries: "DC_Series",
    Lsv2Series: "Lsv2_series",
    Ev4Series: "Ev4_series",
    Esv4Series: "Esv4_series",
    Edv4Series: "Edv4_series",
    Edsv4Series: "Edsv4_series",
    Dv4Series: "Dv4_series",
    Dsv4Series: "Dsv4_series",
    Ddv4Series: "Ddv4_series",
    Ddsv4Series: "Ddsv4_series",
    Easv4Series: "Easv4_series",
    Dasv4Series: "Dasv4_series",
    Mv2Series: "Mv2_series",
    Eav4Series: "Eav4_series",
    Dav4Series: "Dav4_series",
    Msv2Series: "Msv2_series",
    Mdsv2Series: "Mdsv2_series",
    Dv5Series: "Dv5_series",
    Dsv5Series: "Dsv5_series",
    Ddv5Series: "Ddv5_series",
    Ddsv5Series: "Ddsv5_series",
    Dasv5Series: "Dasv5_series",
    Dadsv5Series: "Dadsv5_series",
    Ev5Series: "Ev5_series",
    Esv5Series: "Esv5_series",
    Edv5Series: "Edv5_series",
    Edsv5Series: "Edsv5_series",
    Easv5Series: "Easv5_series",
    Eadsv5Series: "Eadsv5_series",
    Ebsv5Series: "Ebsv5_series",
    Ebdsv5Series: "Ebdsv5_series",
} as const;

export type AzureVmFamily = (typeof AzureVmFamily)[keyof typeof AzureVmFamily];

export const BusinessCaseCurrency = {
    /**
     * Currency Unknown.
     */
    Unknown: "Unknown",
    /**
     * Currency USD.
     */
    USD: "USD",
    /**
     * Currency DKK.
     */
    DKK: "DKK",
    /**
     * Currency CAD.
     */
    CAD: "CAD",
    /**
     * Currency IDR.
     */
    IDR: "IDR",
    /**
     * Currency JPY.
     */
    JPY: "JPY",
    /**
     * Currency KRW.
     */
    KRW: "KRW",
    /**
     * Currency NZD.
     */
    NZD: "NZD",
    /**
     * Currency NOK.
     */
    NOK: "NOK",
    /**
     * Currency RUB.
     */
    RUB: "RUB",
    /**
     * Currency SAR.
     */
    SAR: "SAR",
    /**
     * Currency ZAR.
     */
    ZAR: "ZAR",
    /**
     * Currency SEK.
     */
    SEK: "SEK",
    /**
     * Currency TRY.
     */
    TRY: "TRY",
    /**
     * Currency GBP.
     */
    GBP: "GBP",
    /**
     * Currency MXN.
     */
    MXN: "MXN",
    /**
     * Currency MYR.
     */
    MYR: "MYR",
    /**
     * Currency INR.
     */
    INR: "INR",
    /**
     * Currency HKD.
     */
    HKD: "HKD",
    /**
     * Currency BRL.
     */
    BRL: "BRL",
    /**
     * Currency TWD.
     */
    TWD: "TWD",
    /**
     * Currency EUR.
     */
    EUR: "EUR",
    /**
     * Currency CHF.
     */
    CHF: "CHF",
    /**
     * Currency ARS.
     */
    ARS: "ARS",
    /**
     * Currency AUD.
     */
    AUD: "AUD",
    /**
     * Currency CNY.
     */
    CNY: "CNY",
} as const;

/**
 * Business case Currency.
 */
export type BusinessCaseCurrency = (typeof BusinessCaseCurrency)[keyof typeof BusinessCaseCurrency];

export const ComputeTier = {
    Unknown: "Unknown",
    Automatic: "Automatic",
    Provisioned: "Provisioned",
    Serverless: "Serverless",
} as const;

/**
 * Gets or sets the azure SQL compute tier.
 */
export type ComputeTier = (typeof ComputeTier)[keyof typeof ComputeTier];

export const ConfigurationType = {
    IISConnectionString: "IISConnectionString",
    IISAuthentication: "IISAuthentication",
    ApacheTomcatContextResource: "ApacheTomcatContextResource",
} as const;

/**
 * Gets or sets the configuration type.
 */
export type ConfigurationType = (typeof ConfigurationType)[keyof typeof ConfigurationType];

export const ConsolidationType = {
    /**
     * Full Consolidation.
     */
    Full: "Full",
    /**
     * As On Source or On Premises Consolidation.
     */
    AsOnSource: "AsOnSource",
} as const;

/**
 * Gets or sets consolidation type.
 */
export type ConsolidationType = (typeof ConsolidationType)[keyof typeof ConsolidationType];

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

export const DiscoverySource = {
    /**
     * Unknown Discovery Source.
     */
    Unknown: "Unknown",
    /**
     * Appliance Discovery Source.
     */
    Appliance: "Appliance",
    /**
     * Import Discovery Source.
     */
    Import: "Import",
} as const;

/**
 * Workload discovery source.
 */
export type DiscoverySource = (typeof DiscoverySource)[keyof typeof DiscoverySource];

export const EnvironmentType = {
    Production: "Production",
    Test: "Test",
} as const;

/**
 * Gets or sets user configurable setting to display the environment type.
 */
export type EnvironmentType = (typeof EnvironmentType)[keyof typeof EnvironmentType];

export const ExternalStorageType = {
    /**
     * Indicates un-supported external storage.
     */
    Unknown: "Unknown",
    /**
     * Indicates No external storage.
     */
    None: "None",
    /**
     * ANF external storage with Standard SKU.
     */
    AnfStandard: "AnfStandard",
    /**
     * ANF external storage with Premium SKU.
     */
    AnfPremium: "AnfPremium",
    /**
     * ANF external storage with Ultra SKU.
     */
    AnfUltra: "AnfUltra",
} as const;

/**
 * Different External storage skus.
 */
export type ExternalStorageType = (typeof ExternalStorageType)[keyof typeof ExternalStorageType];

export const FttAndRaidLevel = {
    /**
     * Unknown FTT and RAID Level.
     */
    Unknown: "Unknown",
    /**
     * FTT 1 and RAID Level 1.
     */
    Ftt1Raid1: "Ftt1Raid1",
    /**
     * FTT 1 and RAID Level 5.
     */
    Ftt1Raid5: "Ftt1Raid5",
    /**
     * FTT 2 and RAID Level 1.
     */
    Ftt2Raid1: "Ftt2Raid1",
    /**
     * FTT 2 and RAID Level 6.
     */
    Ftt2Raid6: "Ftt2Raid6",
    /**
     * FTT 3 and RAID Level 1.
     */
    Ftt3Raid1: "Ftt3Raid1",
} as const;

/**
 * FTT and RAID Level.
 */
export type FttAndRaidLevel = (typeof FttAndRaidLevel)[keyof typeof FttAndRaidLevel];

export const GroupType = {
    Default: "Default",
    Import: "Import",
} as const;

/**
 * Gets the group type for the assessment.
 */
export type GroupType = (typeof GroupType)[keyof typeof GroupType];

export const HyperVLicenseType = {
    /**
     * Unknown HyperV License.
     */
    Unknown: "Unknown",
    /**
     * Datacentre HyperV License.
     */
    Datacentre: "Datacentre",
    /**
     * Standard HyperV License.
     */
    Standard: "Standard",
} as const;

/**
 * HyperV licence type.
 */
export type HyperVLicenseType = (typeof HyperVLicenseType)[keyof typeof HyperVLicenseType];

export const LicensingProgram = {
    /**
     * Default value. Indicates Pay As You Go.
     */
    Default: "Default",
    /**
     * Enterprise Agreement.
     */
    EA: "EA",
} as const;

/**
 * Gets or sets licensing program.
 */
export type LicensingProgram = (typeof LicensingProgram)[keyof typeof LicensingProgram];

export const LoadBalancerType = {
    Private: "Private",
    Public: "Public",
} as const;

/**
 * Gets or sets the load balancer type.
 */
export type LoadBalancerType = (typeof LoadBalancerType)[keyof typeof LoadBalancerType];

export const MigrationStrategy = {
    /**
     * Unknown Migration Strategy.
     */
    Unknown: "Unknown",
    /**
     * Optimize for cost.
     */
    OptimizeForCost: "OptimizeForCost",
    /**
     * IaaS only.
     */
    IaaSOnly: "IaaSOnly",
    /**
     * Optimize for PaaS.
     */
    OptimizeForPaas: "OptimizeForPaas",
    /**
     * Avs only.
     */
    AVSOnly: "AVSOnly",
} as const;

/**
 * Migration Strategy.
 */
export type MigrationStrategy = (typeof MigrationStrategy)[keyof typeof MigrationStrategy];

export const MoveType = {
    RegionToRegion: "RegionToRegion",
    RegionToZone: "RegionToZone",
} as const;

/**
 * Defines the MoveType.
 */
export type MoveType = (typeof MoveType)[keyof typeof MoveType];

export const MultiSubnetIntent = {
    None: "None",
    HighAvailability: "HighAvailability",
    DisasterRecovery: "DisasterRecovery",
} as const;

/**
 * Gets or sets user preference indicating intent of multi-subnet configuration.
 */
export type MultiSubnetIntent = (typeof MultiSubnetIntent)[keyof typeof MultiSubnetIntent];

export const OperatingSystemType = {
    Windows: "Windows",
    Linux: "Linux",
} as const;

export type OperatingSystemType = (typeof OperatingSystemType)[keyof typeof OperatingSystemType];

export const OptimizationLogic = {
    MinimizeCost: "MinimizeCost",
    ModernizeToPaaS: "ModernizeToPaaS",
    ModernizeToAzureSqlMi: "ModernizeToAzureSqlMi",
    ModernizeToAzureSqlDb: "ModernizeToAzureSqlDb",
} as const;

/**
 * Gets or sets SQL optimization logic.
 */
export type OptimizationLogic = (typeof OptimizationLogic)[keyof typeof OptimizationLogic];

export const OsLicense = {
    Unknown: "Unknown",
    Yes: "Yes",
    No: "No",
} as const;

/**
 * Gets or sets user configurable setting to display the azure hybrid use benefit.
 */
export type OsLicense = (typeof OsLicense)[keyof typeof OsLicense];

export const Percentile = {
    /**
     * Percentile 50.
     */
    Percentile50: "Percentile50",
    /**
     * Percentile 90.
     */
    Percentile90: "Percentile90",
    /**
     * Percentile 95.
     */
    Percentile95: "Percentile95",
    /**
     * Percentile 99.
     */
    Percentile99: "Percentile99",
} as const;

/**
 * Percentile of the utilization data values to be considered while assessing
 * machines.
 */
export type Percentile = (typeof Percentile)[keyof typeof Percentile];

export const PricingTier = {
    /**
     * Standard Pricing Tier.
     */
    Standard: "Standard",
    /**
     * Free Pricing Tier.
     */
    Free: "Free",
} as const;

/**
 * Gets or sets pricing tier.
 */
export type PricingTier = (typeof PricingTier)[keyof typeof PricingTier];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
} as const;

/**
 * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
 */
export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];

export const ProjectStatus = {
    Active: "Active",
    Inactive: "Inactive",
} as const;

/**
 * Assessment project status.
 */
export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus];

export const ProvisioningState = {
    /**
     * Resource has been created.
     */
    Succeeded: "Succeeded",
    /**
     * Resource creation failed.
     */
    Failed: "Failed",
    /**
     * Resource creation was canceled.
     */
    Canceled: "Canceled",
    /**
     * Resource is being Provisioned.
     */
    Provisioning: "Provisioning",
    /**
     * Resource is being Updated.
     */
    Updating: "Updating",
    /**
     * Resource is being Deleted.
     */
    Deleting: "Deleting",
    /**
     * Resource is being Accepted.
     */
    Accepted: "Accepted",
} as const;

/**
 * The status of the last operation.
 */
export type ProvisioningState = (typeof ProvisioningState)[keyof typeof ProvisioningState];

export const ReservedInstance = {
    None: "None",
    RI1Year: "RI1Year",
    RI3Year: "RI3Year",
} as const;

/**
 * Azure reserved instance.
 */
export type ReservedInstance = (typeof ReservedInstance)[keyof typeof ReservedInstance];

export const ResourceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
} as const;

/**
 * The type of identity used for the resource mover service.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const ResourceIdentityTypes = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
} as const;

export type ResourceIdentityTypes = (typeof ResourceIdentityTypes)[keyof typeof ResourceIdentityTypes];

export const SavingsOption = {
    /**
     * Unknown Savings Option.
     */
    Unknown: "Unknown",
    /**
     * Reserved Instance 3 Year.
     */
    RI3Year: "RI3Year",
    /**
     * Azure Savings Plan 3 Year.
     */
    SavingsPlan3Year: "SavingsPlan3Year",
} as const;

/**
 * Gets the business case savings option type.
 */
export type SavingsOption = (typeof SavingsOption)[keyof typeof SavingsOption];

export const SavingsOptions = {
    /**
     * Savings Options is not applicable.
     */
    None: "None",
    /**
     * One Year Savings Plan.
     */
    OneYearSavings: "OneYearSavings",
    /**
     * Three Years Savings Plan.
     */
    ThreeYearsSavings: "ThreeYearsSavings",
    /**
     * One Year Reserved Instances.
     */
    OneYearReserved: "OneYearReserved",
    /**
     * Three Years Reserved Instances.
     */
    ThreeYearsReserved: "ThreeYearsReserved",
} as const;

/**
 * Gets or sets savings options.
 */
export type SavingsOptions = (typeof SavingsOptions)[keyof typeof SavingsOptions];

export const SecretStoreType = {
    None: "None",
    KubeSecret: "KubeSecret",
    KeyVaultSecret: "KeyVaultSecret",
    AppServiceAppSettings: "AppServiceAppSettings",
} as const;

export type SecretStoreType = (typeof SecretStoreType)[keyof typeof SecretStoreType];

export const SqlServerLicense = {
    Unknown: "Unknown",
    Yes: "Yes",
    No: "No",
} as const;

/**
 * SQL server license.
 */
export type SqlServerLicense = (typeof SqlServerLicense)[keyof typeof SqlServerLicense];

export const SqlServerLicenseType = {
    /**
     * Unknown Sql Server License.
     */
    Unknown: "Unknown",
    /**
     * Enterprise Sql Server License.
     */
    Enterprise: "Enterprise",
    /**
     * Standard Sql Server License.
     */
    Standard: "Standard",
} as const;

/**
 * SQL Server version.
 */
export type SqlServerLicenseType = (typeof SqlServerLicenseType)[keyof typeof SqlServerLicenseType];

export const Status = {
    Approved: "Approved",
    Pending: "Pending",
    Rejected: "Rejected",
    Disconnected: "Disconnected",
} as const;

/**
 * Private link connection state.
 */
export type Status = (typeof Status)[keyof typeof Status];

export const TargetAvailabilityZone = {
    One: "1",
    Two: "2",
    Three: "3",
    NA: "NA",
} as const;

/**
 * Gets or sets the target availability zone.
 */
export type TargetAvailabilityZone = (typeof TargetAvailabilityZone)[keyof typeof TargetAvailabilityZone];

export const TargetHydrationStorageProviderType = {
    AzureFileShare: "AzureFileShare",
} as const;

/**
 * Gets or sets the storage provider type on the target.
 * Applicable when StorageProjectionType is not ContainerFileSystem.
 */
export type TargetHydrationStorageProviderType = (typeof TargetHydrationStorageProviderType)[keyof typeof TargetHydrationStorageProviderType];

export const TargetStorageAccessType = {
    Shared: "Shared",
    Exclusive: "Exclusive",
} as const;

/**
 * Gets or sets the target storage access type.
 */
export type TargetStorageAccessType = (typeof TargetStorageAccessType)[keyof typeof TargetStorageAccessType];

export const TargetStorageProjectionType = {
    ContainerFileSystem: "ContainerFileSystem",
    PersistentVolume: "PersistentVolume",
} as const;

/**
 * Gets or sets the target projection type.
 */
export type TargetStorageProjectionType = (typeof TargetStorageProjectionType)[keyof typeof TargetStorageProjectionType];

export const TimeRange = {
    /**
     * Daily.
     */
    Day: "Day",
    /**
     * Weekly.
     */
    Week: "Week",
    /**
     * Monthly.
     */
    Month: "Month",
    /**
     * Custom Time Range.
     */
    Custom: "Custom",
} as const;

/**
 * Time Range for which the historic utilization data should be considered for
 * assessment.
 */
export type TimeRange = (typeof TimeRange)[keyof typeof TimeRange];

export const WorkloadDeploymentTarget = {
    AzureKubernetesService: "AzureKubernetesService",
    AzureAppServiceContainer: "AzureAppServiceContainer",
    AzureAppServiceNative: "AzureAppServiceNative",
} as const;

/**
 * Gets or sets the deployment target platform.
 */
export type WorkloadDeploymentTarget = (typeof WorkloadDeploymentTarget)[keyof typeof WorkloadDeploymentTarget];

export const WorkloadDeploymentType = {
    IISAKSWorkloadDeployment: "IISAKSWorkloadDeployment",
    ApacheTomcatAKSWorkloadDeployment: "ApacheTomcatAKSWorkloadDeployment",
} as const;

/**
 * Gets or sets the instance type.
 */
export type WorkloadDeploymentType = (typeof WorkloadDeploymentType)[keyof typeof WorkloadDeploymentType];

export const WorkloadType = {
    IISWorkload: "IISWorkload",
    ApacheTomcatWorkload: "ApacheTomcatWorkload",
} as const;

/**
 * Gets or sets the instance type.
 */
export type WorkloadType = (typeof WorkloadType)[keyof typeof WorkloadType];

export const ZoneRedundant = {
    Enable: "Enable",
    Disable: "Disable",
} as const;

/**
 * Defines the zone redundant resource setting.
 */
export type ZoneRedundant = (typeof ZoneRedundant)[keyof typeof ZoneRedundant];
