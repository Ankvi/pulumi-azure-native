export const AuthType = {
    SystemAssignedIdentity: "systemAssignedIdentity",
    UserAssignedIdentity: "userAssignedIdentity",
    ServicePrincipalSecret: "servicePrincipalSecret",
    ServicePrincipalCertificate: "servicePrincipalCertificate",
    Secret: "secret",
} as const;

/**
 * The authentication type.
 */
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

/**
 * The application client type
 */
export type ClientType = (typeof ClientType)[keyof typeof ClientType];

export const VNetSolutionType = {
    ServiceEndpoint: "serviceEndpoint",
    PrivateLink: "privateLink",
} as const;

/**
 * Type of VNet solution.
 */
export type VNetSolutionType = (typeof VNetSolutionType)[keyof typeof VNetSolutionType];
