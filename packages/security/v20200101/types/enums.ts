export const AssessmentStatusCode = {
    /**
     * The resource is healthy
     */
    Healthy: "Healthy",
    /**
     * The resource has a security issue that needs to be addressed
     */
    Unhealthy: "Unhealthy",
    /**
     * Assessment for this resource did not happen
     */
    NotApplicable: "NotApplicable",
} as const;

/**
 * Programmatic code for the status of the assessment
 */
export type AssessmentStatusCode = (typeof AssessmentStatusCode)[keyof typeof AssessmentStatusCode];

export const AssessmentType = {
    /**
     * Microsoft Defender for Cloud managed assessments
     */
    BuiltIn: "BuiltIn",
    /**
     * User defined policies that are automatically ingested from Azure Policy to Microsoft Defender for Cloud
     */
    CustomPolicy: "CustomPolicy",
    /**
     * User assessments pushed directly by the user or other third party to Microsoft Defender for Cloud
     */
    CustomerManaged: "CustomerManaged",
    /**
     * An assessment that was created by a verified 3rd party if the user connected it to ASC
     */
    VerifiedPartner: "VerifiedPartner",
} as const;

/**
 * BuiltIn if the assessment based on built-in Azure Policy definition, Custom if the assessment based on custom Azure Policy definition
 */
export type AssessmentType = (typeof AssessmentType)[keyof typeof AssessmentType];

export const Categories = {
    Compute: "Compute",
    Networking: "Networking",
    Data: "Data",
    IdentityAndAccess: "IdentityAndAccess",
    IoT: "IoT",
} as const;

/**
 * The categories of resource that is at risk when the assessment is unhealthy
 */
export type Categories = (typeof Categories)[keyof typeof Categories];

export const ImplementationEffort = {
    Low: "Low",
    Moderate: "Moderate",
    High: "High",
} as const;

/**
 * The implementation effort required to remediate this assessment
 */
export type ImplementationEffort = (typeof ImplementationEffort)[keyof typeof ImplementationEffort];

export const Protocol = {
    TCP: "TCP",
    UDP: "UDP",
    All: "*",
} as const;

export type Protocol = (typeof Protocol)[keyof typeof Protocol];

export const Severity = {
    Low: "Low",
    Medium: "Medium",
    High: "High",
} as const;

/**
 * The severity level of the assessment
 */
export type Severity = (typeof Severity)[keyof typeof Severity];

export const Source = {
    /**
     * Resource is in Azure
     */
    Azure: "Azure",
    /**
     * Resource in an on premise machine connected to Azure cloud
     */
    OnPremise: "OnPremise",
    /**
     * SQL Resource in an on premise machine connected to Azure cloud
     */
    OnPremiseSql: "OnPremiseSql",
} as const;

/**
 * The platform where the assessed resource resides
 */
export type Source = (typeof Source)[keyof typeof Source];

export const Status = {
    Revoked: "Revoked",
    Initiated: "Initiated",
} as const;

/**
 * The status of the port
 */
export type Status = (typeof Status)[keyof typeof Status];

export const StatusReason = {
    Expired: "Expired",
    UserRequested: "UserRequested",
    NewerRequestInitiated: "NewerRequestInitiated",
} as const;

/**
 * A description of why the `status` has its value
 */
export type StatusReason = (typeof StatusReason)[keyof typeof StatusReason];

export const Threats = {
    AccountBreach: "accountBreach",
    DataExfiltration: "dataExfiltration",
    DataSpillage: "dataSpillage",
    MaliciousInsider: "maliciousInsider",
    ElevationOfPrivilege: "elevationOfPrivilege",
    ThreatResistance: "threatResistance",
    MissingCoverage: "missingCoverage",
    DenialOfService: "denialOfService",
} as const;

/**
 * Threats impact of the assessment
 */
export type Threats = (typeof Threats)[keyof typeof Threats];

export const UserImpact = {
    Low: "Low",
    Moderate: "Moderate",
    High: "High",
} as const;

/**
 * The user impact of the assessment
 */
export type UserImpact = (typeof UserImpact)[keyof typeof UserImpact];
