export const ActionType = {
    LogicApp: "LogicApp",
    EventHub: "EventHub",
    Workspace: "Workspace",
} as const;

export type ActionType = (typeof ActionType)[keyof typeof ActionType];

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
} as const;

export type AssessmentType = (typeof AssessmentType)[keyof typeof AssessmentType];

export const Categories = {
    Compute: "Compute",
    Networking: "Networking",
    Data: "Data",
    IdentityAndAccess: "IdentityAndAccess",
    IoT: "IoT",
} as const;

export type Categories = (typeof Categories)[keyof typeof Categories];

export const EventSource = {
    Assessments: "Assessments",
    AssessmentsSnapshot: "AssessmentsSnapshot",
    SubAssessments: "SubAssessments",
    SubAssessmentsSnapshot: "SubAssessmentsSnapshot",
    Alerts: "Alerts",
    SecureScores: "SecureScores",
    SecureScoresSnapshot: "SecureScoresSnapshot",
    SecureScoreControls: "SecureScoreControls",
    SecureScoreControlsSnapshot: "SecureScoreControlsSnapshot",
    RegulatoryComplianceAssessment: "RegulatoryComplianceAssessment",
    RegulatoryComplianceAssessmentSnapshot: "RegulatoryComplianceAssessmentSnapshot",
} as const;

export type EventSource = (typeof EventSource)[keyof typeof EventSource];

export const ImplementationEffort = {
    Low: "Low",
    Moderate: "Moderate",
    High: "High",
} as const;

export type ImplementationEffort = (typeof ImplementationEffort)[keyof typeof ImplementationEffort];

export const Operator = {
    /**
     * Applies for decimal and non-decimal operands
     */
    Equals: "Equals",
    /**
     * Applies only for decimal operands
     */
    GreaterThan: "GreaterThan",
    /**
     * Applies only for decimal operands
     */
    GreaterThanOrEqualTo: "GreaterThanOrEqualTo",
    /**
     * Applies only for decimal operands
     */
    LesserThan: "LesserThan",
    /**
     * Applies only for decimal operands
     */
    LesserThanOrEqualTo: "LesserThanOrEqualTo",
    /**
     * Applies  for decimal and non-decimal operands
     */
    NotEquals: "NotEquals",
    /**
     * Applies only for non-decimal operands
     */
    Contains: "Contains",
    /**
     * Applies only for non-decimal operands
     */
    StartsWith: "StartsWith",
    /**
     * Applies only for non-decimal operands
     */
    EndsWith: "EndsWith",
} as const;

export type Operator = (typeof Operator)[keyof typeof Operator];

export const PropertyType = {
    String: "String",
    Integer: "Integer",
    Number: "Number",
    Boolean: "Boolean",
} as const;

export type PropertyType = (typeof PropertyType)[keyof typeof PropertyType];

export const RuleState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
    Expired: "Expired",
} as const;

export type RuleState = (typeof RuleState)[keyof typeof RuleState];

export const Severity = {
    Low: "Low",
    Medium: "Medium",
    High: "High",
} as const;

export type Severity = (typeof Severity)[keyof typeof Severity];

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

export type Threats = (typeof Threats)[keyof typeof Threats];

export const UserImpact = {
    Low: "Low",
    Moderate: "Moderate",
    High: "High",
} as const;

export type UserImpact = (typeof UserImpact)[keyof typeof UserImpact];