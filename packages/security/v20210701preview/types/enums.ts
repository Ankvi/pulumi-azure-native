export const CloudName = {
    Azure: "Azure",
    AWS: "AWS",
    GCP: "GCP",
} as const;

export type CloudName = (typeof CloudName)[keyof typeof CloudName];

export const OfferingType = {
    CspmMonitorAws: "CspmMonitorAws",
    DefenderForContainersAws: "DefenderForContainersAws",
    DefenderForServersAws: "DefenderForServersAws",
    InformationProtectionAws: "InformationProtectionAws",
} as const;

export type OfferingType = (typeof OfferingType)[keyof typeof OfferingType];

export const OrganizationMembershipType = {
    Member: "Member",
    Organization: "Organization",
} as const;

export type OrganizationMembershipType = (typeof OrganizationMembershipType)[keyof typeof OrganizationMembershipType];

export const SeverityEnum = {
    High: "High",
    Medium: "Medium",
    Low: "Low",
} as const;

export type SeverityEnum = (typeof SeverityEnum)[keyof typeof SeverityEnum];

export const SupportedCloudEnum = {
    AWS: "AWS",
    GCP: "GCP",
} as const;

export type SupportedCloudEnum = (typeof SupportedCloudEnum)[keyof typeof SupportedCloudEnum];