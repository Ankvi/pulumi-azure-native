export const AdministratorType = {
    ActiveDirectory: "ActiveDirectory",
} as const;

export type AdministratorType = (typeof AdministratorType)[keyof typeof AdministratorType];

export const AutoExecuteStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
    Default: "Default",
} as const;

export type AutoExecuteStatus = (typeof AutoExecuteStatus)[keyof typeof AutoExecuteStatus];

export const CreateMode = {
    Copy: "Copy",
    Default: "Default",
    NonReadableSecondary: "NonReadableSecondary",
    OnlineSecondary: "OnlineSecondary",
    PointInTimeRestore: "PointInTimeRestore",
    Recovery: "Recovery",
    Restore: "Restore",
    RestoreLongTermRetentionBackup: "RestoreLongTermRetentionBackup",
} as const;

export type CreateMode = (typeof CreateMode)[keyof typeof CreateMode];

export const DatabaseEdition = {
    Web: "Web",
    Business: "Business",
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
    PremiumRS: "PremiumRS",
    Free: "Free",
    Stretch: "Stretch",
    DataWarehouse: "DataWarehouse",
    System: "System",
    System2: "System2",
    GeneralPurpose: "GeneralPurpose",
    BusinessCritical: "BusinessCritical",
    Hyperscale: "Hyperscale",
} as const;

export type DatabaseEdition = (typeof DatabaseEdition)[keyof typeof DatabaseEdition];

export const ElasticPoolEdition = {
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
    GeneralPurpose: "GeneralPurpose",
    BusinessCritical: "BusinessCritical",
} as const;

export type ElasticPoolEdition = (typeof ElasticPoolEdition)[keyof typeof ElasticPoolEdition];

export const ReadScale = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type ReadScale = (typeof ReadScale)[keyof typeof ReadScale];

export const SampleName = {
    AdventureWorksLT: "AdventureWorksLT",
} as const;

export type SampleName = (typeof SampleName)[keyof typeof SampleName];

export const SecurityAlertPolicyEmailAccountAdmins = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type SecurityAlertPolicyEmailAccountAdmins = (typeof SecurityAlertPolicyEmailAccountAdmins)[keyof typeof SecurityAlertPolicyEmailAccountAdmins];

export const SecurityAlertPolicyState = {
    New: "New",
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type SecurityAlertPolicyState = (typeof SecurityAlertPolicyState)[keyof typeof SecurityAlertPolicyState];

export const SecurityAlertPolicyUseServerDefault = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type SecurityAlertPolicyUseServerDefault = (typeof SecurityAlertPolicyUseServerDefault)[keyof typeof SecurityAlertPolicyUseServerDefault];

export const ServerVersion = {
    ServerVersion_2_0: "2.0",
    ServerVersion_12_0: "12.0",
} as const;

export type ServerVersion = (typeof ServerVersion)[keyof typeof ServerVersion];

export const ServiceObjectiveName = {
    System: "System",
    System0: "System0",
    System1: "System1",
    System2: "System2",
    System3: "System3",
    System4: "System4",
    System2L: "System2L",
    System3L: "System3L",
    System4L: "System4L",
    Free: "Free",
    Basic: "Basic",
    S0: "S0",
    S1: "S1",
    S2: "S2",
    S3: "S3",
    S4: "S4",
    S6: "S6",
    S7: "S7",
    S9: "S9",
    S12: "S12",
    P1: "P1",
    P2: "P2",
    P3: "P3",
    P4: "P4",
    P6: "P6",
    P11: "P11",
    P15: "P15",
    PRS1: "PRS1",
    PRS2: "PRS2",
    PRS4: "PRS4",
    PRS6: "PRS6",
    DW100: "DW100",
    DW200: "DW200",
    DW300: "DW300",
    DW400: "DW400",
    DW500: "DW500",
    DW600: "DW600",
    DW1000: "DW1000",
    DW1200: "DW1200",
    DW1000c: "DW1000c",
    DW1500: "DW1500",
    DW1500c: "DW1500c",
    DW2000: "DW2000",
    DW2000c: "DW2000c",
    DW3000: "DW3000",
    DW2500c: "DW2500c",
    DW3000c: "DW3000c",
    DW6000: "DW6000",
    DW5000c: "DW5000c",
    DW6000c: "DW6000c",
    DW7500c: "DW7500c",
    DW10000c: "DW10000c",
    DW15000c: "DW15000c",
    DW30000c: "DW30000c",
    DS100: "DS100",
    DS200: "DS200",
    DS300: "DS300",
    DS400: "DS400",
    DS500: "DS500",
    DS600: "DS600",
    DS1000: "DS1000",
    DS1200: "DS1200",
    DS1500: "DS1500",
    DS2000: "DS2000",
    ElasticPool: "ElasticPool",
} as const;

export type ServiceObjectiveName = (typeof ServiceObjectiveName)[keyof typeof ServiceObjectiveName];

export const TransparentDataEncryptionStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type TransparentDataEncryptionStatus = (typeof TransparentDataEncryptionStatus)[keyof typeof TransparentDataEncryptionStatus];
