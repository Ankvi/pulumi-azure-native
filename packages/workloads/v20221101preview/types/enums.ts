export const SAPDatabaseScaleMethod = {
    ScaleUp: "ScaleUp",
} as const;

/**
 * The DB scale method.
 */
export type SAPDatabaseScaleMethod = (typeof SAPDatabaseScaleMethod)[keyof typeof SAPDatabaseScaleMethod];

export const SAPDatabaseType = {
    HANA: "HANA",
    DB2: "DB2",
} as const;

/**
 * The database type. Eg: HANA, DB2, etc
 */
export type SAPDatabaseType = (typeof SAPDatabaseType)[keyof typeof SAPDatabaseType];

export const SAPDeploymentType = {
    SingleServer: "SingleServer",
    ThreeTier: "ThreeTier",
} as const;

/**
 * The deployment type. Eg: SingleServer/ThreeTier
 */
export type SAPDeploymentType = (typeof SAPDeploymentType)[keyof typeof SAPDeploymentType];

export const SAPEnvironmentType = {
    NonProd: "NonProd",
    Prod: "Prod",
} as const;

/**
 * Defines the environment type - Production/Non Production.
 */
export type SAPEnvironmentType = (typeof SAPEnvironmentType)[keyof typeof SAPEnvironmentType];

export const SAPHighAvailabilityType = {
    AvailabilitySet: "AvailabilitySet",
    AvailabilityZone: "AvailabilityZone",
} as const;

/**
 * The high availability type.
 */
export type SAPHighAvailabilityType = (typeof SAPHighAvailabilityType)[keyof typeof SAPHighAvailabilityType];

export const SAPProductType = {
    ECC: "ECC",
    S4HANA: "S4HANA",
    Other: "Other",
} as const;

/**
 * Defines the SAP Product type.
 */
export type SAPProductType = (typeof SAPProductType)[keyof typeof SAPProductType];
