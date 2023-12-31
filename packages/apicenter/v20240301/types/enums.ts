export const ApiKind = {
    Rest: "rest",
    Graphql: "graphql",
    Grpc: "grpc",
    Soap: "soap",
    Webhook: "webhook",
    Websocket: "websocket",
} as const;

/**
 * Kind of API. For example, REST or GraphQL.
 */
export type ApiKind = (typeof ApiKind)[keyof typeof ApiKind];

export const DeploymentState = {
    Active: "active",
    Inactive: "inactive",
} as const;

/**
 * State of API deployment.
 */
export type DeploymentState = (typeof DeploymentState)[keyof typeof DeploymentState];

export const EnvironmentKind = {
    Development: "development",
    Testing: "testing",
    Staging: "staging",
    Production: "production",
} as const;

/**
 * Environment kind.
 */
export type EnvironmentKind = (typeof EnvironmentKind)[keyof typeof EnvironmentKind];

export const EnvironmentServerType = {
    Azure_API_Management: "Azure API Management",
    Azure_compute_service: "Azure compute service",
    Apigee_API_Management: "Apigee API Management",
    AWS_API_Gateway: "AWS API Gateway",
    Kong_API_Gateway: "Kong API Gateway",
    Kubernetes: "Kubernetes",
    MuleSoft_API_Management: "MuleSoft API Management",
} as const;

/**
 * Type of the server that represents the environment.
 */
export type EnvironmentServerType = (typeof EnvironmentServerType)[keyof typeof EnvironmentServerType];

export const LifecycleStage = {
    Design: "design",
    Development: "development",
    Testing: "testing",
    Preview: "preview",
    Production: "production",
    Deprecated: "deprecated",
    Retired: "retired",
} as const;

/**
 * Current lifecycle stage of the API.
 */
export type LifecycleStage = (typeof LifecycleStage)[keyof typeof LifecycleStage];

export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

/**
 * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
 */
export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const MetadataAssignmentEntity = {
    Api: "api",
    Deployment: "deployment",
    Environment: "environment",
} as const;

/**
 * The entities this metadata schema component gets applied to.
 */
export type MetadataAssignmentEntity = (typeof MetadataAssignmentEntity)[keyof typeof MetadataAssignmentEntity];
