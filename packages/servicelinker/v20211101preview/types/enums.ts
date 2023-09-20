export const AuthType = {
    SystemAssignedIdentity: "systemAssignedIdentity",
    UserAssignedIdentity: "userAssignedIdentity",
    ServicePrincipalSecret: "servicePrincipalSecret",
    ServicePrincipalCertificate: "servicePrincipalCertificate",
    Secret: "secret",
} as const;

export type AuthType = (typeof AuthType)[keyof typeof AuthType];

export const ClientType = {
    None: "none",
    Dotnet: "dotnet",
    Java: "java",
    Python: "python",
    Go: "go",
    Php: "php",
    Ruby: "ruby",
    Django: "django",
    Nodejs: "nodejs",
    SpringBoot: "springBoot",
} as const;

export type ClientType = (typeof ClientType)[keyof typeof ClientType];

export const VNetSolutionType = {
    ServiceEndpoint: "serviceEndpoint",
    PrivateLink: "privateLink",
} as const;

export type VNetSolutionType = (typeof VNetSolutionType)[keyof typeof VNetSolutionType];