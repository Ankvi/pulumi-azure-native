export const CloudName = {
    Azure: "Azure",
    AWS: "AWS",
    GCP: "GCP",
    Github: "Github",
    AzureDevOps: "AzureDevOps",
    GitLab: "GitLab",
} as const;

export type CloudName = (typeof CloudName)[keyof typeof CloudName];

export const EnvironmentType = {
    AwsAccount: "AwsAccount",
    GcpProject: "GcpProject",
    GithubScope: "GithubScope",
    AzureDevOpsScope: "AzureDevOpsScope",
    GitlabScope: "GitlabScope",
} as const;

export type EnvironmentType = (typeof EnvironmentType)[keyof typeof EnvironmentType];

export const OfferingType = {
    CspmMonitorAws: "CspmMonitorAws",
    DefenderForContainersAws: "DefenderForContainersAws",
    DefenderForServersAws: "DefenderForServersAws",
    DefenderForDatabasesAws: "DefenderForDatabasesAws",
    InformationProtectionAws: "InformationProtectionAws",
    CspmMonitorGcp: "CspmMonitorGcp",
    CspmMonitorGithub: "CspmMonitorGithub",
    CspmMonitorAzureDevOps: "CspmMonitorAzureDevOps",
    DefenderForServersGcp: "DefenderForServersGcp",
    DefenderForContainersGcp: "DefenderForContainersGcp",
    DefenderForDatabasesGcp: "DefenderForDatabasesGcp",
    DefenderCspmAws: "DefenderCspmAws",
    DefenderCspmGcp: "DefenderCspmGcp",
    DefenderForDevOpsGithub: "DefenderForDevOpsGithub",
    DefenderForDevOpsAzureDevOps: "DefenderForDevOpsAzureDevOps",
    CspmMonitorGitLab: "CspmMonitorGitLab",
    DefenderForDevOpsGitLab: "DefenderForDevOpsGitLab",
} as const;

export type OfferingType = (typeof OfferingType)[keyof typeof OfferingType];

export const OrganizationMembershipType = {
    Member: "Member",
    Organization: "Organization",
} as const;

export type OrganizationMembershipType = (typeof OrganizationMembershipType)[keyof typeof OrganizationMembershipType];

export const ScanningMode = {
    Default: "Default",
} as const;

export type ScanningMode = (typeof ScanningMode)[keyof typeof ScanningMode];

export const SubPlan = {
    P1: "P1",
    P2: "P2",
} as const;

export type SubPlan = (typeof SubPlan)[keyof typeof SubPlan];

export const Type = {
    Qualys: "Qualys",
    TVM: "TVM",
} as const;

export type Type = (typeof Type)[keyof typeof Type];
