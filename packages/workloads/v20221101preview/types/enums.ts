export const SAPDatabaseScaleMethod = {
    ScaleUp: "ScaleUp",
} as const;

export type SAPDatabaseScaleMethod = (typeof SAPDatabaseScaleMethod)[keyof typeof SAPDatabaseScaleMethod];

export const SAPDatabaseType = {
    HANA: "HANA",
    DB2: "DB2",
} as const;

export type SAPDatabaseType = (typeof SAPDatabaseType)[keyof typeof SAPDatabaseType];

export const SAPDeploymentType = {
    SingleServer: "SingleServer",
    ThreeTier: "ThreeTier",
} as const;

export type SAPDeploymentType = (typeof SAPDeploymentType)[keyof typeof SAPDeploymentType];

export const SAPEnvironmentType = {
    NonProd: "NonProd",
    Prod: "Prod",
} as const;

export type SAPEnvironmentType = (typeof SAPEnvironmentType)[keyof typeof SAPEnvironmentType];

export const SAPHighAvailabilityType = {
    AvailabilitySet: "AvailabilitySet",
    AvailabilityZone: "AvailabilityZone",
} as const;

export type SAPHighAvailabilityType = (typeof SAPHighAvailabilityType)[keyof typeof SAPHighAvailabilityType];

export const SAPProductType = {
    ECC: "ECC",
    S4HANA: "S4HANA",
    Other: "Other",
} as const;

export type SAPProductType = (typeof SAPProductType)[keyof typeof SAPProductType];
